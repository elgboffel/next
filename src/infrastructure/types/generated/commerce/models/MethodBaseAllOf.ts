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

import { CallingConventions } from '../models/CallingConventions';
import { MethodImplAttributes } from '../models/MethodImplAttributes';

export class MethodBaseAllOf {
    'methodImplementationFlags'?: MethodImplAttributes;
    'callingConvention'?: CallingConventions;
    'isAbstract'?: boolean;
    'isConstructor'?: boolean;
    'isFinal'?: boolean;
    'isHideBySig'?: boolean;
    'isSpecialName'?: boolean;
    'isStatic'?: boolean;
    'isVirtual'?: boolean;
    'isAssembly'?: boolean;
    'isFamily'?: boolean;
    'isFamilyAndAssembly'?: boolean;
    'isFamilyOrAssembly'?: boolean;
    'isPrivate'?: boolean;
    'isPublic'?: boolean;
    'isConstructedGenericMethod'?: boolean;
    'isGenericMethod'?: boolean;
    'isGenericMethodDefinition'?: boolean;
    'containsGenericParameters'?: boolean;
    'isSecurityCritical'?: boolean;
    'isSecuritySafeCritical'?: boolean;
    'isSecurityTransparent'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "methodImplementationFlags",
            "baseName": "methodImplementationFlags",
            "type": "MethodImplAttributes",
            "format": ""
        },
        {
            "name": "callingConvention",
            "baseName": "callingConvention",
            "type": "CallingConventions",
            "format": ""
        },
        {
            "name": "isAbstract",
            "baseName": "isAbstract",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isConstructor",
            "baseName": "isConstructor",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFinal",
            "baseName": "isFinal",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isHideBySig",
            "baseName": "isHideBySig",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSpecialName",
            "baseName": "isSpecialName",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isStatic",
            "baseName": "isStatic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isVirtual",
            "baseName": "isVirtual",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isAssembly",
            "baseName": "isAssembly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFamily",
            "baseName": "isFamily",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFamilyAndAssembly",
            "baseName": "isFamilyAndAssembly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFamilyOrAssembly",
            "baseName": "isFamilyOrAssembly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPrivate",
            "baseName": "isPrivate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPublic",
            "baseName": "isPublic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isConstructedGenericMethod",
            "baseName": "isConstructedGenericMethod",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isGenericMethod",
            "baseName": "isGenericMethod",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isGenericMethodDefinition",
            "baseName": "isGenericMethodDefinition",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "containsGenericParameters",
            "baseName": "containsGenericParameters",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSecurityCritical",
            "baseName": "isSecurityCritical",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSecuritySafeCritical",
            "baseName": "isSecuritySafeCritical",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSecurityTransparent",
            "baseName": "isSecurityTransparent",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MethodBaseAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

