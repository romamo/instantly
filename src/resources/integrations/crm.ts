// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class CRM extends APIResource {
  /**
   * Trigger a synchronization process with the connected CRM.
   *
   * @example
   * ```ts
   * const response = await client.integrations.crm.sync();
   * ```
   */
  sync(body: CRMSyncParams | null | undefined = {}, options?: RequestOptions): APIPromise<CRMSyncResponse> {
    return this._client.post('/integrations/crm/sync', { body, ...options });
  }
}

export interface CRMSyncResponse {
  job_id?: string;

  message?: string;

  success?: boolean;
}

export interface CRMSyncParams {
  /**
   * Specify CRM type if multiple are configured (e.g., 'salesforce', 'hubspot').
   */
  crm_type?: string;
}

export declare namespace CRM {
  export { type CRMSyncResponse as CRMSyncResponse, type CRMSyncParams as CRMSyncParams };
}
