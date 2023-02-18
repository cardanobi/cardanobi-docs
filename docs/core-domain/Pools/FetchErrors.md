--- 
title: '' 
sidebar_label: 'FetchErrors' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool offline fetch errors<br/>
<EndpointBadge type="GET"/> One pool offline fetch errors by pool id<br/>
<EndpointBadge type="GET"/> All pool offline fetch errors <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool offline fetch errors by pool id <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline fetch errors

Returns all pool offline fetch errors.

`GET /api/core/pools/offlinefetcherrors`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinefetcherrors = await CBI.core.pools.offlinefetcherrors_();
console.log(offlinefetcherrors); 
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
  "pool_id": 42,
  "fetch_time": "2022-10-22T21:43:25.380318",
  "pmr_id": 41,
  "fetch_error": "Hash mismatch from when fetching metadata from http://preprod.extra-pool.io/metadata.json. Expected a54b3ef96a2d87b1a3b4bb85796df6a492b94b7fcc22b037a6b6dbceebc843a6 but got b5289f660fffce1a45e6c48092c10caffa955a2035c13cca4e89f9c188c98f74.",
  "retry_count": 0
 },
 "...",
 {
  "id": 20,
  "pool_id": 54,
  "fetch_time": "2022-10-24T17:19:10.320479",
  "pmr_id": 58,
  "fetch_error": "URL parse error from for pool1cg74u7gq3kx2yjfzrwkrxnsk2kase7z7n6tr5vvdnstukdtjz5z resulted in : InvalidUrlException \"pool1cg74u7gq3kx2yjfzrwkrxnsk2kase7z7n6tr5vvdnstukdtjz5z\" \"Invalid URL\"",
  "retry_count": 4
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline fetch errors by pool id

Returns the offline fetch errors for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/offlinefetcherrors`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinefetcherrors = await CBI.core.pools.offlinefetcherrors_({ "pool_id": 17 });
console.log(offlinefetcherrors); 
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
 "..."
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline fetch errors <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all pool offline fetch errors.

`GET /api/core/odata/poolsofflinefetcherrors`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsofflinefetcherrors = await CBI.core.poolsofflinefetcherrors_({ "odata": true });
console.log(poolsofflinefetcherrors); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsOfflineFetchErrors",
 "value": [
  {
   "id": 1,
   "pool_id": 42,
   "fetch_time": "2022-10-22T21:43:25.380318Z",
   "pmr_id": 41,
   "fetch_error": "Hash mismatch from when fetching metadata from http://preprod.extra-pool.io/metadata.json. Expected a54b3ef96a2d87b1a3b4bb85796df6a492b94b7fcc22b037a6b6dbceebc843a6 but got b5289f660fffce1a45e6c48092c10caffa955a2035c13cca4e89f9c188c98f74.",
   "retry_count": 0
  },
  "...",
  {
   "id": 20,
   "pool_id": 54,
   "fetch_time": "2022-10-24T17:19:10.320479Z",
   "pmr_id": 58,
   "fetch_error": "URL parse error from for pool1cg74u7gq3kx2yjfzrwkrxnsk2kase7z7n6tr5vvdnstukdtjz5z resulted in : InvalidUrlException \"pool1cg74u7gq3kx2yjfzrwkrxnsk2kase7z7n6tr5vvdnstukdtjz5z\" \"Invalid URL\"",
   "retry_count": 4
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/poolsofflinefetcherrors?$skip=20"
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline fetch errors by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the offline fetch errors for one pool given its unique identifier.

`GET /api/core/odata/poolsofflinefetcherrors/{pool_id}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsofflinefetcherrors = await CBI.core.poolsofflinefetcherrors_({ "odata": true, "pool_id": 17 });
console.log(poolsofflinefetcherrors); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsOfflineFetchErrors",
 "value": [
  "..."
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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
