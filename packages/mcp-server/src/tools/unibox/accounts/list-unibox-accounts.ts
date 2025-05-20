// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'unibox.accounts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_unibox_accounts',
  description: 'Retrieve a list of email accounts connected to the Unibox.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  return client.unibox.accounts.list();
};

export default { metadata, tool, handler };
