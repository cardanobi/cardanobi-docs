--- 
title: '' 
sidebar_label: 'Hashes' 
sidebar_position: 4 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All pool key hash<br/>
<EndpointBadge type="GET"/> All pool key hash <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool key hash

Returns every unique pool key hash.

`GET /api/core/pools/hashes`

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
  "hash_raw": 0, 
  "view": 0, 
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
| id|integer(int64)|The pool hash unique identifier.|
| hash_raw|string(byte)|The raw bytes of the pool hash.|
| view|string(undefined)|The Bech32 encoding of the pool hash.|
| hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All pool key hash <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns every unique pool key hash.

`GET /api/core/odata/poolshashes`

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
  "hash_raw": 0, 
  "view": 0, 
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
| id|integer(int64)|The pool hash unique identifier.|
| hash_raw|string(byte)|The raw bytes of the pool hash.|
| view|string(undefined)|The Bech32 encoding of the pool hash.|
| hash_hex|string(undefined)|The hexadecimal encoding of the pool hash.|
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
