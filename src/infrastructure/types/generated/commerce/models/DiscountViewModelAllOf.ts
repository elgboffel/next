/**
 * Dynamicweb Headless Delivery API
 * API Endpoints for Dynamicweb.
 *
 * OpenAPI spec version: 10.0.0-RC004
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MediaViewModel } from '../models/MediaViewModel';

export class DiscountViewModelAllOf {
    'name'?: string;
    'campaignName'?: string;
    'campagnDescription'?: string;
    'campaignColor'?: string;
    'amount'?: number;
    'percentage'?: number;
    'currencyCode'?: string;
    'voucherCode'?: string;
    'voucherListId'?: number;
    'validFrom'?: Date;
    'validTo'?: Date;
    'campaignImage'?: MediaViewModel;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "campaignName",
            "baseName": "campaignName",
            "type": "string",
            "format": ""
        },
        {
            "name": "campagnDescription",
            "baseName": "campagnDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "campaignColor",
            "baseName": "campaignColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "double"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "voucherCode",
            "baseName": "voucherCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "voucherListId",
            "baseName": "voucherListId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "validFrom",
            "baseName": "validFrom",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "validTo",
            "baseName": "validTo",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "campaignImage",
            "baseName": "campaignImage",
            "type": "MediaViewModel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DiscountViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

