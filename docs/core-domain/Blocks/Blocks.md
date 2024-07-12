--- 
title: '' 
sidebar_label: 'Blocks' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Latest block<br/>
<EndpointBadge type="GET"/> One block by block number<br/>
<EndpointBadge type="GET"/> One block by block hash<br/>
<EndpointBadge type="GET"/> One block by epoch and slot number<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Latest block

Returns the latest block i.e. the tip of the blockchain.

`GET /api/core/blocks/latest`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const latest = await CBI.core.blocks.latest_();
console.log(latest); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
latest = await CBI.core.blocks.latest_();
print(latest); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let blocks_latest = CBI.core.blocks.latest_(HashMap::new()).await.expect("Failed to call endpoint");
println!("blocks_latest: {:?}", blocks_latest); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "id": 10595156,
 "hash": "F3PsbxTP56Xyj9nsaxDuwHSsnWgSsj883wHeMWayDrA=",
 "epoch_no": 496,
 "slot_no": 129143847,
 "epoch_slot_no": 235047,
 "block_no": 10559461,
 "previous_id": 10595155,
 "slot_leader_id": 4555972,
 "size": 88940,
 "time": "2024-07-11T15:02:18",
 "tx_count": 15,
 "proto_major": 8,
 "proto_minor": 0,
 "vrf_key": "vrf_vk1d0djffha6pa0fk44jsugyh8ew7lmmarr2k6m2xxe5qgl97ztjlyqdk5lmx",
 "op_cert": "zGmgcmETwmFsAcz/XYdNr7jXprrei+mDxsh90gJxDWQ=",
 "op_cert_counter": 17,
 "hash_hex": "1773ec6f14cfe7a5f28fd9ec6b10eec074ac9d6812b23f3cdf01de3166b20eb0",
 "op_cert_hex": "cc69a0726113c2616c01ccff5d874dafb8d7a6bade8be983c6c87dd202710d64"
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One block by block number

Returns one specific block given its number.

`GET /api/core/blocks/{block_no}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_no|Block number|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const blocks = await CBI.core.blocks_({ block_no: 8415364 });
console.log(blocks); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
blocks = await CBI.core.blocks_(block_no=8415364);
print(blocks); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let blocks = CBI.core.blocks_(Some(8415364), HashMap::new()).await.expect("Failed to call endpoint");
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One block by block hash

Returns one specific block given its hash.

`GET /api/core/blocks/{block_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_hash|Block hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const blocks = await CBI.core.blocks_({ block_hash: "89ff1090614105a919c9ccc8bb3914aaef1ddd28214a4d55ff65436d2c9fc0b2" });
console.log(blocks); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
blocks = await CBI.core.blocks_(block_hash='89ff1090614105a919c9ccc8bb3914aaef1ddd28214a4d55ff65436d2c9fc0b2');
print(blocks); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let blocks = CBI.core.blocks_(Some("89ff1090614105a919c9ccc8bb3914aaef1ddd28214a4d55ff65436d2c9fc0b2"), HashMap::new()).await.expect("Failed to call endpoint");
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One block by epoch and slot number

Returns one specific block given its epoch and slot numbers.

`GET /api/core/blocks/epochs/{epoch_no}/slots/{slot_no}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| epoch_no|Epoch number|path|integer|true|
| slot_no|Slot number|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const blocks_slots = await CBI.core.blocks.epochs.slots_({ epoch_no: 394, slot_no: 85165743 });
console.log(blocks_slots); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
blocks_slots = await CBI.core.blocks.epochs.slots_(epoch_no=394,slot_no=85165743);
print(blocks_slots); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let blocks_slots = CBI.core.blocks.epochs.slots_(Some(394), Some(85165743), HashMap::new()).await.expect("Failed to call endpoint");
println!("blocks_slots: {:?}", blocks_slots); 
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
