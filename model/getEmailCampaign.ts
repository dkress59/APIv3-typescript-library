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

import { RequestFile } from '../api';
import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetEmailCampaignAllOf } from './getEmailCampaignAllOf';
import { GetExtendedCampaignOverview } from './getExtendedCampaignOverview';
import { GetExtendedCampaignOverviewAllOfSender } from './getExtendedCampaignOverviewAllOfSender';
import { GetExtendedCampaignStats } from './getExtendedCampaignStats';

export class GetEmailCampaign {
    /**
    * ID of the campaign
    */
    'id': number;
    /**
    * Name of the campaign
    */
    'name': string;
    /**
    * Subject of the campaign. Only available if `abTesting` flag of the campaign is `false`
    */
    'subject'?: string;
    /**
    * Type of campaign
    */
    'type': GetEmailCampaign.TypeEnum;
    /**
    * Status of the campaign
    */
    'status': GetEmailCampaign.StatusEnum;
    /**
    * UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'scheduledAt'?: Date;
    /**
    * Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled.
    */
    'abTesting'?: boolean;
    /**
    * Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
    */
    'subjectA'?: string;
    /**
    * Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
    */
    'subjectB'?: string;
    /**
    * The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true`
    */
    'splitRule'?: number;
    /**
    * Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true`
    */
    'winnerCriteria'?: string;
    /**
    * The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true`
    */
    'winnerDelay'?: number;
    /**
    * It is true if you have chosen to send your campaign at best time, otherwise it is false
    */
    'sendAtBestTime'?: boolean;
    /**
    * Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
    */
    'testSent': boolean;
    /**
    * Header of the campaign
    */
    'header': string;
    /**
    * Footer of the campaign
    */
    'footer': string;
    'sender': GetExtendedCampaignOverviewAllOfSender;
    /**
    * Email defined as the \"Reply to\" of the campaign
    */
    'replyTo': string;
    /**
    * Customisation of the \"to\" field of the campaign
    */
    'toField'?: string;
    /**
    * HTML content of the campaign
    */
    'htmlContent': string;
    /**
    * Link to share the campaign on social medias
    */
    'shareLink'?: string;
    /**
    * Tag of the campaign
    */
    'tag'?: string;
    /**
    * Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'createdAt': Date;
    /**
    * UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
    */
    'modifiedAt': Date;
    /**
    * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
    */
    'inlineImageActivation'?: boolean;
    /**
    * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
    */
    'mirrorActive'?: boolean;
    /**
    * FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
    */
    'recurring'?: boolean;
    /**
    * Sent UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ). Only available if \'status\' of the campaign is \'sent\'
    */
    'sentDate'?: Date;
    /**
    * Total number of non-delivered campaigns for a particular campaign id.
    */
    'returnBounce'?: number;
    'recipients': GetCampaignRecipients;
    'statistics': GetExtendedCampaignStats;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GetEmailCampaign.TypeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "GetEmailCampaign.StatusEnum"
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "Date"
        },
        {
            "name": "abTesting",
            "baseName": "abTesting",
            "type": "boolean"
        },
        {
            "name": "subjectA",
            "baseName": "subjectA",
            "type": "string"
        },
        {
            "name": "subjectB",
            "baseName": "subjectB",
            "type": "string"
        },
        {
            "name": "splitRule",
            "baseName": "splitRule",
            "type": "number"
        },
        {
            "name": "winnerCriteria",
            "baseName": "winnerCriteria",
            "type": "string"
        },
        {
            "name": "winnerDelay",
            "baseName": "winnerDelay",
            "type": "number"
        },
        {
            "name": "sendAtBestTime",
            "baseName": "sendAtBestTime",
            "type": "boolean"
        },
        {
            "name": "testSent",
            "baseName": "testSent",
            "type": "boolean"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "GetExtendedCampaignOverviewAllOfSender"
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string"
        },
        {
            "name": "toField",
            "baseName": "toField",
            "type": "string"
        },
        {
            "name": "htmlContent",
            "baseName": "htmlContent",
            "type": "string"
        },
        {
            "name": "shareLink",
            "baseName": "shareLink",
            "type": "string"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "inlineImageActivation",
            "baseName": "inlineImageActivation",
            "type": "boolean"
        },
        {
            "name": "mirrorActive",
            "baseName": "mirrorActive",
            "type": "boolean"
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "boolean"
        },
        {
            "name": "sentDate",
            "baseName": "sentDate",
            "type": "Date"
        },
        {
            "name": "returnBounce",
            "baseName": "returnBounce",
            "type": "number"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "GetCampaignRecipients"
        },
        {
            "name": "statistics",
            "baseName": "statistics",
            "type": "GetExtendedCampaignStats"
        }    ];

    static getAttributeTypeMap() {
        return GetEmailCampaign.attributeTypeMap;
    }
}

export namespace GetEmailCampaign {
    export enum TypeEnum {
        Classic = <any> 'classic',
        Trigger = <any> 'trigger'
    }
    export enum StatusEnum {
        Draft = <any> 'draft',
        Sent = <any> 'sent',
        Archive = <any> 'archive',
        Queued = <any> 'queued',
        Suspended = <any> 'suspended',
        InProcess = <any> 'in_process'
    }
}
