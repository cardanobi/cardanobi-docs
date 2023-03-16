--- 
title: '' 
sidebar_label: 'Transactions' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> Latest block transactions<br/>
<EndpointBadge type="GET"/> Transactions for a given block by block number<br/>
<EndpointBadge type="GET"/> Transactions for a given block by block hash<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Latest block transactions

Returns the transactions within the latest block i.e. the tip of the blockchain.

`GET /api/core/blocks/latest/transactions`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const transactions_transactions = await CBI.core.blocks.latest.transactions_();
console.log(transactions_transactions); 
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
  "id": 63105357,
  "hash": "zkq2HQhJJ9NNcbLinj1pGqv5IWqGYKeSLscNOV1EGag=",
  "block_id": 8528093,
  "block_index": 0,
  "out_sum": 159314513,
  "fee": 265758,
  "deposit": 0,
  "size": 936,
  "invalid_before": null,
  "invalid_hereafter": 87419498,
  "valid_contract": true,
  "script_size": 0,
  "hash_hex": "ce4ab61d084927d34d71b2e29e3d691aabf9216a8660a7922ec70d395d4419a8"
 },
 "...",
 {
  "id": 63105376,
  "hash": "QWPjcH8AqphAPDfTYtg4Lordy8u0fW+CMwpAp68NuAY=",
  "block_id": 8528093,
  "block_index": 19,
  "out_sum": 8163720,
  "fee": 189701,
  "deposit": 0,
  "size": 775,
  "invalid_before": null,
  "invalid_hereafter": 87433320,
  "valid_contract": true,
  "script_size": 0,
  "hash_hex": "4163e3707f00aa98403c37d362d8382e8addcbcbb47d6f82330a40a7af0db806"
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
| id|integer(int64)|The transaction unique identifier.|
| hash|string(byte)|The hash identifier of the transaction.|
| block_id|integer(int64)|The Block table index of the block that contains this transaction.|
| block_index|integer(int32)|The index of this transaction with the block (zero based).|
| out_sum|number(double)|The sum of the transaction outputs (in Lovelace).|
| fee|number(double)|The fees paid for this transaction.|
| deposit|integer(int64)|Deposit (or deposit refund) in this transaction. Deposits are positive, refunds negative.|
| size|integer(int32)|The size of the transaction in bytes.|
| invalid_before|number(double)|Transaction in invalid before this slot number.|
| invalid_hereafter|number(double)|Transaction in invalid at or after this slot number.|
| valid_contract|boolean(undefined)|False if the contract is invalid. True if the contract is valid or there is no contract.|
| script_size|integer(int32)|The sum of the script sizes (in bytes) of scripts in the transaction.|
| hash_hex|string(undefined)|The hexadecimal encoding of the hash identifier of the transaction.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Transactions for a given block by block number

Returns the transactions within one specific block given its number.

`GET /api/core/blocks/{block_no}/transactions`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_no|Block number|path|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const transactions = await CBI.core.blocks.transactions_({ block_no: 8415364 });
console.log(transactions); 
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
  "id": 61552864,
  "hash": "vbiA3P2tGL5KMOKrD7SLPtHv+Jp+OYifjmh5/8cxPwI=",
  "block_id": 8416431,
  "block_index": 0,
  "out_sum": 11747435254,
  "fee": 183987,
  "deposit": 0,
  "size": 269,
  "invalid_before": null,
  "invalid_hereafter": 85169296,
  "valid_contract": true,
  "script_size": 0,
  "hash_hex": "bdb880dcfdad18be4a30e2ab0fb48b3ed1eff89a7e39889f8e6879ffc7313f02"
 },
 "...",
 {
  "id": 61552883,
  "hash": "9a9HKyCMLzYmvNnrq1EDzFsW8Xmem2VMsDpNBUCQc3E=",
  "block_id": 8416431,
  "block_index": 19,
  "out_sum": 41068697259,
  "fee": 207345,
  "deposit": 0,
  "size": 1035,
  "invalid_before": null,
  "invalid_hereafter": 85172931,
  "valid_contract": true,
  "script_size": 0,
  "hash_hex": "f5af472b208c2f3626bcd9ebab5103cc5b16f1799e9b654cb03a4d0540907371"
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
| id|integer(int64)|The transaction unique identifier.|
| hash|string(byte)|The hash identifier of the transaction.|
| block_id|integer(int64)|The Block table index of the block that contains this transaction.|
| block_index|integer(int32)|The index of this transaction with the block (zero based).|
| out_sum|number(double)|The sum of the transaction outputs (in Lovelace).|
| fee|number(double)|The fees paid for this transaction.|
| deposit|integer(int64)|Deposit (or deposit refund) in this transaction. Deposits are positive, refunds negative.|
| size|integer(int32)|The size of the transaction in bytes.|
| invalid_before|number(double)|Transaction in invalid before this slot number.|
| invalid_hereafter|number(double)|Transaction in invalid at or after this slot number.|
| valid_contract|boolean(undefined)|False if the contract is invalid. True if the contract is valid or there is no contract.|
| script_size|integer(int32)|The sum of the script sizes (in bytes) of scripts in the transaction.|
| hash_hex|string(undefined)|The hexadecimal encoding of the hash identifier of the transaction.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Transactions for a given block by block hash

Returns the transactions within one specific block given its hash.

`GET /api/core/blocks/{block_hash}/transactions`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| block_hash|Block hash|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const transactions = await CBI.core.blocks.transactions_({ block_hash: "89ff1090614105a919c9ccc8bb3914aaef1ddd28214a4d55ff65436d2c9fc0b2" });
console.log(transactions); 
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
  "id": 61552864,
  "hash": "vbiA3P2tGL5KMOKrD7SLPtHv+Jp+OYifjmh5/8cxPwI=",
  "block_id": 8416431,
  "block_index": 0,
  "out_sum": 11747435254,
  "fee": 183987,
  "deposit": 0,
  "size": 269,
  "invalid_before": null,
  "invalid_hereafter": 85169296,
  "valid_contract": true,
  "script_size": 0,
  "hash_hex": "bdb880dcfdad18be4a30e2ab0fb48b3ed1eff89a7e39889f8e6879ffc7313f02"
 },
 "...",
 {
  "id": 61552883,
  "hash": "9a9HKyCMLzYmvNnrq1EDzFsW8Xmem2VMsDpNBUCQc3E=",
  "block_id": 8416431,
  "block_index": 19,
  "out_sum": 41068697259,
  "fee": 207345,
  "deposit": 0,
  "size": 1035,
  "invalid_before": null,
  "invalid_hereafter": 85172931,
  "valid_contract": true,
  "script_size": 0,
  "hash_hex": "f5af472b208c2f3626bcd9ebab5103cc5b16f1799e9b654cb03a4d0540907371"
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
| id|integer(int64)|The transaction unique identifier.|
| hash|string(byte)|The hash identifier of the transaction.|
| block_id|integer(int64)|The Block table index of the block that contains this transaction.|
| block_index|integer(int32)|The index of this transaction with the block (zero based).|
| out_sum|number(double)|The sum of the transaction outputs (in Lovelace).|
| fee|number(double)|The fees paid for this transaction.|
| deposit|integer(int64)|Deposit (or deposit refund) in this transaction. Deposits are positive, refunds negative.|
| size|integer(int32)|The size of the transaction in bytes.|
| invalid_before|number(double)|Transaction in invalid before this slot number.|
| invalid_hereafter|number(double)|Transaction in invalid at or after this slot number.|
| valid_contract|boolean(undefined)|False if the contract is invalid. True if the contract is valid or there is no contract.|
| script_size|integer(int32)|The sum of the script sizes (in bytes) of scripts in the transaction.|
| hash_hex|string(undefined)|The hexadecimal encoding of the hash identifier of the transaction.|
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
