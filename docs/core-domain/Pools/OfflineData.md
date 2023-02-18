--- 
title: '' 
sidebar_label: 'OfflineData' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool offline data<br/>
<EndpointBadge type="GET"/> One pool offline data by pool id<br/>
<EndpointBadge type="GET"/> One pool offline data by pool ticker<br/>
<EndpointBadge type="GET"/> One pool offline data by pool metadata hash<br/>
<EndpointBadge type="GET"/> All pool offline data <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool offline data by pool id <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline data

Returns all pool offline (ie not on chain) data.

`GET /api/core/pools/offlinedata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata = await CBI.core.pools.offlinedata_();
console.log(offlinedata); 
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
  "ticker_name": "ANGEL",
  "hash": "v0RwndcUdCaI7v8rbKVXP+MSouX0nVZMTCMRkjxjlSw=",
  "json": "{\"name\": \"ANGEL stake pool\", \"ticker\": \"ANGEL\", \"homepage\": \"https://www.angelstakepool.net\", \"description\": \"ANGEL pool at pre-production\"}",
  "bytes": "ewoibmFtZSI6ICJBTkdFTCBzdGFrZSBwb29sIiwKInRpY2tlciI6ICJBTkdFTCIsCiJob21lcGFnZSI6ICJodHRwczovL3d3dy5hbmdlbHN0YWtlcG9vbC5uZXQiLAoiZGVzY3JpcHRpb24iOiAiQU5HRUwgcG9vbCBhdCBwcmUtcHJvZHVjdGlvbiIKfQ==",
  "pmr_id": 1,
  "hash_hex": "bf44709dd714742688eeff2b6ca5573fe312a2e5f49d564c4c2311923c63952c"
 },
 "...",
 {
  "id": 20,
  "pool_id": 23,
  "ticker_name": "WOTA",
  "hash": "gBUMGfUqh55xDmyrlcsFCMXDn3uMpHdxbOzKp/apv58=",
  "json": "{\"name\": \"WOTA Stake Pool\", \"ticker\": \"WOTA\", \"homepage\": \"https://wota.sbs\", \"description\": \"preprod stake pool\"}",
  "bytes": "ewoibmFtZSI6ICJXT1RBIFN0YWtlIFBvb2wiLAoiZGVzY3JpcHRpb24iOiAicHJlcHJvZCBzdGFrZSBwb29sIiwKInRpY2tlciI6ICJXT1RBIiwKImhvbWVwYWdlIjogImh0dHBzOi8vd290YS5zYnMiCn0K",
  "pmr_id": 21,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool id

Returns the offline (ie not on chain) data for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/offlinedata`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata = await CBI.core.pools.offlinedata_({ "pool_id": 17 });
console.log(offlinedata); 
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
  "id": 14,
  "pool_id": 17,
  "ticker_name": "ADACT",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 15,
  "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
 },
 "...",
 {
  "id": 14,
  "pool_id": 17,
  "ticker_name": "ADACT",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 15,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool ticker

Returns the offline (ie not on chain) data for one pool given its ticker.

`GET /api/core/pools/{ticker}/offlinedata`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| ticker|Pool ticker|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata = await CBI.core.pools.offlinedata_({ "ticker": "ADACT" });
console.log(offlinedata); 
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
  "id": 14,
  "pool_id": 17,
  "ticker_name": "ADACT",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 15,
  "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
 },
 "...",
 {
  "id": 14,
  "pool_id": 17,
  "ticker_name": "ADACT",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 15,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool metadata hash

Returns the offline (ie not on chain) data for one pool given its metadata hash.

`GET /api/core/pools/metadata/{meta_hash}/offlinedata`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| meta_hash|Pool metadata hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata_offlinedata = await CBI.core.pools.metadata.offlinedata_({ "meta_hash": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5" });
console.log(offlinedata_offlinedata); 
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
  "id": 14,
  "pool_id": 17,
  "ticker_name": "ADACT",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 15,
  "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
 },
 "...",
 {
  "id": 14,
  "pool_id": 17,
  "ticker_name": "ADACT",
  "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 15,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline data <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all pool offline (ie not on chain) data.

`GET /api/core/odata/poolsofflinedata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsofflinedata = await CBI.core.poolsofflinedata_({ "odata": true });
console.log(poolsofflinedata); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsOfflineData",
 "value": [
  {
   "id": 1,
   "pool_id": 4,
   "ticker_name": "ANGEL",
   "hash": "v0RwndcUdCaI7v8rbKVXP+MSouX0nVZMTCMRkjxjlSw=",
   "json": "{\"name\": \"ANGEL stake pool\", \"ticker\": \"ANGEL\", \"homepage\": \"https://www.angelstakepool.net\", \"description\": \"ANGEL pool at pre-production\"}",
   "bytes": "ewoibmFtZSI6ICJBTkdFTCBzdGFrZSBwb29sIiwKInRpY2tlciI6ICJBTkdFTCIsCiJob21lcGFnZSI6ICJodHRwczovL3d3dy5hbmdlbHN0YWtlcG9vbC5uZXQiLAoiZGVzY3JpcHRpb24iOiAiQU5HRUwgcG9vbCBhdCBwcmUtcHJvZHVjdGlvbiIKfQ==",
   "pmr_id": 1,
   "hash_hex": "bf44709dd714742688eeff2b6ca5573fe312a2e5f49d564c4c2311923c63952c"
  },
  "...",
  {
   "id": 20,
   "pool_id": 23,
   "ticker_name": "WOTA",
   "hash": "gBUMGfUqh55xDmyrlcsFCMXDn3uMpHdxbOzKp/apv58=",
   "json": "{\"name\": \"WOTA Stake Pool\", \"ticker\": \"WOTA\", \"homepage\": \"https://wota.sbs\", \"description\": \"preprod stake pool\"}",
   "bytes": "ewoibmFtZSI6ICJXT1RBIFN0YWtlIFBvb2wiLAoiZGVzY3JpcHRpb24iOiAicHJlcHJvZCBzdGFrZSBwb29sIiwKInRpY2tlciI6ICJXT1RBIiwKImhvbWVwYWdlIjogImh0dHBzOi8vd290YS5zYnMiCn0K",
   "pmr_id": 21,
   "hash_hex": "80150c19f52a879e710e6cab95cb0508c5c39f7b8ca477716ceccaa7f6a9bf9f"
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/poolsofflinedata?$skip=20"
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the offline (ie not on chain) data for one pool given its unique identifier.

`GET /api/core/odata/poolsofflinedata/{pool_id}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsofflinedata = await CBI.core.poolsofflinedata_({ "odata": true, "pool_id": 17 });
console.log(poolsofflinedata); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsOfflineData",
 "value": [
  {
   "id": 14,
   "pool_id": 17,
   "ticker_name": "ADACT",
   "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
   "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
   "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
   "pmr_id": 15,
   "hash_hex": "ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5"
  },
  "...",
  {
   "id": 14,
   "pool_id": 17,
   "ticker_name": "ADACT",
   "hash": "rF+8U6PRSTtboOoXcv1dT9o81yuolQP/ImGjkFL80vU=",
   "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - PreProd Pool\"}",
   "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gUHJlUHJvZCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
   "pmr_id": 15,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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
