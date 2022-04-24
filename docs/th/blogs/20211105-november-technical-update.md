# อัพเดทระบบเทคนิคประจำเดือนพฤษจิกายนของ Subquery: การอัพเดท EVM และ Manifests

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**อ่านเพิ่มเติมเกี่ยวกับระบบทางเทคนิคโดยละเอียดใน release ล่าสุดของ SubQuery**

## Support for External Chain Type Files in Project Manifest

วันนี้คือวันที่เราปล่อย [เวอร์ชั่น 0.2.0](https://doc.subquery.network/create/manifest/) ของรูปแบบไฟล์ manifest ของโปรเจค (`project.yaml`) โดนในเวอร์ชั่นนี้จะปรับปรุงหลายสิ่งที่ได้รับการร้องขอมาจากกลุ่มผู้ใช้งานและยังเป็นประโยชน์แก่เหล่าผู้พัฒนา

สิ่งที่สำคัญทีสุดคือ คุณสามารถอ้างอิงชนิดของในรูปแบบของการนิยาม type ในไฟล์ที่มีการกำหนด type ทั้งหมด โดยไฟล์นี้จะถูกรวมไว้เมื่อคุณได้ทำการ index บนที่คุณ substrate เลือก สิ่งนี้จะทำให้คุณสามารถเชื่อมต่อโปรเจค SubQuery ไปหาโปรเจคบน substrate ได้อย่างรวดเร็ว รวมทั้งบน Kusama parachain ระบบนี้จะเป็นมาตรฐานบนชนิดของที่จะประกาศ type เฉพาะ ที่จะถูกรองรับโดยโดยนี้ ในรูปแบบของ `.json` หรือ `.yaml`

ด้วยวิธีนี้ คุณจะไม่ต้องทำการคัดลองและจัดการชนิดของด้วยการประกาศชนิดของในไฟล์ manifest และยังทำให้คุณสามารถ clone [ไฟล์ของ type บน ที่สร้างไว้ใน repositories ดังเช่น PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec)

[คณสามารถอ่านเกี่ยวกับไฟล์ manifest แบบใหม่ได้ รวมทั้งวิธีที่คุณสามารถโยกย้ายโปรเจคของคุณไปเป็นเวอร์ชั่นใหม่ ในเอกสารที่เราได้อัพเดทแล้ว](https://doc.subquery.network/create/manifest/)

## Moonbeam EVM Support

Last week we were pleased to [announce that we were working with Moonbeam to bring complete EVM and Substrate indexing support to Moonriver](../customer_announcements/20211028-moonbeam-evm.md).

วันนี้เราจะมาตามเรื่องของประกาศดังกล่าวพร้อมกับทรัพยากรผู้พัฒนาที่คุณต้องใช้เพื่อที่จะเริ่มต้น

ขณะนี้ ไม่มีเครื่องมีเปิด (open-source) ที่จะช่วยให้นักพัฒนาสามารถรวมรวมและดึงข้อมูลจากทั้ง Ethereum และ Polkadot/Kusama ได้อย่างยืดหยุ่น ด้วยข้อจำกัดนี้จะสามารถทำให้ dApps ภายใน Moonriver จะถูกรวมอยู่ภายในระดับของ smart contract และจะจำกัดศักยภาพของพวกเขาต่อผู้ใช้งานบนทั้งสอง การร่วมงานกับ Moonbeam จะทำให้ระบบการทำ index ข้อมูลทั้งหมดบนของ Moonriver นั้นสมบูรณ์ และยังเป็นประโยชน์กับการเติบโตของแอพลิเคชั่นต่างๆบล Moonriver

**Subquery จะเป็นผู้ร่วมบนเวิร์คช็อป Moonbuilders ครั้งถัดไปในวันที่ 1 ธันวาคม** [**สามารถสมัครได้ที่นี่**](https://www.crowdcast.io/e/moonbuilders-ws/10)

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/substrate-evm/) The process to index Moonbeam data is only two steps:

### Step 1: Add the Moonbeam Custom Data Source

เราได้สร้างกระบวนการจัดการข้อมูลโดยเฉพาะเพื่อที่จะให้ใช้งานกับ [Frontier](https://github.com/paritytech/frontier) ที่ถูกสร้างด้วย Moonbeam สิ่งนี้จะอนุญาตให้อ้างอิงถึงทรัพยากร ABI เฉพาะที่ใช้โดยตัวจัดการเพื่อที่จะส่งต่อ arguments และ smart contract address ที่มามาจาก event หรือถูกเรียกใช้ [You can read more here](https://doc.subquery.network/create/substrate-evm/#data-source-spec).

SubQuery ได้แนะนำตัวคัดกรอง (filters) ที่ซับซ้อนขึ้นกว่า indexers อื่นๆ ทำให้การกรองธุรกรรมที่ไม่ใช่ผ่าน contract ธุรกรรมจากผู้ส่ง contracts และ log arguments ที่ถูก index แล้ว สิ่งนี้จะทำให้เหล่าผู้พัฒนาสร้างโปรเจคที่หลากหลายที่ส่งต่อให้กับชุดข้อมูลเฉพาะที่ต้องการ

### Step 2: Index Moonbeam Data

เปรียบเสมือนกับโปรเจค SubQuery ทั่วไป คุณสามารถใช้ฟังก์ชั่น mapping เพื่อจะแปลงข้อมูลนอกเชน (off chain data) ไปเป็น GraphQL ตามที่คุณนิยามไว้ โดยข้อแตกต่างคือ แทนที่จะเป็น `SubstrateEvent` หรือ `SubstrateExtrinsic` แล้ว ฟังก์ชั่น mapping ของคุณจะได้รับ `MoonbeamCall` หรือ `MoonbeamEvent` โดยอิงจาก [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) หรือ ชนิดของ [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) [You can read more about these here](https://doc.subquery.network/create/substrate-evm/#frontierevmcall).

[อ่านเอกสารฉบับเต็มเกี่ยวกับขั้นตอนได้ที่นี่](https://doc.subquery.network/create/substrate-evm/#frontierevmcall)

### Example Project

จะมีตัวอย่างโครงการแบบสมบูรณ์ที่ index eth `transfer` events และ `approve` การเรียกใช้ smart contract โค้ดสำหรับตัวอย่างโครงงานนี้จะอยู่ที่ [Github](https://github.com/subquery/tutorials-moonriver-evm-starter) หรือสามารถเข้าถึงได้ผ่าน [โครงงาน SubQuery บน SubQuery Explorer ที่นี่](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project)

การเปลี่ยนแปลงครั้งใหญ่เกิดขึ้นในไฟล์ Manifest (`project.yaml`) You can see below that we have [extended call filters](https://doc.subquery.network/create/substrate-evm/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/substrate-evm/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). จะสังเกตุได้ว่า SubQuery ได้ใช้ตัวกรองที่ซับซ้อนกว่า indexer อื่นๆสำหรับ Moonbeam EVM และการพัฒนาครั้งนี้จะส่งผลดีเป็นอย่างมากแก่นักพัฒนา

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

หากคุณนั้นคุ้นชินกับการสร้างโปรเจค Subquery ผ่านระบบ Substrate based แล้ว คุณจะสังเกตความคล้างคลึงของฟังก์ชั่น mapping สำหรับการรองรับ Moonriver แบบใหม่ ในแต่ละฟังก์ชั่น mapping จะรับค่า `MoonBaemCall` หรือ `MoonbeamEvent` และจัดการค่าเหล่านี้เหมือนกับโครงงานอ่านๆใน SubQuery

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/substrate-evm) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Clone โค้ดตัวอย่างจาก GibHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

จะสังเกตได้ว่า เมื่อสร้างโครงงาน Moonriver หรือ Moonbase Alpha ที่ index ทั้งข้อมูล Substrate และ EVM ในโปรเจคเดียวนั้นมีความเรียบง่ายและคล้ายคลึงกันอย่างมาก คุณสามารถใช้เครื่องมือขั้นสูงของ SubQuery เพื่อเพิ่มความเร็วในการพัฒนา dApp ของคุณและใช้ประโยชน์จากการมี index ที่ดีขึ้นจากข้อมูลของคุณเพื่อสร้าง dApps ที่ดีไปกว่าเดิม เราอดใจที่จะเห็นสิ่งที่คุณสร้างไม่ไหวเลยหล่ะ!

## About SubQuery

SubQuery คือ เลเยอร์ในการรวบรวมข้อมูลที่ทำงานระหว่างเลเยอร์ 1 ของ (เช่น Moonriver และ Polkadot) กับ DApps บริการนี้ปลดล็อกข้อมูลและแปลงเป็นสถานะที่สามารถสืบค้นได้ เพื่อให้สามารถใช้งานได้ในแอปพลิเคชันที่ใช้งานง่าย บริการนี้ช่วยให้นักพัฒนา DApp สามารถมุ่งเน้นไปที่กรณีการใช้งานหลักและ front-end โดยไม่ต้องเสียเวลาไปกับการสร้าง back-end สำหรับการประมวลผลข้อมูลเอง

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam เป็นแพลตฟอร์ม smart contract ที่เข้ากันได้กับ Ethereum บนเครือข่าย Polkadot ที่ทำให้ง่ายต่อการสร้างแอปพลิเคชันที่ทำงานร่วมกันได้โดยกำเนิด ความเข้ากันได้ของ Ethereum นี้ช่วยให้นักพัฒนาสามารถปรับใช้ Solidity smart contract ที่มีอยู่และส่วน front-end ของ DApp กับ Moonbeam โดยมีการเปลี่ยนแปลงเพียงเล็กน้อยเท่านั้น ในฐานะที่เป็น Parachain บนเครือข่าย Polkadot Moonbeam จะได้รับประโยชน์จากการรักษาความปลอดภัยร่วมกันของ Polkadot relay chain และการผสานรวมกับเครือข่ายอื่นๆ ที่เชื่อมต่อกับ Polkadot Moonbeam คาดว่าจะทำการเปิดตัว Mainnet ภายในไตรมาสที่ 4 ปี 2021 ซึ่งขณะนี้อยู่ในระหว่างการพัฒนาอย่างแข็งขันโดย PureStake เรียนรู้เพิ่มเติม: [https://moonbeam.network/](https://moonbeam.network/)
