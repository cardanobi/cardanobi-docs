--- 
title: '' 
sidebar_label: 'Info' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All addresses information<br/>
<EndpointBadge type="GET"/> One address information<br/>
<EndpointBadge type="GET"/> All addresses information <ODataBadge/><br/>
<EndpointBadge type="GET"/> One address information <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All addresses information

Returns useful information for all addresses.

`GET /api/core/addresses/info`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const info = await CBI.core.addresses.info_();
console.log(info); 
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
  "address": "addr_test1qp002c8zm8qurm8hhpm53qnwq5klq59nfkh64wdsa0ezzfm6a4dhtf3j9wq9nv8he0saauehl0z8muf77jx20ptdp29sdfzqun",
  "stake_address_id": 1897,
  "stake_address": "stake_test1upaw6km45cezhqzekrmuhcw77vmlh3ra7yl0fr98s4ks4zccf9kpm",
  "script_hash": null
 },
 "...",
 {
  "address": "addr_test1qp00zdgtn3mzmne024ew2q3dsmed6fhx4k25tx4y3qgzldc454md6wja04p45cur8q6734tpp8hdhpj2uduu50d5p39qwra3v8",
  "stake_address_id": 19901,
  "stake_address": "stake_test1uq262aka8fwh6s66vwpnsd0g64ssnmkmse9wx7w28k6qcjsekmmnn",
  "script_hash": null
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
| address|string(undefined)|The address.|
| stake_address_id|integer(int64)|The stake addres unique identifier.|
| stake_address|string(undefined)|The stake address.|
| script_hash|string(undefined)|The script hash in HEX form in case this address is locked by a script.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One address information

Returns useful information for one given payment address or all payment addresses linked to a given stake address.

`GET /api/core/addresses/{address}/info`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| address|A payment address or a stake address|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const info = await CBI.core.addresses.info_({ "address": "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz" });
console.log(info); 
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
  "address": "addr_test1qp4fa90pt97exrcqp9cayal6gmyz53a8uwpceqlzq6kxcw30tsps9yr3y3xmze0xh7mvtchh3raf2kgxvgtpj3wzkyas3rjmxw",
  "stake_address_id": 3286,
  "stake_address": "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz",
  "script_hash": null
 },
 "...",
 {
  "address": "addr_test1qzxrxs4djcjxq92qwsr5xjsktfpqzjj3e3trw5etxqq86zp0tsps9yr3y3xmze0xh7mvtchh3raf2kgxvgtpj3wzkyas2fm6ku",
  "stake_address_id": 3286,
  "stake_address": "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz",
  "script_hash": null
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
| address|string(undefined)|The address.|
| stake_address_id|integer(int64)|The stake addres unique identifier.|
| stake_address|string(undefined)|The stake address.|
| script_hash|string(undefined)|The script hash in HEX form in case this address is locked by a script.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All addresses information <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns useful information for all addresses.

`GET /api/core/odata/addressesinfo`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const addressesinfo = await CBI.core.addressesinfo_({ "odata": true });
console.log(addressesinfo); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#AddressesInfo",
 "value": [
  {
   "address": "addr_test1qp002c8zm8qurm8hhpm53qnwq5klq59nfkh64wdsa0ezzfm6a4dhtf3j9wq9nv8he0saauehl0z8muf77jx20ptdp29sdfzqun",
   "stake_address_id": 1897,
   "stake_address": "stake_test1upaw6km45cezhqzekrmuhcw77vmlh3ra7yl0fr98s4ks4zccf9kpm",
   "script_hash": null
  },
  "...",
  {
   "address": "addr_test1qp00zdgtn3mzmne024ew2q3dsmed6fhx4k25tx4y3qgzldc454md6wja04p45cur8q6734tpp8hdhpj2uduu50d5p39qwra3v8",
   "stake_address_id": 19901,
   "stake_address": "stake_test1uq262aka8fwh6s66vwpnsd0g64ssnmkmse9wx7w28k6qcjsekmmnn",
   "script_hash": null
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/addressesinfo?$skip=20"
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
| address|string(undefined)|The address.|
| stake_address_id|integer(int64)|The stake addres unique identifier.|
| stake_address|string(undefined)|The stake address.|
| script_hash|string(undefined)|The script hash in HEX form in case this address is locked by a script.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One address information <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns useful information for one given payment address or all payment addresses linked to a given stake address.

`GET /api/core/odata/addressesinfo/{address}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| address|A payment address or a stake address|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const addressesinfo = await CBI.core.addressesinfo_({ "odata": true, "address": "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz" });
console.log(addressesinfo); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#AddressesInfo",
 "value": [
  {
   "address": "addr_test1qp4fa90pt97exrcqp9cayal6gmyz53a8uwpceqlzq6kxcw30tsps9yr3y3xmze0xh7mvtchh3raf2kgxvgtpj3wzkyas3rjmxw",
   "stake_address_id": 3286,
   "stake_address": "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz",
   "script_hash": null
  },
  "...",
  {
   "address": "addr_test1qzxrxs4djcjxq92qwsr5xjsktfpqzjj3e3trw5etxqq86zp0tsps9yr3y3xmze0xh7mvtchh3raf2kgxvgtpj3wzkyas2fm6ku",
   "stake_address_id": 3286,
   "stake_address": "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz",
   "script_hash": null
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
| address|string(undefined)|The address.|
| stake_address_id|integer(int64)|The stake addres unique identifier.|
| stake_address|string(undefined)|The stake address.|
| script_hash|string(undefined)|The script hash in HEX form in case this address is locked by a script.|
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
