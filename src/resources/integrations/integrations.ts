// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CRMAPI from './crm';
import { CRM, CRMSyncParams, CRMSyncResponse } from './crm';

export class Integrations extends APIResource {
  crm: CRMAPI.CRM = new CRMAPI.CRM(this._client);
}

Integrations.CRM = CRM;

export declare namespace Integrations {
  export { CRM as CRM, type CRMSyncResponse as CRMSyncResponse, type CRMSyncParams as CRMSyncParams };
}
