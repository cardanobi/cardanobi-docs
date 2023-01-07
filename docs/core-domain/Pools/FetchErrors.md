--- 
title: '' 
sidebar_label: 'FetchErrors' 
sidebar_position: 3 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool offline fetch errors<br/>
<EndpointBadge type="GET"/> One pool offline fetch errors by pool id<br/>
<EndpointBadge type="GET"/> All pool offline fetch errors <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool offline fetch errors by pool id <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline fetch errors

Returns all pool offline fetch errors.

`GET /api/core/pools/offlinefetcherrors`

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
  "fetch_time": "2019-08-24T14:15:22Z", 
  "pmr_id": 0, 
  "fetch_error": 0, 
  "retry_count": 0
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline fetch errors by pool id

Returns the offline fetch errors for one pool given its unique identifier.

`GET /api/core/pools/{pool_id}/offlinefetcherrors`

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
  "fetch_time": "2019-08-24T14:15:22Z", 
  "pmr_id": 0, 
  "fetch_error": 0, 
  "retry_count": 0
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool offline fetch errors <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all pool offline fetch errors.

`GET /api/core/odata/poolsofflinefetcherrors`

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
  "fetch_time": "2019-08-24T14:15:22Z", 
  "pmr_id": 0, 
  "fetch_error": 0, 
  "retry_count": 0
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool offline fetch errors by pool id <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the offline fetch errors for one pool given its unique identifier.

`GET /api/core/odata/poolsofflinefetcherrors/{pool_id}`

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
  "fetch_time": "2019-08-24T14:15:22Z", 
  "pmr_id": 0, 
  "fetch_error": 0, 
  "retry_count": 0
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
| id|integer(int64)|The pool offline fetch error unique identifier.|
| pool_id|integer(int64)|The PoolHash table index for the pool this offline fetch error refers.|
| fetch_time|string(date-time)|The UTC time stamp of the error.|
| pmr_id|integer(int64)|The PoolMetadataRef table index for this offline data.|
| fetch_error|string(undefined)|The text of the error.|
| retry_count|integer(int32)|The number of retries.|
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
