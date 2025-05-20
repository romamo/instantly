// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Workspace extends APIResource {
  /**
   * Retrieve a list of workspaces the user has access to.
   */
  list(options?: RequestOptions): APIPromise<WorkspaceListResponse> {
    return this._client.get('/workspace/list', options);
  }
}

export type WorkspaceListResponse = Array<WorkspaceListResponse.WorkspaceListResponseItem>;

export namespace WorkspaceListResponse {
  export interface WorkspaceListResponseItem {
    name?: string;

    owner_email?: string;

    workspace_id?: string;
  }
}

export declare namespace Workspace {
  export { type WorkspaceListResponse as WorkspaceListResponse };
}
