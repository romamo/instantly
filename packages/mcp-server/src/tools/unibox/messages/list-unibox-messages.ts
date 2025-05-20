// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Instantly from 'instantly';

export const metadata: Metadata = {
  resource: 'unibox.messages',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'list_unibox_messages',
  description: 'Retrieve messages from the Unibox, with optional filtering.',
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
        description: 'Filter messages by campaign ID.',
      },
      email_account: {
        type: 'string',
        description: 'Filter messages by a specific email account address.',
      },
      lead_email: {
        type: 'string',
        description: "Filter messages by lead's email.",
      },
      limit: {
        type: 'integer',
        description: 'Number of messages per page.',
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination.',
      },
      status: {
        type: 'string',
        description: "Filter messages by status (e.g., 'unread', 'read', 'replied').",
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.unibox.messages.list(body);
};

export default { metadata, tool, handler };
