// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'account',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_usage_account',
  description: 'Retrieve usage statistics for the account (e.g., emails sent, leads processed).',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  return client.account.retrieveUsage();
};

export default { metadata, tool, handler };
