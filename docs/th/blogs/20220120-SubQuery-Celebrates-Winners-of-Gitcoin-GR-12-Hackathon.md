# SubQuery ขอร่วมแสดงความยินดีกับผู้ชนะการแข่งขันในกิจกรรม Gitcoin GR 12 Hackathon

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery เป็นโซลูชันในการจัดเก็บและดึงข้อมูลชั้นนำบนเครือข่าย Polkadot มีความยินดีที่จะประกาศผู้ชนะ[กิจกรรมการแข่งขัน Gitcoin GR 12 Hackathon ที่ได้จัดไปครั้งล่าสุด](https://gitcoin.co/hackathon/gr12?org=subquery) ซึ่ง Gitcoin นั้น ถือเป็นที่ยอมรับว่าเป็นหนึ่งในคอมมูนิตี้ของนักพัฒนาบล็อกเชนที่โดดเด่น ด้วยการมุ่งเน้นและให้ความสำคัญไปกับการสร้างคอมมูนิตี้และแอปพลิเคชันสำหรับ Web3 [โดยการร่วมมือระหว่าง SubQuery กับ Gitcoin ในเดือนธันวาคมที่ผ่านมานี้](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) เพื่อเป็นการสนับสนุนกิจกรรมการแข่งขันทั้ง 5 กิจกรรม ซึ่งมีมูลค่าถึง 37,000 ดอลลาร์สหรัฐ (ถือเป็นเงินรางวัลรวมที่เยอะที่สุดในกิจกรรมการแข่งขัน) เพื่อเป็นการเชิญชวนให้เหล่านักพัฒนาได้มาสร้างเครื่องมือ, Dashboard รวมไปถึงขยายการใช้งาน SubQuery ไปยังบล็อกเชน Layer-1 อื่นๆ

โดยการแข่งขัน Hackathon ได้มีการจัดขึ้นช่วงวันที่ 1-16 ธันวาคม 2021 ที่ผ่านมา ด้วยการร่วมสนับสนุนและสมทบเงินรางวัลมากมายจากโปรเจกต์บล็อกเชนชั้นนำต่างๆ อาทิ Moonbeam, Astar และ Acala ซึ่งรางวัลจะถูกมอบให้กับผู้เข้าแข่งขันที่ทำโปรเจกต์ได้สำเร็จตามมาตรฐานที่ได้มีการตั้งไว้ รวมไปถึงผู้เข้าแข่งขันที่นำเสนอไอเดียได้สร้างสรรค์มากที่สุด หรือใครก็ตามที่ได้ทำการแก้ปัญหาส่วนต่างๆ เพื่อปรับปรุงระบบ Core ของ SubQuery SDK ให้ดียิ่งขึ้น โดยรายละเอียดแต่ละกิจกรรมสามารถสรุปสั้น ๆ ได้ตามด้านล่างนี้:

- [Create a unified block explorer that combines Substrate and EVM insights from Moonbeam and Astar into one easy to use application](https://gitcoin.co/issue/subquery/grants/1) — US$12,000 [Sponsored by Moonbeam and Astar]
- [Create DeFi hub dashboard that’s inspired by Zapper.fi or defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — US$8,000 [Sponsored by Acala]
- [Create a staking dashboard that shows the best staking opportunities across Polkadot and its various parachains](https://gitcoin.co/issue/subquery/grants/3) — US$3,000
- [Build a marketplace explorer for all RMRK protocol based NFTs](https://gitcoin.co/issue/subquery/grants/4) — US$2,000
- [Extend the @subql/node service to index data from another layer 1 chain](https://gitcoin.co/issue/subquery/grants/5) — US$12,000

## Unified EVM and Substrate Block Explorer

The Polkadot/Kusama ecosystem consists of blockchains (called Parachains) built using Substrate, which uses the Substrate API. However, certain Parachains, such as Moonbeam and Astar, offer seamless Ethereum compatibility by having a fully compatible EVM component. Having simultaneous visibility into Substrate and EVM data is currently challenging, resulting in two isolated experiences within Moonbeam and Moonriver. You have to choose between the Substrate side (e.g., Subscan) and EVM side (e.g., Moonscan & Blockscout).

This challenge was envisaged to address the huge opportunity to build a single place to understand the full history of activity in an account. For example, to see staking and governance actions and ERC20 transfers in a single user interface. This would be an application used daily by the massive communities within Moonbeam, Astar, and many other EVM compatible parachains that are taking off.

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) was @bizzyvinci who [has built a frontend explorer which is live on Heroku](https://moonriver-explorer.herokuapp.com/). Given that this challenge is a huge task, it’s not a surprise that it is not 100% complete yet, but we are excited to support the progress for this game-changing innovation and help extend it to other EVM chains.

@bizzyvinci said the following: “I built the [Moonriver Explorer](https://moonriver-explorer.herokuapp.com/) and it was an awesome experience., The first step was learning about SubQuery and damn, they’ve got an awesome documentation which are accompanied with template repositories. The documentation covers everything it takes to get started and explains each aspect well such as the manifest file, graphql schema among others.”

## Karura/Acala DeFi Dashboard

Acala and Karura represent a huge vision for the future of DeFi, so there is a big opportunity to build valuable tools for the ecosystem. This challenge required developers to create DeFi tools for the Karura/Acala community that are inspired by the likes of [Zapper.fi](http://zapper.fi/) and [defisaver.com](http://defisaver.com/) leveraging SubQuery’s data indexing services.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/2/100027176) was Web3Go who built a really nice summary of [Acala’s Collateral Debt Positions (CDPs)](https://web3go.xyz/#/CDPDetail). For users to mint kUSD stablecoins on Karura, they must first deposit tokens of one of the accepted collateral assets (e.g. KSM). Once the user has done so, the min collateral ratio parameter determines the minimum amount of the collateral needed for a user to mint kUSD. If the market price of the CDP’s collateral asset drops low enough, the CDP may be considered “unsafe.”

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Web3Go’s interface cleanly lists all CDP positions, their ratio and their safe status. For each position it also provides information about the history of the position and easily allows others to monitor the financial instrument. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Polkadot Staking Dashboard

Staking is a key way to put your DOT and KSM tokens to use, but currently the UX for staking is difficult to understand and results in most users making uneducated choices.

This challenge’s objective was to combine on-chain data and an intuitive user experience, to help users understand the best estimated staking yield, compare the historical performance of validators, and show users what their return on investment might be.

Ashik built PolkStakes, a [Polkadot validator ranking website](https://polkstakes.vercel.app/) that fetches all validators and shows a cleanly organised list of validators in Polkadot with PolkStake’s own rating (based on previous era performance, commissions, payout, and staking rewards etc). It’s a clean and simple UI that really impressed us.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_Subquery reduces the effort in manually indexing on-chain data. Since it offers a graphql endpoint, we can query data easily. It reduces the effort in maintaining a backend and database. Now, data aggregation for calculating Polkstakes ranking is done in UI. This has to be moved to SubQuery. Also, better visualization has to be done for indexed data and more accurate estimated yield prediction has to be added._” — Ashik from Polkdata

The excellent SubVis team also built a [beautiful Polkadot staking dashboard](https://polkadot-staking-dashboard.vercel.app/) that shows total staking statistics over time and the validator performance in one place. The new staking features join the existing auction and crowdloan pages that SubVis are well known for.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Finally, Web3Go put in another excellent entry with detailed staking statistics on Moonriver. They provide information even about the delegators for each collator, the historic rewards provided by each collator, and even the actions that collators take. They provide the additional benefits of being able to show staking history for your own wallet address.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT Marketplace Explorer

RMRK is an advanced protocol of NFT legos making NFTs that are so much more than just a jpeg. The team at RMRK are bringing new standards of NFTs to the DOT ecosystem, and leading the way in building the next generation.

This challenge called for the creation of a detailed dashboard that tracks the evolution of all RMRKs (potentially focusing on [Kanarias](https://kanaria.rmrk.app/)), including transfers, emote history, and more across RMRK2. This dashboard had to use a RMRK2 focused SubQuery project.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/4/100027174) was another excellent dashboard from Web3Go called the [NFT Garden](https://web3go.xyz/#/NFTProfiler). It includes in depth details about each NFT collection, such as average prices, volumes, price ranges, and all transactions for each single item. Additionally, there are some interesting visualisations on all the traits within NFTs.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Since the inception of Web3Go, we have been using SubQuery as the underlying architecture for data indexing. The development kit provided by SubQuery has proven to be very suitable for our team to quickly develop, deploy and upgrade projects, which is also the key to our good results on the Gitcoin Hackathon. In the next step, we will use Subquery to develop dashboards for all projects on the Polkadot & Kusama parachains, which will involve Defi, NFT, and Tokens!_” says Hao Ding from Web3Go.

## Extend SubQuery to another Layer-1 Blockchain

SubQuery is native to Polkadot, it’s our home and we’ve worked hard to build relationships in this ecosystem. In spite of this we also believe in a multi chain future, as we know that there are going to be many different blockchains working together to solve different problems. Our long term plan is to take SubQuery and to adapt it to work for other blockchains that don’t have a current indexing solution to help developers build new dApps.

The winner of [this US$12,000 challenge](https://gitcoin.co/issue/subquery/grants/5/100027175) was Naveen who extended SubQuery to index the Terra blockchain. This was implemented by creating a fork that extends the node package of the official subql implementation to index Terra. Naveen is continuing to work on this and you can expect news soon about SubQuery’s plans for support of other layer 1 chains outside of Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_I have been studying a bunch of indexers in the past few months and went as far as building an indexer from scratch. That might be the reason why SubQuery caught my attention in the Gitcoin GR12 Hackathon. I took up the task of extending SubQuery to index Terra. I did not believe that I could pull this off in 15 days. But, SubQuery was architected in such a magnificent manner that it allowed me to create a mental picture of what is happening under the hood very quickly. I hacked together a working solution just in time and I am currently working with SubQuery to merge the Terra indexer into the subql package. In the foreseeable future, I will be continuing to work with SubQuery to maintain and scale the project and possibly build indexers for several other layer 1 chains_” said Naveen.

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Following on from this successful Hackathon, SubQuery would like to encourage developers who would like to learn more about how to build applications with SubQuery to [register for our free online “Hero Course”, or apply for our recently announced Grants Programme](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
