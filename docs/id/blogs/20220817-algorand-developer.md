# SubQuery Algorand Support --- Developer Deep Dive

![](https://miro.medium.com/max/1400/0*dWLpYWAAOhdRK6Dc)

It has happened - SubQuery became the first open indexing data protocol to serve the Algorand ecosystem! SubQuery delivers on its promise and continues adding support for new emerging ecosystems with a colossal development potential.

Algorand is a high-performing Layer-1 blockchain bringing fast, frictionless, and inclusive technology to everyone as it reshapes a wide breadth of industries. We believe in Algorand's continous growth and want to support developers by providing them with an excellent, cutting-edge indexing solution for their dApps.

SubQuery is a flexible open data indexer that is flexible and fast. Our open indexing tool is designed to help developers build their own API in hours, and it's designed to index chains incredibly quickly with the assistance of dictionaries (pre-computed indices). Our experience with customers across all verticals in Polkadot, Avalanche and Cosmos (wallets, networks, explorers, NFT, DeFi, scanners, etc) has helped us build this.

This is still in its early versions, and while we consider it far beyond a "beta", we would appreciate it if any bugs can be reported to our team so we can address them quickly.

![](https://miro.medium.com/max/1400/0*kDXe6VnwNjOAeyKE)

> _"At the start of this year we set out with a goal of adding support for 5 new networks to SubQuery. Algorand completes this list and shows that SubQuery is now a true multi-chain indexer. Our focus on new generation 3 layer 1's show that we are dedicated to providing support on ecosystems where we believe the next generation of builders will find home. Algorand is the perfect example of an emergent ecosystem with huge growth potential!"_ - James Bayly, COO of SubQuery

## Why Use SubQuery?

Although there is already a diverse application ecosystem in Algorand, there is a serious lack of some key developer tools and infrastructure services. In most cases when we asked teams how they solved their data indexing needs, we heard that most had built their own solution. Teams had built custom implementations of indexers specifically for their app.

At SubQuery we have an open-source SDK that is easy to use and lightning quick. It provides you with a standard GraphQL endpoint, or you can just query the postgres database directly. With it you can index a unique set of data assets and apps that allows you to build a superior product that blows your competition out of the water! We give you flexibility to get the data that you need in the shape that works best for you.

Reliability is key, and you need a reliable and scalable platform to host it. [SubQuery's Managed Service](https://managedservice.subquery.networks) is an industry leading hosting solution for all customers that is serving hundreds of millions of daily requests. We provide our enterprise level customers with services such as dedicated databases, redundant clusters, intelligent multi-cluster routing, and advanced monitoring and analytics. It will support your application when you are ready and will scale with you.

And finally, in a few months you'll be able to completely decentralise your SubQuery infrastructure with the SubQuery Network, the future of Web3 infrastructure. The SubQuery Network will index and service your projects data to the global community in an incentivised and verifiable way. It is designed to support any SubQuery project from any layer-1 network including Algorand, so you can take advantage of the scale of the unified SubQuery Network from launch.

## Getting Started

The best way is to [start with our starter project for Algorand](https://github.com/subquery/algorand-subql-starter) which contains a running project with an example of all mapping functions. You'll need to install a recent version of @subql/cli via npm i -g @subql/cli@latest.

If you don't want to use this kitchen sink example, you can follow a [step by step guide](https://academy.subquery.network/quickstart/quickstart_chains/algorand.html) on how to create a real world example. Follow our quick start tutorial to see how to index all the PLANET token transfers on the Algorand network in less than 15 minutes.

With SubQuery's Algorand integration, we can:

- Index Blocks: Access all blocks and their hash and height.
- Index Transactions: Access all data associated with transactions including type, sender, amount, application id. As well as powerful filtering to only index the required data and nothing else.
- Keep the track of historical changes by querying data at specific rounds (block heights in Algorand).

SubQuery's Algorand implementation has been designed to operate almost identically to SubQuery's support across other chains, and in a similar way to the Graph's approach in Ethereum.

We've updated the SubQuery Documentation to add Algorand specific information to the general [SubQuery documentation](https://academy.subquery.network/quickstart/quickstart_chains/algorand.html). You can start by following this excellent [Algorand Quick Start Guide](https://academy.subquery.network/quickstart/quickstart_chains/algorand.html) here.

## Deploying your Project to SubQuery's Managed Service

Although you will always be able to run your project in your own infrastructure easily, SubQuery's [Managed Service](https://managedservice.subquery.networks) now supports Algorand projects. Some of the biggest projects depend on SubQuery's [enterprise level](./20211228-enterprise-hosted.md) managed service and now you can too. You can[ follow the guide here](https://academy.subquery.network/run_publish/publish.html#) to publish your Algorand SubQuery project to our managed service. Please note that you must host your SubQuery project [using IPFS](https://academy.subquery.network/run_publish/publish.html) rather than GitHub.

You can update your managed service project as much as you want. We even have a [staging deployment slot](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) to allow you to do seamless blue/green upgrades without any downtime. This staging slot can also be used to run a clean instance of SubQuery with a fresh database for complete background reindexing of your project. Customers usually link the staging slot to the staging/development versions of their applications.

Once deployed, you can access your project using the SubQuery Explorer, and make requests directly from your app to the provided GraphQL endpoint. Let us know if you would like us to enable more advanced features like [GraphQL subscriptions](https://academy.subquery.network/run_publish/subscription.html), more complex queries, and [aggregation functions.](https://academy.subquery.network/run_publish/aggregate.html)

## Summary

Today we are sharing the following:

- Open source SDK for advanced Indexing of blocks and transactions in Algorand
- Support for Algorand in our free [enterprise level](https://academy.subquery.network/run_publish/aggregate.html) managed service
- Intuitive documentation in the [SubQuery Academy](https://academy.subquery.network/quickstart/quickstart_chains/algorand.html)
- [Algorand dictionary support](https://explorer.subquery.network/subquery/subquery/Algorand-Dictionary) to rapidly increase indexing speed

In the coming weeks you can expect:

- A step by step learning course in the SubQuery Academy
- Full support for Algorand in our decentralised SubQuery Network

## Links

- [Algorand Quick Start Guide](https://academy.subquery.network/quickstart/quickstart_chains/algorand.html)
- [SubQuery Academy (Documentation)](https://academy.subquery.network/)
- [Example Algorand Project --- Kitchen sink example](https://github.com/subquery/algorand-subql-starter)
- [Example Algorand Project --- Algorand Planet Watch](https://github.com/jamesbayly/algorand-planet-watch)
- [Managed Service](https://explorer.subquery.network/)
- [Publish your own Algorand Project to the Managed Service](https://project.subquery.network/login)

## Tentang SubQuery

[SubQuery](https://subquery.network/) is the universal data indexing toolkit facilitating the construction of Web3 applications of the future. A SubQuery project is a complete API to organise and query data from Layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche, Terra, and Cosmos (starting with Juno) projects, this data-as-a-service allows developers to focus on their core use case and front-end without wasting time building a custom backend for data processing activities. In the future, the SubQuery Network intends to replicate this scalable and reliable solution in a completely decentralised manner.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
