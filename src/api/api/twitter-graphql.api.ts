/* eslint-disable camelcase */

import { TwitterBaseApi } from '../base/twitter-base.api'

export class TwitterGraphqlApi extends TwitterBaseApi {
  // #region User

  public async UserByRestId(userId: string) {
    const queryId = 'Lxg1V9AiIzzXEiP2c8dRnw'
    const operationName = 'UserByRestId'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          userId,
          withSafetyModeUserFields: true,
        },
        features: {
          hidden_profile_likes_enabled: false,
          responsive_web_graphql_exclude_directive_enabled: true,
          verified_phone_label_enabled: false,
          subscriptions_verification_info_verified_since_enabled: true,
          highlights_tweets_tab_ui_enabled: true,
          creator_subscriptions_tweet_preview_api_enabled: true,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
          responsive_web_graphql_timeline_navigation_enabled: true,
        },
      },
    })
    return res
  }

  public async UserByScreenName(username: string) {
    const queryId = 'oUZZZ8Oddwxs8Cd3iW3UEA'
    const operationName = 'UserByScreenName'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          screen_name: username,
          withSafetyModeUserFields: true,
        },
        features: {
          hidden_profile_likes_enabled: false,
          responsive_web_graphql_exclude_directive_enabled: true,
          verified_phone_label_enabled: false,
          subscriptions_verification_info_verified_since_enabled: true,
          highlights_tweets_tab_ui_enabled: true,
          creator_subscriptions_tweet_preview_api_enabled: true,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
          responsive_web_graphql_timeline_navigation_enabled: true,
        },
      },
    })
    return res
  }

  public async UserTweets(userId: string, count = 20) {
    const queryId = 'rIIwMe1ObkGh_ByBtTCtRQ'
    const operationName = 'UserTweets'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          userId,
          count,
          includePromotedContent: true,
          withQuickPromoteEligibilityTweetFields: true,
          withVoice: true,
          withV2Timeline: true,
        },
        features: {
          rweb_lists_timeline_redesign_enabled: true,
          responsive_web_graphql_exclude_directive_enabled: true,
          verified_phone_label_enabled: false,
          creator_subscriptions_tweet_preview_api_enabled: true,
          responsive_web_graphql_timeline_navigation_enabled: true,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
          tweetypie_unmention_optimization_enabled: true,
          responsive_web_edit_tweet_api_enabled: true,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
          view_counts_everywhere_api_enabled: true,
          longform_notetweets_consumption_enabled: true,
          responsive_web_twitter_article_tweet_consumption_enabled: false,
          tweet_awards_web_tipping_enabled: false,
          freedom_of_speech_not_reach_fetch_enabled: true,
          standardized_nudges_misinfo: true,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
          longform_notetweets_rich_text_read_enabled: true,
          longform_notetweets_inline_media_enabled: true,
          responsive_web_media_download_video_enabled: false,
          responsive_web_enhance_cards_enabled: false,
        },
        fieldToggles: {
          withArticleRichContentState: false,
        },
      },
    })
    return res
  }

  public async UserTweetsAndReplies(userId: string, count = 20) {
    const queryId = 'U21eghOo40F4jvBsSyMrsQ'
    const operationName = 'UserTweetsAndReplies'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          userId,
          count,
          includePromotedContent: true,
          withCommunity: true,
          withVoice: true,
          withV2Timeline: true,
        },
        features: {
          rweb_lists_timeline_redesign_enabled: true,
          responsive_web_graphql_exclude_directive_enabled: true,
          verified_phone_label_enabled: false,
          creator_subscriptions_tweet_preview_api_enabled: true,
          responsive_web_graphql_timeline_navigation_enabled: true,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
          tweetypie_unmention_optimization_enabled: true,
          responsive_web_edit_tweet_api_enabled: true,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
          view_counts_everywhere_api_enabled: true,
          longform_notetweets_consumption_enabled: true,
          responsive_web_twitter_article_tweet_consumption_enabled: false,
          tweet_awards_web_tipping_enabled: false,
          freedom_of_speech_not_reach_fetch_enabled: true,
          standardized_nudges_misinfo: true,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
          longform_notetweets_rich_text_read_enabled: true,
          longform_notetweets_inline_media_enabled: true,
          responsive_web_media_download_video_enabled: false,
          responsive_web_enhance_cards_enabled: false,
        },
        fieldToggles: {
          withArticleRichContentState: false,
        },
      },
    })
    return res
  }

  // #endregion

  // #region Tweet

  public async TweetDetail(tweetId: string) {
    const queryId = 'TuC3CinYecrqAyqccUyFhw'
    const operationName = 'TweetDetail'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          focalTweetId: tweetId,
          with_rux_injections: false,
          includePromotedContent: true,
          withCommunity: true,
          withQuickPromoteEligibilityTweetFields: true,
          withArticleRichContent: false,
          withBirdwatchNotes: true,
          withVoice: true,
          withV2Timeline: true,
        },
        features: {
          rweb_lists_timeline_redesign_enabled: true,
          responsive_web_graphql_exclude_directive_enabled: true,
          verified_phone_label_enabled: false,
          creator_subscriptions_tweet_preview_api_enabled: true,
          responsive_web_graphql_timeline_navigation_enabled: true,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
          tweetypie_unmention_optimization_enabled: true,
          responsive_web_edit_tweet_api_enabled: true,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
          view_counts_everywhere_api_enabled: true,
          longform_notetweets_consumption_enabled: true,
          responsive_web_twitter_article_tweet_consumption_enabled: false,
          tweet_awards_web_tipping_enabled: false,
          freedom_of_speech_not_reach_fetch_enabled: true,
          standardized_nudges_misinfo: true,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
          longform_notetweets_rich_text_read_enabled: true,
          longform_notetweets_inline_media_enabled: true,
          responsive_web_media_download_video_enabled: false,
          responsive_web_enhance_cards_enabled: false,
        },
        fieldToggles: {
          withArticleRichContentState: false,
        },
      },
    })
    return res
  }

  // #endregion

  // #region Home

  public async HomeLatestTimeline(count = 20) {
    const queryId = '9GIv1oF33K_0t1hqQOzoCg'
    const operationName = 'HomeLatestTimeline'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          count,
          includePromotedContent: false,
          latestControlAvailable: true,
          requestContext: 'launch',
        },
        features: {
          rweb_lists_timeline_redesign_enabled: true,
          responsive_web_graphql_exclude_directive_enabled: true,
          verified_phone_label_enabled: false,
          creator_subscriptions_tweet_preview_api_enabled: true,
          responsive_web_graphql_timeline_navigation_enabled: true,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
          tweetypie_unmention_optimization_enabled: true,
          responsive_web_edit_tweet_api_enabled: true,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
          view_counts_everywhere_api_enabled: true,
          longform_notetweets_consumption_enabled: true,
          responsive_web_twitter_article_tweet_consumption_enabled: false,
          tweet_awards_web_tipping_enabled: false,
          freedom_of_speech_not_reach_fetch_enabled: true,
          standardized_nudges_misinfo: true,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
          longform_notetweets_rich_text_read_enabled: true,
          longform_notetweets_inline_media_enabled: true,
          responsive_web_media_download_video_enabled: false,
          responsive_web_enhance_cards_enabled: false,
        },
        fieldToggles: {
          withArticleRichContentState: false,
        },
      },
    })
    return res
  }

  // #endregion

  // #region AudioSpace

  public async AudioSpaceById(id: string) {
    const queryId = 'kZ9wfR8EBtiP0As3sFFrBA'
    const operationName = 'AudioSpaceById'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          id,
          isMetatagsQuery: true,
          withReplays: true,
          withListeners: true,
        },
        features: {
          spaces_2022_h2_clipping: true,
          spaces_2022_h2_spaces_communities: true,
          responsive_web_graphql_exclude_directive_enabled: true,
          verified_phone_label_enabled: false,
          creator_subscriptions_tweet_preview_api_enabled: true,
          responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
          tweetypie_unmention_optimization_enabled: true,
          responsive_web_edit_tweet_api_enabled: true,
          graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
          view_counts_everywhere_api_enabled: true,
          longform_notetweets_consumption_enabled: true,
          responsive_web_twitter_article_tweet_consumption_enabled: false,
          tweet_awards_web_tipping_enabled: false,
          freedom_of_speech_not_reach_fetch_enabled: true,
          standardized_nudges_misinfo: true,
          tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
          responsive_web_graphql_timeline_navigation_enabled: true,
          longform_notetweets_rich_text_read_enabled: true,
          longform_notetweets_inline_media_enabled: true,
          responsive_web_media_download_video_enabled: false,
          responsive_web_enhance_cards_enabled: false,
        },
        fieldToggles: {
          withArticleRichContentState: false,
        },
      },
    })
    return res
  }

  public async AudioSpaceById_Legacy(id: string) {
    const queryId = 'Uv5R_-Chxbn1FEkyUkSW2w'
    const operationName = 'AudioSpaceById'
    const url = this.parseUrl(queryId, operationName)
    const headers = this.getAuthHeaders()
    const res = await this.client.get(url, {
      headers,
      params: {
        variables: {
          id,
          isMetatagsQuery: false,
          withSuperFollowsUserFields: false,
          withBirdwatchPivots: false,
          withDownvotePerspective: false,
          withReactionsMetadata: false,
          withReactionsPerspective: false,
          withSuperFollowsTweetFields: false,
          withReplays: true,
          withScheduledSpaces: true,
        },
      },
    })
    return res
  }

  // #endregion

  // #region Helper

  // eslint-disable-next-line class-methods-use-this
  private parseUrl(queryId: string, operationName: string) {
    const url = [queryId, operationName].join('/')
    return url
  }

  // #endregion
}
