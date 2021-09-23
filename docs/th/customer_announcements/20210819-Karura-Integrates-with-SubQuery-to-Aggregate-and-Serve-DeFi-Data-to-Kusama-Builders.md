# Karura ผสานรวมกับ SubQuery เพื่อรวบรวมและให้บริการข้อมูล DeFi แก่ Kusama  Builders

![](https://cdn-images-1.medium.com/max/1600/0*EBj5be1webNUchfi)

ในช่วงไม่กี่สัปดาห์ที่ผ่านมา ทีม Karura และ Acala ได้เฉลิมฉลองการเปิดตัว [Karura Swap](https://apps.karura.network/) ซึ่งเป็น exchange แบบกระจายศูนย์ครั้งแรกในระบบนิเวศ Polkadot/Kusama

Today, we explore how SubQuery helped make this launch possible. วันนี้ เราสำรวจว่า SubQuery ช่วยให้การเปิดตัวนี้เป็นไปได้อย่างไร Karura ใช้ SubQuery เพื่อดึงและ query ข้อมูลจากเครือของ Karura ทำให้การ query รวดเร็วและมีประสิทธิภาพสำหรับ [แอปของ Karura](https://apps.karura.network/)

> "การใช้ Subquery ทำให้การสร้าง dapps เป็นเรื่องง่าย ไม่ต้องทำการเรียกข้อมูลที่ซับซ้อนอีกต่อไปเพื่อรับข้อมูลที่ฉันต้องการ"* --- Brett (ผู้พัฒนาที่ Acala)*

Developing dApps on Karura is now much faster with the new public SubQuery projects published by Karura. การพัฒนา dApps บน Karura ทำได้รวดเร็วยิ่งขึ้นด้วยโครงการ SubQuery สาธารณะใหม่ที่เผยแพร่โดย Karura มี [โครงการ SubQuery](https://explorer.subquery.network/subquery/AcalaNetwork/karura) ที่เปิดเผยต่อสาธารณะซึ่งชุมชน Karura สามารถ fork และสร้าง dApp ใดก็ได้ที่พวกเขาต้องการ นอกจากนี้ [Karura Dictionary](https://explorer.subquery.network/subquery/AcalaNetwork/karura-dictionary) ทำให้ [การจัดทำดัชนีเร็วขึ้นมาก](https://subquery.medium.com/subquerys-just-got-a-lot-faster-with-the-dictionary-8a7a1447574) Additionally, a [Karura Dictionary](https://explorer.subquery.network/subquery/AcalaNetwork/karura-dictionary) makes [indexing much faster](https://subquery.medium.com/subquerys-just-got-a-lot-faster-with-the-dictionary-8a7a1447574).

![](https://cdn-images-1.medium.com/max/1600/1*vvI_pI93mhe4kzSNQ2yMoQ.png)

## Karura คืออะไร?

Karura ก่อตั้งขึ้นโดย Acala Foundation เป็นเครือข่ายที่ปรับขนาดได้และเข้ากันได้กับ EVM ซึ่งปรับให้เหมาะสมสำหรับ DeFi และสร้างขึ้นบน Kusama เป็นแพลตฟอร์ม DeFi แบบ all-in-one ที่นำเสนอชุดแอปพลิเคชันทางการเงิน ได้แก่ อนุพันธ์หลักทรัพย์แบบ trustless (liquid KSM) เหรียญ stablecoin แบบหลายหลักประกันที่ได้รับการสนับสนุนจากสินทรัพย์cross-chain (kUSD) และ AMM DEX (Karura Swap) --- ทั้งหมดมีค่าธรรมเนียมไมโครแก๊สที่สามารถชำระเป็นโทเค็นใดก็ได้ ไป [ที่นี่](http://apps.karura.network) เพื่อลองใช้แอปที่ใช้ SubQuery It's an all-in-one DeFi platform that offers a suite of financial applications including: a trustless staking derivative (liquid KSM), a multi-collateralized stablecoin backed by cross-chain assets (kUSD), and an AMM DEX (Karura Swap) --- all with micro gas fees that can be paid in any token. Go [here](http://apps.karura.network) to try the live app that uses SubQuery.

![](https://cdn-images-1.medium.com/max/1600/0*g174RcFJwJcw2ITS)

Karura also provides an ethical and sustainable token distribution model as well as an on-chain Karura Treasury, both of which support its community and longevity. Karura was the first parachain to win a parachain slot auction on Kusama, gathering a crowdloan upwards of 500,000 KSM ($100M USD) from its community. Because Karura leverages the novel Acala EVM, which enables Ethereum compatibility with unlimited Substrate* functionality, the network is primed to support the deployment of leading DeFi projects who aim to expand their services beyond Ethereum.

*[Substrate](http://substrate.dev/) *เป็นเฟรมเวิร์กการสร้างบล็อคเชนสำหรับการสร้างบน Polkadot และ Kusama*

[อ่านเพิ่มเติมในเบื้องลึกของ Karura ที่นี่](https://medium.com/acalanetwork/countdown-to-karura-a-deep-dive-on-the-defi-hub-of-kusama-410066fc1e1f)

## Open Tools สำหรับผู้สร้าง Karura DApp

It's now up to the Karura community to build the first community dApp in the DeFi hub of Kusama. ตอนนี้มันขึ้นอยู่กับชุมชน Karura ที่จะสร้าง dApp ชุมชนแรกในฮับ DeFi ของ Kusama ด้านล่างนี้เป็นตัวอย่างง่ายๆ ของวิธีที่ Karura สามารถใช้ SubQuery เพื่อค้นหาและเรียกข้อมูลภายนอกที่ผ่านมา (และการโอนภายใน) สำหรับบัญชีใดๆ ใน Karura --- คุณจะเห็นว่าสิ่งนี้ทำแบบออนไลน์อย่างสมบูรณ์ใน [SubQuery explorer](https://explorer.subquery.network/subquery/AcalaNetwork/karura).

![](https://cdn-images-1.medium.com/max/1600/0*t6stH0LeQC8M5fSp)

## เกี่ยวกับ SubQuery

[SubQuery](https://subquery.network/) คือชั้นการรวมข้อมูลที่จะทำงานระหว่างบล็อคเชนชั้นที่ 1 (Karura) และ dApps SubQuery ช่วยให้นักพัฒนา dApp สามารถสำรวจและแปลงข้อมูลบนเครือข่ายเพื่อสร้าง dApps ที่ใช้งานง่ายได้เร็วขึ้น โดยไม่จำเป็นต้องกังวลเกี่ยวกับการสร้างหรือจัดการ back-enf แบบกำหนดเองสำหรับการประมวลผลข้อมูล [เริ่มต้นเลย](https://doc.subquery.network/) SubQuery allows dApp developers to explore and transform on-chain data to build intuitive dApps faster, without needing to worry about building or managing custom backends for data processing. [Get started now](https://doc.subquery.network/).

[Website](https://subquery.network/) | [Documentation](https://doc.subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

## เกี่ยวกับ Karura

[Karura](http://acala.network/karura) is the all-in-one DeFi hub of Kusama. Founded by the Acala Foundation, Karura is a scalable, EVM-compatible network optimized for DeFi. The platform offers a suite of financial applications including: a trustless staking derivative (liquid KSM), a multi-collateralized stablecoin backed by cross-chain assets (kUSD), and Karura Swap, an AMM DEX --- all with micro gas fees that can be paid in any token. Karura is a blockchain platform custom-built for DeFi and powered by KAR, which enables settlement for transactions and smart contract execution, incentivizes node operators, and empowers its holders to participate in governance.

[Linktree](http://linktr.ee/karuranetwork) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc) | [Discord](https://discord.gg/vdbFVCH) | [Website](http://acala.network/karura) | [Twitter](https://twitter.com/KaruraNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [YouTube](http://youtube.com/c/acalanetwork)