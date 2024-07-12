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

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_no|Block number to search from - defaults to the latest known block|query|integer|false|
| depth|Number of blocks to return - defaults to 20 - max 100|query|integer|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const history = await CBI.core.blocks.history_();
console.log(history); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
history = await CBI.core.blocks.history_();
print(history); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let history_history = CBI.core.blocks.history_(HashMap::new()).await.expect("Failed to call endpoint");
println!("history_history: {:?}", history_history); 
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
  "id": 8416412,
  "hash": "wfrezN7rrGzvKjmT9Ygk8uP0jB/NEIp25GY/QuflmAY=",
  "epoch_no": 394,
  "slot_no": 85165277,
  "epoch_slot_no": 320477,
  "block_no": 8415345,
  "previous_id": 8416411,
  "slot_leader_id": 5644002,
  "size": 1502,
  "time": "2023-02-18T14:46:08",
  "tx_count": 2,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1tk8arggze6yrypa3sv3s8fxzqvnc5s6g6fp2ledgtqu453f204lsjesn39",
  "op_cert": "tWUUkmzaTSE65vvWHVdzzsj/ndpyl7nPleIuO3vhaPs=",
  "op_cert_counter": 8,
  "hash_hex": "c1fadeccdeebac6cef2a3993f58824f2e3f48c1fcd108a76e4663f42e7e59806",
  "op_cert_hex": "b56514926cda4d213ae6fbd61d5773cec8ff9dda7297b9cf95e22e3b7be168fb"
 },
 "...",
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
| vrf_key|string|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string|The hexadecimal encoding of the block hash.|
| op_cert_hex|string|The hexadecimal encoding of the block producer operational certificate's hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Block preceding history

Returns the history of blocks preceding a given block number.

`GET /api/core/blocks/history/prev/{block_no}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_no|Block number|path|integer|true|
| depth|Number of blocks to return - defaults to 5 - max 20|query|integer|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const history_prev = await CBI.core.blocks.history.prev_({ block_no: 8415364 });
console.log(history_prev); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
history_prev = await CBI.core.blocks.history.prev_(block_no=8415364);
print(history_prev); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let history_prev = CBI.core.blocks.history.prev_(Some(8415364), HashMap::new()).await.expect("Failed to call endpoint");
println!("history_prev: {:?}", history_prev); 
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
  "id": 8416411,
  "hash": "BrDMAIQm6JL1sIqzX3+Um0321UZudEtmiE8WsQp1JjE=",
  "epoch_no": 394,
  "slot_no": 85165272,
  "epoch_slot_no": 320472,
  "block_no": 8415344,
  "previous_id": 8416410,
  "slot_leader_id": 7046674,
  "size": 8191,
  "time": "2023-02-18T14:46:03",
  "tx_count": 3,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1yv9nrq4wg4x8lww755wtmlx3z764jm7ur8efmgur9mgpfe6hayyq5vcf6g",
  "op_cert": "em0oD6MC45oyLcocIiwToBfYCxTjhd5bo1CvyrTHX2Y=",
  "op_cert_counter": 1659973422,
  "hash_hex": "06b0cc008426e892f5b08ab35f7f949b4df6d5466e744b66884f16b10a752631",
  "op_cert_hex": "7a6d280fa302e39a322dca1c222c13a017d80b14e385de5ba350afcab4c75f66"
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
| vrf_key|string|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string|The hexadecimal encoding of the block hash.|
| op_cert_hex|string|The hexadecimal encoding of the block producer operational certificate's hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Block following history

Returns the history of blocks following a given block number.

`GET /api/core/blocks/history/next/{block_no}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_no|Block number|path|integer|true|
| depth|Number of blocks to return - defaults to 5 - max 20|query|integer|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const history_next = await CBI.core.blocks.history.next_({ block_no: 8415364 });
console.log(history_next); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
history_next = await CBI.core.blocks.history.next_(block_no=8415364);
print(history_next); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let history_next = CBI.core.blocks.history.next_(Some(8415364), HashMap::new()).await.expect("Failed to call endpoint");
println!("history_next: {:?}", history_next); 
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
  "id": 8416451,
  "hash": "CxYmgcFnUeZuklTya1M2G65Q7bzi7xA0Em9sF8Jyz0o=",
  "epoch_no": 394,
  "slot_no": 85166322,
  "epoch_slot_no": 321522,
  "block_no": 8415384,
  "previous_id": 8416450,
  "slot_leader_id": 4557937,
  "size": 83135,
  "time": "2023-02-18T15:03:33",
  "tx_count": 36,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1z3qaj95vx6mhmzcj63c7f9v4am60fhlz55w5m26wk4nnl0tfc33q4s5h8m",
  "op_cert": "/h7yVK+AO7i482/C82Yn4Z1EkUACT3Dcpnr7twa2nkE=",
  "op_cert_counter": 14,
  "hash_hex": "0b162681c16751e66e9254f26b53361bae50edbce2ef1034126f6c17c272cf4a",
  "op_cert_hex": "fe1ef254af803bb8b8f36fc2f36627e19d449140024f70dca67afbb706b69e41"
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
| vrf_key|string|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string|The hexadecimal encoding of the block hash.|
| op_cert_hex|string|The hexadecimal encoding of the block producer operational certificate's hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Block history <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the history of blocks starting from the latest block.

`GET /api/core/odata/blocks`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_no|Block number to search from - defaults to the latest known block|query|integer|false|
| depth|Number of blocks to return - defaults to 20 - max 100|query|integer|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const blocks = await CBI.core.blocks_({ "odata": true });
console.log(blocks); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
blocks = await CBI.core.blocks_(odata=true);
print(blocks); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let blocks = CBI.core.blocks_(HashMap::from([("odata", "true")])).await.expect("Failed to call endpoint");
println!("blocks: {:?}", blocks); 
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
| vrf_key|string|The VRF key of the creator of this block.|
| op_cert|string(byte)|The hash of the operational certificate of the block producer.|
| op_cert_counter|integer(int64)|The value of the counter used to produce the operational certificate.|
| hash_hex|string|The hexadecimal encoding of the block hash.|
| op_cert_hex|string|The hexadecimal encoding of the block producer operational certificate's hash.|
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
