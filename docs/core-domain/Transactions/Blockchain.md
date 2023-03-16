--- 
title: '' 
sidebar_label: 'Blockchain' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Transactions for block chain parameter change proposals<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Transactions for block chain parameter change proposals

Returns details of a transaction used for block chain parameter change proposals.

`GET /api/core/transactions/{transaction_hash}/param_proposals`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const param_proposals = await CBI.core.transactions.param_proposals_({ transaction_hash: "62c3c13187423c47f629e6187f36fbd61a9ba1d05d101588340cfbfdf47b22d2" });
console.log(param_proposals); 
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
  "id": 381,
  "epoch_no": 393,
  "key": "Fi+UVUrIwiU4OiJIwkVlntqHDqqC0O8l/H3Ngg==",
  "min_fee_a": null,
  "min_fee_b": null,
  "max_block_size": null,
  "max_tx_size": null,
  "max_bh_size": null,
  "key_deposit": null,
  "pool_deposit": null,
  "max_epoch": null,
  "optimal_pool_count": null,
  "influence": null,
  "monetary_expand_rate": null,
  "treasury_growth_rate": null,
  "decentralisation": null,
  "entropy": null,
  "protocol_major": 8,
  "protocol_minor": 0,
  "min_utxo_value": null,
  "min_pool_cost": null,
  "cost_model_id": 111,
  "price_mem": null,
  "price_step": null,
  "max_tx_ex_mem": null,
  "max_tx_ex_steps": null,
  "max_block_ex_mem": 62000000,
  "max_block_ex_steps": 20000000000,
  "max_val_size": null,
  "collateral_percent": null,
  "max_collateral_inputs": null,
  "registered_tx_id": 60938570,
  "coins_per_utxo_size": null,
  "key_hex": "162f94554ac8c225383a2248c245659eda870eaa82d0ef25fc7dcd82"
 },
 "...",
 {
  "id": 385,
  "epoch_no": 393,
  "key": "97NBwUzVj8pBlamyeMzh70AtwOBt63flQ80XVw==",
  "min_fee_a": null,
  "min_fee_b": null,
  "max_block_size": null,
  "max_tx_size": null,
  "max_bh_size": null,
  "key_deposit": null,
  "pool_deposit": null,
  "max_epoch": null,
  "optimal_pool_count": null,
  "influence": null,
  "monetary_expand_rate": null,
  "treasury_growth_rate": null,
  "decentralisation": null,
  "entropy": null,
  "protocol_major": 8,
  "protocol_minor": 0,
  "min_utxo_value": null,
  "min_pool_cost": null,
  "cost_model_id": 111,
  "price_mem": null,
  "price_step": null,
  "max_tx_ex_mem": null,
  "max_tx_ex_steps": null,
  "max_block_ex_mem": 62000000,
  "max_block_ex_steps": 20000000000,
  "max_val_size": null,
  "collateral_percent": null,
  "max_collateral_inputs": null,
  "registered_tx_id": 60938570,
  "coins_per_utxo_size": null,
  "key_hex": "f7b341c14cd58fca4195a9b278cce1ef402dc0e06deb77e543cd1757"
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
| id|integer(int64)|The transaction unique identifier.|
| epoch_no|integer(int32)|The epoch for which this parameter proposal in intended to become active.|
| key|string(byte)|The hash of the crypto key used to sign this proposal.|
| min_fee_a|number(double)|The 'a' parameter to calculate the minimum transaction fee.|
| min_fee_b|number(double)|The 'b' parameter to calculate the minimum transaction fee.|
| max_block_size|number(double)|The maximum block size (in bytes).|
| max_tx_size|number(double)|The maximum transaction size (in bytes).|
| max_bh_size|number(double)|The maximum block header size (in bytes).|
| key_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a StakeAddress.|
| pool_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a stake pool.|
| max_epoch|number(double)|The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for.|
| optimal_pool_count|number(double)|The optimal number of stake pools.|
| influence|number(double)|The influence of the pledge on a stake pool's probability on minting a block.|
| monetary_expand_rate|number(double)|The monetary expansion rate.|
| treasury_growth_rate|number(double)|The treasury growth rate.|
| decentralisation|number(double)|The decentralisation parameter (1 fully centralised, 0 fully decentralised).|
| entropy|string(byte)|The 32 byte string of extra random-ness to be added into the protocol's entropy pool.|
| protocol_major|integer(int32)|The protocol major number.|
| protocol_minor|integer(int32)|The protocol minor number.|
| min_utxo_value|number(double)|The minimum value of a UTxO entry.|
| min_pool_cost|number(double)|The minimum pool cost.|
| cost_model_id|integer(int64)|The CostModel table index for the proposal.|
| price_mem|number(double)|The per word cost of script memory usage.|
| price_step|number(double)|The cost of script execution step usage.|
| max_tx_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single transaction.|
| max_tx_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single transaction.|
| max_block_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single block.|
| max_block_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single block.|
| max_val_size|number(double)|The maximum Val size.|
| collateral_percent|integer(int32)|The percentage of the txfee which must be provided as collateral when including non-native scripts.|
| max_collateral_inputs|integer(int32)|The maximum number of collateral inputs allowed in a transaction.|
| registered_tx_id|integer(int64)|The Tx table index for the transaction that contains this parameter proposal.|
| coins_per_utxo_size|number(double)|For Alonzo this is the cost per UTxO word. For Babbage and later per UTxO byte. New in v13: Renamed from coins_per_utxo_word.|
| key_hex|string(undefined)|The hexadecimal encoding of the hash of the crypto key used to sign this proposal.|
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
