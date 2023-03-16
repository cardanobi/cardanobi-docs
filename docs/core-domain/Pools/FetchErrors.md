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
  "pool_id": 78,
  "fetch_time": "2023-02-05T00:10:14.241245",
  "pmr_id": 82,
  "fetch_error": "HTTP Response from https://polypool.io/mama.json resulted in HTTP status code : 404 Not Found",
  "retry_count": 0
 },
 "...",
 {
  "id": 20,
  "pool_id": 270,
  "fetch_time": "2023-02-05T00:10:14.241245",
  "pmr_id": 324,
  "fetch_error": "HTTP Response from https://tinyurl.com/bloom-small resulted in HTTP status code : 403 Forbidden",
  "retry_count": 0
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline fetch errors by pool id

Returns the offline fetch errors for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/offlinefetcherrors`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinefetcherrors = await CBI.core.pools.offlinefetcherrors_({ pool_id: 4268 });
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
  "id": 16620,
  "pool_id": 4268,
  "fetch_time": "2023-02-06T00:16:37.343007",
  "pmr_id": 25193,
  "fetch_error": "Hash mismatch from when fetching metadata from https://bit.ly/3nnt1ax. Expected 446a2fc88b19a288f2fb6da512922653c9942000ada10c846d71e48bcea74e8a but got 5f6583fb9515eb9df15715d940205eeac0c2a53e5c83c6eb4276a00a98db8e02.",
  "retry_count": 0
 },
 "...",
 {
  "id": 73468,
  "pool_id": 4268,
  "fetch_time": "2023-02-24T22:36:23.174784",
  "pmr_id": 25193,
  "fetch_error": "URL parse error from for pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc resulted in : InvalidUrlException \"pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc\" \"Invalid URL\"",
  "retry_count": 19
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
 "@odata.context": "https://mainnet.cardanobi.io/api/core/odata/$metadata#PoolsOfflineFetchErrors",
 "value": [
  {
   "id": 1,
   "pool_id": 78,
   "fetch_time": "2023-02-05T00:10:14.241245Z",
   "pmr_id": 82,
   "fetch_error": "HTTP Response from https://polypool.io/mama.json resulted in HTTP status code : 404 Not Found",
   "retry_count": 0
  },
  "...",
  {
   "id": 20,
   "pool_id": 270,
   "fetch_time": "2023-02-05T00:10:14.241245Z",
   "pmr_id": 324,
   "fetch_error": "HTTP Response from https://tinyurl.com/bloom-small resulted in HTTP status code : 403 Forbidden",
   "retry_count": 0
  }
 ],
 "@odata.nextLink": "https://mainnet.cardanobi.io/api/core/odata/poolsofflinefetcherrors?$skip=20"
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline fetch errors by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the offline fetch errors for one pool given its unique identifier.

`GET /api/core/odata/poolsofflinefetcherrors/{pool_id}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsofflinefetcherrors = await CBI.core.poolsofflinefetcherrors_({ "odata": true, pool_id: 4268 });
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
 "@odata.context": "https://mainnet.cardanobi.io/api/core/odata/$metadata#PoolsOfflineFetchErrors",
 "value": [
  {
   "id": 16620,
   "pool_id": 4268,
   "fetch_time": "2023-02-06T00:16:37.343007Z",
   "pmr_id": 25193,
   "fetch_error": "Hash mismatch from when fetching metadata from https://bit.ly/3nnt1ax. Expected 446a2fc88b19a288f2fb6da512922653c9942000ada10c846d71e48bcea74e8a but got 5f6583fb9515eb9df15715d940205eeac0c2a53e5c83c6eb4276a00a98db8e02.",
   "retry_count": 0
  },
  "...",
  {
   "id": 73468,
   "pool_id": 4268,
   "fetch_time": "2023-02-24T22:36:23.174784Z",
   "pmr_id": 25193,
   "fetch_error": "URL parse error from for pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc resulted in : InvalidUrlException \"pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc\" \"Invalid URL\"",
   "retry_count": 19
  }
 ],
 "@odata.nextLink": "https://mainnet.cardanobi.io/api/core/odata/poolsofflinefetcherrors/4268?$skip=20"
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
