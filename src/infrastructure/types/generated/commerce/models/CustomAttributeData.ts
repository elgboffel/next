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

import { ConstructorInfo } from '../models/ConstructorInfo';
import { CustomAttributeNamedArgument } from '../models/CustomAttributeNamedArgument';
import { CustomAttributeTypedArgument } from '../models/CustomAttributeTypedArgument';

export class CustomAttributeData {
    'attributeType'?: string;
    '_constructor'?: ConstructorInfo;
    'constructorArguments'?: Array<CustomAttributeTypedArgument>;
    'namedArguments'?: Array<CustomAttributeNamedArgument>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributeType",
            "baseName": "attributeType",
            "type": "string",
            "format": ""
        },
        {
            "name": "_constructor",
            "baseName": "constructor",
            "type": "ConstructorInfo",
            "format": ""
        },
        {
            "name": "constructorArguments",
            "baseName": "constructorArguments",
            "type": "Array<CustomAttributeTypedArgument>",
            "format": ""
        },
        {
            "name": "namedArguments",
            "baseName": "namedArguments",
            "type": "Array<CustomAttributeNamedArgument>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomAttributeData.attributeTypeMap;
    }

    public constructor() {
    }
}

