// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Messages extends APIResource {
  /**
   * Retrieve messages from the Unibox, with optional filtering.
   *
   * @example
   * ```ts
   * const messages = await client.unibox.messages.list();
   * ```
   */
  list(
    body: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.post('/unibox/messages/list', { body, ...options });
  }

  /**
   * Send a reply to a message in the Unibox.
   *
   * @example
   * ```ts
   * const response = await client.unibox.messages.reply({
   *   body: "Thanks for your interest! Let's schedule a call.",
   *   email_account: 'sender@example.com',
   *   message_id: 'msg_zzzzzzzzzzzzzz',
   * });
   * ```
   */
  reply(body: MessageReplyParams, options?: RequestOptions): APIPromise<MessageReplyResponse> {
    return this._client.post('/unibox/message/reply', { body, ...options });
  }
}

export interface MessageListResponse {
  limit?: number;

  messages?: Array<MessageListResponse.Message>;

  page?: number;

  total_count?: number;
}

export namespace MessageListResponse {
  export interface Message {
    campaign_id?: string;

    direction?: 'incoming' | 'outgoing';

    email_account?: string;

    lead_email?: string;

    message_id?: string;

    received_at?: string;

    snippet?: string;

    status?: 'read' | 'unread' | 'replied' | 'archived';

    subject?: string;

    thread_id?: string;
  }
}

export interface MessageReplyResponse {
  message?: string;

  success?: boolean;
}

export interface MessageListParams {
  /**
   * Filter messages by campaign ID.
   */
  campaign_id?: string;

  /**
   * Filter messages by a specific email account address.
   */
  email_account?: string;

  /**
   * Filter messages by lead's email.
   */
  lead_email?: string;

  /**
   * Number of messages per page.
   */
  limit?: number;

  /**
   * Page number for pagination.
   */
  page?: number;

  /**
   * Filter messages by status (e.g., 'unread', 'read', 'replied').
   */
  status?: string;
}

export interface MessageReplyParams {
  /**
   * The content of the reply message.
   */
  body: string;

  /**
   * The email account to send the reply from.
   */
  email_account: string;

  /**
   * The ID of the message to reply to.
   */
  message_id: string;
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageReplyResponse as MessageReplyResponse,
    type MessageListParams as MessageListParams,
    type MessageReplyParams as MessageReplyParams,
  };
}
