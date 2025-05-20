// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'lead',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_lead',
  description: 'Deletes a lead from a specific campaign. Does not remove from master suppression list.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
        description:
          'Campaign ID from which to delete the lead (identified by email). Required if lead_id is not provided.',
      },
      email: {
        type: 'string',
        description: 'Email address of the lead. Required if lead_id is not provided.',
      },
      lead_id: {
        type: 'string',
        description: 'The Instantly ID of the lead.',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.lead.delete(body);
};

export default { metadata, tool, handler };
