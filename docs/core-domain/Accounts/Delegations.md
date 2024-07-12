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


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const delegations = await CBI.core.accounts.delegations_({ stake_address: "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma" });
console.log(delegations); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
delegations = await CBI.core.accounts.delegations_(stake_address='stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma');
print(delegations); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let delegations_delegations = CBI.core.accounts.delegations_(Some("stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma"), HashMap::new()).await.expect("Failed to call endpoint");
println!("delegations_delegations: {:?}", delegations_delegations); 
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
  "epoch_no": 291,
  "tx_hash_hex": "a2d498e6f9e0be00877772911ffc39e0336227e1377f52f2d4880efd80b4def7",
  "pool_id": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "slot_no": 39642132,
  "block_no": 6222553,
  "block_time": "2021-09-09T17:27:03"
 },
 "...",
 {
  "epoch_no": 472,
  "tx_hash_hex": "004ac881d9fd1a6748a72547e82e89beb074e96c3a76670c5a11b494d9260f31",
  "pool_id": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "slot_no": 117819415,
  "block_no": 10004208,
  "block_time": "2024-03-02T13:21:46"
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
