# SubQuery는 Darwinia Network와 협력하여 SubQuery의 CLI 도구를 구축합니다.

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

오늘 우리는 Darwinia Network와 SubQuery Network 간의 파트너십을 발표하고자 합니다. Darwinia는 최근 Kusama parachain 옥톤 슬롯을 획득했으며 Polkadot 슬롯을 확보하기 위해 준비하고 있습니다. Polkadot용 교차 체인 브리지 허브를 구축하기 위한 Darwinia 로드맵의 일환으로 Darwinia는 SubQuery와 제휴하여 교차 체인 상호 작용을 위한 최고의 사용자 경험을 제공하는 데 필요한 과다한 애플리케이션을 구축했습니다.

우리의 파트너십은 SubQuery를 사용하여 Darwinia의 애플리케이션 에코시스템을 강화하는 것보다 더 깊어지며 Darwinia는 SubQuery 관리 서비스([https://project.subquery.network](https://project.subquery.network))를 위한 [CLI 도구를 구축](https://github.com/fewensa/subquery-cli)하기 위해 SubQuery 팀과 긴밀하게 협력해 왔습니다. 이 [CLI](https://github.com/fewensa/subquery-cli)를 사용하여 SubQuery 프로젝트를 만들고 스테이징 또는 프로덕션 슬롯에 새 버전을 자동으로 배포할 수 있습니다. 또한 SubQuery 프로젝트에서 무료로 호스팅되는 실행 중인 프로젝트에서 자세한 동기화 상태 및 로그를 포함한 정보를 검색할 수 있습니다. Darwinia는 이를 더욱 발전시켜 [리포지토리](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)의 기본 분기에 푸시할 때 CLI 도구를 사용하여 이 작업을 수행하는 예제 [GitHub Action 워크플로](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)를 구축했습니다. 이 새로운 자동화는 Darwinia와 SubQuery 간의 긴밀한 관계를 보여주는 훌륭한 예이며 CLI 도구는 SubQuery의 대규모 에코시스템 내에서 이미 다른 많은 프로젝트에서 사용하고 있습니다.
> “저희가 구축한 SubQuery CLI 도구 덕분에 개발 파이프라인이 정말 쉬워졌습니다. 이제 브랜치의 릴리스를 완전히 관리할 수 있고 변경 사항이 SubQuery의 호스팅 서비스에 자동으로 배포될 것이라는 확신을 가질 수 있습니다. 우리는 schema.graphql 파일이 변경되었는지 확인하는 자동화된 프로세스를 특히 자랑스럽게 생각하며, 변경된 경우 새로운 깨끗한 데이터베이스를 재배포할 것입니다." — Yalin, 핵심 개발자 — Darwinia Network


여기에서 [새로운 CLI 도구](https://github.com/fewensa/subquery-cli)를 확인하고 [여기에서 실제 예제](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)를 확인하십시오.

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
