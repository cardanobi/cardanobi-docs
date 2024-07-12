--- 
title: '' 
sidebar_label: 'Accounts' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> One account by stake address<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> One account by stake address

Returns on-chain information about an account given its stake address.

`GET /api/core/accounts/{stake_address}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| stake_address|Bech32 Stake address|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const accounts = await CBI.core.accounts_({ stake_address: "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma" });
console.log(accounts); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
accounts = await CBI.core.accounts_(stake_address='stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma');
print(accounts); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let accounts = CBI.core.accounts_(Some("stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma"), HashMap::new()).await.expect("Failed to call endpoint");
println!("accounts: {:?}", accounts); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "stake_address": "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma",
 "is_registered": true,
 "last_reg_dereg_tx": "5234f99b194603b2b0b63fff5d60ac9df916190360497d4f189e4ff4dd9130ff",
 "last_reg_dereg_epoch_no": 289,
 "pool_id": "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc",
 "last_deleg_tx": "004ac881d9fd1a6748a72547e82e89beb074e96c3a76670c5a11b494d9260f31",
 "delegated_since_epoch_no": 472,
 "total_balance": 134346239760,
 "controlled_stakes": 92101860445,
 "total_rewards": 42244379315,
 "total_withdrawals": 0,
 "available_rewards": 42244379315
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
| stake_address|string|The Bech32 encoded version of the account's stake address|
| is_registered|boolean|Boolean flag indicating if the account is registered (true) or deregistered (false) on-chain.|
| last_reg_dereg_tx|string|The hexadecimal encoding of the hash identifier of the last registration/deregistration transaction for this account.|
| last_reg_dereg_epoch_no|number(double)|Epoch number when the account was last registered/deregistered.|
| pool_id|string|The Bech32 encoding of the pool hash this account is delegated to.|
| last_deleg_tx|string|The hexadecimal encoding of the hash identifier of the last delegation transaction for this account.|
| delegated_since_epoch_no|number(double)|Epoch number when the current delegation became active for this account.|
| total_balance|number(double)|The total ADA balance of this account, e.g. controlled stakes + available rewards.|
| controlled_stakes|number(double)|The total ADA stakes controlled by this account.|
| total_rewards|number(double)|The total historical ADA rewards earned by this account.|
| total_withdrawals|number(double)|The total historical ADA rewards withdrew from this account.|
| available_rewards|number(double)|The available ADA rewards for this account.|
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
