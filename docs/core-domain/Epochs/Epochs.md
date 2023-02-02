--- 
title: '' 
sidebar_label: 'Epochs' 
sidebar_position: 2 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All epochs<br/>
<EndpointBadge type="GET"/> One epoch by number<br/>
<EndpointBadge type="GET"/> All epochs <ODataBadge/><br/>
<EndpointBadge type="GET"/> One epoch by number <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All epochs

Returns all epoch entities.

`GET /api/core/epochs`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochs = await CBI.core.epochs_();
console.log(epochs); 
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
  "out_sum": 0,
  "fees": 0,
  "tx_count": 0,
  "blk_count": 11,
  "no": 0,
  "start_time": "2022-06-01T00:00:00",
  "end_time": "2022-06-05T12:01:40"
 },
 "...",
 {
  "id": 20,
  "out_sum": 0,
  "fees": 0,
  "tx_count": 0,
  "blk_count": 56,
  "no": 19,
  "start_time": "2022-09-04T00:00:02",
  "end_time": "2022-09-08T12:01:48"
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
| id|integer(int64)|The epoch unique identifier.|
| out_sum|number(double)|The sum of the transaction output values (in Lovelace) in this epoch.|
| fees|number(double)|The sum of the fees (in Lovelace) in this epoch.|
| tx_count|integer(int32)|The number of transactions in this epoch.|
| blk_count|integer(int32)|The number of blocks in this epoch.|
| no|integer(int32)|The epoch number.|
| start_time|string(date-time)|The epoch start time.|
| end_time|string(date-time)|The epoch end time.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch by number

Returns one specific epoch given its number.

`GET /api/core/epochs/{no}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochs = await CBI.core.epochs_({ "no": 30 });
console.log(epochs); 
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
 "id": 31,
 "out_sum": 102865306257160,
 "fees": 4942589267,
 "tx_count": 24249,
 "blk_count": 20386,
 "no": 30,
 "start_time": "2022-10-29T00:00:25",
 "end_time": "2022-11-02T23:59:27"
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
| id|integer(int64)|The epoch unique identifier.|
| out_sum|number(double)|The sum of the transaction output values (in Lovelace) in this epoch.|
| fees|number(double)|The sum of the fees (in Lovelace) in this epoch.|
| tx_count|integer(int32)|The number of transactions in this epoch.|
| blk_count|integer(int32)|The number of blocks in this epoch.|
| no|integer(int32)|The epoch number.|
| start_time|string(date-time)|The epoch start time.|
| end_time|string(date-time)|The epoch end time.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All epochs <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all epoch entities.

`GET /api/core/odata/epochs`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochs = await CBI.core.epochs_({ "odata": true });
console.log(epochs); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#Epochs",
 "value": [
  {
   "id": 1,
   "out_sum": 0,
   "fees": 0,
   "tx_count": 0,
   "blk_count": 11,
   "no": 0,
   "start_time": "2022-06-01T00:00:00Z",
   "end_time": "2022-06-05T12:01:40Z"
  },
  "...",
  {
   "id": 20,
   "out_sum": 0,
   "fees": 0,
   "tx_count": 0,
   "blk_count": 56,
   "no": 19,
   "start_time": "2022-09-04T00:00:02Z",
   "end_time": "2022-09-08T12:01:48Z"
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/epochs?$skip=20"
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
| id|integer(int64)|The epoch unique identifier.|
| out_sum|number(double)|The sum of the transaction output values (in Lovelace) in this epoch.|
| fees|number(double)|The sum of the fees (in Lovelace) in this epoch.|
| tx_count|integer(int32)|The number of transactions in this epoch.|
| blk_count|integer(int32)|The number of blocks in this epoch.|
| no|integer(int32)|The epoch number.|
| start_time|string(date-time)|The epoch start time.|
| end_time|string(date-time)|The epoch end time.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch by number <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns one specific epoch given its number.

`GET /api/core/odata/epochs/{no}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochs = await CBI.core.epochs_({ "odata": true, "no": 30 });
console.log(epochs); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#Epochs/$entity",
 "id": 31,
 "out_sum": 102865306257160,
 "fees": 4942589267,
 "tx_count": 24249,
 "blk_count": 20386,
 "no": 30,
 "start_time": "2022-10-29T00:00:25Z",
 "end_time": "2022-11-02T23:59:27Z"
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
| id|integer(int64)|The epoch unique identifier.|
| out_sum|number(double)|The sum of the transaction output values (in Lovelace) in this epoch.|
| fees|number(double)|The sum of the fees (in Lovelace) in this epoch.|
| tx_count|integer(int32)|The number of transactions in this epoch.|
| blk_count|integer(int32)|The number of blocks in this epoch.|
| no|integer(int32)|The epoch number.|
| start_time|string(date-time)|The epoch start time.|
| end_time|string(date-time)|The epoch end time.|
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
