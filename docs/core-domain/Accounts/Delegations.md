--- 
title: '' 
sidebar_label: 'Delegations' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Account delegation history<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Account delegation history

Returns the delegation history of one account given its stake address.

`GET /api/core/accounts/{stake_address}/delegations`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| stake_address|Bech32 Stake address|path|string|true|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order the delegation events are returned - "desc" descending (default) from newest to oldest - "asc" ascending from oldest to newest|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const delegations = await CBI.core.accounts.delegations_({ stake_address: "stake_test1urkmj2vzdey7ac065rleyrc03fzp7gxxhw32pzgxv8dwuasaqtjuz" });
console.log(delegations); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import coming.soon 😀 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
[
 {
  "epoch_no": 56,
  "tx_hash_hex": "9ed7815f388caa4e96dfef5bf60bb2a959a045fc2753c0c4be4df43e4dd4beca",
  "pool_id": "pool1mvgpsafktxs883p66awp7fplj73cj6j9hqdxzvqw494f7f0v2dp",
  "slot_no": 22111791,
  "block_no": 684993,
  "block_time": "2023-03-02T22:09:51"
 },
 "...",
 {
  "epoch_no": 54,
  "tx_hash_hex": "8a3e09f1e02e8a85799951f3cdfbb552c14bd3a439397460be5e29f33a8ab6d7",
  "pool_id": "pool13ved7up7lkz220kv8r84h76lgt27a3umyf7uewlxxclxvdm6zlf",
  "slot_no": 21242755,
  "block_no": 650749,
  "block_time": "2023-02-20T20:45:55"
 }
]
``` 
</TabItem> 
<TabItem value="400" label="400" attributes={{className: styles.red}}> 

`Bad Request: The request was unacceptable, often due to missing a required parameter.`

```json
Response schema is undefined.
``` 
</TabItem> 
<TabItem value="401" label="401" attributes={{className: styles.red}}> 

`Unauthorized: No valid API key provided.`

```json
Response schema is undefined.
``` 
</TabItem> 
<TabItem value="402" label="402" attributes={{className: styles.red}}> 

`Quota Exceeded: This API key has reached its usage limit on request.`

```json
Response schema is undefined.
``` 
</TabItem> 
<TabItem value="403" label="403" attributes={{className: styles.red}}> 

`Access Denied: The request is missing a valid API key or token.`

```json
Response schema is undefined.
``` 
</TabItem> 
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

```json
Response schema is undefined.
``` 
</TabItem> 
<TabItem value="429" label="429" attributes={{className: styles.red}}> 

`Too Many Requests: This API key has reached its rate limit.`

```json
Response schema is undefined.
``` 
</TabItem> 
</Tabs>

### 💌 Response Schemas 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}>

Status Code **200**

|Name|Type|Description| 
|---|---|---|
| epoch_no|integer(int64)|The epoch number in which the given delegation was active.|
| tx_hash_hex|string|The hexadecimal encoding of the hash identifier of the delegation transaction.|
| pool_id|string|The Bech32 encoding of the pool being delegated to.|
| slot_no|integer(int64)|The slot number for this delegation.|
| block_no|integer(int64)|The block number for this delegation.|
| block_time|string(date-time)|The block time (UTCTime) for this delegation.|
</TabItem> 
<TabItem value="400" label="400" attributes={{className: styles.red}}>

Status Code **400**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
<TabItem value="401" label="401" attributes={{className: styles.red}}>

Status Code **401**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
<TabItem value="402" label="402" attributes={{className: styles.red}}>

Status Code **402**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
<TabItem value="403" label="403" attributes={{className: styles.red}}>

Status Code **403**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
<TabItem value="429" label="429" attributes={{className: styles.red}}>

Status Code **429**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>
