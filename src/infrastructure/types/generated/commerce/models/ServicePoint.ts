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

import { ServicePointBindIPEndPointDelegate } from '../models/ServicePointBindIPEndPointDelegate';
import { ServicePointCertificate } from '../models/ServicePointCertificate';

export class ServicePoint {
    'bindIPEndPointDelegate'?: ServicePointBindIPEndPointDelegate;
    'connectionLeaseTimeout'?: number;
    'maxIdleTime'?: number;
    'useNagleAlgorithm'?: boolean;
    'receiveBufferSize'?: number;
    'expect100Continue'?: boolean;
    'idleSince'?: Date;
    'protocolVersion'?: string;
    'connectionName'?: string;
    'connectionLimit'?: number;
    'currentConnections'?: number;
    'certificate'?: ServicePointCertificate;
    'clientCertificate'?: ServicePointCertificate;
    'supportsPipelining'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bindIPEndPointDelegate",
            "baseName": "bindIPEndPointDelegate",
            "type": "ServicePointBindIPEndPointDelegate",
            "format": ""
        },
        {
            "name": "connectionLeaseTimeout",
            "baseName": "connectionLeaseTimeout",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "URI",
            "format": "uri"
        },
        {
            "name": "maxIdleTime",
            "baseName": "maxIdleTime",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "useNagleAlgorithm",
            "baseName": "useNagleAlgorithm",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "receiveBufferSize",
            "baseName": "receiveBufferSize",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "expect100Continue",
            "baseName": "expect100Continue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "idleSince",
            "baseName": "idleSince",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "protocolVersion",
            "baseName": "protocolVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectionName",
            "baseName": "connectionName",
            "type": "string",
            "format": ""
        },
        {
            "name": "connectionLimit",
            "baseName": "connectionLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "currentConnections",
            "baseName": "currentConnections",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "ServicePointCertificate",
            "format": ""
        },
        {
            "name": "clientCertificate",
            "baseName": "clientCertificate",
            "type": "ServicePointCertificate",
            "format": ""
        },
        {
            "name": "supportsPipelining",
            "baseName": "supportsPipelining",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServicePoint.attributeTypeMap;
    }

    public constructor() {
    }
}

