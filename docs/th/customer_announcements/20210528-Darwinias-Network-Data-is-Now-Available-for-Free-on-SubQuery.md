# ข้อมูลเครือข่ายของ Darwinia พร้อมให้ใช้งานได้ฟรีบน SubQuery แล้ว

![](https://miro.medium.com/max/1400/0*7_sagAfI_wTKePuH)

**中文阅读版本请见下方**

**เรายินดีที่จะประกาศว่า SubQuery และ Darwinia Network ได้จัดตั้งพันธมิตรเชิงกลยุทธ์**

ไม่นานมานี้ [Darwinia](https://darwinia.network/) ได้เปิดตัวโครงการ SubQuery ใหม่ 2 โครงการ โครงการหนึ่งสำหรับ [เครือข่ายหลัก](https://explorer.subquery.network/subquery/darwinia-network/darwinia) และอีกโครงการสำหรับ [Crab](https://explorer.subquery.network/subquery/darwinia-network/crab) ซึ่งเป็นเครือข่าย Canary ของพวกเขา การเปิดเผยข้อมูลใน SubQuery ทำให้ Darwinia เปิดโอกาสให้แอพลิเคชั่นของพวกเขาในการสร้างแอปพลิเคชันที่มีส่วนร่วมมากขึ้นบนแหล่งข้อมูลฟรีนี้ By exposing their data on SubQuery, Darwinia is opening the door for their application ecosystem to build more engaging applications on this free datasource.

> “Using SubQuery to query Darwinia’s on-chain data has become very simple and flexible. SubQuery regards blockchain data as a graph, and leverages the extensibility of GraphQL to introduce additional functionality. “การใช้ SubQuery เพื่อ query ข้อมูลบนเครือข่ายของ Darwinia กลายเป็นเรื่องง่ายและยืดหยุ่น SubQuery ถือว่าข้อมูลบล็อคเชนเป็นกราฟ และใช้ประโยชน์จากความสามารถในการขยายของ GraphQL เพื่อแนะนำฟังก์ชันเพิ่มเติม เราเชื่อว่าในอนาคต อินเทอร์เฟซข้อมูลบนซับสเตรตเชนจะใช้ GraphQL เป็นหลัก ซึ่ง SubQuery กำลังทำให้สิ่งนี้เป็นจริง” — Darwinia — Darwinia

[SubQuery’s](https://subquery.network/) service helps Darwinia unlock chain data and to make it more accessible for their application ecosystem. บริการของ[SubQuery](https://subquery.network/)ช่วยให้ Darwinia ปลดล็อกข้อมูลของเชน และทำให้ระบบนิเวศของแอปพลิเคชันของพวกเขาเข้าถึงได้มากขึ้น แอปพลิเคชัน เช่น ตลาด NFT สามารถใช้ข้อมูลจาก SubQuery ของ Darwnia เพื่อแสดงสถิติการประมูล และยังสามารถขยายโครงการ Darwinia SubQuery เพื่อรวบรวมและแปลงข้อมูลเพื่อให้ข้อมูลเชิงลึกที่ไม่ซ้ำใครมากยิ่งขึ้น

![](https://miro.medium.com/max/1400/0*n2sGrQWOkIFXxMnq)

Thanks to SubQuery, we can easily query the transfer times of each account on the chain. ต้องขอบคุณ SubQuery ที่ทำให้เราสามารถ query เวลาโอนของแต่ละบัญชีในเชนได้อย่างง่ายดาย ตัวอย่างเช่น เราสามารถรับข้อมูลบัญชีที่มีธุรกรรมที่ส่งและรับมากที่สุดสามบัญชีผ่านการ query ด้านล่าง:

![](https://miro.medium.com/max/1400/0*gfS6ksjUL9fR9XA7)

Darwinia กำลังใช้ [SubQuery Projects](https://project.subquery.network/) เพื่อบริหารโครงการของตนเองและทำการอัปเดตตามต้องการ บริการจัดทำ index และ query สำหรับในบริการนี้ได้รับการจัดการโดย SubQuery และให้บริการฟรีแก่ชุมชน Polkadot ใน[SubQuery's Explorer](https://explorer.subquery.network/) คุณสามารถทดลองใช้ชุดข้อมูล Darwinia SubQuery ได้ที่นี่ (และ Crab ของ Darwinia ที่นี่) ด้วย Explorer โดยไม่ต้องใช้โค้ดใดๆเลย ตามที่คุณต้องการ การรับบันทึกของบัญชีเฉพาะจะกลายเป็นเรื่องง่ายมาก The indexing and query services for this service is completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/). You can play around with the Darwinia SubQuery dataset here (and Darwinia’s Crab here) using the Explorer without implementing any code. As you wish, obtaining the records of a specific account would become very simple.

โดย query บ่งชี้ว่าเราต้องรับข้อมูลของ 20 ธุรกรรมล่าสุดไม่ว่าจะรับหรือส่ง _2qeMxq616BhqvTW8a1bp2g7VKPAmpda1vXuAAz5TxV5ehivG_

![](https://miro.medium.com/max/1400/0*z-9giNk4RnhxliYy)

[SubQuery](https://subquery.network/) เป็นเลเยอร์การรวมข้อมูลที่จะทำงานระหว่างบล็อคเชนเลเยอร์-1(Darwinia) และ DApps โซลูชันรวบรวมและจัดระเบียบข้อมูลจาก [Darwinia](https://darwinia.network/) และบล็อกเชนอื่นๆ โดยให้บริการข้อมูลที่มีโครงสร้างที่ดีให้กับ dApp นั้นๆและให้กับนักพัฒนารายอื่นๆในการใช้ในโครงการที่หลากหลาย บริการนี้ช่วยให้นักพัฒนา DApp สามารถมุ่งเน้นไปที่กรณีการใช้งานหลักและ front-end โดยไม่ต้องเสียเวลาไปกับการสร้าง back-end สำหรับการประมวลผลข้อมูลของตัวเอง The solution aggregates and organises data from [Darwinia](https://darwinia.network/) and other blockchains, serving up well-structured data for their dApp and for other developers to use in a wide array of projects. This service allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

เรียนรู้เพิ่มเติมเกี่ยวกับ SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

Darwinia Network เป็นโปรโตคอลแบบกระจายศูนย์สำหรับบริดจ์ข้ามเชนที่ต่างกัน ซึ่งสร้างอยู่บน Substrate โดยมุ่งเน้นที่การแลกเปลี่ยนโทเค็นแบบข้ามเชน, กระดานแลกเปลี่ยนและตลาด

Darwinia ยังทำหน้าที่เป็นโครงสร้างพื้นฐานที่สำคัญสำหรับการอัปเกรดแอปพลิเคชันแบบ single-chain เป็นเวอร์ชัน cross-chain รวมถึง Defi, Game, DEX, ตลาด NFT เป็นต้น วิสัยทัศน์ของพวกเขาคือการสร้างอนาคตของ อินเทอร์เน็ตของโทเค็น Their vision is to build the future Internet of Tokens.

ทุกสิ่งที่คุณจำเป็นต้องรู้เกี่ยวกับ Darwinia

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)