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

import { PageReferenceViewModel } from '../models/PageReferenceViewModel';

export class PageLanguageViewModel {
    'id'?: number;
    'name'?: string;
    'culture'?: string;
    'primaryDomain'?: string;
    'isCurrent'?: boolean;
    'isMaster'?: boolean;
    'page'?: PageReferenceViewModel;
    'pageIsHidden'?: boolean;
    'pageIsPublished'?: boolean;
    'firstPage'?: PageReferenceViewModel;
    'firstActivePage'?: PageReferenceViewModel;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "culture",
            "baseName": "culture",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryDomain",
            "baseName": "primaryDomain",
            "type": "string",
            "format": ""
        },
        {
            "name": "isCurrent",
            "baseName": "isCurrent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isMaster",
            "baseName": "isMaster",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "PageReferenceViewModel",
            "format": ""
        },
        {
            "name": "pageIsHidden",
            "baseName": "pageIsHidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "pageIsPublished",
            "baseName": "pageIsPublished",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "firstPage",
            "baseName": "firstPage",
            "type": "PageReferenceViewModel",
            "format": ""
        },
        {
            "name": "firstActivePage",
            "baseName": "firstActivePage",
            "type": "PageReferenceViewModel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PageLanguageViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}

