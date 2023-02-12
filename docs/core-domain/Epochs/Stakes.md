--- 
title: '' 
sidebar_label: 'Stakes' 
sidebar_position: 4
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> One epoch stake distributions<br/>
<EndpointBadge type="GET"/> One pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch and one pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch stake distributions <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch stake distributions

Returns the stake distribution for one epoch given its number.

`GET /api/core/epochs/{no}/stakes`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes = await CBI.core.epochs.stakes_({ "no": 392 });
console.log(stakes); 
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
  "epoch_stake_id": 141700568,
  "epoch_stake_amount": 4400683,
  "epoch_stake_epoch_no": 392,
  "pool_hash": "pool18rpw5dwfywfrzjuy7uzn2cetrw9v85aan8a80p3fdvtqcxykkqu",
  "stake_address": "stake17y9w027e5q24cj73hga8k2kmzefvtuq73g2r0vctvy24h9c0vjgqq",
  "stake_address_script_hash_hex": "0ae7abd9a0155c4bd1ba3a7b2adb1652c5f01e8a1437b30b61155b97",
  "stake_address_id": 5408519
 },
 "...",
 {
  "epoch_stake_id": 141700587,
  "epoch_stake_amount": 129298,
  "epoch_stake_epoch_no": 392,
  "pool_hash": "pool1xmsdhync6k6grkkj7tuycskjpseykpr24luhlazl5nsngsy87gm",
  "stake_address": "stake1uyqqptyz5ccxg2amd7n2fxq7pcddj6w7rsvwy9v253g89hcwqkwpt",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 1108406
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool stake distributions

Returns the stake distribution for one pool across all epochs given its Bech32 pool hash.

`GET /api/core/epochs/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_hash|Bech32 pool hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch and one pool stake distributions

Returns the stake distribution for one epoch given its number, and for one pool given its Bech32 pool hash.

`GET /api/core/epochs/{no}/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|
| pool_hash|Bech32 pool hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ "no": 392, "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
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
  "epoch_stake_id": 141740232,
  "epoch_stake_amount": 698320084,
  "epoch_stake_epoch_no": 392,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1uyypyzsyvwh300ca2vtf64gwmf3nafc9w64tcw0za25mk0qmls084",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 5484089
 },
 "...",
 {
  "epoch_stake_id": 142480763,
  "epoch_stake_amount": 19724172141,
  "epoch_stake_epoch_no": 392,
  "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
  "stake_address": "stake1ux09xgzzp3u6lvkgq8f70sqxm346vn8ccc8muvam9aux8wcw9cx9t",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 788392
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch stake distributions <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the stake distribution for one epoch given its number.

`GET /api/core/odata/epochsstakes/{no}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochsstakes = await CBI.core.epochsstakes_({ "odata": true, "no": 392 });
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
   "epoch_stake_id": 141700568,
   "epoch_stake_amount": 4400683,
   "epoch_stake_epoch_no": 392,
   "pool_hash": "pool18rpw5dwfywfrzjuy7uzn2cetrw9v85aan8a80p3fdvtqcxykkqu",
   "stake_address": "stake17y9w027e5q24cj73hga8k2kmzefvtuq73g2r0vctvy24h9c0vjgqq",
   "stake_address_script_hash_hex": "0ae7abd9a0155c4bd1ba3a7b2adb1652c5f01e8a1437b30b61155b97",
   "stake_address_id": 5408519
  },
  "...",
  {
   "epoch_stake_id": 141700587,
   "epoch_stake_amount": 129298,
   "epoch_stake_epoch_no": 392,
   "pool_hash": "pool1xmsdhync6k6grkkj7tuycskjpseykpr24luhlazl5nsngsy87gm",
   "stake_address": "stake1uyqqptyz5ccxg2amd7n2fxq7pcddj6w7rsvwy9v253g89hcwqkwpt",
   "stake_address_script_hash_hex": null,
   "stake_address_id": 1108406
  }
 ],
 "@odata.nextLink": "https://mainnet.cardanobi.io/api/core/odata/epochsstakes/392?$skip=20"
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>
