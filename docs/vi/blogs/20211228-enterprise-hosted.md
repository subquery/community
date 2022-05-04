# SubQuery Provides Customers with Enterprise Support

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

As our community grows larger we are seeing hundreds of deployments and exponentially more traffic to our hosted service each and every day. The team at SubQuery are rising to this challenge however and are scaling our services to meet the unprecedented demand for our tools by our customers, while keeping our [hosted service](https://projects.subquery.network/) free.

Many customers now rely on SubQuery to provide mission critical data to their production apps. These customers represent some of the largest wallets ([Nova](https://novawallet.io/) and [Fearless](https://fearlesswallet.io/)), scanners ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), and [DotMarketCap](https://dotmarketcap.com/)), NFT platforms ([Kodadot](https://kodadot.xyz/) and [Yuser](https://yuser.co/)), and more. These are huge applications that the Polkadot community use on a daily basis and must be online at all times.

The performance and reliability of our hosted service has been on the top of our priority list for some time here at SubQuery. Our sister team is OnFinality, Polkadot’s largest infrastructure provider, so we have plenty of experience in this area. As a result, today we are going to walk through three recent improvements that will make SubQuery the most reliable, scalable, and performant data platform in Polkadot.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

## Dedicated Databases

Initially, all SubQuery projects were deployed to shared databases in our infrastructure to save money and allow our service to remain free. However, this would cause high traffic projects with large data sets to strangle other projects hosted in the same database.

If you’re building a project that is designed for production use, we offer a dedicated database hosted in our SubQuery clusters that can give your project all the resources it needs to handle thousands of complicated queries without worrying about performance impact from others.

You should get in touch with us at sales@subquery.network if you’d like to upgrade to this. We replicate your data from your existing tables so you don’t need to spend time reindexing data you already have resulting in a migration with zero downtime.

## Multiple Cluster Support

Resiliency and reliability mean everything to us at SubQuery. Having a redundant cluster in a separate part of the world means that we can quickly recover from cloud provider outages that occasionally take regions offline.

Additionally, when you make a request to a SubQuery project in our hosted service, the majority of the waiting time comes from latency. Latency is the point to point time it takes your request to circle the world to the nearest SubQuery cluster and can take up to a second or two from some remote regions. Having multiple clusters around the world allows us to reduce the most significant part of the request time (the latency).

We’ve implemented multiple clusters in different regions that provide the same service. This work also includes a tool in [SubQuery Projects](https://project.subquery.network/) that allows you to deploy and manage your project across these clusters. We’ve also implemented processes that ensure that databases in different regions stay consistent, so that regardless of which cluster your request goes to, the data that you receive is consistent.

## Định tuyến thông minh

Once we have SubQuery clusters running in different regions, the next logical step is to make this feature invisible to your users. Your users should never have to decide what cluster their requests go to, SubQuery should automatically route their requests to the closest healthy cluster. This is what SubQuery’s intelligent routing provides.

We offer a single global endpoint to each premium customer that has intelligent routing automatically applied to each and every request. This service includes considerable monitoring that constantly ping each cluster for health checks and ensure that a user is never routed to a cluster that is overwhelmed or offline. The global endpoint optimises the routing for each request to the nearest cluster to ensure your users receive the best performance from your clusters.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

In summary, these services allow us to offer our premium service to more customers with confidence. We work with each customer to understand their business and goals, and then to set up a service to meet their needs. SubQuery is the largest data service provider in Polkadot, and these features show how we support thousands of community projects at the same time as the biggest projects in Polkadot.

## About SubQuery Network

SubQuery is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today.

SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG)| [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
