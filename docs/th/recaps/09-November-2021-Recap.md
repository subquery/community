# บทสรุปของเดือนพฤศจิกายน 2021

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_ในเดือนนี้มีข้อมูลเกี่ยวกับการดำเนินงานต่าง ๆ ดังนี้_**

ยินดีต้อนรับเข้าสู่การอัพเดตรายเดือนล่าสุดจาก SubQuery ที่เต็มไปด้วยสิ่งที่น่าตื่นเต้นที่เกิดขึ้นในชุมชนของเรา

## SubQuery Network

### SubQuery to launch on Acala

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) ในการพูดคุยของคอมมูนิตี้ เราได้ประกาศแล้วว่า SubQuery และโทเค็น SQT มีเป้าหมายที่จะเป็นแอปพลิเคชันภายนอก (external application) ตัวแรก และโทเคนจะเปิดตัวบนเครือข่าย Acala

SubQuery พิจารณาพันธมิตรที่มากมายก่อนที่จะเลือก Acala ซึ่ง Acala เป็นโปรโตคอล DeFi ชั้นนำที่สร้างขึ้นบนเครือข่าย Polkadot เหตุผลหลักสามข้อที่นำไปสู่การตัดสินใจเปิดตัวกับ Acala ได้แก่ การเข้าถึงของคอมมูนิตี้ โดเมนหรือความโดดเด่นด้านเทคนิค และความสัมพันธ์ที่แน่นแฟ้นของเรา

James ได้พูดคุยกับ Bette Chen ทีมของ Acala เกี่ยวกับการตัดสินใจและการเป็นพันธมิตร รวมถึงไปถึงสาเหตุที่ Acala และ SubQuery เป็นพันธมิตรที่ทำงานเข้ากันได้อย่างยอดเยี่ยม

