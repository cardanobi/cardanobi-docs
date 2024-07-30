---
title: Rust SDK Tutorial
id: rust-sdk-tutorial
sidebar_label: 'Rust SDK Tutorial' 
sidebar_position: 1
---

import styles from '@site/src/components/HomepageFeatures/styles.module.css'; 
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EndpointBadge from '@site/src/components/EndpointBadge'; 
import DocsBadge from '@site/src/components/DocsBadge'; 


<!-- ## Rust 3.0 SDK Tutorial -->
<center>
<img src="/img/tutorials/rust.sdk.webp" width="650" style={{ borderRadius: '35px' }} />
</center>

<center>
This tutorial explores our new Rust SDK.
</center>

### Abstract

**CardanoBI** is the first fully Open-Source Business Intelligence API Layer for Cardano.

It exposes data grouped in 3 distinct Domains:

- **Core Domain** - Direct access to all on-chain data of Cardano (accounts, blocks, transactions, contracts...) enabling foundational blockchain functions and interactions.
- **Business Intelligence Domain** - Provides derived data from the Core, offering valuable data analysis and statistical insights to enhance strategic decision-making.
- **Partner Domain** - Provides insights into the business value outcome of companies/projects building utilities on Cardano. It combines on-chain and off-chain data and serves as the data layer to power the `Bloombergs` of Cardano.

Our **Rust SDK** allows Rust developers to integrate the CardanoBI API in their own Rust application.

Rust developers can directly augment their application's code base, with a streamlined access to Cardano's data, without having to get outside of their technology stack.

This allows building on Cardano using Rust, in a more efficient and consistent manner, promoting shorter time to market and greater software quality.

### Overview

In this tutorial, you will learn how to:
- Set up CardanoBI
- Create a request to get the latest block on-chain information

### Prerequisites
- [git](https://git-scm.com/)
- [Rust](https://www.rust-lang.org/tools/install) (version 1.75 or above)

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

### Step 3 - Clone the CardanoBI Rust SDK

Clone the SDK from GitHub:

```bash
git clone https://github.com/cardanobi/cardanobi-rust.git
```

### Step 4 - Set up your Rust Project

Create and activate a new virtual environment:

```bash
cargo init --bin cbi-rust-tutorial
cd cbi-rust-tutorial
```

Open your project with your favourite IDE and configure dependencies by modifying the following file:

```bash title="Cargo.toml"
[dependencies]
cardanobi-rust = { path = "../../../cardanobi-rust" }
tokio = { version = "1.37.0", features = ["full"] }
serde_json = "1.0"
```

:::danger Important Notice

Make sure to adjust the `cardanobi-rust` path according to your environment.

:::

### Step 5 - Clean and Update Dependencies

Before you build your project, clean any old build artifacts and update dependencies:

```bash
cargo clean
cargo update
```

### Step 6 - Create your Tutorial Script

Edit the main.rs file to include your usage of the SDK:


```rust title="main.rs"
use cardanobi_rust::{CardanoBI}; 
use std::collections::HashMap;
use serde_json::to_string_pretty;

#[tokio::main]
async fn main() {
    let cbi = CardanoBI::new(
        Some("YOUR_API_KEY"), 
        Some("YOUR_API_SECRET"), 
        Some("mainnet"))
        .await
        .expect("Failed to initialize CardanoBI");

    let blocks_latest = cbi.core.blocks.latest_(HashMap::new())
        .await
        .expect("Failed to call endpoint");

    match to_string_pretty(&blocks_latest) {
        Ok(pretty_json) => println!("blocks_latest: {}", pretty_json),
        Err(e) => println!("Failed to serialize JSON: {:?}", e),
    }
}

```

### Step 7 - Run your Tutorial Script

Execute your script to see the latest block information:

```bash
cargo run
```

At the time of writing the latest block was:

```json
{
  "block_no": 10640199,
  "epoch_no": 500,
  "epoch_slot_no": 153153,
  "hash": "vLbiZpua+nSOZeqryNmfVGPRF1mXowIf7QC7ZUARKLQ=",
  "hash_hex": "bcb6e2669b9afa748e65eaabc8d99f5463d1175997a3021fed00bb65401128b4",
  "id": 10677052,
  "op_cert": "/Vjk63Pzi5mfnWnH12obiOYKkNVAHsfQt6TbeyQf9nE=",
  "op_cert_counter": 42,
  "op_cert_hex": "fd58e4eb73f38b999f9d69c7d76a1b88e60a90d5401ec7d0b7a4db7b241ff671",
  "previous_id": 10677051,
  "proto_major": 8,
  "proto_minor": 0,
  "size": 17884,
  "slot_leader_id": 5118137,
  "slot_no": 130789953,
  "time": "2024-07-30T16:17:24",
  "tx_count": 5,
  "vrf_key": "vrf_vk10u2ppz4q9r739aul8jtyk5c2v7zmtqlungf9gj6jkxkwx2c8296swd4ef3"
}
```

### Wrap Up

Congratulations on completing the tutorial!

You've successfully set up and used the CardanoBI Rust SDK to fetch data from the Cardano blockchain.

We encourage you to explore further and contribute to the SDK to help make it even better. Your contributions and feedback are welcome!

For more information and to contribute, visit our [GitHub repository](https://github.com/cardanobi/cardanobi-rust).

Feel free to explore other endpoints and capabilities of the CardanoBI SDK. Happy coding!


