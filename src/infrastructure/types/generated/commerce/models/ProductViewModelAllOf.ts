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

import { AssetCategoryViewModel } from '../models/AssetCategoryViewModel';
import { CategoryFieldViewModel } from '../models/CategoryFieldViewModel';
import { DiscountViewModel } from '../models/DiscountViewModel';
import { FieldValueViewModel } from '../models/FieldValueViewModel';
import { GroupInfoViewModel } from '../models/GroupInfoViewModel';
import { ManufacturerViewModel } from '../models/ManufacturerViewModel';
import { MediaViewModel } from '../models/MediaViewModel';
import { PriceListViewModel } from '../models/PriceListViewModel';
import { PriceViewModel2 } from '../models/PriceViewModel2';
import { ProductInfoViewModel } from '../models/ProductInfoViewModel';
import { RelatedGroupViewModel } from '../models/RelatedGroupViewModel';
import { StockUnitViewModel } from '../models/StockUnitViewModel';
import { UnitOptionViewModel } from '../models/UnitOptionViewModel';
import { VariantInfoViewModel } from '../models/VariantInfoViewModel';

export class ProductViewModelAllOf {
    'id'?: string;
    'variantId'?: string;
    'languageId'?: string;
    'name'?: string;
    'title'?: string;
    'shortDescription'?: string;
    'longDescription'?: string;
    'metaDescription'?: string;
    'metaTitle'?: string;
    'metaKeywords'?: string;
    'number'?: string;
    'created'?: Date;
    'updated'?: Date;
    'keywords'?: string;
    'weight'?: number;
    'stockLevel'?: number;
    'width'?: number;
    'height'?: number;
    'depth'?: number;
    'purchaseMinimumQuantity'?: number;
    'purchaseQuantityStep'?: number;
    'cost'?: number;
    'ean'?: string;
    'expectedDelivery'?: Date;
    'discontinued'?: boolean;
    'discontinuedAction'?: number;
    'pointPrice'?: number;
    'defaultVariantId'?: string;
    'defaultUnitId'?: string;
    'variantName'?: string;
    'active'?: boolean;
    'rating'?: number;
    'replacementProduct'?: ProductInfoViewModel;
    'price'?: PriceViewModel2;
    'priceInformative'?: PriceViewModel2;
    'priceBeforeDiscount'?: PriceViewModel2;
    'discount'?: PriceViewModel2;
    'productDiscounts'?: Array<DiscountViewModel>;
    'prices'?: Array<PriceListViewModel>;
    'productFields'?: { [key: string]: FieldValueViewModel; };
    'productCategories'?: { [key: string]: CategoryFieldViewModel; };
    'fieldDisplayGroups'?: { [key: string]: CategoryFieldViewModel; };
    'groups'?: Array<GroupInfoViewModel>;
    'primaryOrDefaultGroup'?: GroupInfoViewModel;
    'variantInfo'?: VariantInfoViewModel;
    'defaultImage'?: MediaViewModel;
    'groupPaths'?: Array<Array<GroupInfoViewModel>>;
    'imagePatternImages'?: Array<MediaViewModel>;
    'manufacturer'?: ManufacturerViewModel;
    'assetCategories'?: Array<AssetCategoryViewModel>;
    'neverOutOfstock'?: boolean;
    'stockUnits'?: Array<StockUnitViewModel>;
    'unitOptions'?: Array<UnitOptionViewModel>;
    'relatedGroups'?: Array<RelatedGroupViewModel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "variantId",
            "baseName": "variantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "languageId",
            "baseName": "languageId",
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
            "name": "shortDescription",
            "baseName": "shortDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "longDescription",
            "baseName": "longDescription",
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
            "name": "metaTitle",
            "baseName": "metaTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaKeywords",
            "baseName": "metaKeywords",
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
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "keywords",
            "baseName": "keywords",
            "type": "string",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": "double"
        },
        {
            "name": "stockLevel",
            "baseName": "stockLevel",
            "type": "number",
            "format": "double"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "double"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "double"
        },
        {
            "name": "depth",
            "baseName": "depth",
            "type": "number",
            "format": "double"
        },
        {
            "name": "purchaseMinimumQuantity",
            "baseName": "purchaseMinimumQuantity",
            "type": "number",
            "format": "double"
        },
        {
            "name": "purchaseQuantityStep",
            "baseName": "purchaseQuantityStep",
            "type": "number",
            "format": "double"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": "double"
        },
        {
            "name": "ean",
            "baseName": "ean",
            "type": "string",
            "format": ""
        },
        {
            "name": "expectedDelivery",
            "baseName": "expectedDelivery",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "discontinued",
            "baseName": "discontinued",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "discontinuedAction",
            "baseName": "discontinuedAction",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pointPrice",
            "baseName": "pointPrice",
            "type": "number",
            "format": "double"
        },
        {
            "name": "defaultVariantId",
            "baseName": "defaultVariantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultUnitId",
            "baseName": "defaultUnitId",
            "type": "string",
            "format": ""
        },
        {
            "name": "variantName",
            "baseName": "variantName",
            "type": "string",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "rating",
            "baseName": "rating",
            "type": "number",
            "format": "double"
        },
        {
            "name": "replacementProduct",
            "baseName": "replacementProduct",
            "type": "ProductInfoViewModel",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "PriceViewModel2",
            "format": ""
        },
        {
            "name": "priceInformative",
            "baseName": "priceInformative",
            "type": "PriceViewModel2",
            "format": ""
        },
        {
            "name": "priceBeforeDiscount",
            "baseName": "priceBeforeDiscount",
            "type": "PriceViewModel2",
            "format": ""
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "PriceViewModel2",
            "format": ""
        },
        {
            "name": "productDiscounts",
            "baseName": "productDiscounts",
            "type": "Array<DiscountViewModel>",
            "format": ""
        },
        {
            "name": "prices",
            "baseName": "prices",
            "type": "Array<PriceListViewModel>",
            "format": ""
        },
        {
            "name": "productFields",
            "baseName": "productFields",
            "type": "{ [key: string]: FieldValueViewModel; }",
            "format": ""
        },
        {
            "name": "productCategories",
            "baseName": "productCategories",
            "type": "{ [key: string]: CategoryFieldViewModel; }",
            "format": ""
        },
        {
            "name": "fieldDisplayGroups",
            "baseName": "fieldDisplayGroups",
            "type": "{ [key: string]: CategoryFieldViewModel; }",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<GroupInfoViewModel>",
            "format": ""
        },
        {
            "name": "primaryOrDefaultGroup",
            "baseName": "primaryOrDefaultGroup",
            "type": "GroupInfoViewModel",
            "format": ""
        },
        {
            "name": "variantInfo",
            "baseName": "variantInfo",
            "type": "VariantInfoViewModel",
            "format": ""
        },
        {
            "name": "defaultImage",
            "baseName": "defaultImage",
            "type": "MediaViewModel",
            "format": ""
        },
        {
            "name": "groupPaths",
            "baseName": "groupPaths",
            "type": "Array<Array<GroupInfoViewModel>>",
            "format": ""
        },
        {
            "name": "imagePatternImages",
            "baseName": "imagePatternImages",
            "type": "Array<MediaViewModel>",
            "format": ""
        },
        {
            "name": "manufacturer",
            "baseName": "manufacturer",
            "type": "ManufacturerViewModel",
            "format": ""
        },
        {
            "name": "assetCategories",
            "baseName": "assetCategories",
            "type": "Array<AssetCategoryViewModel>",
            "format": ""
        },
        {
            "name": "neverOutOfstock",
            "baseName": "neverOutOfstock",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "stockUnits",
            "baseName": "stockUnits",
            "type": "Array<StockUnitViewModel>",
            "format": ""
        },
        {
            "name": "unitOptions",
            "baseName": "unitOptions",
            "type": "Array<UnitOptionViewModel>",
            "format": ""
        },
        {
            "name": "relatedGroups",
            "baseName": "relatedGroups",
            "type": "Array<RelatedGroupViewModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductViewModelAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

