# SubQuery Developer Guide: Cronos

![](https://miro.medium.com/max/1400/0*yY8BqaoCIHt51SiW)

We are proud to widen our support for Cosmos through our latest integration with Cronos! In this article we share a detailed developer guide for all of the Cronos community to use to solve their data indexing needs.

SubQuery is an open data indexer that is flexible and fast. Our indexing tool is designed to help developers build their own API in hours, and it's designed to index chains incredibly quickly with the assistance of dictionaries (pre-computed indices). Our experience with customers across all verticals in Polkadot, Algorand, Cosmos and Avalanche (wallets, networks, explorers, NFT, DeFi, scanners, etc) has helped us build this fast and flexible indexer.

## Why Use SubQuery?

The application ecosystem has thrived in Cronos even though there is a serious lack of some key developer tools and infrastructure services. In most cases when we asked teams how they solved their data indexing needs, they would tell us they use on one of the following options:

- Build your own solution: A custom implementation running by yourself built specifically for your app. But why reinvent the wheel? SubQuery is focusing on building a reliable and fast open indexer --- we're here to save you time and energy.
- Designing smart contracts for queries: Some teams are even implementing custom quirks in their smart contracts to specifically allow for more advanced queries specific to their application logic.
- Only index EVM data: Some existing indexers currently work on Crono's Ethermint smart contracts --- but there is no way to index the tendermint consensus side of Cronos

At SubQuery we have an open-source SDK that is easy to use and lightning quick. It provides you with a standard GraphQL endpoint, or you can just query the postgreSQL database directly. With it you can index a unique set of data from your own smart contracts that allows you to build a superior product that blows your competition out of the water! We give you flexibility to get the data that you need in the shape that works best for you.

Reliability is key, and you need a reliable and scalable platform to host it. [SubQuery's managed service](https://subquery.network/managedservices) is an industry leading hosting solution for all customers that is serving hundreds of millions of daily requests to the biggest projects in Polkadot, Cosmos, Avalanche, Algorand & beyond. We provide our [enterprise level customers](./20211228-enterprise-hosted.md) with services such as dedicated databases, redundant clusters, intelligent multi-cluster routing, and advanced monitoring and analytics. It will support your application when you are ready and will scale with you.

And finally, in the future you'll be able to completely decentralise your SubQuery infrastructure with the SubQuery Network, the future of Web3 infrastructure. The SubQuery Network will index and service your projects data to the global community in an incentivised and verifiable way. It is designed to support any SubQuery project from any layer-1 network including Cronos, so you can take advantage of the scale of the unified SubQuery Network from launch.

## Getting Started

The best way to begin is by following our [Cronos-specific quick start](https://academy.subquery.network/quickstart/quickstart_chains/cosmos-cronos.html) tutorial to see how to index Cronos data. It will step you through how to create a real world example indexing all transfers of Cro Crow Token.

Cronos is an EVM compatible (Ethermint) chain, as such there are two options for indexing Cronos data. You can index chain data via the standard Cosmos RPC interface, or via Ethereum APIs. For Cronos, we provide a starter project and tutorial for each, and in the [quick start guide](https://academy.subquery.network/quickstart/quickstart_chains/cosmos-cronos.html) you can compare the two approaches.

Alternatively, you can just start with [our boilerplate starter project](https://github.com/subquery/cosmos-subql-starter/tree/main/Cronos) which contains a running project with an example of all mapping functions. You'll need to install a recent version of *@subql/cli* via *npm i -g @subql/cli@latest.*

With SubQuery's Cronos integration, we can index the following:

- cosmos/BlockHandler: All blocks and their hash and height
- cosmos/EthermintEvmCall: All EVM transactions and their hash, height, and timestamp
- cosmos/EthermintEvmEvent: All EVM transaction logs and their hash, height, sender, recipient, and amount, this can be filtered to a specific smart contract
- ethereum/TransactionHandler: All EVM transactions and their hash, height, and timestamp
- ethereum/LogHandler: All EVM transaction logs and their hash, height, sender, recipient, and amount, this can be filtered to a specific smart contract

SubQuery's Cronos implementation has been designed to operate almost identically to SubQuery's Avalanche, Polkadot, and Cosmos support, and in a [similar way to the Graph's approach](https://academy.subquery.network/build/graph-migration.html). We've updated the [SubQuery Documentation](https://academy.subquery.network/build/cosmos-evm.html) to add Cronos specific information to the general SubQuery documentation.

## Our Cronos Support

As part of our multi-chain ambitions, we are planning to support the entire Cosmos ecosystem in the long term.

While SubQuery's Cosmos support begins with [Juno](https://www.junonetwork.io/), [Osmosis](https://osmosis.zone/), [Stargaze](https://stargaze.zone/), [Fetch.ai](https://fetch.ai/) and [Cronos](https://cronos.org/), we are confident that this SubQuery implementation should work seamlessly with most other Cosmos chains that implement Ethermint and CosmWasm, such as [OKxChain](https://www.okex.com/), [Secret Network](https://scrt.network/), and [Injective](https://injective.com/). We have also successfully deployed this on [CosmosHub](https://cosmos.network/), so all you need to do is add a non-pruned archive node endpoint and import correct protobuf messages in the [project.yaml](https://github.com/subquery/juno-subql-starter/blob/a177837a36c86fda8fb2bdbd7a83bb408c89d4bd/project.yaml#L24).

## Deploying your Project to SubQuery's Managed Service

Although you will always be able to run your project in your own infrastructure easily, [SubQuery's managed service](https://subquery.network/managedservices) now supports Cronos projects. Some of the biggest projects depend on SubQuery's [enterprise level](./20211228-enterprise-hosted.md) managed service and now you can too. You can [follow the guide here](https://academy.subquery.network/run_publish/publish.html) to publish your Cronos SubQuery project to our managed service.

You can update your managed service project as much as you want. We even have a [staging deployment slot](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) to allow you to do seamless blue/green upgrades without any downtime. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

Once deployed, you can access your project using the SubQuery Explorer, and make requests directly from your app to the provided GraphQL endpoint. You can also enable more advanced features like automated [historical state tracking](https://academy.subquery.network/run_publish/historical.html), [GraphQL subscriptions](https://academy.subquery.network/run_publish/subscription.html), and [aggregation functions](https://academy.subquery.network/run_publish/aggregate.html).

## Resources

Today we are sharing the following:

- Advanced Indexing of blocks, events
- Full support for Cronos in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
- Intuitive documentation in the [SubQuery Documentation](https://academy.subquery.network/quickstart/quickstart_chains/cosmos-cronos.html)
- Cronos Dictionary: Pre-computed indices to [dramatically reduce indexing time](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)

In the future you can expect full support for Cronos in our decentralised SubQuery Network (you'll soon see a project in our current Frontier test network)

---

SubQuery provides multi-chain support for five leading layer-1's (Polkadot, Algorand, Flare, Avalanche, and Cosmos) delivering on our multi-chain approach. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

## 서브쿼리란

[SubQuery](https://subquery.network/) is a blockchain developer toolkit facilitating the construction of Web3 applications of the future. A SubQuery project is a complete API to organise and query data from Layer-1 chains. Currently servicing Polkadot, Avalanche, Algorand, Cosmos and Flare projects, this data-as-a-service allows developers to focus on their core use case and front-end without wasting time building a custom backend for data processing activities. In the future, the SubQuery Network intends to replicate this scalable and reliable solution in a completely decentralised manner.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/subquery) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/c/SubQueryNetwork)
