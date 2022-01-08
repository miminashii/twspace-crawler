import { EventEmitter } from 'stream'
import winston from 'winston'
import { TwitterApi } from '../apis/TwitterApi'
import { TWITTER_API_LIST_SIZE, TWITTER_AUTHORIZATION, TWITTER_USER_FETCH_INTERVAL } from '../constants/twitter.constant'
import { twitterApiLimiter } from '../Limiter'
import { logger as baseLogger } from '../logger'
import { Util } from '../utils/Util'
import { configManager } from './ConfigManager'

interface User {
  id: string
  username: string
}

class UserManager extends EventEmitter {
  public users: User[] = []

  private logger: winston.Logger

  constructor() {
    super()
    this.logger = baseLogger.child({ label: '[UserManager]' })
  }

  public getUserById(id: string) {
    const user = this.users.find((v) => v.id === id)
    return user
  }

  public getUserByUsername(username: string) {
    const user = this.users.find((v) => v.username.toLowerCase() === username.toLowerCase())
    return user
  }

  public getUserWithoutId() {
    const users = this.users.filter((v) => !v.id)
    return users
  }

  public async add(usernames: string[]) {
    this.logger.debug('add', { usernames })
    usernames.forEach((username) => {
      if (this.getUserByUsername(username)) {
        return
      }
      this.users.push({ id: null, username })
    })
    await this.fetchUsers()
  }

  private updateUser(user: User) {
    const tmpUser = this.getUserByUsername(user.username)
    if (!tmpUser) {
      return
    }
    Object.assign(tmpUser, user)
  }

  private async fetchUsers() {
    try {
      if (Util.getTwitterAuthorization()) {
        await this.fetchUsersByLoopup()
      } else {
        await this.fetchUsersByScreenName()
      }
    } catch (error) {
      this.logger.error(`fetchUsers: ${error.message}`)
    }
    const users = this.getUserWithoutId()
    if (users.length) {
      this.logger.warn(`fetchUsers: Found some users without id. Retry in ${TWITTER_USER_FETCH_INTERVAL}ms`, { usernames: users.map((v) => v.username) })
      setTimeout(() => this.fetchUsers(), TWITTER_USER_FETCH_INTERVAL)
    }
  }

  private async fetchUsersByLoopup() {
    this.logger.debug('--> fetchUsersByLoopup')
    const chunks = Util.splitArrayIntoChunk(
      this.getUserWithoutId().map((v) => v.username),
      TWITTER_API_LIST_SIZE,
    )
    const responses = await Promise.allSettled(
      chunks.map((usernames, i) => twitterApiLimiter.schedule(async () => {
        this.logger.debug(`--> getUsersLookup #${i + 1}`, { usernames })
        const users = await TwitterApi.getUsersLookup(
          usernames,
          { authorization: Util.getTwitterAuthorization() },
        )
        this.logger.debug(`<-- getUsersLookup #${i + 1}`, { usernames })
        return Promise.resolve(users)
      })),
    )
    responses.forEach((response) => {
      if (response.status !== 'fulfilled') {
        return
      }
      response.value.forEach((v) => {
        this.updateUser({
          id: v.id_str,
          username: v.screen_name,
        })
      })
    })
    this.logger.debug('<-- fetchUsersByLoopup')
  }

  private async fetchUsersByScreenName() {
    this.logger.debug('--> fetchUsersByScreenName')
    await configManager.getGuestToken()
    const responses = await Promise.allSettled(
      this.getUserWithoutId().map((v, i) => twitterApiLimiter.schedule(async () => {
        this.logger.debug(`--> getUserByScreenName #${i + 1}`, { username: v.username })
        const user = await TwitterApi.getUserByScreenName(v.username, {
          authorization: TWITTER_AUTHORIZATION,
          'x-guest-token': configManager.guestToken,
        })
        this.logger.debug(`<-- getUserByScreenName #${i + 1}`, { username: v.username })
        return Promise.resolve(user)
      })),
    )
    responses.forEach((response) => {
      if (response.status !== 'fulfilled') {
        return
      }
      const { result } = response.value.data.user
      this.updateUser({
        id: result.rest_id,
        username: result.legacy.screen_name,
      })
    })
    this.logger.debug('<-- fetchUsersByScreenName')
  }
}

export const userManager = new UserManager()