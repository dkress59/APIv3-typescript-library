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

import { AbTestCampaignResultClickedLinks } from './abTestCampaignResultClickedLinks';
import { AbTestCampaignResultStatistics } from './abTestCampaignResultStatistics';

export class AbTestCampaignResult {
    /**
    * Winning Campaign Info. pending = Campaign has been picked for sending and winning version is yet to be decided, tie = A tie happened between both the versions, notAvailable = Campaign has not yet been picked for sending.
    */
    'winningVersion'?: AbTestCampaignResult.WinningVersionEnum;
    /**
    * Criteria choosen for winning version (Open/Click)
    */
    'winningCriteria'?: AbTestCampaignResult.WinningCriteriaEnum;
    /**
    * Subject Line of current winning version
    */
    'winningSubjectLine'?: string;
    /**
    * Open rate for current winning version
    */
    'openRate'?: string;
    /**
    * Click rate for current winning version
    */
    'clickRate'?: string;
    /**
    * Open/Click rate for the winner version
    */
    'winningVersionRate'?: string;
    'statistics'?: AbTestCampaignResultStatistics;
    'clickedLinks'?: AbTestCampaignResultClickedLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "winningVersion",
            "baseName": "winningVersion",
            "type": "AbTestCampaignResult.WinningVersionEnum"
        },
        {
            "name": "winningCriteria",
            "baseName": "winningCriteria",
            "type": "AbTestCampaignResult.WinningCriteriaEnum"
        },
        {
            "name": "winningSubjectLine",
            "baseName": "winningSubjectLine",
            "type": "string"
        },
        {
            "name": "openRate",
            "baseName": "openRate",
            "type": "string"
        },
        {
            "name": "clickRate",
            "baseName": "clickRate",
            "type": "string"
        },
        {
            "name": "winningVersionRate",
            "baseName": "winningVersionRate",
            "type": "string"
        },
        {
            "name": "statistics",
            "baseName": "statistics",
            "type": "AbTestCampaignResultStatistics"
        },
        {
            "name": "clickedLinks",
            "baseName": "clickedLinks",
            "type": "AbTestCampaignResultClickedLinks"
        }    ];

    static getAttributeTypeMap() {
        return AbTestCampaignResult.attributeTypeMap;
    }
}

export namespace AbTestCampaignResult {
    export enum WinningVersionEnum {
        NotAvailable = <any> 'notAvailable',
        Pending = <any> 'pending',
        Tie = <any> 'tie',
        A = <any> 'A',
        B = <any> 'B'
    }
    export enum WinningCriteriaEnum {
        Open = <any> 'Open',
        Click = <any> 'Click'
    }
}
