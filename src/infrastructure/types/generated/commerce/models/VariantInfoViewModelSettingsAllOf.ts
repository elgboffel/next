/**
 * Dynamicweb Headless Delivery API
 * API Endpoints for Dynamicweb.
 *
 * OpenAPI spec version: 10.0.0-RC006
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MediaViewModelSettings } from '../models/MediaViewModelSettings';
import { PriceViewModelSettings } from '../models/PriceViewModelSettings';

export class VariantInfoViewModelSettingsAllOf {
    'priceSettings'?: PriceViewModelSettings;
    'mediaSettings'?: MediaViewModelSettings;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "priceSettings",
            "baseName": "priceSettings",
            "type": "PriceViewModelSettings",
            "format": ""
        },
        {
            "name": "mediaSettings",
            "baseName": "mediaSettings",
            "type": "MediaViewModelSettings",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VariantInfoViewModelSettingsAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

