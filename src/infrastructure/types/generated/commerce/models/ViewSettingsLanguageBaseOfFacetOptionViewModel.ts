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


export class ViewSettingsLanguageBaseOfFacetOptionViewModel {
    'filledProperties'?: Array<string>;
    'languageId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filledProperties",
            "baseName": "filledProperties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "languageId",
            "baseName": "languageId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ViewSettingsLanguageBaseOfFacetOptionViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}

