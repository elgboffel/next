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

import { FacetViewModel } from '../models/FacetViewModel';

export class FacetGroupViewModel {
    'name'?: string;
    'facetGroupType'?: string;
    'description'?: string;
    'facets'?: Array<FacetViewModel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "facetGroupType",
            "baseName": "facetGroupType",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "facets",
            "baseName": "facets",
            "type": "Array<FacetViewModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FacetGroupViewModel.attributeTypeMap;
    }

    public constructor() {
    }
}
