// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly from 'instantly';

const client = new Instantly({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource leads', () => {
  // skipped: tests are disabled for the time being
  test.skip('count: only required params', async () => {
    const responsePromise = client.campaign.leads.count({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('count: required and optional params', async () => {
    const response = await client.campaign.leads.count({
      campaign_id: 'camp_xxxxxxxxxxxxxx',
      status: 'contacted',
    });
  });
});
