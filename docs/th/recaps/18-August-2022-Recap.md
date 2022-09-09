# August 2022 - Monthly Recap

![](https://miro.medium.com/max/1400/0*qiDracrS5xLjrv1Q)

The latest SubQuery Monthly Recap is here again! We had an impressive month full of new partnerships. We also celebrated new grant winners and released two new indexing features. But most importantly, we became the first data indexing protocol to serve the Algorand ecosystem!

As always, we are breaking down our monthly update into three sections: Community, Core Product Development, and the SubQuery Network.

## Community

This August we announced we will be providing key members of our community with Airdrops of kSQT! We plan to reward our ambassadors and the best Indexers from the SubQuery Frontier Testnet with an airdrop of kSQT right at the start so they can bootstrap the network. kSQT is the token we will be using during our Kepler testnet phase. It will be exchangeable for SQT once the main net launches.

If you'd like to join our community, connect with us on [Discord](https://discord.com/invite/subquery)! And if you'd like to talk to us, you can join one of our Community Calls on Crowdcast or Office Hours calls on Discord. Watch out for announcements on our [Twitter account](https://twitter.com/SubQueryNetwork).

### New Partnerships: Gafi Network, Heroes of NFT, Polymesh, Fanfury, Nodle and Loop Finance

![](https://miro.medium.com/max/1400/0*akr-s9J6pQQgG8nK)

We had an exciting month this August with six new partnerships, ranging from NFT market places to security tokens. A truly versatile month!

[Gafi Network](https://gafi.network/) is a decentralized blockchain platform designed for high-frequency apps and blockchain gaming. Starting with Kusama, the team at Gafi Network are providing a home for gaming projects to be built on and [they're using SubQuery to power analytics and insights](../customer_announcements/20220802-gafi.md) on the activity of these games.

[Heroes of NFT](https://heroesofnft.com/) is an Avalanche-native project that has three main pillars: NFTs, Games and the Metaverse. We're proud to be [helping them build a dynamic, smooth user interface and dApps](../customer_announcements/20220804-heroes-of-nfts.md) with faster response times!

[Fanfury](https://fury.fan/) is a daily fantasy sports platform that brings trustless play-to-earn gaming to the Juno ecosystem.

> [Co-Founder Aarush Mishra commented](../customer_announcements/20220816-fanfury.md) *"SubQuery is exceptional. It is rare to find a tool which can streamline complex use cases into a ready-to-use solution, yet SubQuery made it exceptionally simple. It is, by all accounts, an extremely valuable tool that will assist any dApps advancing to the next level without having to spend time building their own data indexing solution."*

[Polymesh ](https://polymesh.network/)is a Substrate-based fit-for-purpose, permissioned blockchain built specifically for regulated assets. Polymesh was launched by security token specialist Polymath to overcome the historic challenges around security tokens and are poised to bring blockchain technology to the world of traditional finance. To achieve this vision, [the team at Polymesh rely on SubQuery](../customer_announcements/20220815-polymesh.md) to improve the responsiveness of their user-interface when displaying historical chain data, and to make it easier to perform complex queries of on-chain data via the GraphQL API.

[Nodle](https://www.nodle.com/) is a decentralised network connecting and securing the next trillion Internet of Things (IoT) devices. Nodle provide services such as the Nodle Mobile CashApp and Nodle Web Wallet, and SubQuery enables the team to access key insights into client's interactions with the chain.

> [Alex Sedhigi, the Director of Engineering at Nodle, commented](../customer_announcements/20220818-nodle.md) *"The reason we chose Subquery is that it's a flexible graphql based indexing and api service which allows us to be at the helm --- we can add or extend the queries according to our needs. We also receive invaluable technical support from the team which helps us in building an efficient service for our community."*

[Loop Finance](https://www.loop.markets/) is an all-in-one decentralized finance (DeFi) Exchange, NFT Marketplace and cryptocurrency education platform in the Cosmos blockchain ecosystem. [Loop uses SubQuery to power their DeFi NFT Marketplace](../customer_announcements/20220822-loop.md) with plans to expand their SubQuery integrations to their DEX with Trading View advanced graph data. Eventually, all Loop incubated projects as well as the Loop dApp will be able to easily leverage SubQuery.

### Celebrating New Grants Winners: Nova Wallet and Dotsama.ai

![](https://miro.medium.com/max/1400/0*0BXKk8j4oyf0rkje)

Developers know this best: developing a Web3 project can be really expensive. To support our community we created a $500,000 [Grants Program](https://subquery.network/grants) that rewards Web3 builders!

This August we celebrated two new SubQuery grants winners: [Nova Wallet](https://novawallet.io/) and [Dotsama.ai.](http://dotsama.ai/whales/ksm)

[Nova Wallet is building ](../customer_announcements/20220801-nova.md)the next generation all-in-one mobile app for Polkadot and Kusama ecosystems to streamline the user experience. As part of the grant Nova has completed milestone 1 which involves creating a common API for all Polkadot parachains.

We also celebrated our [newest Grants graduate: Dotsama.ai](../customer_announcements/20220830-dotsama.md)! Dotsama's aim is to be a one-stop analytics shop with tools to identify early investment trends and opportunities. It plans to do so by analysing and surfacing rich insights about the usage and trends in the Dotsama ecosystem. On their website you can discover who are the biggest whales & stakers of the Dotsama ecosystem, and how much $DOT and $KSM they are holding.

## Core Product Development

### SubQuery Supports Algorand

![](https://miro.medium.com/max/1400/0*hz81SUiew5voTiQa)

This August we became [the first data indexing protocol to serve the Algorand ecosystem](../blogs/20220817-algorand-developer.md)!

Algorand is a high--performing Layer-1 blockchain bringing fast, frictionless, and inclusive technology to everyone as it reshapes a wide breadth of industries. We believe in Algorand's continous growth and want to support developers by providing them with an excellent, cutting-edge indexing solution for their dApps.

SubQuery is an open data indexer that is flexible and fast. Our indexing tool is designed to help developers build their own API in hours, and it's designed to index chains incredibly quickly with the assistance of dictionaries (pre-computed indices).

If you'd like to know more, read our [Algorand developer deep dive](../blogs/20220817-algorand-developer.md)!

### Index up to 4x Faster with SubQuery's Parallelised Processing

![](https://miro.medium.com/max/1400/0*YeJUATgHGbFETolG)

We took a big step forward [with support for parallelisation using worker threads](../blogs/20220805-node-workers.md)! This feature moves block fetching and block processing into its own worker thread, which results in increased efficiency of indexing. It should speed up indexing by up to 4 times (depending on the particular project).

## SubQuery Network

### SubQuery Completed Season 3 of the Frontier Testnet

![](https://miro.medium.com/max/1400/0*Qz3-f5HAoYzY6ILT)

This period marked the closure of a critical season of our test network, as we race towards the launch of the SubQuery Network!

[Season 3 of the SubQuery Frontier testnet](../blogs/20220801-frontier-season-3-report.md) had the following goals:

- To test out the quality of our documentation, software, and applications so that thousands of participants can join and participate equally in our network
- To run our smart contracts on Acala's new EVM+ and confirm that everything is working as expected and performing well
- To learn more about how our network operates under real-world conditions, and continue to fix bugs and release new features and improvements

With **2,361** active indexers participating within our network, we believe this may be one of the largest test networks ever run.

Another first for this iteration of the test network was that it indexed projects from three different layer-one chains within the same decentralised network. This could be another first by combining data from three different networks into one place.

### SubQuery Announced Details of Kepler Network and kSQT

![](https://miro.medium.com/max/1400/0*Pvc7hte3tmiMH-DQ)

Many decentralized Web3 projects do a poor job of migrating customers from their centralized services to their decentralized alternatives. We didn't want to make that mistake!

[That's why we launched the Kepler Network,](../blogs/20220822-kepler.md) an incentivized testnet on Karura Network. The Kepler network is the "canary network" of SubQuery that will be deployed on Karura. Kepler is basically a safe "sandbox" environment for onboarding our existing customers onto the SubQuery decentralized network.

It has the following three outcomes:

1.  Provide an environment for indexers & delegators to earn real rewards. $kSQT will be burnable in exchange for $SQT in the future.
2.  Progressively migrate real SubQuery projects from our Managed Service to the decentralized Kepler Network.
3.  Allow us to continue to fine-tune parameters of the network (including reward rates).

Kepler represents the next stage of development for SubQuery and is the last one before we launch our decentralised SubQuery Network. The Kepler Network will enable thousands of users to progressively adopt the decentralised features of the network and earn real rewards for their efforts.

For more details about the $kSQT tokenomics you can refer to our [tokenomics article.](../blogs/20220822-kepler.md)

## Other things you might have missed

- We launched a [New UI Design](../blogs/20220901-managed-service-redesign.md) for the SubQuery Managed Service!
- We shipped yet another optimisation to speed up indexing:[ Bulk Update.](https://twitter.com/SubQueryNetwork/status/1564055269121859584?s=20&t=Ws2_cPL5X1NyUQEz6xVTdw)
- We discussed the [growth of the Moonbeam ecosystem ](https://www.youtube.com/watch?v=yG7jKVFxFC8)with Michael Arrington and Derek Yoo.

P.S.Remember to join our [Discord](https://discord.com/invite/subquery) and[ our social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements!

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
