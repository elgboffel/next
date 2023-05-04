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

import { FavoriteProductViewModel } from '../models/FavoriteProductViewModel';

export class FavoriteProductListViewModelAllOf {
    'pageSize'?: number;
    'pageCount'?: number;
    'currentPage'?: number;
    'totalFavoriteProductsCount'?: number;
    'favoriteProducts'?: Array<FavoriteProductViewModel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pageCount",
            "baseName": "pageCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currentPage",
            "baseName": "currentPage",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalFavoriteProductsCount",
            "baseName": "totalFavoriteProductsCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "favoriteProducts",
            "baseName": "favoriteProducts",
            "type": "Array<FavoriteProductViewModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FavoriteProductListViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

