# April 2022 Recap

![](https://miro.medium.com/max/1400/1*9eR-jHWwrouURDLyaRqe9w.png)

Welcome to the latest SubQuery Monthly Update!

In the past month we have made big strides in several areas, but the main focus remains on the SubQuery Frontier test network (with the first season completed without incident!). With some more learnings under our belt, we were able to start the second season, with a grander mission to test more features with more participants.

Speaking of battle-tested, we also received the news that we passed our smart contract audit this month, marking another step in our path towards TGE. Meanwhile, we also announced partnerships with several teams in Polkadot and announced the first SubQuery Grants Winner.

## SubQuery Network

### SubQuery Frontier Season 1 Completed

In April we successfully completed the first season of the SubQuery Frontier testnet. Season 1 of the SubQuery Frontier testnet had the following goal: find and fix critical bugs and documentation issues relating to the main day-to-day indexer actions. To help us with this, we enlisted 23 node operators with experience in running high performance and scalable productions with monitoring and wallet/infrastructure security.

<iframe width="692" height="389" src="https://www.youtube.com/embed/hZ1Mn-jOuHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We focused on what we called the "main Indexer actions" in this season, which includes the basic onboarding flow for Indexers to register, start processing a SubQuery project, and sell data to the Network. We collected a huge amount of data and feedback from this season, including some critical UX bugs, feedback on the indexer services, and reports on the performance of our services across different cloud providers. All participating indexers were able to get started without issues, a testament to the quality of the documentation and the indexer applications that our team has built.

> _"Overall experience is good, everything neat, intuitive and clear. A lot changed along the way, and we are looking forward to report more bugs we will find in Season 2, in order to make a smooth start of the genesis SubQuery Network!"_ --- Season 1 participant

In summary, our team was pleasantly surprised by the lack of any major issues and we were happy to quickly move on to season 2, a closed beta with an extended number of participants. Season 2 will be rolling out with new features including a leaderboard, where Indexers will battle to surpass one another in the rankings. This next phase will be particularly important for us on many fronts. Chiefly, by inviting a higher volume of participants, we hope to simulate load; upwards of 200 million requests/day to ensure the network is equipped and capable of managing this all-the-while maintaining uptime and quality experience.

[Read the full report](https://blog.subquery.network/blogs/20220427-frontier-season-1-report.html)

### SubQuery Network Passes Smart Contract Audit by Hacken

We were pleased to announce that the first batch of SubQuery Network smart contracts passed audit by Hacken.

[Hacken is a leading security consulting company](https://hacken.io/) with a focus on blockchain security and will play an important role in the eventual decentralisation of SubQuery's indexing service. Commenting on the importance of the partnership with Hacken, Ian He, CTO of SubQuery, shared, *"SubQuery has established itself as a critical part of Polkadot's infrastructure and we are excited to have had Hacken validate our smart-contract security as it means we are one step closer to our vision of leading a Web3 data revolution"*

[Read more here](https://blog.subquery.network/blogs/20220412-hacken-audit.html)

[See the audit report here](https://hacken.io/audits/#subquery_network)

## Community

### Introducing SubQuery's Senior Ambassadors

SubQuery [launched an Ambassador programme](https://subquery.medium.com/introducing-the-subquery-ambassador-program-aa82613ab804) in August 2021 to find community leaders who were passionate about the potential of SubQuery. Our goal was to find self-starters that could spread the word about SubQuery in their local areas and provide support to new developers who were building innovative dApps and services within our ecosystem. Since the launch of the Ambassador programme, we identified several individuals who deserved a higher level of recognition and we would like to formally thank and introduce them.

[Read more here](https://subquery.medium.com/introducing-subquerys-senior-ambassadors-2bcf79b0e7cf)

![](https://miro.medium.com/max/1400/1*Vt1Q6l42C8zzKxCdYnOK8A.png)

Senior ambassadors summary by [@LittleM77312435](https://twitter.com/LittleM77312435)

### SubQuery Celebrates Winners of Gitcoin GR 13 Hackathon

Gitcoin is recognised as one of the preeminent blockchain developer communities focussed on creating community and applications for Web3. After running our first Gitcoin Hackathon in December 2021 and achieving fantastic results with many talented developers it was an easy decision to extend our partnership to the recent [Gitcoin GR 13 Hackathon](https://gitcoin.co/hackathon/gr13/onboard).

![](https://miro.medium.com/max/1400/0*nLJc5tsbsjq70-8o)

[SubQuery partnered with Gitcoin in March](https://subquery.medium.com/subquery-provides-web3-developers-more-opportunities-via-gitcoin-hackathon-89371692a36a) to sponsor [four bounties with a total prize pool of up to $22,000](https://gitcoin.co/hackathon/gr13/?org=subquery). The Hackathon took place from March 9th --- 24th 2022 with participants from all around the world contributing to the bounties. The prizes are granted to those who have successfully completed the projects to the pre-set standards, and who deliver the most creative ideas, or those or solve areas to improve the core SubQuery SDK.

[Read more here](https://blog.subquery.network/blogs/20220413-gr13-winners.html)

### Dapplooker is Celebrated as the First Graduate from the SubQuery Grants Programme

[Dapplooker](https://dapplooker.com/) have integrated with SubQuery so that beautiful and easy-to-build analytic tools such as explorers, charts and dashboards can be built on top of any SubQuery dataset. Whether a SubQuery project was built by you or someone else in the community, you can use DappLooker to graph, chart, and visualise the data from within it. Until now, SubQuery's managed service only provided a GraphQL endpoint, but with Dapplookers innovation you can now more easily explore hundreds of datasets and do analytics on SubQuery data using intuitive "Visual SQL".

![](https://miro.medium.com/max/1400/0*2AXrjfXXMmfybC1w)

For example, you can use the existing Polkadot crowdloan auction dataset in dAppLooker and [create a dashboard](https://dapplooker.com/dapp/polkadot-auctions-and-crowdloans-120113?network=subquery&category=subquery&type=dashboard&udid=0) with a key focus on the retention of contributors across the auctions. [This example dashboard](https://dapplooker.com/dapp/subquery-moonbeam-120116?network=subquery&category=subquery&type=dashboard&udid=0) uses SubQuery's indexed Moonbeam EVM data and highlights peaks and troughs as well as success versus failed transactions in the Moonbeam network.

> _"We founded DappLooker to make blockchain data accessible so even non-technical users can easily create charts and dashboards to visualise information. Thanks to the SubQuery Grants Programme we are now able to provide more value to the Polkadot ecosystem with our integration and we can't wait to see how people use it. As we progressed through our Grant milestones, the SubQuery team were fantastic to work with as they solved any query we had including solving technical challenges very quickly."_ - Abhinav, Co-Founder, DappLooker

[Read more here](https://blog.subquery.network/customer_announcements/20220425-dapplooker-grant.html)

### Announcing SubQuery's New Website

The public website is often the first thing people see and visit when looking at a company or product. It can create a lasting first impression, imprint a brand in your memory, and communicate the story behind what we do. Today we are excited to announce a new and improved website design for SubQuery.

![](https://miro.medium.com/max/1400/1*t0NZ-s2vnRk18T3sX-zoHw.png)

> _"SubQuery has bold ambitions and we needed an updated visual identity that reflects that vision. By modernising our layout and improving the visual hierarchy with new typography and colours, we provide our website visitors a fresh experience and insight into SubQuery. Personally, I'm a big fan of the new illustrations which were created for our Frontier testnet as they create an extra dimension in the evolution of our brand story"_ - Cassie Wang, UX Designer at SubQuery

We hope you enjoy the website as much as we do! Take a look today at [https://subquery.network](https://subquery.network/) or read about the [process that our talented designers took here](https://blog.subquery.network/blogs/20220421-website-update.html).

## Core Product Development

We've been hard at work over the past month improving and optimising our core SubQuery product so it works perfectly on the SubQuery Network. This includes a huge amount of minor bug fixes and a couple of new features.

The month culminated in the release of version 1.0.0 of our project manifest, which brings some much needed improvements to the project manifest to allow customers to index multiple chains and manage larger projects more effectively. The benefits these changes bring will be made clear very soon as we add support for more layer 1 networks including previously announced Avalanche.

### GraphQL Subscriptions

SubQuery now also supports GraphQL subscriptions. Like queries, subscriptions enable you to fetch data. Unlike queries, subscriptions are long-lasting operations that can change their result over time. Subscriptions are very useful when you want your client application to change data or show some new data as soon as that change occurs or the new data is available. Subscriptions allow you to *subscribe* to your SubQuery project for changes.

[Read about how you can implement GraphQL subscriptions here](https://university.subquery.network/run_publish/subscription.html)

## Other things you might have missed

### Moonbeans Create a One-Stop Shop of NFT Data with SubQuery

Moonbeans, a community focused NFT marketplace that has taken the Moonbeam and Moonriver ecosystems by storm brings together artists, creators, and crypto enthusiasts on a single platform to create and trade the top NFTs on the Moonriver (and soon-to-be Moonbeam) network. [Their project, which can be found in the SubQuery explorer](https://explorer.subquery.network/subquery/m00nbeans/marketplace-v3), aggregates events on their NFT marketplace and provides easy access to current listing data, trade history, and more.

[Read more here](https://subquery.medium.com/moonbeans-create-a-one-stop-shop-of-nft-data-with-subquery-5158ff8493f9)

![](https://miro.medium.com/max/1400/1*cicFJJo7chmTr0P13-ZOwg.png)

### SubQuery Empowers MOVR Place to Make a Difference

SubQuery is extremely proud to be the data provider powering [MOVR Place](https://movr.place/), the first blockchain-based collaborative art canvas made for charity. MOVR Place utilises SubQuery to quickly render data on the front-end, compared to querying the EVM data on-chain directly.

![](https://miro.medium.com/max/1400/1*Qbf4B75fGIKYYGjloG5PXQ.png)

MOVR Place was built to create a fun and positive way to make a difference. Upon making a contribution to the canvas the user can choose from a selection of charities which range from Humanitarian and Military aid for the Ukraine crisis to the Global Fund for Children. Each pixel costs USD$0.05 worth of MOVR at the time the project launched and 100% of the proceeds go to the chosen charities.

[Read more here](https://subquery.medium.com/subquery-empowers-movr-place-to-make-a-difference-80710efdcddb)

### Talisman Leverage SubQuery to Provide Key Crowdloan Insights

Talisman is a community-owned wallet built for [Polkadot](https://polkadot.network/) and [Kusama](https://kusama.network/). It allows users to take control of their crypto assets and help shape the future of the project.

Talisman's aim is to provide the ability to use all the applications in the ecosystem with the Talisman Wallet, and create an information rich asset dashboard with the Talisman web app.

The team currently use SubQuery to index information for the [Talisman crowdloans dashboard](https://app.talisman.xyz/crowdloans), where users can contribute to any Crowdloan opportunity in Polkadot and Kusama.

![](https://miro.medium.com/max/1400/1*ZF6SV_FXUPGq7X1UD9r3YQ.png)

![](https://miro.medium.com/max/1400/0*WV0MLOXx542fT5VM)

> _"Talisman is working to provide a wallet that can traverse every parachain in the Polkadot/Kusama ecosystem which all have unique use-cases. Talisman are the perfect example of a team focusing leveraging SubQuery to reduce time spent on the back-end while focusing on their dApp content and users."_ -James Bayly, Head of Business Development at SubQuery

[Read more here](https://subquery.medium.com/talisman-leverage-subquery-to-provide-key-crowdloan-insights-bd39f9221502)

---

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and [our social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
