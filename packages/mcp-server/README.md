# Instantly TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/instantly-typescript.git
cd instantly-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export INSTANTLY_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y instantly-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "instantly_api": {
      "command": "node",
      "args": [
        "/path/to/local/instantly-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "INSTANTLY_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "instantly-mcp/server";

// import a specific tool
import retrieveCampaign from "instantly-mcp/tools/campaign/retrieve-campaign";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveCampaign, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `campaign`:

- `retrieve_campaign` (`write`): Retrieve detailed information about a specific campaign.
- `list_campaign` (`read`): Retrieve a list of all campaigns associated with your API key.
- `delete_campaign` (`write`): Permanently deletes a campaign and all its associated data. This action is irreversible.
- `add_leads_campaign` (`write`): Add leads to a specified campaign. You can provide lead data directly, or a URL to a CSV file.
- `archive_campaign` (`write`): Archives a campaign. Archived campaigns are not deleted but are hidden from the main list.
- `get_analytics_campaign` (`read`): Retrieve analytics data for a specific campaign.
- `launch_campaign` (`write`): Launches a campaign that is currently in draft or paused state.
- `pause_campaign` (`write`): Pauses an active campaign.
- `unarchive_campaign` (`write`): Unarchives a previously archived campaign.

### Resource `campaign.leads`:

- `count_campaign_leads` (`write`): Get the count of leads in a specific campaign, optionally filtered by status.

### Resource `lead`:

- `delete_lead` (`write`): Deletes a lead from a specific campaign. Does not remove from master suppression list.
- `add_lead` (`write`): Adds a single lead to a specified campaign. Consider using `/campaign/add-leads` for bulk additions.
- `get_by_id_lead` (`read`): Retrieve details for a specific lead using its Instantly lead ID.
- `set_status_lead` (`write`): Update the status of a lead (e.g., 'interested', 'not_interested', 'do_not_contact'). This also adds the lead to the account-level suppression list if the status implies no further contact.

### Resource `unibox.accounts`:

- `list_unibox_accounts` (`read`): Retrieve a list of email accounts connected to the Unibox.

### Resource `unibox.messages`:

- `list_unibox_messages` (`write`): Retrieve messages from the Unibox, with optional filtering.
- `reply_unibox_messages` (`write`): Send a reply to a message in the Unibox.

### Resource `suppression`:

- `list_suppression` (`write`): Retrieve entries from the master suppression list.
- `delete_suppression` (`write`): Remove an email address or domain from the master suppression list.
- `add_suppression` (`write`): Add an email address or domain to the master suppression list.

### Resource `account`:

- `retrieve_details_account` (`read`): Retrieve details about the authenticated user's account.
- `retrieve_usage_account` (`read`): Retrieve usage statistics for the account (e.g., emails sent, leads processed).

### Resource `integrations.crm`:

- `sync_integrations_crm` (`write`): Trigger a synchronization process with the connected CRM.

### Resource `tools`:

- `enrich_with_linkedin_tools` (`write`): Enrich lead data using a LinkedIn profile URL.
- `verify_email_tools` (`write`): Verify the deliverability of a single email address.

### Resource `workspace`:

- `list_workspace` (`read`): Retrieve a list of workspaces the user has access to.
