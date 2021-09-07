# ประกาศ SubQuery Explorer

นับตั้งแต่ประกาศ SubQuery ไปทั่วโลกเมื่อเดือนที่แล้ว การตอบสนองและข้อเสนอแนะที่เราได้รับจากชุมชน Polkadot นั้นเป็นไปในเชิงบวกอย่างท่วมท้น เราได้รับผู้ติดตามหลายพันคนบนช่องของเรา และมีการติดตั้งมากกว่า 1,353 ครั้งจาก NPM การรับข้อความสนับสนุนทั้งหมดและเห็นการมีส่วนร่วมจากชุมชนถือเป็นแรงบันดาลใจ **ได้เวลาที่พวกเราต้องตอบแทนแล้ว!** We’ve gained thousands of followers on our channels, and there have been over 1,353 installs from NPM. It’s inspiring to receive all the messages of support, and to see the engagement from the community. **It’s time for us to give something back!**

We’ve been working overtime over the last month to release the next major stage of our roadmap for SubQuery. เราได้ทำงานล่วงเวลาในช่วงเดือนที่ผ่านมาเพื่อเผยแพร่ขั้นตอนหลักถัดไปของแผนงานสำหรับ SubQuery วันนี้เราจะประกาศเปิดตัว [SubQuery Explorer](https://explorer.subquery.network/)

![](https://miro.medium.com/max/1400/0*2bDaF3HPgNkpm8Kt)

[SubQuery Explorer](https://explorer.subquery.network/) เป็นบริการโฮสต์ออนไลน์ที่ให้การเข้าถึงโครงการ SubQuery ที่เผยแพร่โดยผู้ร่วมให้ข้อมูลทั่วโลกและจัดการโดยทีม SubQuery เป็นการต่อยอดภารกิจของเราในการสนับสนุนนักพัฒนา Polkadot โดยการให้บริการโครงสร้างพื้นฐานโดยทำให้การเข้าถึงข้อมูลเครือข่าย Polkadot ง่ายยิ่งขึ้น It furthers our mission to support Polkadot developers by providing infrastructure services by making accessing Polkadot network data even easier.

วันนี้ ใครๆ ก็ query และดึงข้อมูลเครือข่าย Polkadot ได้ในเวลาเพียงไม่กี่นาทีโดยไม่มีค่าใช้จ่าย

The SubQuery explorer makes getting started easy. We’ve prebuilt SubQuery projects for two use cases (more about these below) and have indexed each network. We’re hosting these SubQuery nodes online and allow anyone to query each for free. SubQuery explorer ทำให้การเริ่มต้นนั้นง่าย เราได้สร้างโครงการ SubQuery ไว้ล่วงหน้าสำหรับกรณีการใช้งานสองกรณี (เพิ่มเติมเกี่ยวกับสิ่งเหล่านี้ด้านล่าง) และได้จัดทำดัชนีแต่ละเครือข่าย เรากำลังโฮสต์โหนด SubQuery เหล่านี้ทางออนไลน์และอนุญาตให้ทุกคน query ได้ฟรี โหนดที่มีการจัดการเหล่านี้จะได้รับการตรวจสอบและเรียกใช้โดยทีม SubQuery ที่เลเวลของประสิทธิภาพที่จะอนุญาตให้แอปที่ใช้งานจริงใช้และพึ่งพาได้

![](https://miro.medium.com/max/1400/0*3hmnk6sNoO5pdOWc)

นอกจากนี้ คุณจะทราบด้วยว่า SubQuery Explorer มี playground สำหรับการค้นหาข้อมูลที่มีพร้อมตัวอย่างการ query คุณสามารถเล่นกับ SubQuery Graph แต่ละรายการโดยใช้ explorer นี้โดยไม่ต้องติดตั้งอะไรในโค้ด นอกจากนี้ เราได้ทำการปรับปรุงเล็กๆ น้อยๆ ในเอกสารของเรา เพื่อสนับสนุนนักพัฒนาในการเดินทางไปยังการ query ที่ดีขึ้นและวิเคราะห์ข้อมูล Polkadot ของโลกได้ดียิ่งขึ้น You can play around with each SubQuery Graph using this explorer without implementing anything in code. Additionally, we’ve made some small improvements to our documentation to better support developers on their journey to better query and analyse the world’s Polkadot data.

![](https://miro.medium.com/max/1400/0*V1Mjpi1-gAT6M8-q)

## **ยอดรวมการ stake ของ SubQuery Project (**[GitHub Code ของโปรเจ็ค](https://github.com/subquery/subql-examples/tree/main/sum-reward))

You can quickly find total staking revenue awarded to any account since the beginning of time by querying their account address. This subquery project indexes and records the accounts participating in the staking bond on the blockchain. The continued indexing will find out obtained staking reward and slashes for this account and aggregates their sums to a database.

## **เกณฑ์ Validator ของโปรเจ็ค SubQuery (**[GitHub Code ของโปรเจ็ค](https://github.com/subquery/subql-examples/tree/main/validator-threshold))

You can quickly see the minimum staking amount required for a validator to be elected. This project is an excellent example of implementing query states in the mapping function. It first finds the active staking Era through a state query and records the validators of this session staking amount by each. It then calculates the minimum staking amount and the total amount staked in this Era. Lastly, it records the maximum number of nominators that can be rewarded.

SubQuery Explorer นี้เป็นเพียงแผนชุดแรกของเราในการสร้างศูนย์กลางชุมชนสำหรับข้อมูล Polkadot เราจะติดตามคุณสมบัติดังต่อไปนี้: We’re going to follow up with the following features:

-   เรากำลังมุ่งเน้นไปที่เครื่องมือของชุมชน ดังนั้นคุณสามารถคาดหวังเอกสารสำหรับนักพัฒนาในเชิงลึกมากขึ้น บทช่วยสอนที่ง่ายต่อการติดตาม และโครงการตัวอย่างที่เน้นกรณีการใช้งานที่ยอดเยี่ยมจริงๆ สำหรับข้อมูลที่ SubQuery แสดง
-   โครงการ SubQuery เพิ่มเติมจะค่อยๆ ออนไลน์ตามความคิดเห็นของชุมชน เราชอบแนวคิดบางอย่างเกี่ยวกับสิ่งที่คุณอยากเห็นในอนาคต — เข้าถึงช่องทางโซเชียลของเรา (ดูด้านล่าง)
-   เรากำลังจะสร้างแพลตฟอร์ม partner เพื่อให้ชุมชนของเราสามารถสร้างและอัปโหลดโครงการ SubQuery ของตนเองได้ และเราจะจัดการและโฮสต์ให้คุณฟรี

เริ่มการ query ข้อมูลใน [SubQuery Explorer](https://explorer.subquery.network/) อันใหม่

สร้างโปรเจ็ค SubQuery ของคุณเองโดยทำตาม [เอกสาร SubQuery](https://doc.subquery.network/) ของเรา

เยี่ยมชม [เว็บไซต์](https://subquery.network/)ของเรา

**พูดคุยกับเราได้ที่:**

-   [hello@subquery.network](mailto:hello@subquery.network)
-   [Discord](https://discord.com/invite/78zg8aBSMG)
-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/#subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)

![](https://miro.medium.com/max/1400/0*tzhwpKRunR7AqFhr)