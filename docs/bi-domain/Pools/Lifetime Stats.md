--- 
title: '' 
sidebar_label: 'Lifetime Stats' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> One pool lifetime statistics<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool lifetime statistics

Pool lifetime activity statistics for a given pool.

`GET /api/bi/pools/{pool_hash}/stats/lifetime`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| pool_hash|The Bech32 encoding of a given pool hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const lifetime stats_lifetime = await CBI.bi.pools.stats.lifetime_({ pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
console.log(lifetime stats_lifetime); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
lifetime stats_lifetime = await CBI.bi.pools.stats.lifetime_(pool_hash='pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc');
print(lifetime stats_lifetime); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let lifetime stats_lifetime = CBI.bi.pools.stats.lifetime_(Some("pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"), HashMap::new()).await.expect("Failed to call endpoint");
println!("lifetime stats_lifetime: {:?}", lifetime stats_lifetime); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "pool_hash": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
 "tx_count_lifetime": 12211,
 "block_count_lifetime": 786,
 "delegator_count_lifetime": 7635,
 "delegated_stakes_lifetime": 865624664452630,
 "delegator_count_lifetime_avg": 37.06310679611651,
 "delegated_stakes_lifetime_avg": 4202061477925.388
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
| pool_hash|string|The Bech32 encoding of the pool hash.|
| tx_count_lifetime|integer(int64)|The lifetime transaction count.|
| block_count_lifetime|integer(int64)|The lifetime block count.|
| delegator_count_lifetime|integer(int64)|The lifetime delegator count.|
| delegated_stakes_lifetime|number(double)|The lifetime delegated stake for the given pool (lifetime active stake).|
| delegator_count_lifetime_avg|number(double)|The lifetime average delegator count.|
| delegated_stakes_lifetime_avg|number(double)|The lifetime average delegated stake for the given pool (lifetime average active stake).|
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
