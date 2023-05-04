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

import { MethodInfo } from '../models/MethodInfo';

export class BindIPEndPoint {
    'target'?: any;
    'method'?: MethodInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "target",
            "baseName": "target",
            "type": "any",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "MethodInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BindIPEndPoint.attributeTypeMap;
    }

    public constructor() {
    }
}

