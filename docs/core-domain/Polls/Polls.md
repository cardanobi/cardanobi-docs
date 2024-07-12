--- 
title: '' 
sidebar_label: 'Polls' 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All polls<br/>
<EndpointBadge type="GET"/> One poll full details by hash<br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All polls

Returns the list of all polls defined on chain.

`GET /api/core/polls`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| page_no|Page number to retrieve - defaults to 1|query|integer|false|
| page_size|Number of results per page - defaults to 20 - max 100|query|integer|false|
| order|Prescribes in which order results are returned - "desc" descending (default) from newest to oldest - "asc" ascending from oldest to newest|query|string|false|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const polls = await CBI.core.polls_();
console.log(polls); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
polls = await CBI.core.polls_();
print(polls); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let polls = CBI.core.polls_(HashMap::new()).await.expect("Failed to call endpoint");
println!("polls: {:?}", polls); 
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
  "poll_hash": "96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211",
  "tx_hash_hex": "fae7bda85acb99c513aeab5f86986047b6f6cbd33a8e11f11c5005513a054dc8",
  "start_epoch_no": 412,
  "end_epoch_no": 416,
  "json": "{\"0\": [\"Which setup would you prefer to be put in place from Q3 2023 onw\", \"ards?\"], \"1\": [[\"Keep k at 500 and minPoolCost at 340 ada\"], [\"Keep k at 500 and halve minPoolCost to 170 ada\"], [\"Increase k to 1000 and keep minPoolCost at 340 ada\"], [\"Increase k to 1000 and halve minPoolCost to 170 ada\"], [\"I would prefer to abstain\"], [\"None of the provided options\"]]}"
 },
 "...",
 {
  "poll_hash": "96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211",
  "tx_hash_hex": "fae7bda85acb99c513aeab5f86986047b6f6cbd33a8e11f11c5005513a054dc8",
  "start_epoch_no": 412,
  "end_epoch_no": 416,
  "json": "{\"0\": [\"Which setup would you prefer to be put in place from Q3 2023 onw\", \"ards?\"], \"1\": [[\"Keep k at 500 and minPoolCost at 340 ada\"], [\"Keep k at 500 and halve minPoolCost to 170 ada\"], [\"Increase k to 1000 and keep minPoolCost at 340 ada\"], [\"Increase k to 1000 and halve minPoolCost to 170 ada\"], [\"I would prefer to abstain\"], [\"None of the provided options\"]]}"
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
| poll_hash|string|The HEX encoding of the poll's question (e.g. the poll's hash).|
| tx_hash_hex|string|The HEX encoding of the transaction that created the poll.|
| start_epoch_no|integer(int32)|The epoch number marking the start of this poll.|
| end_epoch_no|integer(int32)|The epoch number marking the end of this poll.|
| json|string|The poll's on-chain JSON payload, containing questions and possible answers.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One poll full details by hash

Returns on-chain information about a poll given the hash of its question.

`GET /api/core/polls/{poll_hash}`

### 🎰 Parameters 

|Name|Description|In|Type|Required| 
|---|---|---|---|---|
| poll_hash|The HEX encoding of the poll's hash (e.g. the hash of the poll's question).|path|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const polls = await CBI.core.polls_({ poll_hash: "96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211" });
console.log(polls); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
CBI = CardanoBI(apiKey='YOUR-KEY', apiSecret='YOUR-SECRET' }); 
polls = await CBI.core.polls_(poll_hash='96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211');
print(polls); 
``` 

</TabItem> 
<TabItem value="rust" label="Rust"> 

```rust 
let CBI = CardanoBI::new(Some("YOUR-KEY"), Some("YOUR-SECRET")).await.expect("Failed to initialize CardanoBI");
let polls = CBI.core.polls_(Some("96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211"), HashMap::new()).await.expect("Failed to call endpoint");
println!("polls: {:?}", polls); 
``` 

</TabItem> 
</Tabs> 

### 💌 Response Codes 

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`

