# Bifrost เลือก SubQuery ในการจัดหาข้อมูลให้กับ dApp ใหม่ๆ

![](https://miro.medium.com/max/1400/0*nqNosmn0y7FHOI42)

ไม่นานมานี้ Bifrost เปิดตัวเบต้าของ dApp ใหม่ ซึ่งเป็นอินเทอร์เฟซแบบโต้ตอบอย่างเป็นทางการสำหรับบริการ Bifrost ทั้งหมด ด้วย dApp นี้ ผู้ใช้สามารถ mint vTokens, สามารถ redeem, แลกเปลี่ยนอนุพันธ์เหล่านี้ และสามารถดูรายได้ของพวกเขาได้แบบเรียลไทม์ Dapp รุ่นเบต้านี้เป็นก้าวที่ยิ่งใหญ่ในการช่วยให้ผู้ใช้ลดต้นทุนการ stake ข้ามเครือข่ายโดยการรักษาสภาพคล่อง [คุณสามารถลองใช้ dApp ใหม่ของ Bifrost ได้ที่นี่](https://apps.bifrost.finance/)

> “ถ้าไม่มี SubQuery มันเป็นเรื่องยากที่จะจินตนาการว่าการรวบรวมข้อมูลด้วยตนเองจากเชนนั้นซับซ้อนขนาดไหน นักพัฒนา Bifrost อาจใช้เวลามากในการค้นหาข้อมูลธุรกรรมทั้งหมดในเชนเพื่อใช้สำหรับประวัติการทำธุรกรรม SubQuery ช่วยให้นักพัฒนาประหยัดค่าใช้จ่ายในการทำงานที่ซ้ำซากจำเจ Bifrost จะร่วมมือกับ SubQuery เป็นระยะเวลานานเพื่อเร่งความเร็วของการพัฒนาผลิตภัณฑ์” — Bifrost.Finance


![](https://miro.medium.com/max/1400/0*_JK-h0rjef6rk1ot)

โครงการ Bifrost SubQuery แบบใหม่ใน SubQuery Explorer

บริการ [SubQuery](https://subquery.network/) ช่วยให้ [Bifrost](https://bifrost.finance/) ขับเคลื่อนข้อมูลส่วนใหญ่ที่แสดงใน dApp ใหม่ ข้อมูลประวัติทั้งหมดเกี่ยวกับการโอน การทำเหรียญ และการแลกของรางวัล (เช่น ราคา วันที่ สกุลเงิน และกลุ่ม) จะถูกรวบรวมและสอบถามจากบริการสร้างดัชนีและแบบ query ขั้นสูงของ SubQuery ตัวอย่างเช่น SubQuery จะให้ Bifrost คำนวณราคา mint และ redeem แบบเรียลไทม์ สำหรับ vDot และ vEth เพื่อแสดงในแอปของพวกเขา และเพื่อรับข้อมูลจำนวน vTokens ทั้งหมดในกระเป๋าเงินนั้นๆ

![](https://miro.medium.com/max/1400/0*WIxvwcgPIHzCf0E3)

ตัวอย่างง่ายๆ ในการแสดงราคา mint แบบเรียลไทม์สำหรับ vDOT

Bifrost ใช้ [SubQuery Projects](https://project.subquery.network/) เพื่อจัดการโครงการของตนเองและทำการอัปเดตตามต้องการ บริการจัดทำ index และ query สำหรับในบริการนี้ได้รับการจัดการโดย SubQuery และให้บริการฟรีแก่ชุมชน Polkadot ใน[SubQuery's Explorer](https://explorer.subquery.network/) คุณสามารถทดลองใช้ชุดข้อมูล Bifrost SubQuery โดยใช้ Explorer โดยไม่ต้องติดตั้งโค้ดใดๆ [ที่นี่](https://explorer.subquery.network/subquery/bifrost-finance/subql)

![](https://miro.medium.com/max/1400/0*J9Rao6oyFMxVNWzZ)

ตัวอย่างอีกแบบของ SubQuery ในการดึงรายได้จากการ stake ทั้งหมดสำหรับ vDOT

[SubQuery](https://subquery.network/) เป็นเลเยอร์การรวมข้อมูลที่จะทำงานระหว่างบล็อคเชนเลเยอร์-1(Bifrost) และ DApps โซลูชันรวบรวมและจัดระเบียบข้อมูลจาก [Bifrost](https://bifrost.finance/) และบล็อกเชนอื่นๆ โดยให้บริการข้อมูลที่มีโครงสร้างอย่างดีสำหรับ dApp ของตน และสำหรับนักพัฒนารายอื่นๆ เพื่อใช้ในโครงการที่หลากหลาย บริการนี้ช่วยให้นักพัฒนา DApp สามารถมุ่งเน้นไปที่กรณีการใช้งานหลักและ front-end โดยไม่ต้องเสียเวลาไปกับการสร้าง back-end สำหรับการประมวลผลข้อมูลของตัวเอง

เรียนรู้เพิ่มเติมเกี่ยวกับ Bifrost

[Website](https://bifrost.finance/) | [Telegram](https://t.me/bifrost_finance) | [Twitter](https://twitter.com/bifrost_finance) | [Discord](https://discord.gg/XjnjdKBNXj)

เรียนรู้เพิ่มเติมเกี่ยวกับ SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)