# 可部署插槽为 SubQuery 项目提供服务

> 今天，我们将介绍部署插槽，这是一个全新的特性，它改善了SubQuery托管服务中的开发人员体验。

[SubQuery Projects](https://project.subquery.network/)已经被用作许多项目的管理和托管服务，这些项目有区块链浏览器、钱包、NFT浏览器等等。 SubQuery Projects 已成为我们的客户所依赖的服务。

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

现在起，您可以部署项目到一个单独的中转插槽。

尽管您总是可以自己运行SubQuery的基础设施(使用您自己的节点和查询服务)，但我们的目标是使我们的托管服务成为Polkadot/Substrate生态系统中最可靠、最有弹性和性能最好的数据提供商。

[SubQuery 项目](https://project.subquery.network/) 的创建者正在不断改进和更新他们的项目以及这些项目中的数据。 不幸的是，如果发生重大更改，需要花费数小时(如果不是数天)来重新索引链数据——我们的最终目标是允许您在** 0停机时间**的情况下更新项目、重新索引数据和升级托管的SubQuery项目

**这就是部署插槽来解决的问题。**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

您的中转插槽将独立于主生产插槽外运行。

当在我们的托管服务[中为您的](https://project.subquery.network/)SubQuery项目创建新部署时，您可以选择部署到生产环境插槽或中转插槽。 这两个插槽是各自独立的环境，分别有自己的数据库并独立地同步。 一旦你的中转插槽已经开始并完成同步，你就可以在零停机后发布到生产环境。

中转插槽对以下支持非常完美：

-   在单独的环境中验证您的 SubQuery 项目的更改。 中转插槽有一个不同的用于生产的URL，可以在dApps中使用它。
-   为更新的SubQuery项目预热和索引数据，以消除dApp中的停机时间
-   为您的SubQuery Project准备一个新版本，而不公开它。 中转插槽不会在Explorer中显示给公众，它有一个唯一的URL，仅对您可见。

您现在可以在 [SubQuery 项目](https://project.subquery.network/) 中体验。