---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

## Overview

:::caution

The CardanoBI API uses **OAuth 2.0 Bearer Tokens** to authenticate requests.

To be issued, **Bearer Tokens** require **API keys & secrets**.

You can view and manage your API keys in your [Dashboard](https://cardanobi.io/dashboard).

:::

:::tip HOW TO CREATE YOUR FIRST API KEY

- [Register](https://cardanobi.io/bff/login?returnUrl=/dashboard) with your email or use one of the proposed Thirdparty IDP (Google, Github).

- Go to your [Dashboard](https://cardanobi.io/dashboard) and create your first **API Key**.

:::


:::danger

Do not under any circumstances share your **API Key** or ***API Secret***.

If your think any of them have been compromized then please delete the API Key from your dashboard and create a new Key/Secret pair.

:::


## Identity Server Base Endpoints

:::caution

Whilst we encourage our end-users to leverage our SDK to access the **CardanoBI API**, we understand that our SDK offering being currently limited to Nodejs/javascript, some might want to be able to write their SDK in their language of choice.

To that end and in order to retrieve **Bearer Tokens** from your **API Key & Secret** you will need to query the following Identity Server endpoints.

:::

:::info CardanoBI IDS Base Endpoint
https://cardanobi.io:44010/connect/token
:::

## Requesting Manually a Bearer Token

To request a ```Bearer Token``` you need to make a ```POST``` request to the IDS Base Endpoint and include your ```API Key``` , your ```API-SECRET``` and specify ```client_credentials``` as the grant type:

```js
curl -d "client_id=YOUR-KEY&client_secret=YOUR-SECRET&grant_type=client_credentials" -X POST https://cardanobi.io:44010/connect/token
```