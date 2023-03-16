--- 
title: '' 
sidebar_label: 'Certificates' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Stake address certificate transactions<br/>
<EndpointBadge type="GET"/> Stake address delegation transactions<br/>
<EndpointBadge type="GET"/> Pool retirement transactions<br/>
<EndpointBadge type="GET"/> On-chain pool update transactions<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Stake address certificate transactions

Returns details of a transaction used to register a stake address given its hash.

`GET /api/core/transactions/{transaction_hash}/stake_address_registrations`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stake_address_registrations = await CBI.core.transactions.stake_address_registrations_({ transaction_hash: "13919fc14338f13fa10497293f709f9c12c6275c5b38baa0c60786ffdd51bebb" });
console.log(stake_address_registrations); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import coming.soon 😀 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "cert_index": 0,
 "epoch_no": 398,
 "stake_address": "stake1u9c8tgy0e24ykfq98rh7vqg684z3py4vqv7e7grfw9cwdxc02r0s2",
 "script_hash_hex": "",
 "is_registration": false
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
| cert_index|integer(int32)|The index of this stake registration within the certificates of this transaction.|
| epoch_no|integer(int32)|The epoch in which the registration took place.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address.|
| script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| is_registration|boolean(undefined)|True if the transaction is a registration, False if it is a deregistration.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Stake address delegation transactions

Returns details of a transaction used to delegate a given stake address to a pool.

`GET /api/core/transactions/{transaction_hash}/stake_address_delegations`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const stake_address_delegations = await CBI.core.transactions.stake_address_delegations_({ transaction_hash: "e963b50c5a1078f0fbe11c375d047af3a1b2112538ed6cf852809ebbf4dd8440" });
console.log(stake_address_delegations); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import coming.soon 😀 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "cert_index": 1,
 "active_epoch_no": 400,
 "stake_address": "stake1u9jhsgneyethxckdqngmls6lx2tfuhzfkfzhc653cmvtvvqclazkl",
 "pool_hash_bech32": "pool1a23gmvalpdams9d42t7fur8vmknzjv7wd3nsvuvrc7dv66lnau0",
 "pool_hash_hex": "eaa28db3bf0b7bb815b552fc9e0cecdda62933ce6c67067183c79acd"
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
| cert_index|integer(int32)|The index of this delegation within the certificates of this transaction.|
| active_epoch_no|integer(int64)|The epoch number where this delegation becomes active.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address.|
| pool_hash_bech32|string(undefined)|The Bech32 encoding of the pool hash.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Pool retirement transactions

Returns details of a transaction used to retire a stake pool.

`GET /api/core/transactions/{transaction_hash}/retiring_pools`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const retiring_pools = await CBI.core.transactions.retiring_pools_({ transaction_hash: "0d8eadd3bd58bd1a34641ea4100de509f081fe5dd7ecd33d7da52cbeb8e93494" });
console.log(retiring_pools); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import coming.soon 😀 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "cert_index": 0,
 "pool_hash_bech32": "pool1sduhuyqh3kecve728ghxyzqxegfgy7t98669yq5vx99m5k5lcr0",
 "pool_hash_hex": "83797e10178db38667ca3a2e620806ca128279653eb452028c314bba",
 "retiring_epoch": 399
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
| cert_index|integer(int32)|The index of this pool retirement within the certificates of this transaction.|
| pool_hash_bech32|string(undefined)|The Bech32 encoding of the pool hash.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| retiring_epoch|integer(int32)|The epoch where this pool retires.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> On-chain pool update transactions

Returns details of a transaction used to update a stake pool.

`GET /api/core/transactions/{transaction_hash}/updating_pools`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const updating_pools = await CBI.core.transactions.updating_pools_({ transaction_hash: "37b67370c0e71b6e15d6d5f564a5069461e472a26e6f46a813743458285aef8d" });
console.log(updating_pools); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import coming.soon 😀 
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
  "cert_index": 0,
  "pool_hash_bech32": "pool18gys2arurr8su3qssvh7vjcn42k5clgrvdxah8mxcg5xquvfu8p",
  "pool_hash_hex": "3a0905747c18cf0e4410832fe64b13aaad4c7d03634ddb9f66c22860",
  "vrf_key_hash_hex": "3fb99e238977460b474d91a9ca35f35c912fee4adc9dad4c7f05327deba4449f",
  "reward_addr_hash_hex": "e1b8b85b5988ed10223b9f179db5650bb91fa73ace98852cfc4fbeb604",
  "pledge": 50000000000,
  "margin": 0.01,
  "fixed_cost": 340000000,
  "active_epoch_no": 228,
  "owners_addresses": [
   "stake1u9p7ldvwtm608p9jg6xarv76pu232zxu2fw68k7g7mvfr0qru67nh",
   "stake1u9x5lv9f7g43nuxw9s5cp392n054tuwejyvq4yd0haw7ads9ypx46"
  ],
  "relays": [
   {
    "ipv4": null,
    "ipv6": null,
    "dns_name": "relay1.broekhuijse.net",
    "dns_srv_name": null,
    "port": 3011
   }
  ],
  "offline_data": null
 },
 "...",
 {
  "cert_index": 3,
  "pool_hash_bech32": "pool18gys2arurr8su3qssvh7vjcn42k5clgrvdxah8mxcg5xquvfu8p",
  "pool_hash_hex": "3a0905747c18cf0e4410832fe64b13aaad4c7d03634ddb9f66c22860",
  "vrf_key_hash_hex": "3fb99e238977460b474d91a9ca35f35c912fee4adc9dad4c7f05327deba4449f",
  "reward_addr_hash_hex": "e1b8b85b5988ed10223b9f179db5650bb91fa73ace98852cfc4fbeb604",
  "pledge": 50000000000,
  "margin": 0.01,
  "fixed_cost": 340000000,
  "active_epoch_no": 228,
  "owners_addresses": [
   "stake1u9p7ldvwtm608p9jg6xarv76pu232zxu2fw68k7g7mvfr0qru67nh",
   "stake1u9x5lv9f7g43nuxw9s5cp392n054tuwejyvq4yd0haw7ads9ypx46"
  ],
  "relays": [
   {
    "ipv4": null,
    "ipv6": null,
    "dns_name": "relay4.broekhuijse.net",
    "dns_srv_name": null,
    "port": 3021
   }
  ],
  "offline_data": null
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
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| pool_hash_bech32|string(undefined)|The Bech32 encoding of the pool hash.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
| reward_addr_hash_hex|string(undefined)|The hexadecimal encoding of the pool reward address hash.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| owners_addresses|array(undefined)|The list of pool owners stake addresses.|
| relays|array(undefined)|The pool relays updates.|
| offline_data|undefined(undefined)|undefined|
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
