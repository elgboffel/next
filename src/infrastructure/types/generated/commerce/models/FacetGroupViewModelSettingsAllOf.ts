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

import { FacetViewModelSettings } from '../models/FacetViewModelSettings';

export class FacetGroupViewModelSettingsAllOf {
    'facetSettings'?: FacetViewModelSettings;
    'facetGroupNames'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "facetSettings",
            "baseName": "facetSettings",
            "type": "FacetViewModelSettings",
            "format": ""
        },
        {
            "name": "facetGroupNames",
            "baseName": "facetGroupNames",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FacetGroupViewModelSettingsAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}
