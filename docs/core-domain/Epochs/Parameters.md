--- 
title: '' 
sidebar_label: 'Parameters' 
sidebar_position: 2 
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
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
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
  "id": 0, 
  "epoch_no": 0, 
  "min_fee_a": 0, 
  "min_fee_b": 0, 
  "max_block_size": 0, 
  "max_tx_size": 0, 
  "max_bh_size": 0, 
  "key_deposit": 0, 
  "pool_deposit": 0, 
  "max_epoch": 0, 
  "optimal_pool_count": 0, 
  "influence": 0, 
  "monetary_expand_rate": 0, 
  "treasury_growth_rate": 0, 
  "decentralisation": 0, 
  "protocol_major": 0, 
  "protocol_minor": 0, 
  "min_utxo_value": 0, 
  "min_pool_cost": 0, 
  "nonce": 0, 
  "cost_model_id": 0, 
  "price_mem": 0, 
  "price_step": 0, 
  "max_tx_ex_mem": 0, 
  "max_tx_ex_steps": 0, 
  "max_block_ex_mem": 0, 
  "max_block_ex_steps": 0, 
  "max_val_size": 0, 
  "collateral_percent": 0, 
  "max_collateral_inputs": 0, 
  "block_id": 0, 
  "extra_entropy": 0, 
  "coins_per_utxo_size": 0, 
  "nonce_hex": 0
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
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
"id": 0, 
"epoch_no": 0, 
"min_fee_a": 0, 
"min_fee_b": 0, 
"max_block_size": 0, 
"max_tx_size": 0, 
"max_bh_size": 0, 
"key_deposit": 0, 
"pool_deposit": 0, 
"max_epoch": 0, 
"optimal_pool_count": 0, 
"influence": 0, 
"monetary_expand_rate": 0, 
"treasury_growth_rate": 0, 
"decentralisation": 0, 
"protocol_major": 0, 
"protocol_minor": 0, 
"min_utxo_value": 0, 
"min_pool_cost": 0, 
"nonce": 0, 
"cost_model_id": 0, 
"price_mem": 0, 
"price_step": 0, 
"max_tx_ex_mem": 0, 
"max_tx_ex_steps": 0, 
"max_block_ex_mem": 0, 
"max_block_ex_steps": 0, 
"max_val_size": 0, 
"collateral_percent": 0, 
"max_collateral_inputs": 0, 
"block_id": 0, 
"extra_entropy": 0, 
"coins_per_utxo_size": 0, 
"nonce_hex": 0
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
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
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
  "id": 0, 
  "epoch_no": 0, 
  "min_fee_a": 0, 
  "min_fee_b": 0, 
  "max_block_size": 0, 
  "max_tx_size": 0, 
  "max_bh_size": 0, 
  "key_deposit": 0, 
  "pool_deposit": 0, 
  "max_epoch": 0, 
  "optimal_pool_count": 0, 
  "influence": 0, 
  "monetary_expand_rate": 0, 
  "treasury_growth_rate": 0, 
  "decentralisation": 0, 
  "protocol_major": 0, 
  "protocol_minor": 0, 
  "min_utxo_value": 0, 
  "min_pool_cost": 0, 
  "nonce": 0, 
  "cost_model_id": 0, 
  "price_mem": 0, 
  "price_step": 0, 
  "max_tx_ex_mem": 0, 
  "max_tx_ex_steps": 0, 
  "max_block_ex_mem": 0, 
  "max_block_ex_steps": 0, 
  "max_val_size": 0, 
  "collateral_percent": 0, 
  "max_collateral_inputs": 0, 
  "block_id": 0, 
  "extra_entropy": 0, 
  "coins_per_utxo_size": 0, 
  "nonce_hex": 0
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch params by number <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the parameters of one specific epoch given its number.

`GET /api/core/odata/epochsparams/{no}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
"id": 0, 
"epoch_no": 0, 
"min_fee_a": 0, 
"min_fee_b": 0, 
"max_block_size": 0, 
"max_tx_size": 0, 
"max_bh_size": 0, 
"key_deposit": 0, 
"pool_deposit": 0, 
"max_epoch": 0, 
"optimal_pool_count": 0, 
"influence": 0, 
"monetary_expand_rate": 0, 
"treasury_growth_rate": 0, 
"decentralisation": 0, 
"protocol_major": 0, 
"protocol_minor": 0, 
"min_utxo_value": 0, 
"min_pool_cost": 0, 
"nonce": 0, 
"cost_model_id": 0, 
"price_mem": 0, 
"price_step": 0, 
"max_tx_ex_mem": 0, 
"max_tx_ex_steps": 0, 
"max_block_ex_mem": 0, 
"max_block_ex_steps": 0, 
"max_val_size": 0, 
"collateral_percent": 0, 
"max_collateral_inputs": 0, 
"block_id": 0, 
"extra_entropy": 0, 
"coins_per_utxo_size": 0, 
"nonce_hex": 0
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
