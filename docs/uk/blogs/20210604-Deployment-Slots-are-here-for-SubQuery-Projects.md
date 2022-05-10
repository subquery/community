# Слоти розгортання призначені для проектів SubQuery

> Today we’re introducing deployment slots, a whole new feature that improves the developer experience in SubQuery’s hosted service.

[SubQuery Projects](https://project.subquery.network/) is already being used as a managed and hosted service for many Projects, whether they’re chain explorers, wallets, NFT explorers, or others. It’s a service that our customers rely on.

![](https://miro.medium.com/max/1400/0*PugDgh6weZspRIO2)

You can now deploy to a isolated staging slot

Although you can always run SubQuery’s infrastructure yourself (with your own node and query service), we aim to make our hosted service the most reliable, resilient, and performant data provider in the Polkadot/Substrate ecosystem.

Creators of [SubQuery Projects](https://project.subquery.network/) are constantly improving and updating their Projects and the data within those projects. Unfortunately it takes hours if not days to reindex chain data in the event of a major change — ultimately our goal to to allow you to update your Project, reindex your data, and upgrade your hosted SubQuery Projects with **zero downtime**

**That’s what deployment slots are here to solve**

![](https://miro.medium.com/max/1400/0*vQ33aqhn1eVllo5t)

Your staging slot will run independently of the primary production slot

When creating a new deployment to your [SubQuery Project in our hosted service](https://project.subquery.network/), you can choose to either deploy to the production or staging slot. These two slots are isolated environments, each has its own database and sync independently. Once your staging slot has started and completed indexing, you can then promote it to production with zero downtime.

The staging slot is perfect for:

-   Validating changes to your SubQuery Project in a separate environment. The staging slot has a different URL to production that you can use in your dApps.
-   Warming up and indexing data for an updated SubQuery project to eliminate downtime in your dApp
-   Preparing a new release for your SubQuery Project without exposing it publicly. The staging slot is not shown to the public in the Explorer and has a unique URL that is visible only to you.

You can try it yourself now in [SubQuery Projects](https://project.subquery.network/).