# SubQuery นำเสนอ Open Source SDK หลังจากได้รับทุนสนับสนุนจาก Web3 Foundation

## นักพัฒนาสามารถ transform และ query ข้อมูลของโลกสำหรับอนาคตของ Web3 ได้แล้ว

![](https://miro.medium.com/max/1400/1*f9Jw37LjUGu8P8W39cjDYw.png)

OnFinality ในสัปดาห์นี้ (ทีมงานที่อยู่เบื้องหลัง SubQuery) ได้นำเสนอใน Web3 Foundation Grant เพื่อจัดหาเวิร์กโฟลว์ที่สมบูรณ์เพื่อสร้างโครงการ SubQuery เรารู้สึกตื่นเต้นที่จะประกาศงานที่เราทำเพื่อให้ grant นี้เสร็จสมบูรณ์ และแชร์กับคนทั่วโลกเพื่อให้พวกเขาสามารถเริ่มใช้โปรเจ็คของเราในวันนี้เพื่อ query เครือข่ายของพวกเขาได้อย่างมีประสิทธิภาพมากขึ้น We’re excited to announce the work that we’ve done to complete this grant, and to share it with the world so that they can start using our project today to query their networks more efficiently.

SubQuery สร้างขึ้นโดยทีมงานที่ OnFinality ซึ่งเป็นโครงสร้างพื้นฐาน Iaas & แพลตฟอร์ม SaaS สำหรับทีมบล็อกเชนและผู้ใช้เพื่อเปิดใช้โหนดและเข้าถึงโปรโตคอลบล็อกเชนจำนวนมาก เรามีชุดบริการแบบอาศัยซึ่งกันและกัน รวมถึงบริการโหนดที่ใช้ร่วมกันของ API และมีความสัมพันธ์กับทีม Polkadot/Substrate ชั้นนำ We have a suite of symbiotic services including our API shared node services, and have relationships with the top Polkadot/Substrate teams.

Almost every blockchain has a need to process and query data. Our project is inspired by the growth of data protocols serving the application layer and is here to help the thriving Polkadot community. บล็อคเชนเกือบทั้งหมดมีความต้องการการประมวลผลและ query ข้อมูล โครงการของเราได้รับแรงบันดาลใจจากการเติบโตของโปรโตคอลข้อมูลที่ให้บริการเลเยอร์ของแอปพลิเคชัน และพร้อมให้ความช่วยเหลือชุมชน Polkadot ที่กำลังเติบโต เป้าหมายของ SubQuery คือการช่วยให้โปรเจ็ค Polkadot/Substrate สร้าง dApps ที่ดีขึ้นโดยอนุญาตให้ทุกคนค้นหาและใช้ข้อมูลได้เร็วขึ้นอย่างน่าเชื่อถือ บริการของเราอนุญาตให้ผู้ใช้แยก, แปลง, ยืนยัน และ query ข้อมูล รวมถึงเชื่อมต่อและนำเสนอข้อมูลในอนาคต Our service allows users to extract, transform, persist, and query data, as well as connect and present data in the future.

[โปรแกรมทุนสนับสนุน Open Web3 Foundation](https://github.com/w3f/Open-Grants-Program/pull/136) ช่วยให้เราสร้าง SubQuery ซึ่งเป็นโครงการโอเพ่นซอร์สที่อนุญาตให้ผู้ใช้เรียกใช้ตัวสร้างดัชนี cross-chain เพื่อสร้างชุดข้อมูลที่สามารถ query ด้วย GraphQL

ชุดเครื่องมือนี้ประกอบด้วย @subql/cli เพื่อให้โครงการสร้างโครงการ SubQuery ของตนเอง โดยกำหนดวิธีที่ indexer ควรสำรวจและรวมเครือข่ายของพวกเขาเอง ตามข้อเสนอของเรา เราได้จัดเตรียม toturial พื้นฐานที่แสดงให้ผู้ใช้ทราบถึงวิธีใช้ cli เพื่อจัดทำดัชนีเครือข่ายของตน ซึ่ง [คุณสามารถติดตามได้ที่นี่](https://doc.subquery.network/quickstart.html) เราได้จัดเตรียมเอกสารสำหรับนักพัฒนาโดยละเอียดเพิ่มเติมสำหรับการใช้งานขั้นสูง As part of our proposal, we have provided a basic tutorial that shows users how to use the cli to index their network that [you can follow here](https://doc.subquery.network/quickstart.html). We’ve even provided more detailed developer documentation for more advanced usages.

ประการที่สอง มีแพ็คเกจโหนด SubQuery ที่โหลดโปรเจ็กต์ SubQuery ที่กำหนดซึ่งสร้างโดย CLI แล้วสร้างดัชนีเครือข่ายไปยังฐานข้อมูล Postgres เมื่อใช้ Hasura คุณสามารถเรียกใช้การสืบค้น GraphQL ได้ทันทีบนตารางที่จัดทำดัชนี ด้วยความช่วยเหลือของเครื่องมือเหล่านี้, และ material สนับสนุนของชุมชนที่เรากำลังปรับปรุงอยู่เสมอ ทุกคนสามารถสร้างและเรียกใช้การ query ได้อย่างง่ายดาย Using Hasura, you can run GraphQL queries right away over indexed tables. With the help of these tools, and the community support material that we’re always improving, anyone can create and run queries easily.

**คุณสามารถเริ่มต้นได้ทันทีโดยทำตามตัวอย่างของเราใน** [**ที่เก็บ SubQuery Github**](https://github.com/OnFinality-io/subql)** นอกจากนี้ คุณสามารถหาข้อมูลเพิ่มเติมได้โดยอ่าน** [**เอกสาร SubQuery**](https://doc.subquery.network/) **หรือ** [**เยี่ยมชมเว็บไซต์ใหม่ของเรา**](https://subquery.network/) Additionally, you can find out more by reading our** [**SubQuery docs**](https://doc.subquery.network/) **or** [**visiting our new website**](https://subquery.network/)**.**

เรารู้สึกซาบซึ้งอย่างยิ่งที่ได้รับการสนับสนุนจากมูลนิธิ Web3 เพื่อช่วยเราดำเนินโครงการนี้เพื่อชุมชน มูลนิธิ Web3 ให้ทุนแก่ทีมวิจัยและพัฒนาในการสร้าง stack เทคโนโลยีของเว็บที่กระจายอำนาจ ก่อตั้งขึ้นในเมือง Zug ประเทศสวิตเซอร์แลนด์โดย Dr. Web3 Foundation funds research and development teams building the technology stack of the decentralized web. Gavin Wood ผู้ร่วมก่อตั้ง Ethereum และอดีตหัวหน้าเจ้าหน้าที่เทคโนโลยี Polkadot เป็นโครงการหลักของมูลนิธิ Polkadot is the Foundation’s flagship project.

We’ll focus on building a managed hosted service based off this offering that will be more performant and scalable. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. เราเห็นศักยภาพของ Polkadot ตั้งแต่เริ่มต้นและรู้สึกเป็นธรรมชาติที่จะโฟกัสความพยายามของเราที่นั่น หลักการพื้นฐานของ Polkadot คือการสร้างชุมชน developer, ผู้ใช้ และธุรกิจที่เฟื่องฟู ซึ่งจะใช้ความสามารถในการทำงานร่วมกันแบบมัลติเชน — ชุมชนนั้นต้องการบริการที่ช่วยให้พวกเขาสามารถค้นหาและใช้ข้อมูลได้อย่างรวดเร็ว

สถาปัตยกรรมที่เป็นเอกลักษณ์ของ Polkadot หมายความว่าเราสามารถมุ่งเน้นไปที่เครือข่ายเดียว จากนั้นก็สามารถรองรับเครือข่ายหลายเครือข่ายในปัจจุบันและอนาคตได้อย่างง่ายดาย แม้ว่า Polkadot ยังอยู่ระหว่างการพัฒนา แต่เราพร้อมที่จะช่วยเหลือนักพัฒนาบล็อกเชนรุ่นต่อไปในการสร้าง dApp ที่ยิ่งใหญ่ต่อไป Even though Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

เริ่มต้นใช้งานที่ [ SubQuery repository บน Github](https://github.com/OnFinality-io/subql)

อ่าน [เอกสาร SubQuery](https://doc.subquery.network/) ของเรา

[เยี่ยมชมเว็บไซต์ใหม่ของเรา](https://subquery.network/)

Learn more about Web3 Foundation by visiting their [website](https://web3.foundation/). เรียนรู้เพิ่มเติมเกี่ยวกับ Web3 Foundation โดยไปที่[เว็บไซต์](https://web3.foundation/)ของพวกเขา หากต้องการติดตามการพัฒนาล่าสุดที่ Web3 Foundation เข้าร่วมกับพวกเขาใน [Reddit](https://www.reddit.com/r/dot/) หรือ [Twitter](https://twitter.com/web3foundation)

ติดตามเราได้ที่:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)