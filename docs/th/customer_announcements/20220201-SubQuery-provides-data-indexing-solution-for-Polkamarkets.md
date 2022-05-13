# SubQuery ให้บริการ Indexing Solution สำหรับข้อมูลบน Polkamarkets

![](https://miro.medium.com/max/1400/0*KRx5x-Oaz7mfHPuJ)

วันนี้ พวกเรายินดีที่จะประกาศถึงความร่วมมือระหว่าง Polkamarkets และ SubQuery Network โดย Polkamarkets เป็นบล็อกเชนโปรโตคอลที่รวม DeFi และตลาดเพื่อการพยากรณ์ที่เทรดเดอร์สามารถใช้ความรู้ในอดีต ปัจจุบัน และอนาคต ทำนายผลลัพธ์ที่เฉพาะเจาะจงในโลกแห่งความเป็นจริง Polkamarkets ใช้ประโยชน์จากความเชี่ยวชาญในการ Index ข้อมูลของ SubQuery เพื่อเพิ่มความสามารถในการจัดการข้อมูลของโปรโตคอล

การ Query และ Aggregate ข้อมูล On-chain เป็นกระบวนการที่ซับซ้อนและมีค่าใช้จ่ายที่สูง ซึ่งนักพัฒนาจำเป็นต้องมีเครื่องมือที่มีประสิทธิภาพในการประมวลผลและ Query ข้อมูลได้เร็วขึ้น เพื่อที่จะสร้างแอปพลิเคชั่นที่ซับซ้อนและใช้งานง่ายยิ่งขึ้น  แม้ว่า Polkamarkets Labs จะได้สร้าง [Indexing solution](https://github.com/Polkamarkets/polkamarkets-api) เป็นของตัวเองไว้แล้วก่อนหน้านี้ พวกเขาก็ยังเลือกที่จะย้ายไปยัง SubQuery เพื่อพัฒนาความสามารถในการรองรับการขยายตัวเนื่องจากโปรโตคอลมีการใช้งานที่มากขึ้น

> _"การคาดการณ์ตลาดมีความน่าเชื่อถือพอๆกับข้อมูลที่พวกเขาใช้ ความร่วมมือกับ SubQuery นี้ ทำให้โปรโตคอลของ Polkamarkets มีความสามารถในการจัดการข้อมูล เพื่อให้มั่นใจว่าผู้ใช้จะได้รับประสบการณ์ที่ราบรื่นและเสถียร ในขณะเดียวกันก็เพิ่มเครื่องมือข้อมูลที่มีประสิทธิภาพให้สำหรับนักพัฒนาที่ใช้โปรโตคอลเพื่อสร้างแอปพลิเคชั่นตลาดเพื่อการพยากรณ์ พวกเราตั้งตารอที่จะได้เห็นเทคโนโลยีของพวกเราทำงานร่วมกันเพื่อสร้างการนำไปใช้ประโยชน์ในการคาดการณ์ตลาดที่ยอดเยี่ยมยิ่งขึ้น" _ - Ricardo Marques

ในฐานะ Indexer ข้อมูลชั้นนำใน Polkabot SubQuery จะถูกใช้เพื่อ Index และ Aggregate โปรโตคอลของ Polkamarkets เช่น:

- พอร์ต/ประวัติการทำธุรกรรมของผู้ใช้งาน
- ประวัติราคาผลลัพธ์ของตลาด
- ความเที่ยงตรงของประวัติตลาดตราสารหนี้ POLK

> _"หนึ่งในแอปพลิเคชั่นที่น่าตื่นเต้นที่สุดของบล็อคเชนคือการเทรดและการคาดการณ์ตลาด พวกเรารู้สึกตื่นเต้นที่จะได้เป็นพันธมิตรกับเหล่าผู้เล่นชั้นนำในจักรวาล Polkadot นี้ การคาดการณ์ตลาดไม่ใช่การเก็บรวบรวมข้อมูลต่างๆในโลกแห่งความเป็นจริงเท่านั้น แต่ยังต้องการอินเตอร์เฟซผู้ใช้งานที่แสดงข้อมูลนี้และช่วยให้ผู้ใช้งานออกโพซิชั่นได้อย่างถูกต้อง - พวกเรารู้สึกตื่นเต้นที่จะได้เป็นส่วนสำคัญในการพัฒนาครั้งนี้"_ - James Bayly, หัวหน้าฝ่ายพัฒนาธุรกิจของ SubQuery

โปรโตคอล Polkamarkets กำลังถูก Deploy ใน Kasuma ผ่าน Moonriver และในอีกไม่ช้าสำหรับ Polkadot ผ่าน Moonbeam บริการ Indexing และ Query ที่จัดการโดย SubQuery และถูกมอบให้แก่คอมมูนิตี้ Polkadot มีให้บริการใน [SubQuery’s Explorer](https://explorer.subquery.network/)

## เกี่ยวกับ Polkamarkets

[Polkamarkets](https://www.polkamarkets.com/) โปรโตคอลการตลาดซึ่งทำนายแบบอิสระที่สร้างขึ้นสำหรับการแลกเปลี่ยนข้อมูลและเทรดแบบ Cross-chain โดยที่ผู้ใช้จะเลือก Position ตามผลลัพธ์ของเหตุการณ์ในโลกแห่งความเป็นจริง–บน EVMs ที่มีการกระจายศูนย์และสามารถทำงานร่วมกันได้

[Discord](https://discord.gg/polkamarkets) | [Website](https://polkamarkets.com/) | [LinkedIn](https://www.linkedin.com/company/polkamarkets/) | [GitHub](https://github.com/Polkamarkets) | [Telegram](http://t.me/polkamarkets) | [Twitter](https://twitter.com/polkamarkets)

## เกี่ยวกับ SubQuery

[SubQuery](https://subquery.network/) เป็นผู้ให้บริการข้อมูลแนวหน้าของ Polkadot ซึ่งสนับสนุนการ Index & Query ข้อมูลระหว่างเลเยอร์หนึ่ง (Polkadot) และแอปพลิเคชันแบบกระจายศูนย์ บริการข้อมูลของ SubQuery นั้นถูกใช้โดยงานเว็บไซต์ประมูล Crowdloan ของทั้ง Polkadot และ Kusama ที่ใช้งานอยู่ทุกวันนี้ โปรโตคอลของ SubQuery จะจัดเรียงข้อมูลที่ไม่มีความเป็นระเบียบด้วย SubQuery SDK ซึ่งทำให้นักพัฒนาสามารถจดจ่ออยู่กับการ Deploy ผลิตภัณฑ์หลักของเขาโดยไม่ต้องเปลืองความพยายามไปกับเทคโนโลยีหลังบ้าน (Backend technologies) โดยไม่จำเป็น

[Website](https://subquery.network/) | [Email](hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [GitHub](https://github.com/subquery)
