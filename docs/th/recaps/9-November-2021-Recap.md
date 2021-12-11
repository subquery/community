# บทสรุปของเดือนพฤศจิกายน 2021

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_ในเดือนนี้มีข้อมูลเกี่ยวกับการดำเนินงานต่างๆ ดังนี้_**

ยินดีต้อนรับเข้าสู่การอัปเดตรายเดือนล่าสุดจาก SubQuery มีการอัปเดตที่เต็มไปด้วยสิ่งที่น่าตื่นเต้นที่ได้เกิดขึ้นในชุมชนของเรา

# เครือข่าย SubQuery

## SubQuery เปิดตัวบนเครือข่าย Acala

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) ในการพูดคุยของชุมชน เราได้ประกาศว่า SubQuery และโทเค็น SQT มีเป้าหมายที่จะเป็นแอปพลิเคชันภายนอกตัวแรก (external application) และโทเค็นจะเปิดตัวบนเครือข่าย Acala

SubQuery พิจารณาพันธมิตรที่มากมายจากนั้นจึงเลือก Acala ซึ่ง Acala เป็นโปรโตคอล DeFi ชั้นนำที่สร้างขึ้นบนเครือข่าย Polkadot เหตุผลหลักสามประการที่นำไปสู่การตัดสินใจเปิดตัวกับ Acala ได้แก่ การเข้าถึงของชุมชน หรือ community, โดเมน/ความโดดเด่นด้านเทคนิค และความสัมพันธ์ที่แน่นแฟ้นของเรา

James ได้พูดคุยกับ Bette Chen ทีมของ Acala เกี่ยวกับการตัดสินใจและการเป็นพันธมิตร รวมถึงไปถึงสาเหตุที่ Acala และ SubQuery เป็นพันธมิตรที่ทำงานเข้ากันได้อย่างยอดเยี่ยม

