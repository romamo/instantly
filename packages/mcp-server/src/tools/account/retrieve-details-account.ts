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
  name: 'retrieve_details_account',
  description: "Retrieve details about the authenticated user's account.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  return client.account.retrieveDetails();
};

export default { metadata, tool, handler };
