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
  name: 'set_status_lead',
  description:
    "Update the status of a lead (e.g., 'interested', 'not_interested', 'do_not_contact'). This also adds the lead to the account-level suppression list if the status implies no further contact.",
  inputSchema: {
    type: 'object',
    properties: {
      campaign_id: {
        type: 'string',
        description:
          'Campaign ID where the lead (identified by email) exists. Only used if lead_id is not provided.',
      },
      email: {
        type: 'string',
        description: 'Email address of the lead. Required if lead_id is not provided.',
      },
      lead_id: {
        type: 'string',
        description: 'The Instantly ID of the lead.',
      },
      status: {
        type: 'string',
        description: 'The new status for the lead.',
        enum: [
          'interested',
          'not_interested',
          'meeting_booked',
          'meeting_completed',
          'maybe_later',
          'do_not_contact',
          'replied',
          'auto_replied',
          'bounced',
        ],
      },
    },
  },
};

export const handler = (client: Instantly, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.lead.setStatus(body);
};

export default { metadata, tool, handler };
