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


export class CountryViewModel {
    'code2'?: string;
    'code3'?: string;
    'regionCode'?: string;
    'culture'?: string;
    'name'?: string;
    'vat'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code2",
            "baseName": "code2",
            "type": "string",
            "format": ""
        },
        {
            "name": "code3",
            "baseName": "code3",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionCode",
            "baseName": "regionCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "culture",
            "baseName": "culture",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "vat",
            "baseName": "vat",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return CountryViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}

