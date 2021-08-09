![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)


今天，我们自豪地宣布我们对 SubQuery 字典索引功能的新改进。

SubQuery 字典完全是关于加速您的项目。 它极大地提高了您的 SubQuery 项目的索引功能。 **有时高达10x 更快。**

在索引链数据时，SubQuery Project用来检查每个方块。 Polkadot的链条庞大，超过了近600万个区块的无结构数据130GB。 这需要许多小时才能索引，您不想等待——特别是在测试时。

子查询项目现在可以跳过所有这一切，我们基本上将所有事件的位置预设索引。

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

当数据不是常见的情况时，性能会得到最好的改进，而是沿着链条交错了， 似乎数据很少，字典跳过更多的模块，因此对性能的影响更大。

字典端点可以添加到 [你的 'project.yaml' 文件](https://doc.subquery.network/create/manifest.html)中，或者在运行时指定 [](https://doc.subquery.network/run/run.html#using-a-dictionary) 中。 此外，您还可以在运行 [SubQuery 项目](https://project.subquery.network/) 中的项目时覆盖此端点。

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

您可以在我们的 [有用的文档中阅读更多关于字典的信息](https://doc.subquery.network/run/run.html#using-a-dictionary)

我们认为SubQuery 是任何Polkadot/ Substrate dapp的最佳数据索引选项。 和 SubQuery 字典的新实施使我们能够通过加速您的 SubQuery 项目的索引过程来进一步改进我们的服务。

您可以在 [SubQuery 项目](https://project.subquery.network/) 中尝试它，或者在 [我们的探索者](https://explorer.subquery.network/) 中查看字典本身。 为了在您现有的项目中使用字典，您的 [@subql/cli](https://www.npmjs.com/package/@subql/cli) 版本必须至少 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)