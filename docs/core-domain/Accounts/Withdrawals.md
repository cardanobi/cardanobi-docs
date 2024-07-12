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

<EndpointBadge type="GET"/> Account withdrawal history<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Account withdrawal history

Returns the withdrawal history from one account given its stake address.

`GET /api/core/accounts/{stake_address}/withdrawals`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| stake_address|Bech32 Stake address|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const withdrawals = await CBI.core.accounts.withdrawals_({ stake_address: "stake1u9frlh9lvpdjva46ge0yc4c8zg5e0d37ch42zyyrzmu2hygnmy4xc" });
console.log(withdrawals); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
withdrawals = await CBI.core.accounts.withdrawals_(stake_address='stake1u9frlh9lvpdjva46ge0yc4c8zg5e0d37ch42zyyrzmu2hygnmy4xc');
print(withdrawals); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let withdrawals_withdrawals = CBI.core.accounts.withdrawals_(Some("stake1u9frlh9lvpdjva46ge0yc4c8zg5e0d37ch42zyyrzmu2hygnmy4xc"), HashMap::new()).await.expect("Failed to call endpoint");
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
  "block_no": 5898645,
  "tx_hash_hex": "de520b65d0d2b72620e34563c0b92bd72b9720ed7aa4e205c272795a70a700f0",
  "amount": 1338374
 },
 "...",
 {
  "block_no": 10002057,
  "tx_hash_hex": "3013802c0afeecbc7f4a5d4faeee90e95c5d3bff5f0c9fda689a9722fc89b72e",
  "amount": 2520289
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
| block_no|integer(int64)|The block number for this withdrawal transaction.|
| tx_hash_hex|string|The hexadecimal encoding of the hash identifier of the withdrawal transaction.|
| amount|integer(int64)|The withdrawal amount (in Lovelace).|
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
