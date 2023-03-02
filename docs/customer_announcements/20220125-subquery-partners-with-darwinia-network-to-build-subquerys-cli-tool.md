# SubQuery partners with Darwinia Network to build SubQuery’s CLI Tool

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Today we want to announce our partnership between Darwinia Network and SubQuery Network. Darwinia recently won their Kusama parachain aucton slot, and is preparing to secure their Polkadot slot. As part of Darwinia’s roadmap to build a cross chain bridge hub for Polkadot, Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions

Our partnership goes deeper than just using SubQuery to power Darwinia’s application ecosystem, Darwinia have been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service ([https://managedservice.subquery.network](https://managedservice.subquery.network)). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. Darwinia have taken this even further and built an example [GitHub Action workflow](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) that uses the CLI tool to do this on any push to the main branch of their [repository](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml). This new automation is an excellent example of the close relationship between Darwinia and SubQuery, and the CLI tool is already used by many other projects within SubQuery’s large ecosystem.

> “The SubQuery CLI tool that we’ve built has really made our development pipeline easy, now we can entirely manage releases in branches and feel confident that our changes will be deployed automatically to SubQuery’s hosted service. We are particulay proud of our automated process to check if the schema.graphql file has changed, and if so, we’ll redeploy a new clean database” — Yalin, Core Developer — Darwinia Network

Check out the [new CLI tool here](https://github.com/fewensa/subquery-cli) and see a [living example of it here](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

The first of many applications in Darwinia’s growing application ecosystem is the [Wormhole app](https://wormhole.darwinia.network/). Wormhole is an easy to use application that makes transferring assets between networks easy and is a key part of Darwinia’s cross chain strategy. Currently the bridge between Darwinia and Ethereum is operational. [SubQuery is used to show historic transfers and events](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) that have occurred on your Darwinia/Crab/Pangolin address related to the wormhole (e.g. the arrival of assets from another network).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

The team at Darwinia is in the process of building a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the fastest and easier user experience in the entire Polkadot ecosystem.

> “We’re excited to use SubQuery to replace our existing backend servies for Wormhole, over the long term with the SubQuery Network this will make our services total decentralised and open source — its something that we are proud of!”” — Yalin, Core Developer — Darwinia Network

Additionally, Darwinia are using SubQuery to [provide the data behind](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) their [Parachain Loan Offering website](https://darwinia.network/plo_contribute). Although Crab has already won their slot on Kusama, it’s not too late to contribute to Darwinia’s campaign for a Polkadot slot. They are also taking advantage of SubQuery to index [Merkle Mountain ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) for all blocks created in their network.

Darwinia Network is using [SubQuery Projects](https://managedservice.subquery.network/) to manage their own project and make updates as required. The indexing and query services we provide are completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/).

## About Darwinia Network

Darwinia Network is a decentralized cross-chain bridge network building on Substrate, which is the “Golden Gate Bridge” of the cross-chain ecology. It provides the safest general bridge solution, connecting Polkadot, Ethereum, BSC and other heterogeneous chains by cross-chain assets transfer and general remote chain call. Also, its main application areas include Defi, cross-chain NFT trading market, games, etc.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## About SubQuery Network

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing &amp; querying layer between Layer-1 blockchains and decentralized applications (DApps). Currently focused on Polkadot and Substrate projects, this data-as-a-service allows developers to focus on their core use case and front

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
