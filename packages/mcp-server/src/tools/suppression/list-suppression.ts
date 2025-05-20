// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'suppression',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'list_suppression',
  description: 'Retrieve entries from the master suppression list.',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: 'Filter by specific email address.',
      },
      limit: {
        type: 'integer',
      },
      page: {
        type: 'integer',
      },
      reason: {
        type: 'string',
        description: 'Filter by suppression reason.',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.suppression.list(body);
};

export default { metadata, tool, handler };
