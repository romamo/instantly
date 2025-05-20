// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'add_leads_campaign',
  description:
    'Add leads to a specified campaign. You can provide lead data directly, or a URL to a CSV file.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
        description: 'The ID of the campaign to add leads to.',
      },
      check_for_duplicates: {
        type: 'boolean',
        description: 'If true, checks for duplicates across all campaigns and the master suppression list.',
      },
      csv_url: {
        type: 'string',
        description: 'URL to a CSV file containing leads. One of `leads` or `csv_url` must be provided.',
      },
      leads: {
        type: 'array',
        description: 'An array of lead objects.',
        items: {
          type: 'object',
          properties: {
            company_name: {
              type: 'string',
            },
            custom_variables: {
              type: 'object',
            },
            email: {
              type: 'string',
            },
            first_name: {
              type: 'string',
            },
            last_name: {
              type: 'string',
            },
            linkedin_url: {
              type: 'string',
            },
            phone: {
              type: 'string',
            },
            website: {
              type: 'string',
            },
          },
          required: [],
        },
      },
      skip_if_in_campaign: {
        type: 'boolean',
        description: 'If true, skips adding leads that already exist in this campaign.',
      },
      update_if_duplicate_exists: {
        type: 'boolean',
        description: 'If true and a duplicate exists, updates the existing lead with new information.',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.campaign.addLeads(body);
};

export default { metadata, tool, handler };
