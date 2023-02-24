# September 2022 Monthly Recap

![](https://miro.medium.com/max/1400/0*VBUUj5-CM_DuX56n)

The latest SubQuery Monthly Recap is here again! We had a fun month attending Asia's largest crypto event: TOKEN2049. We also celebrated new grant winners & new partnerships. But most importantly, we started supporting Substrate Wasm and Cosmos Hub!

As always, we are breaking down our monthly update into three sections: Community, Core Product Development, and the SubQuery Network.

## Community

We had a wild September full of events, talks and conferences!

### SubQuery Joined the Leading Voices at Asia's Largest Web3 Event TOKEN2049

Last month, the entire crypto and Web3 ecosystem was in town for TOKEN2049 Singapore. The event, supported by the [Web3 Foundation](https://web3.foundation/), was a success, with an exciting line-up of core teams exchanging their views and insights on the current development of the ecosystem, as well as key Polkadot stakeholders, like Rae from [Parity](https://www.parity.io/technologies/polkadot/) and Obi from the [Web3 Foundation](https://web3.foundation/about/) sharing important information about the current status and future plans for the ecosystem.

![](https://miro.medium.com/max/1400/0*u80G413vxW07KYo7)

![](https://miro.medium.com/max/1400/0*ihRKENye01NsoK_D)

We know Discord is cool, but IRL is better. That's why we also co-organized the Polkadot Lounge Party in Singapore that happened during [TOKEN2049](../blogs/20221006-token2049.md).

![](https://miro.medium.com/max/1400/0*A-cSmzDC2dz2VK5K)

As part of the TOKEN2049 event, we also participated in the [Devgreenhouse Algorand Tech Talk!](https://www.youtube.com/watch?v=fU4H_YtGtX4)

![](https://miro.medium.com/max/1400/0*Ebqa26BWn-lDSk6Z)

Our COO James Bayly discussed how Algorand devs can leverage SubQuery's tools for data indexing instead of wasting time on DIY indexing solutions:

If you'd like to join our community, connect with us on [Discord](https://discord.com/invite/subquery)! And if you'd like to talk to us, you can join one of our Community Calls on Crowdcast or Office Hours calls on Discord. Watch out for announcements on our [Twitter account](https://twitter.com/SubQueryNetwork).

## Core Product Development

### SubQuery Announced Integration with Cosmos Hub

![](https://miro.medium.com/max/1400/0*opPkMBUdClvEvD3i)

[Cosmos Hub](https://hub.cosmos.network/main/hub-overview/overview.html) is the latest layer-1 to receive indexing support from SubQuery, just after the [recent announcement of Algorand support](../blogs/20220713-algorand.md). The [integration with Cosmos Hub](../blogs/20220909-cosmoshub.md) comes as a part of SubQuery's continuous effort to support multiple networks within the Cosmos ecosystem. As of last month, SubQuery supports all of the following Cosmos networks: [Juno](../blogs/20220609-juno-cosmos.md), [Fetch.ai](../blogs/20220719-fetch.md), and [Stargaze](../blogs//20220726-stargaze.md).

SubQuery is a flexible, fast, open, and decentralised data indexing solution that provides developers with the tools needed to easily organise and query on-chain data for their protocols and applications.

Cosmos Hub developers will continue to receive all the tools, [documentation](https://academy.subquery.network/), developer support, and other benefits that developers receive from the SubQuery ecosystem.

SubQuery also provides the [Managed Service](https://managedservice.subquery.networks) for Cosmos Hub ecosystem, which provides enterprise level infrastructure hosting and handles hundreds of millions of requests each day.

### SubQuery Started Providing Support for Substrate Wasm

![](https://miro.medium.com/max/1400/0*bT7_y7It0rltAKOw)

With last month's [announcement of Substrate Wasm support,](../blogs/20220919-substrate-wasm.md) SubQuery reaffirmed its position as Polkadot's premiere indexing provider. As well as now supporting Cosmos, Avalanche, and Algorand, SubQuery also provides deep indexing support for Polkadot with Substrate, EVM, and Wasm.

### SubQuery Grants Programme Celebrate Another Graduate: Alphabit

![](https://miro.medium.com/max/1400/0*0a-uEKJH6nVsBdyh)

[Alphabit applied for a grant](../customer_announcements/20220929-alphabit.md) to amplify their mission to empower the independent investor by providing visibility to track and analyse the portfolios and investments of funds of large traders or 'whales'.

SubQuery quickly saw the potential in their application and welcomed them into the [first cohort of SubQuery Grant recipients.](../blogs/20211222-grants.md) Last month we celebrated their successful graduation!

### SubQuery Supports InvArch by Providing a Data Indexing Solution for on-chain NFT Assets

![](https://miro.medium.com/max/1400/0*TUjBNRud6ghowX2r)

Today SubQuery is delighted to announce a [new partnership with InvArch](../customer_announcements/20220912-invarch.md), which is setting out to be the leading-edge layer-1 network for the creators economy in the Polkadot and Kusama ecosystems. InvArch provides a new foundation through its powerful NFT primitives & DAO solutions and is designed to not only allow development of new products but also to enable new ways of creators' collaboration.

SubQuery allows developers to quickly build databases for their dApps using on-chain data found on InvArch. Developers can quickly index and organise data for their applications, and access it even faster. While InvArch is a new world of foundation-changing solutions and data, SubQuery is the crucial bridge that allows developers to quickly access the resources.

## SubQuery Network

We've been deep in the Development of [Kepler](../blogs/20220822-kepler.md), the "canary network" or SubQuery. Kepler represents the next stage of development for SubQuery and is the last one before we launch our decentralised SubQuery Network. It will enable thousands of users to progressively adopt the decentralised features of the network and earn real rewards for their efforts.

Last community call, we discussed our roadmap for the Kepler network, as you can see we are well on our way to completing all of these components and should be ready to launch Kepler soon:

- [Complete] Improve the UI off your feedback
- [Complete] Integration with Ethereum Name Service (ENS)
- [Complete] Build an exchange/swap feature (between aUSD and kSQT)
- [Complete] Build an Airdrop app
- [Complete] Build an indexer excellency programme
- [In Progress] Implement Pay as You Go payment method
- [In Progress] Release a SubQuery Network Client SDK

A major new feature for Kepler is [pay as you go](../blogs/20220822-kepler.md) --- we've decided to call it *Flex Plan Pricing*, this is the baseline payment method and a fallback for others. Each Indexer can advertise their Flex Plan prices when registering their ability to serve requests for specific SubQuery projects. Consumers making requests will have to lock the tokens necessary to make that request in a state channel, and at the end of an Era, these tokens will be distributed to the Indexers based on the Cobb-Douglas production function.

We believe that this may be the first implementation of state channels in Polkadot, and is a significant amount of engineering effort to make sure that it is efficient, fast, and reliable. We're finishing off the UX for this as well, and with everything that we build, we want to ensure that it is easy to understand and use.

![](https://miro.medium.com/max/1400/0*0dpSillz6kh4DXqC)

## Other things you might have missed

- We discussed[ building on Moonbeam ](https://www.youtube.com/watch?v=2jPEQpgIDrY)using SubQuery with Kevin from Moonbeam Network!

P.S. Remember to join our [Discord](https://discord.com/invite/subquery) and[ our social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements!

## The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
