---
id: quick-start
sidebar_label: 'Quick Start' 
sidebar_position: 2
---

# Let's code...or not

The quickest way to get started is with the **CardanoBI SaaS API**.

### What you'll need

- An API Key & Secret
- A shell terminal
- [Node.js](https://nodejs.org/en/download/) version 16.14 or above


## Getting your API Key & Secret

To take part in our alpha, please email us at [info@cardanobi.io](mailto:info@cardanobi.io) and we'll reply with your key details.

## Making your first call

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="shell" label="Shell">

Open a shell terminal and run the following.

- Get a Bearer token from CardanoBI's mainnet identity server:

```shell
curl -d "client_id=YOUR-KEY&client_secret=YOUR-SECRET&grant_type=client_credentials" -X POST https://mainnet.cardanobi.io:5000/connect/token
```

- Make your first request by looking up the latest block on mainnet:

```shell
curl https://mainnet.cardanobi.io:4000/api/core/blocks/latest -H "Authorization: Bearer YOUR-BEARER-TOKEN" -H "Client-Api-Key: YOUR-API-KEY" | jq .
```

</TabItem>
<TabItem value="js" label="Node.js">

Install our Node.js SDK
```
$ git clone https://github.com/cardanobi/cardanobi-js.git
cd cardanobi-js
npm install
```

Import CardanoBI.js in your project.
```js
import { CardanoBI } from './cardanobi-js/CardanoBI.js'
```

Now make your first request by looking up the latest block on mainnet:
```js
const CBI = await new CardanoBI({ apiKey: "YOUR-KEY", apiSecret: "YOUR-SECRET"});
const block = await CBI.core.blocks.latest_();
console.log(block);
```

</TabItem>
</Tabs>

## Getting a response

The response should look something like this:
```js
{
  "id": 8528164,
  "hash": "8IdAgx3TwivX4Vd2VILqaphK4ureKZknIDteFAW4tsM=",
  "epoch_no": 399,
  "slot_no": 87420423,
  "epoch_slot_no": 415623,
  "block_no": 8525299,
  "previous_id": 8528163,
  "slot_leader_id": 7047273,
  "size": 4898,
  "time": "2023-03-16T17:11:54",
  "tx_count": 4,
  "proto_major": 8,
  "proto_minor": 0,
  "vrf_key": "vrf_vk1s70lx90mjpsnwcafyh53erkgy9syejw7knpm9wt0rzd2a0kd2t6s9xl6vm",
  "op_cert": "9rSP/aG6pEKGj96mURztusIjnWnn+rbb5pxnlkUoEoQ=",
  "op_cert_counter": 1659973637,
  "hash_hex": "f08740831dd3c22bd7e157765482ea6a984ae2eade299927203b5e1405b8b6c3",
  "op_cert_hex": "f6b48ffda1baa442868fdea6511cedbac2239d69e7fab6dbe69c679645281284"
}
```

And that's it! You are all set to start using the CardanoBI SaaS API. 🤓