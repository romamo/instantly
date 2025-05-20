// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LeadsAPI from './leads';
import { LeadCountParams, LeadCountResponse, Leads } from './leads';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CampaignResource extends APIResource {
  leads: LeadsAPI.Leads = new LeadsAPI.Leads(this._client);

  /**
   * Retrieve detailed information about a specific campaign.
   *
   * @example
   * ```ts
   * const campaign = await client.campaign.retrieve({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  retrieve(body: CampaignRetrieveParams, options?: RequestOptions): APIPromise<CampaignRetrieveResponse> {
    return this._client.post('/campaign/get', { body, ...options });
  }

  /**
   * Retrieve a list of all campaigns associated with your API key.
   *
   * @example
   * ```ts
   * const campaigns = await client.campaign.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CampaignListResponse> {
    return this._client.get('/campaign/list', options);
  }

  /**
   * Permanently deletes a campaign and all its associated data. This action is
   * irreversible.
   *
   * @example
   * ```ts
   * const campaign = await client.campaign.delete({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  delete(body: CampaignDeleteParams, options?: RequestOptions): APIPromise<CampaignDeleteResponse> {
    return this._client.post('/campaign/delete', { body, ...options });
  }

  /**
   * Add leads to a specified campaign. You can provide lead data directly, or a URL
   * to a CSV file.
   *
   * @example
   * ```ts
   * const response = await client.campaign.addLeads({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  addLeads(body: CampaignAddLeadsParams, options?: RequestOptions): APIPromise<CampaignAddLeadsResponse> {
    return this._client.post('/campaign/add-leads', { body, ...options });
  }

  /**
   * Archives a campaign. Archived campaigns are not deleted but are hidden from the
   * main list.
   *
   * @example
   * ```ts
   * const response = await client.campaign.archive({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  archive(body: CampaignArchiveParams, options?: RequestOptions): APIPromise<CampaignArchiveResponse> {
    return this._client.post('/campaign/archive', { body, ...options });
  }

  /**
   * Retrieve analytics data for a specific campaign.
   *
   * @example
   * ```ts
   * const response = await client.campaign.getAnalytics(
   *   'camp_xxxxxxxxxxxxxx',
   * );
   * ```
   */
  getAnalytics(campaignID: string, options?: RequestOptions): APIPromise<CampaignGetAnalyticsResponse> {
    return this._client.get(path`/campaign/${campaignID}/analytics`, options);
  }

  /**
   * Launches a campaign that is currently in draft or paused state.
   *
   * @example
   * ```ts
   * const response = await client.campaign.launch({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  launch(body: CampaignLaunchParams, options?: RequestOptions): APIPromise<CampaignLaunchResponse> {
    return this._client.post('/campaign/launch', { body, ...options });
  }

  /**
   * Pauses an active campaign.
   *
   * @example
   * ```ts
   * const response = await client.campaign.pause({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  pause(body: CampaignPauseParams, options?: RequestOptions): APIPromise<CampaignPauseResponse> {
    return this._client.post('/campaign/pause', { body, ...options });
  }

  /**
   * Unarchives a previously archived campaign.
   *
   * @example
   * ```ts
   * const response = await client.campaign.unarchive({
   *   campaign_id: 'camp_xxxxxxxxxxxxxx',
   * });
   * ```
   */
  unarchive(body: CampaignUnarchiveParams, options?: RequestOptions): APIPromise<CampaignUnarchiveResponse> {
    return this._client.post('/campaign/unarchive', { body, ...options });
  }
}

export interface Campaign {
  campaign_id?: string;

  created_at?: string;

  name?: string;

  stats?: Campaign.Stats;

  status?: 'active' | 'paused' | 'draft' | 'completed' | 'archived';

  updated_at?: string;
}

export namespace Campaign {
  export interface Stats {
    leads?: number;

    meetings?: number;

    opens?: number;

    opportunities?: number;

    replies?: number;

    sent?: number;
  }
}

export interface CampaignRetrieveResponse extends Campaign {
  schedule?: string;

  sending_accounts?: Array<string>;

