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


export class VatInfo {
    'percent'?: number;
    'percentFormatted'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "percent",
            "baseName": "percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "percentFormatted",
            "baseName": "percentFormatted",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VatInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

