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

import { FacetGroupViewModelSettings } from '../models/FacetGroupViewModelSettings';
import { MediaViewModelSettings } from '../models/MediaViewModelSettings';
import { ProductGroupViewModelSettings } from '../models/ProductGroupViewModelSettings';
import { ProductViewModelSettings } from '../models/ProductViewModelSettings';

export class ProductListViewModelSettingsAllOf {
    'productSettings'?: ProductViewModelSettings;
    'groupSettings'?: ProductGroupViewModelSettings;
    'facetGroupSettings'?: FacetGroupViewModelSettings;
    'parameters'?: { [key: string]: string; };
    'pageSize'?: number;
    'currentPage'?: number;
    'mediaSettings'?: MediaViewModelSettings;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productSettings",
            "baseName": "productSettings",
            "type": "ProductViewModelSettings",
            "format": ""
        },
        {
            "name": "groupSettings",
            "baseName": "groupSettings",
            "type": "ProductGroupViewModelSettings",
            "format": ""
        },
        {
            "name": "facetGroupSettings",
            "baseName": "facetGroupSettings",
            "type": "FacetGroupViewModelSettings",
            "format": ""
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
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
            "name": "mediaSettings",
            "baseName": "mediaSettings",
            "type": "MediaViewModelSettings",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductListViewModelSettingsAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

