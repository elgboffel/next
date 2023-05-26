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

import { AssemblyEntryPoint } from '../models/AssemblyEntryPoint';
import { CustomAttributeData } from '../models/CustomAttributeData';
import { Module } from '../models/Module';
import { SecurityRuleSet } from '../models/SecurityRuleSet';

export class Assembly {
    'definedTypes'?: Array<string>;
    'exportedTypes'?: Array<string>;
    'codeBase'?: string;
    'entryPoint'?: AssemblyEntryPoint;
    'fullName'?: string;
    'imageRuntimeVersion'?: string;
    'isDynamic'?: boolean;
    'location'?: string;
    'reflectionOnly'?: boolean;
    'isCollectible'?: boolean;
    'isFullyTrusted'?: boolean;
    'customAttributes'?: Array<CustomAttributeData>;
    'escapedCodeBase'?: string;
    'manifestModule'?: Module;
    'modules'?: Array<Module>;
    'globalAssemblyCache'?: boolean;
    'hostContext'?: number;
    'securityRuleSet'?: SecurityRuleSet;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "definedTypes",
            "baseName": "definedTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "exportedTypes",
            "baseName": "exportedTypes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "codeBase",
            "baseName": "codeBase",
            "type": "string",
            "format": ""
        },
        {
            "name": "entryPoint",
            "baseName": "entryPoint",
            "type": "AssemblyEntryPoint",
            "format": ""
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageRuntimeVersion",
            "baseName": "imageRuntimeVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDynamic",
            "baseName": "isDynamic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "reflectionOnly",
            "baseName": "reflectionOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCollectible",
            "baseName": "isCollectible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFullyTrusted",
            "baseName": "isFullyTrusted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "customAttributes",
            "baseName": "customAttributes",
            "type": "Array<CustomAttributeData>",
            "format": ""
        },
        {
            "name": "escapedCodeBase",
            "baseName": "escapedCodeBase",
            "type": "string",
            "format": ""
        },
        {
            "name": "manifestModule",
            "baseName": "manifestModule",
            "type": "Module",
            "format": ""
        },
        {
            "name": "modules",
            "baseName": "modules",
            "type": "Array<Module>",
            "format": ""
        },
        {
            "name": "globalAssemblyCache",
            "baseName": "globalAssemblyCache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostContext",
            "baseName": "hostContext",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "securityRuleSet",
            "baseName": "securityRuleSet",
            "type": "SecurityRuleSet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Assembly.attributeTypeMap;
    }

    public constructor() {
    }
}

