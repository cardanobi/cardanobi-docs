--- 
title: '' 
sidebar_label: 'Stakes' 
sidebar_position: 4 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All epoch stake distributions<br/>
<EndpointBadge type="GET"/> One epoch stake distributions<br/>
<EndpointBadge type="GET"/> One pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch and one pool stake distributions<br/>
<EndpointBadge type="GET"/> All epoch stake distributions <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All epoch stake distributions

Returns stake distributions for all epochs and all pools.

`GET /api/core/epochs/stakes`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes = await CBI.core.epochs.stakes_();
console.log(stakes); 
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
  "epoch_stake_id": 1,
  "epoch_stake_amount": 100000000000000,
  "epoch_stake_epoch_no": 6,
  "pool_hash_hex": "12946a3fe080dd99af599bfff10a05cd3de19bd38ed85b25dee35dd5",
  "pool_hash": "pool1z22x50lqsrwent6en0llzzs9e577rx7n3mv9kfw7udwa2rf42fa",
  "stake_address": "stake_test1uquj460qdrj4az6uy7kvtzct4w8226xq4t30dlzfhc360tgegny4m",
  "stake_address_hash_hex": "e0392ae9e068e55e8b5c27acc58b0bab8ea568c0aae2f6fc49be23a7ad",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 3,
  "stake_address_tx_id": 10
 },
 "...",
 {
  "epoch_stake_id": 20,
  "epoch_stake_amount": 100000000000000,
  "epoch_stake_epoch_no": 12,
  "pool_hash_hex": "a57cbcb8ecdf24f469928da924b5bc6e4cbc3b57859577211a0daf6f",
  "pool_hash": "pool1547tew8vmuj0g6vj3k5jfddudextcw6hsk2hwgg6pkhk7lwphe6",
  "stake_address": "stake_test1uztg6yppa0t30rslkrneva5c9qju40rhndjnuy356kxw83s6n95nu",
  "stake_address_hash_hex": "e0968d1021ebd7178e1fb0e79676982825cabc779b653e1234d58ce3c6",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 1,
  "stake_address_tx_id": 10
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch stake distributions

Returns the stake distribution for one epoch given its number.

`GET /api/core/epochs/{no}/stakes`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes = await CBI.core.epochs.stakes_({ "no": 30 });
console.log(stakes); 
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
  "epoch_stake_id": 73,
  "epoch_stake_amount": 1000000000000,
  "epoch_stake_epoch_no": 30,
  "pool_hash_hex": "1d9302a3fb4b3b1935e02b27f0339798d3f08a55fbfdcd43a449a96f",
  "pool_hash": "pool1rkfs9glmfva3jd0q9vnlqvuhnrflpzj4l07u6sayfx5k7d788us",
  "stake_address": "stake_test1uqq9ulg0pgntjvt2a45hy2yd6msnw8pgn7vlsmpjvtgk4xscq9k74",
  "stake_address_hash_hex": "e0005e7d0f0a26b9316aed6972288dd6e1371c289f99f86c3262d16a9a",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 632,
  "stake_address_tx_id": 616
 },
 "...",
 {
  "epoch_stake_id": 92,
  "epoch_stake_amount": 1000000000000,
  "epoch_stake_epoch_no": 30,
  "pool_hash_hex": "8a77ce4ffc0c690419675aa5396df9a38c9cd20e36483d2d2465ce86",
  "pool_hash": "pool13fmuunlup35sgxt8t2jnjm0e5wxfe5swxeyr6tfyvh8gv9hdz68",
  "stake_address": "stake_test1uqykz6yf58hhrtyws026m4ge4pvxw25h5gy6lgggc87mjgsmmq4cg",
  "stake_address_hash_hex": "e009616889a1ef71ac8e83d5add519a858672a97a209afa108c1fdb922",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 891,
  "stake_address_tx_id": 801
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool stake distributions

Returns the stake distribution for one pool across all epochs given its Bech32 pool hash.

`GET /api/core/epochs/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_hash|Bech32 pool hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ "pool_hash": "pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r" });
console.log(stakes_pools); 
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
  "epoch_stake_id": 82,
  "epoch_stake_amount": 1000000000000,
  "epoch_stake_epoch_no": 30,
  "pool_hash_hex": "8aa469088eaf5c38c3d4faf0d3516ca670cd6df5545fafea2f70258b",
  "pool_hash": "pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r",
  "stake_address": "stake_test1uqzdl62aynym329elk2a3xkx3jy3dlvkh4ph0clfeynv58s9nsuvf",
  "stake_address_hash_hex": "e004dfe95d24c9b8a8b9fd95d89ac68c8916fd96bd4377e3e9c926ca1e",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 335,
  "stake_address_tx_id": 413
 },
 "...",
 {
  "epoch_stake_id": 383,
  "epoch_stake_amount": 0,
  "epoch_stake_epoch_no": 31,
  "pool_hash_hex": "8aa469088eaf5c38c3d4faf0d3516ca670cd6df5545fafea2f70258b",
  "pool_hash": "pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r",
  "stake_address": "stake_test1uza7fqeuyqkccz9gx4kxdkfktlprwexrjt73g5uz4ejsqxqmj4tam",
  "stake_address_hash_hex": "e0bbe4833c202d8c08a8356c66d9365fc23764c392fd145382ae650018",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 2162,
  "stake_address_tx_id": 8103
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch and one pool stake distributions

Returns the stake distribution for one epoch given its number, and for one pool given its Bech32 pool hash.

`GET /api/core/epochs/{no}/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|
| pool_hash|Bech32 pool hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ "no": 30, "pool_hash": "pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r" });
console.log(stakes_pools); 
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
  "epoch_stake_id": 82,
  "epoch_stake_amount": 1000000000000,
  "epoch_stake_epoch_no": 30,
  "pool_hash_hex": "8aa469088eaf5c38c3d4faf0d3516ca670cd6df5545fafea2f70258b",
  "pool_hash": "pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r",
  "stake_address": "stake_test1uqzdl62aynym329elk2a3xkx3jy3dlvkh4ph0clfeynv58s9nsuvf",
  "stake_address_hash_hex": "e004dfe95d24c9b8a8b9fd95d89ac68c8916fd96bd4377e3e9c926ca1e",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 335,
  "stake_address_tx_id": 413
 },
 "...",
 {
  "epoch_stake_id": 136,
  "epoch_stake_amount": 48497420161,
  "epoch_stake_epoch_no": 30,
  "pool_hash_hex": "8aa469088eaf5c38c3d4faf0d3516ca670cd6df5545fafea2f70258b",
  "pool_hash": "pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r",
  "stake_address": "stake_test1up3hm9j74c560trk9enccpc269wc9xfn4ah8ax8jp3rwtdgtr58qe",
  "stake_address_hash_hex": "e0637d965eae29a7ac762e678c070ad15d829933af6e7e98f20c46e5b5",
  "stake_address_script_hash_hex": null,
  "stake_address_id": 489,
  "stake_address_tx_id": 526
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All epoch stake distributions <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns stake distributions for all epochs and all pools.

`GET /api/core/odata/epochsstakes`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const epochsstakes = await CBI.core.epochsstakes_({ "odata": true });
console.log(epochsstakes); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#EpochsStakes",
 "value": [
  {
   "epoch_stake_id": 1,
   "epoch_stake_amount": 100000000000000,
   "epoch_stake_epoch_no": 6,
   "pool_hash_hex": "12946a3fe080dd99af599bfff10a05cd3de19bd38ed85b25dee35dd5",
   "pool_hash": "pool1z22x50lqsrwent6en0llzzs9e577rx7n3mv9kfw7udwa2rf42fa",
   "stake_address": "stake_test1uquj460qdrj4az6uy7kvtzct4w8226xq4t30dlzfhc360tgegny4m",
   "stake_address_hash_hex": "e0392ae9e068e55e8b5c27acc58b0bab8ea568c0aae2f6fc49be23a7ad",
   "stake_address_script_hash_hex": null,
   "stake_address_id": 3,
   "stake_address_tx_id": 10
  },
  "...",
  {
   "epoch_stake_id": 20,
   "epoch_stake_amount": 100000000000000,
   "epoch_stake_epoch_no": 12,
   "pool_hash_hex": "a57cbcb8ecdf24f469928da924b5bc6e4cbc3b57859577211a0daf6f",
   "pool_hash": "pool1547tew8vmuj0g6vj3k5jfddudextcw6hsk2hwgg6pkhk7lwphe6",
   "stake_address": "stake_test1uztg6yppa0t30rslkrneva5c9qju40rhndjnuy356kxw83s6n95nu",
   "stake_address_hash_hex": "e0968d1021ebd7178e1fb0e79676982825cabc779b653e1234d58ce3c6",
   "stake_address_script_hash_hex": null,
   "stake_address_id": 1,
   "stake_address_tx_id": 10
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/epochsstakes?$skip=20"
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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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
