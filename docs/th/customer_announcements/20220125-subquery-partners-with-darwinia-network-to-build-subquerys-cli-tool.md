# SubQuery ร่วมมือกับ Darwinia Network สร้าง SubQuery CLI Tool

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

ในวันนี้ เราต้องการที่จะประกาศการร่วมมือกันระหว่าง Darwinia Network และ SubQuery Network ไม่นานมานี้ Darwinai พึ่งจะชนะการประมูล parachain slot ของ Kusama และกำลังเตรียมตัวรักษา Polkadot slot ของพวกเขา ตามแผนการของ Darwinia ที่จะสร้างศูนย์รวม cross chain bridge สำหรับ Polkadot โดย Darwinia ได้ร่วมมือกับ SubQuery เพื่อที่จะสร้างแอปพลิเคชั่นจำนวนมากเพื่อมอบประสบการณ์ที่ดีที่สุดต่อผู้ใช้งานสำหรับ cross chain interactions

การเป็นพันธมิตรของเรานั้นเป็นมากกว่าการใช้ SubQuery เพื่อขับเคลื่อนแอปพลิเคชั่นในระบบนิเวศของ Darwinia โดย Darwinia ได้ทำงานอย่างใกล้ชิดกับทีม SubQuery เพื่อ [การสร้าง CLI](https://github.com/fewensa/subquery-cli) สำหรับบริการการจัดการของ SubQuery ([https://project.subquery.network](https://project.subquery.network)). คุณสามารถใช้เครื่องมือนี้ [CLI](https://github.com/fewensa/subquery-cli) เพื่อสร้างโปรเจค SubQuery และทำให้เวอร์ชั่นใหม่ใช้งานได้โดยอัตโนมัติในแต่ละ staging หรือ production slot นอกจากนี้คุณยังสามารถดึงข้อมูลรวมถึงสถานะการซิงค์โดยละเอียดและบันทึกจากโปรเจคที่ทำงานอยู่ซึ่งจะไม่เสียค่าใช้จ่ายในการใช้งานโปรเจค SubQuery Darwinia ได้ทำให้สิ่งนี้ดียิ่งขึ้นและยังสร้างตัวอย่างของ [GitHub Action workflow](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) ที่ใช้ CLI ในการอัพเดตข้อมูลขึ้นไปยัง main branch ของ [ที่เก็บข้อมูล](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) ของพวกเขา ระบบอัตโนมัติอันใหม่นี้เป็นตัวอย่างที่ยอดเยี่ยมที่บ่งบอกความสัมพันธ์ที่ใกล้ชิดระหว่าง Darwinia กับ SubQuery และ CLI นี้พร้อมที่จะนำไปใช้งานในหลายๆโปรเจคภายในระบบนิเวศระดับใหญ่ของ SubQuery’s
> เครื่องมือ SubQuery CLI ที่เราสร้างขึ้นมานั้นช่วยทำให้ขั้นตอนการพัฒนาเป็นเรื่องง่าย โดยในตอนนี้เราสามารถจัดการการเผยแพร่ในแต่ละ branche ได้ทั้งหมดและรู้สึกมั่นในว่าการเปลี่ยนแปลงของเราจะถูกปรับใช้ให้เข้ากับระบบบริการโฮสต์ของ SubQuery แบบอัตโนมัติ เราภาคภูมิใจในระบบอัตโนมัติของเราในการตรวจสอบว่าไฟล์ schema.graphql ว่ามีการเปลี่ยนแปลงหรือไม่ และถ้ามีการเปลี่ยนแปลง เราจะปรับเปลี่ยนให้เกิดฐานข้อมูลใหม่ทั้งหมด — Yalin, หนึ่งในทีมนักพัฒนาหลัก — Darwinia Network


Check out the [new CLI tool here](https://github.com/fewensa/subquery-cli) and see a [living example of it here](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

The first of many applications in Darwinia’s growing application ecosystem is the [Wormhole app](https://wormhole.darwinia.network/). Wormhole is an easy to use application that makes transferring assets between networks easy and is a key part of Darwinia’s cross chain strategy. Currently the bridge between Darwinia and Ethereum is operational. [SubQuery is used to show historic transfers and events](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) that have occurred on your Darwinia/Crab/Pangolin address related to the wormhole (e.g. the arrival of assets from another network).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

The team at Darwinia is in the process of building a new [Smart App that is a central hub](https://apps.darwinia.network/) to manage all Darwinia network interactions including governance, staking, chain exploration and more. This app uses a considerable amount of [SubQuery data to show historic data and actions](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery will be working closely with the team at Darwinia to make this the fastest and easier user experience in the entire Polkadot ecosystem.
> “We’re excited to use SubQuery to replace our existing backend servies for Wormhole, over the long term with the SubQuery Network this will make our services total decentralised and open source — its something that we are proud of!”” — Yalin, Core Developer — Darwinia Network


Additionally, Darwinia are using SubQuery to [provide the data behind](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) their [Parachain Loan Offering website](https://darwinia.network/plo_contribute). Although Crab has already won their slot on Kusama, it’s not too late to contribute to Darwinia’s campaign for a Polkadot slot. They are also taking advantage of SubQuery to index [Merkle Mountain ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) for all blocks created in their network.

Darwinia Network is using [SubQuery Projects](https://project.subquery.network/) to manage their own project and make updates as required. The indexing and query services we provide are completely managed by SubQuery and provided to the Polkadot community for free in [SubQuery’s Explorer](https://explorer.subquery.network/).

## About Darwinia Network

Darwinia Network is a decentralized cross-chain bridge network building on Substrate, which is the “Golden Gate Bridge” of the cross-chain ecology. It provides the safest general bridge solution, connecting Polkadot, Ethereum, BSC and other heterogeneous chains by cross-chain assets transfer and general remote chain call. Also, its main application areas include Defi, cross-chain NFT trading market, games, etc.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## About SubQuery Network

[SubQuery](https://subquery.network/) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications (DApps). Currently focused on Polkadot and Substrate projects, this data-as-a-service allows developers to focus on their core use case and front

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
