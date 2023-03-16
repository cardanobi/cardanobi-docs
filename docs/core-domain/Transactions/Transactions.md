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

<EndpointBadge type="GET"/> Details of a given transaction<br/>
<EndpointBadge type="GET"/> Inputs and Unspent Outputs of a given transaction<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> Details of a given transaction

Returns details of a transaction given its hash.

`GET /api/core/transactions/{transaction_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const transactions = await CBI.core.transactions_({ transaction_hash: "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0" });
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
{
 "tx_hash_hex": "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0",
 "id": 62806763,
 "block_no": 8504316,
 "slot_no": 86986601,
 "block_time": "2023-03-11T16:41:32",
 "block_index": 4,
 "out_sum": 769511275,
 "fee": 488725,
 "deposit": 0,
 "size": 7252,
 "invalid_before": null,
 "invalid_hereafter": 86992584,
 "valid_contract": true,
 "script_size": 0,
 "output_amounts": [
  {
   "value": 769511275,
   "unit": "lovelace",
   "asset_fingerprint": null
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby164",
   "asset_fingerprint": "asset1zrvganzsyd0fvw7ts7ja9l63c87he04u7g3aq6"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby180",
   "asset_fingerprint": "asset1gtldmxkks4af38dyz2qwshgltxvjqw5axyqfd5"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby246",
   "asset_fingerprint": "asset1h92eu48jjnh4vzpjq7zutmzngx863yke65h6m3"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby315",
   "asset_fingerprint": "asset1v2s8pfs9dvh4cyrxzll2q5xcrmhpvj9ll6df99"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby467",
   "asset_fingerprint": "asset16dgewuvjdg4m4rhhsz6k8ym3s8ac7gz0j3tgk9"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby642",
   "asset_fingerprint": "asset1yh4h07gdc2uplk6p40k89he553w00v79j6vlnf"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby783",
   "asset_fingerprint": "asset1znwa2p75ryy6xmslu604yqwhe39c2yrzwflz8d"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby835",
   "asset_fingerprint": "asset13kkqusmscnwycv5uxktkhy9t0vpah0mzz09szf"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby867",
   "asset_fingerprint": "asset19xydzwjvn6725t3a9fn586f3pj932k0kvs93kf"
  },
  {
   "value": 1,
   "unit": "TheGreatGatsby981",
   "asset_fingerprint": "asset1fd863wp7nd0jv2lz0ljesxh2gpn8cycdkztye9"
  }
 ],
 "inputCount": 1,
 "outputCount": 2,
 "withdrawalCount": 0,
 "assetMintCount": 10,
 "metadataCount": 1,
 "stakeRegistrationCount": 0,
 "stakeDeregistrationCount": 0,
 "delegationCount": 0,
 "treasuryCount": 0,
 "reserveCount": 0,
 "potTransferCount": 0,
 "paramProposalCount": 0,
 "poolRetireCount": 0,
 "poolUpdateCount": 0,
 "redeemerCount": 0
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
| tx_hash_hex|string(undefined)|The hexadecimal encoding of the hash identifier of the transaction.|
| id|integer(int64)|The transaction unique identifier.|
| block_no|integer(int32)|The block number.|
| slot_no|integer(int64)|The slot number.|
| block_time|string(date-time)|The block time (UTCTime).|
| block_index|integer(int32)|The index of this transaction with the block (zero based).|
| out_sum|number(double)|The sum of the transaction outputs (in Lovelace).|
| fee|number(double)|The fees paid for this transaction.|
| deposit|integer(int64)|Deposit (or deposit refund) in this transaction. Deposits are positive, refunds negative.|
| size|integer(int32)|The size of the transaction in bytes.|
| invalid_before|number(double)|Transaction in invalid before this slot number.|
| invalid_hereafter|number(double)|Transaction in invalid at or after this slot number.|
| valid_contract|boolean(undefined)|False if the contract is invalid. True if the contract is valid or there is no contract.|
| script_size|integer(int32)|The sum of the script sizes (in bytes) of scripts in the transaction.|
| output_amounts|array(undefined)|The list of transaction output amounts.|
| inputCount|integer(int32)|The count of inputs in this transaction.|
| outputCount|integer(int32)|The count of outputs in this transaction.|
| withdrawalCount|integer(int32)|The count of withdrawals from a reward account in this transaction.|
| assetMintCount|integer(int32)|The count of Multi-Asset mint events in this transaction.|
| metadataCount|integer(int32)|The count of metadata attached to this transaction.|
| stakeRegistrationCount|integer(int32)|The count of stake address registration in this transaction.|
| stakeDeregistrationCount|integer(int32)|The count of stake address deregistration in this transaction.|
| delegationCount|integer(int32)|The count of delegation from a stake address to a stake pool in this transaction.|
| treasuryCount|integer(int32)|The count of payments from the treasury to a stake address in this transaction.|
| reserveCount|integer(int32)|The count of payments from the reserves to a stake address in this transaction.|
| potTransferCount|integer(int32)|The count of transfers between the reserves pot and the treasury pot in this transaction.|
| paramProposalCount|integer(int32)|The count of Cardano parameter change proposals in this transaction.|
| poolRetireCount|integer(int32)|The count of pool retirement notifications in this transaction.|
| poolUpdateCount|integer(int32)|The count of on-chain pool updates in this transaction.|
| redeemerCount|integer(int32)|The count of redeemers in this transaction.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> Inputs and Unspent Outputs of a given transaction

Returns all Inputs and Unspent Outputs (UTXOs) of a transaction given its hash.

`GET /api/core/transactions/{transaction_hash}/utxos`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| transaction_hash|The transaction hash.|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const utxos = await CBI.core.transactions.utxos_({ transaction_hash: "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0" });
console.log(utxos); 
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
 "tx_hash_hex": "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0",
 "id": 62806763,
 "slot_no": 86986601,
 "block_no": 8504316,
 "block_time": "2023-03-11T16:41:32",
 "block_index": 4,
 "out_sum": 769511275,
 "fee": 488725,
 "deposit": 0,
 "size": 7252,
 "invalid_before": null,
 "invalid_hereafter": 86992584,
 "valid_contract": true,
 "script_size": 0,
 "outputs": [
  {
   "output_index": 0,
   "address": "addr1q8dlz204pcjcm7l86fqs76h2huyjn2qmvsjf54xljw5dk6097gkdczyymlmrrznfwdca7tgmasl4635f3qd2uy9566nqy98g0q",
   "tx_hash_hex": "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0",
   "is_collateral": false,
   "data_hash": null,
   "inline_datum_cbor": null,
   "reference_script_hash": null,
   "amounts": [
    {
     "value": 119975000,
     "unit": "lovelace",
     "asset_fingerprint": null
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby164",
     "asset_fingerprint": "asset1zrvganzsyd0fvw7ts7ja9l63c87he04u7g3aq6"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby180",
     "asset_fingerprint": "asset1gtldmxkks4af38dyz2qwshgltxvjqw5axyqfd5"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby246",
     "asset_fingerprint": "asset1h92eu48jjnh4vzpjq7zutmzngx863yke65h6m3"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby315",
     "asset_fingerprint": "asset1v2s8pfs9dvh4cyrxzll2q5xcrmhpvj9ll6df99"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby467",
     "asset_fingerprint": "asset16dgewuvjdg4m4rhhsz6k8ym3s8ac7gz0j3tgk9"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby642",
     "asset_fingerprint": "asset1yh4h07gdc2uplk6p40k89he553w00v79j6vlnf"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby783",
     "asset_fingerprint": "asset1znwa2p75ryy6xmslu604yqwhe39c2yrzwflz8d"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby835",
     "asset_fingerprint": "asset13kkqusmscnwycv5uxktkhy9t0vpah0mzz09szf"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby867",
     "asset_fingerprint": "asset19xydzwjvn6725t3a9fn586f3pj932k0kvs93kf"
    },
    {
     "value": 1,
     "unit": "TheGreatGatsby981",
     "asset_fingerprint": "asset1fd863wp7nd0jv2lz0ljesxh2gpn8cycdkztye9"
    }
   ]
  },
  {
   "output_index": 1,
   "address": "addr1qytcgpelg4m8n0hrgkx8nhr6servtt4qhmntxufdga32lzhuynvp2sdsx64g8dy3fd4pd7hs9lyn0j5vhwuzthz8xkessrfdse",
   "tx_hash_hex": "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0",
   "is_collateral": false,
   "data_hash": null,
   "inline_datum_cbor": null,
   "reference_script_hash": null,
   "amounts": [
    {
     "value": 649536275,
     "unit": "lovelace",
     "asset_fingerprint": null
    }
   ]
  }
 ],
 "inputs": [
  {
   "output_index": 0,
   "address": "addr1v9gkdlvddgjte0ccw6ngsj50ggfvh7760tkmhf5k6mvxvasjfancu",
   "tx_hash_hex": "6d8d789fa95cd3834e90b6a9c2f0d3c24b907797be7f3bcb32e7d3d5b43b33dd",
   "is_collateral": false,
   "is_reference": false,
   "data_hash": null,
   "inline_datum_cbor": null,
   "reference_script_hash": null,
   "amounts": [
    {
     "value": 770000000,
     "unit": "lovelace",
     "asset_fingerprint": null
    }
   ]
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
| tx_hash_hex|string(undefined)|The hexadecimal encoding of the hash identifier of the transaction.|
| id|integer(int64)|The transaction unique identifier.|
| slot_no|integer(int64)|The slot number.|
| block_no|integer(int32)|The block number.|
| block_time|string(date-time)|The block time (UTCTime).|
| block_index|integer(int32)|The index of this transaction with the block (zero based).|
| out_sum|number(double)|The sum of the transaction outputs (in Lovelace).|
| fee|number(double)|The fees paid for this transaction.|
| deposit|integer(int64)|Deposit (or deposit refund) in this transaction. Deposits are positive, refunds negative.|
| size|integer(int32)|The size of the transaction in bytes.|
| invalid_before|number(double)|Transaction in invalid before this slot number.|
| invalid_hereafter|number(double)|Transaction in invalid at or after this slot number.|
| valid_contract|boolean(undefined)|False if the contract is invalid. True if the contract is valid or there is no contract.|
| script_size|integer(int32)|The sum of the script sizes (in bytes) of scripts in the transaction.|
| outputs|array(undefined)|The list of transaction outputs.|
| inputs|array(undefined)|The list of transaction inputs.|
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
