# บทสรุปของเดือนเมษายน 2021

April was an incredibly busy month for SubQuery, our growth is starting to accelerate at a serious pace and we’re breaking new records each day. เดือนเมษายนเป็นเดือนที่ยุ่งอย่างน่าเหลือเชื่อสำหรับ SubQuery เราเริ่มเติบโตขึ้นอย่างรวดเร็วจริงๆ และเราทำสถิติใหม่ได้ในทุกๆวัน อย่างที่เราให้ความคิดเห็นเมื่อเดือนก่อน ในระยะสั้นเราให้ความสนใจ 2 เรื่อง คือ การขยายขนาดแพลตฟอร์มของเราเพื่อให้ทันกับความต้องการที่พุ่งสูงขึ้น และการร่วมมือกับพันธมิตรให้มากขึ้นและมากขึ้น เพื่อช่วยพวกเขาในการสร้างโครงการ SubQuery ของพวกเขาเอง

ความคืบหน้าในเดือนนี้

-   มุ่งเน้นที่เครื่องมือสำหรับพาร์ทเนอร์ — เปิดตัวโครงการ SubQuery
-   กรณีการใช้งาน BiFrost SubQuery
-   ปรับปรุงความสามารถในการปรับขนาดโดย OnFinality ซึ่งเป็นผู้ให้บริการของเรา
-   และอื่นๆ…

