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


export class MediaViewModelSettings {
    'filledProperties'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filledProperties",
            "baseName": "filledProperties",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MediaViewModelSettings.attributeTypeMap;
    }

    public constructor() {
    }
}

