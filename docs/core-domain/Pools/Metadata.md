--- 
title: '' 
sidebar_label: 'Metadata' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool metadata<br/>
<EndpointBadge type="GET"/> One pool metadata by pool id<br/>
<EndpointBadge type="GET"/> One pool metadata by pool metadata hash<br/>
<EndpointBadge type="GET"/> All pool metadata <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool metadata by pool id <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool metadata

Returns all on-chain references to off-chain pool metadata.

`GET /api/core/pools/metadata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const metadata = await CBI.core.pools.metadata_();
console.log(metadata); 
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
  "pool_id": 4,
  "url": "https://angelstakepool.net/preprod/angel.json",
  "hash": "v0RwndcUdCaI7v8rbKVXP+MSouX0nVZMTCMRkjxjlSw=",
  "registered_tx_id": 132,
  "hash_hex": "bf44709dd714742688eeff2b6ca5573fe312a2e5f49d564c4c2311923c63952c"
 },
 "...",
 {
  "id": 21,
  "pool_id": 23,
  "url": "https://wota.sbs/metadata_004.json",
  "hash": "gBUMGfUqh55xDmyrlcsFCMXDn3uMpHdxbOzKp/apv58=",
  "registered_tx_id": 741,
  "hash_hex": "80150c19f52a879e710e6cab95cb0508c5c39f7b8ca477716ceccaa7f6a9bf9f"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string(undefined)|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string(undefined)|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool metadata by pool id

Returns the on-chain references to off-chain pool metadata for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/metadata`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const metadata = await CBI.core.pools.metadata_({ "pool_id": 17 });
console.log(metadata); 
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
  "id": 15,
  "pool_id": 17,
  "url": "https://adacapital.io/adact_preprod.json",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "registered_tx_id": 537,
  "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
 },
 "...",
 {
  "id": 15,
  "pool_id": 17,
  "url": "https://adacapital.io/adact_preprod.json",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "registered_tx_id": 537,
  "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string(undefined)|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string(undefined)|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool metadata by pool metadata hash

Returns the on-chain references to off-chain pool metadata for one pool given its metadata hash.

`GET /api/core/pools/metadata/hashes/{meta_hash}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| meta_hash|Pool metadata hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const metadata_hashes = await CBI.core.pools.metadata.hashes_({ "meta_hash": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5" });
console.log(metadata_hashes); 
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
  "id": 15,
  "pool_id": 17,
  "url": "https://adacapital.io/adact_preprod.json",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "registered_tx_id": 537,
  "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
 },
 "...",
 {
  "id": 15,
  "pool_id": 17,
  "url": "https://adacapital.io/adact_preprod.json",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "registered_tx_id": 537,
  "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string(undefined)|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string(undefined)|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool metadata <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all on-chain references to off-chain pool metadata.

`GET /api/core/odata/poolsmetadata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsmetadata = await CBI.core.poolsmetadata_({ "odata": true });
console.log(poolsmetadata); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsMetadata",
 "value": [
  {
   "id": 1,
   "pool_id": 4,
   "url": "https://angelstakepool.net/preprod/angel.json",
   "hash": "v0RwndcUdCaI7v8rbKVXP+MSouX0nVZMTCMRkjxjlSw=",
   "registered_tx_id": 132,
   "hash_hex": "bf44709dd714742688eeff2b6ca5573fe312a2e5f49d564c4c2311923c63952c"
  },
  "...",
  {
   "id": 21,
   "pool_id": 23,
   "url": "https://wota.sbs/metadata_004.json",
   "hash": "gBUMGfUqh55xDmyrlcsFCMXDn3uMpHdxbOzKp/apv58=",
   "registered_tx_id": 741,
   "hash_hex": "80150c19f52a879e710e6cab95cb0508c5c39f7b8ca477716ceccaa7f6a9bf9f"
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/poolsmetadata?$skip=20"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string(undefined)|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string(undefined)|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool metadata by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the on-chain references to off-chain pool metadata for one pool given its unique identifier.

`GET /api/core/odata/poolsmetadata/{pool_id}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsmetadata = await CBI.core.poolsmetadata_({ "odata": true, "pool_id": 17 });
console.log(poolsmetadata); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsMetadata",
 "value": [
  {
   "id": 15,
   "pool_id": 17,
   "url": "https://adacapital.io/adact_preprod.json",
   "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
   "registered_tx_id": 537,
   "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
  },
  "...",
  {
   "id": 15,
   "pool_id": 17,
   "url": "https://adacapital.io/adact_preprod.json",
   "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
   "registered_tx_id": 537,
   "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string(undefined)|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string(undefined)|The hexadecimal encoding of the expected hash.|
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
