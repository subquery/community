# SORA ร่วมมือกับ Subquery เพื่อให้บริการข้อมูลกับ SORA Network

![sora-header.jpg](https://miro.medium.com/max/1400/1*fPPW0DsynIt9QpvK4ZrsUA.jpeg)

วันนี้เรามีความยินดีที่จะประกาศโปรเจกต์ใหม่ที่น่าตื่นเต้นบน Subquery นั่นคือ SORA และ Polkaswap โดย [SORA](https://sora.org/) ได้สร้างโปรเจกต์ SubQuery ซึ่งดึงข้อมูลมาจาก SORA network เพื่อขับเคลื่อนแอปพลิเคชันมือถือที่สร้างบน SORA และ [Polkaswap.io](http://polkaswap.io/) คุณสามารถทดลองใช้ได้[ที่นี่](https://explorer.subquery.network/subquery/sora-xor/sora)

![sora-frontend.jpg](https://miro.medium.com/max/1400/1*pq0U6wsutlf8rjXqq7i2BQ.jpeg)

> "SubQuery ถูกเลือกเพื่อที่จะนำมาปรับปรุงประสบการณ์ของผู้ใช้งาน (UX) ในการใช้งาน SORA network เราใช้ SubQuery เพื่อที่จะดึงและลิสต์ข้อมูลที่มาจากภายนอก, คำนวณราคา รวมถึงอัตราผลตอบแทนต่อปี(APY) ของพูลสภาพคล่อง ซึ่งเป้าหมายของเราคือการได้ประวัติการทำธุรกรรมและข้อมูลต่างๆ ที่ถูกรวบรวมมาสำหรับแอปพลิเคชันที่ทำงานบน SORA network
> 
> SubQuery คือวิธีแก้ปัญหาในอุดมคติสำหรับความต้องการของเรา เพราะตัวแอปพลิเคชันสามารถปรับใช้งานและจัดการดูแลได้ง่าย รวมถึงง่ายที่จะเรียนรู้และพัฒนาต่อยอด นอกจากนี้ยังมีเอกสารข้อมูลที่เกี่ยวข้องมากมาย และมีโครงสร้างพื้นฐานที่มีการทำงานร่วมกับ Github เป็นของตัวเองอีกด้วย โครงสร้างข้อมูลที่เรียบง่ายของ SubQuery นั้นสามารถเข้าถึงได้อย่างรวดเร็ว และรองรับ GraphQL API สำหรับแอปพลิเคชันของลูกค้า รวมถึงมีการกำหนดค่าที่ยืดหยุ่นสำหรับกระบวนการวิเคราะห์ event, extrinsic, และ block ด้วยการกรองข้อมูลเพิ่มเติม และสุดท้ายก็คือการเป็นแอปพลิเคชันที่มีความโปร่งใสที่สุดกับผู้ใช้งาน โดยพวกเขาจะไม่ทันสังเกตด้วยซ้ำหากแอปพลิเคชันมีการอัปเดตหรือหยุดทำงานไป" — ทีมผู้พัฒนา SORA

Polkaswap คือตลาดแลกเปลี่ยนแบบกระจายอำนาจ (DEX) ชั้นนำบนระบบนิเวศ Polkadot ที่กำลังเติบโต ซึ่งพวกเขาใช้ SubQuery ในการเรียกข้อมูลการโอน, การแลกเปลี่ยนที่เกิดขึ้นบน Polkaswap, การเพิ่มหรือถอนสภาพคล่อง, ราคาของโทเคน, และอัตราผลตอบแทนต่อปี(APY) ของพูลสภาพคล่องต่าง

SubQuery already makes developing the SORA mobile app and Polkaswap easier by reducing the time the team spends on building custom backend solutions and the team at SORA plan to expand their Polkaswap SubQuery Project to better support Polkaswap in the future.

![sora-explorer.jpg](https://miro.medium.com/max/1400/1*vjdjmmffvJ7zfOQyxo0ZAA.jpeg)

In this example, we’re using SubQuery to pull the total amount of XOR that is held in each liquidity pool (filtered to show only the first 2 pools). This example also shows the current APY associated to each liquidity pool (filtered to show only the first 2 pools).

![sora-playground.jpg](https://miro.medium.com/max/1400/1*oTh-ajGfG1oEhYdvqo12tQ.jpeg)

SORA is using [SubQuery Projects](https://project.subquery.network/) to manage their project and make updates as required. The indexing and query services we provide are completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/).

Explore SORA's project in the SubQuery explorer [here](https://explorer.subquery.network/subquery/sora-xor/sora).

---

### About SORA

SORA is creating a supranational world economic system with built-in tools for decentralized finance (DeFi) under the cryptographic sortition-based democratic supervision of the SORA Parliament.

The SORA network excels at providing tools for decentralized applications that use digital assets, such as atomic token swaps, bridging tokens to other blockchains, and creating programmatic rules involving digital assets.

[Website](https://sora.org/) | [Reddit](https://www.reddit.com/r/SORA/) | [Blog](https://sora.org/blog) | [Telegram](https://t.me/sora_xor) | [Twitter](https://twitter.com/sora_xor) | [YouTube](https://youtube.com/sora_xor) | [Instagram](https://instagram.com/sora_xor)

### About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications (DApps). Currently focused on Polkadot and Substrate projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

[Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Email](mailto:hello@subquery.network)