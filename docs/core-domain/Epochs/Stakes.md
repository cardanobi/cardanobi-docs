--- 
title: '' 
sidebar_label: 'Stakes' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> One pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch and one pool stake distributions<br/>
<EndpointBadge type="GET"/> Latest epoch and one pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch and one pool stake distributions <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool stake distributions

Returns the stake distribution for one pool across all epochs given its Bech32 pool hash.

`GET /api/core/epochs/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_hash|Bech32 pool hash|path|string|true|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order stakes are returned - "desc" descending (default) from newest epochs to oldest - "asc" ascending from oldest epochs to newest|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(stakes_pools); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
stakes_pools = await CBI.core.epochs.stakes.pools_(pool_hash='pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc');
print(stakes_pools); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let stakes_pools = CBI.core.epochs.stakes.pools_(Some("pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"), HashMap::new()).await.expect("Failed to call endpoint");
println!("stakes_pools: {:?}", stakes_pools); 
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
  "epoch_no": 496,
  "stake_address": "stake1uxpxha0razjvp76c6l03lfkjttdchum6rxtk5d3amjh2r8crnd9g2",
  "amount": 9289
 },
 "...",
 {
  "epoch_no": 496,
  "stake_address": "stake1u90lfcqznlnv8n0kvhx5layxysmsmlej0gald97tn5a9r4gnrme9v",
  "amount": 10297071517
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
| epoch_no|integer(int64)|The epoch number.|
| stake_address|string|The stake addres.|
| amount|number(double)|undefined|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch and one pool stake distributions

Returns the stake distribution for one epoch given its number, and for one pool given its Bech32 pool hash.

`GET /api/core/epochs/{epoch_no}/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| epoch_no|Epoch number|path|integer|true|
| pool_hash|Bech32 pool hash|path|string|true|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order stakes are returned - "desc" descending (default) from largest to smallest stake amount - "asc" ascending from smallest to largest stake amount|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.stakes.pools_({ epoch_no: 394, pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(stakes_pools); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
stakes_pools = await CBI.core.epochs.stakes.pools_(epoch_no=394,pool_hash='pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc');
print(stakes_pools); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let stakes_pools = CBI.core.epochs.stakes.pools_(Some(394), Some("pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"), HashMap::new()).await.expect("Failed to call endpoint");
println!("stakes_pools: {:?}", stakes_pools); 
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
  "epoch_no": 496,
  "stake_address": "stake1ux43uhew3eav2hl72l4hzaywqev50nyzc52gd80yk8443pqut2ygg",
  "amount": 256625
 },
 "...",
 {
  "epoch_no": 496,
  "stake_address": "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma",
  "amount": 134346239760
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
| stake_address|string|The stake addres.|
| amount|number(double)|undefined|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Latest epoch and one pool stake distributions

Returns the stake distribution for the latest epoch, and for one pool given its Bech32 pool hash.

`GET /api/core/epochs/latest/stakes/pools/{pool_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_hash|Bech32 pool hash|path|string|true|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order stakes are returned - "desc" descending (default) from largest to smallest stake amount - "asc" ascending from smallest to largest stake amount|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stakes_pools = await CBI.core.epochs.latest.stakes.pools_({ pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(stakes_pools); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
stakes_pools = await CBI.core.epochs.latest.stakes.pools_(pool_hash='pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc');
print(stakes_pools); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let stakes_pools = CBI.core.epochs.latest.stakes.pools_(Some("pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"), HashMap::new()).await.expect("Failed to call endpoint");
println!("stakes_pools: {:?}", stakes_pools); 
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
  "epoch_no": 496,
  "stake_address": "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma",
  "amount": 134346239760
 },
 "...",
 {
  "epoch_no": 496,
  "stake_address": "stake1u97wqyvnehwkqpjvq6f9ymjy3zgw7cvgxwc67vf45qy6wasnqh78f",
  "amount": 1783481687
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
| epoch_no|integer(int64)|The epoch number.|
| stake_address|string|The stake addres.|
| amount|number(double)|undefined|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch and one pool stake distributions <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the stake distribution for one epoch given its number, and for one pool given its Bech32 pool hash.

`GET /api/core/odata/epochsstakes`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| epoch_no|Epoch number|query|integer|false|
| pool_hash|Bech32 pool hash|query|string|false|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order stakes are returned - "desc" descending (default) from largest to smallest stake amount - "asc" ascending from smallest to largest stake amount|query|string|false|


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
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
epochsstakes = await CBI.core.epochsstakes_(odata=true);
print(epochsstakes); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let epochsstakes = CBI.core.epochsstakes_(HashMap::from([("odata", "true")])).await.expect("Failed to call endpoint");
println!("epochsstakes: {:?}", epochsstakes); 
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
  "stake_address": "stake1uxlr2ptaece0dj9ykn45smt85nsc9g7h3qsgrnas3v3vgrsggv858",
  "amount": 14549873676162
 },
 {
  "stake_address": "stake1uxkfem772dp72anxnn0utykmuflwd266vrkqzgru23updcqvqdcju",
  "amount": 506068922655
 },
 {
  "stake_address": "stake1u9jtc0fte2yaney9hg3cspr7j94w5m45s3t5ad4tt8ddmkcwqg8j0",
  "amount": 102531508204
 },
 {
  "stake_address": "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma",
  "amount": 100616200917
 },
 {
  "stake_address": "stake1uxcufeayrww34tqdudqxxkppy5dj50ple8v82x33ygf8rhqe7lewd",
  "amount": 50816228373
 },
 {
  "stake_address": "stake1ux5rkzfez2pu4lzesfh7heflyfsvetazz7k8q764jrxtp5ghma5qy",
  "amount": 21542485283
 },
 {
  "stake_address": "stake1ux09xgzzp3u6lvkgq8f70sqxm346vn8ccc8muvam9aux8wcw9cx9t",
  "amount": 19724172141
 },
 {
  "stake_address": "stake1u9ls86e0chn4hxpr7z9xnjuw6f3kuw4yn8jjs9tt5fs6qcc7qv364",
  "amount": 12990007394
 },
 {
  "stake_address": "stake1u90lfcqznlnv8n0kvhx5layxysmsmlej0gald97tn5a9r4gnrme9v",
  "amount": 10010182670
 },
 {
  "stake_address": "stake1u9s2v5xf8smrxssu3y57cdcxfey6yq7v25lcg9l78rnptvsfqzfn6",
  "amount": 9118417521
 },
 {
  "stake_address": "stake1u8gm42yj890xnm2cktmmc3l49ksz232pzxe8g0gp9en3cqqc0gnn3",
  "amount": 6834139983
 },
 {
  "stake_address": "stake1uxznzaxr3s9xkqae6vukvldh7xh6gzndkmcxmmm84tnj0vgysjxst",
  "amount": 6812847360
 },
 {
  "stake_address": "stake1u9z85wldw5cjf9mhuecrtj7uq7hux0m36ts3zjfy3ev5m3cm37qlv",
  "amount": 4102604102
 },
 {
  "stake_address": "stake1u9ylnhs8x5fztt6ndjpj9tx6gzh2thc2kwef2lwru5zaguqne4uf4",
  "amount": 3914856520
 },
 {
  "stake_address": "stake1u8493rnaz8y9le602637c3gstfn4s3pl8sgsqetdj2jkueqq79a93",
  "amount": 3256732462
 },
 {
  "stake_address": "stake1u9p9l5qumptvcnhs0md5xnwpjctpnapt7kl3mzgfj5g4l9su4h3ry",
  "amount": 2602930693
 },
 {
  "stake_address": "stake1uyypyzsyvwh300ca2vtf64gwmf3nafc9w64tcw0za25mk0qmls084",
  "amount": 2001299857
 },
 {
  "stake_address": "stake1ux6g4dfq2ds03gwa55q2q8p7ufhkvnr7a86xqre2zd7am8gdpagqt",
  "amount": 1679580936
 },
 {
  "stake_address": "stake1uytejsgucjr6nn27d4s0jg770wtl3cngj36s7a52e54ncfgnrydsz",
  "amount": 1263431238
 },
 {
  "stake_address": "stake1uxmnpzlcmdvf5ymjwdelgeqa7ak6sxy36csmrhz4ezpvpegj0n3sk",
  "amount": 1040644001
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
| stake_address|string|The stake addres.|
| amount|number(double)|undefined|
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
