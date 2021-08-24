
![](https://miro.medium.com/max/1400/0*nqNosmn0y7FHOI42)

ไม่นานมานี้ Bifrost เปิดตัวเบต้าของ dApp ใหม่ ซึ่งเป็นอินเทอร์เฟซแบบโต้ตอบอย่างเป็นทางการสำหรับบริการ Bifrost ทั้งหมด ด้วย dApp นี้ ผู้ใช้สามารถ mint vTokens, สามารถ redeem, แลกเปลี่ยนอนุพันธ์เหล่านี้ และสามารถดูรายได้ของพวกเขาได้แบบเรียลไทม์ Dapp รุ่นเบต้านี้เป็นก้าวที่ยิ่งใหญ่ในการช่วยให้ผู้ใช้ลดต้นทุนการ stake ข้ามเครือข่ายโดยการรักษาสภาพคล่อง [คุณสามารถลองใช้ dApp ใหม่ของ Bifrost ได้ที่นี่](https://apps.bifrost.finance/)

> “ถ้าไม่มี SubQuery มันเป็นเรื่องยากที่จะจินตนาการว่าการรวบรวมข้อมูลด้วยตนเองจากเชนนั้นซับซ้อนขนาดไหน นักพัฒนา Bifrost อาจใช้เวลาอย่างมากในการค้นหาข้อมูลธุรกรรมทั้งหมดในเชนเพื่อใช้สำหรับทำประวัติการทำธุรกรรม SubQuery ช่วยให้นักพัฒนาประหยัดค่าใช้จ่ายในการทำงานที่ซ้ำซากจำเจ Bifrost จะร่วมมือกับ SubQuery เป็นระยะเวลานานเพื่อเร่งความเร็วของการพัฒนาผลิตภัณฑ์” — Bifrost.Finance


![](https://miro.medium.com/max/1400/0*_JK-h0rjef6rk1ot)

โครงการ Bifrost SubQuery แบบใหม่ใน SubQuery Explorer

บริการ [SubQuery](https://subquery.network/) ช่วยให้ [Bifrost](https://bifrost.finance/) ขับเคลื่อนข้อมูลส่วนจำนวนมากที่แสดงใน dApp ใหม่ ข้อมูลประวัติทั้งหมดเกี่ยวกับการโอน, การ mint และการ redeem (เช่น ราคา วันที่ สกุลเงิน และ pool) จะถูกรวบรวมและ query จากบริการจัดทำ index และ query ขั้นสูงของ SubQuery ตัวอย่างเช่น SubQuery ทำให้ Bifrost คำนวณราคา mint และราคา redeem สำหรับ vDot และ vEth ได้แบบเรียลไทม์ เพื่อแสดงในแอปและรับจำนวนของ vToken ทั้งหมดที่อยู่ในกระเป๋านั้นๆ

![](https://miro.medium.com/max/1400/0*WIxvwcgPIHzCf0E3)

A simple example showing real time mint price for vDOT

Bifrost is using [SubQuery Projects](https://project.subquery.network/) to manage their own project and make updates as required. The indexing and query services for this service is completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/). You can play around with the Bifrost SubQuery dataset using the Explorer without implementing any code [here](https://explorer.subquery.network/subquery/bifrost-finance/subql).

![](https://miro.medium.com/max/1400/0*J9Rao6oyFMxVNWzZ)

Another SubQuery example to retrieve total staking revenue for vDOT

[SubQuery](https://subquery.network/) is a data aggregation layer that will operate between the layer-1 blockchains (Bifrost) and DApps. The solution aggregates and organises data from [Bifrost](https://bifrost.finance/) and other blockchains, serving up well-structured data for their dApp and for other developers to use in a wide array of projects. This service allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

Learn more about Bifrost

[Website](https://bifrost.finance/) | [Telegram](https://t.me/bifrost_finance) | [Twitter](https://twitter.com/bifrost_finance) | [Discord](https://discord.gg/XjnjdKBNXj)

Learn more about SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)