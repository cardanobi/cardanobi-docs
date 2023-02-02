--- 
title: '' 
sidebar_label: 'Hashes' 
sidebar_position: 6 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool key hash<br/>
<EndpointBadge type="GET"/> All pool key hash <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool key hash

Returns every unique pool key hash.

`GET /api/core/pools/hashes`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const hashes = await CBI.core.pools.hashes_();
console.log(hashes); 
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
  "hash_raw": "pXy8uOzfJPRpko2pJLW8bky8O1eFlXchGg2vbw==",
  "view": "pool1547tew8vmuj0g6vj3k5jfddudextcw6hsk2hwgg6pkhk7lwphe6",
  "hash_hex": "a57cbcb8ecdf24f469928da924b5bc6e4cbc3b57859577211a0daf6f"
 },
 "...",
 {
  "id": 20,
  "hash_raw": "rUOWoPfEfj1p7ovXksgMoL/+5hlFzsXEK0rpDw==",
  "view": "pool144pedg8hc3lr660w30te9jqv5zllaesegh8vt3ptft5s7qu45re",
  "hash_hex": "ad4396a0f7c47e3d69ee8bd792c80ca0bffee61945cec5c42b4ae90f"
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
| id|integer(int64)|The pool hash unique identifier.|
| hash_raw|string(byte)|The raw bytes of the pool hash.|
| view|string(undefined)|The Bech32 encoding of the pool hash.|
| hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool key hash <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns every unique pool key hash.

`GET /api/core/odata/poolshashes`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolshashes = await CBI.core.poolshashes_({ "odata": true });
console.log(poolshashes); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsHashes",
 "value": [
  {
   "id": 1,
   "hash_raw": "pXy8uOzfJPRpko2pJLW8bky8O1eFlXchGg2vbw==",
   "view": "pool1547tew8vmuj0g6vj3k5jfddudextcw6hsk2hwgg6pkhk7lwphe6",
   "hash_hex": "a57cbcb8ecdf24f469928da924b5bc6e4cbc3b57859577211a0daf6f"
  },
  "...",
  {
   "id": 20,
   "hash_raw": "rUOWoPfEfj1p7ovXksgMoL/+5hlFzsXEK0rpDw==",
   "view": "pool144pedg8hc3lr660w30te9jqv5zllaesegh8vt3ptft5s7qu45re",
   "hash_hex": "ad4396a0f7c47e3d69ee8bd792c80ca0bffee61945cec5c42b4ae90f"
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/poolshashes?$skip=20"
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
| id|integer(int64)|The pool hash unique identifier.|
| hash_raw|string(byte)|The raw bytes of the pool hash.|
| view|string(undefined)|The Bech32 encoding of the pool hash.|
| hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
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
