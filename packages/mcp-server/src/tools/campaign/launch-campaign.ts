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
  name: 'launch_campaign',
  description: 'Launches a campaign that is currently in draft or paused state.',
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
  const body = args as any;
  return client.campaign.launch(body);
};

export default { metadata, tool, handler };
