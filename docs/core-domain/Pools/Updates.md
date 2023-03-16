--- 
title: '' 
sidebar_label: 'Updates' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All on-chain pool updates<br/>
<EndpointBadge type="GET"/> One pool on-chain updates<br/>
<EndpointBadge type="GET"/> One pool on-chain updates<br/>
<EndpointBadge type="GET"/> All on-chain pool updates <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool on-chain updates <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All on-chain pool updates

Returns all on-chain pool updates.

`GET /api/core/pools/updates`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const updates = await CBI.core.pools.updates_();
console.log(updates); 
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
  "hash_id": 1,
  "cert_index": 0,
  "vrf_key_hash": "AiCl0Irb/pVUtS17KZO+WJKsP/NA5nSjd96j4irRd4s=",
  "pledge": 450000000000,
  "active_epoch_no": 210,
  "meta_id": 1,
  "margin": 0.015,
  "fixed_cost": 340000000,
  "registered_tx_id": 2415556,
  "reward_addr_id": 61,
  "vrf_key_hash_hex": "0220a5d08adbfe9554b52d7b2993be5892ac3ff340e674a377dea3e22ad1778b"
 },
 "...",
 {
  "id": 20,
  "hash_id": 20,
  "cert_index": 0,
  "vrf_key_hash": "e2a6GbiEHiaskUwffALAPqWru5bNjRZRsZ6rxlufk+8=",
  "pledge": 50000000000,
  "active_epoch_no": 210,
  "meta_id": 20,
  "margin": 0.03,
  "fixed_cost": 340000000,
  "registered_tx_id": 2416313,
  "reward_addr_id": 111,
  "vrf_key_hash_hex": "7b66ba19b8841e26ac914c1f7c02c03ea5abbb96cd8d1651b19eabc65b9f93ef"
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates

Returns the on-chain updates for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/updates`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const updates = await CBI.core.pools.updates_({ pool_id: 4268 });
console.log(updates); 
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
  "id": 22010,
  "hash_id": 4268,
  "cert_index": 0,
  "vrf_key_hash": "m+NFvLywzwVZsRNUZ/0uTHjHQYmM34vLc3stxRImMt8=",
  "pledge": 10000000000,
  "active_epoch_no": 291,
  "meta_id": 21950,
  "margin": 0.05,
  "fixed_cost": 340000000,
  "registered_tx_id": 12623716,
  "reward_addr_id": 2480780,
  "vrf_key_hash_hex": "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df"
 },
 "...",
 {
  "id": 30130,
  "hash_id": 4268,
  "cert_index": 0,
  "vrf_key_hash": "m+NFvLywzwVZsRNUZ/0uTHjHQYmM34vLc3stxRImMt8=",
  "pledge": 100000000000,
  "active_epoch_no": 393,
  "meta_id": 28640,
  "margin": 0.04,
  "fixed_cost": 340000000,
  "registered_tx_id": 60059080,
  "reward_addr_id": 2480780,
  "vrf_key_hash_hex": "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df"
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates

Returns the on-chain updates for one pool given its VRF key hash.

`GET /api/core/pools/{vrf_key_hash}/updates`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| vrf_key_hash|The pool VRF key in HEX format.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const updates = await CBI.core.pools.updates_({ vrf_key_hash: "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df" });
console.log(updates); 
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
  "id": 22010,
  "hash_id": 4268,
  "cert_index": 0,
  "vrf_key_hash": "m+NFvLywzwVZsRNUZ/0uTHjHQYmM34vLc3stxRImMt8=",
  "pledge": 10000000000,
  "active_epoch_no": 291,
  "meta_id": 21950,
  "margin": 0.05,
  "fixed_cost": 340000000,
  "registered_tx_id": 12623716,
  "reward_addr_id": 2480780,
  "vrf_key_hash_hex": "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df"
 },
 "...",
 {
  "id": 30130,
  "hash_id": 4268,
  "cert_index": 0,
  "vrf_key_hash": "m+NFvLywzwVZsRNUZ/0uTHjHQYmM34vLc3stxRImMt8=",
  "pledge": 100000000000,
  "active_epoch_no": 393,
  "meta_id": 28640,
  "margin": 0.04,
  "fixed_cost": 340000000,
  "registered_tx_id": 60059080,
  "reward_addr_id": 2480780,
  "vrf_key_hash_hex": "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df"
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All on-chain pool updates <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all on-chain pool updates.

`GET /api/core/odata/poolsupdates`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsupdates = await CBI.core.poolsupdates_({ "odata": true });
console.log(poolsupdates); 
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
 "@odata.context": "https://mainnet.cardanobi.io/api/core/odata/$metadata#PoolsUpdates",
 "value": [
  {
   "id": 1,
   "hash_id": 1,
   "cert_index": 0,
   "vrf_key_hash": "AiCl0Irb/pVUtS17KZO+WJKsP/NA5nSjd96j4irRd4s=",
   "pledge": 450000000000,
   "active_epoch_no": 210,
   "meta_id": 1,
   "margin": 0.015,
   "fixed_cost": 340000000,
   "registered_tx_id": 2415556,
   "reward_addr_id": 61,
   "vrf_key_hash_hex": "0220a5d08adbfe9554b52d7b2993be5892ac3ff340e674a377dea3e22ad1778b"
  },
  "...",
  {
   "id": 20,
   "hash_id": 20,
   "cert_index": 0,
   "vrf_key_hash": "e2a6GbiEHiaskUwffALAPqWru5bNjRZRsZ6rxlufk+8=",
   "pledge": 50000000000,
   "active_epoch_no": 210,
   "meta_id": 20,
   "margin": 0.03,
   "fixed_cost": 340000000,
   "registered_tx_id": 2416313,
   "reward_addr_id": 111,
   "vrf_key_hash_hex": "7b66ba19b8841e26ac914c1f7c02c03ea5abbb96cd8d1651b19eabc65b9f93ef"
  }
 ],
 "@odata.nextLink": "https://mainnet.cardanobi.io/api/core/odata/poolsupdates?$skip=20"
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the on-chain updates for one pool given its unique identifier.

`GET /api/core/odata/poolsupdates/{pool_id}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsupdates = await CBI.core.poolsupdates_({ "odata": true, pool_id: 4268 });
console.log(poolsupdates); 
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
 "@odata.context": "https://mainnet.cardanobi.io/api/core/odata/$metadata#PoolsUpdates",
 "value": [
  {
   "id": 22010,
   "hash_id": 4268,
   "cert_index": 0,
   "vrf_key_hash": "m+NFvLywzwVZsRNUZ/0uTHjHQYmM34vLc3stxRImMt8=",
   "pledge": 10000000000,
   "active_epoch_no": 291,
   "meta_id": 21950,
   "margin": 0.05,
   "fixed_cost": 340000000,
   "registered_tx_id": 12623716,
   "reward_addr_id": 2480780,
   "vrf_key_hash_hex": "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df"
  },
  "...",
  {
   "id": 30130,
   "hash_id": 4268,
   "cert_index": 0,
   "vrf_key_hash": "m+NFvLywzwVZsRNUZ/0uTHjHQYmM34vLc3stxRImMt8=",
   "pledge": 100000000000,
   "active_epoch_no": 393,
   "meta_id": 28640,
   "margin": 0.04,
   "fixed_cost": 340000000,
   "registered_tx_id": 60059080,
   "reward_addr_id": 2480780,
   "vrf_key_hash_hex": "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df"
  }
 ]
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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
