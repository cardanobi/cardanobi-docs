--- 
title: '' 
sidebar_label: 'Registrations' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Account registration history<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Account registration history

Returns the registration history of one account given its stake address.

`GET /api/core/accounts/{stake_address}/registrations`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| stake_address|Bech32 Stake address|path|string|true|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order the registration events are returned - "desc" descending (default) from newest to oldest - "asc" ascending from oldest to newest|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const registrations = await CBI.core.accounts.registrations_({ stake_address: "stake_test1urkmj2vzdey7ac065rleyrc03fzp7gxxhw32pzgxv8dwuasaqtjuz" });
console.log(registrations); 
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
  "epoch_no": 53,
  "block_no": 664590,
  "tx_hash_hex": "c878d289d40586c1fc22675794f5b5210b65c366d121e1cd699200f256c77b7f",
  "state": "registered"
 },
 "...",
 {
  "epoch_no": 52,
  "block_no": 643908,
  "tx_hash_hex": "8c9b5df9ab4211093ed90b9cd5a596e8b9882e8a48751ed2c57d4d52bbdf6837",
  "state": "deregistered"
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
| epoch_no|integer(int64)|The epoch number in which the given registration event occured.|
| block_no|integer(int64)|The block number for this registration event.|
| tx_hash_hex|string|The hexadecimal encoding of the hash identifier of the registration transaction.|
| state|string|The state of the given account following this registration event.|
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
