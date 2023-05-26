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

import { ParagraphInfoViewModel } from '../models/ParagraphInfoViewModel';

export class GridColumnViewModelAllOf {
    'columnNumber'?: number;
    'rowColumnCount'?: number;
    'paragraph'?: ParagraphInfoViewModel;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "columnNumber",
            "baseName": "columnNumber",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "rowColumnCount",
            "baseName": "rowColumnCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paragraph",
            "baseName": "paragraph",
            "type": "ParagraphInfoViewModel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GridColumnViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

