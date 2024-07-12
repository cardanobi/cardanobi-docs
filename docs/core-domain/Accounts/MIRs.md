--- 
title: '' 
sidebar_label: 'MIRs' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Move Instantaneous Rewards (MIR) history<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Move Instantaneous Rewards (MIR) history

Returns the MIR history of one account given its stake address.

`GET /api/core/accounts/{stake_address}/mirs`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| stake_address|Bech32 Stake address|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const mirs = await CBI.core.accounts.mirs_({ stake_address: "stake1uypy44wqjznc5w9ns9gsguz4ta83jekrg9d0wupa7j3zsacwvq5ex" });
console.log(mirs); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
mirs = await CBI.core.accounts.mirs_(stake_address='stake1uypy44wqjznc5w9ns9gsguz4ta83jekrg9d0wupa7j3zsacwvq5ex');
print(mirs); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let mirs_mirs = CBI.core.accounts.mirs_(Some("stake1uypy44wqjznc5w9ns9gsguz4ta83jekrg9d0wupa7j3zsacwvq5ex"), HashMap::new()).await.expect("Failed to call endpoint");
println!("mirs_mirs: {:?}", mirs_mirs); 
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
  "epoch_no": 241,
  "block_no": 5196857,
  "tx_hash_hex": "fabfad0aaa2b52b8304f45edc0350659ad0d73f9d1065d9cd3ef7d5a599ac57d",
  "amount": 2000000000000,
  "mir_type": "treasury"
 },
 "...",
 {
  "epoch_no": 409,
  "block_no": 8722618,
  "tx_hash_hex": "4b4ca196d524ae3877f772d5f0871e76aeedbf0330d2549178a834158593b299",
  "amount": 8931404863383,
  "mir_type": "treasury"
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
| epoch_no|integer(int64)|The epoch number in which the given MIR occured.|
| block_no|integer(int64)|The block number for this MIR.|
| tx_hash_hex|string|The hexadecimal encoding of the hash identifier of the MIR transaction.|
| amount|integer(int64)|The MIR amount (in Lovelace).|
| mir_type|string|The source of the MIR payment (treasury or reserve).|
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
