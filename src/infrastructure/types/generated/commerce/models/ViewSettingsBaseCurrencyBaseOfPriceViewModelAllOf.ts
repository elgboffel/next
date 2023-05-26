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


export class ViewSettingsBaseCurrencyBaseOfPriceViewModelAllOf {
    'userId'?: number;
    'orderDate'?: Date;
    'showPricesWithVat'?: boolean;
    'stockLocationId'?: number;
    'currencyCode'?: string;
    'countryCode'?: string;
    'shopId'?: string;
    'time'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "orderDate",
            "baseName": "orderDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "showPricesWithVat",
            "baseName": "showPricesWithVat",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "stockLocationId",
            "baseName": "stockLocationId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "shopId",
            "baseName": "shopId",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ViewSettingsBaseCurrencyBaseOfPriceViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

