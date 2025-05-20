// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Leads extends APIResource {
  /**
   * Get the count of leads in a specific campaign, optionally filtered by status.
   *
   * @example
   * ```ts
   * const response = await client.campaign.leads.count({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  count(body: LeadCountParams, options?: RequestOptions): APIPromise<LeadCountResponse> {
    return this._client.post('/campaign/leads/count', { body, ...options });
  }
}

export interface LeadCountResponse {
  count?: number;
}

export interface LeadCountParams {
  campaign_id: string;

  /**
   * Optional lead status to filter by (e.g., 'contacted', 'replied').
   */
  status?: string;
}

export declare namespace Leads {
  export { type LeadCountResponse as LeadCountResponse, type LeadCountParams as LeadCountParams };
}
