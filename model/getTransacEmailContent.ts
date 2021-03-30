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

import { GetTransacEmailContentEvents } from './getTransacEmailContentEvents';

export class GetTransacEmailContent {
    /**
    * Email address to which transactional email has been sent
    */
    'email': string;
    /**
    * Subject of the sent email
    */
    'subject': string;
    /**
    * Id of the template
    */
    'templateId'?: number;
    /**
    * Date on which transactional email was sent
    */
    'date': Date;
    /**
    * Series of events which occurred on the transactional email
    */
    'events': Array<GetTransacEmailContentEvents>;
    /**
    * Actual content of the transactional email that has been sent
    */
    'body': string;
    /**
    * Count of the attachments that were sent in the email
    */
    'attachmentCount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "number"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "Date"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<GetTransacEmailContentEvents>"
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "attachmentCount",
            "baseName": "attachmentCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return GetTransacEmailContent.attributeTypeMap;
    }
}

