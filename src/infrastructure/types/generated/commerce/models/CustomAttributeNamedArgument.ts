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

import { CustomAttributeTypedArgument } from '../models/CustomAttributeTypedArgument';
import { MemberInfo } from '../models/MemberInfo';

export class CustomAttributeNamedArgument {
    'memberInfo'?: MemberInfo;
    'typedValue'?: CustomAttributeTypedArgument;
    'memberName'?: string;
    'isField'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "memberInfo",
            "baseName": "memberInfo",
            "type": "MemberInfo",
            "format": ""
        },
        {
            "name": "typedValue",
            "baseName": "typedValue",
            "type": "CustomAttributeTypedArgument",
            "format": ""
        },
        {
            "name": "memberName",
            "baseName": "memberName",
            "type": "string",
            "format": ""
        },
        {
            "name": "isField",
            "baseName": "isField",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomAttributeNamedArgument.attributeTypeMap;
    }

    public constructor() {
    }
}
