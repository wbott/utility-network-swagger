/**
 * Swagger for Utility Network
 * Open API Specification (OAS/Swagger)  * **trace**, **updateIsConnected** from the [ArcGIS Utility Network]( https://developers.arcgis.com/rest/services-reference/utility-network-service.htm) * **generateToken** from the [ArcGIS REST API](https://developers.arcgis.com/rest/)  Tested on ArcGIS  Enterprise 10.6.1 using [NSwagStudio](https://github.com/RSuter/NSwag/wiki/NSwagStudio) C# code gen . 
 *
 * OpenAPI spec version: 0.13
 * Contact: 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * Array of objects; optional parameter.
 */
export interface FunctionBarrier {
    /**
     * Choose from a number of different calculation functions.
     */
    "functionType": FunctionBarrier.FunctionTypeEnum;
    /**
     * Choose to filter by any network attribute defined in the system.
     */
    "networkAttributeName": string;
    /**
     * Choose from a number of different operators
     */
    "operator": FunctionBarrier.OperatorEnum;
    /**
     * Specific value of the input attribute type that, if discovered, will cause the termination.(string (numeric)
     */
    "value": string;
    /**
     * Calculates values in each direction as opposed to an overall global value.
     */
    "useLocalValues"?: boolean;
}

export namespace FunctionBarrier {
    export enum FunctionTypeEnum {
        Add = <any> 'add',
        Subtract = <any> 'subtract',
        Average = <any> 'average',
        Count = <any> 'count',
        Min = <any> 'min',
        Max = <any> 'max'
    }
    export enum OperatorEnum {
        Equal = <any> 'equal',
        NotEqual = <any> 'notEqual',
        GreaterThan = <any> 'greaterThan',
        LessThan = <any> 'lessThan',
        LessThanEqual = <any> 'lessThanEqual',
        IncludesTheValues = <any> 'includesTheValues',
        DoesNotIncludeTheValues = <any> 'doesNotIncludeTheValues',
        IncludesAny = <any> 'includesAny',
        DoesNotIncludeAny = <any> 'doesNotIncludeAny'
    }
}
