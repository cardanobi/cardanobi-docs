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

- Get a Bearer token from CardanoBI's preprod identity server:

```shell
curl -d "client_id=client_auto_1&client_secret=secret&grant_type=client_credentials" -X POST https://preprod.cardanobi.io:5000/connect/token
```

- Make your first request by getting the details for epoch #30 in preprod:

```shell
curl https://preprod.cardanobi.io:4000/api/core/epochs/30 -H "Authorization: Bearer YOUR_BEARER_TOKEN" | jq .
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

Now make your first request by getting the details for epoch #30 in preprod.
```js
const CBI = await new CardanoBI({ apiKey: "YOUR-KEY", apiSecret: "YOUR-SECRET", network: "preprod" });

(async () => {
  try {
    const epoch = await CBI.epochs(30);
    console.log(epoch);
  } catch (error) {
    console.error(error);
  }
})();
```

</TabItem>
</Tabs>

## Getting a response

The response should look something like this:
```js
{
  id: 31,
  out_sum: 102865306257160,
  fees: 4942589267,
  tx_count: 24249,
  blk_count: 20386,
  no: 30,
  start_time: '2022-10-29T00:00:25',
  end_time: '2022-11-02T23:59:27'
}
```

And that's it! You are all set to start using the CardanoBI SaaS API. 🤓