# คู่มือเริ่มต้นการใช้งาน SubQuery Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

เป็นระยะเวลานานแล้วที่ SubQuery ได้ทำการพัฒนาและปรับแต่งเพื่อสนับสนุน Terra อยู่เบื้องหลังและได้มีการทดสอบซึ่งจะเป็นการเปิดตัวพันธมิตรในการพัฒนาที่สำคัญ (รอคอยติดตามประกาศในวันข้างหน้า) ระยะเวลาที่ยืดเยื้อนี้ช่วยให้เรามั่นใจในความสามารถของการปรับขนาด ความน่าเชื่อถือ และคุณลักษณะต่างๆ ที่ SubQuery จะนำมาสู่ Terra ในปัจจุบัน ในบทความนี้ เราจะแบ่งปัน คู่มือสำหรับนักพัฒนา โดยละเอียดและแผนงานสำหรับชุมชนของTerra ทั้งหมดเพื่อใช้ในการแก้ปัญหาความต้องการในการจัดทำ data indexing

SubQuery เป็น data indexer แบบเปิดที่มีความยืดหยุ่นและรวดเร็ว เครื่องมือสร้าง index แบบเปิดของเราได้รับการออกแบบมาเพื่อช่วยให้นักพัฒนาสามารถสร้าง API ของตนเองได้ในเวลาแค่ไม่กี่ชั่วโมง และได้รับการออกแบบมาเพื่อจัดทำ index chains ที่รวดเร็วอย่างไม่น่าเชื่อ ด้วยความช่วยเหลือของ dictionaries (ดัชนีที่คำนวณล่วงหน้า) ประสบการณ์ของเรากับลูกค้าในทุกกลุ่มธุรกิจใน Polkadot (เช่น wallet,network, explorers,NFT,DeFi ,สแกนเนอร์ ฯลฯ) ช่วยเราสร้างสิ่งนี้

สิ่งนี้ยังอยู่ในเวอร์ชันแรกๆ และในขณะที่เราพิจารณาที่จะไปไกลกว่าคำว่า "Beta" เราจะขอบคุณมากหากสามารถรายงานจุดบกพร่องใดๆ ไปยังทีมของเรา เพื่อให้เราสามารถจัดการกับปัญหาได้อย่างรวดเร็ว

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ทำไมต้องใช้ SubQuery

แอปพลิเคชันต่างๆเติบโตขึ้นมากในระบบนิเวศของ Terra แม้ว่าจะมีการขาดแคลนเครื่องมือสำหรับนักพัฒนาและบริการโครงสร้างพื้นฐานที่สำคัญอยู่บ้าง เป็นเรื่องที่น่าอัศจรรย์ที่ได้เห็นสิ่งเหล่านั้น จะเป็นเครื่องพิสูจน์ถึงแรงผลักดันและความเฉลียวฉลาดของเหล่า Lunatics ใน Terra บ่อยครั้งในกรณีส่วนใหญ่ที่เราถามทีมงานว่าพวกเขาแก้ไขความต้องการในการ data indexing อย่างไร

- สร้างโซลูชั่นของตัวเอง การใช้งานแบบกำหนดเอง ที่สามารถดำเนินการได้เองโดยสร้างขึ้นมาสำหรับแอปของคุณโดยเฉพาะ แต่ทำไมต้องหาอย่างอื่นใหม่ละ? SubQuery มุ่งเน้นไปที่การสร้างindexerแบบเปิดที่เชื่อถือได้และรวดเร็ว - พวกเราพร้อมช่วยให้คุณประหยัดเวลา
- **ออกแบบ smart contracts สำหรับการ queries ** บางทีมยังใช้นิสัยแปลก ๆ ที่กำหนดเองใน smart contracts ของพวกเขาเพื่อให้สามารถสืบค้นขั้นสูงเพิ่มเติมโดยเฉพาะกับ ตรรกะของแอปพลิเคชันของพวกเขาเอง

ที่ SubQuery เรามี SDK แบบโอเพ่นซอร์สที่สามารถใช้งานได้ง่ายและรวดเร็ว โดยจะให้มาตรฐาน  GraphQL endpoint แก่คุณ หรือคุณสามารถสืบค้นฐานข้อมูล postgres ได้โดยตรง ด้วยสิ่งนี้ คุณสามารถสร้าง index ชุดข้อมูลเฉพาะจากsmart contracts ของคุณเอง ที่จะช่วยให้คุณสร้างผลิตภัณฑ์ที่เหนือกว่าที่จะเอาชนะการแข่งขันของคุณให้เหนือขึ้นไปอีก! เราให้ความยืดหยุ่นแก่คุณในการรับข้อมูลที่คุณต้องการในรูปแบบที่เหมาะกับคุณที่สุด

