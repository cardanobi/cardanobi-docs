--- 
title: '' 
sidebar_label: 'Updates' 
sidebar_position: 8 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All on-chain pool updates<br/>
<EndpointBadge type="GET"/> One pool on-chain updates<br/>
<EndpointBadge type="GET"/> One pool on-chain updates<br/>
<EndpointBadge type="GET"/> All on-chain pool updates <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool on-chain updates <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All on-chain pool updates

Returns all on-chain pool updates.

`GET /api/core/pools/updates`

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
  "id": 0, 
  "hash_id": 0, 
  "cert_index": 0, 
  "vrf_key_hash": 0, 
  "pledge": 0, 
  "active_epoch_no": 0, 
  "meta_id": 0, 
  "margin": 0, 
  "fixed_cost": 0, 
  "registered_tx_id": 0, 
  "reward_addr_id": 0, 
  "vrf_key_hash_hex": 0
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates

Returns the on-chain updates for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/updates`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


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
  "id": 0, 
  "hash_id": 0, 
  "cert_index": 0, 
  "vrf_key_hash": 0, 
  "pledge": 0, 
  "active_epoch_no": 0, 
  "meta_id": 0, 
  "margin": 0, 
  "fixed_cost": 0, 
  "registered_tx_id": 0, 
  "reward_addr_id": 0, 
  "vrf_key_hash_hex": 0
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates

Returns the on-chain updates for one pool given its VRF key hash.

`GET /api/core/pools/{vrf_key_hash}/updates`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| vrf_key_hash|The pool VRF key in HEX format.|string|true|


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
  "id": 0, 
  "hash_id": 0, 
  "cert_index": 0, 
  "vrf_key_hash": 0, 
  "pledge": 0, 
  "active_epoch_no": 0, 
  "meta_id": 0, 
  "margin": 0, 
  "fixed_cost": 0, 
  "registered_tx_id": 0, 
  "reward_addr_id": 0, 
  "vrf_key_hash_hex": 0
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All on-chain pool updates <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all on-chain pool updates.

`GET /api/core/odata/poolsupdates`

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
  "id": 0, 
  "hash_id": 0, 
  "cert_index": 0, 
  "vrf_key_hash": 0, 
  "pledge": 0, 
  "active_epoch_no": 0, 
  "meta_id": 0, 
  "margin": 0, 
  "fixed_cost": 0, 
  "registered_tx_id": 0, 
  "reward_addr_id": 0, 
  "vrf_key_hash_hex": 0
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool on-chain updates <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the on-chain updates for one pool given its unique identifier.

`GET /api/core/odata/poolsupdates/{pool_id}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| pool_id|Pool unique identifier|integer|true|


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
  "id": 0, 
  "hash_id": 0, 
  "cert_index": 0, 
  "vrf_key_hash": 0, 
  "pledge": 0, 
  "active_epoch_no": 0, 
  "meta_id": 0, 
  "margin": 0, 
  "fixed_cost": 0, 
  "registered_tx_id": 0, 
  "reward_addr_id": 0, 
  "vrf_key_hash_hex": 0
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
| id|integer(int64)|The pool update unique identifier.|
| hash_id|integer(int64)|The PoolHash table index of the pool this update refers to.|
| cert_index|integer(int32)|The index of this pool update within the certificates of this transaction.|
| vrf_key_hash|string(byte)|The hash of the pool's VRF key.|
| pledge|number(double)|The amount (in Lovelace) the pool owner pledges to the pool.|
| active_epoch_no|integer(int64)|The epoch number where this update becomes active.|
| meta_id|integer(int64)|The PoolMetadataRef table index this pool update refers to.|
| margin|number(double)|The margin (as a percentage) this pool charges.|
| fixed_cost|number(double)|The fixed per epoch fee (in ADA) this pool charges.|
| registered_tx_id|integer(int64)|The Tx table index of the transaction in which provided this pool update.|
| reward_addr_id|integer(int64)|The StakeAddress table index of this pool's rewards address. New in v13: Replaced reward_addr.|
| vrf_key_hash_hex|string(undefined)|The hexadecimal encoding of the VRF key hash.|
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
