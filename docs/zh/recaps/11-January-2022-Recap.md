# 2022年1月回顾

![](https://miro.medium.com/max/1400/1*2IMAaY-YYyAdl7YfZqHTAg.png)

大家好，欢迎来到2022年！ 去年是SubQuery发展巨大的一年。在新西兰经过了一个暑假之后，团队得到了充分的休息，并被SubQuery的潜力所激励。 今年将是去中心化数据革命的一年！

跟往常一样，我们将每月更新分为三个部分；社区、核心产品开发和SubQuery网络。

## 社区

SubQuery的社区的数量和覆盖的地区正在迅速扩大！ 因此，我们在这方面有很多要分享的。

### SubQuery与领先的Polkadot团队合作，通过资助计划进行技术奖励

上个月，我们启动了SubQuery资助计划，这是一个非稀释性加速器，旨在帮助我们社区的开发者构建下一代dApps。 本月，我们与合作伙伴进行了沟通，与Moonbeam、Acala、Astar和Bifrost合作，为富有创意的项目发布了第一轮奖金。 现在所有人都可以申请奖励，如果你申请成功，你将与提出挑战的平行链团队密切合作！

我们鼓励对这些奖金感兴趣的申请人提交建议书，并附上完成任务所需的预算和其他要求。 此外，我们期待着在2月份宣布第一轮SubQuery受赠人。

[阅读更多](https://subquery.medium.com/subquery-partners-with-leading-polkadot-teams-on-technical-bounties-via-the-subquery-grants-d40453788435)

### SubQuery祝贺Gitcoin GR 12 Hackathon的获胜者们

[SubQuery于12月与Gitcoin合作。](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) 为五项挑战赞助价值37000美元（挑战中最大的奖金池），邀请开发者构建有用的工具和仪表盘，甚至将SubQuery扩展到Layer-1区块链。

![](https://miro.medium.com/max/1400/1*BUq3ah1ULNnvLjqxv_vzlQ.png)

[Sam Zou](https://twitter.com/zoujialiu), SubQuery的首席执行官和创始人评论过，“_SubQuery对Gitcoin GR12Hackathon的成果感到高兴。 我们的使命在于拥有一个开发者网络，这些开发者有权在Subscriber/Polkadot生态系统中创造和创新。 这种合作关系为世界各地有志于开发未来应用程序的开发者提供了机会。 我们期待挑战的赢家，进一步发展他们的创意。_”

最近，我们已经报道了许多参加这次黑客竞赛的获奖者，以及他们构建的令人惊叹的项目。 在如此短的时间内提交的材料的质量和进展让我们震惊，我们很高兴地邀请更多提交材料的开发者参加我们的资助计划。

[阅读更多](https://subquery.medium.com/subquery-celebrates-winners-of-gitcoin-gr-12-hackathon-7486afaeab29)

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

> 模板涵盖29个网络

subql init命令对于任何构建了SubQuery项目的人来说都是熟悉的命令；它代表着一幅空白的画布——无限的机会。 我们意识到我们可以更好地帮助其他人入门，给开发人员一个所有非功能代码都已经编写好的支架，而不是一个完全空白的画布。

今天，当你编写*subql init*时，会看到一个包含29个网络的列表，其中提供了一个预先创建的支架，其中包含所有正确的端点、字典链接，甚至类型定义。 这消除了启动新SubQuery项目时最困难的步骤之一，并使构建下一个大型dApp变得更容易、更快。

### 数据聚合功能

SubQuery现在支持高级GraphQL聚合函数，允许你在查询期间对一组值执行计算。 这些功能为我们的客户提供了一组更丰富的洞察和现有数据集的计算。 例如，通过一个查询，你可以计算按供款日期细分的每个众筹贷款的供款金额中间值。

[阅读更多关于如何在我们升级的文档中使用这些功能的信息。](https://doc.subquery.network/query/aggregate/)

### SubQuery与Darwinia Network合作构建SubQuery的CLI工具

Darwinia与SubQuery合作开发了大量的应用程序，为跨链交互提供最终的用户体验。 这包括一个新的智能应用程序，它是管理所有达尔文网络交互的中心枢纽，包括治理、立桩、链探索等。 该应用程序使用大量SubQuery数据来显示历史数据和操作。 SubQuery将与Darwinia的团队密切合作，使其成为整个Polkadot生态系统中的最佳体验。

![](https://miro.medium.com/max/1200/1*bL2Csj9qyamD7txAheCTIg.gif
)

Darwinia还与SubQuery团队密切合作，为SubQuery托管服务构建CLI工具。 你可以使用此CLI创建SubQuery项目，并自动将新版本部署到暂存或生产插槽。 此外，您可以从 SubQuery 项目免费托管的运行项目检索信息，包括详细的同步状态和日志。 [在这里阅读更多](https://subquery.medium.com/subquery-partners-with-darwinia-network-to-build-subquerys-cli-tool-903dc4c9ef66)

## SubQuery网络

上一次社区通话中，我们浏览了即将到来的SubQuery测试网络的一些重要细节。 它将至少运行三季，每季将测试网络的不同方面：

- 第1季：选择少数参与者对有限数量的功能进行早期阿尔法测试
- 第2季：数百名参与者参与更多功能的大型beta测试
- 第3季：拥有数千名参与者负载和规模的完整公共测试

每季都会有多个挑战可以完成，这可能会带来真正的SQT奖励。 期待着三月的开始！

## 路线图更新

去年10月，我们发布了技术路线图，为SubQuery制定了下一年的计划，其实我们早就应该详细说明我们在这方面的工作了。

![](https://miro.medium.com/max/1400/1*2a3SGrW-OG5pbw67jsavvw.jpeg)

正如你在上面最初的路线图中所看到的，我们已经完成了里程碑0和1的所有工作，并且在里程碑2上取得了良好的进展。 我们甚至比预期更早地交付了一些与托管服务相关的功能，目前我们的企业客户收到了大量的请求。

## 您可能错过的其他内容

- 我们将在Discord服务器上开放每周一次的Office Hour！ 在频道上加入SubQuery的“Office Hour”，你可以在轻松的环境中与团队交流。
- James和Dmytro在Discord中进行了一次俄语QnA，全部用俄语提问和回答。 让我们知道你接下来想听哪种语言。

P.S.

记住加入Discord和我们的社交渠道，随时了解我们的最新新闻和公告。

关于Subuery Network

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
