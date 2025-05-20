// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'integrations.crm',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'sync_integrations_crm',
  description: 'Trigger a synchronization process with the connected CRM.',
  inputSchema: {
    type: 'object',
    properties: {
      crm_type: {
        type: 'string',
        description: "Specify CRM type if multiple are configured (e.g., 'salesforce', 'hubspot').",
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.integrations.crm.sync(body);
};

export default { metadata, tool, handler };
