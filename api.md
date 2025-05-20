# Campaign

Types:

- <code><a href="./src/resources/campaign/campaign.ts">Campaign</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignRetrieveResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignListResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignDeleteResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignAddLeadsResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignArchiveResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignGetAnalyticsResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignLaunchResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignPauseResponse</a></code>
- <code><a href="./src/resources/campaign/campaign.ts">CampaignUnarchiveResponse</a></code>

Methods:

- <code title="post /campaign/get">client.campaign.<a href="./src/resources/campaign/campaign.ts">retrieve</a>({ ...params }) -> CampaignRetrieveResponse</code>
- <code title="get /campaign/list">client.campaign.<a href="./src/resources/campaign/campaign.ts">list</a>() -> CampaignListResponse</code>
- <code title="post /campaign/delete">client.campaign.<a href="./src/resources/campaign/campaign.ts">delete</a>({ ...params }) -> CampaignDeleteResponse</code>
- <code title="post /campaign/add-leads">client.campaign.<a href="./src/resources/campaign/campaign.ts">addLeads</a>({ ...params }) -> CampaignAddLeadsResponse</code>
- <code title="post /campaign/archive">client.campaign.<a href="./src/resources/campaign/campaign.ts">archive</a>({ ...params }) -> CampaignArchiveResponse</code>
- <code title="get /campaign/{campaign_id}/analytics">client.campaign.<a href="./src/resources/campaign/campaign.ts">getAnalytics</a>(campaignID) -> CampaignGetAnalyticsResponse</code>
- <code title="post /campaign/launch">client.campaign.<a href="./src/resources/campaign/campaign.ts">launch</a>({ ...params }) -> CampaignLaunchResponse</code>
- <code title="post /campaign/pause">client.campaign.<a href="./src/resources/campaign/campaign.ts">pause</a>({ ...params }) -> CampaignPauseResponse</code>
- <code title="post /campaign/unarchive">client.campaign.<a href="./src/resources/campaign/campaign.ts">unarchive</a>({ ...params }) -> CampaignUnarchiveResponse</code>

## Leads

Types:

- <code><a href="./src/resources/campaign/leads.ts">LeadCountResponse</a></code>

Methods:

- <code title="post /campaign/leads/count">client.campaign.leads.<a href="./src/resources/campaign/leads.ts">count</a>({ ...params }) -> LeadCountResponse</code>

# Lead

Types:

- <code><a href="./src/resources/lead/lead.ts">LeadDeleteResponse</a></code>
- <code><a href="./src/resources/lead/lead.ts">LeadAddResponse</a></code>
- <code><a href="./src/resources/lead/lead.ts">LeadSetStatusResponse</a></code>

Methods:

- <code title="post /lead/delete">client.lead.<a href="./src/resources/lead/lead.ts">delete</a>({ ...params }) -> LeadDeleteResponse</code>
- <code title="post /lead/add">client.lead.<a href="./src/resources/lead/lead.ts">add</a>({ ...params }) -> LeadAddResponse</code>
- <code title="get /lead/{lead_id}/get">client.lead.<a href="./src/resources/lead/lead.ts">getByID</a>(leadID) -> Lead</code>
- <code title="post /lead/set-status">client.lead.<a href="./src/resources/lead/lead.ts">setStatus</a>({ ...params }) -> LeadSetStatusResponse</code>

## Get

Types:

- <code><a href="./src/resources/lead/get.ts">Lead</a></code>

# Unibox

## Accounts

Types:

- <code><a href="./src/resources/unibox/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /unibox/accounts/list">client.unibox.accounts.<a href="./src/resources/unibox/accounts.ts">list</a>() -> AccountListResponse</code>

## Messages

Types:

- <code><a href="./src/resources/unibox/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/unibox/messages.ts">MessageReplyResponse</a></code>

Methods:

- <code title="post /unibox/messages/list">client.unibox.messages.<a href="./src/resources/unibox/messages.ts">list</a>({ ...params }) -> MessageListResponse</code>
- <code title="post /unibox/message/reply">client.unibox.messages.<a href="./src/resources/unibox/messages.ts">reply</a>({ ...params }) -> MessageReplyResponse</code>

# Suppression

Types:

- <code><a href="./src/resources/suppression.ts">SuppressionListResponse</a></code>
- <code><a href="./src/resources/suppression.ts">SuppressionDeleteResponse</a></code>
- <code><a href="./src/resources/suppression.ts">SuppressionAddResponse</a></code>

Methods:

- <code title="post /suppression/list">client.suppression.<a href="./src/resources/suppression.ts">list</a>({ ...params }) -> SuppressionListResponse</code>
- <code title="post /suppression/delete">client.suppression.<a href="./src/resources/suppression.ts">delete</a>({ ...params }) -> SuppressionDeleteResponse</code>
- <code title="post /suppression/add">client.suppression.<a href="./src/resources/suppression.ts">add</a>({ ...params }) -> SuppressionAddResponse</code>

# Account

Types:

- <code><a href="./src/resources/account.ts">AccountRetrieveDetailsResponse</a></code>
- <code><a href="./src/resources/account.ts">AccountRetrieveUsageResponse</a></code>

Methods:

- <code title="get /account/details">client.account.<a href="./src/resources/account.ts">retrieveDetails</a>() -> AccountRetrieveDetailsResponse</code>
- <code title="get /account/usage">client.account.<a href="./src/resources/account.ts">retrieveUsage</a>() -> AccountRetrieveUsageResponse</code>

# Integrations

## CRM

Types:

- <code><a href="./src/resources/integrations/crm.ts">CRMSyncResponse</a></code>

Methods:

- <code title="post /integrations/crm/sync">client.integrations.crm.<a href="./src/resources/integrations/crm.ts">sync</a>({ ...params }) -> CRMSyncResponse</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">ToolVerifyEmailResponse</a></code>

Methods:

- <code title="post /tools/linkedin-enrich">client.tools.<a href="./src/resources/tools.ts">enrichWithLinkedin</a>({ ...params }) -> Lead</code>
- <code title="post /tools/email-verifier">client.tools.<a href="./src/resources/tools.ts">verifyEmail</a>({ ...params }) -> ToolVerifyEmailResponse</code>

# Workspace

Types:

- <code><a href="./src/resources/workspace.ts">WorkspaceListResponse</a></code>

Methods:

- <code title="get /workspace/list">client.workspace.<a href="./src/resources/workspace.ts">list</a>() -> WorkspaceListResponse</code>
