# SubQuery Now Supports Multi-chain Indexing!

![](https://miro.medium.com/max/1400/0*2Ut7l7IaGOWZV7eV)

SubQuery's goals have always been to provide fast and efficient indexing to the widest variety of chains possible. We've worked hard to bring SubQuery to a number of different layer-1s as well as all Polkadot parachains, Cosmos zones, and Avalanche subnets.

Today we're taking this multi-chain approach one step further with the introduction of [multi-chain indexing](https://academy.subquery.network/build/multi-chain.html)!

Multi-chain indexing gives you the option to index data from across different networks into the same database, which in turn provides a single endpoint where you can query all of your data across all chains. You can use the same SubQuery project, which includes the same GraphQL schema and mapping files to achieve this. It means that SubQuery is truly a write once, run anywhere multi-chain indexer.

For example, you could capture XCM transaction data from all Polkadot parachains or monitor IBC messages across Cosmos Zones in a single project, with a single database, and a single query endpoint.

![](https://miro.medium.com/max/1400/0*P_UlTj1YEE5XVAcV)

In short, your SubQuery project will spin up multiple indexing services that index data from each chain. All multi-chain projects must point to the same GraphQL schema and each chain's data will be indexed in isolation into the same PostgreSQL database. This means that you can then query all data using the same GraphQL endpoint.

To read more about multi-chain indexing check out our [Developer Documentation](https://academy.subquery.network/build/multi-chain.html)! We've also provided an [example project](https://github.com/subquery/multi-networks-transfers) that indexes transactions from multiple networks (in this case Polkadot and Kusama) into the same database.

---

SubQuery provides decentralised data indexing infrastructure to developers building applications on multiple layer-1 blockchains. As an open data indexer that is flexible and fast, the open indexing tool helps developers build APIs in hours and quickly index chains with the assistance of dictionaries (pre-computed indices).

Engineered for multi-chain applications, SubQuery's tools allow developers to organize, store, and query on-chain data for their protocols and applications. SubQuery eliminates the need for custom data processing servers, helping developers focus on product development and user experience.

Now, the open-source SubQuery software-development-kit (SDK) not only supports EVM, WASM and CosmWasm smart contracts, it fully supports the Ethermint EVM implementation, including custom application binary interfaces (ABI's) and smart contracts.

After establishing itself as the leading data indexing solution on [Polkadot](https://polkadot.network/), by serving hundreds of millions of queries daily, SubQuery has expanded to serve other Layer-1 blockchains such as the [Cosmos](./20220909-cosmoshub.md) ecosystem alongside [Algorand](./20220713-algorand.md), [Flare](./20221202-flare.md) and [Avalanche](./20220321-avalache.md).

## Giới thiệu về SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit facilitating the construction of Web3 applications of the future. A SubQuery project is a complete API to organise and query data from Layer-1 chains. Currently servicing Polkadot, Avalanche, Algorand, Cosmos and Flare projects, this data-as-a-service allows developers to focus on their core use case and front-end without wasting time building a custom backend for data processing activities. In the future, the SubQuery Network intends to replicate this scalable and reliable solution in a completely decentralised manner.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/subquery) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/c/SubQueryNetwork)
