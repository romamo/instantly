// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts';
import { AccountListResponse, Accounts } from './accounts';
import * as MessagesAPI from './messages';
import {
  MessageListParams,
  MessageListResponse,
  MessageReplyParams,
  MessageReplyResponse,
  Messages,
} from './messages';

export class Unibox extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

Unibox.Accounts = Accounts;
Unibox.Messages = Messages;

export declare namespace Unibox {
  export { Accounts as Accounts, type AccountListResponse as AccountListResponse };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageReplyResponse as MessageReplyResponse,
    type MessageListParams as MessageListParams,
    type MessageReplyParams as MessageReplyParams,
  };
}
