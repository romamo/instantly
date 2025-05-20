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
  name: 'enrich_with_linkedin_tools',
  description: 'Enrich lead data using a LinkedIn profile URL.',
  inputSchema: {
    type: 'object',
    properties: {
      linkedin_url: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'Optional email to associate the enrichment with.',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tools.enrichWithLinkedin(body);
};

export default { metadata, tool, handler };
