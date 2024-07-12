--- 
title: '' 
sidebar_label: 'Contracts' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Redeemers attached to a transaction<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Redeemers attached to a transaction

Returns redeemers information attached to a transaction given its hash.

`GET /api/core/transactions/{transaction_hash}/redeemers`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const redeemers = await CBI.core.transactions.redeemers_({ transaction_hash: "e584995ed133ae25e5c918d794efa415e10352b0d0e08aa02a196bbd605b9e69" });
console.log(redeemers); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
redeemers = await CBI.core.transactions.redeemers_(transaction_hash='e584995ed133ae25e5c918d794efa415e10352b0d0e08aa02a196bbd605b9e69');
print(redeemers); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let contracts_redeemers = CBI.core.transactions.redeemers_(Some("e584995ed133ae25e5c918d794efa415e10352b0d0e08aa02a196bbd605b9e69"), HashMap::new()).await.expect("Failed to call endpoint");
println!("contracts_redeemers: {:?}", contracts_redeemers); 
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
  "unit_mem": 54224,
  "unit_steps": 22301057,
  "fee": 4737,
  "purpose": "spend",
  "index": 1,
  "script_hash_hex": "da11a50969a7f77225a9e9e2c86e43d391a69dd47f339a4fd830d165",
  "hash_hex": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
  "data_json": "{\"fields\": [], \"constructor\": 0}",
  "data_cbor": "d87980"
 },
 "...",
 {
  "unit_mem": 1795845,
  "unit_steps": 821612537,
  "fee": 162859,
  "purpose": "spend",
  "index": 0,
  "script_hash_hex": "5d211d7259fc8fb6eae43875d369cd676dfe680c5fd89fd73c0b5491",
  "hash_hex": "923918e403bf43c34b4ef6b48eb2ee04babed17320d8d1b9ff9ad086e86f44ec",
  "data_json": "{\"fields\": [], \"constructor\": 0}",
  "data_cbor": "d87980"
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
| unit_mem|integer(int64)|The budget in Memory to run a script.|
| unit_steps|integer(int64)|The budget in Cpu steps to run a script.|
| fee|number(double)|The budget in fees to run a script. The fees depend on the ExUnits and the current prices. Is null when --disable-ledger is enabled. New in v13: became nullable.|
| purpose|string|What kind of validation this redeemer is used for. It can be one of 'spend', 'mint', 'cert', 'reward'.|
| index|integer(int32)|The index of the redeemer pointer in the transaction.|
| script_hash_hex|string|The hexadecimal encoding of the script hash this redeemer is used for.|
| hash_hex|string|The hexadecimal encoding of the Plutus Data hash.|
| data_json|string|The actual Plutus data in JSON format (detailed schema)|
| data_cbor|string|The actual Plutus data in CBOR format|
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
