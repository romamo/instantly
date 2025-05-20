// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly from 'instantly';

const client = new Instantly({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tools', () => {
  // skipped: tests are disabled for the time being
  test.skip('enrichWithLinkedin: only required params', async () => {
    const responsePromise = client.tools.enrichWithLinkedin({
      linkedin_url: 'https://www.linkedin.com/in/exampleprofile/',
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
  test.skip('enrichWithLinkedin: required and optional params', async () => {
    const response = await client.tools.enrichWithLinkedin({
      linkedin_url: 'https://www.linkedin.com/in/exampleprofile/',
      email: 'lead@example.com',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('verifyEmail: only required params', async () => {
    const responsePromise = client.tools.verifyEmail({ email: 'test@example.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('verifyEmail: required and optional params', async () => {
    const response = await client.tools.verifyEmail({ email: 'test@example.com' });
  });
});
