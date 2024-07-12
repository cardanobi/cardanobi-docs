--- 
title: '' 
sidebar_label: 'Metadata' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool metadata<br/>
<EndpointBadge type="GET"/> One pool metadata by pool id<br/>
<EndpointBadge type="GET"/> One pool metadata by pool metadata hash<br/>
<EndpointBadge type="GET"/> All pool metadata <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool metadata by pool id <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool metadata

Returns all on-chain references to off-chain pool metadata.

`GET /api/core/pools/metadata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const metadata = await CBI.core.pools.metadata_();
console.log(metadata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
metadata = await CBI.core.pools.metadata_();
print(metadata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let metadata_metadata = CBI.core.pools.metadata_(HashMap::new()).await.expect("Failed to call endpoint");
println!("metadata_metadata: {:?}", metadata_metadata); 
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
  "pool_id": 1,
  "url": "https://raw.githubusercontent.com/Octalus/cardano/master/p.json",
  "hash": "yn0S3s+IbjH1ImtZRsYu3IGn5Ar5XOfNZGUSLjCdViY=",
  "registered_tx_id": 2415556,
  "hash_hex": "ca7d12decf886e31f5226b5946c62edc81a7e40af95ce7cd6465122e309d5626"
 },
 "...",
 {
  "id": 20,
  "pool_id": 20,
  "url": "https://masp-pool.nl/MASP.json",
  "hash": "W7EULqP9nfVf8XIYSLm2ugJ32I5hGnT5rzr6ODhkTZY=",
  "registered_tx_id": 2416313,
  "hash_hex": "5bb1142ea3fd9df55ff1721848b9b6ba0277d88e611a74f9af3afa3838644d96"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool metadata by pool id

Returns the on-chain references to off-chain pool metadata for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/metadata`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const metadata = await CBI.core.pools.metadata_({ pool_id: 4268 });
console.log(metadata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
metadata = await CBI.core.pools.metadata_(pool_id=4268);
print(metadata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let metadata_metadata = CBI.core.pools.metadata_(Some(4268), HashMap::new()).await.expect("Failed to call endpoint");
println!("metadata_metadata: {:?}", metadata_metadata); 
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
  "id": 21950,
  "pool_id": 4268,
  "url": "https://git.io/JEMjI",
  "hash": "RGovyIsZoojy+22lEpImU8mUIACtoQyEbXHki86nToo=",
  "registered_tx_id": 12623716,
  "hash_hex": "446a2fc88b19a288f2fb6da512922653c9942000ada10c846d71e48bcea74e8a"
 },
 "...",
 {
  "id": 33370,
  "pool_id": 4268,
  "url": "https://adacapital.io/adact_mainnet.json",
  "hash": "6tUh2ifWxy3aXv3AppdnV6ZrcmLJeAeHzlxwwY6PSW8=",
  "registered_tx_id": 86928296,
  "hash_hex": "ead521da27d6c72dda5efdc0a6976757a66b7262c9780787ce5c70c18e8f496f"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool metadata by pool metadata hash

Returns the on-chain references to off-chain pool metadata for one pool given its metadata hash.

`GET /api/core/pools/metadata/hashes/{meta_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| meta_hash|Pool metadata hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const metadata_hashes = await CBI.core.pools.metadata.hashes_({ meta_hash: "42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8" });
console.log(metadata_hashes); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
metadata_hashes = await CBI.core.pools.metadata.hashes_(meta_hash='42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8');
print(metadata_hashes); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let metadata_hashes = CBI.core.pools.metadata.hashes_(Some("42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8"), HashMap::new()).await.expect("Failed to call endpoint");
println!("metadata_hashes: {:?}", metadata_hashes); 
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
  "id": 28640,
  "pool_id": 4268,
  "url": "https://adacapital.io/adact_mainnet.json",
  "hash": "QncbBbMPGAiQmAYTsxR/a7eX/h+Kg+ktOaMTXslVnqg=",
  "registered_tx_id": 49755882,
  "hash_hex": "42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8"
 },
 "...",
 {
  "id": 28640,
  "pool_id": 4268,
  "url": "https://adacapital.io/adact_mainnet.json",
  "hash": "QncbBbMPGAiQmAYTsxR/a7eX/h+Kg+ktOaMTXslVnqg=",
  "registered_tx_id": 49755882,
  "hash_hex": "42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool metadata <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all on-chain references to off-chain pool metadata.

`GET /api/core/odata/poolsmetadata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsmetadata = await CBI.core.poolsmetadata_({ "odata": true });
console.log(poolsmetadata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
poolsmetadata = await CBI.core.poolsmetadata_(odata=true);
print(poolsmetadata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let poolsmetadata = CBI.core.poolsmetadata_(HashMap::from([("odata", "true")])).await.expect("Failed to call endpoint");
println!("poolsmetadata: {:?}", poolsmetadata); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "@odata.context": "https://cardanobi.io/api/core/odata/$metadata#PoolsMetadata",
 "value": [
  {
   "id": 1,
   "pool_id": 1,
   "url": "https://raw.githubusercontent.com/Octalus/cardano/master/p.json",
   "hash": "yn0S3s+IbjH1ImtZRsYu3IGn5Ar5XOfNZGUSLjCdViY=",
   "registered_tx_id": 2415556,
   "hash_hex": "ca7d12decf886e31f5226b5946c62edc81a7e40af95ce7cd6465122e309d5626"
  },
  "...",
  {
   "id": 20,
   "pool_id": 20,
   "url": "https://masp-pool.nl/MASP.json",
   "hash": "W7EULqP9nfVf8XIYSLm2ugJ32I5hGnT5rzr6ODhkTZY=",
   "registered_tx_id": 2416313,
   "hash_hex": "5bb1142ea3fd9df55ff1721848b9b6ba0277d88e611a74f9af3afa3838644d96"
  }
 ],
 "@odata.nextLink": "https://cardanobi.io/api/core/odata/poolsmetadata?$skip=20"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string|The hexadecimal encoding of the expected hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool metadata by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the on-chain references to off-chain pool metadata for one pool given its unique identifier.

`GET /api/core/odata/poolsmetadata/{pool_id}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsmetadata = await CBI.core.poolsmetadata_({ "odata": true, pool_id: 4268 });
console.log(poolsmetadata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
poolsmetadata = await CBI.core.poolsmetadata_(odata=true,pool_id=4268);
print(poolsmetadata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let poolsmetadata = CBI.core.poolsmetadata_(Some(4268), HashMap::from([("odata", "true")])).await.expect("Failed to call endpoint");
println!("poolsmetadata: {:?}", poolsmetadata); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "@odata.context": "https://cardanobi.io/api/core/odata/$metadata#PoolsMetadata",
 "value": [
  {
   "id": 21950,
   "pool_id": 4268,
   "url": "https://git.io/JEMjI",
   "hash": "RGovyIsZoojy+22lEpImU8mUIACtoQyEbXHki86nToo=",
   "registered_tx_id": 12623716,
   "hash_hex": "446a2fc88b19a288f2fb6da512922653c9942000ada10c846d71e48bcea74e8a"
  },
  "...",
  {
   "id": 33370,
   "pool_id": 4268,
   "url": "https://adacapital.io/adact_mainnet.json",
   "hash": "6tUh2ifWxy3aXv3AppdnV6ZrcmLJeAeHzlxwwY6PSW8=",
   "registered_tx_id": 86928296,
   "hash_hex": "ead521da27d6c72dda5efdc0a6976757a66b7262c9780787ce5c70c18e8f496f"
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
| id|integer(int64)|The pool metadata ref unique identifier.|
| pool_id|integer(int64)|The PoolHash table index of the pool for this reference.|
| url|string|The URL for the location of the off-chain data.|
| hash|string(byte)|The expected hash for the off-chain data.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this metadata reference.|
| hash_hex|string|The hexadecimal encoding of the expected hash.|
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
