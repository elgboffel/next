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

import { MediaViewModel } from '../models/MediaViewModel';
import { PriceViewModel2 } from '../models/PriceViewModel2';

export class VariantInfoViewModel {
    'productID'?: string;
    'variantID'?: string;
    'optionID'?: string;
    'optionName'?: string;
    'optionColor'?: string;
    'optionSort'?: number;
    'productName'?: string;
    'productNumber'?: string;
    'productStock'?: number;
    'variantInfoGroupId'?: string;
    'variantInfoGroupName'?: string;
    'variantInfoGroupDescription'?: string;
    'optionImage'?: MediaViewModel;
    'image'?: MediaViewModel;
    'price'?: PriceViewModel2;
    'priceMin'?: PriceViewModel2;
    'priceMax'?: PriceViewModel2;
    'stock'?: number;
    'variantInfo'?: Array<VariantInfoViewModel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productID",
            "baseName": "productID",
            "type": "string",
            "format": ""
        },
        {
            "name": "variantID",
            "baseName": "variantID",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionID",
            "baseName": "optionID",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionName",
            "baseName": "optionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionColor",
            "baseName": "optionColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionSort",
            "baseName": "optionSort",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string",
            "format": ""
        },
        {
            "name": "productNumber",
            "baseName": "productNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "productStock",
            "baseName": "productStock",
            "type": "number",
            "format": "double"
        },
        {
            "name": "variantInfoGroupId",
            "baseName": "variantInfoGroupId",
            "type": "string",
            "format": ""
        },
        {
            "name": "variantInfoGroupName",
            "baseName": "variantInfoGroupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "variantInfoGroupDescription",
            "baseName": "variantInfoGroupDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "optionImage",
            "baseName": "optionImage",
            "type": "MediaViewModel",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "MediaViewModel",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "PriceViewModel2",
            "format": ""
        },
        {
            "name": "priceMin",
            "baseName": "priceMin",
            "type": "PriceViewModel2",
            "format": ""
        },
        {
            "name": "priceMax",
            "baseName": "priceMax",
            "type": "PriceViewModel2",
            "format": ""
        },
        {
            "name": "stock",
            "baseName": "stock",
            "type": "number",
            "format": "double"
        },
        {
            "name": "variantInfo",
            "baseName": "variantInfo",
            "type": "Array<VariantInfoViewModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VariantInfoViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}
