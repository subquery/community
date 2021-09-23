# บทสรุปของเดือนมิถุนายน 2021

## งานค่อนข้างชุก 🔥

ในการอัปเดตรายเดือนนี้:

-   ปล่อย ไวท์เปเปอร์ 🎊
-   ขยายขนาดทีม 👩💻
-   การเตรียมสำหรับการพัฒนา 📥
-   บริการ SubQuery Dictionary 📖
-   การปรับปรุงการเข้าถึงของเราในประเทศจีน 🇨🇳

เครือข่าย SubQuery เป็นความพยายามของเราในการก้าวไปสู่เครือข่ายแบบกระจายอำนาจรและระบบโทเค็นที่ดี เพื่อให้แน่ใจว่าไม่มีจุดบกพร่องซักจุดสำหรับ SubQuery และเพื่อส่งเสริมให้ผู้เข้าร่วมในกระบวนการให้ได้มากที่สุด

[เมื่อเดือนที่แล้ว เราได้เผยแพร่เอกสารทางเทคนิคของเราต่อสาธารณะเพื่อให้โลกได้อ่าน](https://static.subquery.network/whitepaper.pdf) คุณยังสามารถอ่าน/ดู [คำอธิบายสั้นๆ ได้ที่นี่](https://subquery.medium.com/the-subquery-network-a-summary-46cde0acb010)

We have ambitious goals at SubQuery to be the fastest and accessible data service provider on Substrate. เรามีเป้าหมายที่ทะเยอทะยานที่ SubQuery เพื่อเป็นผู้ให้บริการข้อมูลที่รวดเร็วและเข้าถึงได้บน Substrate เราได้เขียนเอกสารไวท์เปเปอร์นี้เพื่อเน้นถึง[ข้อได้เปรียบในการแข่งขัน](https://subquery.medium.com/subquery-network-our-goals-and-competitive-advantages-a6efdd544be4)และตอนนี้เรามุ่งเน้นที่การดำเนินการตามวิสัยทัศน์นี้ เครือข่าย SubQuery ครอบคลุมสองคีย์หลักๆ คือ ความยืดหยุ่นและความเรียบง่าย The SubQuery Network revolves around two key aspects, flexibility and simplicity.

Ambitious goals require a first class team, and we’ve been steadily adding new members to the team over June. เป้าหมายที่ทะเยอทะยานต้องการทีมระดับเฟิร์สคลาส และเราได้เพิ่มสมาชิกใหม่เข้ามาในทีมอย่างต่อเนื่องตลอดเดือนมิถุนายน ซึ่งรวมถึง; นักศึกษาฝึกงานด้านการพัฒนาใหม่, นักออกแบบ UX, นักเขียนเอกสารการพัฒนา และเจ้าหน้าที่พัฒนาธุรกิจในจีน

We’re still looking for more, especially in the following areas. เรายังคงมองหาข้อมูลเพิ่มเติม โดยเฉพาะอย่างยิ่งในด้านต่อไปนี้ โปรดแจ้งให้เราทราบหากคุณมีใครบางคนอยู่ในใจ:

-   [หัวหน้าฝ่ายการตลาด](https://angel.co/company/subquery/jobs/1494376-head-of-marketing) หรือการพัฒนาธุรกิจในสหรัฐอเมริกา/สหภาพยุโรป (นี่เป็นโอกาสที่หายากที่ไม่ควรพลาด)
-   [วิศวกร SRE](https://angel.co/company/subquery/jobs/1497942-site-reliability-engineer)
-   นักพัฒนา [Rust](https://angel.co/company/subquery/jobs/1494414-rust-developer) และ [Solidity](https://angel.co/company/subquery/jobs/1494435-solidity-developer)

It’s our belief that developers in our industry should focus on building the future, not running infrastructure — our SubQuery hosted service is the manifestation of that. เป็นความเชื่อของเราที่นักพัฒนาในอุตสาหกรรมของเราควรมุ่งเน้นไปที่การสร้างอนาคต ไม่ใช่โครงสร้างพื้นฐานที่ใช้งาน - บริการโฮสต์ SubQuery ของเราเป็นสิ่งที่แสดงให้เห็น [ในเดือนมิถุนายน เราได้เปิดตัวสล็อตการ deploy](https://subquery.medium.com/deployment-slots-are-here-subquery-projects-4fe2629f8858) ซึ่งเป็นคุณลักษณะใหม่ทั้งหมดที่ปรับปรุงประสบการณ์ของนักพัฒนาซอฟต์แวร์ในบริการโฮสต์ของ SubQuery

สล็อตการ deploy เป็นคุณลักษณะใหม่ที่ทำให้นักพัฒนาสามารถอัปเดตโปรเจ็กต์ จัดทำดัชนีข้อมูลใหม่ และอัปเกรดโปรเจ็กต์ SubQuery ที่ใช้งานจริงที่โฮสต์โดยไม่มีการหยุดทำงาน เรายังคงทำให้บริการที่มีการจัดการแบบฟรีๆของเราเป็นตัวเลือกเริ่มต้นสำหรับตำแหน่งที่ลูกค้าของเราเลือกใช้โครงสร้างพื้นฐานของตน We continue to make our free managed service the default choice for where our customers choose to run their infrastructure.

คำขอทั่วไปที่เราเผชิญจากลูกค้าคือวิธีปรับปรุงความเร็วการจัดทำดัชนีของโครงการ SubQuery การทำดัชนีข้อมูลประวัติบนเครือข่ายขนาดใหญ่เท่า Polkadot อาจใช้เวลาหลายชั่วโมงหรือไม่ก็เป็นวัน ซึ่งทำให้การทดสอบทำได้ยาก Indexing historical data on a chain as large as Polkadot can take hours if not days, making testing difficult.

SubQuery projects now have the option to skip all this using our new feature — [the SubQuery Dictionary](https://subquery.medium.com/subquerys-just-got-a-lot-faster-with-the-dictionary-8a7a1447574). โปรเจ็กต์ SubQuery มีออฟชั่นให้ข้ามทั้งหมดนีโดยการใช้ฟีเจอร์ใหม่ — [SubQuery Dictionary](https://subquery.medium.com/subquerys-just-got-a-lot-faster-with-the-dictionary-8a7a1447574) โดยพื้นฐานแล้วเราจัดทำดัชนีตำแหน่งของเหตุการณ์ทั้งหมดภายในเชนไว้ล่วงหน้า และด้วยเหตุนี้ เราจึงเห็นความเร็วในการจัดทำดัชนีที่เร็วขึ้นถึง 10 เท่า SubQuery จึงเร็วกว่าที่เคย

China is a key part of our strategic expansion plans. ประเทศจีนเป็นส่วนสำคัญของแผนการขยายเชิงกลยุทธ์ของเรา ในเดือนมิถุนายน Siqi เข้าร่วมกับเราและจะเป็นผู้นำการพัฒนาธุรกิจของเราในภูมิภาคนี้ เธอประสบความสำเร็จในการติดต่อกับลูกค้าและพันธมิตรที่มีอยู่มากมายของเราที่นั่น She’s certainly hit the ground running, connecting with many of our existing customers and partners there.

Siqi อยู่[ขึ้นเวทีที่งาน Polka Ecology National Tour ที่ประสบความสำเร็จอย่างสูงที่สถานีเหอเฟย](https://twitter.com/SubQueryNetwork/status/1409696588465721348) ทำให้เกิดการติดต่อกับฝ่ายโครงการอื่นๆ ที่เข้าร่วมการประชุมด้วย เธอจะเข้าร่วมงานต่างๆ มากมายในอนาคต ดังนั้นคอยจับตาดูเธอและกล่าวทักทาย! She’ll be at many events going forward, so keep an eye out for her and say hi!

เข้าสู่เดือนหน้า เรามุ่งหวังที่จะเติบโตอย่างรวดเร็วต่อไป และกำลังทำงานในโครงการที่น่าตื่นเต้นมากมาย ติดต่อผ่านโซเชียลมีเดียของเราเพื่อรับรู้ว่าเกิดอะไรขึ้นก่อนใคร! Stay in touch through our social media to be the first to know what is happening!

James, Sam และทีม SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Medium](https://subquery.medium.com/)