--- 
title: '' 
sidebar_label: 'Withdrawals' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Reward account withdrawal transactions<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Reward account withdrawal transactions

Returns details of a transaction used to withdraw rewards given its staked address.

`GET /api/core/transactions/{transaction_hash}/withdrawals`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const withdrawals = await CBI.core.transactions.withdrawals_({ transaction_hash: "cb44c5dd07ab3fee81f05ddd3e4596d2664e6c0ae77bccf99d1c9605dd01808d" });
console.log(withdrawals); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
withdrawals = await CBI.core.transactions.withdrawals_(transaction_hash='cb44c5dd07ab3fee81f05ddd3e4596d2664e6c0ae77bccf99d1c9605dd01808d');
print(withdrawals); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let withdrawals_withdrawals = CBI.core.transactions.withdrawals_(Some("cb44c5dd07ab3fee81f05ddd3e4596d2664e6c0ae77bccf99d1c9605dd01808d"), HashMap::new()).await.expect("Failed to call endpoint");
println!("withdrawals_withdrawals: {:?}", withdrawals_withdrawals); 
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
  "stake_address": "stake1u9frlh9lvpdjva46ge0yc4c8zg5e0d37ch42zyyrzmu2hygnmy4xc",
  "amount": 1223813,
  "redeemer_id": null
 },
 "...",
 {
  "stake_address": "stake1u9frlh9lvpdjva46ge0yc4c8zg5e0d37ch42zyyrzmu2hygnmy4xc",
  "amount": 1223813,
  "redeemer_id": null
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
| stake_address|string|The Bech32 encoded version of the stake address.|
| amount|number(double)|The withdrawal amount (in Lovelace).|
| redeemer_id|integer(int64)|The Redeemer table index that is related with this withdrawal.|
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
