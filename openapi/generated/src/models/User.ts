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

import { exists, mapValues } from '../runtime';
import {
    UserEntities,
    UserEntitiesFromJSON,
    UserEntitiesFromJSONTyped,
    UserEntitiesToJSON,
} from './';

/**
 * ユーザー情報
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    id_str: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    screen_name: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    location: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    url: string | null;
    /**
     * 
     * @type {UserEntities}
     * @memberof User
     */
    entities: UserEntities;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    _protected: boolean;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    followers_count: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    friends_count: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    listed_count: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    created_at: string;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    favourites_count: number;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    utc_offset: number | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    time_zone: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    geo_enabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    verified: boolean;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    statuses_count: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lang: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    contributors_enabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    is_translator: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    is_translation_enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_background_color: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_background_image_url: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_background_image_url_https: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    profile_background_tile: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_image_url: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_image_url_https: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_banner_url: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_link_color: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_sidebar_border_color: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_sidebar_fill_color: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    profile_text_color: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    profile_use_background_image: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    has_extended_profile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    default_profile: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    default_profile_image: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    following: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    follow_request_sent: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    notifications: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    translator_type: string;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'id_str': json['id_str'],
        'name': json['name'],
        'screen_name': json['screen_name'],
        'location': json['location'],
        'description': json['description'],
        'url': json['url'],
        'entities': UserEntitiesFromJSON(json['entities']),
        '_protected': json['protected'],
        'followers_count': json['followers_count'],
        'friends_count': json['friends_count'],
        'listed_count': json['listed_count'],
        'created_at': json['created_at'],
        'favourites_count': json['favourites_count'],
        'utc_offset': json['utc_offset'],
        'time_zone': json['time_zone'],
        'geo_enabled': json['geo_enabled'],
        'verified': json['verified'],
        'statuses_count': json['statuses_count'],
        'lang': json['lang'],
        'contributors_enabled': json['contributors_enabled'],
        'is_translator': json['is_translator'],
        'is_translation_enabled': json['is_translation_enabled'],
        'profile_background_color': json['profile_background_color'],
        'profile_background_image_url': json['profile_background_image_url'],
        'profile_background_image_url_https': json['profile_background_image_url_https'],
        'profile_background_tile': json['profile_background_tile'],
        'profile_image_url': json['profile_image_url'],
        'profile_image_url_https': json['profile_image_url_https'],
        'profile_banner_url': json['profile_banner_url'],
        'profile_link_color': json['profile_link_color'],
        'profile_sidebar_border_color': json['profile_sidebar_border_color'],
        'profile_sidebar_fill_color': json['profile_sidebar_fill_color'],
        'profile_text_color': json['profile_text_color'],
        'profile_use_background_image': json['profile_use_background_image'],
        'has_extended_profile': json['has_extended_profile'],
        'default_profile': json['default_profile'],
        'default_profile_image': json['default_profile_image'],
        'following': json['following'],
        'follow_request_sent': json['follow_request_sent'],
        'notifications': json['notifications'],
        'translator_type': json['translator_type'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'id_str': value.id_str,
        'name': value.name,
        'screen_name': value.screen_name,
        'location': value.location,
        'description': value.description,
        'url': value.url,
        'entities': UserEntitiesToJSON(value.entities),
        'protected': value._protected,
        'followers_count': value.followers_count,
        'friends_count': value.friends_count,
        'listed_count': value.listed_count,
        'created_at': value.created_at,
        'favourites_count': value.favourites_count,
        'utc_offset': value.utc_offset,
        'time_zone': value.time_zone,
        'geo_enabled': value.geo_enabled,
        'verified': value.verified,
        'statuses_count': value.statuses_count,
        'lang': value.lang,
        'contributors_enabled': value.contributors_enabled,
        'is_translator': value.is_translator,
        'is_translation_enabled': value.is_translation_enabled,
        'profile_background_color': value.profile_background_color,
        'profile_background_image_url': value.profile_background_image_url,
        'profile_background_image_url_https': value.profile_background_image_url_https,
        'profile_background_tile': value.profile_background_tile,
        'profile_image_url': value.profile_image_url,
        'profile_image_url_https': value.profile_image_url_https,
        'profile_banner_url': value.profile_banner_url,
        'profile_link_color': value.profile_link_color,
        'profile_sidebar_border_color': value.profile_sidebar_border_color,
        'profile_sidebar_fill_color': value.profile_sidebar_fill_color,
        'profile_text_color': value.profile_text_color,
        'profile_use_background_image': value.profile_use_background_image,
        'has_extended_profile': value.has_extended_profile,
        'default_profile': value.default_profile,
        'default_profile_image': value.default_profile_image,
        'following': value.following,
        'follow_request_sent': value.follow_request_sent,
        'notifications': value.notifications,
        'translator_type': value.translator_type,
    };
}


