// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class Get extends APIResource {}

export interface Lead {
  added_at?: string;

  campaign_id?: string;

  company_name?: string;

  custom_variables?: Record<string, string>;

  email?: string;

  /**
   * Data from external enrichment sources.
   */
  enrichment_data?: Lead.EnrichmentData;

  first_name?: string;

  last_contacted_at?: string;

  last_name?: string;

  lead_id?: string;

  status?: string;

  website?: string;
}

export namespace Lead {
  /**
   * Data from external enrichment sources.
   */
  export interface EnrichmentData {
    company_size?: string;

    industry?: string;

    job_title?: string;

    linkedin_verified_only?: boolean;

    location?: string;
  }
}

export declare namespace Get {
  export { type Lead as Lead };
}
