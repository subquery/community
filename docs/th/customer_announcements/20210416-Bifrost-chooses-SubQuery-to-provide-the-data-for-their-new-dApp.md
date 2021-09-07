# Bifrost เลือก SubQuery ในการจัดหาข้อมูลให้กับ dApp ใหม่ๆ

![](https://miro.medium.com/max/1400/0*nqNosmn0y7FHOI42)

ไม่นานมานี้ Bifrost เปิดตัวเบต้าของ dApp ใหม่ ซึ่งเป็นอินเทอร์เฟซแบบโต้ตอบอย่างเป็นทางการสำหรับบริการ Bifrost ทั้งหมด ด้วย dApp นี้ ผู้ใช้สามารถ mint vTokens, สามารถ redeem, แลกเปลี่ยนอนุพันธ์เหล่านี้ และสามารถดูรายได้ของพวกเขาได้แบบเรียลไทม์ Dapp รุ่นเบต้านี้เป็นก้าวที่ยิ่งใหญ่ในการช่วยให้ผู้ใช้ลดต้นทุนการ stake ข้ามเครือข่ายโดยการรักษาสภาพคล่อง [คุณสามารถลองใช้ dApp ใหม่ของ Bifrost ได้ที่นี่](https://apps.bifrost.finance/) Through this dApp, users can mint vTokens, redeem and swap these derivatives, and view their earnings in real time. This beta dApp is a huge step forward in allowing users to reduce staking costs across chains by maintaining liquidity. [You can try out Bifrost’s new dApp here](https://apps.bifrost.finance/).

> “Without SubQuery, it is difficult to imagine how complicated it is to manually collect data from the chain. Bifrost developers may spend a lot of time searching for all transaction data on chain to be used for transaction history. SubQuery helps developers save a lot of repetitive work costs. “ถ้าไม่มี SubQuery มันเป็นเรื่องยากที่จะจินตนาการว่าการรวบรวมข้อมูลด้วยตนเองจากเชนนั้นซับซ้อนขนาดไหน นักพัฒนา Bifrost อาจใช้เวลาอย่างมากในการค้นหาข้อมูลธุรกรรมทั้งหมดในเชนเพื่อใช้สำหรับทำประวัติการทำธุรกรรม SubQuery ช่วยให้นักพัฒนาประหยัดค่าใช้จ่ายในการทำงานที่ซ้ำซากจำเจ Bifrost จะร่วมมือกับ SubQuery เป็นระยะเวลานานเพื่อเร่งความเร็วของการพัฒนาผลิตภัณฑ์” — Bifrost.Finance — Bifrost.Finance


![](https://miro.medium.com/max/1400/0*_JK-h0rjef6rk1ot)

โครงการ Bifrost SubQuery แบบใหม่ใน SubQuery Explorer

[SubQuery’s](https://subquery.network/) service helps [Bifrost](https://bifrost.finance/) power much of the data shown in their new dApp. All historical data on transfers, minting, and redemption events (such as price, date, currency and pool) are aggregated and queried from SubQuery’s advanced indexing and query service. For example, SubQuery allows Bifrost to calculate real time mint and redemption prices for vDot and vEth to show in their app, and to get the total number of vTokens in a certain wallet.

![](https://miro.medium.com/max/1400/0*WIxvwcgPIHzCf0E3)

ตัวอย่างง่ายๆ ในการแสดงราคา mint แบบเรียลไทม์สำหรับ vDOT

Bifrost ใช้ [SubQuery Projects](https://project.subquery.network/) เพื่อจัดการโครงการของตนเองและทำการอัปเดตตามต้องการ บริการจัดทำ index และ query สำหรับในบริการนี้ได้รับการจัดการโดย SubQuery และให้บริการฟรีแก่ชุมชน Polkadot ใน[SubQuery's Explorer](https://explorer.subquery.network/) คุณสามารถทดลองใช้ชุดข้อมูล Bifrost SubQuery โดยใช้ Explorer โดยไม่ต้องติดตั้งโค้ดใดๆ [ที่นี่](https://explorer.subquery.network/subquery/bifrost-finance/subql) The indexing and query services for this service is completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/). You can play around with the Bifrost SubQuery dataset using the Explorer without implementing any code [here](https://explorer.subquery.network/subquery/bifrost-finance/subql).

![](https://miro.medium.com/max/1400/0*J9Rao6oyFMxVNWzZ)

ตัวอย่างอีกแบบของ SubQuery ในการดึงรายได้จากการ stake ทั้งหมดสำหรับ vDOT

[SubQuery](https://subquery.network/) is a data aggregation layer that will operate between the layer-1 blockchains (Bifrost) and DApps. [SubQuery](https://subquery.network/) เป็นเลเยอร์การรวมข้อมูลที่จะทำงานระหว่างบล็อคเชนเลเยอร์-1(Bifrost) และ DApps โซลูชันรวบรวมและจัดระเบียบข้อมูลจาก [Bifrost](https://bifrost.finance/) และบล็อกเชนอื่นๆ โดยให้บริการข้อมูลที่มีโครงสร้างอย่างดีสำหรับ dApp ของตน และสำหรับนักพัฒนารายอื่นๆ เพื่อใช้ในโครงการที่หลากหลาย บริการนี้ช่วยให้นักพัฒนา DApp สามารถมุ่งเน้นไปที่กรณีการใช้งานหลักและ front-end โดยไม่ต้องเสียเวลาไปกับการสร้าง back-end สำหรับการประมวลผลข้อมูลของตัวเอง This service allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

เรียนรู้เพิ่มเติมเกี่ยวกับ Bifrost

[Website](https://bifrost.finance/) | [Telegram](https://t.me/bifrost_finance) | [Twitter](https://twitter.com/bifrost_finance) | [Discord](https://discord.gg/XjnjdKBNXj)

เรียนรู้เพิ่มเติมเกี่ยวกับ SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)