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

<EndpointBadge type="GET"/> Block history<br/>
<EndpointBadge type="GET"/> Block preceding history<br/>
<EndpointBadge type="GET"/> Block following history<br/>
<EndpointBadge type="GET"/> Block history <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Block history

Returns the history of blocks starting from the latest block.

`GET /api/core/blocks/history`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| block_no|Block number to search from - defaults to the latest known block|integer|undefined|
| depth|Number of blocks to return - defaults to 20 - max 100|integer|undefined|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const history = await CBI.core.blocks.history_({ "block_no": 8415364, "depth": 20 });
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
  "id": 8416582,
  "hash": "OvameL8I8XFKELj47exOlwfqmbzOlzE2iFzyTo9Z40Q=",
  "epoch_no": 394,
  "slot_no": 85169226,
  "epoch_slot_no": 324426,
  "block_no": 8415513,
  "previous_id": 8416581,
  "slot_leader_id": 5152260,
  "size": 88136,
  "time": "2023-02-18T15:51:57",
  "tx_count": 45,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1360snatudsnaz8lq0cxtsztdgxfp67mypth6tgfvu23y4yj3u96qvq0gv6",
  "op_cert": "pvYwwNCak0eEreyjyUGltUhvdHM7dTyAhXClseeai0w=",
  "op_cert_counter": 13,
  "hash_hex": "3af6a678bf08f1714a10b8f8edec4e9707ea99bcce973136885cf24e8f59e344",
  "op_cert_hex": "a6f630c0d09a934784adeca3c941a5b5486f74733b753c808570a5b1e79a8b4c"
 },
 "...",
 {
  "id": 8416601,
  "hash": "bMbDTu34fPIzjYCyqgwjiKgDid51fvyd8MX9m2wi/Lc=",
  "epoch_no": 394,
  "slot_no": 85169676,
  "epoch_slot_no": 324876,
  "block_no": 8415532,
  "previous_id": 8416600,
  "slot_leader_id": 4555865,
  "size": 72659,
  "time": "2023-02-18T15:59:27",
  "tx_count": 34,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1y6rlw79mmm0pjw2n29w0rjr5vgqsrje3nasr3elt2kvm0v9g0z5q40m3d2",
  "op_cert": "r1OdiV56K+5yjbEUIcUhU8lxhVBXCLRESLE4H8LTs9k=",
  "op_cert_counter": 13,
  "hash_hex": "6cc6c34eedf87cf2338d80b2aa0c2388a80389de757efc9df0c5fd9b6c22fcb7",
  "op_cert_hex": "af539d895e7a2bee728db11421c52153c97185505708b44448b1381fc2d3b3d9"
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
| id|integer(int64)|The block unique identifier.|
| hash|string(byte)|The hash identifier of the block.|
| epoch_no|integer(int32)|The epoch number.|
| slot_no|integer(int64)|The slot number.|
| epoch_slot_no|integer(int32)|The slot number within an epoch (resets to zero at the start of each epoch).|
| block_no|integer(int32)|The block number.|
| previous_id|integer(int64)|The Block table index of the previous block.|
| slot_leader_id|integer(int64)|The SlotLeader table index of the creator of this block.|
| size|integer(int32)|The block size (in bytes). Note, this size value is not expected to be the same as the sum of the tx sizes due to the fact that txs being stored in segwit format and oddities in the CBOR encoding.|
| time|string(date-time)|The block time (UTCTime).|
| tx_count|integer(int64)|The number of transactions in this block.|
| proto_major|integer(int32)|The block's major protocol number.|
| proto_minor|integer(int32)|The block's major protocol number.|
| vrf_key|string(undefined)|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string(undefined)|The hexadecimal encoding of the block hash.|
| op_cert_hex|string(undefined)|The hexadecimal encoding of the block producer operational certificate's hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Block preceding history

Returns the history of blocks preceding a given block number.

`GET /api/core/blocks/history/prev/{block_no}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| block_no|Block number|integer|true|
| depth|Number of blocks to return - defaults to 5 - max 20|integer|undefined|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const history_prev = await CBI.core.blocks.history.prev_({ "block_no": 8415364, "depth": 5 });
console.log(history_prev); 
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
  "id": 8416426,
  "hash": "hsfbxKJcGtV4giyZmHqQvE4nvmea1cHclaNllnh6SC8=",
  "epoch_no": 394,
  "slot_no": 85165614,
  "epoch_slot_no": 320814,
  "block_no": 8415359,
  "previous_id": 8416425,
  "slot_leader_id": 4598518,
  "size": 37828,
  "time": "2023-02-18T14:51:45",
  "tx_count": 28,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1f8ugl3vv734dx4c3k23wtqya2pcec7gjv7mamcth2qwqhcr45fdsw9lugj",
  "op_cert": "KDkksF4kcP3C2S3vrDvXvmC7FLuoADrUOtpqRVpBb78=",
  "op_cert_counter": 13,
  "hash_hex": "86c7dbc4a25c1ad578822c99987a90bc4e27be679ad5c1dc95a36596787a482f",
  "op_cert_hex": "283924b05e2470fdc2d92defac3bd7be60bb14bba8003ad43ada6a455a416fbf"
 },
 "...",
 {
  "id": 8416430,
  "hash": "LXKKBN2rltFIZ/SBjPr2wyV9JkkJHu3jILNo9qJ9GI4=",
  "epoch_no": 394,
  "slot_no": 85165716,
  "epoch_slot_no": 320916,
  "block_no": 8415363,
  "previous_id": 8416429,
  "slot_leader_id": 4968206,
  "size": 22481,
  "time": "2023-02-18T14:53:27",
  "tx_count": 20,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk108rq5sjmh4ncppwwt7f2tmg52h3gvrnexsrfk2gsc5aml6u8u6wseayxqj",
  "op_cert": "Dr3jN+S+7Ie4AeehpJJ0PzXCkSevAo0KCrXzFV0T2CA=",
  "op_cert_counter": 8,
  "hash_hex": "2d728a04ddab96d14867f4818cfaf6c3257d2649091eede320b368f6a27d188e",
  "op_cert_hex": "0ebde337e4beec87b801e7a1a492743f35c29127af028d0a0ab5f3155d13d820"
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
| id|integer(int64)|The block unique identifier.|
| hash|string(byte)|The hash identifier of the block.|
| epoch_no|integer(int32)|The epoch number.|
| slot_no|integer(int64)|The slot number.|
| epoch_slot_no|integer(int32)|The slot number within an epoch (resets to zero at the start of each epoch).|
| block_no|integer(int32)|The block number.|
| previous_id|integer(int64)|The Block table index of the previous block.|
| slot_leader_id|integer(int64)|The SlotLeader table index of the creator of this block.|
| size|integer(int32)|The block size (in bytes). Note, this size value is not expected to be the same as the sum of the tx sizes due to the fact that txs being stored in segwit format and oddities in the CBOR encoding.|
| time|string(date-time)|The block time (UTCTime).|
| tx_count|integer(int64)|The number of transactions in this block.|
| proto_major|integer(int32)|The block's major protocol number.|
| proto_minor|integer(int32)|The block's major protocol number.|
| vrf_key|string(undefined)|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string(undefined)|The hexadecimal encoding of the block hash.|
| op_cert_hex|string(undefined)|The hexadecimal encoding of the block producer operational certificate's hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Block following history

Returns the history of blocks following a given block number.

`GET /api/core/blocks/history/next/{block_no}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| block_no|Block number|integer|true|
| depth|Number of blocks to return - defaults to 5 - max 20|integer|undefined|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const history_next = await CBI.core.blocks.history.next_({ "block_no": 8415364, "depth": 5 });
console.log(history_next); 
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
  "id": 8416432,
  "hash": "Zj1EkkdScv9M8Hggysx2e+uUP6csk3UO3LOHBaIz1kw=",
  "epoch_no": 394,
  "slot_no": 85165774,
  "epoch_slot_no": 320974,
  "block_no": 8415365,
  "previous_id": 8416431,
  "slot_leader_id": 8158402,
  "size": 32473,
  "time": "2023-02-18T14:54:25",
  "tx_count": 20,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1kq8upg9wdtg53fmvn9xlrqtyceg8xyra2c48jacj9s9cnjq7j6sssdjfdv",
  "op_cert": "Po9bzZD/+fkqplO7j4uC62Sc219HuXkGwr9Kcshhcr8=",
  "op_cert_counter": 1,
  "hash_hex": "663d4492475272ff4cf07820cacc767beb943fa72c93750edcb38705a233d64c",
  "op_cert_hex": "3e8f5bcd90fff9f92aa653bb8f8b82eb649cdb5f47b97906c2bf4a72c86172bf"
 },
 "...",
 {
  "id": 8416436,
  "hash": "KPZnNWboo3c+ShxKLPP5G1FPMvI1ub/6YI4gyR1/pT8=",
  "epoch_no": 394,
  "slot_no": 85165840,
  "epoch_slot_no": 321040,
  "block_no": 8415369,
  "previous_id": 8416435,
  "slot_leader_id": 5512499,
  "size": 42049,
  "time": "2023-02-18T14:55:31",
  "tx_count": 4,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1ys9nhj9yzzd7lwpgthrc2rrtekkaal7frdv86em07exn84vd658svuuk2x",
  "op_cert": "O2Lw0w6SvPHPuoPE2WL75hZfAdlNW3+zN6Ss0Z3S9hg=",
  "op_cert_counter": 8,
  "hash_hex": "28f6673566e8a3773e4a1c4a2cf3f91b514f32f235b9bffa608e20c91d7fa53f",
  "op_cert_hex": "3b62f0d30e92bcf1cfba83c4d962fbe6165f01d94d5b7fb337a4acd19dd2f618"
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
| id|integer(int64)|The block unique identifier.|
| hash|string(byte)|The hash identifier of the block.|
| epoch_no|integer(int32)|The epoch number.|
| slot_no|integer(int64)|The slot number.|
| epoch_slot_no|integer(int32)|The slot number within an epoch (resets to zero at the start of each epoch).|
| block_no|integer(int32)|The block number.|
| previous_id|integer(int64)|The Block table index of the previous block.|
| slot_leader_id|integer(int64)|The SlotLeader table index of the creator of this block.|
| size|integer(int32)|The block size (in bytes). Note, this size value is not expected to be the same as the sum of the tx sizes due to the fact that txs being stored in segwit format and oddities in the CBOR encoding.|
| time|string(date-time)|The block time (UTCTime).|
| tx_count|integer(int64)|The number of transactions in this block.|
| proto_major|integer(int32)|The block's major protocol number.|
| proto_minor|integer(int32)|The block's major protocol number.|
| vrf_key|string(undefined)|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string(undefined)|The hexadecimal encoding of the block hash.|
| op_cert_hex|string(undefined)|The hexadecimal encoding of the block producer operational certificate's hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Block history <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the history of blocks starting from the latest block.

`GET /api/core/odata/blocks`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| block_no|Block number to search from - defaults to the latest known block|integer|undefined|
| depth|Number of blocks to return - defaults to 20 - max 100|integer|undefined|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const blocks = await CBI.core.blocks_({ "odata": true, "block_no": 8415364, "depth": 20 });
console.log(blocks); 
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
 "id": 8416431,
 "hash": "if8QkGFBBakZyczIuzkUqu8d3SghSk1V/2VDbSyfwLI=",
 "epoch_no": 394,
 "slot_no": 85165743,
 "epoch_slot_no": 320943,
 "block_no": 8415364,
 "previous_id": 8416430,
 "slot_leader_id": 7195394,
 "size": 47554,
 "time": "2023-02-18T14:53:54",
 "tx_count": 25,
 "proto_major": 8,
 "proto_minor": 0,
 "vrf_key": "vrf_vk1ksvt6yywk5j2wkq3rmkxghgru7svaetmjnf8kx4636x7pwcdmgrsy8peyv",
 "op_cert": "LRXcL8sndi7y+wi7cjGLkUD+cYn7yq2+GFICiVMrC80=",
 "op_cert_counter": 5,
 "hash_hex": "89ff1090614105a919c9ccc8bb3914aaef1ddd28214a4d55ff65436d2c9fc0b2",
 "op_cert_hex": "2d15dc2fcb27762ef2fb08bb72318b9140fe7189fbcaadbe18520289532b0bcd"
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
| id|integer(int64)|The block unique identifier.|
| hash|string(byte)|The hash identifier of the block.|
| epoch_no|integer(int32)|The epoch number.|
| slot_no|integer(int64)|The slot number.|
| epoch_slot_no|integer(int32)|The slot number within an epoch (resets to zero at the start of each epoch).|
| block_no|integer(int32)|The block number.|
| previous_id|integer(int64)|The Block table index of the previous block.|
| slot_leader_id|integer(int64)|The SlotLeader table index of the creator of this block.|
| size|integer(int32)|The block size (in bytes). Note, this size value is not expected to be the same as the sum of the tx sizes due to the fact that txs being stored in segwit format and oddities in the CBOR encoding.|
| time|string(date-time)|The block time (UTCTime).|
| tx_count|integer(int64)|The number of transactions in this block.|
| proto_major|integer(int32)|The block's major protocol number.|
| proto_minor|integer(int32)|The block's major protocol number.|
| vrf_key|string(undefined)|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string(undefined)|The hexadecimal encoding of the block hash.|
| op_cert_hex|string(undefined)|The hexadecimal encoding of the block producer operational certificate's hash.|
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
