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
  "cert_index": 1,
  "vrf_key_hash": "hoFz00NhEQOsvbNFK5IrvKXlgNCNpOj3q/P7DyKEM4o=",
  "pledge": 100000000000000,
  "active_epoch_no": 6,
  "meta_id": null,
  "margin": 1,
  "fixed_cost": 500000000,
  "registered_tx_id": 10,
  "reward_addr_id": 5,
  "vrf_key_hash_hex": "868173d343611103acbdb3452b922bbca5e580d08da4e8f7abf3fb0f2284338a"
 },
 "...",
 {
  "id": 20,
  "hash_id": 19,
  "cert_index": 0,
  "vrf_key_hash": "6IBljJ5CHz8TA2VyV2EgMG8uyFGNu8LR1bRk8ALqifg=",
  "pledge": 9000000000,
  "active_epoch_no": 30,
  "meta_id": 17,
  "margin": 0.15,
  "fixed_cost": 340000000,
  "registered_tx_id": 591,
  "reward_addr_id": 530,
  "vrf_key_hash_hex": "e880658c9e421f3f13036572576120306f2ec8518dbbc2d1d5b464f002ea89f8"
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates

Returns the on-chain updates for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/updates`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const updates = await CBI.core.pools.updates_({ "pool_id": 17 });
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
  "id": 18,
  "hash_id": 17,
  "cert_index": 0,
  "vrf_key_hash": "/513TMfj6F7Bgnv9aMR1vGEaniiOfJ4fsVn85S0nA/0=",
  "pledge": 9000000000,
  "active_epoch_no": 30,
  "meta_id": 15,
  "margin": 0,
  "fixed_cost": 340000000,
  "registered_tx_id": 537,
  "reward_addr_id": 489,
  "vrf_key_hash_hex": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd"
 },
 "...",
 {
  "id": 309,
  "hash_id": 17,
  "cert_index": 0,
  "vrf_key_hash": "/513TMfj6F7Bgnv9aMR1vGEaniiOfJ4fsVn85S0nA/0=",
  "pledge": 1000000000000,
  "active_epoch_no": 44,
  "meta_id": 15,
  "margin": 0,
  "fixed_cost": 340000000,
  "registered_tx_id": 260484,
  "reward_addr_id": 489,
  "vrf_key_hash_hex": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd"
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates

Returns the on-chain updates for one pool given its VRF key hash.

`GET /api/core/pools/{vrf_key_hash}/updates`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| vrf_key_hash|The pool VRF key in HEX format.|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const updates = await CBI.core.pools.updates_({ "vrf_key_hash": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd" });
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
  "id": 18,
  "hash_id": 17,
  "cert_index": 0,
  "vrf_key_hash": "/513TMfj6F7Bgnv9aMR1vGEaniiOfJ4fsVn85S0nA/0=",
  "pledge": 9000000000,
  "active_epoch_no": 30,
  "meta_id": 15,
  "margin": 0,
  "fixed_cost": 340000000,
  "registered_tx_id": 537,
  "reward_addr_id": 489,
  "vrf_key_hash_hex": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd"
 },
 "...",
 {
  "id": 309,
  "hash_id": 17,
  "cert_index": 0,
  "vrf_key_hash": "/513TMfj6F7Bgnv9aMR1vGEaniiOfJ4fsVn85S0nA/0=",
  "pledge": 1000000000000,
  "active_epoch_no": 44,
  "meta_id": 15,
  "margin": 0,
  "fixed_cost": 340000000,
  "registered_tx_id": 260484,
  "reward_addr_id": 489,
  "vrf_key_hash_hex": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd"
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsUpdates",
 "value": [
  {
   "id": 1,
   "hash_id": 1,
   "cert_index": 1,
   "vrf_key_hash": "hoFz00NhEQOsvbNFK5IrvKXlgNCNpOj3q/P7DyKEM4o=",
   "pledge": 100000000000000,
   "active_epoch_no": 6,
   "meta_id": null,
   "margin": 1,
   "fixed_cost": 500000000,
   "registered_tx_id": 10,
   "reward_addr_id": 5,
   "vrf_key_hash_hex": "868173d343611103acbdb3452b922bbca5e580d08da4e8f7abf3fb0f2284338a"
  },
  "...",
  {
   "id": 20,
   "hash_id": 19,
   "cert_index": 0,
   "vrf_key_hash": "6IBljJ5CHz8TA2VyV2EgMG8uyFGNu8LR1bRk8ALqifg=",
   "pledge": 9000000000,
   "active_epoch_no": 30,
   "meta_id": 17,
   "margin": 0.15,
   "fixed_cost": 340000000,
   "registered_tx_id": 591,
   "reward_addr_id": 530,
   "vrf_key_hash_hex": "e880658c9e421f3f13036572576120306f2ec8518dbbc2d1d5b464f002ea89f8"
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/poolsupdates?$skip=20"
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the on-chain updates for one pool given its unique identifier.

`GET /api/core/odata/poolsupdates/{pool_id}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsupdates = await CBI.core.poolsupdates_({ "odata": true, "pool_id": 17 });
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsUpdates",
 "value": [
  {
   "id": 18,
   "hash_id": 17,
   "cert_index": 0,
   "vrf_key_hash": "/513TMfj6F7Bgnv9aMR1vGEaniiOfJ4fsVn85S0nA/0=",
   "pledge": 9000000000,
   "active_epoch_no": 30,
   "meta_id": 15,
   "margin": 0,
   "fixed_cost": 340000000,
   "registered_tx_id": 537,
   "reward_addr_id": 489,
   "vrf_key_hash_hex": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd"
  },
  "...",
  {
   "id": 309,
   "hash_id": 17,
   "cert_index": 0,
   "vrf_key_hash": "/513TMfj6F7Bgnv9aMR1vGEaniiOfJ4fsVn85S0nA/0=",
   "pledge": 1000000000000,
   "active_epoch_no": 44,
   "meta_id": 15,
   "margin": 0,
   "fixed_cost": 340000000,
   "registered_tx_id": 260484,
   "reward_addr_id": 489,
   "vrf_key_hash_hex": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd"
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>
