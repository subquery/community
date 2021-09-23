# SubQuery รวมเข้ากับ Acala เพื่อรวมและให้บริการข้อมูล DeFi ไปยัง Polkadot และ Kusama Builders

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Last week [SubQuery](https://www.subquery.network/) released the next stage of their project, the [SubQuery Explorer](https://explorer.subquery.network/). เมื่อสัปดาห์ที่แล้ว [SubQuery](https://www.subquery.network/) ได้เผยแพร่ขั้นตอนถัดไปของโครงการ นั่นคือ [SubQuery Explorer](https://explorer.subquery.network/) ในสัปดาห์นี้ Acala และ SubQuery ได้สรุปการผสานรวมเพื่อให้ผู้ใช้และนักพัฒนาสามารถ query และดึงข้อมูลจากฮับ DeFi ของ Acala สำหรับ Polkadot ได้ในเวลาเพียงไม่กี่นาทีและไม่มีค่าใช้จ่าย

SubQuery เป็นเลเยอร์การรวมข้อมูลที่จะทำงานระหว่างเลเยอร์-1 blockchain (Acala) และเลเยอร์ของ DApp โซลูชันนี้รวบรวมและจัดระเบียบข้อมูลจาก Acala และบล็อคเชนอื่นๆ โดยให้บริการข้อมูลที่มีโครงสร้างอย่างดีสำหรับนักพัฒนาเพื่อใช้สำหรับโครงการที่หลากหลาย บริการนี้ช่วยให้นักพัฒนา DApp สามารถมุ่งเน้นไปที่กรณีการใช้งานหลักและ front-end โดยไม่ต้องเสียเวลาไปกับการสร้าง back-end สำหรับการประมวลผลข้อมูลเอง The solution aggregates and organizes data from Acala and other blockchains, serving up well-structured data for developers to use for a wide array of projects. This service allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

Acala is a firm believer and a long-term builder for the multi-chain future — reducing liquidity fragmentation, increasing composability, and enabling DeFi accessibility to everyone. Acala เป็นผู้เชื่อมั่นอย่างแรงกล้าและเป็นผู้สร้างระยะยาวสำหรับอนาคตแบบมัลติเชน — ลดการกระจายตัวของสภาพคล่อง เพิ่มความสามารถในการประกอบร่วม และทำให้ทุกคนสามารถเข้าถึง DeFi Acala เป็นบล็อกเชนเฉพาะทางที่มุ่งเน้นไปที่การเงินแบบกระจายอำนาจ(DeFi) และสร้าง DeFi ดั้งเดิมหลายตัวจนกลายเป็น DeFi Hub และเป็นโครงสร้างพื้นฐานที่ให้บริการระบบนิเวศ Polkadot และ Kusama ทีมงานได้สร้างผลิตภัณฑ์ต่างๆ รวมถึงเหรียญ stablecoin ที่มีหลักประกันหลายเหรียญ (aUSD — The Acala Dollar) ผู้ดูแลสภาพคล่องอัตโนมัติ (AMM) DEX สินทรัพย์จากโทเค็นที่ stake ที่เรียกว่า Liquid DOT (LDOT) และใช้ฟีเจอร์การนำค่าแก๊สมาเอง ซึ่งอนุญาตให้ชำระค่าธรรมเนียมแก๊สในสินทรัพย์ที่รองรับ เช่น stablecoin Parachain ของ Acala วางแผนที่จะเล่นบทบาทของ DeFi Hub สำหรับ Polkadot และ Landing Pad ที่รวบรวมสินทรัพย์และสภาพคล่องจากบล็อกเชนที่หลากหลาย The team has built products including a multi-collateralized stablecoin (aUSD — The Acala Dollar), an automated market maker (AMM) DEX, a tokenized staked asset called Liquid DOT (LDOT), and implemented a bring-your-own-gas feature allowing gas fees to be payable in any supported assets such as stablecoins. Acala’s parachain plans to play the role of DeFi hub for Polkadot and a landing pad that aggregates assets and liquidity from a variety of blockchains.

Today when you access the [SubQuery Explorer](https://explorer.subquery.network/) you’ll be welcomed with a new Acala SubQuery Project. วันนี้ เมื่อคุณเข้าถึง [SubQuery Explorer](https://explorer.subquery.network/) คุณจะได้รับการต้อนรับด้วยโครงการ Acala SubQuery แบบใหม่ SubQuery นี้จะติดตามข้อมูลภายนอกทั้งหมดที่สร้างบน Acala แบบไดนามิกและสามารถแสดงสถิติรวมที่ได้รับได้อย่างรวดเร็วสำหรับสิ่งต่อไปนี้:

-   ข้อมูลย้อนหลังเกี่ยวกับการเปลี่ยนแปลงสภาพคล่อง (แยกตามผู้ให้บริการ)
-   ข้อมูลย้อนหลังของการแลกเปลี่ยนสินทรัพย์ข้าม chain ทั้งหมด
-   ประวัติการโอน

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

You can play around with the Acala SubQuery Graph using the [Explorer](https://explorer.subquery.network/) without implementing anything in code. คุณสามารถทดลองใช้ Acala SubQuery Graph โดยใช้ [Explorer](https://explorer.subquery.network/) โดยไม่ต้องติดตั้งอะไรในโค้ด นอกจากนี้ เราได้จัดทำเอกสารประเภทที่คุณสามารถกำหนดเกณฑ์ได้ในแต่ละคำขอของ GraphQL เมื่อวิเคราะห์ข้อมูลของ Acala

ด้านล่างนี้คือตัวอย่างง่ายๆ ที่แสดงให้เห็นว่าผู้ใช้สามารถดูเหตุการณ์การถ่ายโอน 5 รายการก่อนหน้าได้อย่างรวดเร็วและง่ายดายโดยใช้โทเค็น ACA ผ่านเครือข่าย Acala Mandala คุณสามารถดูได้ที่นี่ว่าเราใช้ภาษา GraphQL อย่างง่ายในการจัดเรียงและดึงข้อมูลนี้ไปยังไคลเอนต์ใดๆก็ตาม DApps สามารถใช้สิ่งนี้เพื่อติดตามสถานะสินเชื่อ, เข้าร่วมการประมูล ฯลฯ เพื่อช่วยชำระหลักประกัน You can see here that we use simple GraphQL language to sort and retrieve this data to any client. DApps can use this to monitor loan positions, and jump on auctions etc to help liquidate collaterals.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

A slightly more complex example follows, where we inspect a single account and retrieve all token swap events made by it. ตัวอย่างที่ซับซ้อนขึ้นเล็กน้อยดังต่อไปนี้ ซึ่งเราตรวจสอบในบัญชีเดียวและดึงข้อมูลเหตุการณ์การแลกเปลี่ยนโทเค็นทั้งหมดที่สร้างขึ้นโดยบัญชีนั้น พอร์ตโฟลิโอ DApp อาจใช้ข้อมูลนี้เพื่อสร้างภาพรวมทางบัญชีของกระเป๋านั้นๆและประสิทธิภาพของโทเค็น, รายได้จากการ stake, การจัดเตรียมสภาพคล่อง และค่าใช้จ่ายในการยืม

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) เป็นบริการโฮสต์ออนไลน์ที่ให้การเข้าถึงโครงการ SubQuery ที่เผยแพร่โดยผู้ร่วมให้ข้อมูลทั่วโลกและจัดการโดยทีม SubQuery ภารกิจของมันคือการทำให้การเข้าถึงข้อมูลเครือข่าย Polkadot ง่ายขึ้นโดยการให้บริการโครงสร้างพื้นฐานเพื่อช่วยให้นักพัฒนาประสบความสำเร็จมากขึ้น Its mission is to ease access to Polkadot network data by providing infrastructure services to help developers achieve more.

[SubQuery](https://www.subquery.network/) allows every Substrate/Polkadot team to process and query their data. [SubQuery](https://www.subquery.network/) ช่วยให้ทุกทีม Substrate/Polkadot สามารถประมวลผลและสืบค้นข้อมูลของพวกเขาได้ โปรเจ็คนี้ได้รับแรงบันดาลใจจากการเติบโตของโปรโตคอลข้อมูลที่ให้บริการเลเยอร์ของแอปพลิเคชัน และมีเป้าหมายเพื่อช่วยให้โปรเจ็ค Polkadot/Substrate สร้าง dApps ที่ดีขึ้นโดยทำให้ทุกคนค้นหาและใช้ข้อมูลได้เร็วขึ้นอย่างน่าเชื่อถือ วันนี้ ใครๆ ก็ค้นหาและดึงข้อมูลเครือข่าย Polkadot ได้ในเวลาเพียงไม่กี่นาทีโดยไม่มีค่าใช้จ่าย Today, anyone can query and extract Polkadot network data in only minutes and at no cost.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) is the decentralized financial hub and stablecoin of Polkadot that makes it fast and easy to use or build financial applications, improving trading efficiency and saving time. The platform offers a suite of financial primitives: a multi-collateralized stablecoin backed by cross-chain assets like Bitcoin, a trustless staking derivative, and a decentralized exchange to unleash liquidity and power financial innovations. Acala is the de facto open platform for finance applications to use smart contracts or built-in protocols with out-of-the-box cross-chain capabilities and robust security.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)