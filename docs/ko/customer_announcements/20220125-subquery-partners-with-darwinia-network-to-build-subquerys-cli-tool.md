# SubQuery는 Darwinia Network와 협력하여 SubQuery의 CLI 도구를 구축합니다.

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

오늘 우리는 Darwinia Network와 SubQuery Network 간의 파트너십을 발표하고자 합니다. Darwinia는 최근 Kusama parachain 옥톤 슬롯을 획득했으며 Polkadot 슬롯을 확보하기 위해 준비하고 있습니다. Polkadot용 교차 체인 브리지 허브를 구축하기 위한 Darwinia 로드맵의 일환으로 Darwinia는 SubQuery와 제휴하여 교차 체인 상호 작용을 위한 최고의 사용자 경험을 제공하는 데 필요한 과다한 애플리케이션을 구축했습니다.

우리의 파트너십은 SubQuery를 사용하여 Darwinia의 애플리케이션 에코시스템을 강화하는 것보다 더 깊어지며 Darwinia는 SubQuery 관리 서비스([https://project.subquery.network](https://project.subquery.network))를 위한 [CLI 도구를 구축](https://github.com/fewensa/subquery-cli)하기 위해 SubQuery 팀과 긴밀하게 협력해 왔습니다. 이 [CLI](https://github.com/fewensa/subquery-cli)를 사용하여 SubQuery 프로젝트를 만들고 스테이징 또는 프로덕션 슬롯에 새 버전을 자동으로 배포할 수 있습니다. 또한 SubQuery 프로젝트에서 무료로 호스팅되는 실행 중인 프로젝트에서 자세한 동기화 상태 및 로그를 포함한 정보를 검색할 수 있습니다. Darwinia는 이를 더욱 발전시켜 [리포지토리](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)의 기본 분기에 푸시할 때 CLI 도구를 사용하여 이 작업을 수행하는 예제 [GitHub Action 워크플로](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)를 구축했습니다. 이 새로운 자동화는 Darwinia와 SubQuery 간의 긴밀한 관계를 보여주는 훌륭한 예이며 CLI 도구는 SubQuery의 대규모 에코시스템 내에서 이미 다른 많은 프로젝트에서 사용하고 있습니다.
> “저희가 구축한 SubQuery CLI 도구 덕분에 개발 파이프라인이 정말 쉬워졌습니다. 이제 브랜치의 릴리스를 완전히 관리할 수 있고 변경 사항이 SubQuery의 호스팅 서비스에 자동으로 배포될 것이라는 확신을 가질 수 있습니다. 우리는 schema.graphql 파일이 변경되었는지 확인하는 자동화된 프로세스를 특히 자랑스럽게 생각하며, 변경된 경우 새로운 깨끗한 데이터베이스를 재배포할 것입니다." — Yalin, 핵심 개발자 — Darwinia Network


여기에서 [새로운 CLI 도구](https://github.com/fewensa/subquery-cli)를 확인하고 [여기에서 실제 예제](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml)를 확인하십시오.

Darwinia의 성장하는 애플리케이션 생태계의 많은 애플리케이션 중 첫 번째는 [웜홀 앱](https://wormhole.darwinia.network/)입니다. 웜홀은 네트워크 간에 자산을 쉽게 전송할 수 있도록 하는 사용하기 쉬운 응용 프로그램이며 Darwinia의 교차 체인 전략의 핵심 부분입니다. 현재 Darwinia와 Ethereum 사이의 다리가 작동 중입니다. [SubQuery는 웜홀과 관련된 Darwinia/Crab/Pangolin 주소에서 발생한 이력 전송 및 이벤트](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia)(예: 다른 네트워크에서 자산 도착)를 표시하는 데 사용됩니다.

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Darwinia의 팀은 거버넌스, 스테이킹, 체인 탐색 등을 포함한 모든 Darwinia 네트워크 상호 작용을 관리하기 위한 [중앙 허브인 새로운 Smart App](https://apps.darwinia.network/)을 구축하는 과정에 있습니다. 이 앱은 상당한 양의 [SubQuery 데이터를 사용하여 기록 데이터 및 작업을 표시합니다](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery는 전체 Polkadot 생태계에서 가장 빠르고 쉬운 사용자 경험을 제공하기 위해 Darwinia 팀과 긴밀히 협력할 것입니다.
> "우리는 SubQuery를 사용하여 Wormhole에 대한 기존 백엔드 서비스를 대체하게 되어 매우 기쁩니다. 장기적으로 SubQuery Network를 통해 서비스를 완전히 탈중앙화하고 오픈 소스로 만들 것입니다. 이것이 우리가 자랑스러워하는 것입니다!" - Yalin, Core 개발자 — Darwinia 네트워크


또한 Darwinia는 SubQuery를 사용하여 [Parachain Loan Offering 웹 사이트](https://darwinia.network/plo_contribute) [뒤에 데이터를 제공](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot)하고 있습니다. Crab은 이미 Kusama에서 슬롯을 획득했지만 Polkadot 슬롯에 대한 Darwinia의 캠페인에 기여하기에 너무 늦지 않았습니다. 그들은 또한 SubQuery를 활용하여 네트워크에서 생성된 모든 블록에 대해 [Merkle Mountain 범위](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr)를 색인화하고 있습니다.

Darwinia Network는 [SubQuery 프로젝트](https://project.subquery.network/)를 사용하여 자체 프로젝트를 관리하고 필요에 따라 업데이트합니다. 우리가 제공하는 인덱싱 및 쿼리 서비스는 SubQuery에서 완전히 관리되며 [SubQuery의 Explorer](https://explorer.subquery.network/)에서 Polkadot 커뮤니티에 무료로 제공됩니다.

## Darwinia 네트워크 소개

Darwinia 네트워크는 크로스체인 생태계의 "Golden Gate Bridge"인 Substrate에 구축된 분산형 크로스체인 브리지 네트워크입니다. Polkadot, Ethereum, BSC 및 기타 이기종 체인을 교차 체인 자산 전송 및 일반 원격 체인 호출로 연결하여 가장 안전한 일반 브리지 솔루션을 제공합니다. 또한 주요 응용 분야로는 Defi, 크로스체인 NFT 거래 시장, 게임 등이 있습니다.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## SubQuery 네트워크 소개

[SubQuery](https://subquery.network/)는 Layer-1 블록체인과 분산 애플리케이션(DApp) 간의 분산 데이터 집계, 인덱싱 및 쿼리 레이어입니다. 현재 Polkadot 및 Substrate 프로젝트에 중점을 두고 있는 이 서비스로서의 데이터를 통해 개발자는 핵심 사용 사례와 전면에 집중할 수 있습니다.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
