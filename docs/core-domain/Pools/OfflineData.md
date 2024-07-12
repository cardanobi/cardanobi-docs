--- 
title: '' 
sidebar_label: 'OfflineData' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool offline data<br/>
<EndpointBadge type="GET"/> One pool offline data by pool id<br/>
<EndpointBadge type="GET"/> One pool offline data by pool ticker<br/>
<EndpointBadge type="GET"/> One pool offline data by pool metadata hash<br/>
<EndpointBadge type="GET"/> All pool offline data <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool offline data by pool id <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline data

Returns all pool offline (ie not on chain) data.

`GET /api/core/pools/offlinedata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata = await CBI.core.pools.offlinedata_();
console.log(offlinedata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
offlinedata = await CBI.core.pools.offlinedata_();
print(offlinedata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let offlinedata_offlinedata = CBI.core.pools.offlinedata_(HashMap::new()).await.expect("Failed to call endpoint");
println!("offlinedata_offlinedata: {:?}", offlinedata_offlinedata); 
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
  "pool_id": 274,
  "ticker_name": "ADI",
  "hash": "g2+NJFE5q/Zi7pPGk3mEyJW9uIuKBp5SFEp3ekWKzsY=",
  "json": "{\"name\": \"Cardanesia\", \"ticker\": \"ADI\", \"homepage\": \"https://cardanesia.com\", \"description\": \"An Indonesian-based Cardano stake pool\"}",
  "bytes": "ewoibmFtZSI6ICJDYXJkYW5lc2lhIiwKImRlc2NyaXB0aW9uIjogIkFuIEluZG9uZXNpYW4tYmFzZWQgQ2FyZGFubyBzdGFrZSBwb29sIiwKInRpY2tlciI6ICJBREkiLAoiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9jYXJkYW5lc2lhLmNvbSIKfQo=",
  "pmr_id": 328,
  "hash_hex": "836f8d245139abf662ee93c6937984c895bdb88b8a069e52144a777a458acec6"
 },
 "...",
 {
  "id": 20,
  "pool_id": 194,
  "ticker_name": "CENT1",
  "hash": "0Ty3CJju7/ggZnXhZLP6uS5bCmwvjfwO2lvrs9VDYqQ=",
  "json": "{\"name\": \"Stake Pool Central\", \"ticker\": \"CENT1\", \"homepage\": \"https://cent.stakepoolcentral.com\", \"description\": \"Stable operations delivered by Stake Pool Central\"}",
  "bytes": "ewogICJuYW1lIjogIlN0YWtlIFBvb2wgQ2VudHJhbCIsCiAgImRlc2NyaXB0aW9uIjogIlN0YWJsZSBvcGVyYXRpb25zIGRlbGl2ZXJlZCBieSBTdGFrZSBQb29sIENlbnRyYWwiLAogICJ0aWNrZXIiOiAiQ0VOVDEiLAogICJob21lcGFnZSI6ICJodHRwczovL2NlbnQuc3Rha2Vwb29sY2VudHJhbC5jb20iCn0K",
  "pmr_id": 225,
  "hash_hex": "d13cb70898eeeff8206675e164b3fab92e5b0a6c2f8dfc0eda5bebb3d54362a4"
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool id

Returns the offline (ie not on chain) data for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/offlinedata`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata = await CBI.core.pools.offlinedata_({ pool_id: 4268 });
console.log(offlinedata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
offlinedata = await CBI.core.pools.offlinedata_(pool_id=4268);
print(offlinedata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let offlinedata_offlinedata = CBI.core.pools.offlinedata_(Some(4268), HashMap::new()).await.expect("Failed to call endpoint");
println!("offlinedata_offlinedata: {:?}", offlinedata_offlinedata); 
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
  "id": 8261,
  "pool_id": 4268,
  "ticker_name": "ADACT",
  "hash": "RGovyIsZoojy+22lEpImU8mUIACtoQyEbXHki86nToo=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - Mainnet Pool\"}",
  "bytes": "ewoibmFtZSI6ICJBREEgQ2FwaXRhbCIsCiJkZXNjcmlwdGlvbiI6ICJBREEgQ2FwaXRhbCAtIE1haW5uZXQgUG9vbCIsCiJ0aWNrZXIiOiAiQURBQ1QiLAoiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvIgp9",
  "pmr_id": 21950,
  "hash_hex": "446a2fc88b19a288f2fb6da512922653c9942000ada10c846d71e48bcea74e8a"
 },
 "...",
 {
  "id": 2548912,
  "pool_id": 4268,
  "ticker_name": "ADACT",
  "hash": "6tUh2ifWxy3aXv3AppdnV6ZrcmLJeAeHzlxwwY6PSW8=",
  "json": "{\"name\": \"ADA Capital•🌍ADACT•👽CardanoBI•⚡Orcfax•ADA•METERA\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital • Mainnet Pool • You Stake, You Earn, We Build • Earn extra tokens: METERA, FACT • We have delivered CardanoBI and are building renewable energy solutions on Cardano🌞\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWzigKLwn4yNQURBQ1TigKLwn5G9Q2FyZGFub0JJ4oCi4pqhT3JjZmF44oCiQURB4oCiTUVURVJBIiwKICAgICJkZXNjcmlwdGlvbiI6ICJBREEgQ2FwaXRhbCDigKIgTWFpbm5ldCBQb29sIOKAoiBZb3UgU3Rha2UsIFlvdSBFYXJuLCBXZSBCdWlsZCDigKIgRWFybiBleHRyYSB0b2tlbnM6IE1FVEVSQSwgRkFDVCDigKIgV2UgaGF2ZSBkZWxpdmVyZWQgQ2FyZGFub0JJIGFuZCBhcmUgYnVpbGRpbmcgcmVuZXdhYmxlIGVuZXJneSBzb2x1dGlvbnMgb24gQ2FyZGFub/CfjJ4iLAogICAgInRpY2tlciI6ICJBREFDVCIsCiAgICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvIiwKICAgICJleHRlbmRlZCI6ICJodHRwczovL2FkYWNhcGl0YWwuaW8vYWRhY3RfZXh0ZW5kZWQuanNvbiIKfQ==",
  "pmr_id": 33370,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool ticker

Returns the offline (ie not on chain) data for one pool given its ticker.

`GET /api/core/pools/{ticker}/offlinedata`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| ticker|Pool ticker|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata = await CBI.core.pools.offlinedata_({ ticker: "ADACT" });
console.log(offlinedata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
offlinedata = await CBI.core.pools.offlinedata_(ticker='ADACT');
print(offlinedata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let offlinedata_offlinedata = CBI.core.pools.offlinedata_(Some("ADACT"), HashMap::new()).await.expect("Failed to call endpoint");
println!("offlinedata_offlinedata: {:?}", offlinedata_offlinedata); 
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
  "id": 8261,
  "pool_id": 4268,
  "ticker_name": "ADACT",
  "hash": "RGovyIsZoojy+22lEpImU8mUIACtoQyEbXHki86nToo=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - Mainnet Pool\"}",
  "bytes": "ewoibmFtZSI6ICJBREEgQ2FwaXRhbCIsCiJkZXNjcmlwdGlvbiI6ICJBREEgQ2FwaXRhbCAtIE1haW5uZXQgUG9vbCIsCiJ0aWNrZXIiOiAiQURBQ1QiLAoiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvIgp9",
  "pmr_id": 21950,
  "hash_hex": "446a2fc88b19a288f2fb6da512922653c9942000ada10c846d71e48bcea74e8a"
 },
 "...",
 {
  "id": 2548912,
  "pool_id": 4268,
  "ticker_name": "ADACT",
  "hash": "6tUh2ifWxy3aXv3AppdnV6ZrcmLJeAeHzlxwwY6PSW8=",
  "json": "{\"name\": \"ADA Capital•🌍ADACT•👽CardanoBI•⚡Orcfax•ADA•METERA\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital • Mainnet Pool • You Stake, You Earn, We Build • Earn extra tokens: METERA, FACT • We have delivered CardanoBI and are building renewable energy solutions on Cardano🌞\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWzigKLwn4yNQURBQ1TigKLwn5G9Q2FyZGFub0JJ4oCi4pqhT3JjZmF44oCiQURB4oCiTUVURVJBIiwKICAgICJkZXNjcmlwdGlvbiI6ICJBREEgQ2FwaXRhbCDigKIgTWFpbm5ldCBQb29sIOKAoiBZb3UgU3Rha2UsIFlvdSBFYXJuLCBXZSBCdWlsZCDigKIgRWFybiBleHRyYSB0b2tlbnM6IE1FVEVSQSwgRkFDVCDigKIgV2UgaGF2ZSBkZWxpdmVyZWQgQ2FyZGFub0JJIGFuZCBhcmUgYnVpbGRpbmcgcmVuZXdhYmxlIGVuZXJneSBzb2x1dGlvbnMgb24gQ2FyZGFub/CfjJ4iLAogICAgInRpY2tlciI6ICJBREFDVCIsCiAgICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvIiwKICAgICJleHRlbmRlZCI6ICJodHRwczovL2FkYWNhcGl0YWwuaW8vYWRhY3RfZXh0ZW5kZWQuanNvbiIKfQ==",
  "pmr_id": 33370,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool metadata hash

Returns the offline (ie not on chain) data for one pool given its metadata hash.

`GET /api/core/pools/metadata/{meta_hash}/offlinedata`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| meta_hash|Pool metadata hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const offlinedata_offlinedata = await CBI.core.pools.metadata.offlinedata_({ meta_hash: "42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8" });
console.log(offlinedata_offlinedata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
offlinedata_offlinedata = await CBI.core.pools.metadata.offlinedata_(meta_hash='42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8');
print(offlinedata_offlinedata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let offlinedata_offlinedata = CBI.core.pools.metadata.offlinedata_(Some("42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8"), HashMap::new()).await.expect("Failed to call endpoint");
println!("offlinedata_offlinedata: {:?}", offlinedata_offlinedata); 
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
  "id": 42582,
  "pool_id": 4268,
  "ticker_name": "ADACT",
  "hash": "QncbBbMPGAiQmAYTsxR/a7eX/h+Kg+ktOaMTXslVnqg=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - Mainnet Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gTWFpbm5ldCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 28640,
  "hash_hex": "42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8"
 },
 "...",
 {
  "id": 42582,
  "pool_id": 4268,
  "ticker_name": "ADACT",
  "hash": "QncbBbMPGAiQmAYTsxR/a7eX/h+Kg+ktOaMTXslVnqg=",
  "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - Mainnet Pool\"}",
  "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWwiLAogICAgImRlc2NyaXB0aW9uIjogIkFEQSBDYXBpdGFsIC0gTWFpbm5ldCBQb29sIiwKICAgICJ0aWNrZXIiOiAiQURBQ1QiLAogICAgImhvbWVwYWdlIjogImh0dHBzOi8vYWRhY2FwaXRhbC5pbyIsCiAgICAiZXh0ZW5kZWQiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvL2FkYWN0X2V4dGVuZGVkLmpzb24iCn0=",
  "pmr_id": 28640,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline data <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all pool offline (ie not on chain) data.

`GET /api/core/odata/poolsofflinedata`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsofflinedata = await CBI.core.poolsofflinedata_({ "odata": true });
console.log(poolsofflinedata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
poolsofflinedata = await CBI.core.poolsofflinedata_(odata=true);
print(poolsofflinedata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let poolsofflinedata = CBI.core.poolsofflinedata_(HashMap::from([("odata", "true")])).await.expect("Failed to call endpoint");
println!("poolsofflinedata: {:?}", poolsofflinedata); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "@odata.context": "https://cardanobi.io/api/core/odata/$metadata#PoolsOfflineData",
 "value": [
  {
   "id": 1,
   "pool_id": 274,
   "ticker_name": "ADI",
   "hash": "g2+NJFE5q/Zi7pPGk3mEyJW9uIuKBp5SFEp3ekWKzsY=",
   "json": "{\"name\": \"Cardanesia\", \"ticker\": \"ADI\", \"homepage\": \"https://cardanesia.com\", \"description\": \"An Indonesian-based Cardano stake pool\"}",
   "bytes": "ewoibmFtZSI6ICJDYXJkYW5lc2lhIiwKImRlc2NyaXB0aW9uIjogIkFuIEluZG9uZXNpYW4tYmFzZWQgQ2FyZGFubyBzdGFrZSBwb29sIiwKInRpY2tlciI6ICJBREkiLAoiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9jYXJkYW5lc2lhLmNvbSIKfQo=",
   "pmr_id": 328,
   "hash_hex": "836f8d245139abf662ee93c6937984c895bdb88b8a069e52144a777a458acec6"
  },
  "...",
  {
   "id": 20,
   "pool_id": 194,
   "ticker_name": "CENT1",
   "hash": "0Ty3CJju7/ggZnXhZLP6uS5bCmwvjfwO2lvrs9VDYqQ=",
   "json": "{\"name\": \"Stake Pool Central\", \"ticker\": \"CENT1\", \"homepage\": \"https://cent.stakepoolcentral.com\", \"description\": \"Stable operations delivered by Stake Pool Central\"}",
   "bytes": "ewogICJuYW1lIjogIlN0YWtlIFBvb2wgQ2VudHJhbCIsCiAgImRlc2NyaXB0aW9uIjogIlN0YWJsZSBvcGVyYXRpb25zIGRlbGl2ZXJlZCBieSBTdGFrZSBQb29sIENlbnRyYWwiLAogICJ0aWNrZXIiOiAiQ0VOVDEiLAogICJob21lcGFnZSI6ICJodHRwczovL2NlbnQuc3Rha2Vwb29sY2VudHJhbC5jb20iCn0K",
   "pmr_id": 225,
   "hash_hex": "d13cb70898eeeff8206675e164b3fab92e5b0a6c2f8dfc0eda5bebb3d54362a4"
  }
 ],
 "@odata.nextLink": "https://cardanobi.io/api/core/odata/poolsofflinedata?$skip=20"
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the offline (ie not on chain) data for one pool given its unique identifier.

`GET /api/core/odata/poolsofflinedata/{pool_id}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_id|Pool unique identifier|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsofflinedata = await CBI.core.poolsofflinedata_({ "odata": true, pool_id: 4268 });
console.log(poolsofflinedata); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
poolsofflinedata = await CBI.core.poolsofflinedata_(odata=true,pool_id=4268);
print(poolsofflinedata); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let poolsofflinedata = CBI.core.poolsofflinedata_(Some(4268), HashMap::from([("odata", "true")])).await.expect("Failed to call endpoint");
println!("poolsofflinedata: {:?}", poolsofflinedata); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "@odata.context": "https://cardanobi.io/api/core/odata/$metadata#PoolsOfflineData",
 "value": [
  {
   "id": 8261,
   "pool_id": 4268,
   "ticker_name": "ADACT",
   "hash": "RGovyIsZoojy+22lEpImU8mUIACtoQyEbXHki86nToo=",
   "json": "{\"name\": \"ADA Capital\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital - Mainnet Pool\"}",
   "bytes": "ewoibmFtZSI6ICJBREEgQ2FwaXRhbCIsCiJkZXNjcmlwdGlvbiI6ICJBREEgQ2FwaXRhbCAtIE1haW5uZXQgUG9vbCIsCiJ0aWNrZXIiOiAiQURBQ1QiLAoiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvIgp9",
   "pmr_id": 21950,
   "hash_hex": "446a2fc88b19a288f2fb6da512922653c9942000ada10c846d71e48bcea74e8a"
  },
  "...",
  {
   "id": 2548912,
   "pool_id": 4268,
   "ticker_name": "ADACT",
   "hash": "6tUh2ifWxy3aXv3AppdnV6ZrcmLJeAeHzlxwwY6PSW8=",
   "json": "{\"name\": \"ADA Capital•🌍ADACT•👽CardanoBI•⚡Orcfax•ADA•METERA\", \"ticker\": \"ADACT\", \"homepage\": \"https://adacapital.io\", \"description\": \"ADA Capital • Mainnet Pool • You Stake, You Earn, We Build • Earn extra tokens: METERA, FACT • We have delivered CardanoBI and are building renewable energy solutions on Cardano🌞\"}",
   "bytes": "ewogICAgIm5hbWUiOiAiQURBIENhcGl0YWzigKLwn4yNQURBQ1TigKLwn5G9Q2FyZGFub0JJ4oCi4pqhT3JjZmF44oCiQURB4oCiTUVURVJBIiwKICAgICJkZXNjcmlwdGlvbiI6ICJBREEgQ2FwaXRhbCDigKIgTWFpbm5ldCBQb29sIOKAoiBZb3UgU3Rha2UsIFlvdSBFYXJuLCBXZSBCdWlsZCDigKIgRWFybiBleHRyYSB0b2tlbnM6IE1FVEVSQSwgRkFDVCDigKIgV2UgaGF2ZSBkZWxpdmVyZWQgQ2FyZGFub0JJIGFuZCBhcmUgYnVpbGRpbmcgcmVuZXdhYmxlIGVuZXJneSBzb2x1dGlvbnMgb24gQ2FyZGFub/CfjJ4iLAogICAgInRpY2tlciI6ICJBREFDVCIsCiAgICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9hZGFjYXBpdGFsLmlvIiwKICAgICJleHRlbmRlZCI6ICJodHRwczovL2FkYWNhcGl0YWwuaW8vYWRhY3RfZXh0ZW5kZWQuanNvbiIKfQ==",
   "pmr_id": 33370,
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string|The hexadecimal encoding of the offline data hash.|
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
