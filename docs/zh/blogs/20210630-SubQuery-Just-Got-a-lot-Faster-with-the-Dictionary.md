# 有了字典，SubQuery 变得更快了

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

今天，我们自豪地宣布我们对 SubQuery 字典索引功能的新改进。

SubQuery 字典就是用来加速你的项目的。 它极大地提高了SubQuery项目的索引性能，< 0 > 有时可以快10倍

在索引链数据时，SubQuery Project用来检查每个方块。 Polkadot的链条庞大，近600万个区块的无结构数据超过了130GB。 这需要许多小时才能索引，您不想等待——特别是在测试时。

SubQuery 项目现在可以选择跳过所有这一切，我们基本上将所有事件的位置预设索引。

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Performance is improved the most when the data is not a common occurrence, but instead interspersed along the chain, as if the data is rare, the Dictionary skips more blocks, and therefore the impact on performance is greater.

The Dictionary endpoint can be added in [your ‘project.yaml’ file](https://doc.subquery.network/create/manifest.html), or alternatively [specified at run time](https://doc.subquery.network/run/run.html#using-a-dictionary). Additionally, you can also override this endpoint when running your Project in [SubQuery Projects](https://project.subquery.network/). Additionally, you can also override this endpoint when running your Project in [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

You can read more about the dictionary in our [helpful documentation here](https://doc.subquery.network/run/run.html#using-a-dictionary).

We believe SubQuery is the best data indexing option available for any Polkadot/Substrate dApp, and this new implementation of SubQuery’s Dictionary allows us to further improve our service by speeding up the indexing process for your SubQuery Projects.

You can try it yourself in [SubQuery Projects](https://project.subquery.network/) or view the dictionaries themselves in [our explorer](https://explorer.subquery.network/). In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0 In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)