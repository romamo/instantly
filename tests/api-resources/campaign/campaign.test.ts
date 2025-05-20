// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly from 'instantly';

const client = new Instantly({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaign', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.campaign.retrieve({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.campaign.retrieve({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.campaign.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.campaign.delete({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.campaign.delete({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
  });

  // skipped: tests are disabled for the time being
  test.skip('addLeads: only required params', async () => {
    const responsePromise = client.campaign.addLeads({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('addLeads: required and optional params', async () => {
    const response = await client.campaign.addLeads({
      campaign_id: 'camp_xxxxxxxxxxxxxx',
      check_for_duplicates: false,
      csv_url: 'https://example.com/leads.csv',
      leads: [
        {
          company_name: 'Innovate Ltd.',
          custom_variables: { job_title: 'CTO', custom_greeting: 'Hope you are having a great week' },
          email: 'jane.doe@example.com',
          first_name: 'Jane',
          last_name: 'Doe',
          linkedin_url: 'https://linkedin.com/in/janedoe',
          phone: '+1234567890',
          website: 'innovate.com',
        },
      ],
      skip_if_in_campaign: false,
      update_if_duplicate_exists: false,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('archive: only required params', async () => {
    const responsePromise = client.campaign.archive({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('archive: required and optional params', async () => {
    const response = await client.campaign.archive({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
  });

  // skipped: tests are disabled for the time being
  test.skip('getAnalytics', async () => {
    const responsePromise = client.campaign.getAnalytics('camp_xxxxxxxxxxxxxx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('launch: only required params', async () => {
    const responsePromise = client.campaign.launch({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('launch: required and optional params', async () => {
    const response = await client.campaign.launch({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
  });

  // skipped: tests are disabled for the time being
  test.skip('pause: only required params', async () => {
    const responsePromise = client.campaign.pause({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('pause: required and optional params', async () => {
    const response = await client.campaign.pause({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
  });

  // skipped: tests are disabled for the time being
  test.skip('unarchive: only required params', async () => {
    const responsePromise = client.campaign.unarchive({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('unarchive: required and optional params', async () => {
    const response = await client.campaign.unarchive({ campaign_id: 'camp_xxxxxxxxxxxxxx' });
  });
});
