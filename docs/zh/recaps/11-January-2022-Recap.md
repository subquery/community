# January Recap

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

Hi everyone, and welcome to 2022! Last year was huge for us at SubQuery but after a much needed summer holiday here in New Zealand the team are well rested and energised by the potential ahead of us. This year is going to be the year of the decentralised data revolution!

As always, we are breaking down our monthly update into three sections; community, core product development, and the SubQuery Network.

## Community

SubQuery’s community is expanding rapidly in terms of numbers and regions we cover! As a result, we have a lot to talk about in this area.

### SubQuery Partners With Leading Polkadot Teams On Technical Bounties via the SubQuery Grants Programme

Last month we launched the SubQuery Grants Programme, a non dilutive accelerator to help developers in our community build the next generation of dApps. This month we’ve talked to our partners to release a first round of bounties in partnership with Moonbeam, Acala, Astar and Bifrost as projects for inspiration. All are open to apply now, and as a bonus, if your application is successful you’ll get to work closely with the parachain team that suggested the challenge!

Applicants who are interested in any of these bounties are encouraged to submit their proposal with the budget required to complete the task and other requirements [here](https://docs.google.com/forms/d/e/1FAIpQLSfmMazkebKwNTWThBkVGaxf2Bg8s4aWZ0ZhwiMCtc9kv4sJHQ/viewform). Additionally, we look forward to announce the first round of SubQuery grantees in February.

[Read more here](../blogs/20220127-grants-bounties.md)

### SubQuery Celebrates Winners of Gitcoin GR 12 Hackathon

[SubQuery partnered with Gitcoin in December](../blogs/20211120-gitcoin12-hackathon.md) to sponsor five challenges to a value of USD$37,000 (the largest prize pool in the challenge), inviting developers to build useful tools, dashboards and even extend SubQuery to another Layer-1 blockchain.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Recently we’ve covered the many winners that participated in this hackathon and the amazing projects that they have built in [this detailed writeup](../blogs/20220120-gr12-winners.md). We were blown away by the quality and progress made by the submissions in such a short time and we’re pleased to invite many of the submissions to participate in our grants programme.

[Read more here](../blogs/20220120-gr12-winners.md)

### Hero Course China

Our Hero Course made in partnership with OneBlock+ started in early January and now we already have released three lessons to over 200 students! Join the OneBlock+ Community to join this course or office hours. China is a strategically important region for SubQuery, but we expect to launch many other regional developer courses soon — reach out if you can help us with this!

![](https://miro.medium.com/max/1400/1*_8N000hX1WBM79ZbFyhvYQ.png)

## Core Product Development

### Multi Chain Support

SubQuery is native to Polkadot, it’s our home and we’ve worked hard to build relationships in this ecosystem. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability. We stand by that vision and we also believe Polkadot will be a leading player in that initiative.

But we believe in a multi chain future, we know that there are going to be many different interoperable blockchains working together to solve different problems. Our long term plan has always been to take SubQuery and to adapt it to work for other blockchain that don’t have a current indexing solution. Our multi-chain approach that we’ve needed to make for Polkadot means we are uniquely suited for this challenge.

We’re finalising the work on the first of 5 new layer 1 chains that SubQuery will be indexing, we can’t wait to announce it soon!

![](https://miro.medium.com/max/1400/1*jD1n5MSjeatjiaF5hY-Wjg.png)

### SubQuery Performance Improvements

SubQuery’s indexing speed is always being improved, it’s a constant focus on our development team. Our advanced Dictionary support means enables this, Dictionaries speed up your project by many multiples and allow you to index entire Polkadot chain in minutes, not hours (depending on your project complexity).

As an indicator of the breadth of support that SubQuery offers to the Polkadot ecosystem, we are now hosting and managing dictionaries across the 31 different networks, representing the majority of all major Polkadot/Kusama parachains.

![](https://miro.medium.com/max/1400/1*WeMY5WnWZ_jvllxidhycUA.png)

### SubQuery Templates Registry

**29 networks are covered by templates**

The `subql init` command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

Today when you write `subql init`, you are presented with a list of 29 networks from which you are provided a pre-created scaffold with all the correct endpoints, dictionary links, and even type definitions. This eliminates one of the most difficult steps when starting a new SubQuery project and makes building your next big dApp that much easier and faster.

### Data Aggregation Features

SubQuery now supports advanced GraphQL aggregate functions to allow you to perform a calculation on a set of values during your query. These functions provide our customers a richer set of insights and calculations from their existing data set. For example with a single query you can calculate the median contribution amount for each crowdloan broken down by contribution date.

[Read more about how to use these features in our upgraded docs.](https://doc.subquery.network/query/aggregate/)

### SubQuery partners with Darwinia Network to build SubQuery’s CLI Tool

Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions. This includes a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the best experience in the entire Polkadot ecosystem.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia have also been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service (https://project.subquery.network). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. [Read more here](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## SubQuery Network

Last community call we walked through a few important details of the upcoming SubQuery test network. It will be run over at least three seasons, each season will test different aspects of the network:

- Season 1: Early stage alpha testing of a limited number of features with a select few participants
- Season 2: Large beta testing of more features with hundreds of participants
- Season 3: Full public test network for load and scale testing with thousands of participants

Each season will have multiple challenges that you can complete which may result in real SQT rewards. Expect things to kickoff here in March!

## Roadmap Update

Last October we released out [technical roadmap](https://blog.subquery.network/blogs/20211029-roadmap-october.html) with the next year mapped out for SubQuery, we’re overdue to address exactly how we’re doing here.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

As you can see in the original roadmap above, we’ve completed all of Milestone 0 and 1, and are making good progress on Milestone 2. We’ve even delivered some features relevant to our hosted service much earlier than expected due to the huge scale of requests currently going to [our enterprise customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## Other things you might have missed

- We will be having weekly office hours on our Discord Server! Join SubQuery’s ‘Office Hours’ on our stages channel where you can catch-up with the team in a casual environment.
- We had a Russian QnA with James & Dmytro in Discord where all questions were asked and answered in Russian. Let us know which language you would like to hear next

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and our [social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
