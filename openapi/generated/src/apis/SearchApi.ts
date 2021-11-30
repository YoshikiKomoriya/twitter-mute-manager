/* tslint:disable */
/* eslint-disable */
/**
 * sample
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    ResponseSearchTweets,
    ResponseSearchTweetsFromJSON,
    ResponseSearchTweetsToJSON,
} from '../models';

export interface SearchTweetRequest {
    q: string;
    count?: number;
    max_id?: string;
    tweet_mode?: string;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     * ツイートを単語で検索する
     * キーワード検索
     */
    async searchTweetRaw(requestParameters: SearchTweetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponseSearchTweets>> {
        if (requestParameters.q === null || requestParameters.q === undefined) {
            throw new runtime.RequiredError('q','Required parameter requestParameters.q was null or undefined when calling searchTweet.');
        }

        const queryParameters: any = {};

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.count !== undefined) {
            queryParameters['count'] = requestParameters.count;
        }

        if (requestParameters.max_id !== undefined) {
            queryParameters['max_id'] = requestParameters.max_id;
        }

        if (requestParameters.tweet_mode !== undefined) {
            queryParameters['tweet_mode'] = requestParameters.tweet_mode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/search/tweets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseSearchTweetsFromJSON(jsonValue));
    }

    /**
     * ツイートを単語で検索する
     * キーワード検索
     */
    async searchTweet(requestParameters: SearchTweetRequest, initOverrides?: RequestInit): Promise<ResponseSearchTweets> {
        const response = await this.searchTweetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