```json
{
 "poll_hash": "96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211",
 "question": "Which setup would you prefer to be put in place from Q3 2023 onwards?",
 "choices": [
  "Keep k at 500 and minPoolCost at 340 ada",
  "Keep k at 500 and halve minPoolCost to 170 ada",
  "Increase k to 1000 and keep minPoolCost at 340 ada",
  "Increase k to 1000 and halve minPoolCost to 170 ada",
  "I would prefer to abstain",
  "None of the provided options"
 ],
 "tx_hash_hex": "fae7bda85acb99c513aeab5f86986047b6f6cbd33a8e11f11c5005513a054dc8",
 "start_epoch_no": 412,
 "end_epoch_no": 416,
 "json": "{\"0\": [\"Which setup would you prefer to be put in place from Q3 2023 onw\", \"ards?\"], \"1\": [[\"Keep k at 500 and minPoolCost at 340 ada\"], [\"Keep k at 500 and halve minPoolCost to 170 ada\"], [\"Increase k to 1000 and keep minPoolCost at 340 ada\"], [\"Increase k to 1000 and halve minPoolCost to 170 ada\"], [\"I would prefer to abstain\"], [\"None of the provided options\"]]}",
 "summary": {
  "votes": {
   "total": 797,
   "counts": [
    70,
    98,
    190,
    365,
    5,
    69
   ],
   "pcts": [
    0.08782936,
    0.122961104,
    0.23839398,
    0.45796737,
    0.0062735258,
    0.08657465
   ]
  },
  "stakes": {
   "total": 10862546746809504,
   "sums": [
    2083421253616840,
    2736731112331270,
    1468034147573315,
    2986172590177247,
    79536412696975,
    1508651230413857
   ],
   "pcts": [
    0.1917986,
    0.25194195,
    0.13514641,
    0.27490538,
    0.0073220776,
    0.1388856
   ]
  },
  "delegators": {
   "total": 629527,
   "sums": [
    85781,
    161245,
    96302,
    201889,
    1708,
    82602
   ],
   "pcts": [
    0.13626263,
    0.25613675,
    0.15297517,
    0.3206995,
    0.002713148,
    0.1312128
   ]
  }
 },
 "votes": [
  {
   "ticker_name": "SPIDR",
   "pool_name": "SpidarPool",
   "pool_id": "pool1tnl3yxmj8848vq6meduhz9n5520a7dwsh05r5gfyvlatj87k3jl",
   "tx_hash_hex": "3533cdb973f024c9b3ab1a592c27cb2263ba37c510cb9083a1a791d4d4876194",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "5cff121b7239ea76035bcb79711674a29fdf35d0bbe83a212467fab9",
   "cold_vkey": "5cff121b7239ea76035bcb79711674a29fdf35d0bbe83a212467fab9",
   "delegator_count": 50,
   "delegated_stakes": 148961355354
  },
  {
   "ticker_name": "PANL",
   "pool_name": "PANL Stake Pool",
   "pool_id": "pool1qhs3cf9ymc2nvmrd2j8cs36cj9jdqgnqk6s9ngyvy2lz5s8rak8",
   "tx_hash_hex": "7e0e501f2f80a6c91287814d8e7f4ce0c8c61902c66921d2b9e72b5364e46a7c",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "05e11c24a4de15366c6d548f8847589164d02260b6a059a08c22be2a",
   "cold_vkey": "05e11c24a4de15366c6d548f8847589164d02260b6a059a08c22be2a",
   "delegator_count": 38,
   "delegated_stakes": 378050862030
  },
  {
   "ticker_name": null,
   "pool_name": "",
   "pool_id": "pool1rvjj8cp3urh7de07pm0ceqha2x4lxws69lhd4429dm6djfjsy4l",
   "tx_hash_hex": "97005cdc9034a575a3bea7ae3ab911b144defba9aec66e613dde1a1050ce11c6",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "1b2523e031e0efe6e5fe0edf8c82fd51abf33a1a2feedad5456ef4d9",
   "cold_vkey": "1b2523e031e0efe6e5fe0edf8c82fd51abf33a1a2feedad5456ef4d9",
   "delegator_count": 2365,
   "delegated_stakes": 52829953250035
  },
  {
   "ticker_name": "AAA",
   "pool_name": "AAA",
   "pool_id": "pool1ljlmfg7p37ysmea9ra5xqwccue203dpj40w6zlzn5r2cvjrf6tw",
   "tx_hash_hex": "3e5f115f52d2ad577491694eeeab0c8147ab53f9590b86c6fe0da74a51df977b",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "fcbfb4a3c18f890de7a51f68603b18e654f8b432abdda17c53a0d586",
   "cold_vkey": "fcbfb4a3c18f890de7a51f68603b18e654f8b432abdda17c53a0d586",
   "delegator_count": 1886,
   "delegated_stakes": 19641409423443
  },
  {
   "ticker_name": "PARIS",
   "pool_name": "PARIS Stake Pool",
   "pool_id": "pool1xyx655q6ch4d99fuewwtkdwjx5tvfr0rzqvmwehm2cpzj7e2wgl",
   "tx_hash_hex": "37858bcbcfcbac6e0c95b3ecd8fe468eea008d6e9e61f317ca9a2ff1d5dc67b0",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "310daa501ac5ead2953ccb9cbb35d23516c48de31019b766fb560229",
   "cold_vkey": "310daa501ac5ead2953ccb9cbb35d23516c48de31019b766fb560229",
   "delegator_count": 73,
   "delegated_stakes": 1802898681705
  },
  {
   "ticker_name": "0AAAA",
   "pool_name": "AAAA pool",
   "pool_id": "pool193uec04jldvah7r52q86wl033g4v42x0aste8jfg9999qepaxfp",
   "tx_hash_hex": "4905770b91e0ad26e65545cc3a0d7985e1ede16b4a3119dfe2d03bff3817b4d1",
   "response": "Keep k at 500 and minPoolCost at 340 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 0}",
   "extra_sign_hash": "2c799c3eb2fb59dbf874500fa77df18a2acaa8cfec1793c928294a50",
   "cold_vkey": "2c799c3eb2fb59dbf874500fa77df18a2acaa8cfec1793c928294a50",
   "delegator_count": 345,
   "delegated_stakes": 19748362422962
  },
  {
   "ticker_name": "ECP",
   "pool_name": "Earn Coin Pool",
   "pool_id": "pool16cdtqyk0fvxzfkhjg3esjcuty4tnlpds5lj0lkmqmwdjyzaj7p8",
   "tx_hash_hex": "1c4293ffcf92092e54979272f2e03d94e1d45449d7084aef292937f067500e99",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "d61ab012cf4b0c24daf2447309638b25573f85b0a7e4ffdb60db9b22",
   "cold_vkey": "d61ab012cf4b0c24daf2447309638b25573f85b0a7e4ffdb60db9b22",
   "delegator_count": 27,
   "delegated_stakes": 1192023235986
  },
  {
   "ticker_name": "DIGI",
   "pool_name": "Digital Fortress",
   "pool_id": "pool1rvng7n968748udkc5rxy4h9zp9hms4s3jsfwuues76ft28uc056",
   "tx_hash_hex": "3c08132f6cedad0514f41df093d082e890018f77ef05f6f92ad5c47756ba13da",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "1b268f4cba3faa7e36d8a0cc4adca2096fb856119412ee7330f692b5",
   "cold_vkey": "1b268f4cba3faa7e36d8a0cc4adca2096fb856119412ee7330f692b5",
   "delegator_count": 2783,
   "delegated_stakes": 50078809761709
  },
  {
   "ticker_name": "DIGI2",
   "pool_name": "Digital Fortress",
   "pool_id": "pool1lvsa8e0dw6z8g2fkw7prnfa7627wuy5jjexaadck6w5sxw5xkvm",
   "tx_hash_hex": "6f075dde2c744dbf74db1651744cd917db99352499005a2469a036adf1800d1e",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "fb21d3e5ed7684742936778239a7bed2bcee1292964ddeb716d3a903",
   "cold_vkey": "fb21d3e5ed7684742936778239a7bed2bcee1292964ddeb716d3a903",
   "delegator_count": 1281,
   "delegated_stakes": 47677308617529
  },
  {
   "ticker_name": "DIGI3",
   "pool_name": "Digital Fortress",
   "pool_id": "pool1ppznyu6qrvlw9uuqa3tslryjd40nh56jyvmaqw6kdf4kzq3y8kh",
   "tx_hash_hex": "8abd3be6b82fb205cf580810f32a0425520f5516d2eaff32aa0a906a45d86163",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "08453273401b3ee2f380ec570f8c926d5f3bd3522337d03b566a6b61",
   "cold_vkey": "08453273401b3ee2f380ec570f8c926d5f3bd3522337d03b566a6b61",
   "delegator_count": 1179,
   "delegated_stakes": 35530688033708
  },
  {
   "ticker_name": "DIGI4",
   "pool_name": "Digital Fortress",
   "pool_id": "pool1jz5ljsnj4fzmk84j0wcw9ldy866dn07nzqg2ktyuyjvfvr3jgtq",
   "tx_hash_hex": "52444316cc15d011a17133d212ed9f9a7f32e6c572b555fafcfea703b78c80ef",
   "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
   "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
   "extra_sign_hash": "90a9f94272aa45bb1eb27bb0e2fda43eb4d9bfd31010ab2c9c249896",
   "cold_vkey": "90a9f94272aa45bb1eb27bb0e2fda43eb4d9bfd31010ab2c9c249896",
   "delegator_count": 1399,
   "delegated_stakes": 37454282775278
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
| poll_hash|string|The HEX encoding of the poll's question (e.g. the poll's hash).|
| question|string|The the poll's question.|
| choices|array|The the poll's possible answer choices.|
| tx_hash_hex|string|The HEX encoding of the transaction that created the poll.|
| start_epoch_no|integer(int32)|The epoch number marking the start of this poll.|
| end_epoch_no|integer(int32)|The epoch number marking the end of this poll.|
| json|string|The poll's on-chain JSON payload, containing questions and possible answers.|
| summary|PollSummaryDTO|The detailed summary of a poll.|
| votes|array|The list of votes.|

PollSummaryDTO

|Name|Type|Description| 
|---|---|---|
| votes|PollSummaryVotesDTO|The poll's summary by vote count.|
| stakes|PollSummaryStakesDTO|The poll's summary by stake size.|
| delegators|PollSummaryDelegatorsDTO|The poll's summary by number of delegators.|

PollSummaryVotesDTO

|Name|Type|Description| 
|---|---|---|
| total|integer(int32)|Total number of votes.|
| counts|array|Counts of votes per choice.|
| pcts|array|Percentages of votes per choice.|

PollSummaryStakesDTO

|Name|Type|Description| 
|---|---|---|
| total|integer(int64)|Total voting stakes.|
| sums|array|Sums of voting stakes per choice.|
| pcts|array|Percentages of voting stakes per choice.|

PollSummaryDelegatorsDTO

|Name|Type|Description| 
|---|---|---|
| total|integer(int32)|Total voting delegators.|
| sums|array|Sums of voting delegators per choice.|
| pcts|array|Percentages of voting delegators per choice.|
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