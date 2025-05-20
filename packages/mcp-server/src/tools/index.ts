// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly from 'instantly';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import retrieve_campaign from './campaign/retrieve-campaign';
import list_campaign from './campaign/list-campaign';
import delete_campaign from './campaign/delete-campaign';
import add_leads_campaign from './campaign/add-leads-campaign';
import archive_campaign from './campaign/archive-campaign';
import get_analytics_campaign from './campaign/get-analytics-campaign';
import launch_campaign from './campaign/launch-campaign';
import pause_campaign from './campaign/pause-campaign';
import unarchive_campaign from './campaign/unarchive-campaign';
import count_campaign_leads from './campaign/leads/count-campaign-leads';
import delete_lead from './lead/delete-lead';
import add_lead from './lead/add-lead';
import get_by_id_lead from './lead/get-by-id-lead';
import set_status_lead from './lead/set-status-lead';
import list_unibox_accounts from './unibox/accounts/list-unibox-accounts';
import list_unibox_messages from './unibox/messages/list-unibox-messages';
import reply_unibox_messages from './unibox/messages/reply-unibox-messages';
import list_suppression from './suppression/list-suppression';
import delete_suppression from './suppression/delete-suppression';
import add_suppression from './suppression/add-suppression';
import retrieve_details_account from './account/retrieve-details-account';
import retrieve_usage_account from './account/retrieve-usage-account';
import sync_integrations_crm from './integrations/crm/sync-integrations-crm';
import enrich_with_linkedin_tools from './tools/enrich-with-linkedin-tools';
import verify_email_tools from './tools/verify-email-tools';
import list_workspace from './workspace/list-workspace';

export type HandlerFunction = (client: Instantly, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_campaign);
addEndpoint(list_campaign);
addEndpoint(delete_campaign);
addEndpoint(add_leads_campaign);
addEndpoint(archive_campaign);
addEndpoint(get_analytics_campaign);
addEndpoint(launch_campaign);
addEndpoint(pause_campaign);
addEndpoint(unarchive_campaign);
addEndpoint(count_campaign_leads);
addEndpoint(delete_lead);
addEndpoint(add_lead);
addEndpoint(get_by_id_lead);
addEndpoint(set_status_lead);
addEndpoint(list_unibox_accounts);
addEndpoint(list_unibox_messages);
addEndpoint(reply_unibox_messages);
addEndpoint(list_suppression);
addEndpoint(delete_suppression);
addEndpoint(add_suppression);
addEndpoint(retrieve_details_account);
addEndpoint(retrieve_usage_account);
addEndpoint(sync_integrations_crm);
addEndpoint(enrich_with_linkedin_tools);
addEndpoint(verify_email_tools);
addEndpoint(list_workspace);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
