--- 
title: '' 
sidebar_label: 'History' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Asset history<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Asset history

Returns the minting/burning history of one MultiAsset given its fingerprint.

`GET /api/core/assets/{fingerprint}/history`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| fingerprint|The CIP14 fingerprint for the MultiAsset.|path|string|true|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order the minting/burning events are returned - "desc" descending (default) from newest to oldest - "asc" ascending from oldest to newest|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const history = await CBI.core.assets.history_({ fingerprint: "asset1gqp4wdmclgw2tqmkm3nq7jdstvqpesdj3agnel" });
console.log(history); 
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
  "event_id": 637415,
  "tx_hash_hex": "b4f816062fc3ffea5bec59ab507fec93faefb482f865949699e254f86ad3015f",
  "quantity": 5000000,
  "event_time": "2023-06-08T09:45:38",
  "block_no": 1027963
 },
 "...",
 {
  "event_id": 658188,
  "tx_hash_hex": "07ecd5d4117d10d40278f6186f95568f651d3dc4ce371b2cd0a4ffb623331fb8",
  "quantity": -4811089,
  "event_time": "2023-06-28T04:12:36",
  "block_no": 1100236
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
| event_id|integer(int64)|The Multi-Asset minting/buring event unique identifier.|
| tx_hash_hex|string|The hexadecimal encoding of the hash identifier of the transaction containing this event.|
| quantity|number(double)|The amount of the Multi Asset to mint (can be negative to "burn" assets).|
| event_time|string(date-time)|The event creation time (time of the block containing it).|
| block_no|integer(int32)|The block number containing the minting/buring transaction for this event.|
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
