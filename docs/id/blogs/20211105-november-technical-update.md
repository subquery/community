# SubQuery November Technical Update: EVM and Manifest Updates

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Read more for our technical deep dive into the latest release of SubQuery**

# Support for External Chain Type Files in Project Manifest

Today is the launch of [version 0.2.0](https://doc.subquery.network/create/manifest/) of our project manifest file (`project.yaml`). This new version provides developers with various improvements that have been requested by customers.

Most importantly, you can now reference a chain type definition file that has all the custom types included when you’re indexing a custom substrate chain. This quickly allows you to connect a new SubQuery project to any substrate based chain, including all of Kusama’s parachains. This should be a standard chain type file that declares the specific types supported by this blockchain in either `.json` or `.yaml` format.

This solution allows you to avoid copying and managing chain type definitions in the manifest itself, and allows you to just clone the [published chain type files listed in repositories like PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[You can read about the new manifest file, including how you can migrate your projects to it, here in our updated docs.](https://doc.subquery.network/create/manifest/)

# Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff).

Today we are following up on that announcement with all the developer resources that you need to get started.

Currently, there is no open-source tool which allows developers to flexibly collect and query data across both Ethereum and Polkadot/Kusama. This limitation can cause dApps solutions within Moonriver to be siloed into the smart contract layer and thereby limit their potential to consumers across both thriving networks. This partnership with Moonbeam brings a complete and unified data indexing solution for all blockchain data within Moonriver and will greatly benefit Moonriver’s growing application ecosystem.

**SubQuery is going to be a guest on the next Moonbuilders Workshop on Wednesday December 1st,** [**register for it here**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/moonbeam/) The process to index Moonbeam data is only two steps:

## Step 1: Add the Moonbeam Custom Data Source

We have created a data processor specifically made to work with Moonbeam’s implementation of [Frontier](https://github.com/paritytech/frontier). It allows you to reference specific ABI resources used by the processor to parse arguments and the smart contract address that the events is from or the call is made to. [You can read more here](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery introduces more advanced filters than other indexers, allowing filtering of non-contract transactions, transaction senders, contracts and indexed log arguments. This allows developers to build a wide variety of projects that cater to their specific data needs.

## Step 2: Index Moonbeam Data

Just like a normal SubQuery project, you use a mapping function to transform off chain data to the GraphQL entities that you define, the difference is that instead of a `SubstrateEvent` or `SubstrateExtrinsic`, your mapping function will receive a `MoonbeamCall` or `MoonbeamEvent` which are based on Ether's [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) or [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) type. [You can read more about these here](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Read the full documentation on this process here](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Example Project

There is a complete example project that indexes eth `transfer` events and `approve` smart contract calls. The code for this example project is [here on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) or accessible via the [live SubQuery project on SubQuery Explorer here](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

The bulk of the changes happen in the Manifest file (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/moonbeam/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/moonbeam/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Note that SubQuery introduces more advanced filters than other indexers for Moonbeam EVM and these improvements should significantly benefit developers.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

If you are familiar with how Substrate based SubQuery project are made, you’ll notice how similar the mapping functions are for the new Moonriver support. Each mapping function receives a `MoonbeamCall` or `MoonbeamEvent` and processes them just like any other SubQuery project.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/moonbeam) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Clone the example project on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

As you can see, creating a Moonriver or Moonbase Alpha project that indexes both Substrate and EVM data in a single project is extremely simple and largely similar. You can use SubQuery’s advanced scaffolding tools to speed up your dApp development and take advantage or richer indexing for you data to build more intuitive dApps. We can’t wait to see what you build!

## Tentang SubQuery

SubQuery is a data aggregation layer that operates between the layer-1 blockchains (such as Moonriver and Polkadot) and DApps. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam is an Ethereum-compatible smart contract platform on the Polkadot network that makes it easy to build natively interoperable applications. This Ethereum compatibility allows developers to deploy existing Solidity smart contracts and DApp frontends to Moonbeam with minimal changes. As a parachain on the Polkadot network, Moonbeam will benefit from the shared security of the Polkadot relay chain and integrations with other chains that are connected to Polkadot. Currently in active development by PureStake, Moonbeam is expected to reach MainNet by Q4 2021. Learn more: [https://moonbeam.network/](https://moonbeam.network/).
