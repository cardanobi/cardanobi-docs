--- 
title: '' 
sidebar_label: 'Stakes' 
sidebar_position: 1 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All epoch stake distributions<br/>
<EndpointBadge type="GET"/> One epoch stake distributions<br/>
<EndpointBadge type="GET"/> One pool stake distributions<br/>
<EndpointBadge type="GET"/> One epoch and one pool stake distributions<br/>
<EndpointBadge type="GET"/> All epoch stake distributions <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All epoch stake distributions

Returns stake distributions for all epochs and all pools.

`GET /api/bi/epochs/stakes`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
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
  "epoch_stake_id": 0, 
  "epoch_stake_amount": 0, 
  "epoch_stake_epoch_no": 0, 
  "pool_hash_hex": 0, 
  "pool_hash": 0, 
  "stake_address": 0, 
  "stake_address_hash_hex": 0, 
  "stake_address_script_hash_hex": 0, 
  "stake_address_id": 0, 
  "stake_address_tx_id": 0
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch stake distributions

Returns the stake distribution for one epoch given its number.

`GET /api/bi/epochs/{no}/stakes`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
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
  "epoch_stake_id": 0, 
  "epoch_stake_amount": 0, 
  "epoch_stake_epoch_no": 0, 
  "pool_hash_hex": 0, 
  "pool_hash": 0, 
  "stake_address": 0, 
  "stake_address_hash_hex": 0, 
  "stake_address_script_hash_hex": 0, 
  "stake_address_id": 0, 
  "stake_address_tx_id": 0
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool stake distributions

Returns the stake distribution for one pool across all epochs given its Bech32 pool hash.

`GET /api/bi/epochs/stakes/pool/{pool_hash}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_hash|Bech32 pool hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
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
  "epoch_stake_id": 0, 
  "epoch_stake_amount": 0, 
  "epoch_stake_epoch_no": 0, 
  "pool_hash_hex": 0, 
  "pool_hash": 0, 
  "stake_address": 0, 
  "stake_address_hash_hex": 0, 
  "stake_address_script_hash_hex": 0, 
  "stake_address_id": 0, 
  "stake_address_tx_id": 0
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> One epoch and one pool stake distributions

Returns the stake distribution for one epoch given its number, and for one pool given its Bech32 pool hash.

`GET /api/bi/epochs/{no}/stakes/pool/{pool_hash}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| no|Epoch number|integer|true|
| pool_hash|Bech32 pool hash|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
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
  "epoch_stake_id": 0, 
  "epoch_stake_amount": 0, 
  "epoch_stake_epoch_no": 0, 
  "pool_hash_hex": 0, 
  "pool_hash": 0, 
  "stake_address": 0, 
  "stake_address_hash_hex": 0, 
  "stake_address_script_hash_hex": 0, 
  "stake_address_id": 0, 
  "stake_address_tx_id": 0
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>

## <span class="theme-doc-version-badge badge badge--success">GET</span> All epoch stake distributions <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns stake distributions for all epochs and all pools.

`GET /api/bi/odata/epochsstakes`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="JavaScript"> 

```js 
const headers = { 
'Accept':'application/json', 
'Authorization':'Bearer {access-token}' 
}; 

fetch('/api/core/epochs', 
{ 
method: 'GET', 

headers: headers 
}) 
.then(function(res) { 
    return res.json(); 
}).then(function(body) { 
    console.log(body); 
}); 
``` 

</TabItem> 
<TabItem value="py" label="Python"> 

```py 
import requests 
headers = { 
'Accept': 'application/json', 
'Authorization': 'Bearer {access-token}' 
} 

r = requests.get('/api/core/epochs', headers = headers) 

print(r.json()) 
``` 

</TabItem> 
<TabItem value="java" label="Java"> 

```java 
class HelloWorld { 
public static void main(String args[]) { 
    System.out.println("Hello, World"); 
} 
} 
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
  "epoch_stake_id": 0, 
  "epoch_stake_amount": 0, 
  "epoch_stake_epoch_no": 0, 
  "pool_hash_hex": 0, 
  "pool_hash": 0, 
  "stake_address": 0, 
  "stake_address_hash_hex": 0, 
  "stake_address_script_hash_hex": 0, 
  "stake_address_id": 0, 
  "stake_address_tx_id": 0
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
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

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
| epoch_stake_id|integer(int64)|The epoch stake unique identifier.|
| epoch_stake_amount|number(double)|The amount (in Lovelace) being staked.|
| epoch_stake_epoch_no|integer(int32)|The epoch number.|
| pool_hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
| pool_hash|string(undefined)|The Bech32 encoding of the pool hash.|
| stake_address|string(undefined)|The Bech32 encoded version of the stake address hash.|
| stake_address_hash_hex|string(undefined)|The hexadecimal encoding of the stake address hash.|
| stake_address_script_hash_hex|string(undefined)|The hexadecimal encoding of the script hash, in case this address is locked by a script.|
| stake_address_id|integer(int64)|The stake address unique identifier.|
| stake_address_tx_id|integer(int64)|The Tx table index of the transaction in which this address first appeared.|
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
<TabItem value="404" label="404" attributes={{className: styles.red}}>

Status Code **404**

|Name|Type|Description| 
|---|---|---|
Response schema is undefined.
</TabItem> 
</Tabs>
