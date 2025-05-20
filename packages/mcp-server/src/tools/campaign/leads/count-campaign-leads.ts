// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'campaign.leads',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'count_campaign_leads',
  description: 'Get the count of leads in a specific campaign, optionally filtered by status.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
      },
      status: {
        type: 'string',
        description: "Optional lead status to filter by (e.g., 'contacted', 'replied').",
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.campaign.leads.count(body);
};

export default { metadata, tool, handler };
