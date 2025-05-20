// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'workspace',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_workspace',
  description: 'Retrieve a list of workspaces the user has access to.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  return client.workspace.list();
};

export default { metadata, tool, handler };
