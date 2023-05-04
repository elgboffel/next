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

import { AreaLanguageViewModel } from '../models/AreaLanguageViewModel';
import { ItemViewModel } from '../models/ItemViewModel';
import { PageReferenceViewModel } from '../models/PageReferenceViewModel';

export class AreaViewModel {
    'cartPage'?: PageReferenceViewModel;
    'createdDate'?: Date;
    'dateFormat'?: string;
    'firstActivePage'?: PageReferenceViewModel;
    'firstPage'?: PageReferenceViewModel;
    'id'?: number;
    'item'?: ItemViewModel;
    'itemId'?: string;
    'itemType'?: string;
    'languages'?: Array<AreaLanguageViewModel>;
    'name'?: string;
    'searchPage'?: PageReferenceViewModel;
    'updatedDate'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cartPage",
            "baseName": "cartPage",
            "type": "PageReferenceViewModel",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "dateFormat",
            "baseName": "dateFormat",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstActivePage",
            "baseName": "firstActivePage",
            "type": "PageReferenceViewModel",
            "format": ""
        },
        {
            "name": "firstPage",
            "baseName": "firstPage",
            "type": "PageReferenceViewModel",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "ItemViewModel",
            "format": ""
        },
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemType",
            "baseName": "itemType",
            "type": "string",
            "format": ""
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "Array<AreaLanguageViewModel>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "searchPage",
            "baseName": "searchPage",
            "type": "PageReferenceViewModel",
            "format": ""
        },
        {
            "name": "updatedDate",
            "baseName": "updatedDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return AreaViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}

