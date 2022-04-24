# บทสรุปของเดือนมิถุนายน 2021

## งานค่อนข้างชุก 🔥

ในการอัปเดตรายเดือนนี้:

- ปล่อย ไวท์เปเปอร์ 🎊
- ขยายขนาดทีม 👩💻
- การเตรียมสำหรับการพัฒนา 📥
- บริการ SubQuery Dictionary 📖
- การปรับปรุงการเข้าถึงของเราในประเทศจีน 🇨🇳

เครือข่าย SubQuery เป็นความพยายามของเราในการก้าวไปสู่เครือข่ายแบบกระจายอำนาจรและระบบโทเค็นที่ดี เพื่อให้แน่ใจว่าไม่มีจุดบกพร่องซักจุดสำหรับ SubQuery และเพื่อส่งเสริมให้ผู้เข้าร่วมในกระบวนการให้ได้มากที่สุด

[Last month, we publicly released our whitepaper for the world to read.](https://static.subquery.network/whitepaper.pdf) You can also read/watch a [short explanation here](../blogs/20210616-SubQuery-Network-In-Summary.md).

เรามีเป้าหมายที่ทะเยอทะยานที่ SubQuery เพื่อเป็นผู้ให้บริการข้อมูลที่รวดเร็วและเข้าถึงได้บน Substrate We’ve written this whitepaper to highlight our [competitive advantages](../blogs/20210616-SubQuery-Network-Our-Goals-and-Competitive-Advantages.md) and our focus now is on executing this vision. เครือข่าย SubQuery ครอบคลุมสองคีย์หลักๆ คือ ความยืดหยุ่นและความเรียบง่าย

เป้าหมายที่ทะเยอทะยานต้องการทีมระดับเฟิร์สคลาส และเราได้เพิ่มสมาชิกใหม่เข้ามาในทีมอย่างต่อเนื่องตลอดเดือนมิถุนายน ซึ่งรวมถึง; นักศึกษาฝึกงานด้านการพัฒนาใหม่, นักออกแบบ UX, นักเขียนเอกสารการพัฒนา และเจ้าหน้าที่พัฒนาธุรกิจในจีน

เรายังคงมองหาข้อมูลเพิ่มเติม โดยเฉพาะอย่างยิ่งในด้านต่อไปนี้ โปรดแจ้งให้เราทราบหากคุณมีใครบางคนอยู่ในใจ:

- [หัวหน้าฝ่ายการตลาด](https://angel.co/company/subquery/jobs/1494376-head-of-marketing) หรือการพัฒนาธุรกิจในสหรัฐอเมริกา/สหภาพยุโรป (นี่เป็นโอกาสที่หายากที่ไม่ควรพลาด)
- [วิศวกร SRE](https://angel.co/company/subquery/jobs/1497942-site-reliability-engineer)
- นักพัฒนา [Rust](https://angel.co/company/subquery/jobs/1494414-rust-developer) และ [Solidity](https://angel.co/company/subquery/jobs/1494435-solidity-developer)

เป็นความเชื่อของเราที่นักพัฒนาในอุตสาหกรรมของเราควรมุ่งเน้นไปที่การสร้างอนาคต ไม่ใช่โครงสร้างพื้นฐานที่ใช้งาน - บริการโฮสต์ SubQuery ของเราเป็นสิ่งที่แสดงให้เห็น [In June we released deployment slots](../blogs/20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md), a whole new feature that improves the developer experience in SubQuery’s hosted service.

สล็อตการ deploy เป็นคุณลักษณะใหม่ที่ทำให้นักพัฒนาสามารถอัปเดตโปรเจ็กต์ จัดทำดัชนีข้อมูลใหม่ และอัปเกรดโปรเจ็กต์ SubQuery ที่ใช้งานจริงที่โฮสต์โดยไม่มีการหยุดทำงาน เรายังคงทำให้บริการที่มีการจัดการแบบฟรีๆของเราเป็นตัวเลือกเริ่มต้นสำหรับตำแหน่งที่ลูกค้าของเราเลือกใช้โครงสร้างพื้นฐานของตน

คำขอทั่วไปที่เราเผชิญจากลูกค้าคือวิธีปรับปรุงความเร็วการจัดทำดัชนีของโครงการ SubQuery การทำดัชนีข้อมูลประวัติบนเครือข่ายขนาดใหญ่เท่า Polkadot อาจใช้เวลาหลายชั่วโมงหรือไม่ก็เป็นวัน ซึ่งทำให้การทดสอบทำได้ยาก

SubQuery projects now have the option to skip all this using our new feature — [the SubQuery Dictionary](../blogs/20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md). โดยพื้นฐานแล้วเราจัดทำดัชนีตำแหน่งของเหตุการณ์ทั้งหมดภายในเชนไว้ล่วงหน้า และด้วยเหตุนี้ เราจึงเห็นความเร็วในการจัดทำดัชนีที่เร็วขึ้นถึง 10 เท่า SubQuery จึงเร็วกว่าที่เคย

ประเทศจีนเป็นส่วนสำคัญของแผนการขยายเชิงกลยุทธ์ของเรา ในเดือนมิถุนายน Siqi เข้าร่วมกับเราและจะเป็นผู้นำการพัฒนาธุรกิจของเราในภูมิภาคนี้ เธอประสบความสำเร็จในการติดต่อกับลูกค้าและพันธมิตรที่มีอยู่มากมายของเราที่นั่น

Siqi อยู่[ขึ้นเวทีที่งาน Polka Ecology National Tour ที่ประสบความสำเร็จอย่างสูงที่สถานีเหอเฟย](https://twitter.com/SubQueryNetwork/status/1409696588465721348) ทำให้เกิดการติดต่อกับฝ่ายโครงการอื่นๆ ที่เข้าร่วมการประชุมด้วย เธอจะเข้าร่วมงานต่างๆ มากมายในอนาคต ดังนั้นคอยจับตาดูเธอและกล่าวทักทาย!

เข้าสู่เดือนหน้า เรามุ่งหวังที่จะเติบโตอย่างรวดเร็วต่อไป และกำลังทำงานในโครงการที่น่าตื่นเต้นมากมาย ติดต่อผ่านโซเชียลมีเดียของเราเพื่อรับรู้ว่าเกิดอะไรขึ้นก่อนใคร!

James, Sam และทีม SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Medium](https://subquery.medium.com/)
