# 2022年1月回顾

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

大家好，欢迎来到2022年！ 去年是SubQuery发展巨大的一年。在新西兰经过了一个暑假之后，团队得到了充分的休息，并被SubQuery的潜力所激励。 今年将是去中心化数据革命的一年！

跟往常一样，我们将每月更新分为三个部分；社区、核心产品开发和SubQuery网络。

## 社区

SubQuery的社区的数量和覆盖的地区正在迅速扩大！ 因此，我们在这方面有很多要分享的。

### SubQuery与领先的Polkadot团队合作，通过资助计划进行技术奖励

上个月，我们启动了SubQuery资助计划，这是一个非稀释性加速器，旨在帮助我们社区的开发者构建下一代dApps。 本月，我们与合作伙伴进行了沟通，与Moonbeam、Acala、Astar和Bifrost合作，为富有创意的项目发布了第一轮奖金。 现在所有人都可以申请奖励，如果你申请成功，你将与提出挑战的平行链团队密切合作！

我们鼓励对这些奖金感兴趣的申请人提交建议书，并附上完成任务所需的预算和其他要求。 此外，我们期待着在2月份宣布第一轮SubQuery受赠人。

[阅读更多](../blogs/20220127-grants-bounties.md)

### SubQuery祝贺Gitcoin GR 12 Hackathon的获胜者们

[SubQuery partnered with Gitcoin in December](../blogs/20211120-gitcoin12-hackathon.md) to sponsor five challenges to a value of USD$37,000 (the largest prize pool in the challenge), inviting developers to build useful tools, dashboards and even extend SubQuery to another Layer-1 blockchain.

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), SubQuery的首席执行官和创始人评论过，“_SubQuery对Gitcoin GR12Hackathon的成果感到高兴。 我们的使命在于拥有一个开发者网络，这些开发者有权在Subscriber/Polkadot生态系统中创造和创新。 这种合作关系为世界各地有志于开发未来应用程序的开发者提供了机会。 我们期待挑战的赢家，进一步发展他们的创意。_”

Recently we’ve covered the many winners that participated in this hackathon and the amazing projects that they have built in [this detailed writeup](../blogs/20220120-gr12-winners.md). 在如此短的时间内提交的材料的质量和进展让我们震惊，我们很高兴地邀请更多提交材料的开发者参加我们的资助计划。

[阅读更多](../blogs/20220120-gr12-winners.md)

### 中国英雄课程

我们与OneBlock+合作制作的英雄课程于1月初开始，现在我们已经向200多名学生发布了三堂课！ 加入OneBlock+社区，加入本课程。 中国对于SubQuery来说是一个具有战略意义的重要地区，但我们预计很快会推出许多其他地区开发者课程——如果你能帮助我们，请联系我们！

![](https://miro.medium.com/max/1400/1*_8N000hX1WBM79ZbFyhvYQ.png)

## 核心产品开发

### 多链支持

SubQuery源于Polkadot，它是我们的家，我们一直努力在这个生态系统中建立关系。 Polkadot的核心前提是创造一个蓬勃发展的开发者、用户和企业界，发掘其多功能互操作性。 我们坚持这一愿景，我们也相信Polkadot生态系统将在其中发挥主导作用。

我们相信在一个多链的未来，将有许多不同的可互操作区块链共同解决不同的问题。 我们的长期计划一直是使SubQuery适用于当前没有索引解决方案的其他区块链。 我们在Polkadot的多链解决方案显示了我们非常适合这一挑战。

我们即将完成SubQuery要索引的5个新的 layer 1 链中的第一个，完成后会在第一时间告诉大家！

![](https://miro.medium.com/max/1400/1*jD1n5MSjeatjiaF5hY-Wjg.png)

### SubQuery性能改进

SubQuery的索引速度一直在提高，这是我们开发团队一直关注的焦点。 我们的高级字典支持意味着实现了这一点，字典可以将你的项目速度提高很多倍，并允许你在几分钟而不是几小时内（取决于你的项目复杂性）索引整个Polkadot生态链。

作为SubQuery为Polkadot生态系统提供的广泛支持的一个指标，我们现在在31个不同的网络上托管和管理字典，代表了Polkadot/Kusama平行链中的大部分。

![](https://miro.medi.com/max/1400/1*WeMY5WnWZ_jvllxidhycUA.png)

### SubQuery模板注册表

**29 networks are covered by templates**

The `subql init` command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

Today when you write `subql init`, you are presented with a list of 29 networks from which you are provided a pre-created scaffold with all the correct endpoints, dictionary links, and even type definitions. This eliminates one of the most difficult steps when starting a new SubQuery project and makes building your next big dApp that much easier and faster.

### 数据聚合功能

SubQuery now supports advanced GraphQL aggregate functions to allow you to perform a calculation on a set of values during your query. These functions provide our customers a richer set of insights and calculations from their existing data set. For example with a single query you can calculate the median contribution amount for each crowdloan broken down by contribution date.

[Read more about how to use these features in our upgraded docs.](https://doc.subquery.network/query/aggregate/)

### SubQuery与Darwinia Network合作构建SubQuery的CLI工具

Darwinia has partnered with SubQuery to build the plethora of applications that will be needed to provide the ultimate user experience for cross chain interactions. This includes a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the best experience in the entire Polkadot ecosystem.

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif)

Darwinia have also been working closely with the SubQuery team to [build a CLI tool](https://github.com/fewensa/subquery-cli) for the SubQuery managed service (https://project.subquery.network). You can use this [CLI](https://github.com/fewensa/subquery-cli) to create a SubQuery project and automatically deploy a new version to either the staging or production slot. Additionally you can retrieve information including the detailed syncing status and logs from your running project that is hosted for free in SubQuery Projects. [Read more here](../customer_announcements/20220125-subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool.md)

## SubQuery网络

Last community call we walked through a few important details of the upcoming SubQuery test network. It will be run over at least three seasons, each season will test different aspects of the network:

- 第1季：选择少数参与者对有限数量的功能进行早期阿尔法测试
- 第2季：数百名参与者参与更多功能的大型beta测试
- 第3季：拥有数千名参与者负载和规模的完整公共测试

Each season will have multiple challenges that you can complete which may result in real SQT rewards. Expect things to kickoff here in March!

## 路线图更新

Last October we released out [technical roadmap](https://blog.subquery.network/blogs/20211029-roadmap-october.html) with the next year mapped out for SubQuery, we’re overdue to address exactly how we’re doing here.

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

As you can see in the original roadmap above, we’ve completed all of Milestone 0 and 1, and are making good progress on Milestone 2. We’ve even delivered some features relevant to our hosted service much earlier than expected due to the huge scale of requests currently going to [our enterprise customers](https://blog.subquery.network/blogs/20211228-enterprise-hosted.html).

## 您可能错过的其他内容

- 我们将在Discord服务器上开放每周一次的Office Hour！ 在频道上加入SubQuery的“Office Hour”，你可以在轻松的环境中与团队交流。
- James和Dmytro在Discord中进行了一次俄语QnA，全部用俄语提问和回答。 让我们知道你接下来想听哪种语言。

P.S.

Remember to join our [Discord](https://discord.com/invite/subquery) and our [social channels](https://linktr.ee/subquerynetwork) to stay updated on our latest news and announcements.

The SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
