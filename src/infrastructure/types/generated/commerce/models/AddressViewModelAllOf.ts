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


export class AddressViewModelAllOf {
    'id'?: number;
    'company'?: string;
    'name'?: string;
    'address'?: string;
    'address2'?: string;
    'zip'?: string;
    'city'?: string;
    'countryCode'?: string;
    'state'?: string;
    'phone'?: string;
    'mobile'?: string;
    'email'?: string;
    'isDefault'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "company",
            "baseName": "company",
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
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string",
            "format": ""
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
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
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddressViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

