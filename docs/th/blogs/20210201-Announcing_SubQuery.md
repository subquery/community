# ประกาศ SubQuery

## ปรับเปลี่ยนและสืบค้นข้อมูลของโลกสำหรับอนาคตของ web3.0

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

ภารกิจของ OnFinality คือการสนับสนุนนักพัฒนาบล็อกเชนโดยการให้บริการโครงสร้างพื้นฐานแก่ลูกค้าทุกรูปแบบและทุกขนาด เรากำลังเปิดตัวกิจการใหม่ที่มุ่งแก้ปัญหาหลักเพื่อให้ภารกิจนี้ก้าวหน้า: SubQuery We’re launching a new venture that aims to solve a core problem to advance this mission: SubQuery.

Almost every blockchain has a need to process and query data. The thriving Polkadot community is going to need a service that allows them to reliably find and consume data quickly. บล็อคเชนเกือบทั้งหมดมีความต้องการการประมวลผลและสืบค้นข้อมูล ชุมชน Polkadot ที่เจริญรุ่งเรืองต้องการบริการที่ช่วยให้พวกเขาสามารถค้นหาและใช้ข้อมูลได้อย่างรวดเร็ว โครงการของเราได้รับแรงบันดาลใจจาก [The Graph](https://thegraph.com/) ซึ่งเป็นบริการที่โฟกัสที่ Ethereum ในปัจจุบัน ซึ่งช่วยให้ลูกค้าสามารถทำได้โดยใช้ GraphQL

Since decentralised systems store data across networks querying is slow and hard. For the Web 3.0 dream to be realised, it’s got to be as fast (if not faster) than centralised networks for the end user. Protocol teams are currently building centralised indexing servers for their own projects, but this poses three issues:

-   ทีม Polkadot/Substrate ไม่จำเป็นต้องกังวลเกี่ยวกับการสร้างหรือจัดการสิ่งนี้ในขณะที่พวกเขากำลังสร้าง dApp ตัวต่อไป
-   ทีมต่างสร้างสรรค์สิ่งต่างๆขึ้นมาใหม่อย่างต่อเนื่อง ข้อได้เปรียบพื้นฐานของการทำงานร่วมกันของ Parachain ของ Polkadot คือการหลีกเลี่ยงสิ่งนี้
-   In our view, the Substrate/Polkadot ecosystem is poised to reach the same level of growth as Ethereum. ในมุมมองของเรา ระบบนิเวศของ Substrate/Polkadot พร้อมที่จะเติบโตในระดับเดียวกับ Ethereum เราเชื่อว่าจำเป็นต้องให้บริการชุมชนในระดับเดียวกันกับที่ Ethereum มี

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

เป้าหมายของ SubQuery คือการช่วยให้โปรเจ็ค Polkadot/Substrate สร้าง dApps ที่ดีขึ้นโดยอนุญาตให้ทุกคนค้นหาและใช้ข้อมูลได้เร็วขึ้นอย่างน่าเชื่อถือ บริการของเราจะอนุญาตให้ผู้ใช้แยก, แปลง, ยืนยัน และสืบค้นข้อมูลในขั้นต้น รวมถึงเชื่อมต่อและนำเสนอข้อมูลในอนาคต เป้าหมายของเราคือทำให้สิ่งนี้เป็นส่วนสำคัญของโครงสร้างพื้นฐานสำหรับระบบนิเวศของ Substrate/Polkadot เช่นเดียวกับที่ The Graph เป็น สำหรับ Ethereum Our service will allow users to extract, transform, persist, and query data initially, as well as connect and present data in the future. Our aim is to make this a core piece of infrastructure for the Substrate/Polkadot ecosystem, just as The Graph has become for Ethereum.

> SubQuery อยู่ที่นี่เพื่อช่วยคุณแปลงและค้นหาข้อมูลของโลกสำหรับอนาคตของ web3.0

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

เพื่อให้ความฝันของ Web 3.0 เป็นจริง จะต้องเร็ว(ถ้าไม่เร็วกว่า) แบบเครือข่ายที่ไม่กระจายอำนาจสำหรับผู้ใช้ปลายทาง

นั่นเป็นเหตุผลที่เราภูมิใจอย่างยิ่งที่จะประกาศว่า SubQuery ซึ่งเป็นโปรเจ็คโอเพ่นซอร์สที่อนุญาตให้ผู้ใช้งานเรียกใช้ indexer ข้ามเชนของพวกเขาเพื่อสร้างชุดข้อมูลที่สามารถถูกค้นหาด้วย GraphQL ชุดเครื่องมือนี้มีอินเทอร์เฟซ command line เพื่อให้โปรเจ็คต่างๆสร้างโปรเจ็ค SubQuery ของตนเองได้ โดยกำหนดวิธีที่ indexer ควรสำรวจและรวมเครือข่ายของตนเอง มีแพ็คเกจโหนด SubQuery ที่จัดทำดัชนีเครือข่ายและรองรับการสืบค้น GraphQL ด้วยความช่วยเหลือของเครื่องมือเหล่านี้ ทุกคนสามารถสร้างและเรียกใช้การสืบค้นข้อมูลได้อย่างง่ายดาย This suite of tools includes a command line interface to allow projects to generate their own SubQuery project, defining how the indexer should traverse and aggregate their own network. There’s a SubQuery node package that indexes the network and supports GraphQL queries. With the help of these tools, anyone can create and run queries easily.

> _คุณสามารถเริ่มต้นได้ทันทีโดยทำตามตัวอย่างของเราใน Git Repository ของ SubQuery บน Github:_ [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

นอกจากนี้ คุณสามารถหาข้อมูลเพิ่มเติมได้โดยอ่าน [เอกสาร SubQuery](https://doc.subquery.network/) หรือไปที่เว็บไซต์ใหม่ของเราที่ [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

We’ll focus on building a managed hosted service based off this offering that will be more performant and scalable. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

เมื่อสิ่งนี้เกิดขึ้นแล้ว ขั้นตอนสุดท้ายของเราคือการสร้างโทเคนให้กับธุรกิจ SubQuery โดยการสร้างเชนของเราเอง (น่าจะเป็น parachain) สำหรับ Polkadot แม้ว่าเราจะจัดเตรียมรูปแบบการเรียกเก็บเงินที่คล้ายคลึงกันสำหรับองค์กรและผู้ใช้ที่มีการบริโภคสูง(แผนการ Subscribe ที่มีระดับของการบริโภค) เราจะบันทึกข้อมูลนี้ไว้ในเครือข่ายของเราเพื่อให้ความโปร่งใสกับทุกคน และฝ่ายที่เข้าร่วมสามารถ stake เพื่อรับรางวัลเป็นสิ่งจูงใจได้ เราจะออก governance token เพื่อให้เกิดความมั่นคงแก่เชนและเพื่อให้ชุมชนมีอิทธิพลต่อทิศทางและแผนงานของเรา Although we’ll provide a similar billing model for enterprise and high consumption users (subscription plan with consumption levels), we’ll save this data to our chain to make it transparent to everyone and participating parties can stake for rewards as incentives. We’ll issue a governance token to provide stability to the chain and to allow the community to influence our direction and roadmap.

Despite over 10 years of development since bitcoin first started, centralised networks are still the mainstream. It’s largely due to the speed and cost of accessing and writing to the network. แม้จะมีการพัฒนามากกว่า 10 ปีตั้งแต่ bitcoin เริ่มแรก แต่เครือข่ายแบบ centralise ยังคงเป็นกระแสหลัก ส่วนใหญ่เกิดจากความเร็วและค่าใช้จ่ายในการเข้าถึงและเขียนเครือข่าย Ethereum ก้าวไปข้างหน้าอย่างรวดเร็วด้วย smart contract แบบกระจายอำนาจ (และ The Graph เป็นโครงสร้างพื้นฐานที่ประสบความสำเร็จอย่างไม่น่าเชื่อ) แต่เครือข่ายหลักกำลังดิ้นรนเพื่อลดต้นทุนการทำธุรกรรม

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. It solves Ethereum’s governance, forking, interoperability problems, and more. เราเห็นศักยภาพของ Polkadot ตั้งแต่เริ่มต้นและรู้สึกเป็นธรรมชาติที่จะโฟกัสความพยายามของเราที่นั่น มันแก้ปัญหาการกำกับดูแลของ Ethereum การ Forking ปัญหาการทำงานร่วมกัน และอีกมากมาย หลักการพื้นฐานของ Polkadot คือการสร้างชุมชน developer, ผู้ใช้ และธุรกิจที่เฟื่องฟู ซึ่งจะใช้ความสามารถในการทำงานร่วมกันแบบมัลติเชน — ชุมชนนั้นต้องการบริการที่ช่วยให้พวกเขาสามารถค้นหาและใช้ข้อมูลได้อย่างรวดเร็ว

สถาปัตยกรรมที่เป็นเอกลักษณ์ของ Polkadot หมายความว่าเราสามารถมุ่งเน้นไปที่เครือข่ายเดียว จากนั้นก็สามารถรองรับเครือข่ายหลายเครือข่ายในปัจจุบันและอนาคตได้อย่างง่ายดาย ด้วยความพยายามในตอนนี้ แม้ว่า Polkadot ยังอยู่ระหว่างการพัฒนา เราก็พร้อมที่จะช่วยเหลือนักพัฒนาบล็อกเชนรุ่นต่อไปในการสร้าง dApp ที่ยิ่งใหญ่ต่อไป By putting in this effort now, even as Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

SubQuery จะถูกสร้างขึ้นโดยทีมงานที่ OnFinality ซึ่งเป็นแพลตฟอร์ม SaaS โครงสร้างพื้นฐานสำหรับทีม blockchain และผู้ใช้เพื่อเปิดใช้โหนดและเข้าถึงโปรโตคอล blockchain ที่หลากหลาย เรามีชุดบริการแบบพึ่งพาอาศัยกัน รวมถึงบริการโหนดที่ใช้ร่วมกันของ API และโหนดเฉพาะที่สามารถใช้ในการจัดการโครงสร้างพื้นฐานหรือเป็นส่วนหนึ่งของไปป์ไลน์การทดสอบ CI/CD ของทีมโปรโตคอล เรามีความสัมพันธ์กับทีม Polkadot/Substrate ชั้นนำ ซึ่งมีความเชี่ยวชาญในการโฮสต์โครงสร้างพื้นฐานที่มีการจัดการสำหรับเครือข่าย Substrate/Polkadot และความสามารถในการส่งมอบโปรเจ็คโครงสร้างพื้นฐานที่ซับซ้อนและโฮสต์เพื่อการใช้งานจริง We have a suite of symbiotic services including our API shared node service, and dedicated nodes that can be used in infrastructure management or as part of a protocol team’s CI/CD testing pipeline. We have relationships with the top Polkadot/Substrate teams, expertise in managed infrastructure hosting for the Substrate/Polkadot network, and the ability to deliver complex infrastructure projects and host them for production use.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

ผู้ประกอบการ นักลงทุน ที่มีประสบการณ์ด้านไอทีมากกว่า 20 ปี เชี่ยวชาญด้านการออกแบบโครงสร้างพื้นฐานและบริการคลาวด์

**Ian He —** หัวหน้า Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

สถาปนิกบล็อกเชน, ผู้สนับสนุน polkadot-js ซึ่งเป็นผู้ที่เริ่มใช้เทคโนโลยี Substrate ก่อนใคร และได้รับรางวัลที่สองใน Polkadot hackathon ครั้งที่หนึ่ง

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

โครงสร้างพื้นฐาน & Application Architect, วิศวกรซอฟต์แวร์ที่ได้รับรางวัล

**James Bayly** — หัวหน้าฝ่ายพัฒนาธุรกิจ ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

เริ่มต้นใช้งานที่ [ SubQuery repository บน Github](https://github.com/OnFinality-io/subql)

อ่าน [เอกสาร SubQuery](https://doc.subquery.network/) ของเรา

[เยี่ยมชมเว็บไซต์ใหม่ของเรา](https://subquery.network/)

ติดตามเราได้ที่:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)