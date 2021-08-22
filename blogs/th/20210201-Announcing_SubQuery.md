## ปรับเปลี่ยนและสืบค้นข้อมูลของโลกสำหรับอนาคตของ web3.0


![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

ภารกิจของ OnFinality คือการสนับสนุนนักพัฒนาบล็อกเชนโดยการให้บริการโครงสร้างพื้นฐานแก่ลูกค้าทุกรูปแบบและทุกขนาด เรากำลังเปิดตัวกิจการใหม่ที่มุ่งแก้ปัญหาหลักเพื่อให้ภารกิจนี้ก้าวหน้า: SubQuery

บล็อคเชนเกือบทั้งหมดมีความต้องการการประมวลผลและสืบค้นข้อมูล ชุมชน Polkadot ที่เจริญรุ่งเรืองต้องการบริการที่ช่วยให้พวกเขาสามารถค้นหาและใช้ข้อมูลได้อย่างรวดเร็ว โครงการของเราได้รับแรงบันดาลใจจาก [The Graph](https://thegraph.com/) ซึ่งเป็นบริการที่โฟกัสที่ Ethereum ในปัจจุบัน ซึ่งช่วยให้ลูกค้าสามารถทำได้โดยใช้ GraphQL

เนื่องจากระบบกระจายอำนาจเก็บข้อมูลข้ามเครือข่าย การสืบค้นจึงช้าและยาก For the Web 3.0 dream to be realised, it’s got to be as fast (if not faster) than centralised networks for the end user. ขณะนี้ทีมโปรโตคอลกำลังสร้างเซิร์ฟเวอร์การจัดทำดัชนีแบบไม่กระจายอำนาจสำหรับโครงการของตนเอง แต่มีสามประเด็นดังนี้:

-   ทีม Polkadot/Substrate ไม่จำเป็นต้องกังวลเกี่ยวกับการสร้างหรือจัดการสิ่งนี้ในขณะที่พวกเขากำลังสร้าง dApp ตัวต่อไป
-   ทีมต่างสร้างสรรค์สิ่งต่างๆขึ้นมาใหม่อย่างต่อเนื่อง ข้อได้เปรียบพื้นฐานของการทำงานร่วมกันของ Parachain ของ Polkadot คือการหลีกเลี่ยงสิ่งนี้
-   ในมุมมองของเรา ระบบนิเวศของ Substrate/Polkadot พร้อมที่จะเติบโตในระดับเดียวกับ Ethereum We believe that it needs to provide the same level of community services that Ethereum already has


![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

เป้าหมายของ SubQuery คือการช่วยให้โปรเจ็ค Polkadot/Substrate สร้าง dApps ที่ดีขึ้นโดยอนุญาตให้ทุกคนค้นหาและใช้ข้อมูลได้เร็วขึ้นอย่างน่าเชื่อถือ บริการของเราจะอนุญาตให้ผู้ใช้แยก, แปลง, ยืนยัน และสืบค้นข้อมูลในขั้นต้น รวมถึงเชื่อมต่อและนำเสนอข้อมูลในอนาคต Our aim is to make this a core piece of infrastructure for the Substrate/Polkadot ecosystem, just as The Graph has become for Ethereum.

> SubQuery อยู่ที่นี่เพื่อช่วยคุณแปลงและค้นหาข้อมูลของโลกสำหรับอนาคตของ web3.0

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

For the Web 3.0 dream to be realised, it’s got to be as fast (if not faster) than centralised networks for the end user.

That’s why we’re incredibly proud to announce SubQuery, an open source project that allows users to run an indexer across their chain to build a dataset that can be queried with GraphQL. This suite of tools includes a command line interface to allow projects to generate their own SubQuery project, defining how the indexer should traverse and aggregate their own network. มีแพ็คเกจโหนด SubQuery ที่จัดทำดัชนีเครือข่ายและรองรับการสืบค้น GraphQL ด้วยความช่วยเหลือของเครื่องมือเหล่านี้ ทุกคนสามารถสร้างและเรียกใช้การสืบค้นข้อมูลได้อย่างง่ายดาย

> _You can get started right away by following our example on the SubQuery Github repository:_ [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

นอกจากนี้ คุณสามารถหาข้อมูลเพิ่มเติมได้โดยอ่าน [เอกสาร SubQuery](https://doc.subquery.network/) หรือไปที่เว็บไซต์ใหม่ของเราที่ [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

เราจะมุ่งเน้นไปที่การสร้างบริการโฮสต์ที่มีการจัดการตามข้อเสนอนี้ซึ่งจะมีประสิทธิภาพและปรับขนาดได้มากขึ้น เราจะจัดเตรียมโครงสร้างพื้นฐานสาธารณะที่เชื่อถือได้ซึ่งจะสร้างโหนด SubQuery ที่มีประสิทธิภาพจากโปรเจ็กต์ SubQuery ที่อัปโหลด จากนั้นบริการจะทำดัชนีและคงสถานะเชนไว้ และจัดเตรียม GraphQL endpoint ที่ใช้งานจริงซึ่งสามารถแทนที่การใช้งานที่โฮสต์เองได้ เราจะมุ่งเน้นไปที่สิ่งนี้เพื่อให้ทุกคนสามารถมุ่งเน้นไปที่การสร้างและขยาย dApp ของพวกเขา

เมื่อสิ่งนี้เกิดขึ้นแล้ว ขั้นตอนสุดท้ายของเราคือการสร้างโทเคนให้กับธุรกิจ SubQuery โดยการสร้างเชนของเราเอง (น่าจะเป็น parachain) สำหรับ Polkadot แม้ว่าเราจะจัดเตรียมรูปแบบการเรียกเก็บเงินที่คล้ายคลึงกันสำหรับองค์กรและผู้ใช้ที่มีการบริโภคสูง(แผนการ Subscribe ที่มีระดับของการบริโภค) เราจะบันทึกข้อมูลนี้ไว้ในเครือข่ายของเราเพื่อให้ความโปร่งใสกับทุกคน และฝ่ายที่เข้าร่วมสามารถ stake เพื่อรับรางวัลเป็นสิ่งจูงใจได้ เราจะออก governance token เพื่อให้เกิดความมั่นคงแก่เชนและเพื่อให้ชุมชนมีอิทธิพลต่อทิศทางและแผนงานของเรา

แม้จะมีการพัฒนามากกว่า 10 ปีตั้งแต่ bitcoin เริ่มแรก แต่เครือข่ายแบบ centralise ยังคงเป็นกระแสหลัก ส่วนใหญ่เกิดจากความเร็วและค่าใช้จ่ายในการเข้าถึงและเขียนเครือข่าย Ethereum ก้าวไปข้างหน้าอย่างรวดเร็วด้วย smart contract แบบกระจายอำนาจ (และ The Graph เป็นโครงสร้างพื้นฐานที่ประสบความสำเร็จอย่างไม่น่าเชื่อ) แต่เครือข่ายหลักกำลังดิ้นรนเพื่อลดต้นทุนการทำธุรกรรม

เราเห็นศักยภาพของ Polkadot ตั้งแต่เริ่มต้นและรู้สึกเป็นธรรมชาติที่จะโฟกัสความพยายามของเราที่นั่น มันแก้ปัญหาการกำกับดูแลของ Ethereum การ Forking ปัญหาการทำงานร่วมกัน และอีกมากมาย หลักการพื้นฐานของ Polkadot คือการสร้างชุมชน developer, ผู้ใช้ และธุรกิจที่เฟื่องฟู ซึ่งจะใช้ความสามารถในการทำงานร่วมกันแบบมัลติเชน — ชุมชนนั้นต้องการบริการที่ช่วยให้พวกเขาสามารถค้นหาและใช้ข้อมูลได้อย่างรวดเร็ว

สถาปัตยกรรมที่เป็นเอกลักษณ์ของ Polkadot หมายความว่าเราสามารถมุ่งเน้นไปที่เครือข่ายเดียว จากนั้นก็สามารถรองรับเครือข่ายหลายเครือข่ายในปัจจุบันและอนาคตได้อย่างง่ายดาย ด้วยความพยายามในตอนนี้ แม้ว่า Polkadot ยังอยู่ระหว่างการพัฒนา เราก็พร้อมที่จะช่วยเหลือนักพัฒนาบล็อกเชนรุ่นต่อไปในการสร้าง dApp ที่ยิ่งใหญ่ต่อไป

SubQuery จะถูกสร้างขึ้นโดยทีมงานที่ OnFinality ซึ่งเป็นแพลตฟอร์ม SaaS โครงสร้างพื้นฐานสำหรับทีม blockchain และผู้ใช้เพื่อเปิดใช้โหนดและเข้าถึงโปรโตคอล blockchain ที่หลากหลาย เรามีชุดบริการแบบพึ่งพาอาศัยกัน รวมถึงบริการโหนดที่ใช้ร่วมกันของ API และโหนดเฉพาะที่สามารถใช้ในการจัดการโครงสร้างพื้นฐานหรือเป็นส่วนหนึ่งของไปป์ไลน์การทดสอบ CI/CD ของทีมโปรโตคอล เรามีความสัมพันธ์กับทีม Polkadot/Substrate ชั้นนำ ซึ่งมีความเชี่ยวชาญในการโฮสต์โครงสร้างพื้นฐานที่มีการจัดการสำหรับเครือข่าย Substrate/Polkadot และความสามารถในการส่งมอบโปรเจ็คโครงสร้างพื้นฐานที่ซับซ้อนและโฮสต์เพื่อการใช้งานจริง

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

ผู้ประกอบการ นักลงทุน ที่มีประสบการณ์ด้านไอทีมากกว่า 20 ปี เชี่ยวชาญด้านการออกแบบโครงสร้างพื้นฐานและบริการคลาวด์

**Ian He —** หัวหน้า Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

สถาปนิกบล็อกเชน, ผู้สนับสนุน polkadot-js ซึ่งเป็นผู้ที่เริ่มใช้เทคโนโลยี Substrate ก่อนใคร และได้รับรางวัลที่สองใน Polkadot hackathon ครั้งที่หนึ่ง

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

โครงสร้างพื้นฐาน & Application Architect วิศวกรซอฟต์แวร์ที่ได้รับรางวัล

**James Bayly** — หัวหน้าฝ่ายพัฒนาธุรกิจ ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

เริ่มต้นใช้งานที่ [ SubQuery repository บน Github](https://github.com/OnFinality-io/subql)

Read our [SubQuery docs](https://doc.subquery.network/)

[Visit our new website](https://subquery.network/)

Follow us on:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)