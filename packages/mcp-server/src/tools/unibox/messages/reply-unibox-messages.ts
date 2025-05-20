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
  name: 'reply_unibox_messages',
  description: 'Send a reply to a message in the Unibox.',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'string',
        description: 'The content of the reply message.',
      },
      email_account: {
        type: 'string',
        description: 'The email account to send the reply from.',
      },
      message_id: {
        type: 'string',
        description: 'The ID of the message to reply to.',
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.unibox.messages.reply(body);
};

export default { metadata, tool, handler };
