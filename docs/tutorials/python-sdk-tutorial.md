---
title: Python SDK Tutorial
id: python-sdk-tutorial
sidebar_label: 'Python SDK Tutorial' 
sidebar_position: 1
---

import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import DocsBadge from '@site/src/components/DocsBadge'; 


<!-- ## Python 3.0 SDK Tutorial -->
<center>
<img src="/img/tutorials/python.sdk.webp" width="650" style={{ borderRadius: '35px' }} />
</center>

<center>
This tutorial explores our new Python SDK.
</center>

### Abstract

**CardanoBI** is the first fully Open-Source Business Intelligence API Layer for Cardano.

It exposes data grouped in 3 distinct Domains:

- **Core Domain** - Direct access to all on-chain data of Cardano (accounts, blocks, transactions, contracts...) enabling foundational blockchain functions and interactions.
- **Business Intelligence Domain** - Provides derived data from the Core, offering valuable data analysis and statistical insights to enhance strategic decision-making.
- **Partner Domain** - Provides insights into the business value outcome of companies/projects building utilities on Cardano. It combines on-chain and off-chain data and serves as the data layer to power the `Bloombergs` of Cardano.

Our **Python SDK** allows Python developers to integrate the CardanoBI API in their own Python application.

Python developers can directly augment their application's code base, with a streamlined access to Cardano's data, without having to get outside of their technology stack.

This allows building on Cardano using Python, in a more efficient and consistent manner, promoting shorter time to market and greater software quality.

### Overview

In this tutorial, you will learn how to:
- Set up CardanoBI
- Create a request to get the latest block on-chain information

### Prerequisites
- [git](https://git-scm.com/)
- [Python](https://www.python.org/downloads/) (version 3.0 or above)

### Step 1 - Setting up CardanoBI

Go to [cardanobi.io](https://cardanobi.io/), register and create a Project. 

This will give you access to our free **No Frills** user plan and provide you with API Key/Secret to gain access to CardanoBI API endpoints.


### Step 2 - Identifying the relevant CardanoBI API endpoint for the task

To retrieve the latest block on-chain information, we will simply use the following endpoint:

:::tip Endpoint 

<EndpointBadge type="GET"/> Latest block<br/>

:::

You can view the full description of this endpoint by following this link:<br/>
[<DocsBadge type="docs"/> `Latest block: /api/core/blocks/latest`](https://docs.cardanobi.io/docs/core-domain/Blocks/#get-latest-block)

Now let's get some data out, shall we?

### Step 3 - Clone the CardanoBI Python SDK

Clone the SDK from GitHub:

```bash
git clone https://github.com/cardanobi/cardanobi-python.git
```

### Step 4 - Set up your Python Environment

Create and activate a new virtual environment:

```bash
python3 -m venv cbi-sdk-env
source cbi-sdk-env/bin/activate
```

Install dependencies:

```bash
cd cardanobi-python
pip install -e .
```

### Step 5 - Create your Tutorial Script

Create a new directory for your tutorial code:

```bash
mkdir cbi-python-tutorial
cd cbi-python-tutorial
```

Create a new Python file, tutorial.py, and open it in your favourite editor:


```python title="tutorial.py"
import asyncio
import json
from cardanobi import CardanoBI

async def main():
    CBI = CardanoBI(apiKey="YOUR_API_KEY", apiSecret="YOUR_API_SECRET")
    latest = await CBI.core.blocks.latest_()
    print(json.dumps(latest, indent=4))
    await CBI.client.session.close()

asyncio.run(main())

```

### Step 6 - Run your Tutorial Script

Execute your script to see the latest block information:

```bash
python tutorial.py
```

At the time of writing the latest block was:

```json
{
    "id": 10633732,
    "hash": "1YLwwNX/YP8hnkQInD8gldDeD37VLBSyp3h/HINLaJk=",
    "epoch_no": 498,
    "slot_no": 129915993,
    "epoch_slot_no": 143193,
    "block_no": 10597467,
    "previous_id": 10633731,
    "slot_leader_id": 8743348,
    "size": 28442,
    "time": "2024-07-20T13:31:24",
    "tx_count": 13,
    "proto_major": 8,
    "proto_minor": 0,
    "vrf_key": "vrf_vk1mzeafklpqyk6j44tefjas6x95ghce8sh9y94sp3g8m2gvf9ngueqfxx09t",
    "op_cert": "AfUPSh1/1vBfek4EUuEOnX7hJwiGJMNDDPsDzPzB3pI=",
    "op_cert_counter": 6,
    "hash_hex": "d582f0c0d5ff60ff219e44089c3f2095d0de0f7ed52c14b2a7787f1c834b6899",
    "op_cert_hex": "01f50f4a1d7fd6f05f7a4e0452e10e9d7ee127088624c3430cfb03ccfcc1de92"
}
```

### Wrap Up

Congratulations on completing the tutorial!

You've successfully set up and used the CardanoBI Python SDK to fetch data from the Cardano blockchain.

We encourage you to explore further and contribute to the SDK to help make it even better. Your contributions and feedback are welcome!

For more information and to contribute, visit our [GitHub repository](https://github.com/cardanobi/cardanobi-python).

Feel free to explore other endpoints and capabilities of the CardanoBI SDK. Happy coding!


