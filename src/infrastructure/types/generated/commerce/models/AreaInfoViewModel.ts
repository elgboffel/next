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

import { AreaLanguageViewModel } from '../models/AreaLanguageViewModel';
import { ItemViewModel } from '../models/ItemViewModel';

export class AreaInfoViewModel {
    'id'?: number;
    'name'?: string;
    'createdDate'?: Date;
    'updatedDate'?: Date;
    'item'?: ItemViewModel;
    'languages'?: Array<AreaLanguageViewModel>;
    'domains'?: Array<string>;
    'primaryDomain'?: string;
    'ecomCountryCode'?: string;
    'ecomCurrencyCode'?: string;
    'ecomLanguageId'?: string;
    'ecomPricesWithVat'?: boolean;
    'ecomShopId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedDate",
            "baseName": "updatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "ItemViewModel",
            "format": ""
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "Array<AreaLanguageViewModel>",
            "format": ""
        },
        {
            "name": "domains",
            "baseName": "domains",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "primaryDomain",
            "baseName": "primaryDomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "ecomCountryCode",
            "baseName": "ecomCountryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "ecomCurrencyCode",
            "baseName": "ecomCurrencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "ecomLanguageId",
            "baseName": "ecomLanguageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "ecomPricesWithVat",
            "baseName": "ecomPricesWithVat",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ecomShopId",
            "baseName": "ecomShopId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AreaInfoViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}

