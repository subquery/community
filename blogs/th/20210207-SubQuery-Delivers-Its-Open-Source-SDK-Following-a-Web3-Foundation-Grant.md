
**นักพัฒนาสามารถ transform และ query ข้อมูลของโลกสำหรับอนาคตของ Web3 ได้แล้ว**

![](https://miro.medium.com/max/1400/1*f9Jw37LjUGu8P8W39cjDYw.png)

OnFinality ในสัปดาห์นี้ (ทีมงานที่อยู่เบื้องหลัง SubQuery) ได้นำเสนอใน Web3 Foundation Grant เพื่อจัดหาเวิร์กโฟลว์ที่สมบูรณ์เพื่อสร้างโครงการ SubQuery เรารู้สึกตื่นเต้นที่จะประกาศงานที่เราทำเพื่อให้ grant นี้เสร็จสมบูรณ์ และแชร์กับคนทั่วโลกเพื่อให้พวกเขาสามารถเริ่มใช้โปรเจ็คของเราในวันนี้เพื่อ query เครือข่ายของพวกเขาได้อย่างมีประสิทธิภาพมากขึ้น

SubQuery สร้างขึ้นโดยทีมงานที่ OnFinality ซึ่งเป็นโครงสร้างพื้นฐาน Iaas & แพลตฟอร์ม SaaS สำหรับทีมบล็อกเชนและผู้ใช้เพื่อเปิดใช้โหนดและเข้าถึงโปรโตคอลบล็อกเชนจำนวนมาก เรามีชุดบริการแบบอาศัยซึ่งกันและกัน รวมถึงบริการโหนดที่ใช้ร่วมกันของ API และมีความสัมพันธ์กับทีม Polkadot/Substrate ชั้นนำ

บล็อคเชนเกือบทั้งหมดมีความต้องการการ processและ query ข้อมูล โครงการของเราได้รับแรงบันดาลใจจากการเติบโตของโปรโตคอลข้อมูลที่ให้บริการเลเยอร์ของแอปพลิเคชัน และพร้อมให้ความช่วยเหลือชุมชน Polkadot ที่กำลังเติบโต เป้าหมายของ SubQuery คือการช่วยให้โปรเจ็กต์ Polkadot/Substrate สร้าง dApps ที่ดีขึ้นโดยอนุญาตให้ทุกคนค้นหาและใช้ข้อมูลได้เร็วขึ้นอย่างน่าเชื่อถือ บริการของเราอนุญาตให้ผู้ใช้แยก, แปลง, ยืนยัน และ query ข้อมูล รวมถึงเชื่อมต่อและนำเสนอข้อมูลในอนาคต

[โปรแกรมทุนสนับสนุน Open Web3 Foundation](https://github.com/w3f/Open-Grants-Program/pull/136) ช่วยให้เราสร้าง SubQuery ซึ่งเป็นโครงการโอเพ่นซอร์สที่อนุญาตให้ผู้ใช้เรียกใช้ตัวสร้างดัชนี cross-chain เพื่อสร้างชุดข้อมูลที่สามารถ query ด้วย GraphQL

ชุดเครื่องมือนี้ประกอบด้วย @subql/cli เพื่อให้โครงการสร้างโครงการ SubQuery ของตนเอง โดยกำหนดวิธีที่ indexer ควรสำรวจและรวมเครือข่ายของพวกเขาเอง ตามข้อเสนอของเรา เราได้จัดเตรียม toturial พื้นฐานที่แสดงให้ผู้ใช้ทราบถึงวิธีใช้ cli เพื่อจัดทำดัชนีเครือข่ายของตน ซึ่ง [คุณสามารถติดตามได้ที่นี่](https://doc.subquery.network/quickstart.html) เราได้จัดเตรียมเอกสารสำหรับนักพัฒนาโดยละเอียดเพิ่มเติมสำหรับการใช้งานขั้นสูง

Secondly, there’s a SubQuery node package that loads the defined SubQuery project created by the CLI and then indexes the network to a Postgres database. Using Hasura, you can run GraphQL queries right away over indexed tables. With the help of these tools, and the community support material that we’re always improving, anyone can create and run queries easily.

**You can get started right away by following our example on the** [**SubQuery Github repository**](https://github.com/OnFinality-io/subql)**. Additionally, you can find out more by reading our** [**SubQuery docs**](https://doc.subquery.network/) **or** [**visiting our new website**](https://subquery.network/)**.**

We’re incredibly grateful for the support provided by Web3 Foundation to help us carry out this project for the community. Web3 Foundation funds research and development teams building the technology stack of the decentralized web. It was established in Zug, Switzerland by Ethereum co-founder and former chief technology officer Dr. Gavin Wood. Polkadot is the Foundation’s flagship project.

We’ll focus on building a managed hosted service based off this offering that will be more performant and scalable. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. Even though Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

Get started on the [SubQuery Github repository.](https://github.com/OnFinality-io/subql)

Read our [SubQuery docs](https://doc.subquery.network/)

[Visit our new website](https://subquery.network/)

Learn more about Web3 Foundation by visiting their [website](https://web3.foundation/). To follow the latest developments at Web3 Foundation, join them on [Reddit](https://www.reddit.com/r/dot/) or [Twitter](https://twitter.com/web3foundation).

Follow us on:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)