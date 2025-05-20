// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Ctd extends APIResource {
  /**
   * Requires one of the following scopes: `accounts:read`, `accounts:all`,
   * `all:read`, `all:all`
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.accounts.ctd.retrieveStatus({
   *     host: 'example.com',
   *   });
   * ```
   */
  retrieveStatus(
    query: CtdRetrieveStatusParams,
    options?: RequestOptions,
  ): APIPromise<CtdRetrieveStatusResponse> {
    return this._client.get('/api/v2/accounts/ctd/status', { query, ...options });
  }
}

export interface CtdRetrieveStatusResponse {
  cname?: boolean;

  host?: string;

  ssl?: boolean;

  success?: boolean;
}

export interface CtdRetrieveStatusParams {
  /**
   * Custom tracking domain host
   */
  host: string;
}

export declare namespace Ctd {
  export {
    type CtdRetrieveStatusResponse as CtdRetrieveStatusResponse,
    type CtdRetrieveStatusParams as CtdRetrieveStatusParams,
  };
}
