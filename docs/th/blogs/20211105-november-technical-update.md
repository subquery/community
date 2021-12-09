# อัพเดทระบบเทคนิคประจำเดือนพฤษจิกายนของ Subquery: การอัพเดท EVM และ Manifests

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**อ่านเพิ่มเติมเกี่ยวกับระบบทางเทคนิคโดยละเอียดใน release ล่าสุดของ SubQuery**

# สนับสนุนชนิดบล็อคเชนนอกสำหรับไฟล์ Manifest ของโปรเจค

วันนี้คือวันที่เราปล่อย [เวอร์ชั่น 0.2.0](https://doc.subquery.network/create/manifest/) ของรูปแบบไฟล์ manifest ของโปรเจค (`project.yaml`) โดนในเวอร์ชั่นนี้จะปรับปรุงหลายสิ่งที่ได้รับการร้องขอมาจากกลุ่มผู้ใช้งานและยังเป็นประโยชน์แก่เหล่าผู้พัฒนา

สิ่งที่สำคัญทีสุดคือ คุณสามารถอ้างอิงชนิดของบล็อคเชนในรูปแบบของการนิยาม type ในไฟล์ที่มีการกำหนด type ทั้งหมด โดยไฟล์นี้จะถูกรวมไว้เมื่อคุณได้ทำการ index บนบล็อคเชนที่คุณ substrate เลือก สิ่งนี้จะทำให้คุณสามารถเชื่อมต่อโปรเจค SubQuery ไปหาโปรเจคบน substrate บล็อคเชนได้อย่างรวดเร็ว รวมทั้งบน Kusama parachain ระบบนี้จะเป็นมาตรฐานบนชนิดของบล็อคเชนที่จะประกาศ type เฉพาะ ที่จะถูกรองรับโดยโดยบล็อคเชนนี้ ในรูปแบบของ `.json` หรือ `.yaml`

ด้วยวิธีนี้ คุณจะไม่ต้องทำการคัดลองและจัดการชนิดของบล็อคเชนด้วยการประกาศชนิดของบล็อคเชนในไฟล์ manifest และยังทำให้คุณสามารถ clone [ไฟล์ของ type บนบล็อคเชน ที่สร้างไว้ใน repositories ดังเช่น PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec)

[คณสามารถอ่านเกี่ยวกับไฟล์ manifest แบบใหม่ได้ รวมทั้งวิธีที่คุณสามารถโยกย้ายโปรเจคของคุณไปเป็นเวอร์ชั่นใหม่ ในเอกสารที่เราได้อัพเดทแล้ว](https://doc.subquery.network/create/manifest/)

# รองรับ EVM ของ Moonbeam

สัปดาห์ที่แล้วเราได้ [ประกาศว่าเราจะทำงานร่วมกับ Moonbeam เพื่อที่จะนำระบบ EVM ที่สมบูรณ์ และการ index substrate เพื่อรองรับ Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff)

วันนี้เราจะมาตามเรื่องของประกาศดังกล่าวพร้อมกับทรัพยากรผู้พัฒนาที่คุณต้องใช้เพื่อที่จะเริ่มต้น

ขณะนี้ ไม่มีเครื่องมีเปิด (open-source) ที่จะช่วยให้นักพัฒนาสามารถรวมรวมและดึงข้อมูลจากทั้ง Ethereum และ Polkadot/Kusama ได้อย่างยืดหยุ่น ด้วยข้อจำกัดนี้จะสามารถทำให้ dApps ภายใน Moonriver จะถูกรวมอยู่ภายในระดับของ smart contract และจะจำกัดศักยภาพของพวกเขาต่อผู้ใช้งานบนทั้งสองบล็อคเชน การร่วมงานกับ Moonbeam จะทำให้ระบบการทำ index ข้อมูลทั้งหมดบนบล็อคเชนของ Moonriver นั้นสมบูรณ์ และยังเป็นประโยชน์กับการเติบโตของแอพลิเคชั่นต่างๆบล Moonriver

**SubQuery is going to be a guest on the next Moonbuilders Workshop on Wednesday December 1st,** [**register for it here**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Firstly, familiarize yourself with the updated documentation on how to connect to and index data from Moonbeam, Moonbase Alpha, and Moonriver.](https://doc.subquery.network/create/moonbeam/) The process to index Moonbeam data is only two steps:

## Step 1: Add the Moonbeam Custom Data Source

We have created a data processor specifically made to work with Moonbeam’s implementation of [Frontier](https://github.com/paritytech/frontier). It allows you to reference specific ABI resources used by the processor to parse arguments and the smart contract address that the events is from or the call is made to. [You can read more here](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery introduces more advanced filters than other indexers, allowing filtering of non-contract transactions, transaction senders, contracts and indexed log arguments. This allows developers to build a wide variety of projects that cater to their specific data needs.

## Step 2: Index Moonbeam Data

Just like a normal SubQuery project, you use a mapping function to transform off chain data to the GraphQL entities that you define, the difference is that instead of a `SubstrateEvent` or `SubstrateExtrinsic`, your mapping function will receive a `MoonbeamCall` or `MoonbeamEvent` which are based on Ether's [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) or [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) type. [You can read more about these here](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Read the full documentation on this process here](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Example Project

There is a complete example project that indexes eth `transfer` events and `approve` smart contract calls. The code for this example project is [here on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) or accessible via the [live SubQuery project on SubQuery Explorer here](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

The bulk of the changes happen in the Manifest file (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/moonbeam/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/moonbeam/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Note that SubQuery introduces more advanced filters than other indexers for Moonbeam EVM and these improvements should significantly benefit developers.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

If you are familiar with how Substrate based SubQuery project are made, you’ll notice how similar the mapping functions are for the new Moonriver support. Each mapping function receives a `MoonbeamCall` or `MoonbeamEvent` and processes them just like any other SubQuery project.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/moonbeam) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Clone the example project on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

As you can see, creating a Moonriver or Moonbase Alpha project that indexes both Substrate and EVM data in a single project is extremely simple and largely similar. You can use SubQuery’s advanced scaffolding tools to speed up your dApp development and take advantage or richer indexing for you data to build more intuitive dApps. We can’t wait to see what you build!

## About SubQuery

SubQuery is a data aggregation layer that operates between the layer-1 blockchains (such as Moonriver and Polkadot) and DApps. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam is an Ethereum-compatible smart contract platform on the Polkadot network that makes it easy to build natively interoperable applications. This Ethereum compatibility allows developers to deploy existing Solidity smart contracts and DApp frontends to Moonbeam with minimal changes. As a parachain on the Polkadot network, Moonbeam will benefit from the shared security of the Polkadot relay chain and integrations with other chains that are connected to Polkadot. Currently in active development by PureStake, Moonbeam is expected to reach MainNet by Q4 2021. Learn more: [https://moonbeam.network/](https://moonbeam.network/).
