// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GetAPI from './lead/get';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tools extends APIResource {
  /**
   * Enrich lead data using a LinkedIn profile URL.
   *
   * @example
   * ```ts
   * const lead = await client.tools.enrichWithLinkedin({
   *   linkedin_url:
   *     'https://www.linkedin.com/in/exampleprofile/',
   * });
   * ```
   */
  enrichWithLinkedin(body: ToolEnrichWithLinkedinParams, options?: RequestOptions): APIPromise<GetAPI.Lead> {
    return this._client.post('/tools/linkedin-enrich', { body, ...options });
  }

  /**
   * Verify the deliverability of a single email address.
   *
   * @example
   * ```ts
   * const response = await client.tools.verifyEmail({
   *   email: 'test@example.com',
   * });
   * ```
   */
  verifyEmail(body: ToolVerifyEmailParams, options?: RequestOptions): APIPromise<ToolVerifyEmailResponse> {
    return this._client.post('/tools/email-verifier', { body, ...options });
  }
}

export interface ToolVerifyEmailResponse {
  email?: string;

  is_disposable?: boolean;

  is_role_account?: boolean;

  reason?: string | null;

  status?: 'valid' | 'invalid' | 'risky' | 'unknown';
}

export interface ToolEnrichWithLinkedinParams {
  linkedin_url: string;

  /**
   * Optional email to associate the enrichment with.
   */
  email?: string;
}

export interface ToolVerifyEmailParams {
  email: string;
}

export declare namespace Tools {
  export {
    type ToolVerifyEmailResponse as ToolVerifyEmailResponse,
    type ToolEnrichWithLinkedinParams as ToolEnrichWithLinkedinParams,
    type ToolVerifyEmailParams as ToolVerifyEmailParams,
  };
}
