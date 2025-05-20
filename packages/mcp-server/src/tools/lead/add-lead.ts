// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'lead',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'add_lead',
  description:
    'Adds a single lead to a specified campaign. Consider using `/campaign/add-leads` for bulk additions.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      check_for_duplicates: {
        type: 'boolean',
      },
      company_name: {
        type: 'string',
      },
      custom_variables: {
        type: 'object',
      },
      first_name: {
        type: 'string',
      },
      last_name: {
        type: 'string',
      },
      skip_if_in_campaign: {
        type: 'boolean',
      },
      update_if_duplicate_exists: {
        type: 'boolean',
      },
      website: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.lead.add(body);
};

export default { metadata, tool, handler };