[อ่านรายละเอียดเพิ่มเติมได้ที่นี่](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

### Significant Development on the SubQuery Network

แม้ว่าเรากำลังยุ่งอยู่กับการทำงานอย่างหนักในเครือข่าย SubQuery และยังคงเร่งดำเนินการเพื่อเปิดตัวเครือข่ายทดสอบของเราในไตรมาสแรกของปี 2022 เรามีความคืบหน้าอย่างมาก เกี่ยวกับ smart contract และการสร้างโมเดลเศรษฐกิจของโทเค็น (token economic model) อย่างละเอียดรอบคอบ คาดว่าเร็ว ๆ นี้จะเห็นเราอธิบายรายละเอียดเกี่ยวกับเรื่องนี้มากขึ้น

## Core Product Development

### Scaling our Hosted Service

SubQuery Projects has been a recipient of some explosive growth over the past month as [thousands of academy participants](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html) have created even more projects in our hosted service ([project.subquery.network](https://project.subquery.network/)) in the space of a few weeks.

เราได้ก้าวข้าม milestone มากกว่า 2,000 โปรเจ็กต์ที่ได้ deployed กับบริการโฮสต์ (hosted service) ของเรา และด้วยเหตุนี้ scale ของ hosted service จึงเป็นเรื่องสำคัญ ขณะนี้เรานำเสนอทรัพยากร (resource) สำหรับลูกค้าประเภท enterprise เพื่อปรับปรุงประสิทธิภาพและสร้างความน่าเชื่อถือ

If you would like to upgrade your SubQuery project to receive dedicated resourcing, contact us at [sales@subquery.network](mailto:sales@subquery.network).

### Supporting External Chain Type Files in our Project Manifest

In November we launched [**version 0.2.0**](https://doc.subquery.network/create/manifest/) of our project manifest file (`project.yaml`). เวอร์ชันใหม่นี้ช่วยให้นักพัฒนามีการปรับปรุงต่างๆ ตามความต้องการของผู้ใช้บริการ

สิ่งสำคัญที่สุดคือตอนนี้คือคุณสามารถอ้างอิง chain type definition file ที่มีประเภทแบบกำหนดเองทั้งหมดรวมอยู่ด้วยเมื่อคุณสร้าง index บน substrate chain แบบกำหนดเอง วิธีนี้ช่วยให้คุณเชื่อมต่อโปรเจกต์ SubQuery ใหม่ๆกับ substrate-based chain ต่างๆได้อย่างรวดเร็ว รวมถึง parachains ของ Kusama ทั้งหมด

[คุณสามารถอ่านเพิ่มเติมเกี่ยวกับฟีเจอร์ใหม่นี้ได้ที่นี่](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

### Moonriver EVM Support

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

ตามที่ได้ประกาศไปก่อนหน้านี้ เราได้ดำเนินการสนับสนุนสำหรับเครือข่าย Moonbeam และ Moonriver ใน SubQuery ในเดือนพฤศจิกายน เราได้ติดตามทรัพยากรของนักพัฒนาทั้งหมดที่คุณต้องใช้ในการเริ่มต้น [คุณสามารถอ่านคำแนะนำได้ที่นี่](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

Additionally, Scott was able to present this entire workflow to the [Moonbuilders workshop](https://www.crowdcast.io/e/moonbuilders-ws/10) for everyone to watch. เป็นช่วงเวลาที่เหมาะสมสำหรับเปิดตัวการแข่งขันใน Gitcoin Grants ที่เราสนับสนุน (เพิ่มเติมจากด้านล่าง)

## Community

### Gitcoin Hackathon

Hot on the heels of the overwhelming success of the SubQuery Academy’s _Hero Course_, we were proud to announce that we would be providing our first hackathon opportunity for all developers via [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery) starting on December 1st.

SubQuery มอบ 5 รางวัลพร้อมเงินรางวัลรวมสูงถึง 34,000 ดอลลาร์สหรัฐ:

- [Create a unified block explorer that combines Substrate and EVM insights from Moonbeam and Astar into one easy to use application](https://gitcoin.co/issue/subquery/grants/1) — US$12,000 [Sponsored by Moonbeam and Astar]
- [Work with SubQuery and the DeFi hub at Karura/Acala to build a dashboard that’s inspired by Zapper.fi or defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — US$8,000 [Sponsored by Acala]
- [Create a staking dashboard that shows the best staking opportunities across Polkadot and its various parachains](https://gitcoin.co/issue/subquery/grants/3) — US$3,000
- [Build a marketplace explorer for all RMRK protocol based NFTs](https://gitcoin.co/issue/subquery/grants/4) — US$2,000
- [Extend the @subql/node service to index data from another layer 1 chain](https://gitcoin.co/issue/subquery/grants/5) — US$12,000

[คุณสามารถอ่านเพิ่มเติมเกี่ยวกับเงินรางวัลเหล่านี้ได้ที่นี่](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

### Analysis into the Polkadot Crowdloans

SubQuery เป็นบริการจัดทำ index ข้อมูลชั้นนำของ Polkadot และในสัปดาห์ที่ผ่านมา เราได้รับการเรียกใช้บริการมากกว่าล้านคำสั่งต่อวันไปยังแดชบอร์ดของ Crowdloan แอพลิเคชั่นที่สนับสนุน และเว็บไซต์สำหรับการวิเคราะห์ข้อมูล Teams like [**SubVis**](https://www.subvis.io/), [**Parallel Finance**](https://parallel.fi/), and [**DotMarketCap**](https://dotmarketcap.com/) rely on SubQuery to provide real-time data on the crowdloans and other on-chain data directly to their websites and apps.

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

เมื่อเร็ว ๆ นี้เราได้เจาะลึกข้อมูลลงไปใน crowdloans ของ Polkadot (โดยเฉพาะการแข่งขันระหว่าง Acala และ Moonbeam) [ถ้าคุณยังไม่ได้อ่าน สามารถอ่านเพิ่มเติมได้ที่นี่](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

## Other things you might have missed

- We’re working closely with the new team at [Web3Go](https://www.web3go.xyz/) to [provide data anaysis tools to the SubQuery ecosystem.](https://blog.subquery.network/customer_announcements/20211110-web3go.html)
- [ฟัง Podcast ของ Sam และ James ได้ที่ช่อง Brave New Coin](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot)
- James talked to Acala’s Brett Kolodny to talk about how [Acala use SubQuery in their stack](https://www.youtube.com/watch?v=Wbxwj8K67Lw).
- Siqi, our China representative, [talked to Acala Network and Polkaworld about the latest in web3](https://www.huoxing24.com/live/24313016).
- We released modules [1](https://doc.subquery.network/academy/herocourse/module1/) to [4](https://doc.subquery.network/academy/herocourse/module4/) of our [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
- James also talked to Jacky to explore Litentry’s plans [for a future DID protocol](https://www.youtube.com/watch?v=Rqlpo9QIVyk).

As always, please [join our social channels](https://linktr.ee/subquerynetwork) (especially our [Discord](https://discord.com/invite/subquery)) to stay updated on our latest news and announcements.

James, Sam และทีม SubQuery

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
