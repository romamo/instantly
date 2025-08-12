// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Instantly from 'instantly';

const client = new Instantly({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subsequence', () => {
  // Prism tests are disabled
  test.skip('move: only required params', async () => {
    const responsePromise = client.v2.leads.subsequence.move({
      id: '0196ed60-9e40-7820-b611-a3e45dc43c5d',
      subsequence_id: '0196ed60-9e3f-742e-9fb0-93776264c979',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('move: required and optional params', async () => {
    const response = await client.v2.leads.subsequence.move({
      id: '0196ed60-9e40-7820-b611-a3e45dc43c5d',
      subsequence_id: '0196ed60-9e3f-742e-9fb0-93776264c979',
    });
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.v2.leads.subsequence.remove({
      id: '0196ed60-9e3d-73e0-b4d2-0c43a9ce5536',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('remove: required and optional params', async () => {
    const response = await client.v2.leads.subsequence.remove({ id: '0196ed60-9e3d-73e0-b4d2-0c43a9ce5536' });
  });
});
