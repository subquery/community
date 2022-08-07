# Index up to 4x Faster with SubQuery's Parallelised Processing

![](https://miro.medium.com/max/1400/0*mFfyYp2Ok-4HH9-b)

**_SubQuery is now a lot faster with support for worker threads. This feature can speed up your indexing by up to 4 times!_**

At SubQuery, we're always focusing our efforts towards improving indexing speed. Our aim is to be the fastest multi-chain decentralised indexer! Today we take a big step forward with support for parallelisation using worker threads. This feature will move block fetching and block processing into its own worker thread, which results in increased efficiency of indexing. It should speed up indexing by up to 4 times (depending on the particular project).

## Why worker threads?

NodeJs is by default a single-threaded programming language using the event loop execution model, which means that NodeJs applications can run one function at a time.

In case of intensive CPU processing, the event loop gets blocked and we can not execute other instructions until the heavy processing power function is completed. Therefore, we started using NodeJs worker threads to run some instructions in multiple threads.

## How Do I Start?

The feature is disabled by default while we are still testing it. However, we are so excited we wanted to let you know about it and get your feedback. You can easily enable it using the -workers=<number> flag. Note that the number of available CPU cores strictly limits the usage of worker threads. For now, it is only available for Substrate and Cosmos and will soon be integrated for Avalanche.

Our hosted service doesn't offer this feature currently and we expect to add support for paid and partner projects shortly.

Find out more here and if you have any feedback, please let us know!

[https://github.com/subquery/subql/pull/1103](https://github.com/subquery/subql/pull/1103)

## Tentang SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit facilitating the construction of Web3 applications of the future. A SubQuery project is a complete API to organise and query data from Layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche, Terra, and Cosmos (starting with Juno) projects, this data-as-a-service allows developers to focus on their core use case and front-end without wasting time building a custom backend for data processing activities. In the future, the SubQuery Network intends to replicate this scalable and reliable solution in a completely decentralised manner.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
