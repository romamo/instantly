// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Accounts extends APIResource {
  /**
   * Retrieve a list of email accounts connected to the Unibox.
   *
   * @example
   * ```ts
   * const accounts = await client.unibox.accounts.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AccountListResponse> {
    return this._client.get('/unibox/accounts/list', options);
  }
}

export type AccountListResponse = Array<AccountListResponse.AccountListResponseItem>;

export namespace AccountListResponse {
  export interface AccountListResponseItem {
    email_account?: string;

    is_paused?: boolean;

    last_synced_at?: string;

    provider?: string;

    status?: string;
  }
}

export declare namespace Accounts {
  export { type AccountListResponse as AccountListResponse };
}
