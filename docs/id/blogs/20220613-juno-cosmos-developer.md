# SubQuery Cosmos/Juno Support --- Developer Deep Dive

![](https://miro.medium.com/max/1400/0*29dsUJbyIb34mYkF)

Ever since the unfortunate collapse of the Terra/Luna ecosystem, we've been talking to other ecosystems in the Cosmos (pun intended) and have found our first home in [Juno](https://www.junonetwork.io/). We've been adapting our original Terra support behind the scenes and testing it with key development launch partners. We are proud to release our wider support for Cosmos with our first implementation specific to Juno, in this article we share a detailed developer guide and roadmap for all of the Cosmos community to use to solve their data indexing needs.

SubQuery is an open data indexer that is flexible and fast. Our open indexing tool is designed to help developers build their own API in hours, and it's designed to index chains incredibly quickly with the assistance of dictionaries (pre-computed indices). Our experience with customers across all verticals in Polkadot and Avalanche (wallets, networks, explorers, NFT, DeFi, scanners, etc) has helped us build this.

This is still in its early versions, and while we consider it far beyond a "beta", we would appreciate it if any bugs can be reported to our team so we can address them quickly.

## Why Use SubQuery?

The application ecosystem has thrived in Cosmos even though there is a serious lack of some key developer tools and infrastructure services. In most cases when we asked teams how they solved their data indexing needs, it was:

- **Build your own solution:** A custom implementation running by yourself built specifically for your app. But why reinvent the wheel? SubQuery is focusing on building a reliable and fast open indexer --- we're here to save you time
- **Designing smart contracts for queries:** Some teams are even implementing custom quirks in their smart contracts to specifically allow for more advanced queries specific to their application logic.

At SubQuery we have an open-source SDK that is easy to use and lightning quick. It provides you with a standard GraphQL endpoint, or you can just query the postgres database directly. With it you can index a unique set of data from your own smart contracts that allows you to build a superior product that blows your competition out of the water! We give you flexibility to get the data that you need in the shape that works best for you.

Reliability is key, and you need a reliable and scalable platform to host it. [SubQuery's managed service](https://managedservice.subquery.networks) is an industry leading hosting solution for all customers that is serving hundreds of millions of daily requests to the biggest projects in Polkadot. We provide our [enterprise level customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) with services such as dedicated databases, redundant clusters, intelligent multi-cluster routing, and advanced monitoring and analytics. It will support your application when you are ready and will scale with you.

And finally, in a few months you'll be able to completely decentralise your SubQuery infrastructure with the SubQuery Network, the future of Web3 infrastructure. The SubQuery Network will index and service your projects data to the global community in an incentivised and verifiable way. It is designed to support any SubQuery project from any layer-1 network including Cosmos, so you can take advantage of the scale of the unified SubQuery Network from launch.

## Getting Started

The best way is to start with [our starter project](https://github.com/subquery/juno-subql-starter) which contains a running project with an example of all mapping functions. You'll need to install a recent version of `@subql/cli` via `npm i -g @subql/cli@latest`.

If you don't want to see a kitchen sink example, you can follow a step by step guide on how to create a real world example. Follow our [quick start tutorial](https://doc.subquery.network/quickstart/quickstart-cosmos.html) to see how to index all Terra Development Fund votes on the Juno network in less than 15 minutes.

With SubQuery's Comos integration, we can index the following:

- BlockHandler: All blocks and their hash and height
- TransactionHandler: All transactions and their hash, height, and timestamp
- EventHandler: All smart contract transfer events and their hash, height, sender, recipient, and amount, this can be filtered to a specific smart contract
- MessageHandler: All smart contract messages and their hash, height, contract, sender, and execute_msg data, this can be filtered to a specific smart contract

SubQuery supports indexing Juno's smart contracts with both transaction and message subscriptions and handlers. You can see a working example of Smart Contract support in the [starter project](https://github.com/subquery/juno-subql-starter) and read the documentation on the [SubQuery Documentation](http://doc.subquery.network/build/manifest.html#mapping-handlers-and-filters).

SubQuery's Cosmos implementation has been designed to operate almost identically to SubQuery's Polkadot support, and in a similar way to the Graph's approach. We've updated the [SubQuery Documentation](https://doc.subquery.network/) to add Cosmos specific information to the general SubQuery documentation. You can start by following this [excellent getting started guide here](https://doc.subquery.network/quickstart/quickstart-cosmos.html).

## Our Cosmos Support

As part of our multi-chain ambitions, we are planning to support the entire Cosmos ecosystem in the long term. Our first implementation starts specifically with Juno where we have completed most of our testing and are confident that this works.

However, we are confident that this SubQuery implementation should work seamlessly with most other Cosmos chains that implement CosmWasm. While SubQuery's Cosmos support begins with [Juno](https://www.junonetwork.io/), the service should work with [Cronos](https://cronos.org/), [OKExChain](https://www.okex.com/), [Osmosis](https://osmosis.zone/), [Secret Network](https://scrt.network/), [Stargaze](https://stargaze.zone/), and [Injective](https://injective.com/). We have additionally successfully tested this on CosmosHub, all you need to do is add a non-pruned archive node endpoint and import correct protobuf messages in the [project.yaml](https://github.com/subquery/juno-subql-starter/blob/a177837a36c86fda8fb2bdbd7a83bb408c89d4bd/project.yaml#L24).

## Deploying your Project to SubQuery's Managed Service

Although you will always be able to run your project in your own infrastructure easily, [SubQuery's managed service](https://managedservice.subquery.networks) now supports Cosmos projects. Some of the biggest projects depend on SubQuery's [enterprise level](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) managed service and now you can too. As part of our launch partner agreement, we are providing you with 3 months free hosting.

You can [follow the guide here](https://doc.subquery.network/run_publish/publish.html) to publish your Cosmos SubQuery project to our managed service. Please note that you must host your [SubQuery project using IPFS](https://university.subquery.network/run_publish/publish.html) rather than GitHub.

You can update your managed service project as much as you want. We even have a [staging deployment slot](https://blog.subquery.network/blogs/20210604-Deployment-Slots-are-here-for-SubQuery-Projects.html) to allow you to do seamless blue/green upgrades without any downtime. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

Once deployed, you can access your project using the SubQuery Explorer, and make requests directly from your app to the provided GraphQL endpoint. Let us know if you would like us to enable more advanced features like [GraphQL subscriptions](https://university.subquery.network/run_publish/subscription.html), more complex queries, and [aggregation functions](https://university.subquery.network/run_publish/aggregate.html).

Please notify us once you have deployed your project as we may need to assist with fine tuning the batch size to ensure that our Juno archive node runs well for your project.

## Summary

Today we are sharing the following:

- Advanced Indexing of blocks, event
- Full support for Cosmos in our free [enterprise level](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) managed service
- Intuitive documentation in the [SubQuery Documentation](https://doc.subquery.network/)

In the coming weeks you can expect:

- Cosmos Dictionary: Pre-computed indices to [dramatically reduce indexing time](https://blog.subquery.network/blogs/20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.html)
- A step by step learning course in the [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
- Full support for Cosmos in our decentralised SubQuery Network (you'll soon see a project in our current Frontier test network)

---

The launch of our beta support means SubQuery provides multi-chain support for three leading layer-1's focusing on the multi-chain approach (Polkadot, Avalanche, and Cosmos). We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

_James Bayly_

## Links

- [Getting Started Guide](https://doc.subquery.network/quickstart/quickstart-cosmos.html)
- [SubQuery University (Documentation)](https://doc.subquery.network/)
- [Example Cosmos (Juno) Project --- Kitchen sink example](https://github.com/subquery/juno-subql-starter)
- [Example Cosmos (Juno) Project --- Terra development fund votes](https://github.com/jamesbayly/juno-terra-developer-fund-votes)
- [Managed Service](https://explorer.subquery.network/)
- [Publish your own Cosmos Project to the Managed Service](https://project.subquery.network/)

## Tentang SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche, and now Cosmos projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
