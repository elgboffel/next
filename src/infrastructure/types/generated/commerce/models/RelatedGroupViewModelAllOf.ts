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

import { ProductInfoViewModel } from '../models/ProductInfoViewModel';

export class RelatedGroupViewModelAllOf {
    'id'?: string;
    'name'?: string;
    'products'?: Array<ProductInfoViewModel>;

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
            "name": "products",
            "baseName": "products",
            "type": "Array<ProductInfoViewModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelatedGroupViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}
