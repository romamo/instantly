// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Account extends APIResource {
  /**
   * Retrieve details about the authenticated user's account.
   */
  retrieveDetails(options?: RequestOptions): APIPromise<AccountRetrieveDetailsResponse> {
    return this._client.get('/account/details', options);
  }

  /**
   * Retrieve usage statistics for the account (e.g., emails sent, leads processed).
   */
  retrieveUsage(options?: RequestOptions): APIPromise<AccountRetrieveUsageResponse> {
    return this._client.get('/account/usage', options);
  }
}

export interface AccountRetrieveDetailsResponse {
  account_id?: string;

  created_at?: string;

  email?: string;

  name?: string;

  plan_name?: string;
}

export interface AccountRetrieveUsageResponse {
  active_campaigns?: number;

  connected_email_accounts?: number;

  cycle_end_date?: string;

  cycle_start_date?: string;

  emails_sent_current_cycle?: number;

  leads_processed_current_cycle?: number;
}

export declare namespace Account {
  export {
    type AccountRetrieveDetailsResponse as AccountRetrieveDetailsResponse,
    type AccountRetrieveUsageResponse as AccountRetrieveUsageResponse,
  };
}
