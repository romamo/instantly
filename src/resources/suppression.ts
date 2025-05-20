// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Suppression extends APIResource {
  /**
   * Retrieve entries from the master suppression list.
   *
   * @example
   * ```ts
   * const suppressions = await client.suppression.list();
   * ```
   */
  list(
    body: SuppressionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SuppressionListResponse> {
    return this._client.post('/suppression/list', { body, ...options });
  }

  /**
   * Remove an email address or domain from the master suppression list.
   *
   * @example
   * ```ts
   * const suppression = await client.suppression.delete();
   * ```
   */
  delete(body: SuppressionDeleteParams, options?: RequestOptions): APIPromise<SuppressionDeleteResponse> {
    return this._client.post('/suppression/delete', { body, ...options });
  }

  /**
   * Add an email address or domain to the master suppression list.
   *
   * @example
   * ```ts
   * const response = await client.suppression.add();
   * ```
   */
  add(body: SuppressionAddParams, options?: RequestOptions): APIPromise<SuppressionAddResponse> {
    return this._client.post('/suppression/add', { body, ...options });
  }
}

export interface SuppressionListResponse {
  limit?: number;

  page?: number;

  suppressions?: Array<SuppressionListResponse.Suppression>;

  total_count?: number;
}

export namespace SuppressionListResponse {
  export interface Suppression {
    added_at?: string;

    domain?: string;

    email?: string;

    reason?: string;
  }
}

export interface SuppressionDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface SuppressionAddResponse {
  message?: string;

  success?: boolean;
}

export interface SuppressionListParams {
  /**
   * Filter by specific email address.
   */
  email?: string;

  limit?: number;

  page?: number;

  /**
   * Filter by suppression reason.
   */
  reason?: string;
}

export interface SuppressionDeleteParams {
  /**
   * Domain to remove from suppression.
   */
  domain?: string;

  /**
   * Email address to remove from suppression.
   */
  email?: string;
}

export interface SuppressionAddParams {
  /**
   * Domain to suppress (e.g., example.com). Provide either email or domain.
   */
  domain?: string;

  /**
   * Email address to suppress.
   */
  email?: string;

  /**
   * Reason for suppression.
   */
  reason?: string;
}

export declare namespace Suppression {
  export {
    type SuppressionListResponse as SuppressionListResponse,
    type SuppressionDeleteResponse as SuppressionDeleteResponse,
    type SuppressionAddResponse as SuppressionAddResponse,
    type SuppressionListParams as SuppressionListParams,
    type SuppressionDeleteParams as SuppressionDeleteParams,
    type SuppressionAddParams as SuppressionAddParams,
  };
}
