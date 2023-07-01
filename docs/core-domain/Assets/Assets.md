--- 
title: '' 
sidebar_label: 'Assets' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All assets<br/>
<EndpointBadge type="GET"/> One asset<br/>
<EndpointBadge type="GET"/> Asset list by policy<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All assets

Returns the list of multi assets minted on Cardano.

`GET /api/core/assets`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order assets are returned - "desc" descending (default) from newest to oldest - "asc" ascending from oldest to newest|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const assets = await CBI.core.assets_();
console.log(assets); 
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
  "asset_id": 255520,
  "fingerprint": "asset1z0vsrxq37gkjwvwpd7zd5yxvse3qdgrsg6s7zl",
  "policy_hex": "f8b0701b14c4e588a0f68e45d91d501c62580887dc1cc863d6c0d8b4",
  "total_supply": 1
 },
 "...",
 {
  "asset_id": 255539,
  "fingerprint": "asset125yw3nuujt8gm6g03vwd03xm03jm338lup88fv",
  "policy_hex": "f8b0701b14c4e588a0f68e45d91d501c62580887dc1cc863d6c0d8b4",
  "total_supply": 1
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
| asset_id|integer(int64)|The MultiAsset unique identifier.|
| fingerprint|string|The CIP14 fingerprint for the MultiAsset.|
| policy_hex|string|The hexadecimal encoding of the MultiAsset policy hash.|
| total_supply|number(double)|The total supply of the Multi Asset.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One asset

Returns the details of one multi asset minted on Cardano given its fingerprint.

`GET /api/core/assets/{fingerprint}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| fingerprint|The CIP14 fingerprint for the MultiAsset.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const assets = await CBI.core.assets_({ fingerprint: "asset1w8wujx5xpxk88u94t0c60lsjlgwpd635a3c3lc" });
console.log(assets); 
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
  "asset_id": 203603,
  "fingerprint": "asset1w8wujx5xpxk88u94t0c60lsjlgwpd635a3c3lc",
  "policy_hex": "aa39e7d044fc8a2c1628e87a99ea8bcafb47ed6855fcdb1adf36f98e",
  "name": "LEGIT_COIN",
  "creation_time": "2023-03-19T18:47:06",
  "total_supply": 1000000000,
  "mint_cnt": 1,
  "burn_cnt": 0,
  "first_mint_tx_hash": "e35b70cb3cd760aa719a57c9d64122744cc46faed9f71f453803cd8521ebbe6f",
  "first_mint_keys": [],
  "last_mint_tx_hash": "e35b70cb3cd760aa719a57c9d64122744cc46faed9f71f453803cd8521ebbe6f",
  "last_mint_keys": [],
  "first_mint_metadata": null
 },
 "...",
 {
  "asset_id": 203603,
  "fingerprint": "asset1w8wujx5xpxk88u94t0c60lsjlgwpd635a3c3lc",
  "policy_hex": "aa39e7d044fc8a2c1628e87a99ea8bcafb47ed6855fcdb1adf36f98e",
  "name": "LEGIT_COIN",
  "creation_time": "2023-03-19T18:47:06",
  "total_supply": 1000000000,
  "mint_cnt": 1,
  "burn_cnt": 0,
  "first_mint_tx_hash": "e35b70cb3cd760aa719a57c9d64122744cc46faed9f71f453803cd8521ebbe6f",
  "first_mint_keys": [],
  "last_mint_tx_hash": "e35b70cb3cd760aa719a57c9d64122744cc46faed9f71f453803cd8521ebbe6f",
  "last_mint_keys": [],
  "first_mint_metadata": null
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
| asset_id|integer(int64)|The MultiAsset unique identifier.|
| fingerprint|string|The CIP14 fingerprint for the MultiAsset.|
| policy_hex|string|The hexadecimal encoding of the MultiAsset policy hash.|
| name|string|The MultiAsset name.|
| creation_time|string(date-time)|The MultiAsset creation time (first minting event time).|
| total_supply|number(double)|The MultiAsset total circulating supply.|
| mint_cnt|integer(int64)|The number of mint events for this MultiAsset.|
| burn_cnt|integer(int64)|The number of burn events for this MultiAsset.|
| first_mint_tx_hash|string|The hash for the transaction that contains the first minting event for this MultiAsset.|
| first_mint_keys|array|The metadata keys used in the first mint event for this MultiAsset.|
| last_mint_tx_hash|string|The hash for the transaction that contains the last minting event for this MultiAsset.|
| last_mint_keys|array|The metadata keys used in the last mint event for this MultiAsset.|
| first_mint_metadata|string|The JSON payload of the first mint event for this MultiAsset.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Asset list by policy

Returns the list of MultiAsset for a specific policy given its hash.

`GET /api/core/assets/policies/{policy_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| policy_hash|The MultiAsset policy hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const policies = await CBI.core.assets.policies_({ policy_hash: "706e1c53ed984b016f2c0fc79a450fdb572aa21e4e87d6f74d0b6e8a" });
console.log(policies); 
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
  "fingerprint": "asset1508wcvzfw6hnsu29e4k2l6ffatmq3crm9nm5y9",
  "total_supply": 7852500
 },
 "...",
 {
  "fingerprint": "asset1y3820hsrkagwktpmfuln6gu9g7n5e9aqydewal",
  "total_supply": 17500000
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
| fingerprint|string|The CIP14 fingerprint for the MultiAsset.|
| total_supply|number(double)|The total supply of the Multi Asset.|
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
