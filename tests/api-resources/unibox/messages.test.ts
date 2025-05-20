// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly from 'instantly';

const client = new Instantly({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.unibox.messages.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.unibox.messages.list(
        {
          campaign_id: 'camp_xxxxxxxxxxxxxx',
          email_account: 'sender@example.com',
          lead_email: 'lead@example.com',
          limit: 25,
          page: 1,
          status: 'unread',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Instantly.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('reply: only required params', async () => {
    const responsePromise = client.unibox.messages.reply({
      body: "Thanks for your interest! Let's schedule a call.",
      email_account: 'sender@example.com',
      message_id: 'msg_zzzzzzzzzzzzzz',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('reply: required and optional params', async () => {
    const response = await client.unibox.messages.reply({
      body: "Thanks for your interest! Let's schedule a call.",
      email_account: 'sender@example.com',
      message_id: 'msg_zzzzzzzzzzzzzz',
    });
  });
});
