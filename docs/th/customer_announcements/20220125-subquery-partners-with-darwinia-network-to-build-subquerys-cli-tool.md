# SubQuery ร่วมมือกับ Darwinia Network สร้าง SubQuery CLI Tool

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

ในวันนี้ เราต้องการที่จะประกาศความร่วมมือกันระหว่าง Darwinia Network และ SubQuery Network โดย Darwinai เพิ่งจะชนะการประมูล parachain slot ของ Kusama มาได้ไม่นาน และกำลังเตรียมการที่จะรักษา Polkadot slot ของพวกเขา อ้างอิงตามโรดแมพของ Darwinia ที่ต้องการจะสร้าง cross chain bridge hub สำหรับ Polkadot โดยที่ Darwinia ได้ร่วมมือกับ SubQuery ในการสร้างแอพพลิเคชั่นจำนวนมาก เพื่อที่จะมอบประสบการณ์ที่ดีที่สุดให้ผู้ใช้งาน cross chain interactions

ซึ่งการเป็นพันธมิตรของเราไม่ใช่เพียงแค่การนำ SubQuery ไปขับเคลื่อนแอพพลิเคชั่นในระบบนิเวศของ Darwinia เท่านั้นแต่ Darwinia ยังได้ร่วมทำงานอย่างใกล้ชิดกับทีม SubQuery เพื่อที่จะ [สร้าง CLI tool](https://github.com/fewensa/subquery-cli) สำหรับบริการการจัดการของ SubQuery ([https://project.subquery.network](https://project.subquery.network)). โดยคุณสามารถที่จะใช้ [CLI tool](https://github.com/fewensa/subquery-cli) ในการสร้าง SubQuery project รวมทั้งมีการอัพเดตเวอร์ชั่นใหม่โดยอัตโนมัติ ทั้งใน staging หรือ production slot นอกจากนี้คุณยังสามารถดึงข้อมูลสถานะการซิงค์โดยละเอียด และ logs จากโปรเจ็คที่ทำงานอยู่ โดยไม่มีค่าใช้จ่ายใน SubQuery project Darwinia ได้ผลักดันให้สิ่งนี้ดียิ่งขึ้นไปอีก และยังยกตัวอย่าง [GitHub Action workflow](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) ที่ใช้เครื่องมือ CLI ในการอัพเดตข้อมูลขึ้นไปยัง main branch ของ [ที่เก็บข้อมูล](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) ของพวกเขา โดยระบบอัตโนมัติอันใหม่นี้เป็นตัวอย่างดีเยี่ยม ในการแสดงให้เห็นถึงความสัมพันธ์อันใกล้ชิดระหว่าง Darwinia กับ SubQuery โดยเครื่องมือ CLI นี้ก็ได้ถูกนำไปใช้งานในหลายๆโปรเจ็คภายใต้ระบบนิเวศของ SubQuery แล้ว
> เครื่องมือ SubQuery CLI ที่เราสร้างขึ้นมานั้นช่วยทำให้ขั้นตอนการพัฒนาเป็นเรื่องง่าย โดยในตอนนี้เราสามารถจัดการการเผยแพร่ในแต่ละ branche ได้ทั้งหมดและรู้สึกมั่นในว่าการเปลี่ยนแปลงของเราจะถูกปรับใช้ให้เข้ากับระบบบริการโฮสต์ของ SubQuery แบบอัตโนมัติ เราภาคภูมิใจในระบบอัตโนมัติของเราในการตรวจสอบว่าไฟล์ schema.graphql ว่ามีการเปลี่ยนแปลงหรือไม่ และถ้ามีการเปลี่ยนแปลง เราจะปรับเปลี่ยนให้เกิดฐานข้อมูลใหม่ทั้งหมด" — Yalin, หนึ่งในทีมนักพัฒนาหลัก — Darwinia Network


ดูเนื้อหาเพิ่มเติม [เครื่องมือ CLI ใหม่ที่นี่](https://github.com/fewensa/subquery-cli) และดู [ตัวอย่างเพิ่มเติมได้ทีนี่](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)

หนึ่งในแอพพลิเคชั่นแรกที่มีการเติบโตในระบบนิเวศของ Darwinia ได้แก่แอปพลิเคชั่นที่ชื่อว่า [Wormhole](https://wormhole.darwinia.network/) โดย Wormhole คือแอพพลิเคชั่นที่ช่วยให้การโอนย้ายทรัพย์สินระหว่างเครือข่ายเป็นเรื่องง่าย และเป็นกุญแจสำคัญในการสร้างระบบ cross chain ของ Darwinia โดยในปัจจุบันระบบการเชื่อมต่อระหว่าง Darwinia และ Ethereum กำลังอยู่ในขั้นตอนการดำเนินงาน [SubQuery จะถูกใช้สำหรับการแสดงประวัติการโอนต่างๆและเหตุการณ์ในอดีต](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) ที่เกิดขึ้นกับ address ของ Darwinia, Crab หรือ Pangolin ซึ่งเกี่ยวข้องกับ wormhole (เช่น การส่งสินทรัพย์มาจากเครือข่ายอื่น)

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

ทีมงานของ Darwinia กำลังอยู่ในขั้นตอนการสร้าง [Smart App ใหม่ที่จะเป็นศูนย์กลาง](https://apps.darwinia.network/) เพื่อจัดการการ Darwinia network ทั้งหมด รวมถึงการกำกับดูแล การ staking การสำรวจ chain และอื่นๆ ซึ่งแอพพลิเคชั่นนี้ใช้[ข้อมูลจาก SubQuery จำนวนมากเพื่อแสดงข้อมูลย้อนหลัง](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab) โดย SubQuery จะทำงานอย่างใกล้ชิดกับทีมงานของ Darwinia เพื่อสร้างประสบการณ์ของผู้ใช้ที่ง่ายและรวดเร็วภายในระบบนิเวศของ Polkadot ทั้งหมด
> "เราตื่นเต้นที่จะได้ใช้ SubQuery แทนที่ระบบหลังบ้านที่มีอยู่เดิมของ Wormhole โดยในระยะยาวการร่วมมือกับ SubQuery Network จะทำให้บริการของเรามีการกระจายศูนย์และเป็น open source ทั้งหมด - ซึ่งนั่นเป็นสิ่งที่เราภูมิใจเป็นอย่างมาก" — Yalin, หนึ่งในทีมพัฒนาหลัก — Darwinia Network


นอกจากนี้ Darwinia ยังใช้ SubQuery ในการ[จัดการข้อมูลเบื้องหลัง](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot)ให้กับ [เว็บไซต์ Parachain Loan Offering](https://darwinia.network/plo_contribute) ของพวกเขา แม้ว่า Crab จะชนะในการประมูล slot บน Kusama เป็นที่เรียบร้อยแล้ว แต่นั่นก็ยังไม่สายเกินไปที่จะสนับสนุนแคมเปญของ Darwinia เพื่อ slot บน Polkadot พวกเขายังได้ประโยชน์จาก SubQuery ในการทำ index [Merkle Mountain ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) สำหรับบล็อกทั้งหมดที่สร้างขึ้นภายในเครือข่าย

Darwinia Network ใช้ [โปรเจค SubQuery](https://project.subquery.network/) เพื่อจัดการและทำการอัพเดตโปรเจคของพวกเขาตามที่ต้องการ การบริการด้านการจัดเรียง ระบุ และสืบค้นที่เรามีให้นั้นได้รับการจัดการโดย SubQuery และให้บริการแก่คอมมูนิตี้ของ Polkadot ฟรีใน [SubQuery’s Explorer](https://explorer.subquery.network/)

## เกี่ยวกับ Darwinia Network

Darwinia Network คือระบบเชื่อมต่อเครือข่ายประเภท cross-chain แบบกระจายศูนย์บน Substrate ซึ่งเป็น "สะพาน Golden Gate" ของระบบนิเวศ cross-chain โดยจะให้บริการการเชื่อมต่อเครืออย่างปลอดภัยที่สุด โดยเชื่อมต่อ Polkadot, Ethereum, BSC และเชนอื่นๆที่แตกต่างกันออกไปโดยใช้ cross-chain โอนสินทรัพย์และการควบคุม chain ระยะไกล นอกจากนี้ การใช้ประโยชน์หลักจากพื้นที่นี้ยังประกอบด้วย Defi, ตลาดการซื้อขาย NFT แบบ cross-chain, เกม เป็นต้น

[เว็บไซต์](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## เกี่ยวกับ SubQuery Network

[SubQuery](https://subquery.network/) คือการรวมข้อมูลแบบกระจายอำนาจ การจัดเรียง ระบุ & และสืบค้น ระหว่างบล็อคเชน Layer-1 และแอพพลิเคชั่นแบบกระจายศูนย์ (DApps) ปัจจุบัน SubQuery มุ่งเน้นไปที่โปรเจค Polkadot และ Substrate ซึ่งการให้บริการ data นี้ช่วยให้นักพัฒนาสามารถมุ่งเน้นไปในการใช้งานหลักและ front

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
