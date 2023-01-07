--- 
title: '' 
sidebar_label: 'OfflineData' 
sidebar_position: 6 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool offline data<br/>
<EndpointBadge type="GET"/> One pool offline data by pool id<br/>
<EndpointBadge type="GET"/> One pool offline data by pool ticker<br/>
<EndpointBadge type="GET"/> One pool offline data by pool metadata hash<br/>
<EndpointBadge type="GET"/> All pool offline data <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool offline data by pool id <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline data

Returns all pool offline (ie not on chain) data.

`GET /api/core/pools/offlinedata`

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
  "pool_id": 0, 
  "ticker_name": 0, 
  "hash": 0, 
  "json": 0, 
  "bytes": 0, 
  "pmr_id": 0, 
  "hash_hex": 0
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool id

Returns the offline (ie not on chain) data for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/offlinedata`

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
  "pool_id": 0, 
  "ticker_name": 0, 
  "hash": 0, 
  "json": 0, 
  "bytes": 0, 
  "pmr_id": 0, 
  "hash_hex": 0
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool ticker

Returns the offline (ie not on chain) data for one pool given its ticker.

`GET /api/core/pools/{ticker}/offlinedata`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| ticker|Pool ticker|string|true|


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
  "pool_id": 0, 
  "ticker_name": 0, 
  "hash": 0, 
  "json": 0, 
  "bytes": 0, 
  "pmr_id": 0, 
  "hash_hex": 0
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool metadata hash

Returns the offline (ie not on chain) data for one pool given its metadata hash.

`GET /api/core/pools/metadata/{meta_hash}/offlinedata`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| meta_hash|Pool metadata hash|string|true|


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
  "pool_id": 0, 
  "ticker_name": 0, 
  "hash": 0, 
  "json": 0, 
  "bytes": 0, 
  "pmr_id": 0, 
  "hash_hex": 0
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline data <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all pool offline (ie not on chain) data.

`GET /api/core/odata/poolsofflinedata`

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
  "pool_id": 0, 
  "ticker_name": 0, 
  "hash": 0, 
  "json": 0, 
  "bytes": 0, 
  "pmr_id": 0, 
  "hash_hex": 0
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline data by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the offline (ie not on chain) data for one pool given its unique identifier.

`GET /api/core/odata/poolsofflinedata/{pool_id}`

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
  "pool_id": 0, 
  "ticker_name": 0, 
  "hash": 0, 
  "json": 0, 
  "bytes": 0, 
  "pmr_id": 0, 
  "hash_hex": 0
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
| id|integer(int64)|The pool offline data unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline data refers.|
| ticker_name|string(undefined)|The pool's ticker name (as many as 5 characters).|
| hash|string(byte)|The hash of the offline data.|
| json|string(undefined)|The payload as JSON.|
| bytes|string(byte)|The raw bytes of the payload.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| hash_hex|string(undefined)|The hexadecimal encoding of the offline data hash.|
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
