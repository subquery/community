# Solarbeam ร่วมมือกับ SubQuery บน launchpad ตัวใหม่ "Eclipse"

![](https://miro.medium.com/max/1400/1*ZG9NqT9GIXax5SBpNn5ipg.png)

วันนี้ เราต้องการที่จะประกาศความร่วมมือเชิงกลยุทธ์ระหว่าง Solarbeam และ SubQuery Network Solarbeam คือ [DEX ที่ใหญ่ที่สุด](https://defillama.com/chain/Moonriver) ในพาราเชนบน Kusama ของ Moonriver โดยมี TVL สูงสุดกว่า 180 ล้านดอลลาร์ ซึ่งแพลตฟอร์มนี้จำเป็นต้องใช้ความสามารถในการ Query ข้อมูลที่มีความเร็วสูงและเชื่อถือได้สำหรับอินเทอร์เฟซผู้ใช้

เมื่อเร็ว ๆ นี้ Solarbeam ได้เปิดตัว [Eclipse](https://app.solarbeam.io/eclipse) ซึ่งเป็น Launchpad ที่สร้างขึ้นมาเพื่อโทเค็นพูลและการประมูลโทเค็นแบบ Cross-chain ทำให้โปรเจกต์ใหม่สามารถระดมเงินทุนบนสภาพแวดล้อมแบบกระจายศูนย์และแบบทำงานร่วมกันบนพื้นฐานของ Moonriver

![](https://miro.medium.com/max/1400/1*IbRN8EnymWvqvh0sx_PNKw.png)

> _"SubQuery has proved to be a reliable tool for querying events and transactions on EVM and Substrate based chains, with a minimal latency for syncing new data and suitable for large amounts of data. As a result, we believe SubQuery will provide as good of an experience on Moonbeam as it has for us on Moonriver"_ — Founder, Solarbeam

บริการของ [SubQuery](https://subquery.network/) ช่วยขับเคลื่อนการวิเคราะห์สำหรับ IDO Launchpad ของ Eclipse โดย Solarbeam ก่อนการเปิดตัวบน Moonbeam นั้น Solarbeam จะผสาน SubQuery เข้ากับเครื่องมือวิเคราะห์พอร์ตลงทุนผู้ใช้ ซึ่งจะช่วยให้ผู้ใช้สามารถติดตามประวัติการทำฟาร์มและผลกำไรของพวกเขาได้ This is made possible by the [recent integration of Moonbeam and Moonriver’s EVM with SubQuery](./20211028-moonbeam-evm.md).

![](https://miro.medium.com/max/1400/1*6_iO6tLt4RxxMvs8u-F_Bg.png)

ในตัวอย่างด้านล่าง เรากำลังใช้ SubQuery เพื่อ Query ข้อมูลการมีส่วนร่วมและพูลสองอันดับแรกใน DEX ของ Solarbeam ที่เรียงตามจำนวนทั้งหมด คุณจะเห็นได้ว่าเพียงแค่การ Query ข้อมูลด้วย GraphQL ง่ายๆ ก็สามารถได้รับข้อมูลที่ Solarbeam จำเป็นต้องใช้ในการสร้างประสบการณ์การใช้งานที่เข้าใจง่ายแล้ว

![](https://miro.medium.com/max/1400/1*5iCwSaU96UtDMFA1MruRlA.png)

Solarbeam ใช้ [SubQuery Projects](https://project.subquery.network/) เพื่อจัดการโปรเจกต์ของตนเองและทำการอัปเดตตามความจำเป็น ซึ่งบริการ Indexing และ Query ที่เราให้บริการได้รับการบริหารโดย SubQuery ทั้งหมด และจะให้บริการกับคอมมูนิตี้ Polkadot แบบไม่มีค่าใช้จ่ายใน [SubQuery’s Explorer](https://explorer.subquery.network/)

[คุณสามารถลองดูโปรเจกต์ของ Solarbeam ใน SubQuery’s Explorer ได้ที่นี่](https://explorer.subquery.network/subquery/csntest/eclipse)

## เกี่ยวกับ Solarbeam

[Solarbeam](https://solarbeam.io/) เป็น AMM ชั้นนำบน Moonriver Network โดยมี TVL สูงสุดกว่า 180 ล้านดอลลาร์ Solarbeam เปิดตัวเมื่อวันที่ 1 กันยายน พ.ศ. 2564 และได้สร้างชื่อให้ตัวเองอย่างรวดเร็วในฐานะหนึ่งในแพลตฟอร์มชั้นนำบนระบบนิเวศ Moonriver

เรียนรู้เพิ่มเติมเกี่ยวกับ Solarbeam โดยการไปที่:

[Main website](https://solarbeam.io/exchange/swap) | [Twitter](https://twitter.com/solarbeamio) | [Discord](http://discord.gg/rK4AjZXuwf) | [Telegram](http://t.me/solarbeamio) | [Medium](https://solarbeam.medium.com/)</0>

## เกี่ยวกับ SubQuery

[SubQuery](https://subquery.network/) คือเลเยอร์ Aggregation, Indexing และ Querying ข้อมูลไร้ศูนย์กลางระหว่างบล็อกเชนเลเยอร์ 1 และแอปพลิเคชันที่ไร้ศูนย์กลาง (DApp) ปัจจุบันมุ่งเน้นไปที่โปรเจกต์ Polkadot และ Substrate ซึ่งบริการข้อมูลนี้ช่วยให้นักพัฒนาสามารถโฟกัสไปที่การใช้งานหลัก (core use case) และระบบหน้าบ้าน (front-end) โดยไม่ต้องเสียเวลาไปกับการออกแบบระบบหลังบ้าน (back-end) เอง เพื่อใช้ประมวลผลข้อมูล

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [GitHub](https://github.com/subquery)
