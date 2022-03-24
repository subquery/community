# SubQuery ร่วมมือกับ Darwinia Network สร้าง SubQuery CLI Tool

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

ในวันนี้ เราต้องการที่จะประกาศความร่วมมือกันระหว่าง Darwinia Network และ SubQuery Network โดย Darwinai เพิ่งจะชนะการประมูล parachain slot ของ Kusama มาได้ไม่นาน และกำลังเตรียมการที่จะรักษา Polkadot slot ของพวกเขา อ้างอิงตามโรดแมพของ Darwinia ที่ต้องการจะสร้าง cross chain bridge hub สำหรับ Polkadot โดยที่ Darwinia ได้ร่วมมือกับ SubQuery ในการสร้างแอพพลิเคชั่นจำนวนมาก เพื่อที่จะมอบประสบการณ์ที่ดีที่สุดให้ผู้ใช้งาน cross chain interactions

ซึ่งการเป็นพันธมิตรของเราไม่ใช่เพียงแค่การนำ SubQuery ไปขับเคลื่อนแอพพลิเคชั่นในระบบนิเวศของ Darwinia เท่านั้นแต่ Darwinia ยังได้ร่วมทำงานอย่างใกล้ชิดกับทีม SubQuery เพื่อที่จะ [สร้าง CLI tool](https://github.com/fewensa/subquery-cli) สำหรับบริการการจัดการของ SubQuery ([https://project.subquery.network](https://project.subquery.network)). โดยคุณสามารถที่จะใช้ [CLI tool](https://github.com/fewensa/subquery-cli) ในการสร้าง SubQuery project รวมทั้งมีการอัพเดตเวอร์ชั่นใหม่โดยอัตโนมัติ ทั้งใน staging หรือ production slot นอกจากนี้คุณยังสามารถดึงข้อมูลรวมถึงสถานะการซิงค์โดยละเอียดและบันทึกจากโปรเจคที่ทำงานอยู่ซึ่งจะไม่เสียค่าใช้จ่ายในการใช้งานโปรเจค SubQuery Darwinia ได้ทำให้สิ่งนี้ดียิ่งขึ้นและยังสร้างตัวอย่างของ [GitHub Action workflow](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) ที่ใช้ CLI ในการอัพเดตข้อมูลขึ้นไปยัง main branch ของ [ที่เก็บข้อมูล](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) ของพวกเขา ระบบอัตโนมัติอันใหม่นี้เป็นตัวอย่างที่ยอดเยี่ยมที่บ่งบอกความสัมพันธ์ที่ใกล้ชิดระหว่าง Darwinia กับ SubQuery และ CLI นี้พร้อมที่จะนำไปใช้งานในหลายๆโปรเจคภายในระบบนิเวศระดับใหญ่ของ SubQuery’s
> เครื่องมือ SubQuery CLI ที่เราสร้างขึ้นมานั้นช่วยทำให้ขั้นตอนการพัฒนาเป็นเรื่องง่าย โดยในตอนนี้เราสามารถจัดการการเผยแพร่ในแต่ละ branche ได้ทั้งหมดและรู้สึกมั่นในว่าการเปลี่ยนแปลงของเราจะถูกปรับใช้ให้เข้ากับระบบบริการโฮสต์ของ SubQuery แบบอัตโนมัติ เราภาคภูมิใจในระบบอัตโนมัติของเราในการตรวจสอบว่าไฟล์ schema.graphql ว่ามีการเปลี่ยนแปลงหรือไม่ และถ้ามีการเปลี่ยนแปลง เราจะปรับเปลี่ยนให้เกิดฐานข้อมูลใหม่ทั้งหมด — Yalin, หนึ่งในทีมนักพัฒนาหลัก — Darwinia Network


ดูเนื้อหาเพิ่มเติม [CLI ใหม่ที่นี่](https://github.com/fewensa/subquery-cli) และดู [ตัวอย่างเพิ่มเติมได้ทีนี่](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)

แอปพลิเคชั่นแรกจากหลากหลายแอปพลิเคชั่นในระบบนิเวศที่กำลังเติบโตของ Darwinia คือ แอปพลิเคชั่นที่ชื่อว่า [Wormhole](https://wormhole.darwinia.network/) Wormhole คือแอปพลิเคชั่นที่ทำให้การโอนย้ายทรัพย์สินระหว่างเครือข่ายเป็นเรื่องง่ายที่ และเป็นส่วนสำคัญของแผนการสร้างระบบ cross chain ของ Darwinia โดยในปัจจุบันระบบการเชื่อมต่อระหว่าง Darwinia และ Ethereum กำลังอยู่ในขั้นตอนการดำเนินงาน [SubQuery จะถูกใช้สำหรับการแสดงประวัติการโอนต่างๆและเหตุการณ์ในอดีต](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) ที่เกิดขึ้นกับ address ของ Darwinia, Crab หรือ Pangolin ซึ่งเกี่ยวข้องกับ wormhole (เช่น การส่งสินทรัพย์มาจากเครือข่ายอื่น)

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

ทีมงานของ Darwinia กำลังอยู่ในขั้นตอนการสร้าง [Smart App ใหม่ที่จะเป็นศูนย์กลาง](https://apps.darwinia.network/) เพื่อจัดการการโต้ตอบใน Darwinia network ทั้งหมด รวมถึงการกำกับดูแล การ staking การสำรวจ chain และอื่นๆ ซึ่งแอปพลิเคชั่นนี้ใช้ปริมาณที่มากมายของ [ข้อมูล SubQuery เพื่อแสดงข้อมูลย้อนหลังและการดำเนินการที่เกิดขึ้น](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). โดย SubQuery จะทำงานอย่างใกล้ชิดกับทีมงานของ Darwinia เพื่อก่อให้เกิดประสบการณ์ของผู้ใช้ที่รวดเร็วและง่ายขึ้นภายในระบบนิเวศของ Polkadot ทั้งหมด
> "เราตื่นเต้นที่จะได้ใช้ SubQuery เพื่อแทนที่ระบบหลังบ้านที่มีอยู่ของเราสำหรับ Wormhole ในระยะยาวกับ SubQuery Network สิ่งนี้จะทำให้บริการของเรามีการกระจายศูนย์และเป็น open source ทั้งหมด - ซึ่งนั่นเป็นสิ่งที่เราภูมิใจเป็นอย่างมาก" — Yalin, หนึ่งในทีมพัฒนาหลัก — Darwinia Network


นอกจากนี้ Darwinia ยังใช้ SubQuery เพื่อที่จะ [จัดการข้อมูลเบื่องหลัง](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) ให้แก่ [เว็บไซต์เสนอการกู้ยืมภายใน Parachain](https://darwinia.network/plo_contribute) ของพวกเขา แม้ว่า Crab จะชนะในการประมูล slot บน Kusama เป็นที่เรียบร้อยแล้ว แต่นั่นก็ยังไม่สายเกินไปที่จะสนับสนุนแคมเปญของ Darwinia เพื่อ slot บน Polkadot พวกเขายังใช้ประโยชน์จาก SubQuery เพื่อจัดเรียงและระบุ [Merkle จำนวนมหาศาล](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) สำหรับบล็อกทั้งหมดที่สร้างขึ้นภายในเครือข่าย

Darwinia Network ใช้ [โปรเจค SubQuery](https://project.subquery.network/) เพื่อจัดการและทำการอัพเดตโปรเจคของพวกเขาตามที่ต้องการ การบริการด้านการจัดเรียง ระบุ และสืบค้นที่เรามีให้นั้นได้รับการจัดการโดย SubQuery และให้บริการแก่คอมมูนิตี้ของ Polkadot ฟรีใน [SubQuery’s Explorer](https://explorer.subquery.network/)

## เกี่ยวกับ Darwinia Network

Darwinia Network คือระบบเชื่อมต่อเครือข่ายประเภท cross-chain แบบกระจายศูนย์บน Substrate ซึ่งเป็น "สะพาน Golden Gate" แห่งระบบนิเวศประเภท cross-chain โดยสิ่งนี้จะให้บริการวิธีการการเชื่อมต่อเครือข่ายแบบทั่วไปที่ปลอดภัยที่สุด โดยเชื่อมต่อ Polkadot, Ethereum, BSC และ chain อื่นๆที่แตกต่างกันออกไปโดยใช้ cross-chain โอนสินทรัพย์และการควบคุม chain ระยะไกลแบบทั่วไป นอกจากนี้ การใช้ประโยชน์หลักจากพื้นที่นี้ยังประกอบด้วย Defi, ตลาดการซื้อขาย NFT แบบ cross-chain, เกม

[เว็บไซต์](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## เกี่ยวกับ SubQuery Network

[SubQuery](https://subquery.network/) คือการรวมข้อมูลแบบกระจายอำนาจ การจัดเรียง ระบุ & และสืบค้น ระหว่างบล็อคเชน Layer-1 และแอปฟลิเคชั่นแบบกระจายศูนย์ (DApps) ปัจจุบัน SubQuery มุ่งเน้นไปที่โปรเจค Polkadot และ Substrate ซึ่งการให้บริการ data นี้ช่วยให้นักพัฒนาสามารถมุ่งเน้นไปในการใช้งานหลักและ front

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
