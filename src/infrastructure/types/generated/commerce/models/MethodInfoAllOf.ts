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

import { MemberTypes } from '../models/MemberTypes';
import { ParameterInfo } from '../models/ParameterInfo';

export class MethodInfoAllOf {
    'memberType'?: MemberTypes;
    'returnParameter'?: ParameterInfo;
    'returnType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "memberType",
            "baseName": "memberType",
            "type": "MemberTypes",
            "format": ""
        },
        {
            "name": "returnParameter",
            "baseName": "returnParameter",
            "type": "ParameterInfo",
            "format": ""
        },
        {
            "name": "returnType",
            "baseName": "returnType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MethodInfoAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

