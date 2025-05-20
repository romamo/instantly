// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'lead',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_by_id_lead',
  description: 'Retrieve details for a specific lead using its Instantly lead ID.',
  inputSchema: {
    type: 'object',
    properties: {
      lead_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const { lead_id, ...body } = args as any;
  return client.lead.getByID(lead_id);
};

export default { metadata, tool, handler };
