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

import { FieldValueViewModel } from '../models/FieldValueViewModel';
import { MediaViewModel } from '../models/MediaViewModel';

export class ProductGroupViewModelAllOf {
    'id'?: string;
    'name'?: string;
    'title'?: string;
    'number'?: string;
    'description'?: string;
    'metaDescription'?: string;
    'categorySystemName'?: string;
    'categoryName'?: string;
    'groupFields'?: Array<FieldValueViewModel>;
    'assets'?: Array<MediaViewModel>;

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
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
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
            "name": "metaDescription",
            "baseName": "metaDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "categorySystemName",
            "baseName": "categorySystemName",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryName",
            "baseName": "categoryName",
            "type": "string",
            "format": ""
        },
        {
            "name": "groupFields",
            "baseName": "groupFields",
            "type": "Array<FieldValueViewModel>",
            "format": ""
        },
        {
            "name": "assets",
            "baseName": "assets",
            "type": "Array<MediaViewModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductGroupViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

