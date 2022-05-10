# SORA ร่วมมือกับ Subquery เพื่อให้บริการข้อมูลกับ SORA Network

![sora-header.jpg](https://miro.medium.com/max/1400/1*fPPW0DsynIt9QpvK4ZrsUA.jpeg)

วันนี้เรามีความยินดีที่จะประกาศโปรเจกต์ใหม่ที่น่าตื่นเต้นบน Subquery นั่นคือ SORA และ Polkaswap โดย [SORA](https://sora.org/) ได้สร้างโปรเจกต์ SubQuery ซึ่งดึงข้อมูลมาจาก SORA network เพื่อขับเคลื่อนแอปพลิเคชันมือถือที่สร้างบน SORA และ [Polkaswap.io](http://polkaswap.io/) คุณสามารถทดลองใช้ได้[ที่นี่](https://explorer.subquery.network/subquery/sora-xor/sora)

![sora-frontend.jpg](https://miro.medium.com/max/1400/1*pq0U6wsutlf8rjXqq7i2BQ.jpeg)

> _"SubQuery was selected to improve the UX of SORA network usage. We used SubQuery to get and list extrinsic details, calculate fiat prices and liquidity pool APY. Our goal was to get transaction history and aggregated data for applications that work with the SORA network._
> 
> _SubQuery has been the ideal solution for our needs because the application is easy to deploy and manage, it is easy to learn and develop as well as being well documented, and it also has its own infrastructure with Github integration. โครงสร้างข้อมูลที่เรียบง่ายของ SubQuery นั้นสามารถเข้าถึงได้อย่างรวดเร็ว และรองรับ GraphQL API สำหรับแอปพลิเคชันของลูกค้า รวมถึงมีการกำหนดค่าที่ยืดหยุ่นสำหรับกระบวนการวิเคราะห์ event, extrinsic, และ block ด้วยการกรองข้อมูลเพิ่มเติม Finally, the application is completely transparent for users, so they won't notice if the application was updated or stopped."_ —SORA Development Team

Polkaswap คือตลาดแลกเปลี่ยนแบบกระจายอำนาจ (DEX) ชั้นนำบนระบบนิเวศ Polkadot ที่กำลังเติบโต ซึ่งพวกเขาใช้ SubQuery ในการเรียกข้อมูลการโอน, การแลกเปลี่ยนที่เกิดขึ้นบน Polkaswap, การเพิ่มหรือถอนสภาพคล่อง, ราคาของโทเคน, และอัตราผลตอบแทนต่อปี (APY) ของพูลสภาพคล่องต่าง

SubQuery ได้ช่วยทำให้การพัฒนาแอปมือถือ SORA และ Polkaswap ง่ายยิ่งขึ้นด้วยการลดเวลาที่ทีมต้องหมดไปกับการออกแบบระบบหลังบ้าน (back-end) เอง และทีมที่ SORA ก็ยังมีแผนที่จะขยับขยายโปรเจกต์ Polkaswap SubQuery ของพวกเขาให้รองรับ Polkaswap ได้ดีขึ้นในอนาคต

![sora-explorer.jpg](https://miro.medium.com/max/1400/1*vjdjmmffvJ7zfOQyxo0ZAA.jpeg)

ในตัวอย่างนี้ เราใช้ SubQuery เพื่อดึงจำนวนทั้งหมดของ XOR ที่มีอยู่ในพูลสภาพคล่องแต่ละอัน(ตั้งฟิลเตอร์ให้แสดงเฉพาะสองพูลแรกเท่านั้น) ตัวอย่างนี้ยังแสดงให้เห็นถึงอัตราผลตอบแทนต่อปี (APY) ที่ผูกอยู่กับพูลสภาพคล่องแต่ละอันอีกด้วย(ตั้งฟิลเตอร์ให้แสดงผลเฉพาะสองพูลแรกเท่านั้น)

![sora-playground.jpg](https://miro.medium.com/max/1400/1*oTh-ajGfG1oEhYdvqo12tQ.jpeg)

SORA กำลังใช้ [SubQuery Project](https://project.subquery.network/) เพื่อบริหารจัดการโปรเจกต์ของพวกเขาและทำการอัปเดตเมื่อจำเป็น บริการจัดทำดัชนีและสืบค้นข้อมูลที่เรามีให้นั้นได้รับการจัดการโดย SubQuery และให้บริการฟรีแก่ชุมชน Polkadot ใน [SubQuery’s Explorer](https://explorer.subquery.network/).

สำรวจโปรเจกต์ของ SORA บน SubQuery explorer [ที่นี่](https://explorer.subquery.network/subquery/sora-xor/sora)

## About SORA

SORA กำลังสร้างระบบเศรษฐกิจระดับโลกระหว่างหลากหลายประเทศด้วยเครื่องมือบิวท์อินสำหรับระบบการเงินแบบกระจายอำนาจ (DeFi) ภายใต้การกำกับดูแลแบบประชาธิปไตยด้วยการเข้ารหัสแบบเรียงลำดับของ SORA Parliament

SORA network มีความเชี่ยวชาญในการจัดหาเครื่องมือสำหรับแอปพลิเคชันแบบกระจายศูนย์ที่ใช้สินทรัพย์ดิจิทัล เช่น การแลกเปลี่ยนโทเคนแบบ atomic swap, การ bridge โทเคนช้ามเชนไปอื่นๆ และการสร้างกฎที่เกี่ยวข้องกับสินทรัพย์ดิจิทัลด้วยโปรแกรม

[Website](https://sora.org/) | [Reddit](https://www.reddit.com/r/SORA/) | [Blog](https://sora.org/blog) | [Telegram](https://t.me/sora_xor) | [Twitter](https://twitter.com/sora_xor) | [YouTube](https://youtube.com/sora_xor) | [Instagram](https://instagram.com/sora_xor)

## About SubQuery

[SubQuery](https://subquery.network/) คือเลเยอร์การรวบรวม, จัดทำดัชนีและสืบค้น (query) ข้อมูล แบบกระจายศูนย์ ระหว่างเลเยอร์ 1 ของและแอปพลิเคชันที่กระจายศูนย์ (DApp) ปัจจุบันมุ่งเน้นไปที่โปรเจกต์ Polkadot และ Substrate ซึ่งบริการข้อมูลนี้ช่วยให้นักพัฒนาสามารถโฟกัสไปที่การใช้งานหลัก (core use case) และระบบหน้าบ้าน (front-end) โดยไม่ต้องเสียเวลาไปกับการออกแบบระบบหลังบ้าน (back-end) เอง เพื่อใช้ประมวลผลข้อมูล

[Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Email](mailto:hello@subquery.network)
