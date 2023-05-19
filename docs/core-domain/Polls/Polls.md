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
  "poll_hash": "62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798",
  "tx_hash_hex": "d8c1b1d871a27d74fbddfa16d28ce38288411a75c5d3561bb74066bcd54689e2",
  "start_epoch_no": 67,
  "end_epoch_no": 69,
  "json": "{\"0\": [\"How satisfied are you with the current rewards and incentives sc\", \"heme?\"], \"1\": [[\"dissatisfied\"], [\"no opinion\"], [\"satisfied\"]]}"
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
const polls = await CBI.core.polls_({ poll_hash: "62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798" });
console.log(polls); 
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
 "poll_hash": "62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798",
 "question": "How satisfied are you with the current rewards and incentives scheme?",
 "choices": [
  "dissatisfied",
  "no opinion",
  "satisfied"
 ],
 "tx_hash_hex": "d8c1b1d871a27d74fbddfa16d28ce38288411a75c5d3561bb74066bcd54689e2",
 "start_epoch_no": 67,
 "end_epoch_no": 69,
 "json": "{\"0\": [\"How satisfied are you with the current rewards and incentives sc\", \"heme?\"], \"1\": [[\"dissatisfied\"], [\"no opinion\"], [\"satisfied\"]]}",
 "summary": {
  "votes": {
   "total": 28,
   "counts": [
    18,
    3,
    7
   ],
   "pcts": [
    0.64285713,
    0.10714286,
    0.25
   ]
  },
  "stakes": {
   "total": 60536311280682,
   "sums": [
    40242902025853,
    15007255398512,
    5286153856317
   ],
   "pcts": [
    0.664773,
    0.24790503,
    0.087322034
   ]
  },
  "delegators": {
   "total": 2452,
   "sums": [
    2317,
    56,
    79
   ],
   "pcts": [
    0.9449429,
    0.0228385,
    0.032218598
   ]
  }
 },
 "votes": [
  {
   "ticker_name": "FRCA🍁",
   "pool_name": "FRCA \\uD83C\\uDDE8\\uD83C\\uDDE6",
   "pool_id": "pool140qtx3sfkm0sxlld059xt6vejwcawul6x70la9clml3kxruz6qp",
   "tx_hash_hex": "c36753b78dc50802e792e662dd46b096d0f87e9b3aef40bb6c727feb2f20c0fd",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "abc0b34609b6df037fed7d0a65e99993b1d773fa379ffe971fdfe363",
   "cold_vkey": "abc0b34609b6df037fed7d0a65e99993b1d773fa379ffe971fdfe363",
   "delegator_count": 2,
   "delegated_stakes": 1009497098399
  },
  {
   "ticker_name": null,
   "pool_name": "",
   "pool_id": "pool1xxnkgjejhd2eqp4gusjd8s2tnq6frwh4z453j5s2vl7axv90n9a",
   "tx_hash_hex": "f5ddf62570385dae978d0304406b08654b254663d63823e6f9433c703837999a",
   "response": "satisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 2}",
   "extra_sign_hash": "31a7644b32bb559006a8e424d3c14b983491baf5156919520a67fdd3",
   "cold_vkey": "31a7644b32bb559006a8e424d3c14b983491baf5156919520a67fdd3",
   "delegator_count": 1,
   "delegated_stakes": 9496709927
  },
  {
   "ticker_name": "ATADA",
   "pool_name": "ATADA Austria - PreProd Pool #1",
   "pool_id": "pool1rkfs9glmfva3jd0q9vnlqvuhnrflpzj4l07u6sayfx5k7d788us",
   "tx_hash_hex": "3b3942a71da91fab9f5c7af1654d1301d17cc24e318d84b967d2bcc7085aca05",
   "response": "no opinion",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 1}",
   "extra_sign_hash": "1d9302a3fb4b3b1935e02b27f0339798d3f08a55fbfdcd43a449a96f",
   "cold_vkey": "1d9302a3fb4b3b1935e02b27f0339798d3f08a55fbfdcd43a449a96f",
   "delegator_count": 54,
   "delegated_stakes": 13958290869221
  },
  {
   "ticker_name": "CLIO1",
   "pool_name": "CLIO1",
   "pool_id": "pool19u5hvwc7hm5wrs0tf5knh7373p88en9gt2tyad5yjfujy29676m",
   "tx_hash_hex": "1d38e1fd4cfd9da39d70dc37cb029fb5538e650bad8943899f8a1615c201d2c5",
   "response": "satisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 2}",
   "extra_sign_hash": "2f29763b1ebee8e1c1eb4d2d3bfa3e884e7ccca85a964eb684927922",
   "cold_vkey": "2f29763b1ebee8e1c1eb4d2d3bfa3e884e7ccca85a964eb684927922",
   "delegator_count": 2,
   "delegated_stakes": 1009493096067
  },
  {
   "ticker_name": "INTRT",
   "pool_name": "intertree Flight",
   "pool_id": "pool1vntql3yhyzzm3p846mds33nmuzz30jrn56fvjdd3hhu9u5n9d4d",
   "tx_hash_hex": "12d0c1e8df06d4f5b5c1f99e1606a8f1eee3266564375c276edbaab07206e07d",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "64d60fc4972085b884f5d6db08c67be08517c873a692c935b1bdf85e",
   "cold_vkey": "64d60fc4972085b884f5d6db08c67be08517c873a692c935b1bdf85e",
   "delegator_count": 14,
   "delegated_stakes": 1152188577811
  },
  {
   "ticker_name": "999",
   "pool_name": "0AAAA test pool",
   "pool_id": "pool12jthfp4uqah0yndtdu6x2tqaxvgnlpc7h30gvwey3rsrc789tme",
   "tx_hash_hex": "ab42ffb7bf3acb5bae5a99ba66dac9d68241f1675b73b18d1670cd4591404bb0",
   "response": "satisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 2}",
   "extra_sign_hash": "54977486bc076ef24dab6f34652c1d33113f871ebc5e863b2488e03c",
   "cold_vkey": "54977486bc076ef24dab6f34652c1d33113f871ebc5e863b2488e03c",
   "delegator_count": 20,
   "delegated_stakes": 371625677162
  },
  {
   "ticker_name": "CAN1",
   "pool_name": "CanadaStakes",
   "pool_id": "pool1vvkurfxhajtj4f7x8wjkeet7rg8amz34duy5nux76per5sn3npx",
   "tx_hash_hex": "a078b0de9af4a7870549588eadd2bc54c5787772c6b8137e6d217b794174c8f1",
   "response": "satisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 2}",
   "extra_sign_hash": "632dc1a4d7ec972aa7c63ba56ce57e1a0fdd8a356f0949f0ded0723a",
   "cold_vkey": "632dc1a4d7ec972aa7c63ba56ce57e1a0fdd8a356f0949f0ded0723a",
   "delegator_count": 46,
   "delegated_stakes": 1784562025902
  },
  {
   "ticker_name": "PILDR",
   "pool_name": "PILDR PP Staking Pool",
   "pool_id": "pool1zwmkuyzj8wykfdq98g28stkpq28k0f3l2xse384re5yfwap80ca",
   "tx_hash_hex": "f25b1050dd546e9a718274d624d4151c63f8644581d544efed5897298d1bfa7e",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "13b76e10523b8964b4053a14782ec1028f67a63f51a1989ea3cd0897",
   "cold_vkey": "13b76e10523b8964b4053a14782ec1028f67a63f51a1989ea3cd0897",
   "delegator_count": 11,
   "delegated_stakes": 1352538172021
  },
  {
   "ticker_name": "PANL",
   "pool_name": "PANL Stake Pool (Pre-Production)",
   "pool_id": "pool1mp96jpc2dtaruz0cazmljh03dev0969c4rq3wr6hnc4rjdxn8aw",
   "tx_hash_hex": "73a9f121349949796307ae2f19c885f2f1bcf93646c94d230a23f0ba8d5a58ff",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "d84ba9070a6afa3e09f8e8b7f95df16e58f2e8b8a8c1170f579e2a39",
   "cold_vkey": "d84ba9070a6afa3e09f8e8b7f95df16e58f2e8b8a8c1170f579e2a39",
   "delegator_count": 6,
   "delegated_stakes": 1885721832350
  },
  {
   "ticker_name": "CCIO",
   "pool_name": "ChainCrucial.io",
   "pool_id": "pool1amrnegn99cdwj2zjr90lx2yamxg6s0d7t7vf7phpe94kga9gg86",
   "tx_hash_hex": "f101f2a4034bb47b7547156416fc01e5b3d65383bda5202a740adc4b0b1466c2",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "eec73ca2652e1ae92852195ff3289dd991a83dbe5f989f06e1c96b64",
   "cold_vkey": "eec73ca2652e1ae92852195ff3289dd991a83dbe5f989f06e1c96b64",
   "delegator_count": 10,
   "delegated_stakes": 1610080651321
  },
  {
   "ticker_name": "APEX",
   "pool_name": "Apex Cardano Pool",
   "pool_id": "pool107k26e3wrqxwghju2py40ngngx2qcu48ppeg7lk0cm35jl2aenx",
   "tx_hash_hex": "a01a955e92a886abad866ee2f889de80c77346789e56246de9091fb9ffa7ba69",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "7facad662e180ce45e5c504957cd1341940c72a708728f7ecfc6e349",
   "cold_vkey": "7facad662e180ce45e5c504957cd1341940c72a708728f7ecfc6e349",
   "delegator_count": 116,
   "delegated_stakes": 8320237612076
  },
  {
   "ticker_name": "SIPO",
   "pool_name": "SITION POOL PreProd",
   "pool_id": "pool1xgxhm4zgkevltshwk7yezvt9un08anc9rhlutm5yp7jr2etj3x0",
   "tx_hash_hex": "3b6c37f562cb5976b659495619bd955ab157dee46e1ea6a90ba635738e12f418",
   "response": "no opinion",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 1}",
   "extra_sign_hash": "320d7dd448b659f5c2eeb789913165e4de7ecf051dffc5ee840fa435",
   "cold_vkey": "320d7dd448b659f5c2eeb789913165e4de7ecf051dffc5ee840fa435",
   "delegator_count": 2,
   "delegated_stakes": 1048964529291
  },
  {
   "ticker_name": "T2H",
   "pool_name": "Techs2Help",
   "pool_id": "pool13ved7up7lkz220kv8r84h76lgt27a3umyf7uewlxxclxvdm6zlf",
   "tx_hash_hex": "a2366a31f699a68c9732634e21d37d0d3aa0f8c975fcb3c7dfe2b5a4cd0e9f25",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "8b32df703efd84a53ecc38cf5bfb5f42d5eec79b227dccbbe6363e66",
   "cold_vkey": "8b32df703efd84a53ecc38cf5bfb5f42d5eec79b227dccbbe6363e66",
   "delegator_count": 7,
   "delegated_stakes": 1165022356986
  },
  {
   "ticker_name": "RED",
   "pool_name": "CrimsonPool",
   "pool_id": "pool160u5drqagq5k4mwghps36cvq7e6vcptm5r8tnkpcpkhwvrm2gad",
   "tx_hash_hex": "1b9b3eff25cfe140534da33c8bdf01ac190c0699d96b02435663f300781f5131",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "d3f9468c1d40296aedc8b8611d6180f674cc057ba0ceb9d8380daee6",
   "cold_vkey": "d3f9468c1d40296aedc8b8611d6180f674cc057ba0ceb9d8380daee6",
   "delegator_count": 3,
   "delegated_stakes": 1059180569744
  },
  {
   "ticker_name": "GRADA",
   "pool_name": "GRADA Gratis ADA PreProd",
   "pool_id": "pool1nmfr5j5rnqndprtazre802glpc3h865sy50mxdny65kfgf3e5eh",
   "tx_hash_hex": "914a954f7dadf7b5b935be84e6c0660fc156b45fa4f6b2efce145eb472837cc2",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "9ed23a4a839826d08d7d10f277a91f0e2373ea90251fb33664d52c94",
   "cold_vkey": "9ed23a4a839826d08d7d10f277a91f0e2373ea90251fb33664d52c94",
   "delegator_count": 14,
   "delegated_stakes": 1658542055443
  },
  {
   "ticker_name": "ADACT",
   "pool_name": "ADA Capital",
   "pool_id": "pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r",
   "tx_hash_hex": "eb11f9086f5a595ee4d83757b04df3946de962eaed7f2d58ad841288b2bf6504",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "8aa469088eaf5c38c3d4faf0d3516ca670cd6df5545fafea2f70258b",
   "cold_vkey": "8aa469088eaf5c38c3d4faf0d3516ca670cd6df5545fafea2f70258b",
   "delegator_count": 2073,
   "delegated_stakes": 12353014964350
  },
  {
   "ticker_name": "RCADA",
   "pool_name": "Regenerative Crusaders Pool",
   "pool_id": "pool1jaed3q2trl0n6s5mwd0tw8s9k4uheqr7ytpfne034lrh2fj7wd7",
   "tx_hash_hex": "1b2886c1b3900a715bd0646ada9b0f0e2f088bbb84b311865486fdac299667a6",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "9772d8814b1fdf3d429b735eb71e05b5797c807e22c299e5f1afc775",
   "cold_vkey": "9772d8814b1fdf3d429b735eb71e05b5797c807e22c299e5f1afc775",
   "delegator_count": 0,
   "delegated_stakes": 0
  },
  {
   "ticker_name": "OTG",
   "pool_name": "\\uD83C\\uDF1F STAR FORGE \\u26A1",
   "pool_id": "pool1mvgpsafktxs883p66awp7fplj73cj6j9hqdxzvqw494f7f0v2dp",
   "tx_hash_hex": "1ae0dfda5e652fbcf11910a05e3aed086aa452990e94a69c26bfcdef05b9eeca",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "db1018753659a073c43ad75c1f243f97a3896a45b81a61300ea96a9f",
   "cold_vkey": "db1018753659a073c43ad75c1f243f97a3896a45b81a61300ea96a9f",
   "delegator_count": 14,
   "delegated_stakes": 1232927362982
  },
  {
   "ticker_name": "HAMDA",
   "pool_name": "Hamster Stake PreProd Pool",
   "pool_id": "pool1hfndr5ja3w7ptzhpjsds8f2eye3umg6nj8t7cq6s9vddj9q70k6",
   "tx_hash_hex": "17c085f874e1d1cdebd92d762235c27a0dc92c57d5380ccf5441046b270618a3",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "ba66d1d25d8bbc158ae1941b03a5592663cda35391d7ec03502b1ad9",
   "cold_vkey": "ba66d1d25d8bbc158ae1941b03a5592663cda35391d7ec03502b1ad9",
   "delegator_count": 5,
   "delegated_stakes": 1047721343039
  },
  {
   "ticker_name": "ANP",
   "pool_name": "ADA NORTH POOL PREPROD",
   "pool_id": "pool1s7wetfttn723hvdxx3wusz7yrxztzdfu6dm5nu4j6tuj6xcz2sj",
   "tx_hash_hex": "cb48c96a4f7ecb8433eef8a8609bee0bdb82006ecba661405ea04d3afabb9290",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "879d95a56b9f951bb1a6345dc80bc41984b1353cd37749f2b2d2f92d",
   "cold_vkey": "879d95a56b9f951bb1a6345dc80bc41984b1353cd37749f2b2d2f92d",
   "delegator_count": 8,
   "delegated_stakes": 168426056619
  },
  {
   "ticker_name": "HODLr",
   "pool_name": "Hodler-Preprod",
   "pool_id": "pool1z05xqzuxnpl8kg8u2wwg8ftng0fwtdluv3h20ruryfqc5gc3efl",
   "tx_hash_hex": "fd65436a257911d5e3ca76657380e2de2c1dcf128096ca184e37c74ca72666d7",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "13e8600b86987e7b20fc539c83a57343d2e5b7fc646ea78f8322418a",
   "cold_vkey": "13e8600b86987e7b20fc539c83a57343d2e5b7fc646ea78f8322418a",
   "delegator_count": 4,
   "delegated_stakes": 3797430305307
  },
  {
   "ticker_name": "VIVI",
   "pool_name": "VIVI Pool",
   "pool_id": "pool1dg720fqut6y60phvxzk4pe639wvc2du65mv0yrnm8w6e570ct39",
   "tx_hash_hex": "953e13ea184e77cad9a4b02c9926b35ea23a68b2c47cfc93945667df52004ff1",
   "response": "satisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 2}",
   "extra_sign_hash": "6a3ca7a41c5e89a786ec30ad50e7512b9985379aa6d8f20e7b3bb59a",
   "cold_vkey": "6a3ca7a41c5e89a786ec30ad50e7512b9985379aa6d8f20e7b3bb59a",
   "delegator_count": 0,
   "delegated_stakes": 0
  },
  {
   "ticker_name": "BBHMM",
   "pool_name": "Blockchain Better Have My Money-Preprod",
   "pool_id": "pool1jgl6h9fyy8gqt593ah638kqps4ls7c78d5p00we6qlzycdmhhvq",
   "tx_hash_hex": "51949c4921dbf2fcbb074731302fd5822177578664d389b340680bbcc90dbe88",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "923fab952421d005d0b1edf513d801857f0f63c76d02f7bb3a07c44c",
   "cold_vkey": "923fab952421d005d0b1edf513d801857f0f63c76d02f7bb3a07c44c",
   "delegator_count": 4,
   "delegated_stakes": 1079280016029
  },
  {
   "ticker_name": "EUSKL",
   "pool_name": "EUSKAL STAKE POOL TESTNET",
   "pool_id": "pool1kgzq2g7glzcu76ygcl2llhamjjutcts5vhe2mzglmn5jxt2cnfs",
   "tx_hash_hex": "8d46cd263992b13e62a5f0a1cb5e1cc2660aa20cc16ce70109ba41a70fc2eca1",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "b2040523c8f8b1cf6888c7d5ffdfbb94b8bc2e1465f2ad891fdce923",
   "cold_vkey": "b2040523c8f8b1cf6888c7d5ffdfbb94b8bc2e1465f2ad891fdce923",
   "delegator_count": 8,
   "delegated_stakes": 1135270515624
  },
  {
   "ticker_name": "VIVI",
   "pool_name": "VIVI Pool",
   "pool_id": "pool1qata6zlvsd72vz9dqnh3733xdv9qyrdzghh7hn5tdn02vl6evww",
   "tx_hash_hex": "6c90332c90bac4b92ab8ef8ab67952cc3e577a767293cb7a4642278b70ca5f36",
   "response": "no opinion",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 1}",
   "extra_sign_hash": "0757dd0bec837ca608ad04ef1f46266b0a020da245efebce8b6cdea6",
   "cold_vkey": "0757dd0bec837ca608ad04ef1f46266b0a020da245efebce8b6cdea6",
   "delegator_count": 0,
   "delegated_stakes": 0
  },
  {
   "ticker_name": "8BETA",
   "pool_name": "8BETA",
   "pool_id": "pool188etalcyudyh4xuaa4mjahs62jujem35h3l02ht83zjusqvwdh7",
   "tx_hash_hex": "0adbe1040e4d6f5ba8edb759342c795162c10b0c5e7b9a547c61c3257c254b3e",
   "response": "dissatisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 0}",
   "extra_sign_hash": "39f2beff04e3497a9b9ded772ede1a54b92cee34bc7ef55d6788a5c8",
   "cold_vkey": "39f2beff04e3497a9b9ded772ede1a54b92cee34bc7ef55d6788a5c8",
   "delegator_count": 18,
   "delegated_stakes": 215822535752
  },
  {
   "ticker_name": "ONYX",
   "pool_name": "ONYX Stake Pool #1",
   "pool_id": "pool1yy4cemccmnk6m6adcnxedzy4dvrlw95djln4pctg0jpq5x7gczh",
   "tx_hash_hex": "78cf601fafd3066d05f4095b291afb437eb90bbe261815c9a1c69127b6767462",
   "response": "satisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 2}",
   "extra_sign_hash": "212b8cef18dcedadebadc4cd9688956b07f7168d97e750e1687c820a",
   "cold_vkey": "212b8cef18dcedadebadc4cd9688956b07f7168d97e750e1687c820a",
   "delegator_count": 6,
   "delegated_stakes": 1068710518921
  },
  {
   "ticker_name": "DIGI",
   "pool_name": "Digital Fortress",
   "pool_id": "pool1v3lsp74wauazym2rwkktye9kdw2vyj8h9yvkgzj556t0g390ecw",
   "tx_hash_hex": "3fe60be030eb5fcfcb66a5ef0a08234d8ef155ccb83d5744c0ba07cc2c8a482c",
   "response": "satisfied",
   "response_json": "{\"2\": \"0x62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798\", \"3\": 2}",
   "extra_sign_hash": "647f00faaeef3a226d4375acb264b66b94c248f72919640a54a696f4",
   "cold_vkey": "647f00faaeef3a226d4375acb264b66b94c248f72919640a54a696f4",
   "delegator_count": 4,
   "delegated_stakes": 1042265828338
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
