--- 
title: '' 
sidebar_label: 'Stakes' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> One pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch and one pool stake distributions<br/>
<EndpointBadge type="GET"/> Latest epoch and one pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch and one pool stake distributions <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool stake distributions

Returns the stake distribution for one pool across all epochs given its Bech32 pool hash.

`GET /api/core/epochs/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_hash|Bech32 pool hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(stakes_pools); 
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
  "epoch_stake_id": 27444343,
  "epoch_stake_amount": 10003622270,
  "epoch_stake_epoch_no": 291,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 2480780
 },
 "...",
 {
  "epoch_stake_id": 34070244,
  "epoch_stake_amount": 5929639482,
  "epoch_stake_epoch_no": 299,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1uxznzaxr3s9xkqae6vukvldh7xh6gzndkmcxmmm84tnj0vgysjxst",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 1733254
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch and one pool stake distributions

Returns the stake distribution for one epoch given its number, and for one pool given its Bech32 pool hash.

`GET /api/core/epochs/{epoch_no}/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| epoch_no|Epoch number|path|integer|true|
| pool_hash|Bech32 pool hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ epoch_no: 394, pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(stakes_pools); 
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
  "epoch_stake_id": 27444343,
  "epoch_stake_amount": 10003622270,
  "epoch_stake_epoch_no": 291,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 2480780
 },
 "...",
 {
  "epoch_stake_id": 34070244,
  "epoch_stake_amount": 5929639482,
  "epoch_stake_epoch_no": 299,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1uxznzaxr3s9xkqae6vukvldh7xh6gzndkmcxmmm84tnj0vgysjxst",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 1733254
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Latest epoch and one pool stake distributions

Returns the stake distribution for the latest epoch, and for one pool given its Bech32 pool hash.

`GET /api/core/epochs/latest/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_hash|Bech32 pool hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.latest.stakes.pools_({ pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(stakes_pools); 
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
  "epoch_stake_id": 150728040,
  "epoch_stake_amount": 362543189,
  "epoch_stake_epoch_no": 399,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1uyzksayntzw2wqjq4a590xaqdcz902xyfk3zfecdrx3c02qlxkamy",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 5121018
 },
 "...",
 {
  "epoch_stake_id": 151406866,
  "epoch_stake_amount": 110884586,
  "epoch_stake_epoch_no": 399,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1uxxgkqzzcn6wn8pmx4mqaajhdd7dn0ucwyc43zvp2cv4uhcg3akdj",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 1530071
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch and one pool stake distributions <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the stake distribution for one epoch given its number, and for one pool given its Bech32 pool hash.

`GET /api/core/odata/epochsstakes`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| epoch_no|Epoch number|query|integer|false|
| pool_hash|Bech32 pool hash|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochsstakes = await CBI.core.epochsstakes_({ "odata": true, epoch_no: 394, pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(epochsstakes); 
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
 "@odata.context": "https://mainnet.cardanobi.io/api/core/odata/$metadata#EpochsStakes",
 "value": [
  {
   "epoch_stake_id": 144262725,
   "epoch_stake_amount": 361997515,
   "epoch_stake_epoch_no": 394,
   "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
   "stake_address": "stake1uyzksayntzw2wqjq4a590xaqdcz902xyfk3zfecdrx3c02qlxkamy",
   "stake_address_script_hash_hex": null,
   "stake_address_id": 5121018
  },
  "...",
  {
   "epoch_stake_id": 144924012,
   "epoch_stake_amount": 996783012,
   "epoch_stake_epoch_no": 394,
   "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
   "stake_address": "stake1uxydt5atzlyuuz8g56vdgn5gpjmq9z7uycv8tlcm3x5p04qrujteq",
   "stake_address_script_hash_hex": null,
   "stake_address_id": 2678047
  }
 ],
 "@odata.nextLink": "https://mainnet.cardanobi.io/api/core/odata/epochsstakes?epoch_no=394&pool_hash=pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc&$skip=20"
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
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