[อ่านรายละเอียดเพิ่มเติมได้ที่นี่](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

## การพัฒนาที่สำคัญในเครือข่าย SubQuery

แม้ว่าเรากำลังยุ่งอยู่กับการทำงานอย่างหนักในเครือข่าย SubQuery และยังคงเร่งดำเนินการเพื่อเปิดตัวเครือข่ายทดสอบของเราในไตรมาสแรกของปี 2022 เรามีความคืบหน้าอย่างมาก เกี่ยวกับ smart contract และการสร้างโมเดลเศรษฐกิจของโทเค็น (token economic model) อย่างละเอียดรอบคอบ คาดว่าเร็ว ๆ นี้จะเห็นเราอธิบายรายละเอียดเกี่ยวกับเรื่องนี้มากขึ้น

# การพัฒนาผลิตภัณฑ์หลัก (Core Product Development)

## การบริการด้าน Scale Hosted

โปรเจ็กต์ SubQuery มีการเติบโตอย่างรวดเร็วในช่วงเดือนที่ผ่านมาเนื่องจาก  [ผู้เข้าร่วม academy จำนวนหลายพันคน](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html) ได้สร้างโปรเจ็กต์เพิ่มเติมในบริการโฮสต์ของเรา หรือ hosted service  ([project.subquery.network](https://project.subquery.network/))  ในพื้นที่ไม่กี่สัปดาห์ที่ผ่านมา

เราได้ก้าวข้าม milestone มีโปรเจ็กต์มากกว่า 2,000 ที่ได้ deployed กับบริการโฮสต์ของเรา (hosted service) และด้วยเหตุนี้ scale ของ hosted service จึงเป็นเรื่องสำคัญ We now offer our enterprise customers dedicated resources to improve performance and reliability.

If you would like to upgrade your SubQuery project to receive dedicated resourcing, contact us at  [sales@subquery.network](mailto:sales@subquery.network).

## Supporting External Chain Type Files in our Project Manifest

In November we launched  [**version 0.2.0**](https://doc.subquery.network/create/manifest/)  of our project manifest file (`project.yaml`). This new version provides developers with various improvements that have been requested by customers.

Most importantly, you can now reference a chain type definition file that has all the custom types included when you’re indexing a custom substrate chain. This quickly allows you to connect a new SubQuery project to any substrate-based chain, including all of Kusama’s parachains.

[You can read more about this new feature here](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

## Moonriver EVM Support

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

As previously announced we have implemented support for the Moonbeam and Moonriver networks in SubQuery. In November we followed up with all the developer resources that you need to get started.  [You can read the instructions here](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

Additionally, Scott was able to present this entire workflow to the  [Moonbuilders workshop](https://www.crowdcast.io/e/moonbuilders-ws/10)  for everyone to watch. Perfect timing for the lead up to the Gitcoin Grants that we are sponsoring (more on that below).

# ชุมชน (Community)

## Gitcoin Hackathon

Hot on the heels of the overwhelming success of the SubQuery Academy’s  _Hero Course_, we were proud to announce that we would be providing our first hackathon opportunity for all developers via  [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery)  starting on December 1st.

SubQuery has proposed 5 bounties with a total prize pool of up to $34,000:

-   [Create a unified block explorer that combines Substrate and EVM insights from Moonbeam and Astar into one easy to use application](https://gitcoin.co/issue/subquery/grants/1)  — US$12,000 [Sponsored by Moonbeam and Astar]
-   [Work with SubQuery and the DeFi hub at Karura/Acala to build a dashboard that’s inspired by Zapper.fi or defisaver.com](https://gitcoin.co/issue/subquery/grants/2)  — US$8,000 [Sponsored by Acala]
-   [Create a staking dashboard that shows the best staking opportunities across Polkadot and its various parachains](https://gitcoin.co/issue/subquery/grants/3)  — US$3,000
-   [Build a marketplace explorer for all RMRK protocol based NFTs](https://gitcoin.co/issue/subquery/grants/4)  — US$2,000
-   [Extend the @subql/node service to index data from another layer 1 chain](https://gitcoin.co/issue/subquery/grants/5)  — US$12,000

[You can read more about these bounties here.](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

## Analysis into the Polkadot Crowdloans

SubQuery is Polkadot’s leading data indexing service, and over the past week, we’ve been powering millions of daily requests to the majority of the crowdloan dashboards, contribution apps, and analytics websites. Teams like  [**SubVis**](https://www.subvis.io/),  [**Parallel Finance**](https://parallel.fi/), and  [**DotMarketCap**](https://dotmarketcap.com/)  rely on SubQuery to provide real-time data on the crowdloans and other on-chain data directly to their websites and apps.

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

We recently took a deep dive into the Polkadot crowdloans (specifically the title fight between Acala and Moonbeam).  [You should read it here if you haven’t already](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

# สิ่งอื่นที่คุณอาจพลาดไป

-   We’re working closely with the new team at  [Web3Go](https://www.web3go.xyz/)  to  [provide data anaysis tools to the SubQuery ecosystem.](https://blog.subquery.network/customer_announcements/20211110-web3go.html)
-   [Listen to Sam and James on Brave New Coin’s podcast](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot).
-   James talked to Acala’s Brett Kolodny to talk about how  [Acala use SubQuery in their stack](https://www.youtube.com/watch?v=Wbxwj8K67Lw).
-   Siqi, our China representative,  [talked to Acala Network and Polkaworld about the latest in web3](https://www.huoxing24.com/live/24313016).
-   We released modules  [1](https://doc.subquery.network/academy/herocourse/module1/)  to  [4](https://doc.subquery.network/academy/herocourse/module4/)  of our  [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   James also talked to Jacky to explore Litentry’s plans  [for a future DID protocol](https://www.youtube.com/watch?v=Rqlpo9QIVyk).

As always, please  [join our social channels](https://linktr.ee/subquerynetwork)  (especially our  [Discord](https://discord.com/invite/subquery)) to stay updated on our latest news and announcements.

James, Sam และทีม SubQuery

[Linktree](https://linktr.ee/subquerynetwork)  |  [เว็ปไซต์](https://subquery.network/)  |  [ดิสคอร์ต](https://discord.com/invite/78zg8aBSMG)  |  [เทเลแกรม](https://t.me/subquerynetwork)  |  [ทวิตเตอร์](https://twitter.com/subquerynetwork)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [ยูทูป](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
