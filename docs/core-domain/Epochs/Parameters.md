--- 
title: '' 
sidebar_label: 'Parameters' 
sidebar_position: 3 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All epoch params<br/>
<EndpointBadge type="GET"/> One epoch params by number<br/>
<EndpointBadge type="GET"/> All epoch params <ODataBadge/><br/>
<EndpointBadge type="GET"/> One epoch params by number <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All epoch params

Returns the parameters for all epoch.

`GET /api/core/epochs/params`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const params = await CBI.core.epochs.params_();
console.log(params); 
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
  "id": 1,
  "epoch_no": 4,
  "min_fee_a": 44,
  "min_fee_b": 155381,
  "max_block_size": 65536,
  "max_tx_size": 16384,
  "max_bh_size": 1100,
  "key_deposit": 2000000,
  "pool_deposit": 500000000,
  "max_epoch": 18,
  "optimal_pool_count": 150,
  "influence": 0.3,
  "monetary_expand_rate": 0.003,
  "treasury_growth_rate": 0.2,
  "decentralisation": 1,
  "protocol_major": 2,
  "protocol_minor": 0,
  "min_utxo_value": 1000000,
  "min_pool_cost": 340000000,
  "nonce": "Fi0pxOHPa4qE8taS5no6xrx4Ubw+bkr+ZNFXeL7YvYY=",
  "cost_model_id": null,
  "price_mem": null,
  "price_step": null,
  "max_tx_ex_mem": null,
  "max_tx_ex_steps": null,
  "max_block_ex_mem": null,
  "max_block_ex_steps": null,
  "max_val_size": null,
  "collateral_percent": null,
  "max_collateral_inputs": null,
  "block_id": 48,
  "extra_entropy": null,
  "coins_per_utxo_size": null,
  "nonce_hex": "162d29c4e1cf6b8a84f2d692e67a3ac6bc7851bc3e6e4afe64d15778bed8bd86"
 },
 "...",
 {
  "id": 20,
  "epoch_no": 23,
  "min_fee_a": 44,
  "min_fee_b": 155381,
  "max_block_size": 65536,
  "max_tx_size": 16384,
  "max_bh_size": 1100,
  "key_deposit": 2000000,
  "pool_deposit": 500000000,
  "max_epoch": 18,
  "optimal_pool_count": 150,
  "influence": 0.3,
  "monetary_expand_rate": 0.003,
  "treasury_growth_rate": 0.2,
  "decentralisation": 0,
  "protocol_major": 7,
  "protocol_minor": 0,
  "min_utxo_value": 4310,
  "min_pool_cost": 340000000,
  "nonce": "MJbMXmiWN63qsSZT517LyWk95rHucpMg3UL7p4E34PY=",
  "cost_model_id": 7,
  "price_mem": 0.0577,
  "price_step": 0.0000721,
  "max_tx_ex_mem": 10000000,
  "max_tx_ex_steps": 10000000000,
  "max_block_ex_mem": 50000000,
  "max_block_ex_steps": 40000000000,
  "max_val_size": 5000,
  "collateral_percent": 150,
  "max_collateral_inputs": 3,
  "block_id": 173257,
  "extra_entropy": null,
  "coins_per_utxo_size": 4310,
  "nonce_hex": "3096cc5e689637adeab12653e75ecbc9693de6b1ee729320dd42fba78137e0f6"
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| id|integer(int64)|The epoch param unique identifier.|
| epoch_no|integer(int32)|The first epoch for which these parameters are valid.|
| min_fee_a|integer(int32)|The 'a' parameter to calculate the minimum transaction fee.|
| min_fee_b|integer(int32)|The 'b' parameter to calculate the minimum transaction fee.|
| max_block_size|integer(int32)|The maximum block size (in bytes).|
| max_tx_size|integer(int32)|The maximum transaction size (in bytes).|
| max_bh_size|integer(int32)|The maximum block header size (in bytes).|
| key_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a StakeAddress.|
| pool_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a stake pool.|
| max_epoch|integer(int32)|The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for.|
| optimal_pool_count|integer(int32)|The optimal number of stake pools.|
| influence|number(double)|The influence of the pledge on a stake pool's probability on minting a block.|
| monetary_expand_rate|number(double)|The monetary expansion rate.|
| treasury_growth_rate|number(double)|The treasury growth rate.|
| decentralisation|number(double)|The decentralisation parameter (1 fully centralised, 0 fully decentralised).|
| protocol_major|integer(int32)|The protocol major number.|
| protocol_minor|integer(int32)|The protocol minor number.|
| min_utxo_value|number(double)|The minimum value of a UTxO entry.|
| min_pool_cost|number(double)|The minimum pool cost.|
| nonce|string(byte)|The nonce value for this epoch.|
| cost_model_id|integer(int64)|The CostModel table index for the params.|
| price_mem|number(double)|The per word cost of script memory usage.|
| price_step|number(double)|The cost of script execution step usage.|
| max_tx_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single transaction.|
| max_tx_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single transaction.|
| max_block_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single block.|
| max_block_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single block.|
| max_val_size|number(double)|The maximum Val size.|
| collateral_percent|integer(int32)|The percentage of the txfee which must be provided as collateral when including non-native scripts.|
| max_collateral_inputs|integer(int32)|The maximum number of collateral inputs allowed in a transaction.|
| block_id|integer(int64)|The Block table index for the first block where these parameters are valid.|
| extra_entropy|string(byte)|The 32 byte string of extra random-ness to be added into the protocol's entropy pool.|
| coins_per_utxo_size|number(double)|For Alonzo this is the cost per UTxO word. For Babbage and later per UTxO byte.|
| nonce_hex|string(undefined)|The nonce value for this epoch in hexadecimal form.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch params by number

Returns the parameters of one specific epoch given its number.

`GET /api/core/epochs/{no}/params`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const params = await CBI.core.epochs.params_({ "no": 30 });
console.log(params); 
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
{
 "id": 27,
 "epoch_no": 30,
 "min_fee_a": 44,
 "min_fee_b": 155381,
 "max_block_size": 90112,
 "max_tx_size": 16384,
 "max_bh_size": 1100,
 "key_deposit": 2000000,
 "pool_deposit": 500000000,
 "max_epoch": 18,
 "optimal_pool_count": 500,
 "influence": 0.3,
 "monetary_expand_rate": 0.003,
 "treasury_growth_rate": 0.2,
 "decentralisation": 0,
 "protocol_major": 7,
 "protocol_minor": 0,
 "min_utxo_value": 4310,
 "min_pool_cost": 340000000,
 "nonce": "PL7M4nIhoj/p3wJzdwDATKpIKAHRDdCQUXyXFgTq4qU=",
 "cost_model_id": 7,
 "price_mem": 0.0577,
 "price_step": 0.0000721,
 "max_tx_ex_mem": 14000000,
 "max_tx_ex_steps": 10000000000,
 "max_block_ex_mem": 62000000,
 "max_block_ex_steps": 40000000000,
 "max_val_size": 5000,
 "collateral_percent": 150,
 "max_collateral_inputs": 3,
 "block_id": 209962,
 "extra_entropy": null,
 "coins_per_utxo_size": 4310,
 "nonce_hex": "3cbecce27221a23fe9df02737700c04caa482801d10dd090517c971604eae2a5"
}
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| id|integer(int64)|The epoch param unique identifier.|
| epoch_no|integer(int32)|The first epoch for which these parameters are valid.|
| min_fee_a|integer(int32)|The 'a' parameter to calculate the minimum transaction fee.|
| min_fee_b|integer(int32)|The 'b' parameter to calculate the minimum transaction fee.|
| max_block_size|integer(int32)|The maximum block size (in bytes).|
| max_tx_size|integer(int32)|The maximum transaction size (in bytes).|
| max_bh_size|integer(int32)|The maximum block header size (in bytes).|
| key_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a StakeAddress.|
| pool_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a stake pool.|
| max_epoch|integer(int32)|The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for.|
| optimal_pool_count|integer(int32)|The optimal number of stake pools.|
| influence|number(double)|The influence of the pledge on a stake pool's probability on minting a block.|
| monetary_expand_rate|number(double)|The monetary expansion rate.|
| treasury_growth_rate|number(double)|The treasury growth rate.|
| decentralisation|number(double)|The decentralisation parameter (1 fully centralised, 0 fully decentralised).|
| protocol_major|integer(int32)|The protocol major number.|
| protocol_minor|integer(int32)|The protocol minor number.|
| min_utxo_value|number(double)|The minimum value of a UTxO entry.|
| min_pool_cost|number(double)|The minimum pool cost.|
| nonce|string(byte)|The nonce value for this epoch.|
| cost_model_id|integer(int64)|The CostModel table index for the params.|
| price_mem|number(double)|The per word cost of script memory usage.|
| price_step|number(double)|The cost of script execution step usage.|
| max_tx_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single transaction.|
| max_tx_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single transaction.|
| max_block_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single block.|
| max_block_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single block.|
| max_val_size|number(double)|The maximum Val size.|
| collateral_percent|integer(int32)|The percentage of the txfee which must be provided as collateral when including non-native scripts.|
| max_collateral_inputs|integer(int32)|The maximum number of collateral inputs allowed in a transaction.|
| block_id|integer(int64)|The Block table index for the first block where these parameters are valid.|
| extra_entropy|string(byte)|The 32 byte string of extra random-ness to be added into the protocol's entropy pool.|
| coins_per_utxo_size|number(double)|For Alonzo this is the cost per UTxO word. For Babbage and later per UTxO byte.|
| nonce_hex|string(undefined)|The nonce value for this epoch in hexadecimal form.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> All epoch params <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the parameters for all epoch.

`GET /api/core/odata/epochsparams`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochsparams = await CBI.core.epochsparams_({ "odata": true });
console.log(epochsparams); 
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
{
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#EpochsParams",
 "value": [
  {
   "id": 1,
   "epoch_no": 4,
   "min_fee_a": 44,
   "min_fee_b": 155381,
   "max_block_size": 65536,
   "max_tx_size": 16384,
   "max_bh_size": 1100,
   "key_deposit": 2000000,
   "pool_deposit": 500000000,
   "max_epoch": 18,
   "optimal_pool_count": 150,
   "influence": 0.3,
   "monetary_expand_rate": 0.003,
   "treasury_growth_rate": 0.2,
   "decentralisation": 1,
   "protocol_major": 2,
   "protocol_minor": 0,
   "min_utxo_value": 1000000,
   "min_pool_cost": 340000000,
   "nonce": "Fi0pxOHPa4qE8taS5no6xrx4Ubw+bkr+ZNFXeL7YvYY=",
   "cost_model_id": null,
   "price_mem": null,
   "price_step": null,
   "max_tx_ex_mem": null,
   "max_tx_ex_steps": null,
   "max_block_ex_mem": null,
   "max_block_ex_steps": null,
   "max_val_size": null,
   "collateral_percent": null,
   "max_collateral_inputs": null,
   "block_id": 48,
   "extra_entropy": null,
   "coins_per_utxo_size": null,
   "nonce_hex": "162d29c4e1cf6b8a84f2d692e67a3ac6bc7851bc3e6e4afe64d15778bed8bd86"
  },
  "...",
  {
   "id": 20,
   "epoch_no": 23,
   "min_fee_a": 44,
   "min_fee_b": 155381,
   "max_block_size": 65536,
   "max_tx_size": 16384,
   "max_bh_size": 1100,
   "key_deposit": 2000000,
   "pool_deposit": 500000000,
   "max_epoch": 18,
   "optimal_pool_count": 150,
   "influence": 0.3,
   "monetary_expand_rate": 0.003,
   "treasury_growth_rate": 0.2,
   "decentralisation": 0,
   "protocol_major": 7,
   "protocol_minor": 0,
   "min_utxo_value": 4310,
   "min_pool_cost": 340000000,
   "nonce": "MJbMXmiWN63qsSZT517LyWk95rHucpMg3UL7p4E34PY=",
   "cost_model_id": 7,
   "price_mem": 0.0577,
   "price_step": 0.0000721,
   "max_tx_ex_mem": 10000000,
   "max_tx_ex_steps": 10000000000,
   "max_block_ex_mem": 50000000,
   "max_block_ex_steps": 40000000000,
   "max_val_size": 5000,
   "collateral_percent": 150,
   "max_collateral_inputs": 3,
   "block_id": 173257,
   "extra_entropy": null,
   "coins_per_utxo_size": 4310,
   "nonce_hex": "3096cc5e689637adeab12653e75ecbc9693de6b1ee729320dd42fba78137e0f6"
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/epochsparams?$skip=20"
}
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| id|integer(int64)|The epoch param unique identifier.|
| epoch_no|integer(int32)|The first epoch for which these parameters are valid.|
| min_fee_a|integer(int32)|The 'a' parameter to calculate the minimum transaction fee.|
| min_fee_b|integer(int32)|The 'b' parameter to calculate the minimum transaction fee.|
| max_block_size|integer(int32)|The maximum block size (in bytes).|
| max_tx_size|integer(int32)|The maximum transaction size (in bytes).|
| max_bh_size|integer(int32)|The maximum block header size (in bytes).|
| key_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a StakeAddress.|
| pool_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a stake pool.|
| max_epoch|integer(int32)|The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for.|
| optimal_pool_count|integer(int32)|The optimal number of stake pools.|
| influence|number(double)|The influence of the pledge on a stake pool's probability on minting a block.|
| monetary_expand_rate|number(double)|The monetary expansion rate.|
| treasury_growth_rate|number(double)|The treasury growth rate.|
| decentralisation|number(double)|The decentralisation parameter (1 fully centralised, 0 fully decentralised).|
| protocol_major|integer(int32)|The protocol major number.|
| protocol_minor|integer(int32)|The protocol minor number.|
| min_utxo_value|number(double)|The minimum value of a UTxO entry.|
| min_pool_cost|number(double)|The minimum pool cost.|
| nonce|string(byte)|The nonce value for this epoch.|
| cost_model_id|integer(int64)|The CostModel table index for the params.|
| price_mem|number(double)|The per word cost of script memory usage.|
| price_step|number(double)|The cost of script execution step usage.|
| max_tx_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single transaction.|
| max_tx_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single transaction.|
| max_block_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single block.|
| max_block_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single block.|
| max_val_size|number(double)|The maximum Val size.|
| collateral_percent|integer(int32)|The percentage of the txfee which must be provided as collateral when including non-native scripts.|
| max_collateral_inputs|integer(int32)|The maximum number of collateral inputs allowed in a transaction.|
| block_id|integer(int64)|The Block table index for the first block where these parameters are valid.|
| extra_entropy|string(byte)|The 32 byte string of extra random-ness to be added into the protocol's entropy pool.|
| coins_per_utxo_size|number(double)|For Alonzo this is the cost per UTxO word. For Babbage and later per UTxO byte.|
| nonce_hex|string(undefined)|The nonce value for this epoch in hexadecimal form.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch params by number <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the parameters of one specific epoch given its number.

`GET /api/core/odata/epochsparams/{no}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochsparams = await CBI.core.epochsparams_({ "odata": true, "no": 30 });
console.log(epochsparams); 
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
{
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#EpochsParams/$entity",
 "id": 27,
 "epoch_no": 30,
 "min_fee_a": 44,
 "min_fee_b": 155381,
 "max_block_size": 90112,
 "max_tx_size": 16384,
 "max_bh_size": 1100,
 "key_deposit": 2000000,
 "pool_deposit": 500000000,
 "max_epoch": 18,
 "optimal_pool_count": 500,
 "influence": 0.3,
 "monetary_expand_rate": 0.003,
 "treasury_growth_rate": 0.2,
 "decentralisation": 0,
 "protocol_major": 7,
 "protocol_minor": 0,
 "min_utxo_value": 4310,
 "min_pool_cost": 340000000,
 "nonce": "PL7M4nIhoj/p3wJzdwDATKpIKAHRDdCQUXyXFgTq4qU=",
 "cost_model_id": 7,
 "price_mem": 0.0577,
 "price_step": 0.0000721,
 "max_tx_ex_mem": 14000000,
 "max_tx_ex_steps": 10000000000,
 "max_block_ex_mem": 62000000,
 "max_block_ex_steps": 40000000000,
 "max_val_size": 5000,
 "collateral_percent": 150,
 "max_collateral_inputs": 3,
 "block_id": 209962,
 "extra_entropy": null,
 "coins_per_utxo_size": 4310,
 "nonce_hex": "3cbecce27221a23fe9df02737700c04caa482801d10dd090517c971604eae2a5"
}
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| id|integer(int64)|The epoch param unique identifier.|
| epoch_no|integer(int32)|The first epoch for which these parameters are valid.|
| min_fee_a|integer(int32)|The 'a' parameter to calculate the minimum transaction fee.|
| min_fee_b|integer(int32)|The 'b' parameter to calculate the minimum transaction fee.|
| max_block_size|integer(int32)|The maximum block size (in bytes).|
| max_tx_size|integer(int32)|The maximum transaction size (in bytes).|
| max_bh_size|integer(int32)|The maximum block header size (in bytes).|
| key_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a StakeAddress.|
| pool_deposit|number(double)|The amount (in Lovelace) require for a deposit to register a stake pool.|
| max_epoch|integer(int32)|The maximum number of epochs in the future that a pool retirement is allowed to be scheduled for.|
| optimal_pool_count|integer(int32)|The optimal number of stake pools.|
| influence|number(double)|The influence of the pledge on a stake pool's probability on minting a block.|
| monetary_expand_rate|number(double)|The monetary expansion rate.|
| treasury_growth_rate|number(double)|The treasury growth rate.|
| decentralisation|number(double)|The decentralisation parameter (1 fully centralised, 0 fully decentralised).|
| protocol_major|integer(int32)|The protocol major number.|
| protocol_minor|integer(int32)|The protocol minor number.|
| min_utxo_value|number(double)|The minimum value of a UTxO entry.|
| min_pool_cost|number(double)|The minimum pool cost.|
| nonce|string(byte)|The nonce value for this epoch.|
| cost_model_id|integer(int64)|The CostModel table index for the params.|
| price_mem|number(double)|The per word cost of script memory usage.|
| price_step|number(double)|The cost of script execution step usage.|
| max_tx_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single transaction.|
| max_tx_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single transaction.|
| max_block_ex_mem|number(double)|The maximum number of execution memory allowed to be used in a single block.|
| max_block_ex_steps|number(double)|The maximum number of execution steps allowed to be used in a single block.|
| max_val_size|number(double)|The maximum Val size.|
| collateral_percent|integer(int32)|The percentage of the txfee which must be provided as collateral when including non-native scripts.|
| max_collateral_inputs|integer(int32)|The maximum number of collateral inputs allowed in a transaction.|
| block_id|integer(int64)|The Block table index for the first block where these parameters are valid.|
| extra_entropy|string(byte)|The 32 byte string of extra random-ness to be added into the protocol's entropy pool.|
| coins_per_utxo_size|number(double)|For Alonzo this is the cost per UTxO word. For Babbage and later per UTxO byte.|
| nonce_hex|string(undefined)|The nonce value for this epoch in hexadecimal form.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>
