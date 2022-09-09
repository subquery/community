# July 2022 Recap

![](https://miro.medium.com/max/1400/0*Ze3SrdtAv-7toLJg)

The latest SubQuery Monthly Update is here again! We had an impressive month full of new partnerships and expansions into new networks.

Three big things happened this month. We announced our plan to expand into Algorand, which will be the 5th Layer-1 chain SubQuery will be supporting.

We also expanded even deeper into the Cosmos ecosystem, with Fetch-ai and Stargaze networks!

These expansions take us closer to a unified, multi-chain future that SubQuery is striving towards.

We also announced that we are postponing our Public sale. Even though we received significant interest for our Public sale during our "Expression of Interest" process in May (with tens of thousands of signups in a matter of days), we nevertheless decided that having the Public sale now would create unnecessary pressure on SQT, and on our valuable community. Our community has been very supportive during this whole process.

Even though the Public sale is postponed, we are continuing with the Private Sale which will be open to Indexers, Ambassadors, and Spartans to co-invest alongside professional investors.

We are also launching the Kepler Network which will enable thousands of users of the testnet to progressively test the decentralised features of the network, and begin testing with incentives in a sandbox environment.

We are committed to move to a decentralised future, and as we have proven our Frontier Testnet through three successful seasons already, we are ready to begin our Network for real world customers.

As always, we are breaking down our monthly update into three sections; community, core product development, and the SubQuery Network.

## Community

SubQuery's community is expanding lightning-fast!

This month we passed 61,000 organic Twitter followers and our Discord has grown to over 83,000 active community members.

We also have a thriving and creative community of 106 Ambassadors and 805 Spartans.

You can help us with Content creation, Event management, Development, Community moderation or Translation!

![](https://miro.medium.com/max/1400/0*7Ee-4aSsbpxP20jH)

SubQuery at Polkadot Decoded 2022

## Core Product Development

### Improvements to BlockHandlers --- new modulo filter

SubQuery highly values the feedback from the community. Our customers told us that they want to index their data and calculate changes over certain periods of time. That is why we have extended the *BlockHandler* functionality by adding a new *modulo* filter on substrate's *blockHandler*.

This filter allows handling any given number of blocks, which is extremely useful for grouping and calculating data at a set interval. For instance, if modulo is set to 50, the block handler will run on every 50 blocks. It provides even more control over indexing data to developers and can be implemented like so below in your project manifest.

![](https://miro.medium.com/max/1400/0*V08h35GVLBVXGI_7)

### Parallelised Processing Speeds Up Indexing Up to 4 Times

SubQuery efforts are focused towards improving indexing speed. Our aim is to be the fastest multi-chain decentralised indexer! This month we took a major step forward with [support for parallelisation using worker threads](../blogs/20220805-node-workers.md).

This feature will move block fetching and block processing into its own worker thread, which results in increased efficiency of indexing. It should speed up indexing by up to 4 times (depending on the particular project).

### Introduced Intelligent Reindexing in Beta Version

SubQuery's mission is to continuously improve and solve the biggest issues for dApp developers. This month we released a brand new feature --- intelligent reindexing. This feature allows using our automated historical state tracking to reindex any data from a certain block height.

In case of a mistake in your mapping file or adding a new contract, you can now reindex your data using the same GraphQL Schema. Simply use `-- reindex=<blockNumber>` [command](https://academy.subquery.network/run_publish/references.html#reindex) to remove already indexed data and reindex it again from specified block height.

Please note that the way of using this feature will be updated soon. Soon we will add the ability to make tracked and deterministic GraphQL Schema migrations, which will make reindexing with SubQuery incredibly quick and deterministic, solving the biggest pain point with chain indexers.

### SubQuery Targets Data Indexing in Algorand

![](https://miro.medium.com/max/1400/0*YlKJm3FWgrL8Iyys)

This July we signalled our intention to become [the first open indexing data protocol to serve the Algorand ecosystem!](../blogs/20220713-algorand.md)

SubQuery has a deep appreciation for Algorand's focus on decentralisation and performance, the same principles that SubQuery maintained when building the decentralised SubQuery Network.

Algorand developers will receive all the tools, [documentation](https://academy.subquery.network/), developer support, and other benefits that developers receive from the SubQuery ecosystem, including being eligible to participate in [SubQuery's Grants Programme](https://subquery.network/grants). Algorand is also supported in SubQuery's [enterprise level managed service](https://subquery.network/managedservices), which provides enterprise level infrastructure hosting and handles hundreds of millions of requests each day.

The Algorand integration is currently being finalised and tested with a small group of beta projects.

### SubQuery supports more Cosmos chains

![](https://miro.medium.com/max/1400/0*idrw2BtlBxKUsMZC)

As part of SubQuery's initiative to support all native layers of the Cosmos ecosystem, we were delighted to announce our [support for Fetch-ai Network ](../blogs/20220719-fetch.md)and [the Stargaze ecosystem](../blogs/20220726-stargaze.md).

Fetch-ai Network is an interchain protocol, based on the Cosmos-SDK. Fetch-ai is building an open access, tokenized, decentralised machine learning network to enable smart infrastructure built around a decentralised digital economy.

The Fetch-ai Network team saw SubQuery as the right partner to develop and share this much needed tool with their developer community and accelerate the dApp deployment experience to reach milestones faster. SubQuery was excited to see that following initial testing on Juno, the Cosmos support worked off-the-shelf for other networks in the Cosmos galaxy like Fetch-ai Network.

Additionally to Fetch-ai, we also extended our [support to the Stargaze ecosystem](../blogs/20220726-stargaze.md)! Stargaze is a decentralised NFT App chain implemented as a proof-of-stake blockchain with Cosmos SDK.

Both SubQuery and Stargaze were attracted to Cosmos, as it enables a decentralised validator set, with fast block times and low gas. It also enables interoperability with Ethereum and other chains via IBC (inter-blockchain communication protocol). Stargaze set up home in Cosmos with a mission to build a network which shifts content monetisation from corporations to the actual people creating and curating content.

One aspect of Stargaze's vision is to unleash NFTs into Cosmos and become the first interoperable layer-1 for NFTs. This mission will be powered via a simple SubQuery Project that allows quick access to current listing data, trade history, and more. By leveraging this data, Stargaze can provide additional features and insights to their community.

### Alphabit Build Acala Liquidation Bot as part of SubQuery Grants Programme

![](https://miro.medium.com/max/1400/0*CN7pwN_Il1mj7iks)

Initially Alphabit were selected amongst our first cohort of Grant recipients with a mission to empower the independent investor by providing visibility to track and analyse the portfolios and investments of funds, of large traders or 'whales'.

As we worked closely with Alphabit, they approached us to also throw their hat in the ring for the ['aUSD Liquidation Tools' SubQuery bounty in conjunction with Acala.](../customer_announcements/20220721-alphabit.md)

Alphabit proposed their idea of building an alert subscription service for liquidation events and a UI for participating in these. They successfully completed the bounty!

### New partnerships: Web3Games, Capx, PNS

![](https://miro.medium.com/max/1400/0*vRe6MRE_AOIKG8OU)

In July we [announced our partnership with Web3Games,](../customer_announcements/20220722-web3games.md) an integrated platform for blockchain gaming.

Web3Games provides a Substrate-based blockchain to enable the next-generation of gameplay. A critical visual aid for the Web3Games chain is their chain explorer, which is powered by SubQuery, where users can query blocks, block heights, block hash, transaction hash, addresses and other related functions.

We were also super excited to [announce our partnership with Capx](../customer_announcements/20220720-capx.md), a suite of products in Decentralized Finance (DeFi). The team recently launched their Capx Liquid dApp on Karura and have plans to build and deploy more dApps (Capx Exchange, Capx Lend) on Kusama and Polkadot.

With the launch of these DeFi based dApps comes an inevitable need to access and feed the historical transactional data into their applications and the Capx team have chosen SubQuery to support.

Last but not least, we also announced [our partnership with Polkadot Name System](../customer_announcements/20220727-pns.md) (PNS), a decentralised domain name system for Polkadot.

PNS allows you to use a '.dot' domain name to show your smart contract, domain name, wallet, NFT, and other resources, and from these start building a digital identity dedicated to "you". Where previously you could only point to a string of characters and digits on the chain for items that belong to you, PNS has packaged this into your own Web3 name card (Web3Profile) which you fully possess and manage.

However behind the simplicity and accessibility of your Web3Profile, is data that must be aggregated and queried to quickly and accurately display your information, this is where PNS called upon SubQuery.

The team at PNS use SubQuery to rapidly query on-chain data to present their users with their digital identity information.

## SubQuery Network

### SubQuery Public Sale To Proceed As Private Round, Kepler Network to Launch in August

![](https://miro.medium.com/max/1400/0*O1knnNH_pekZ29hH)

Due to the current market conditions, we had to make the decision to [postpone the Public sale](../blogs/20220712-public-sale-postponed.md), while continuing with the Private sale.

Despite significant interest we received during our "Expression of Interest" process in May, with tens of thousands of signups in a matter of days, the overall market conditions have become increasingly bearish in the interim. It became clear that launching our token into such an environment would create unnecessary pressure on SQT, and our valuable community for the foreseeable future. The Public sale is not cancelled, only postponed till the conditions improve.

The Private sale, on the other hand, will continue as planned. This is a unique opportunity for our Indexers, Ambassadors and Spartans to co-invest alongside professional investors to reward them for their ongoing support of the project prior to the launch of the SQT token.

We also decided to proceed with the SubQuery Kepler Network, an incentivised "canary network" on Karura to build the foundations for the future SubQuery Network.The Kepler Network will enable thousands of users of the testnet, to progressively test the decentralised features of the network, and begin testing with incentives in a sandbox environment.

When we survey the web3 ecosystem today, we see that many other projects that provide decentralised services have made poor progress migrating customers from their centralised services to their decentralised alternative. Kepler is designed to migrate real projects from our managed service to the decentralised SubQuery Kepler Network while providing incentives to all.

The Kepler network will be retired when the mainnet is launched and participants will be able to burn kSQT in exchange for SQT via a predetermined mechanism.

### A Incredibly Successful SubQuery Frontier Testnet

![](https://miro.medium.com/max/1400/0*Waq3rkVLCHC7VDK_)

Late July marked the closure of our test network, SubQuery Frontier, as we race towards the launch of the SubQuery Network.

With 2,361 active indexers participating within our network, we believe this may be one of the largest test networks ever run. It shows how easy SubQuery made the infrastructure setup process through great documentation, onboarding guides, community support, and indexer services.

Another first for this iteration of the test network was that it indexed projects from three different layer-one chains within the same decentralised network. One of the best aspects of the Testnet is that the explorer that you see retrieves data directly from a SubQuery project. This is the ultimate test of our own tools and software, where we've built a complex project and run it in our own infrastructure to power our own application, just like how our customers do.

In summary, season 3 gives us the confidence that the SubQuery Network is truly multichain, it's simple and accessible, and that we are ready to start innovating in payment methods. From here we are now ready to launch the SubQuery Kepler Network, you can expect more information about this soon but the main aim of this is to migrate real projects from our managed service to the decentralised SubQuery Kepler Network while providing real world incentives to all participants.

## Other things you might have missed

- We announced a hot new feature that will help indexers tremendously: [reindexing](https://twitter.com/SubQueryNetwork/status/1552335718810374146)!
- We published the [next steps for our Private sale](../blogs/20220712-public-sale-postponed.md)
- We organized[ a live demo](https://twitter.com/SubQueryNetwork/status/1546751246459179008?s=20&t=_a7PUHzNOby2jfluL5H3OQ) of building a project using SubQuery's indexing tech on top of Astar Network

P.S. Remember to join our [Discord](https://discord.com/invite/subquery) and[ our social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements!

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
