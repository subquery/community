# บทสรุปของเดือนพฤศจิกายน 2021

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_ในเดือนนี้มีข้อมูลเกี่ยวกับการดำเนินงานต่างๆ ดังนี้_**

ยินดีต้อนรับเข้าสู่การอัปเดตรายเดือนล่าสุดจาก SubQuery มีการอัปเดตที่เต็มไปด้วยสิ่งที่น่าตื่นเต้นที่ได้เกิดขึ้นในชุมชนของเรา

# เครือข่าย SubQuery

## SubQuery เปิดตัวบนเครือข่าย Acala

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) ในการพูดคุยของชุมชน เราได้ประกาศแล้วว่า SubQuery และโทเค็น SQT มีเป้าหมายที่จะเป็นแอปพลิเคชันภายนอกตัวแรก (external application) และโทเค็นจะเปิดตัวบนเครือข่าย Acala

SubQuery พิจารณาพันธมิตรที่มากมายจากนั้นจึงเลือก Acala ซึ่ง Acala เป็นโปรโตคอล DeFi ชั้นนำที่สร้างขึ้นบนเครือข่าย Polkadot เหตุผลหลักสามประการที่นำไปสู่การตัดสินใจเปิดตัวกับ Acala ได้แก่ การเข้าถึงของชุมชน หรือ community, โดเมน/ความโดดเด่นด้านเทคนิค และความสัมพันธ์ที่แน่นแฟ้นของเรา

James ได้พูดคุยกับ Bette Chen ทีมของ Acala เกี่ยวกับการตัดสินใจและการเป็นพันธมิตร รวมถึงไปถึงสาเหตุที่ Acala และ SubQuery เป็นพันธมิตรที่ทำงานเข้ากันได้อย่างยอดเยี่ยม

