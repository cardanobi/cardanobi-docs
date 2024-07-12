--- 
title: '' 
sidebar_label: 'Pools' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Latest block for a given pool<br/>
<EndpointBadge type="GET"/> Block history for a given pool<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Latest block for a given pool

Returns the latest block forged by a pool given its pool identifier.

`GET /api/core/blocks/latest/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_hash|The Bech32 or HEX encoding of the pool hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const pools_pools = await CBI.core.blocks.latest.pools_({ pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(pools_pools); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
pools_pools = await CBI.core.blocks.latest.pools_(pool_hash='pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc');
print(pools_pools); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let pools_pools = CBI.core.blocks.latest.pools_(Some("pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"), HashMap::new()).await.expect("Failed to call endpoint");
println!("pools_pools: {:?}", pools_pools); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "id": 10472458,
 "hash": "6GOnH0eXDmBwlceRzu1aU1ZKvohTQvYuQGLBIZwskf4=",
 "epoch_no": 490,
 "slot_no": 126665631,
 "epoch_slot_no": 348831,
 "block_no": 10438546,
 "previous_id": 10472457,
 "slot_leader_id": 7195394,
 "size": 38226,
 "time": "2024-06-12T22:38:42",
 "tx_count": 12,
 "proto_major": 9,
 "proto_minor": 0,
 "vrf_key": "vrf_vk1ksvt6yywk5j2wkq3rmkxghgru7svaetmjnf8kx4636x7pwcdmgrsy8peyv",
 "op_cert": "NUgPMkkL6COIFetoWlFwBq+oKfkBVWhhaVjMq+teGK8=",
 "op_cert_counter": 11,
 "hash_hex": "e863a71f47970e607095c791ceed5a53564abe885342f62e4062c1219c2c91fe",
 "op_cert_hex": "35480f32490be8238815eb685a517006afa829f9015568616958ccabeb5e18af"
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Block history for a given pool

Returns the history of blocks forged by a pool given its pool identifier.

`GET /api/core/blocks/pools/{pool_hash}/history`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_hash|The Bech32 or HEX encoding of the pool hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const pools_history = await CBI.core.blocks.pools.history_({ pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(pools_history); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
pools_history = await CBI.core.blocks.pools.history_(pool_hash='pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc');
print(pools_history); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let pools_history = CBI.core.blocks.pools.history_(Some("pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"), HashMap::new()).await.expect("Failed to call endpoint");
println!("pools_history: {:?}", pools_history); 
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
  "id": 7195394,
  "hash": "p7spNEAgAKrCr6Ac+0mNoFuDsZF9YAA9VG8Wq190OL4=",
  "epoch_no": 336,
  "slot_no": 59907512,
  "epoch_slot_no": 118712,
  "block_no": 7195039,
  "previous_id": 7195393,
  "slot_leader_id": 7195394,
  "size": 25857,
  "time": "2022-05-02T06:43:23",
  "tx_count": 9,
  "proto_major": 6,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1ksvt6yywk5j2wkq3rmkxghgru7svaetmjnf8kx4636x7pwcdmgrsy8peyv",
  "op_cert": "J+s7a56rZFti3UwljuWrJRa3tFDotXkIIZtLrP7J+qI=",
  "op_cert_counter": 2,
  "hash_hex": "a7bb2934402000aac2afa01cfb498da05b83b1917d60003d546f16ab5f7438be",
  "op_cert_hex": "27eb3b6b9eab645b62dd4c258ee5ab2516b7b450e8b57908219b4bacfec9faa2"
 },
 "...",
 {
  "id": 7218036,
  "hash": "GLIqqodmL/hIikVeytcwBKXSpriHer6pY3l33EfXQNc=",
  "epoch_no": 337,
  "slot_no": 60386263,
  "epoch_slot_no": 165463,
  "block_no": 7217681,
  "previous_id": 7218035,
  "slot_leader_id": 7195394,
  "size": 88922,
  "time": "2022-05-07T19:42:34",
  "tx_count": 28,
  "proto_major": 6,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1ksvt6yywk5j2wkq3rmkxghgru7svaetmjnf8kx4636x7pwcdmgrsy8peyv",
  "op_cert": "J+s7a56rZFti3UwljuWrJRa3tFDotXkIIZtLrP7J+qI=",
  "op_cert_counter": 2,
  "hash_hex": "18b22aaa87662ff8488a455ecad73004a5d2a6b8877abea9637977dc47d740d7",
  "op_cert_hex": "27eb3b6b9eab645b62dd4c258ee5ab2516b7b450e8b57908219b4bacfec9faa2"
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
