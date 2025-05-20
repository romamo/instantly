// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GetAPI from './get';
import { Get, Lead as GetAPILead } from './get';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Lead extends APIResource {
  get: GetAPI.Get = new GetAPI.Get(this._client);

  /**
   * Deletes a lead from a specific campaign. Does not remove from master suppression
   * list.
   *
   * @example
   * ```ts
   * const lead = await client.lead.delete();
   * ```
   */
  delete(body: LeadDeleteParams, options?: RequestOptions): APIPromise<LeadDeleteResponse> {
    return this._client.post('/lead/delete', { body, ...options });
  }

  /**
   * Adds a single lead to a specified campaign. Consider using `/campaign/add-leads`
   * for bulk additions.
   *
   * @example
   * ```ts
   * const response = await client.lead.add({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   *   email: 'john.doe@example.com',
   * });
   * ```
   */
  add(body: LeadAddParams, options?: RequestOptions): APIPromise<LeadAddResponse> {
    return this._client.post('/lead/add', { body, ...options });
  }

  /**
   * Retrieve details for a specific lead using its Instantly lead ID.
   *
   * @example
   * ```ts
   * const lead = await client.lead.getByID(
   *   'lead_yyyyyyyyyyyyyy',
   * );
   * ```
   */
  getByID(leadID: string, options?: RequestOptions): APIPromise<GetAPI.Lead> {
    return this._client.get(path`/lead/${leadID}/get`, options);
  }

  /**
   * Update the status of a lead (e.g., 'interested', 'not_interested',
   * 'do_not_contact'). This also adds the lead to the account-level suppression list
   * if the status implies no further contact.
   *
   * @example
   * ```ts
   * const response = await client.lead.setStatus();
   * ```
   */
  setStatus(body: LeadSetStatusParams, options?: RequestOptions): APIPromise<LeadSetStatusResponse> {
    return this._client.post('/lead/set-status', { body, ...options });
  }
}

export interface LeadDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface LeadAddResponse {
  lead_id?: string;

  message?: string;

  success?: boolean;
}

export interface LeadSetStatusResponse {
  message?: string;

  success?: boolean;
}

export interface LeadDeleteParams {
  /**
   * Campaign ID from which to delete the lead (identified by email). Required if
   * lead_id is not provided.
   */
  campaign_id?: string;

  /**
   * Email address of the lead. Required if lead_id is not provided.
   */
  email?: string;

  /**
   * The Instantly ID of the lead.
   */
  lead_id?: string;
}

export interface LeadAddParams {
  campaign_id: string;

  email: string;

  check_for_duplicates?: boolean;

  company_name?: string;

  custom_variables?: Record<string, string>;

  first_name?: string;

  last_name?: string;

  skip_if_in_campaign?: boolean;

  update_if_duplicate_exists?: boolean;

  website?: string;
}

export interface LeadSetStatusParams {
  /**
   * Campaign ID where the lead (identified by email) exists. Only used if lead_id is
   * not provided.
   */
  campaign_id?: string;

  /**
   * Email address of the lead. Required if lead_id is not provided.
   */
  email?: string;

  /**
   * The Instantly ID of the lead.
   */
  lead_id?: string;

  /**
   * The new status for the lead.
   */
  status?:
    | 'interested'
    | 'not_interested'
    | 'meeting_booked'
    | 'meeting_completed'
    | 'maybe_later'
    | 'do_not_contact'
    | 'replied'
    | 'auto_replied'
    | 'bounced';
}

Lead.Get = Get;

export declare namespace Lead {
  export {
    type LeadDeleteResponse as LeadDeleteResponse,
    type LeadAddResponse as LeadAddResponse,
    type LeadSetStatusResponse as LeadSetStatusResponse,
    type LeadDeleteParams as LeadDeleteParams,
    type LeadAddParams as LeadAddParams,
    type LeadSetStatusParams as LeadSetStatusParams,
  };

  export { Get as Get, type GetAPILead as Lead };
}
