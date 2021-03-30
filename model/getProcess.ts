/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class GetProcess {
    /**
    * Id of the process
    */
    'id': number;
    /**
    * Status of the process
    */
    'status': GetProcess.StatusEnum;
    /**
    * Process name
    */
    'name': string;
    /**
    * URL on which send export the of contacts once the process is completed
    */
    'exportUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GetProcess.StatusEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "exportUrl",
            "baseName": "export_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetProcess.attributeTypeMap;
    }
}

export namespace GetProcess {
    export enum StatusEnum {
        Queued = <any> 'queued',
        InProcess = <any> 'in_process',
        Completed = <any> 'completed'
    }
}
