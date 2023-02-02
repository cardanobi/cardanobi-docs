--- 
title: '' 
sidebar_label: 'Relays' 
sidebar_position: 9 
--- 
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import ODataBadge from '@site/src/components/ODataBadge'; 

<span class="theme-doc-version-badge badge badge--primary">Version: 1.0</span> 

:::tip Endpoints Summary 

<EndpointBadge type="GET"/> All relays<br/>
<EndpointBadge type="GET"/> One pool relays by pool update unique identifier<br/>
<EndpointBadge type="GET"/> One pool relays by VRF key hash<br/>
<EndpointBadge type="GET"/> All relays <ODataBadge/><br/>
<EndpointBadge type="GET"/> One pool relays by pool update unique identifier <ODataBadge/><br/>

:::
## <span class="theme-doc-version-badge badge badge--success">GET</span> All relays

Returns all pool relays.

`GET /api/core/pools/relays/updates`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const relays_updates = await CBI.core.pools.relays.updates_();
console.log(relays_updates); 
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
  "id": 1,
  "update_id": 1,
  "ipv4": null,
  "ipv6": null,
  "dns_name": "preprod-node.world.dev.cardano.org",
  "dns_srv_name": null,
  "port": 30000
 },
 "...",
 {
  "id": 20,
  "update_id": 18,
  "ipv4": "20.98.184.3",
  "ipv6": null,
  "dns_name": null,
  "dns_srv_name": null,
  "port": 3001
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
| id|integer(int64)|The pool relay unique identifier.|
| update_id|integer(int64)|The PoolUpdate table index this PoolRelay entry refers to.|
| ipv4|string(undefined)|The IPv4 address of the relay.|
| ipv6|string(undefined)|The IPv6 address of the relay.|
| dns_name|string(undefined)|The DNS name of the relay.|
| dns_srv_name|string(undefined)|The DNS service name of the relay.|
| port|integer(int32)|The port number of relay.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool relays by pool update unique identifier

Returns the relays for one pool given a pool update unique identifier.

`GET /api/core/pools/relays/updates/{update_id}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| update_id|The pool update unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const relays_updates = await CBI.core.pools.relays.updates_({ "update_id": 1 });
console.log(relays_updates); 
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
  "id": 1,
  "update_id": 1,
  "ipv4": null,
  "ipv6": null,
  "dns_name": "preprod-node.world.dev.cardano.org",
  "dns_srv_name": null,
  "port": 30000
 },
 "...",
 {
  "id": 1,
  "update_id": 1,
  "ipv4": null,
  "ipv6": null,
  "dns_name": "preprod-node.world.dev.cardano.org",
  "dns_srv_name": null,
  "port": 30000
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
| id|integer(int64)|The pool relay unique identifier.|
| update_id|integer(int64)|The PoolUpdate table index this PoolRelay entry refers to.|
| ipv4|string(undefined)|The IPv4 address of the relay.|
| ipv6|string(undefined)|The IPv6 address of the relay.|
| dns_name|string(undefined)|The DNS name of the relay.|
| dns_srv_name|string(undefined)|The DNS service name of the relay.|
| port|integer(int32)|The port number of relay.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool relays by VRF key hash

Returns the relays for one pool given its VRF key hash.

`GET /api/core/pools/{vrf_key_hash}/relays/updates`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| vrf_key_hash|The pool VRF key in HEX format.|string|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const relays_updates = await CBI.core.pools.relays.updates_({ "vrf_key_hash": "ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd" });
console.log(relays_updates); 
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
  "id": 1,
  "update_id": 1,
  "ipv4": null,
  "ipv6": null,
  "dns_name": "preprod-node.world.dev.cardano.org",
  "dns_srv_name": null,
  "port": 30000
 },
 "...",
 {
  "id": 20,
  "update_id": 18,
  "ipv4": "20.98.184.3",
  "ipv6": null,
  "dns_name": null,
  "dns_srv_name": null,
  "port": 3001
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
| id|integer(int64)|The pool relay unique identifier.|
| update_id|integer(int64)|The PoolUpdate table index this PoolRelay entry refers to.|
| ipv4|string(undefined)|The IPv4 address of the relay.|
| ipv6|string(undefined)|The IPv6 address of the relay.|
| dns_name|string(undefined)|The DNS name of the relay.|
| dns_srv_name|string(undefined)|The DNS service name of the relay.|
| port|integer(int32)|The port number of relay.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> All relays <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns all pool relays.

`GET /api/core/odata/poolsrelays`

### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsrelays = await CBI.core.poolsrelays_({ "odata": true });
console.log(poolsrelays); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsRelays",
 "value": [
  {
   "id": 1,
   "update_id": 1,
   "ipv4": null,
   "ipv6": null,
   "dns_name": "preprod-node.world.dev.cardano.org",
   "dns_srv_name": null,
   "port": 30000
  },
  "...",
  {
   "id": 20,
   "update_id": 18,
   "ipv4": "20.98.184.3",
   "ipv6": null,
   "dns_name": null,
   "dns_srv_name": null,
   "port": 3001
  }
 ],
 "@odata.nextLink": "https://preprod.cardanobi.io/api/core/odata/poolsrelays?$skip=20"
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
| id|integer(int64)|The pool relay unique identifier.|
| update_id|integer(int64)|The PoolUpdate table index this PoolRelay entry refers to.|
| ipv4|string(undefined)|The IPv4 address of the relay.|
| ipv6|string(undefined)|The IPv6 address of the relay.|
| dns_name|string(undefined)|The DNS name of the relay.|
| dns_srv_name|string(undefined)|The DNS service name of the relay.|
| port|integer(int32)|The port number of relay.|
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

## <span class="theme-doc-version-badge badge badge--success">GET</span> One pool relays by pool update unique identifier <span class="theme-doc-version-badge badge badge-odata"> OData</span>

Returns the relays for one pool given a pool update unique identifier.

`GET /api/core/odata/poolsrelays/{update_id}`

### 🎰 Parameters 

|Name|Description|Type|Required| 
|---|---|---|---|
| update_id|The pool update unique identifier|integer|true|


### 👨‍💻 Code samples 

<Tabs> 
<TabItem value="js" label="Node.js"> 

```js 
const CBI = await new CardanoBI({ apiKey: 'YOUR-KEY', apiSecret: 'YOUR-SECRET' }); 
const poolsrelays = await CBI.core.poolsrelays_({ "odata": true, "update_id": 1 });
console.log(poolsrelays); 
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
 "@odata.context": "https://preprod.cardanobi.io/api/core/odata/$metadata#PoolsRelays",
 "value": [
  {
   "id": 1,
   "update_id": 1,
   "ipv4": null,
   "ipv6": null,
   "dns_name": "preprod-node.world.dev.cardano.org",
   "dns_srv_name": null,
   "port": 30000
  },
  "...",
  {
   "id": 1,
   "update_id": 1,
   "ipv4": null,
   "ipv6": null,
   "dns_name": "preprod-node.world.dev.cardano.org",
   "dns_srv_name": null,
   "port": 30000
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
| id|integer(int64)|The pool relay unique identifier.|
| update_id|integer(int64)|The PoolUpdate table index this PoolRelay entry refers to.|
| ipv4|string(undefined)|The IPv4 address of the relay.|
| ipv6|string(undefined)|The IPv6 address of the relay.|
| dns_name|string(undefined)|The DNS name of the relay.|
| dns_srv_name|string(undefined)|The DNS service name of the relay.|
| port|integer(int32)|The port number of relay.|
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
