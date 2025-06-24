// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BackgroundJobs extends APIResource {}

/**
 * A background job that can be used to perform long-running tasks
 */
export interface BackgroundJob {
  /**
   * Unique identifier for the background job
   */
  id: string;

  /**
   * Timestamp when the job was created
   */
  created_at: string;

  /**
   * Progress of the job as a percentage (from 0 to 100)
   */
  progress: number;

  /**
   * Job status
   */
  status: 'pending' | 'in-progress' | 'success' | 'failed';

  /**
   * Type of background job
   */
  type: 'move-leads' | 'import-leads' | 'export-leads';

  /**
   * Timestamp when the job was last updated
   */
  updated_at: string;

  /**
   * Workspace ID
   */
  workspace_id: string;

  /**
   * Data about the job, used to store any additional information we need to process
   * the job
   */
  data?: { [key: string]: unknown };

  /**
   * The id of the entity that the job is related to
   */
  entity_id?: string;

  /**
   * Type of entity
   */
  entity_type?: 'list' | 'campaign';

  /**
   * The id of the user that triggered the action that created the job
   */
  user_id?: string;
}

export declare namespace BackgroundJobs {
  export { type BackgroundJob as BackgroundJob };
}
