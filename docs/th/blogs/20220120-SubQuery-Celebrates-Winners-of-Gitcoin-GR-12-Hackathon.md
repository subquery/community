# SubQuery ขอร่วมแสดงความยินดีกับผู้ชนะการแข่งขันในกิจกรรม Gitcoin GR 12 Hackathon

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery เป็นโซลูชันในการจัดเก็บและดึงข้อมูลชั้นนำบนเครือข่าย Polkadot มีความยินดีที่จะประกาศผู้ชนะ[กิจกรรมการแข่งขัน Gitcoin GR 12 Hackathon ที่ได้จัดไปครั้งล่าสุด](https://gitcoin.co/hackathon/gr12?org=subquery) ซึ่ง Gitcoin นั้น ถือเป็นที่ยอมรับว่าเป็นหนึ่งในคอมมูนิตี้ของนักพัฒนาบล็อกเชนที่โดดเด่น ด้วยการมุ่งเน้นและให้ความสำคัญกับการสร้างคอมมูนิตี้และแอปพลิเคชันสำหรับ Web3 [โดยการร่วมมือระหว่าง SubQuery กับ Gitcoin ในเดือนธันวาคมที่ผ่านมานี้](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) เพื่อเป็นการสนับสนุนกิจกรรมการแข่งขันทั้ง 5 กิจกรรม ซึ่งมีมูลค่าถึง 37,000 ดอลลาร์สหรัฐ (ถือเป็นเงินรางวัลรวมที่เยอะที่สุดในกิจกรรมการแข่งขัน) เพื่อเป็นการเชิญชวนให้เหล่านักพัฒนาได้มาสร้างเครื่องมือ, Dashboard รวมไปถึงขยายการใช้งาน SubQuery ไปยังบล็อกเชน Layer-1 อื่นๆ

โดยการแข่งขัน Hackathon ได้มีการจัดขึ้นช่วงวันที่ 1-16 ธันวาคม 2021 ที่ผ่านมา ด้วยการร่วมสนับสนุนและสมทบเงินรางวัลมากมายจากโปรเจกต์บล็อกเชนชั้นนำต่างๆ อาทิ Moonbeam, Astar และ Acala ซึ่งรางวัลจะถูกมอบให้กับผู้เข้าแข่งขันที่ทำโปรเจกต์ได้สำเร็จตามมาตรฐานที่ได้มีการตั้งไว้ รวมไปถึงผู้เข้าแข่งขันที่นำเสนอไอเดียได้สร้างสรรค์มากที่สุด หรือใครก็ตามที่ได้ทำการแก้ปัญหาส่วนต่างๆ เพื่อปรับปรุงระบบ Core ของ SubQuery SDK ให้ดียิ่งขึ้น โดยรายละเอียดแต่ละกิจกรรมสามารถสรุปสั้น ๆ ได้ตามด้านล่างนี้:

- [สร้าง Block explorer แบบรวมศูนย์ที่รวมข้อมูลเชิงลึกต่างๆ ของ Substrate และ EVM จาก Moonbeam และ Astar เข้ามาไว้ด้วยกันเพื่อให้ง่ายต่อการใช้งานแอปพลิเคชัน](https://gitcoin.co/issue/subquery/grants/1) — 12,000 ดอลลาร์สหรัฐ [สนับสนุนโดย Moonbeam และ Astar]
- [สร้างแดชบอร์ดที่เป็นศูนย์กลาง DeFi ที่มีแรงบันดาลใจมาจาก Zapper.fi หรือ defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — 8,000 ดอลลาร์สหรัฐ [สนับสนุนโดย Acala]
- [สร้างแดชบอร์ดแสดงกระบวนการตรวจสอบความถูกต้องของธุรกรรมสำหรับเครือข่าย (Staking) ที่แสดงทางเลือกการ Stake ที่ดีที่สุดทั่วทั้งเครือข่าย Polkadot และบน Parachain ต่างๆ](https://gitcoin.co/issue/subquery/grants/3) — 3,000 ดอลลาร์สหรัฐ
- [สร้าง Marketplace explorer สำหรับ NFT ที่ใช้โปรโตคอล RMRK ทั้งหมด](https://gitcoin.co/issue/subquery/grants/4) — 2,000 ดอลลาร์สหรัฐ
- [ขยายบริการ @subql/node เพื่อจัดทำดัชนีข้อมูล (Index) จากบล็อกเชนหนึ่งไปยังอีกบล็อกเชนของ layer 1](https://gitcoin.co/issue/subquery/grants/5) — 12,000 ดอลลาร์สหรัฐ

## Block Explorer ที่รวม EVM และ Substrate เข้าด้วยกัน

ระบบนิเวศ Polkadot/Kusama ประกอบไปด้วยบล็อกเชนต่างๆ (เรียกว่า พาราเชน) ซึ่งถูกสร้างขึ้นโดยใช้ Substrate ที่ใช้ Substrate API อย่างไรก็ตาม บางพาราเชน อย่างเช่น Moonbeam และ Astar ที่มีความสามารถในการใช้งานร่วมกันกับ Ethereum ได้อย่างราบลื่นนั้น กลับมีองค์ประกอบอย่าง EVM ที่ทำงานเข้ากันได้อย่างสมบูรณ์ ซึ่งการมีความสามารถในการมองเห็นข้อมูลทั้งใน Substrate และ EVM ได้อย่างพร้อมกัน ยังถือเป็นความท้าทายในปัจจุบัน ส่งผลให้เกิดประสบการณ์สองอย่างที่แยกจากกันภายใน Moonbeam และ Moonriver โดยคุณต้องเลือกฝั่งใดฝั่งหนึ่ง ระหว่างฝั่ง Substrate (เช่น Subscan) กับฝั่ง Evm (เช่น Moonscan & Blockscout)

ซึ่งความท้าทายนี้ได้วาดภาพเอาไว้เพื่อที่จะสื่อถึงโอกาสอันยิ่งใหญ่ในการที่จะสร้างพื้นที่ที่ทำให้เห็นภาพรวมทั้งหมดของธุรกรรมหรือสิ่งที่เกิดขึ้นภายในบัญชีนั้นๆ ยกตัวอย่างเช่น มีความต้องการที่จะดูทั้งกระบวนการตรวจสอบความถูกต้องของธุรกรรม (Staking), การดำเนินการต่างๆ ที่เกิดขึ้น รวมไปถึงการถ่ายโอน ERC20 ในหน้าแสดงผลหน้าเดียว (User Interface) โดยสิ่งนี้จะเป็นแอปพลิเคชันที่จะถูกใช้งานอย่างเป็นประจำจากคอมมูนิตี้ขนาดใหญ่ทั้งภายใน Moonbeam, Astar และพาราเชนอื่นๆ อีกมากมายที่สามารถเข้ากันได้กับ EVM ซึ่งกำลังจะมีการเปิดตัว

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

ผู้ที่ชนะใน[กิจกรรมการแข่งขันนี้](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) คือคุณ @bizzyvinci [ซึ่งได้สร้าง frontend explorer ที่เผยแพร่อยู่บน Heroku](https://moonriver-explorer.herokuapp.com/) โดยจริงๆ แล้วขอบเขตของเนื้องานที่จะต้องทำในกิจกรรมนี้มันยิ่งใหญ่มาก จึงไม่ใช่เรื่องน่าแปลกใจหากมันอาจจะยังเสร็จไม่สมบูรณ์ 100% แต่เราก็รู้สึกตื่นเต้นที่จะสนับสนุนความก้าวหน้าของนวัตกรรมที่จะมาพลิกเกมนี้และช่วยขยายไปยัง EVM Chain อื่นๆ

โดยคุณ @bizzyvinci ได้กล่าวว่า: “ผมได้สร้าง [Moonriver Explorer](https://moonriver-explorer.herokuapp.com/) และมันถือเป็นประสบการณ์ที่สุดยอดมาก ขั้นตอนแรกคือการเรียนรู้เกี่ยวกับ SubQuery และพวกเขามีเอกสารข้อมูลต่างๆ ที่ยอดเยี่ยม ซึ่งมาพร้อมกับเทมเพลตที่จัดเก็บต่างๆ โดยเอกสารนี้จะครอบคลุมไปถึงทุกอย่างที่จะต้องใช้ตั้งแต่เริ่มต้นไปจนถึงการชี้แจ้งรายละเอียดต่างๆ ในแต่ละด้านเป็นอย่างดี เช่น ไฟล์ Manifest, graphql schema และอื่นๆ เป็นต้น”

## Karura/Acala DeFi Dashboard

Acala and Karura เป็นตัวแทนของวิสัยทัศน์ที่ยิ่งใหญ่สำหรับอนาคตของ DeFi ฉะนั้นมันมีโอกาสมากที่จะสร้างเครื่องมือที่มีค่าสำหรับระบบนิเวศ This challenge required developers to create DeFi tools for the Karura/Acala community that are inspired by the likes of [Zapper.fi](http://zapper.fi/) and [defisaver.com](http://defisaver.com/) leveraging SubQuery’s data indexing services.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/2/100027176) was Web3Go who built a really nice summary of [Acala’s Collateral Debt Positions (CDPs)](https://web3go.xyz/#/CDPDetail). For users to mint kUSD stablecoins on Karura, they must first deposit tokens of one of the accepted collateral assets (e.g. KSM). Once the user has done so, the min collateral ratio parameter determines the minimum amount of the collateral needed for a user to mint kUSD. If the market price of the CDP’s collateral asset drops low enough, the CDP may be considered “unsafe.”

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Web3Go’s interface cleanly lists all CDP positions, their ratio and their safe status. For each position it also provides information about the history of the position and easily allows others to monitor the financial instrument. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Polkadot Staking Dashboard

Staking is a key way to put your DOT and KSM tokens to use, but currently the UX for staking is difficult to understand and results in most users making uneducated choices.

This challenge’s objective was to combine on-chain data and an intuitive user experience, to help users understand the best estimated staking yield, compare the historical performance of validators, and show users what their return on investment might be.

Ashik built PolkStakes, a [Polkadot validator ranking website](https://polkstakes.vercel.app/) that fetches all validators and shows a cleanly organised list of validators in Polkadot with PolkStake’s own rating (based on previous era performance, commissions, payout, and staking rewards etc). It’s a clean and simple UI that really impressed us.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_Subquery ลดความพยายามในการทำดัชนีข้อมูล on-chain ด้วยมือ เนื่องจากมันให้ Graphql endpoint เราจึงสามารถเข้าถึงข้อมูลได้โดยง่าย มันลดความพยายามในการบำรุงรักษาหลังบ้านและฐานข้อมูล ตอนนี้การรวบรวมข้อมูลสำหรับการคำนวณอันดับ Polkstakes เสร็จแล้วใน UI สิ่งนี้ต้องถูกย้ายไปสู่ SubQuery Also, better visualization has to be done for indexed data and more accurate estimated yield prediction has to be added._” — Ashik from Polkdata

The excellent SubVis team also built a [beautiful Polkadot staking dashboard](https://polkadot-staking-dashboard.vercel.app/) that shows total staking statistics over time and the validator performance in one place. The new staking features join the existing auction and crowdloan pages that SubVis are well known for.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Finally, Web3Go put in another excellent entry with detailed staking statistics on Moonriver. They provide information even about the delegators for each collator, the historic rewards provided by each collator, and even the actions that collators take. They provide the additional benefits of being able to show staking history for your own wallet address.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## RMRK NFT Marketplace Explorer

RMRK is an advanced protocol of NFT legos making NFTs that are so much more than just a jpeg. The team at RMRK are bringing new standards of NFTs to the DOT ecosystem, and leading the way in building the next generation.

This challenge called for the creation of a detailed dashboard that tracks the evolution of all RMRKs (potentially focusing on [Kanarias](https://kanaria.rmrk.app/)), including transfers, emote history, and more across RMRK2. This dashboard had to use a RMRK2 focused SubQuery project.

The winner of [this challenge](https://gitcoin.co/issue/subquery/grants/4/100027174) was another excellent dashboard from Web3Go called the [NFT Garden](https://web3go.xyz/#/NFTProfiler). It includes in depth details about each NFT collection, such as average prices, volumes, price ranges, and all transactions for each single item. Additionally, there are some interesting visualisations on all the traits within NFTs.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Since the inception of Web3Go, we have been using SubQuery as the underlying architecture for data indexing. The development kit provided by SubQuery has proven to be very suitable for our team to quickly develop, deploy and upgrade projects, which is also the key to our good results on the Gitcoin Hackathon. In the next step, we will use Subquery to develop dashboards for all projects on the Polkadot & Kusama parachains, which will involve Defi, NFT, and Tokens!_” says Hao Ding from Web3Go.

## Extend SubQuery to another Layer-1 Blockchain

SubQuery is native to Polkadot, it’s our home and we’ve worked hard to build relationships in this ecosystem. In spite of this we also believe in a multi chain future, as we know that there are going to be many different blockchains working together to solve different problems. Our long term plan is to take SubQuery and to adapt it to work for other blockchains that don’t have a current indexing solution to help developers build new dApps.

The winner of [this US$12,000 challenge](https://gitcoin.co/issue/subquery/grants/5/100027175) was Naveen who extended SubQuery to index the Terra blockchain. This was implemented by creating a fork that extends the node package of the official subql implementation to index Terra. Naveen is continuing to work on this and you can expect news soon about SubQuery’s plans for support of other layer 1 chains outside of Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_I have been studying a bunch of indexers in the past few months and went as far as building an indexer from scratch. That might be the reason why SubQuery caught my attention in the Gitcoin GR12 Hackathon. I took up the task of extending SubQuery to index Terra. I did not believe that I could pull this off in 15 days. But, SubQuery was architected in such a magnificent manner that it allowed me to create a mental picture of what is happening under the hood very quickly. I hacked together a working solution just in time and I am currently working with SubQuery to merge the Terra indexer into the subql package. In the foreseeable future, I will be continuing to work with SubQuery to maintain and scale the project and possibly build indexers for several other layer 1 chains_” said Naveen.

[Sam Zou](https://twitter.com/zoujialiu), the CEO and Founder of SubQuery commented, “_SubQuery is delighted with the results of the Gitcoin GR12 Hackathon. Our mission relies on having a network of developers who are empowered to create and innovate within the Substrate/Polkadot ecosystem. This partnership provided opportunities for motivated developers around the world to build the applications of tomorrow. We are excited to nurture the winners of the challenges to develop their ideas even further_”

Following on from this successful Hackathon, SubQuery would like to encourage developers who would like to learn more about how to build applications with SubQuery to [register for our free online “Hero Course”, or apply for our recently announced Grants Programme](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## About SubQuery

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing. The upcoming SubQuery Network will decentralize and tokenize the ecosystem to allow everyone to participate in the web3 data revolution.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
