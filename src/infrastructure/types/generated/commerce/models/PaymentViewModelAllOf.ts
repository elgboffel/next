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


export class PaymentViewModelAllOf {
    'id'?: string;
    'name'?: string;
    'description'?: string;
    'icon'?: string;
    'code'?: string;
    'termsCode'?: string;
    'termsDescription'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsCode",
            "baseName": "termsCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "termsDescription",
            "baseName": "termsDescription",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}
