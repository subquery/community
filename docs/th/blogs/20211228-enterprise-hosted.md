# SubQuery ฉลองผู้ชนะ Encode Club Hackathon

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

เมื่อชุมชนของเราเติบโตขึ้น เราก็เห็นการปรับใช้หลายร้อยรายการและปริมาณการใช้ข้อมูลที่เพิ่มขึ้นแบบทวีคูณไปยังบริการที่โฮสต์ของเราทุกวัน ทีมงานที่ SubQuery กำลังเผชิญกับความท้าทายนี้และกำลังขยายบริการของเราเพื่อตอบสนองความต้องการเครื่องมือของเราที่ไม่เคยเกิดขึ้นมาก่อนโดยลูกค้าของเรา ในขณะที่ยังคงให้บริการโฮสต์ของเราฟรี

ปัจจุบัน ลูกค้าจำนวนมากพึ่งพา SubQuery เพื่อให้ข้อมูลที่สำคัญต่อภารกิจแก่แอปที่ใช้งานจริง ลูกค้าเหล่านี้เป็นตัวแทนของกระเป๋าสตางค์ที่ใหญ่ที่สุด (Nova และ Fearless) สแกนเนอร์ (Subscan, SubVis และ DotMarketCap) แพลตฟอร์ม NFT (Kodadot และ Yuser) และอื่นๆ นี่เป็นแอปพลิเคชั่นขนาดใหญ่ที่ชุมชน Polkadot ใช้เป็นประจำทุกวันและต้องออนไลน์ตลอดเวลา

ประสิทธิภาพและความน่าเชื่อถือของบริการโฮสต์ของเราอยู่ในอันดับต้น ๆ ของรายการลำดับความสำคัญของเรามาระยะหนึ่งแล้วที่ SubQuery ทีมน้องสาวของเราคือ OnFinality ผู้ให้บริการโครงสร้างพื้นฐานรายใหญ่ที่สุดของ Polkadot ดังนั้นเราจึงมีประสบการณ์มากมายในด้านนี้ ด้วยเหตุนี้ วันนี้เราจะพูดถึงการปรับปรุงล่าสุดสามประการที่จะทำให้ SubQuery เป็นแพลตฟอร์มข้อมูลที่เชื่อถือได้ ปรับขนาดได้ และมีประสิทธิภาพมากที่สุดใน Polkadot

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

# Dedicated Databases

Initially, all SubQuery projects were deployed to shared databases in our infrastructure to save money and allow our service to remain free. However, this would cause high traffic projects with large data sets to strangle other projects hosted in the same database.

If you’re building a project that is designed for production use, we offer a dedicated database hosted in our SubQuery clusters that can give your project all the resources it needs to handle thousands of complicated queries without worrying about performance impact from others.

You should get in touch with us at sales@subquery.network if you’d like to upgrade to this. We replicate your data from your existing tables so you don’t need to spend time reindexing data you already have resulting in a migration with zero downtime.

# Multiple Cluster Support

Resiliency and reliability mean everything to us at SubQuery. Having a redundant cluster in a separate part of the world means that we can quickly recover from cloud provider outages that occasionally take regions offline.

Additionally, when you make a request to a SubQuery project in our hosted service, the majority of the waiting time comes from latency. Latency is the point to point time it takes your request to circle the world to the nearest SubQuery cluster and can take up to a second or two from some remote regions. Having multiple clusters around the world allows us to reduce the most significant part of the request time (the latency).

We’ve implemented multiple clusters in different regions that provide the same service. This work also includes a tool in  [SubQuery Projects](https://project.subquery.network/)  that allows you to deploy and manage your project across these clusters. We’ve also implemented processes that ensure that databases in different regions stay consistent, so that regardless of which cluster your request goes to, the data that you receive is consistent.

# Intelligent Routing

Once we have SubQuery clusters running in different regions, the next logical step is to make this feature invisible to your users. Your users should never have to decide what cluster their requests go to, SubQuery should automatically route their requests to the closest healthy cluster. This is what SubQuery’s intelligent routing provides.

We offer a single global endpoint to each premium customer that has intelligent routing automatically applied to each and every request. This service includes considerable monitoring that constantly ping each cluster for health checks and ensure that a user is never routed to a cluster that is overwhelmed or offline. The global endpoint optimises the routing for each request to the nearest cluster to ensure your users receive the best performance from your clusters.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

In summary, these services allow us to offer our premium service to more customers with confidence. We work with each customer to understand their business and goals, and then to set up a service to meet their needs. SubQuery is the largest data service provider in Polkadot, and these features show how we support thousands of community projects at the same time as the biggest projects in Polkadot.

# About SubQuery Network

SubQuery is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today.

SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)|  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
