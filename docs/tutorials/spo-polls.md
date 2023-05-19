---
id: spo-polls
sidebar_label: 'SPO Polls' 
sidebar_position: 1
---

import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import DocsBadge from '@site/src/components/DocsBadge'; 


# 
## CIP-0094: the beginning of Cardano's decentralized governance.
<center>
<img src="https://cardanobi.io/img/ada_net_vect.png" width="650"/>
</center>

This tutorial explores the on-chain data related to [CIP-0094](https://github.com/cardano-foundation/CIPs/tree/cip-spo-polls/CIP-0094).

### Abstract

The Cardano Foundation proposes a mechanism for polling Cardano stake pool operators on specific topics. Polls are done on-chain through transaction metadata and authenticated through stake pool credentials (Ed25519 cold key). The goal is to gather opinions on governance matters such as protocol parameter updates. This standard is an inclusive interim solution while the work on a larger governance framework such as [CIP-1694](https://github.com/cardano-foundation/CIPs/pull/380) continues.

To learn more about the details of CIP-0094 please follow this [link](https://github.com/cardano-foundation/CIPs/tree/cip-spo-polls/CIP-0094)

### Overview

In this tutorial, you will learn how to:
- Set up CardanoBI
- Create a request to get the list of Polls curently defined on chain
- Create a request to get the results of a Poll given its hash
- Understand better the key data attributes at play in CIP-0094

### Prerequisites
- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/download/) (version 16.14 or above) Or [curl](https://curl.se/)

At the time of writing (19/05/2023), Nodejs being the only CardanoBI SDK available, we will focus on it for now but depending on when you're reading this, others may be available and we will make sure to update this tutorial accordingly.



### Step 1 - Setting up CardanoBI

The CardanoBI API endpoints we will be using throughout this tutorial are not restricted, so you don't need an API Key to call them, for that reason, we can move on swiftly to the next step.


### Step 2 - Getting the list of Polls defined on chain

To retrieve this information, we will simply go ahead and call this endpoint:

:::tip Endpoint 

<EndpointBadge type="GET"/> All polls<br/>

:::

You can view the full description of this endpoint by following this link:<br/>
[<DocsBadge type="docs"/> `All polls: /api/core/polls`](https://docs.cardanobi.io/docs/core-domain/Polls/#get-all-polls)

Now let's get some data out, shall we?

<Tabs>
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

Now instantiate a CardanoBI object without parameters, by doing so it will use ```mainnet``` as the default network.

:::tip Tips 

If you want to check polls on ```preprod```, simply pass a ```network``` parameter like so:

```js
const CBI = await new CardanoBI({network: "preprod"});
```

:::

Lastly, call the ```polls_``` method, available in the ```core``` domain object:

```js
const CBI = await new CardanoBI();
const all_polls = await CBI.core.polls_();
console.log(all_polls);
```

</TabItem>

<TabItem value="shell" label="Shell">

Open a shell terminal and run the following:

```shell
curl https://mainnet.cardanobi.io:4000/api/core/polls | jq .
```

</TabItem>
</Tabs>

At this stage you should have been able to retrieve the current list of polls defined on mainnet:

```json
[
  {
    "poll_hash": "96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211",
    "tx_hash_hex": "fae7bda85acb99c513aeab5f86986047b6f6cbd33a8e11f11c5005513a054dc8",
    "start_epoch_no": 412,
    "end_epoch_no": 416,
    "json": "{\"0\": [\"Which setup would you prefer to be put in place from Q3 2023 onw\", \"ards?\"], \"1\": [[\"Keep k at 500 and minPoolCost at 340 ada\"], [\"Keep k at 500 and halve minPoolCost to 170 ada\"], [\"Increase k to 1000 and keep minPoolCost at 340 ada\"], [\"Increase k to 1000 and halve minPoolCost to 170 ada\"], [\"I would prefer to abstain\"], [\"None of the provided options\"]]}"
  }
]
``` 

As you can see in the above json response, at the time of writing (19/05/2023), only one poll was available on ```mainnet```.

<details><summary>GOING FURTHER</summary>
<p>

Let's look at the attributes of the response:
- ```poll_hash``` is the blake2b-25 hash of the question asked by the poll.
- ```tx_hash_hex``` is the hexadecimal encoding of the hash of the transaction that carried the metadata label ```94``` and therefore the question of the poll.
- ```start_epoch_no``` and ```end_epoch_no``` represents the epoch range for the poll, starting from the epoch when votes can be casted, ending with the epoch when a snapshot of votes/stakes are taken to build up the final poll results.
- ```json``` is the raw on-chain metadata defining both question and response, the response being a multiple choice.

</p>
</details>


### Step 3 - Let's deep dive in the first ever SPO Poll votes!

To retrieve the votes, we will simply go ahead and call this endpoint:

:::tip Endpoint 

<EndpointBadge type="GET"/> One poll full details by hash<br/>

:::

You can view the full description of this endpoint by following this link:<br/>
[<DocsBadge type="docs"/> `All polls: /api/core/polls/{poll_hash}`](https://docs.cardanobi.io/docs/core-domain/Polls/#get-one-poll-full-details-by-hash)

(Drum roll) And the results are...not too fast, a bit more work is required:

<Tabs>
<TabItem value="js" label="Node.js">

Call the ```polls_``` method, this time passing as a parameter the ```poll hash``` retrieved previously, in order to get the full detailed breakdown of votes for this particular poll:

```js
const poll_results = await CBI.core.polls_({poll_hash: '96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211'});
console.log(poll_results);
```

</TabItem>

<TabItem value="shell" label="Shell">

Open a shell terminal and run the following:

```shell
curl https://mainnet.cardanobi.io:4000/api/core/polls/96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211 | jq .
```

</TabItem>
</Tabs>

At this stage you should be able to see the current tally for this historical vote or the full result even, if you ran the above past the end date of the vote.

Either way, you should be able to see a json similar to the one depicted in the below snapshot.

<details><summary>PARTIAL SNAPSHOT AS OF 19/05/2023 2.30 BST</summary>
<p>

```json
{
    "poll_hash": "96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211",
    "question": "Which setup would you prefer to be put in place from Q3 2023 onwards?",
    "choices": [
        "Keep k at 500 and minPoolCost at 340 ada",
        "Keep k at 500 and halve minPoolCost to 170 ada",
        "Increase k to 1000 and keep minPoolCost at 340 ada",
        "Increase k to 1000 and halve minPoolCost to 170 ada",
        "I would prefer to abstain",
        "None of the provided options"
    ],
    "tx_hash_hex": "fae7bda85acb99c513aeab5f86986047b6f6cbd33a8e11f11c5005513a054dc8",
    "start_epoch_no": 412,
    "end_epoch_no": 416,
    "json": "{\"0\": [\"Which setup would you prefer to be put in place from Q3 2023 onw\", \"ards?\"], \"1\": [[\"Keep k at 500 and minPoolCost at 340 ada\"], [\"Keep k at 500 and halve minPoolCost to 170 ada\"], [\"Increase k to 1000 and keep minPoolCost at 340 ada\"], [\"Increase k to 1000 and halve minPoolCost to 170 ada\"], [\"I would prefer to abstain\"], [\"None of the provided options\"]]}",
    "summary": {
        "votes": {
            "total": 149,
            "counts": [
                16,
                13,
                38,
                70,
                0,
                12
            ],
            "pcts": [
                0.10738255,
                0.087248325,
                0.25503355,
                0.46979865,
                0,
                0.08053691
            ]
        },
        "stakes": {
            "total": 2433955285288878,
            "sums": [
                572638208726258,
                455418812740480,
                346833715874855,
                793308915228817,
                0,
                265755632718468
            ],
            "pcts": [
                0.23527063,
                0.18711059,
                0.14249797,
                0.32593405,
                0,
                0.10918674
            ]
        },
        "delegators": {
            "total": 151956,
            "sums": [
                23374,
                40087,
                15290,
                49413,
                0,
                23792
            ],
            "pcts": [
                0.15382084,
                0.26380664,
                0.10062123,
                0.32517967,
                0,
                0.15657164
            ]
        }
    },
    "votes": [
        {
            "ticker_name": "SPIDR",
            "pool_name": "SpidarPool",
            "pool_id": "pool1tnl3yxmj8848vq6meduhz9n5520a7dwsh05r5gfyvlatj87k3jl",
            "tx_hash_hex": "3533cdb973f024c9b3ab1a592c27cb2263ba37c510cb9083a1a791d4d4876194",
            "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
            "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
            "extra_sign_hash": "5cff121b7239ea76035bcb79711674a29fdf35d0bbe83a212467fab9",
            "cold_vkey": "5cff121b7239ea76035bcb79711674a29fdf35d0bbe83a212467fab9",
            "delegator_count": 54,
            "delegated_stakes": 160016196440
        },
        {
            "ticker_name": "PANL",
            "pool_name": "PANL Stake Pool",
            "pool_id": "pool1qhs3cf9ymc2nvmrd2j8cs36cj9jdqgnqk6s9ngyvy2lz5s8rak8",
            "tx_hash_hex": "7e0e501f2f80a6c91287814d8e7f4ce0c8c61902c66921d2b9e72b5364e46a7c",
            "response": "Increase k to 1000 and halve minPoolCost to 170 ada",
            "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 3}",
            "extra_sign_hash": "05e11c24a4de15366c6d548f8847589164d02260b6a059a08c22be2a",
            "cold_vkey": "05e11c24a4de15366c6d548f8847589164d02260b6a059a08c22be2a",
            "delegator_count": 31,
            "delegated_stakes": 374170765492
        },
      ...
        {
            "ticker_name": "ACI",
            "pool_name": "Blockademia",
            "pool_id": "pool144m894gswuy3se407ma5870nkaw5ylykrak73gf4kpepj50ulfa",
            "tx_hash_hex": "65bd01f3d840643a98513f5e1617671ee6ff25069728c44affdc839f5b880ecd",
            "response": "Increase k to 1000 and keep minPoolCost at 340 ada",
            "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 2}",
            "extra_sign_hash": "ad7672d51077091866aff6fb43f9f3b75d427c961f6de8a135b07219",
            "cold_vkey": "ad7672d51077091866aff6fb43f9f3b75d427c961f6de8a135b07219",
            "delegator_count": 223,
            "delegated_stakes": 1471160856776
        },
        {
            "ticker_name": "ALKUL",
            "pool_name": "Lalkul",
            "pool_id": "pool1vuwavngz2hums4ll34z9afdjkn826wnzgy2kpmnynhd0wr5qxkh",
            "tx_hash_hex": "96d94a521d373475fed2c7b0bf6e3d6392beea6cbac961fb0b1721215d5ad27c",
            "response": "Increase k to 1000 and keep minPoolCost at 340 ada",
            "response_json": "{\"2\": \"0x96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211\", \"3\": 2}",
            "extra_sign_hash": "671dd64d0255f9b857ff8d445ea5b2b4cead3a62411560ee649ddaf7",
            "cold_vkey": "671dd64d0255f9b857ff8d445ea5b2b4cead3a62411560ee649ddaf7",
            "delegator_count": 37,
            "delegated_stakes": 1223644341079
        }
    ]
}
```

</p>
</details>

:::tip BETWEEN THE LINES 

When you look at number of votes, a good majority of votes went to ```"Increase k to 1000 and keep minPoolCost at 340 ada"``` and ```"Increase k to 1000 and halve minPoolCost to 170 ada"```.

When you look at stakes and delegators, these 2 choices are still in the lead but by a much narrower margin.

This is not surprising, small pools are yearning for more even distribution of stakes whilst larger pools are pretty much happy with a status quo. 
But how does one creates an insentive for stakes to move around in the first place?

Increasing ```k``` would do that for sure, but with no guarantee that moving stakes would get delegated to small SPO of course.

Now we won't open the Pandora's box here in this tutorial, we will leave it at that for now, but small SPOs we love you :smiley:!

:::

### Step 4 - Understanding better the key data attributes at play in CIP-0094

One of the key elements in understanding CIP-0094's inner workings, that got us baffled for a while, was the ability to link a vote transaction to the stake pool that cast the vote in the first place.

This link is done via the cold verification key that each pool use to sign their vote transaction.

In ```cardano-db-sync``` the cold key hash is stored in the table ```extra_key_witness``` against each vote transaction ID.

And that's great, but how on earth do you link each cold key to its corresponding stake pool, I hear you ask.

:::tip cardano-cli to the rescue 

Well the answer wasn't to be found in ```cardano-db-sync```, but on chain only, and to query this information, no other than ```cardano-cli``` was able to get the job done :smiley:

:::

```sh

 cardano-cli query pool-params --mainnet --stake-pool-id pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc
 
 ```

The above query seeks to retrieve the on-chain pool parameters for a pool, given by its ID ```pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r``` a.k.a. ```ADADCT``` and would return this json on mainnet:

<details><summary>ADACT POOL PARAMS</summary>
<p>

```json
{
    "futurePoolParams": null,
    "poolParams": {
       "cost": 340000000,
        "margin": 0.04,
        "metadata": {
        "hash": "42771b05b30f180890980613b3147f6bb797fe1f8a83e92d39a3135ec9559ea8",
        "url": "https://adacapital.io/adact_mainnet.json"
        },
        "owners": [
        "fa504163dcaa366236a08e9cee1e4be4a609623b72b55be8edae9c1f"
        ],
        "pledge": 100000000000,
        "publicKey": "22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395",
        "relays": [
        {
            "single host address": {
            "IPv4": "51.105.18.17",
            "IPv6": null,
            "port": 3001
            }
        },
        {
            "single host address": {
            "IPv4": "52.182.224.171",
            "IPv6": null,
            "port": 3001
            }
        }
        ],
        "rewardAccount": {
        "credential": {
            "key hash": "fa504163dcaa366236a08e9cee1e4be4a609623b72b55be8edae9c1f"
        },
        "network": "Mainnet"
        },
        "vrf": "9be345bcbcb0cf0559b1135467fd2e4c78c741898cdf8bcb737b2dc5122632df"
    },
    "retiring": null
}
```
</p>
</details>

Part of it and essential to tying up stake pools to on-chain votes, is the ```publickey``` which is the hash of the cold verification key of the above pool!


### Conclusions

This wraps up our first ever ```CardanoBI``` tutorial.

We hope you found it useful and informative.

There will be plenty more, in the months to come, once we move from Alpha to Beta and we release more platform features.

Please reach out with any comments, questions or suggestions.

Until next time, take care :green_heart:




