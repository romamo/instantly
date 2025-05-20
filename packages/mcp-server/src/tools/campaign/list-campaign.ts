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
  name: 'list_campaign',
  description: 'Retrieve a list of all campaigns associated with your API key.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  return client.campaign.list();
};

export default { metadata, tool, handler };
