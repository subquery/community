# SubQuery Developer Update: November

![](https://miro.medium.com/max/1400/0*LdIyT-_Y73geNtz3)

As summer arrives down in the southern hemisphere, the team at SubQuery have continued to deliver new features and support new chains that our customers want. In our latest Developer Update we highlight new features and technical improvements to make your indexing even smoother & faster!

- Index data across chain with our new multi-chain indexing
- Avoid chain type issues or stalled networks with the ability to skip a selection or range of blocs
- Indexing speed improvements by optimising our dictionary queries and block queues
- New Chain Support
  - Flare
  - Cronos
  - OKX
- Shout outs
  - A big thanks to MOZGIII for support for adding settings to GraphQL playground\
  - Thanks also to kumar8317 to help us identify and fix a bug with our Avalanche indexer

SubQuery is a fast & flexible blockchain indexing toolkit that powers hundreds of teams on Polkadot, Avalanche, Algorand, Flare and Cosmos. We help developers focus on their core product, rather than waste time and money building their own indexing solution.

## Multi Chain indexing

![](https://miro.medium.com/max/1400/0*h0E3ZbicNo6MAeQs)

Multi-chain indexing allows you to index data from across different networks into the same database. This allows you to combine and aggregate data from different chains, or see the full picture when indexing XCM or IBC cross chain messages. Once indexed, you can query the data for all supported networks via a single GraphQL endpoint.

You can use the same SubQuery project, which includes the same GraphQL schema and mapping files to achieve this. It means that SubQuery is truly a write once, run anywhere multi-chain indexer.

For example, you could capture XCM transaction data from all Polkadot parachains or monitor IBC messages across Cosmos Zones in a single project, with a single database, and a single query endpoint.

- [Documentation](https://academy.subquery.network/build/multi-chain.html)
- [Github](https://github.com/subquery/documentation/pull/252)

## The ability to skip problematic blocks

Bypass Blocks allows you to skip a number of blocks on a chain when indexing. On some chains, new chain type updates can make some older blocks impossible to decode. On other chains like Juno, some blocks were intentionally skipped after a runtime upgrade.

This feature accepts both a range or single integer entry into an array, and since it's in the project manifest, it will ensure that proof of indexing can still be verified for an indexer working on this project.

- [Documentation](https://academy.subquery.network/build/manifest/polkadot.html#bypass-blocks)
- [Github](https://github.com/subquery/documentation/pull/253)

## Improvements to dictionary queries to speed up projects

A dictionary is a must have when indexing blockchain data. It records metadata of events, transactions, extrinsics, and types in a SubQuery project in a way that allows your own project to know exactly where to look when indexing. We've completed a number of under the hood improvements that make dictionary queries faster from your project, speeding up the indexing performance in the process and decreasing load on our dictionaries so we can scale as more customers connect to them.

## New Chain Support

### Flare

![](https://miro.medium.com/max/1400/0*i5ja1VqBaUXx6Ugs)

SubQuery is proud to[ announce its data indexing support for the Flare network.](./20221202-flare.md) Flare supports EVM-based smart contracts, and has data and interoperability infrastructure built natively into the blockchain, providing dApps with highly decentralized price feeds and secure state acquisition from other blockchains.

Flare Network developers can now benefit from the full SubQuery experience, including the open-source SDK, tools, [documentation](https://academy.subquery.network/quickstart/quickstart_chains/flare.html), developer support, and other benefits developers receive from the SubQuery ecosystem. Additionally, Flare Network is accommodated by [SubQuery's managed service](https://subquery.network/managedservices), which provides enterprise-level infrastructure hosting and handles over 400 million requests each day.

### Cronos

![](https://miro.medium.com/max/1400/0*t2uLxTbfEYHIEtvM)

SubQuery is proud to announce it has extended its data indexing support within the Cosmos ecosystem [with its latest partnership with Cronos,](./20221005-cosmos-cronos.md) the blockchain supported by the Crypto.com exchange. As a result of the integration, SubQuery now supports the Ethermint blockchain unlocking further opportunities for web3 developers building on top of it.

After its rapid expansion into the Cosmos ecosystem with integrations with Juno, Fetch.ai, Stargaze and Cosmos Hub in the last few months, SubQuery received support from the Cronos Ecosystem Grants programme to develop the first indexing solution specifically for builders in Cronos.

### OKC (OKX chain)

![](https://miro.medium.com/max/1400/0*Fa0WLw-pEd4OOCgI)

SubQuery's goal has always been to provide fast and efficient indexing to the widest variety of chains possible. This month [we started supporting another Cosmos chain: OKC (OKX Chain)!](./20221213-cosmos-okc.md) OKC ([OKX Chain)](https://www.okx.com/okc) is an EVM-compatible L1 built on Cosmos with a focus on true interoperability (IBC) and maximized performance.

OKC will benefit from the full SubQuery experience, including the open-source SDK, tools, [documentation](https://academy.subquery.network/quickstart/quickstart_chains/cosmos.html), developer support, and other benefits developers receive from the SubQuery ecosystem. Additionally, OKC is accommodated by [SubQuery's managed service](https://subquery.network/managedservices), which provides enterprise-level infrastructure hosting and handles over 400 million requests each day.

## Shout outs

- A big thanks to [MOZGIII](https://github.com/MOZGIII) for contribution to our codebase supporting the adding of settings to GraphQL playground [Github](https://github.com/subquery/subql/pull/1436)
- Thanks also to [kumar8317](https://github.com/kumar8317) to help us identify and fix a bug with our Avalanche indexer [Github](https://github.com/subquery/subql-avalanche/pull/32)

## Key Resources

- [View the releases page for more information](https://github.com/subquery/subql/releases)
- [Developer documentation](https://academy.subquery.network/)
- [Discord community (including technical support)](https://discord.com/invite/subquery)

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit facilitating the construction of Web3 applications of the future. A SubQuery project is a complete API to organise and query data from Layer-1 chains. Currently servicing Polkadot, Avalanche, Algorand, Cosmos and Flare projects, this data-as-a-service allows developers to focus on their core use case and front-end without wasting time building a custom backend for data processing activities. In the future, the SubQuery Network intends to replicate this scalable and reliable solution in a completely decentralised manner.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/subquery) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/c/SubQueryNetwork)
