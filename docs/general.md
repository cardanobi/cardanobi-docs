---
id: general
sidebar_label: 'General' 
sidebar_position: 2
---
import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# General Information

## Domains

The `CardanoBI API` is organized by domains.

There are currently 3 domains:

<Tabs groupId="domains">
<TabItem value="core" label="Core">

:::info Core Domain Summary 
Core is the fundamental domain where all on-chain entities and interactions live.
:::

</TabItem>

<TabItem value="bi" label="BI">

:::info BI Domain Summary 
BI is an enhanced domain on top of Core, this domain integrates and aggregates data from Core, enabling comprehensive analytics and insights for informed decision-making.
:::

</TabItem>
<TabItem value="partner" label="Partner">

:::info Partner Domain Summary 
Partner is a specialized domain, dedicated to the integration of third-party data, either on-chain or off-chain, expanding the scope of available data and enhancing the depth and breadth of business analytics and intelligence.
:::

</TabItem>
</Tabs>

## Environments

`CardanoBI` supports 3 Cardano environments:

<Tabs groupId="envs">
<TabItem value="mainnet" label="Mainnet">

:::info Mainnet Environment
This is the `live` environment where real business interactions happen.
:::

</TabItem>
<TabItem value="preprod" label="Preprod">

:::info Preprod Environment
This is a replica of the `mainnet` environment in its parameters (epoch duration, etc...).
This is the environment where non-regression tests are carried out before mainnet release.
:::

</TabItem>
<TabItem value="preview" label="Preview">

:::info Preview Environment
This is a lighter environment with much shorter epochs (1 day).
It is geared towards iterative and incremental development with short feedback loop.
:::

</TabItem>
</Tabs>

## Base Endpoints

`CardanoBI` base endpoints are Cardano environment specific.

<Tabs groupId="envs">
<TabItem value="mainnet" label="Mainnet">

:::info Mainnet Base Endpoints
https://cardanobi.io/api
:::

</TabItem>
<TabItem value="preprod" label="Preprod">

:::info Preprod Base Endpoints
https://preprod.cardanobi.io/api
:::

</TabItem>
<TabItem value="preview" label="Preview">

:::info Preview Base Endpoints
https://preview.cardanobi.io/api
:::

</TabItem>
</Tabs>

## Responses

All responses are JSON objects or arrays of JSON objects.

Data is returned in ascending order (oldest first, newest last).

## HTTP Return Codes

<Tabs groupId="response-type"> 
<TabItem value="200" label="200" attributes={{className: styles.green}}> 

`OK: Successful request.`
</TabItem> 
<TabItem value="400" label="400" attributes={{className: styles.red}}> 

`Bad Request: The request was unacceptable, often due to missing a required parameter.`

</TabItem> 
<TabItem value="401" label="401" attributes={{className: styles.red}}> 

`Unauthorized: No valid API key provided.`

</TabItem> 
<TabItem value="402" label="402" attributes={{className: styles.red}}> 

`Quota Exceeded: This API key has reached its usage limit on request.`

</TabItem> 
<TabItem value="403" label="403" attributes={{className: styles.red}}> 

`Access Denied: The request is missing a valid API key or token.`

</TabItem> 
<TabItem value="404" label="404" attributes={{className: styles.red}}> 

`Not Found: The requested resource cannot be found.`

</TabItem> 
<TabItem value="429" label="429" attributes={{className: styles.red}}> 

`Too Many Requests: This API key has reached its rate limit.`

</TabItem> 
</Tabs>

## Pagination

By default the number of records in the response will be limited to 20.

Some endpoints allow to increase this up to 100.

Please refer to the API Documentation of individual endpoints for further information.

:::info Pagination Query Parameters

- page_size : integer [1 - 100] : will set the maximum page size of the response
- page_no : integer [>0] : will set the page number of the response
- order : string : 'asc' (default) will order the records in ascending order, 'desc' will order the records in descending order

:::

## ODATA Query Options

All endpoints support $select, $filter, $orderby, $count query options.

More information on how to use them can be found [here](https://learn.microsoft.com/en-us/odata/concepts/queryoptions-overview). 



