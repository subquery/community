# รายงานผลการ Testnet "SubQuery Frontier ซีซั่น 1"

![](https://miro.medium.com/max/700/0*b3TqTiJWGrNSs28F)

เมื่อสัปดาห์ที่แล้ว SubQuery Frontier testnet ในซีซั่นแรกได้เสร็จสิ้นลงอย่างสัมฤทธิ์ผล testnet ย่อมาจาก เครือข่ายทดสอบ (test network) ซึ่งหมายถึงเครือข่ายที่นักพัฒนาใช้เพื่อทดสอบโค้ดก่อนที่จะนำไปใช้กับเครือข่ายหลัก (หรือ Mainnet) การเปิดตัว testnet ของ SubQuery ถือเป็นก้าวสำคัญในการพัฒนาไปสู่การปรับใช้บน mainnet เต็มรูปแบบซึ่งเกิดขึ้นพร้อมกับการลิสต์โทเค็นของเราบน centralised exchanges

ในซีซั่นที่ 1 ของ SubQuery Frontier testnet เรามีเป้าหมายดังต่อไปนี้: ค้นหาและแก้ไขจุดบกพร่องที่สำคัญและปัญหาด้าน documentation ที่เกี่ยวข้องกับการดำเนินการหลักของ indexer แบบวันต่อวัน เพื่อช่วยเราในเรื่องนี้ เราได้คัดเลือกผู้ดำเนินการรันโหนดจำนวน 23 ราย ที่มีประสบการณ์ในการรันโหนดได้อย่างมีประสิทธิภาพสูง และสามารถสเกลได้ด้วยการตรวจสอบและรักษาความปลอดภัยของกระเป๋าเงิน/โครงสร้างพื้นฐาน

<iframe width="692" height="389" src="https://www.youtube.com/embed/hZ1Mn-jOuHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

ในซีซั่นนี้ เรามุ่งเน้นไปยังสิ่งที่เราเรียกว่า "การดำเนินการหลักของ Indexer" ซึ่งรวมถึงขั้นตอนการเริ่มต้นใช้งานพื้นฐานสำหรับ Indexer เพื่อลงทะเบียน เริ่มกระบวนการทำงานโปรเจกต์ SubQuery และขายข้อมูลให้กับ Network ซึ่งรวมถึงการติดตั้งบริการทั้งหมด ทำตามเอกสารอ้างอิงของเราเพื่อจัดทำดัชนีและประกาศการสนับสนุน SubQuery โปรเจกต์ของพวกเขา จากนั้นดำเนินการ Stake และ Delegation Indexer ยังถูกคาดหวังให้รักษาและเปิดเผย endpoint ของ GraphQL ในขณะที่เวลาในการทำงานของแต่ละรายการถูกตรวจวัด

> _"ประสบการณ์โดยรวมออกมาดี, ทุกอย่างเรียบร้อย, ใช้งานง่ายและชัดเจน มีการเปลี่ยนแปลงมากมายระหว่างทาง และเราตั้งตารอที่จะรายงานจุดบกพร่องเพิ่มเติมที่เราจะได้พบในซีซันที่ 2 เพื่อการเริ่มต้น SubQuery Network ได้อย่างราบรื่น!"_ - ผู้เข้าร่วมในซีซั่น 1

เรารวบรวมข้อมูลและข้อเสนอแนะจำนวนมากในซีซั่นนี้ ซึ่งรวมถึงข้อบกพร่องที่สำคัญเกี่ยวกับ UX และข้อเสนอแนะเกี่ยวกับบริการของ indexer indexer ที่เข้าร่วมทั้งหมดสามารถเริ่มต้นได้โดยไม่มีปัญหา นี่เป็นข้อพิสูจน์ถึงคุณภาพของเอกสารอ้างอิงและแอปพลิเคชัน indexer ที่ทีมของเราสร้างขึ้น นอกจากนี้เรายังได้เรียนรู้มากมายเกี่ยวกับวิธีการทำงานของ indexer ผู้ให้บริการบนแพลตฟอร์มคลาวด์และฮาร์ดแวร์ต่างๆ ซึ่งจะช่วยให้เราสามารถระบุและแบ่งปันกลยุทธ์สำหรับการรัน indexer โหนดที่สามารถสเกลได้

โดยสรุปแล้ว ทีมงานของเรารู้สึกประหลาดใจที่การทดสอบไร้ซึ่งปัญหาใหญ่ใดๆ และเรายินดีที่จะได้ก้าวไปสู่ซีซั่น 2 อย่างรวดเร็ว ซึ่งในซีซั่น 2 นี้การทดสอบจะเป็นแบบ closed beta ซึ่งจะมีผู้เข้าร่วมจำนวนมากขึ้น Season 2 will be rolling out with new features including a leaderboard, where challenges will have points assigned and only high performing indexers will rise to the top and receive rewards for their efforts. The leaderboard system will further incentivise our participants and ensure we are getting a true stress-test from season 2 as the indexers battle to surpass one another in the rankings.

This next phase will be particularly important for us on many fronts. Chiefly, by inviting a higher volume of participants, we hope to simulate load; upwards of 200 million requests/day to ensure the network is equipped and capable of managing this all-the-while maintaining uptime and quality experience. This will prepare us for Season 3, open to any type of participant including hobbyists and less-technically minded people in our community --- we expect to be challenged around our documentation and communication!

![](https://miro.medium.com/max/700/0*viJ1DgWiGoPdI2fS)

The Frontier Testnet is being rolled out in stages that we call seasons, starting from April 11th with each season lasting for 2--3 weeks. After putting out the[ call for indexers to participate](./20211202-indexer-invitation) we were overwhelmed by the response from our community and after careful deliberation, we chose 23 indexers to participate in the first season. Now that the first season is complete, we are already looking forward to Season 2 that has just started today with over 100 carefully selected indexers and expanded functionality.

Whilst there are several factors at play, we expect to be able to announce our TGE timeline shortly after the end of Season 2, whilst also starting preparations to deploy Season 3. For more information on the testnet, please visit the SubQuery documentation website: https://university.subquery.network/

For further information, please [contact our team in Discord](https://discord.com/invite/78zg8aBSMG).

## About SubQuery Network

[SubQuery](https://subquery.network/) is a blockchain developer toolkit enabling others to build Web3 applications of the future. A SubQuery project is a complete API to organise and query data from layer-1 chains. Currently servicing Polkadot, Substrate and Avalanche projects, this data-as-a-service allows developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The SubQuery Network proposes to enable this same scalable and reliable solution, but in a completely decentralised way.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
