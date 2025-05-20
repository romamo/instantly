// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'campaign',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_analytics_campaign',
  description: 'Retrieve analytics data for a specific campaign.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const { campaign_id, ...body } = args as any;
  return client.campaign.getAnalytics(campaign_id);
};

export default { metadata, tool, handler };
