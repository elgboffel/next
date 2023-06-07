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

import { PriceViewModel } from '../models/PriceViewModel';

export class CartOrderlineViewModel {
    'productID'?: string;
    'productNumber'?: string;
    'productName'?: string;
    'productGroupID'?: string;
    'isProduct'?: boolean;
    'isDiscount'?: boolean;
    'isTax'?: boolean;
    'quantity'?: number;
    'productVariantID'?: string;
    'productVariantText'?: string;
    'productLink'?: string;
    'productImage'?: string;
    'unitPrice'?: PriceViewModel;
    'unitPriceBeforeDiscount'?: PriceViewModel;
    'totalPrice'?: PriceViewModel;
    'totalDiscount'?: PriceViewModel;
    'unitDiscount'?: PriceViewModel;
    'totalPriceWithProductDiscounts'?: PriceViewModel;
    'unitPriceWithProductDiscount'?: PriceViewModel;
    'unitId'?: string;
    'unitName'?: string;
    'pointsTotal'?: number;
    'pointPrice'?: number;
    'id'?: string;
    'parentLineId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productID",
            "baseName": "productID",
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
            "name": "productName",
            "baseName": "productName",
            "type": "string",
            "format": ""
        },
        {
            "name": "productGroupID",
            "baseName": "productGroupID",
            "type": "string",
            "format": ""
        },
        {
            "name": "isProduct",
            "baseName": "isProduct",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDiscount",
            "baseName": "isDiscount",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isTax",
            "baseName": "isTax",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number",
            "format": "double"
        },
        {
            "name": "productVariantID",
            "baseName": "productVariantID",
            "type": "string",
            "format": ""
        },
        {
            "name": "productVariantText",
            "baseName": "productVariantText",
            "type": "string",
            "format": ""
        },
        {
            "name": "productLink",
            "baseName": "productLink",
            "type": "string",
            "format": ""
        },
        {
            "name": "productImage",
            "baseName": "productImage",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitPrice",
            "baseName": "unitPrice",
            "type": "PriceViewModel",
            "format": ""
        },
        {
            "name": "unitPriceBeforeDiscount",
            "baseName": "unitPriceBeforeDiscount",
            "type": "PriceViewModel",
            "format": ""
        },
        {
            "name": "totalPrice",
            "baseName": "totalPrice",
            "type": "PriceViewModel",
            "format": ""
        },
        {
            "name": "totalDiscount",
            "baseName": "totalDiscount",
            "type": "PriceViewModel",
            "format": ""
        },
        {
            "name": "unitDiscount",
            "baseName": "unitDiscount",
            "type": "PriceViewModel",
            "format": ""
        },
        {
            "name": "totalPriceWithProductDiscounts",
            "baseName": "totalPriceWithProductDiscounts",
            "type": "PriceViewModel",
            "format": ""
        },
        {
            "name": "unitPriceWithProductDiscount",
            "baseName": "unitPriceWithProductDiscount",
            "type": "PriceViewModel",
            "format": ""
        },
        {
            "name": "unitId",
            "baseName": "unitId",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitName",
            "baseName": "unitName",
            "type": "string",
            "format": ""
        },
        {
            "name": "pointsTotal",
            "baseName": "pointsTotal",
            "type": "number",
            "format": "double"
        },
        {
            "name": "pointPrice",
            "baseName": "pointPrice",
            "type": "number",
            "format": "double"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentLineId",
            "baseName": "parentLineId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CartOrderlineViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}
