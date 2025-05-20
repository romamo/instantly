// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'tools',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'verify_email_tools',
  description: 'Verify the deliverability of a single email address.',
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tools.verifyEmail(body);
};

export default { metadata, tool, handler };
