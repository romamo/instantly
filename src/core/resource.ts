// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Instantly } from '../client';

export abstract class APIResource {
  protected _client: Instantly;

  constructor(client: Instantly) {
    this._client = client;
  }
}