ความน่าเชื่อถือเป็นกุญแจสำคัญ และคุณจำเป็นต้องการแพลตฟอร์มที่เชื่อถือได้และสามารถปรับขนาดได้เพื่อเชื่อมต่อมัน [SubQuery's managed service](https://subquery.network/managedservices) เป็นโซลูชันชั้นนำของอุตสาหกรรมสำหรับเชื่อมต่อลูกค้าทุกรายที่ให้บริการคำขอหลายร้อยล้านรายการต่อวันสำหรับโครงการที่ใหญ่ที่สุดใน Polkadot เราให้บริการแก่[ลูกค้าระดับองค์กร](./20211228-enterprise-hosted.md)เช่น ฐานข้อมูลเฉพาะ clustersที่ซ้ำซ้อน การกำหนดเส้นทางหลายclustersแบบอัจฉริยะ และการตรวจสอบและวิเคราะห์ขั้นสูง มันจะสนับสนุนการสมัครของคุณเมื่อคุณพร้อมและจะปรับขนาดไปพร้อมกับคุณ

และสุดท้าย ในอีกไม่กี่เดือน คุณจะสามารถกระจายโครงสร้างพื้นฐาน SubQuery ของคุณได้อย่างสมบูรณ์ด้วย SubQuery Network ซึ่งเป็นอนาคตของโครงสร้างพื้นฐานของโลก Web3 The SubQuery Network จะจัดทำดัชนีและให้บริการข้อมูลโครงการของคุณแก่ชุมชนทั่วโลกด้วยวิธีการจูงใจและตรวจสอบได้ ซึ่งได้รับการออกแบบมาเพื่อรองรับโปรเจ็กต์ SubQuery จากเครือข่ายในเลเยอร์ 1 ต่างๆ รวมถึง Terra ดังนั้นคุณจึงสามารถใช้ประโยชน์จากขนาดของเครือข่าย SubQuery เพียงหนึ่งเดียวได้ตั้งแต่เปิดตัว

## คำแนะนำในการติดตั้ง

คุณจะต้องติดตั้ง @subql/cli via npm i -g @subql/cli@latest เวอร์ชันล่าสุดก่อน

วิธีที่ดีที่สุดคือการเริ่มต้นด้วย [โครงการเริ่มต้นของเรา](https://github.com/subquery/terra-subql-starter) ซึ่งมีโครงการที่กำลังทำงานอยู่พร้อมตัวอย่างของฟังก์ชันการทำแผนที่ทั้งหมด: ดังต่อไปนี้

- **BlockHandler:** All blocks and their hash and height
- **TransactionHandler:** All transactions and their hash, height, and timestamp
- **EventHandler:** All smart contract transfer events and their hash, height, sender, recipient, and amount from a filtered smart contract address (bLuna)
- **MessageHandler:** All smart contract messages and their hash, height, contract, sender, and execute_msg data from a filtered smart contract address (bLuna)

SubQuery รองรับการทำ indexing ของ Terra smart contracts ด้วยการสมัครรับข้อมูลและตัวจัดการธุรกรรมและข้อความ คุณสามารถดูตัวอย่างการทำงานของการสนับสนุน Smart Contract ได้ใน[โครงการเริ่มต้น](https://github.com/subquery/terra-subql-starter)และอ่านเอกสารได้ใน [SubQuery University](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters)

การใช้งาน Terra ของ SubQuery ได้รับการออกแบบให้ทำงานเกือบจะเหมือนกับการสนับสนุน Polkadot ของ SubQuery และในลักษณะเดียวกันกับแนวทางของ Graph's เราได้อัปเดต [SubQuery University](https://university.subquery.network/) เพื่อเพิ่มข้อมูลเฉพาะของ Terra ลงในเอกสารประกอบทั่วไปของ SubQuery  คุณสามารถเริ่มต้นด้วยการปฏิบัติตาม[คู่มือการเริ่มต้นใช้งานที่ยอดเยี่ยมนี้ได้ที่นี่](http://university.subquery.network/quickstart/quickstart-terra.html)

## การปรับใช้โปรเจ็กต์ของคุณกับบริการ SubQuery's Managed Service

แม้ว่าคุณจะสามารถเรียกใช้โครงการของคุณในโครงสร้างพื้นฐานของคุณเองได้อย่างง่ายดาย [SubQuery's managed service](https://subquery.network/managedservices) ในขณะนี้รองรับกับโครงการของ Terra โครงการที่ใหญ่ที่สุดบางโครงการขึ้นอยู่กับบริการที่มีการจัดการ[ระดับองค์กร](./20211228-enterprise-hosted.md)ของ SubQuery และตอนนี้คุณก็สามารถทำอย่างนั้นได้เช่นกัน ตามข้อตกลงพันธมิตรในการเปิดตัวของเรา เราจะให้บริการ hosting ฟรี 3 เดือนแก่คุณ

คุณสามารถทำตาม[คำแนะนำ](https://university.subquery.network/run_publish/publish.html)ที่นี่เพื่อเผยแพร่โครงการ Terra SubQuery ไปยังบริการที่มีการจัดการของเรา โปรดทราบว่าคุณต้อง host โครงการ [SubQuery ของคุณโดยใช้ IPFS ](https://university.subquery.network/run_publish/publish.html)แทน GitHub

คุณสามารถอัปเดตโครงการบริการที่มีการจัดการของคุณได้มากเท่าที่คุณต้องการ We even have a [staging deployment slot](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) to allow you to do seamless blue/green upgrades without any downtime. สล็อตการจัดเตรียมนี้ยังสามารถใช้เพื่อเรียกใช้อินสแตนซ์ย่อยของ SubQuery ด้วยฐานข้อมูลใหม่สำหรับการจัดทำดัชนีพื้นหลังโดยสมบูรณ์ของโปรเจ็กต์ของคุณ โดยปกติ ลูกค้าจะเชื่อมโยงสล็อตการจัดเตรียมกับเวอร์ชันการจัดเตรียม/การพัฒนาของแอปพลิเคชันของตน

เมื่อปรับใช้แล้ว คุณจะสามารถเข้าถึงโปรเจ็กต์ของคุณโดยใช้ SubQuery Explorer และทำการร้องขอโดยตรงจากแอปของคุณไปยัง GraphQL endpoint ที่ให้มา Let us know if you would like us to enable more advanced features like [GraphQL subscriptions](https://university.subquery.network/run_publish/subscription.html), more complex queries, and [aggregation functions](https://university.subquery.network/run_publish/aggregate.html).

โปรดแจ้งให้เราทราบเมื่อคุณปรับใช้โปรเจ็กต์ของคุณแล้ว เนื่องจากเราอาจจำเป็นต้องช่วยปรับขนาดแบตช์อย่างละเอียดเพื่อให้แน่ใจว่าโหนดเก็บถาวร Terra ของเราทำงานได้ดีสำหรับโปรเจ็กต์ของคุณ

## SubQuery's Support for Terra

วันนี้เราจะมาแบ่งปันสิ่งต่อไปนี้

-   Advanced indexing of blocks, event
-   Terra Dictionary: Pre-computed indices to [dramatically reduce indexing time](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Full support for Terra in our free [enterprise level](./20211228-enterprise-hosted.md) managed service
-   Intuitive documentation in the [SubQuery University](https://university.subquery.network/)

In the coming weeks you can expect:

-   A step by step learning course in the [SubQuery Academy](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Full support for Terra in our decentralised SubQuery Network (you'll soon see a project in our current Frontier test network)

---

การเปิดตัวการสนับสนุนรุ่นเบต้าสำหรับ Terra ถือเป็นก้าวสำคัญในความมุ่งมั่นของเราที่จะนำเสนอเครื่องมือการจัดทำดัชนีที่ได้รับการปรับปรุงสำหรับชุมชน Terra เพื่อให้นักพัฒนาซอฟต์แวร์ก้าวต่อไปได้เร็วขึ้น เรากระตือรือร้นที่จะได้รับคำติชมจากชุมชนเพื่อปรับปรุงข้อเสนอของเราและเพิ่มการมองเห็นของเราในฐานะพันธมิตรโครงสร้างพื้นฐานที่เชื่อถือได้สำหรับหนึ่งในชุมชนนักพัฒนาที่เติบโตเร็วที่สุดในโลกของ Web3

James Bayly

## Links

-   [Getting Started Guide](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Documentation)](https://university.subquery.network/)
-   [Example Terra Project](https://github.com/subquery/terra-subql-starter)
-   [Managed Service](https://explorer.subquery.network/)
-   [Publish your own Terra Project to the Managed Service](https://project.subquery.network/)

## About SubQuery

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate, Avalanche, and now Terra projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
