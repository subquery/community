# SubQuery Developer Update: October

![](https://miro.medium.com/max/1400/0*MilBSgdrWg4zuI0_)

SubQuery is a fast & flexible blockchain indexing toolkit that powers hundreds of teams on Polkadot, Avalanche, Algorand, and Cosmos. We help developers focus on their core product, rather than waste time and money building their own indexing solution.

In our latest Developer Update we highlight new technical improvements to make your indexing even smoother & faster!

- Timestamp Handler to index on a scheduled basis
- Faster indexing with support for Indexing Unfinalized Blocks
- Reindexing from specific blockheight
- Improvements to our CLI tool to allow customers to automate deployments
- Plus many other minor improvements

## Timestamp Handler Update

The `timestamp` filter is very useful when indexing block data with specific time intervals between them, e.g. when you are aggregating data on an hourly/daily basis. It can be also used to set a delay between calls to `blockHandler` functions to reduce the computational costs of this handler. You can also use the `modulo` filter to run a handler only once to a specific block. This filter allows handling any given number of blocks.

Note that this feature works only for Polkadot right now. We will be adding support for other chains depending on demand. If you'd like us to add support on another chain, let us know!

[Documentation](https://academy.subquery.network/build/manifest/polkadot.html#mapping-handlers-and-filters) and [GitHub](https://github.com/subquery/subql/pull/1310)

## Indexing Blocks Before They're Finalised! [Beta]

On some networks like Substrate, blocks go through a process before they are finalised and become considered immutable or final. During this time, the chain will compare candidate blocks and agree on what block to finalise and save immutably with the chain.

Most indexing solutions wait till blocks are finalised to start indexing data. Now that SubQuery automatically keeps the historical state, we also have the ability to index blocks that are unfinalised and roll changes back when forks occur.

This means that SubQuery is the fastest indexer out there (in terms of time between something happening on-chain and it being ready to be indexed). In the case of Polkadot, it means that instead of waiting 18-24 seconds for blocks to be finalised, data will appear in SubQuery nearly instantaneously as the candidate blocks are added.

In order to achieve this, we have added a new parameter; `- unfinalized`, that enables users to show indexed data from blocks that have not even been finalised! This is a beta release and we are still optimising the codebase, at the moment it is only available on Substrate/Polkadot chains.

[Documentation](https://academy.subquery.network/run_publish/references.html#unfinalized-blocks) and [GitHub](https://github.com/subquery/subql/issues/1144)

## Reindex from Blockheight

The reindex command allows you to rewind your project back to a specific block height by leveraging our [automated historical indexing](https://academy.subquery.network/run_publish/historical.html). A perfect example of this would be to go back in time to when a change occurs to your smart contracts, and then update your project to reflect that change, and then to continue to index using the correct data from that point in time.

[Documentation](https://academy.subquery.network/run_publish/references.html#reindex) and [GitHub](https://github.com/subquery/subql/pull/1281)

## Improvements to our CLI tool to allow customers to automate deployments

Most customers use the [@subql/cli](https://github.com/subquery/subql/tree/main/packages/cli) to just initialize, build, and run their project locally, however the CLI can be used to do a whole lot more! You can now use the CLI to do the following:

- Create a new project on the SubQuery Managed Service
- Deploy a new version of your SubQuery project to the Managed Service
- Promote a staging deployment to the production slot in the SubQuery Managed Service
- and more!

Even better, we've added a [Default GitHub Action Workflow to the starter project in GitHub](https://github.com/subquery/subql-starter/blob/main/Polkadot/Polkadot-starter/.github/workflows/cli-deploy.yml) that will allow you to publish and deploy your changes automatically.

[Documentation](https://academy.subquery.network/run_publish/cli.html) and [GitHub](https://github.com/subquery/subql/pull/1352)

## Support for new Cosmos Chains

We now have [starter projects](https://github.com/subquery/cosmos-subql-starter) running for:

- Cosmos Hub
- Cronos EVM (ethermint)
- Fetch.ai
- Juno
- Osmosis
- Stargaze

## Other Improvements

![](https://miro.medium.com/max/1400/0*V1qV31DytOrVP_Pj)

- Bug fix for situations where multiple datasource templates are being created in the same block. We thank the amazing team at [Starfish Finance](https://starfish.finance/) for contributing this fix. [GitHub](https://github.com/subquery/subql/pull/1363)
- Performance updates to our modulo filters, which allow you to only run a block mapper once every N blocks to speed up indexing. [Documentation](https://academy.subquery.network/build/manifest/polkadot.html#mapping-handlers-and-filters) and [GitHub](https://github.com/subquery/subql/pull/1358)
- [Beta] Add a new feature to automatically hot-reload the query service on schema changes so you don't need to restart your query service. [GitHub](https://github.com/subquery/subql/pull/1321)
- Bump @polkadot/api@9.4.2 support to 9.4.2. [GitHub](https://github.com/subquery/subql/pull/1356)

You can take advantage of SubQuery's [enterprise-level Managed Service](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html) to see all these UI updates plus options for dedicated databases, automated deployments, and geographic routing to multiple clusters around the world for performance and uptime. Head to [SubQuery Projects](https://project.subquery.network/) to get started or reach out to sales@subquery.network if you'd like a demo first.

## Key Resources

- [View the releases page for more information](https://github.com/subquery/subql/releases)
- [Developer documentation](https://academy.subquery.network/)
- [Discord community](https://discord.com/invite/subquery) (including technical support)

## Tentang SubQuery

[SubQuery](https://subquery.network/) is the universal data indexing toolkit facilitating the construction of Web3 applications of the future. A SubQuery project is a complete API to organise and query data from Layer-1 chains. Currently servicing Polkadot, Avalanche, Algorand, and Cosmos projects, this data-as-a-service allows developers to focus on their core use case and front-end without wasting time building a custom backend for data processing activities. In the future, the SubQuery Network intends to replicate this scalable and reliable solution in a completely decentralised manner.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
