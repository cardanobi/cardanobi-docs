--- 
title: '' 
sidebar_label: 'Assets' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Account assets holdings<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Account assets holdings

Returns all assets held by one account given its stake address.

`GET /api/core/accounts/{stake_address}/assets`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| stake_address|Bech32 Stake address|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const assets = await CBI.core.accounts.assets_({ stake_address: "stake1uyq4f9rye96ywptukdypkdu69gc4sd34hwzd940pxslczhc7n5vyt" });
console.log(assets); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
assets = await CBI.core.accounts.assets_(stake_address='stake1uyq4f9rye96ywptukdypkdu69gc4sd34hwzd940pxslczhc7n5vyt');
print(assets); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let assets_assets = CBI.core.accounts.assets_(Some("stake1uyq4f9rye96ywptukdypkdu69gc4sd34hwzd940pxslczhc7n5vyt"), HashMap::new()).await.expect("Failed to call endpoint");
println!("assets_assets: {:?}", assets_assets); 
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
  "policy_hex": "682fe60c9918842b3323c43b5144bc3d52a23bd2fb81345560d73f63",
  "fingerprint": "asset105nh988tzzzk3duk6relug69td98ja3nl3uv2c",
  "name": "NEWM",
  "quantity": 100000000
 },
 "...",
 {
  "policy_hex": "7cb6fbb296945e2c7c8b4bda24b90636bc15becf9c4d6c6eabb6447c",
  "fingerprint": "asset1w86zwjq9pdul3l27dr5lgkvs4euuy2fam72uq6",
  "name": "Cardabbean01136",
  "quantity": 1
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
| policy_hex|string|The hexadecimal encoding of the MultiAsset policy hash.|
| fingerprint|string|The CIP14 fingerprint for the MultiAsset.|
| name|string|The MultiAsset name.|
| quantity|integer(int64)|The balance of the given MultiAsset held by the account.|
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