[อ่านรายละเอียดเพิ่มเติมได้ที่นี่](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

## การพัฒนาที่สำคัญในเครือข่าย SubQuery

แม้ว่าเรากำลังยุ่งอยู่กับการทำงานอย่างหนักในเครือข่าย SubQuery และยังคงเร่งดำเนินการเพื่อเปิดตัวเครือข่ายทดสอบของเราในไตรมาสแรกของปี 2022 เรามีความคืบหน้าอย่างมาก เกี่ยวกับ smart contract และการสร้างโมเดลเศรษฐกิจของโทเค็น (token economic model) อย่างละเอียดรอบคอบ คาดว่าเร็ว ๆ นี้จะเห็นเราอธิบายรายละเอียดเกี่ยวกับเรื่องนี้มากขึ้น

# การพัฒนาผลิตภัณฑ์หลัก (Core Product Development)

## การบริการโฮสต์ ด้าน Scale

โปรเจ็กต์ SubQuery มีการเติบโตอย่างรวดเร็วในช่วงเดือนที่ผ่านมาเนื่องจาก  [ผู้เข้าร่วม academy จำนวนหลายพันคน](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html) ได้สร้างโปรเจ็กต์เพิ่มเติมในบริการโฮสต์ของเรา หรือ hosted service  ([project.subquery.network](https://project.subquery.network/))  ในพื้นที่ไม่กี่สัปดาห์ที่ผ่านมา

เราได้ก้าวข้าม milestone มีโปรเจ็กต์มากกว่า 2,000 ที่ได้ deployed กับบริการโฮสต์ของเรา (hosted service) และด้วยเหตุนี้ scale ของ hosted service จึงเป็นเรื่องสำคัญ ขณะนี้เรานำเสนอทรัพยากร (resource) สำหรับลูกค้าประเภท enterprise เพื่อปรับปรุงประสิทธิภาพและสร้างความน่าเชื่อถือ

หากคุณต้องการอัปเกรดโปรเจ็กต์ SubQuery ของคุณเพื่อรับทรัพยากร (resource) โปรดติดต่อเราที่ [sales@subquery.network](mailto:sales@subquery.network).

## รองรับ External Chain Type Files ในโปรเจ็กต์ Manifest

ในเดือนพฤศจิกายน เราได้เปิดตัว  [**version 0.2.0**](https://doc.subquery.network/create/manifest/)  ของโปรเจ็กต์ manifest file (`project.yaml`) เวอร์ชันใหม่นี้ช่วยให้นักพัฒนามีการปรับปรุงต่างๆ ตามความต้องการของผู้ใช้บริการ

สิ่งสำคัญที่สุดคือตอนนี้ คุณสามารถอ้างอิง chain type definition file ที่มีประเภทแบบกำหนดเองทั้งหมดรวมอยู่ด้วยเมื่อคุณสร้างดัชนีบน substrate chain แบบกำหนดเอง วิธีนี้ช่วยให้คุณเชื่อมต่อโปรเจ็กต์ SubQuery ใหม่ๆกับ substrate-based chain ต่างๆได้อย่างรวดเร็ว รวมถึง parachains ของ Kusama ทั้งหมด

[คุณสามารถอ่านเพิ่มเติมเกี่ยวกับฟีเจอร์ใหม่นี้ได้ที่นี่](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

## การสนับสนุน EVM ของ Moonriver

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

ตามที่ได้ประกาศไปก่อนหน้านี้ เราได้ดำเนินการสนับสนุนสำหรับเครือข่าย Moonbeam และ Moonriver ใน SubQuery ในเดือนพฤศจิกายน เราได้ติดตามทรัพยากรของนักพัฒนาทั้งหมดที่คุณต้องใช้ในการเริ่มต้น  [คุณสามารถอ่านคำแนะนำได้ที่นี่](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

นอกจากนี้ คุณ Scott ยังสามารถนำเสนอเวิร์กโฟลว์ทั้งหมดนี้ใน [เวิร์กชอปของ Moonbuilders](https://www.crowdcast.io/e/moonbuilders-ws/10) เพื่อให้ทุกคนได้รับทราบ เป็นช่วงเวลาที่เหมาะสมสำหรับเปิดตัวการแข่งขันใน Gitcoin Grants ที่เราสนับสนุน (เพิ่มเติมจากด้านล่าง)

# ชุมชน (Community)

## Gitcoin Hackathon

จากความสำเร็จอย่างท่วมท้นของ _Hero Course_ ของ SubQuery Academy เราภูมิใจที่จะประกาศว่าเราเปิดให้โอกาสจัด Hackathon ครั้งแรกแก่นักพัฒนาทุกคนผ่าน [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery) โดยเริ่ม 1 ธันวาคม นี้

SubQuery มอบ 5 รางวัลพร้อมเงินรางวัลรวมสูงถึง 34,000 ดอลลาร์สหรัฐ:

-   [สร้างเครื่องมือสำรวจบล็อกแบบรวมศูนย์ที่รวมข้อมูลเชิงลึกของ Substrate และ EVM จาก Moonbeam และ Astar ไว้ในแอปพลิเคชันเดียวที่ใช้งานง่าย](https://gitcoin.co/issue/subquery/grants/1) — $12,000 [สนับสนุนโดย Moonbeam และ Astar
-   [ทำงานกับ SubQuery และ DeFi hub ที่ Karura/Acala พื่อสร้างแดชบอร์ดที่ได้รับแรงบันดาลใจจาก Zapper.fi หรือ  defisaver.com](https://gitcoin.co/issue/subquery/grants/2)  — 8,000 ดอลลาร์สหรัฐ [สนับสนุนโดย by Acala]
-   [สร้างแดชบอร์ดการ stake ที่แสดงทางเลือกการ stake ที่ดีที่สุด บน Polkadot และparachainsต่างๆ](https://gitcoin.co/issue/subquery/grants/3) — 3,000 ดอลลาร์สหรัฐ
-   [สร้าง Marketplace explorer สำหรับ NFT ที่ใช้โปรโตคอล RMRK ทั้งหมด](https://gitcoin.co/issue/subquery/grants/4) — 2,000 ดอลลาร์สหรัฐ
-   [ขยายบริการ @subql/node เพื่อสร้างดัชนีข้อมูลจากเครือข่าย layer 1 อื่นๆ](https://gitcoin.co/issue/subquery/grants/5)  — 12,000 ดอลลาร์สหรัฐ

[คุณสามารถอ่านเพิ่มเติมเกี่ยวกับเงินรางวัลเหล่านี้ได้ที่นี่](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

## วิเคราะห์การระดมทุน ของ Polkadot ในรูปแบบ Polkadot Crowdloans

SubQuery เป็นบริการจัดทำดัชนีข้อมูลชั้นนำของ Polkadot และในสัปดาห์ที่ผ่านมา เราได้รับการเรียกใช้บริการมากกว่าล้านคำสั่งต่อวันไปยังแดชบอร์ดของ Crowdloan แอพลิเคชั่นที่สนับสนุน และเว็บไซต์สำหรับการวิเคราะห์ข้อมูล ทีมต่างๆ เช่น  [**SubVis**](https://www.subvis.io/),  [**Parallel Finance**](https://parallel.fi/), และ  [**DotMarketCap**](https://dotmarketcap.com/) อาศัย SubQuery เพื่อให้ข้อมูลแบบเรียลไทม์เกี่ยวกับ crowdloans และข้อมูลออนไลน์ (on-chain data) อื่นๆ ให้กับ เว็บไซต์และแอพของพวกเขา

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

เมื่อเร็ว ๆ นี้เราได้เจาะลึกข้อมูลลงไปใน crowdloans ของ Polkadot (โดยเฉพาะการแข่งขันระหว่าง Acala และ Moonbeam)  [ถ้าคุณยังไม่ได้อ่าน สามารถอ่านเพิ่มเติมได้ที่นี่](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

# สิ่งอื่นที่คุณอาจพลาดไป

-   เรากำลังทำงานอย่างใกล้ชิดกับทีมใหม่ที่ [Web3Go](https://www.web3go.xyz/) เพื่อ [จัดหาเครื่องมือวิเคราะห์ข้อมูลให้กับระบบนิเวศ SubQuery](https://blog.subquery.network/customer_announcements/20211110-web3go.html)
-   [ฟังพอดแคสต์ของ Sam และ James ได้ที่ช่อง Brave New Coin](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot)
-   James ได้พูดคุยกับ Brett Kolodny ซึ่งเป็นหนึ่งในทีม ของ Acala เพื่อพูดคุยเกี่ยวกับวิธีการที่ [Acala ใช้ SubQuery ในการ stack](https://www.youtube.com/watch?v=Wbxwj8K67Lw).
-   Siqi ตัวแทนประเทศจีนของเรา [พูดคุยกับ Acala Network และ Polkaworld ล่าสุด เกี่ยวกับweb3](https://www.huoxing24.com/live/24313016)
-   เราเปิดตัวโมดูล  [1](https://doc.subquery.network/academy/herocourse/module1/)  to  [4](https://doc.subquery.network/academy/herocourse/module4/)  ของ  [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   James ยังพูดคุยกับ Jacky เพื่อสำรวจแผนงายของ Litentry[สำหรับโปรโตคอล DID ในอนาคต](https://www.youtube.com/watch?v=Rqlpo9QIVyk).

และเช่นเคย โปรด[เข้าร่วมช่องทางโซเชียลของเรา](https://linktr.ee/subquerynetwork)  (โดยเฉพาะ  [ดิสคอร์ต](https://discord.com/invite/subquery)) เพื่อติดตามข่าวสารและประกาศล่าสุดของเรา

James, Sam และทีม SubQuery

[Linktree](https://linktr.ee/subquerynetwork)  |  [เว็ปไซต์](https://subquery.network/)  |  [ดิสคอร์ด](https://discord.com/invite/78zg8aBSMG)  |  [เทเลแกรม](https://t.me/subquerynetwork)  |  [ทวิตเตอร์](https://twitter.com/subquerynetwork)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [ยูทูป](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