  sequence?: Array<CampaignRetrieveResponse.Sequence>;
}

export namespace CampaignRetrieveResponse {
  export interface Sequence {
    body_template?: string;

    delay_days?: number;

    step_number?: number;

    subject?: string;
  }
}

export type CampaignListResponse = Array<Campaign>;

export interface CampaignDeleteResponse {
  message?: string;

  success?: boolean;
}

export interface CampaignAddLeadsResponse {
  added_count?: number;

  error_count?: number;

  message?: string;

  skipped_count?: number;

  success?: boolean;
}

export interface CampaignArchiveResponse {
  message?: string;

  success?: boolean;
}

export interface CampaignGetAnalyticsResponse {
  campaign_id?: string;

  interest_rate?: number;

  meeting_rate?: number;

  open_rate?: number;

  reply_rate?: number;

  total_bounced?: number;

  total_delivered?: number;

  total_interested?: number;

  total_leads?: number;

  total_meetings_booked?: number;

  total_opened?: number;

  total_replied?: number;

  total_sent?: number;

  total_unsubscribed?: number;
}

export interface CampaignLaunchResponse {
  message?: string;

  success?: boolean;
}

export interface CampaignPauseResponse {
  message?: string;

  success?: boolean;
}

export interface CampaignUnarchiveResponse {
  message?: string;

  success?: boolean;
}

export interface CampaignRetrieveParams {
  campaign_id: string;
}

export interface CampaignDeleteParams {
  campaign_id: string;
}

export interface CampaignAddLeadsParams {
  /**
   * The ID of the campaign to add leads to.
   */
  campaign_id: string;

  /**
   * If true, checks for duplicates across all campaigns and the master suppression
   * list.
   */
  check_for_duplicates?: boolean;

  /**
   * URL to a CSV file containing leads. One of `leads` or `csv_url` must be
   * provided.
   */
  csv_url?: string;

  /**
   * An array of lead objects.
   */
  leads?: Array<CampaignAddLeadsParams.Lead>;

  /**
   * If true, skips adding leads that already exist in this campaign.
   */
  skip_if_in_campaign?: boolean;

  /**
   * If true and a duplicate exists, updates the existing lead with new information.
   */
  update_if_duplicate_exists?: boolean;
}

export namespace CampaignAddLeadsParams {
  export interface Lead {
    company_name?: string;

    custom_variables?: Record<string, string>;

    email?: string;

    first_name?: string;

    last_name?: string;

    linkedin_url?: string;

    phone?: string;

    website?: string;
  }
}

export interface CampaignArchiveParams {
  campaign_id: string;
}

export interface CampaignLaunchParams {
  campaign_id: string;
}

export interface CampaignPauseParams {
  campaign_id: string;
}

export interface CampaignUnarchiveParams {
  campaign_id: string;
}

CampaignResource.Leads = Leads;

export declare namespace CampaignResource {
  export {
    type Campaign as Campaign,
    type CampaignRetrieveResponse as CampaignRetrieveResponse,
    type CampaignListResponse as CampaignListResponse,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignAddLeadsResponse as CampaignAddLeadsResponse,
    type CampaignArchiveResponse as CampaignArchiveResponse,
    type CampaignGetAnalyticsResponse as CampaignGetAnalyticsResponse,
    type CampaignLaunchResponse as CampaignLaunchResponse,
    type CampaignPauseResponse as CampaignPauseResponse,
    type CampaignUnarchiveResponse as CampaignUnarchiveResponse,
    type CampaignRetrieveParams as CampaignRetrieveParams,
    type CampaignDeleteParams as CampaignDeleteParams,
    type CampaignAddLeadsParams as CampaignAddLeadsParams,
    type CampaignArchiveParams as CampaignArchiveParams,
    type CampaignLaunchParams as CampaignLaunchParams,
    type CampaignPauseParams as CampaignPauseParams,
    type CampaignUnarchiveParams as CampaignUnarchiveParams,
  };

  export {
    Leads as Leads,
    type LeadCountResponse as LeadCountResponse,
    type LeadCountParams as LeadCountParams,
  };
}
