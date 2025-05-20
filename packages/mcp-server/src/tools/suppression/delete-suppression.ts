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
  name: 'delete_suppression',
  description: 'Remove an email address or domain from the master suppression list.',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Domain to remove from suppression.',
      },
      email: {
        type: 'string',
        description: 'Email address to remove from suppression.',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.suppression.delete(body);
};

export default { metadata, tool, handler };
