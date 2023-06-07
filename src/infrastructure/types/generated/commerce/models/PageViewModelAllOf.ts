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

import { AreaViewModel } from '../models/AreaViewModel';
import { CartViewModel } from '../models/CartViewModel';
import { ItemViewModel } from '../models/ItemViewModel';
import { LogOnFailedReason } from '../models/LogOnFailedReason';
import { PageLanguageViewModel } from '../models/PageLanguageViewModel';
import { PageReferenceViewModel } from '../models/PageReferenceViewModel';
import { UserViewModel } from '../models/UserViewModel';

export class PageViewModelAllOf {
    'area'?: AreaViewModel;
    'createdDate'?: Date;
    'currentSecondaryUser'?: UserViewModel;
    'currentUser'?: UserViewModel;
    'isCurrentUserAllowed'?: boolean;
    'cart'?: CartViewModel;
    'content'?: { [key: string]: string; };
    'gridContent'?: { [key: string]: string; };
    'description'?: string;
    'id'?: number;
    'item'?: ItemViewModel;
    'itemId'?: string;
    'itemType'?: string;
    'keywords'?: string;
    'metaTags'?: string;
    'languages'?: Array<PageLanguageViewModel>;
    'name'?: string;
    'path'?: Array<PageReferenceViewModel>;
    'propertyItem'?: ItemViewModel;
    'propertyItemId'?: string;
    'propertyItemType'?: string;
    'showUpdatedDate'?: boolean;
    'title'?: string;
    'topPage'?: PageReferenceViewModel;
    'updatedDate'?: Date;
    'secondaryUsers'?: Array<UserViewModel>;
    'hasSecondaryUsers'?: boolean;
    'logOnFailed'?: boolean;
    'logOnFailedReason'?: LogOnFailedReason;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "area",
            "baseName": "area",
            "type": "AreaViewModel",
            "format": ""
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "currentSecondaryUser",
            "baseName": "currentSecondaryUser",
            "type": "UserViewModel",
            "format": ""
        },
        {
            "name": "currentUser",
            "baseName": "currentUser",
            "type": "UserViewModel",
            "format": ""
        },
        {
            "name": "isCurrentUserAllowed",
            "baseName": "isCurrentUserAllowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cart",
            "baseName": "cart",
            "type": "CartViewModel",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "gridContent",
            "baseName": "gridContent",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
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
            "name": "keywords",
            "baseName": "keywords",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaTags",
            "baseName": "metaTags",
            "type": "string",
            "format": ""
        },
        {
            "name": "languages",
            "baseName": "languages",
            "type": "Array<PageLanguageViewModel>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "Array<PageReferenceViewModel>",
            "format": ""
        },
        {
            "name": "propertyItem",
            "baseName": "propertyItem",
            "type": "ItemViewModel",
            "format": ""
        },
        {
            "name": "propertyItemId",
            "baseName": "propertyItemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "propertyItemType",
            "baseName": "propertyItemType",
            "type": "string",
            "format": ""
        },
        {
            "name": "showUpdatedDate",
            "baseName": "showUpdatedDate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "topPage",
            "baseName": "topPage",
            "type": "PageReferenceViewModel",
            "format": ""
        },
        {
            "name": "updatedDate",
            "baseName": "updatedDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "secondaryUsers",
            "baseName": "secondaryUsers",
            "type": "Array<UserViewModel>",
            "format": ""
        },
        {
            "name": "hasSecondaryUsers",
            "baseName": "hasSecondaryUsers",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "logOnFailed",
            "baseName": "logOnFailed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "logOnFailedReason",
            "baseName": "logOnFailedReason",
            "type": "LogOnFailedReason",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PageViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}
