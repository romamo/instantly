// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly from 'instantly';

const client = new Instantly({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lead', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.lead.delete({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('add: only required params', async () => {
    const responsePromise = client.lead.add({
      campaign_id: 'camp_xxxxxxxxxxxxxx',
      email: 'john.doe@example.com',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.lead.add({
      campaign_id: 'camp_xxxxxxxxxxxxxx',
      email: 'john.doe@example.com',
      check_for_duplicates: false,
      company_name: 'Example Corp',
      custom_variables: { job_title: 'CEO', industry: 'SaaS' },
      first_name: 'John',
      last_name: 'Doe',
      skip_if_in_campaign: false,
      update_if_duplicate_exists: false,
      website: 'example.com',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getByID', async () => {
    const responsePromise = client.lead.getByID('lead_yyyyyyyyyyyyyy');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('setStatus', async () => {
    const responsePromise = client.lead.setStatus({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
