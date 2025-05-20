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
  name: 'add_suppression',
  description: 'Add an email address or domain to the master suppression list.',
  inputSchema: {
    type: 'object',
    properties: {
      domain: {
        type: 'string',
        description: 'Domain to suppress (e.g., example.com). Provide either email or domain.',
      },
      email: {
        type: 'string',
        description: 'Email address to suppress.',
      },
      reason: {
        type: 'string',
        description: 'Reason for suppression.',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.suppression.add(body);
};

export default { metadata, tool, handler };
