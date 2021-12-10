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
    Trends,
    TrendsFromJSON,
    TrendsToJSON,
} from '../models';

export interface TrendsPlaceRequest {
    id: number;
}

/**
 * 
 */
export class TrendsApi extends runtime.BaseAPI {

    /**
     * 特定の地域のトレンドを取得する
     * トレンド取得
     */
    async trendsPlaceRaw(requestParameters: TrendsPlaceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Trends>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling trendsPlace.');
        }

        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/trends/place`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TrendsFromJSON));
    }

    /**
     * 特定の地域のトレンドを取得する
     * トレンド取得
     */
    async trendsPlace(requestParameters: TrendsPlaceRequest, initOverrides?: RequestInit): Promise<Array<Trends>> {
        const response = await this.trendsPlaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
