# SubQuery ให้บริการ solution สำหรับการจัดเรียงและระบุประเภทข้อมูล เพื่อ Polkamarkets

![](https://miro.medium.com/max/1400/0*KRx5x-Oaz7mfHPuJ)

วันนี้ พวกเรายินดีที่จะประกาศถึงความร่วมมือระหว่าง Polkamarkets และ SubQuery Network Polkamarkets เป็น blockchain protocol ที่รวม DiFi และตลาดเพื่อการพยากรณ์ (Prediction markets) ที่ผู้ค้าสามารถใช้ความรู้ในอดีต ปัจจุบัน และอนาคต เพื่อทำนายผลลัพธ์ที่เฉพาะเจาะจงในโลกแห่งความเป็นจริง Polkamarkets ใช้ประโยชน์จากความเชี่ยวชาญในการจัดทำดัชนีข้อมูลของ SubQuery เพื่อเพิ่มความสามารถในการจัดการจัดการข้อมูลของโปรโตคอล

การสืบค้นและการรวบรวมข้อมูลบนเครือข่าย เป็นกระบวนการที่ซับซ้อนและมีค่าใช้จ่ายที่สูง ในการสร้างแอปพลิเคชั่นที่ซับซ้อนและใช้งานง่าย นักพัฒนาจำเป็นต้องมีเครื่องมือที่มีประสิทธิภาพในการประมวลผลและสืบค้นข้อมูลได้เร็วขึ้น แม้ว่า Polkamarkets Labs ได้สร้าง [วิธีการแก้ไขปัญหาในการจัดทำดัชนี](https://github.com/Polkamarkets/polkamarkets-api) เป็นของตัวเองไว้ในก่อนหน้านี้ พวกเขายังเลือกที่จะย้ายไปยัง SubQuery เพื่อพัฒนาความสามารถในการรองรับการขยายตัวเนื่องจากโปรโตคอลได้รับการใช้งานที่มากขึ้น

> "ตลาดพยากรณ์มีความน่าเชื่อถือพอๆกับข้อมูลที่พวกเขาใช้ ความร่วมกับ SubQuery นี้ ทำให้โปรโตคอลของ Polkamarkets มีความสามารถในการจัดการข้อมูล เพื่อให้มั่นใจว่าผู้ใช้จะได้รับประสบการณ์ที่ราบรื่นและมั่นคง ในขณะเดียวกันก็เพิ่มเครื่องมือข้อมูลที่มีประสิทธิภาพให้สำหรับนักพัฒนาที่ใช้โปรโตคอลเพื่อสร้างแอปพลิเคชั่นตลาดพยากรณ์ พวกเราตั้งตารอที่จะเห็นว่าที่ไหนบ้างที่เทคโนโลยีของเราสามารถทำงานร่วมกันได้เพื่อนำการใช้งานตลาดพยากรณ์ที่ดีและได้รับการยอมรับมากขึ้น" Ricardo Marques ผู้ร่วมก่อตั้ง Polkamarkets

ในฐานะตัวสร้างดัชนีข้อมูลชั้นนำใน Polkabot SubQuery จะถูกใช้เพื่อการจัดทำดัชนีและรวมโปรโตคอลของ Polkamarkets เช่น:

- ผลงาน/ประวัติการทำธุรกรรมของผู้ใช้งาน
- ประวัติราคาผลลัพธ์ของตลาด
- ความเที่ยงตรงของประวัติตลาดตราสารหนี้ POLK

> "หนึ่งในแอปพลิเคชั่นที่น่าตื่นเต้นที่สุดของ blockchain คือตลาดพยากรณ์และการซื้อขาย เรารู้สึกตื่นเต้นที่ได้เป็นพันธมิตรกับผู้เล่นชั้นนำในพื้นที่นี้ใน Polkadot Creating a prediction market isn’t just about collecting real world events, it requires an excellent user interface to display this information and allow users to take the right positions — we’re keen to play a big part in this development.” — James Bayly, Head of Business Development at SubQuery.

The Polkamarkets protocol is being deployed in Kusama through Moonriver, and soon to Polkadot through Moonbeam. The indexing and query services managed by SubQuery and provided to the Polkadot community are available in [SubQuery’s Explorer](https://explorer.subquery.network/).

## About Polkamarkets

[Polkamarkets](https://www.polkamarkets.com/) is an Autonomous Prediction Market Protocol built for cross-chain information exchange and trading where users take positions on outcomes of real-world events–in decentralized and interoperable EVMs.

[Discord](https://discord.gg/polkamarkets) | [Website](https://polkamarkets.com/) | [LinkedIn](https://www.linkedin.com/company/polkamarkets/) | [GitHub](https://github.com/Polkamarkets) | [Telegram](http://t.me/polkamarkets) | [Twitter](https://twitter.com/polkamarkets)

## About SubQuery

[SubQuery](https://subquery.network/) is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today. SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

[Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [GitHub](https://github.com/subquery)