On the partner front we launched a key product that is needed to operationally accelerate the growth of SubQuery. Before you could create and run your own SubQuery projects locally or in your own infrastructure. ในส่วนของพาร์ทเนอร์ เราได้เปิดตัวผลิตภัณฑ์หลักที่จำเป็นในการดำเนินการเร่งการเติบโตของ SubQuery ก่อนที่คุณจะสามารถสร้างและเรียกใช้โครงการ SubQuery ของคุณเองทั้งจากในเครื่องหรือโครงสร้างพื้นฐานของคุณได้ [โครงการ](https://project.subquery.network/) อนุญาตให้ผู้ใช้เผยแพร่โครงการของตนไปยังชุมชน SubQuery และเราจะรันโครงการเหล่านั้นด้วยบริการที่มีประสิทธิภาพสูง  สามารถปรับขนาดได้ และสามารถจัดการได้อย่างสาธารณะ ฟรี!

![](https://miro.medium.com/max/1400/0*zZkmiEq5g2BbAxfl)

ส่วนสุดท้ายที่ขาดหายไปนี้ หมายความว่าเรามีชุดเครื่องมือที่สมบูรณ์ในการเปิดใช้งานและส่งเสริมลูกค้าให้สามารถ[สำรวจ](https://explorer.subquery.network/) [สร้าง](https://doc.subquery.network/quickstart.html) [เรียกใช้](https://doc.subquery.network/run/indexing_query.html) จากนั้น [เผยแพร่](https://doc.subquery.network/publish/publish.html#benefits)โครงการ SubQuery ทั้งหมดด้วยตัวเอง

![](https://miro.medium.com/max/1400/0*pDQgyo3phe2ZcMml)

ในเดือนเมษายน, [Bifrost Finance](https://bifrost.finance/) ได้เปิดตัว dApp ใหม่ ซึ่งเป็นอินเตอร์เฟซอย่างเป็นทางการสำหรับใช้โต้ตอบกับบริการทั้งหมดของ Bifrost ด้วย dApp นี้ ผู้ใช้งานสามารถสร้าง vTokens แลกคืน (redeem) และแลกเปลี่ยน (swap) อนุพันธ์นี้ รวมถึงสามารถดูรายได้ของพวกเขาได้แบบเรียลไทม์ Through this dApp, users can mint vTokens, redeem and swap these derivatives, and view their earnings in real time.

SubQuery’s service helps Bifrost power much of the data shown in their new dApp. All historical data on transfers, minting, and redemption events (such as price, date, currency and pool) are aggregated and queried from SubQuery’s advanced indexing and query service. บริการของ SubQuery ช่วย Bifrost ในการขับเคลื่อนข้อมูลจำนวนมากที่แสดงใน dApp ใหม่ของพวกเขา ข้อมูลประวัติทั้งหมดที่เกี่ยวกับการโอน การสร้างเหรียญ และกิจกรรมการแลกคืน (ตัวอย่างเช่น ราคา วันที่ สกุลเงิน และ pool) จะถูกรวบรวมและ query จากการทำ indexing ขั้นสูง และบริการ query ของ SubQuery ตัวอย่างเช่น SubQuery จะให้ Bifrost คำนวณราคา mint และ redeem แบบเรียลไทม์ สำหรับ vDot และ vEth เพื่อแสดงในแอปของพวกเขา และเพื่อรับข้อมูลจำนวน vTokens ทั้งหมดในกระเป๋าเงินนั้นๆ

![](https://miro.medium.com/max/1400/0*heWoX8Kw1nm1iYd9)

โครงการ Bifrost SubQuery ใหม่ ใน SubQuery Explorer

> “Without SubQuery, it is difficult to imagine how complicated it is to manually collect data from the chain. “หากไม่มี SubQuery มันจะเป็นเรื่องยากที่จะจินตนาการว่าการรวบรวมข้อมูลจากเชนด้วยตัวเองนั้นจะซับซ้อนขนาดไหน Bifrost developers may spend a lot of time searching for all transaction data on chain to be used for transaction history. SubQuery helps developers save a lot of repetitive work costs. “หากไม่มี SubQuery มันจะเป็นเรื่องยากที่จะจินตนาการว่าการรวบรวมข้อมูลจากเชนด้วยตัวเองนั้นจะซับซ้อนขนาดไหน นักพัฒนา Bifrost อาจใช้เวลาอย่างมากในการค้นหาข้อมูลการทำธุรกรรมบน chain เพื่อใช้สำหรับทำประวัติการทำธุรกรรม SubQuery ช่วยนักพัฒนาประหยัดค่าใช้จ่าย ในการทำงานที่ซ้ำซากจำเจนี้ Bifrost จะร่วมมือกับ SubQuery เป็นระยะเวลานาน เพื่อเร่งการทำซ้ำของการพัฒนาผลิตภัณฑ์” — Bifrost Finance — Bifrost Finance

OnFinality เป็นผู้ให้บริการหลักของ SubQuery ซึ่ง indexer ส่วนใหญ่ของ SubQuery ในโครงการบน Polkadot และ Kusama กำลังใช้งาน API endpoint สาธารณะของ OnFinality ในการรับข้อมูล ปริมาณการใช้ข้อมูลอย่างมีนัยสำคัญจาก SubQuery เป็นหนึ่งในสาเหตุที่ทำให้ OnFinality เป็นผู้ให้บริการโครงสร้างพื้นฐานที่ใหญ่ที่สุดในระบบนิเวศ Polkadot/Kusama The significant traffic from SubQuery is one of the reasons why OnFinality is the largest infrastructure provider in the Polkadot/Kusama ecosystem.

ในเดือนเมษายน OnFinality ได้บรรลุเป้าหมายระยะยาวคือ 100 ล้านคำขอภายในหนึ่งวัน ซึ่งที่จริงเขาได้ไปถึง 127 ล้านคำขอใน 24 ชั่วโมง(เกือบ 1500 คำขอ ต่อวินาที)

![](https://miro.medium.com/max/1400/0*FLq4vXluI9CTiBQ8)

OnFinality also [delivered their treasury proposal](https://kusama.polkassembly.io/treasury/72) for the second milestone to improve the scalability of their API service. Intelligent routing that allows them to maximise the use of different clusters of nodes across their user base in different geographic regions. SubQuery relies on this infrastructure so it’s important to note the continued investment and improvements here. The past month has demonstrated how critical it is to continue to invest in scale so that we can continue to provide the best service every day.

-   CEO ของเรา Sam Zou ได้จัดงานออนไลน์เรื่อง_อนาคตของ Cyber บน Parachain_ พร้อมด้วย Web3, Acala, Polkawarriors และ Bitfwd

-   James Bayly หัวหน้าฝ่ายพัฒนาธุรกิจของเราได้เข้าร่วมการสนทนาเสมือนจริงกับ DFG และ James Wo ซึ่งเป็นส่วนหนึ่งของซีรี่ส์ DFG Talks

-   เวลาของพวกเราใน Berkeley Xcelerator ได้เริ่มขึ้นแล้ว — เราได้เข้าร่วมการประชุมที่ยอดเยี่ยม
-   เราได้ทำการปรับปรุงครั้งใหญ่บน[เว็บไซต์ SubQuery](https://subquery.network/)ของเรา
-   [เอกสารที่ปรับปรุงแล้ว](https://doc.subquery.network/)รุ่นใหม่สำหรับนักพัฒนา SubQuery
-   สำนักงานของเรากำลังปรับปรุง เราโชคดีที่ได้ทำงานที่เดียวกันที่นิวซีแลนด์

![](https://miro.medium.com/max/1400/0*cOsJ2TLa4yqpY0Ig)

คาดว่าจะมีข่าวใหญ่ในเดือนพฤษภาคมสำหรับชุมชนของเรา — เรากำลังทำงานบางอย่างที่ยิ่งใหญ่และเราแทบรอไม่ไหวที่จะบอกมัน ในระหว่างนี้คุณสามารถสร้างโครงการ SubQuery ของคุณได้เองโดยทำตาม[คู่มือเริ่มต้นแบบย่อฉบับใหม่ ของเราที่นี่](https://doc.subquery.network/quickstart.html) ในระหว่างนี้คุณสามารถสร้างโครงการ SubQuery ของคุณได้เองโดยทำตาม[คู่มือเริ่มต้นแบบย่อฉบับใหม่ ของเราที่นี่](https://doc.subquery.network/quickstart.html)