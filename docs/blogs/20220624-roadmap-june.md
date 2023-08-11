# SubQuery Technical Roadmap Update

<<<< Image goes here >>>

**SubQuery announces key milestones including TGE timeline**

Since the [last Roadmap update back in October](./20211029-roadmap-october.md), we've been working incredibly hard behind the scenes on our three main focus areas:

- Building the SubQuery Network
- Improving the core product
- Growing a robust and inclusive community

Over the last 8 months we've come a long way! With the successful launch of the [SubQuery Frontier testnet](./20220330-frontier-testnet.md), onboarding hundreds of new projects to our [Managed Service](https://subquery.network/managedservices), expanding to other [leading layer-1 ecosystems](./20220321-avalache.md), and growing our community to over 110,000 across [Twitter](https://twitter.com/subquerynetwork) and [Discord](https://discord.com/invite/SubQuery).

We're well overdue to release a detailed and updated technical roadmap for the second half of 2022.

<<<< Image goes here >>>

## Our Past

Since our founding in [February 2021](./20210201-Announcing_SubQuery.md), we've come an incredibly long way. Focusing on the time since our [last roadmap update](./20211029-roadmap-october.md) in October, we've completed 4 internal milestones (milestones 0 to 3 - I know, we're a bunch of developers!).

Milestone 0 concerntrated on laying the foundations for us to begin working on our Network, by inproving our SDK it add support for Proof of Indexing, a cruicial validation mechanism that we use to confirm two indexers are consistent. Additionally we worked to grow our developer community by launching the [SubQuery Academy](./20211018-subquery-launches-the-subquery-academy.md) and adding support for [Polkadot's EVM solutions](../customer_announcements/20211028-moonbeam-evm.md). Finally, our enterpise customers benefited from upgrades to our [Premium Enterprise Service](./20211228-enterprise-hosted.md) in our Managed Service.

Milestones 1 and 2 are where the development of the SubQuery Network really ramped up, with an relatively operational test network at the end of this phase. We didn't forget our SDK though, with constant improvements to our tooling to ease the developer experience and prepare for extending support to other layer-1s.

Milestone 3 was here SubQuery finally became a multi-chain indexer, with support launched for [Avalanche](./20220321-avalache.md), [Terra](./20220509-terra.md), and then [Cosmos via Juno](./20220609-juno-cosmos.md). The addition of support for three new layer-1's shows you how the core work that we did months ago is now paying dividends, it's becoming easier than ever for SubQuery to expand to more and more networks and we are well on our way to becoming the leading indexer in web3.

Additionally, you will all know that the [SubQuery Frontier](./20220330-frontier-testnet.md) started with much fanfare. Over two seasons (the first being a small alpha test and the second a closed beta), we pushed the test network though its paces and simulated real traffic load thanks to the support from 156 excellent indexers.

## Where we are now — Milestone 4 (End of Q2 2022)

### SQT Public Sale

TODO

### Public testnet launch

From Tuesday 28th June, we're going to kick off the final round of the SubQuery Frontier testnet. This will be completely open to the public, everyone is welcome to try it out and help us push it to the limit. By completing all the challenges, you might even be invited to become a genesis participant when the mainnet launches!

This is the final stage of our test network. We will release everything to our test network and expect participants to push it to its limits. This includes scale and load testing, fine tuning our economic models and coefficients, testing our documentation and onboarding processes, and making sure that you can transact with a precursor to SQT within it.

### Internal micropayments testing

This is a key feature for us. We are going to be doing a lot of work within the Polkadot ecosystem to manage and handle micropayments within SubQuery. The advantage of Polkadot is tiny transaction fees relative to other networks like Ethereum, meaning micropayments are much more relevant to. This will roll out to our incentivised test network after we carry out thorough internal testing.

### Query insights and reporting

We are handling millions of data requests to SubQuery projects each day. Most of our customers don’t have analytics in their own dApps for user privacy but they still need to know how their dApps and SubQuery projects are operating.

### SQT Network contract v1 and external code audit

All important networks require a through code audit by an external partner to ensure that the network’s code is secure and scalable. SubQuery is no different, so we’ll be working with key partners for a full code audit here and also continue to receive code audits for our smart contracts going forward.

### (Re)indexing Speed Improvements

SubQuery is built to be faster than others and we're never going to stop working on this metric. This allows our customers to iterate thier projects more rapidly, index larger and more complicated datasets, and means SubQuery can go on to support advanced chains with significantly faster block production rates.

## Milestone 5 — End of Q3 2022

### SubQuery Network launch 🚀

This is where everything really starts. Initially, we will onboard and reward participants of the test network, and then it will be completely open to everyone in the community. The [SubQuery Foundation](./20220617-foundation-launch.md) will lead the efforts to grow and foster this network, and you can expect that it will be a hive of activity from the outset.

### Complete Governance Module and Transfer to SubQuery Foundation

The SubQuery Foundation will be established with the goal of promoting and proliferating the use of the SubQuery Network and to develop its ecosystem and community.

Below is a visualisation of how we envision the decentralisation to be achieved. The exact design and execution plan will be developed by the Foundation with the input from the community. The governance modules that we build will be based off these principles and help us transition to the goal of complete decentralisation.

![](https://miro.medium.com/max/1400/0*ialARNew5hx2cFOl)

### Indexing Excellence Programme

During the early stages of the SubQuery Network, we expect that some indexers will rise above the others to provide superior service and run their infrastructure in creative ways. This programme will be to support this research by certain indexers, and then to share it with the community so all can benefit from the learnings. The goal is to help hundreds, if not thousands, of indexers become experts as providing data in a reliable, performance, and scalable way.

### Managed Service Feature Updates

We've got a lot of improvements planned for our [enterprise level Managed Service](https://subquery.network/managedservices). As the number of customers grows, and the raw number of daily requests expands into the billions, we are going to be releasing new UX updates and features that really take our premium service to the next level.

### Contract V2 (PAYG and Dispute Resolution)

This will be our second major set of updated contracts that will be completed and need to be professionally audited by our partners [Hacken](./20220412-hacken-audit.md). This contract will support the full pay as you go (PAYG) method that will be built from our research into [internal micropayments](#internal-micropayments-testing).

## Milestone 6 - End of Q4 2022

### Centralised Exchange launch

In order to drive increased adoption of SQT, we anticipate launching the token on one if not multiple leading CEX during this period as well as many other DEXs (including Acala's on chain implementation).

### DEX/AMM liquidity provision

In order to enhance the liquidity of the SQT token, we will provision liquidity with both centralised and decentralized exchanges (DEX). This will enable token holders to generate returns on their investment.

### Light client verification

Light client verification will help the SubQuery Network address any disputes between two indexers on the same SubQuery project will less manual work. Over the long term, we may be able to create a consensus algorithm to even decide the correct version to atomate this dispute resolution flow.

### Service requests from libp2p

Currently, indexers require their own static IP address for the SubQuery project endpoint that they run and expose on the network. Enabling serving requests from libp2p means that we can eliminate the need for a static public IP address.

### Contract V3 (Open agreements)

The final major release to complete the [original whitepaper](https://static.subquery.network/whitepaper.pdf) will occur when we finish and audit smart contracts that deal with open agreements. From here the Foundation (representing the community) will decide exactly where we head to next.

## Milestone 7 — Long term plans

### Launch our own Parachain

Although we initially plan release on [Acala's parachain](./20211125-subquery-network-acala.md) to get SubQuery Network released and scaled quicker, in the long-term SubQuery also intends to launch on it’s own parachain and integrate itself even more in the ecosystem.

This self owned parachain will allow us to further innovate in tools that can help developers build the web3 future faster. We want to aim for a parachain slot once we have a proven track record behind us and the data, community, and token to support it.

### SubQuery Foundation transitions towards a DAO

This one is a long way off, but it’s always our dream the SubQuery eventually becomes a community owned DAO. We’ve said many times that the community plays a huge part in SubQuery, everything that we do is for our customers — becoming a DAO is the embodiment of that focus.

That being said, this is a long long way off, and will only be done once we are absolutely confident of SubQuery's success and future with the community.

## About SubQuery

[SubQuery](https://subquery.network) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. The protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/SubQuery) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
