# SubQuery, 기술 로드맵 출시

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery, TGE 타임라인을 포함한 주요 이정표 발표**

오늘 우리는 처음으로 상세한 기술 로드맵을 발표하게 된 것을 기쁘게 생각합니다. SubQuery의 목표는 Polkadot 생태계의 선도적인 데이터 제공업체이며 이 비전이 놀랍다는 것을 깨닫도록 돕기 위해 커뮤니티에서 받은 지원입니다. 2020년 말 [Web3 Grant](https://web3.foundation/)를 통해 공식 설립된 후 2021년 1월 첫 번째 오픈 소스 버전을 출시하고 [9월에 시리즈 A를 종료할 때까지](https://subquery.medium.com/series-a-1abed6c1c2af) 이 단계에 이르기까지 모든 지원에 감사드립니다!

우리가 계속 추진력을 얻으면서 기술 로드맵을 포함하여 미래 계획에 대해 더 많이 공유할 때가 되었습니다. 우리는 SubQuery의 다음 진화가 어떻게 Polkadot 생태계에 더 많은 가치를 부여하고 커뮤니티가 성장에 참여할 수 있는 더 많은 기회를 제공할 것인지에 대해 흥분하고 있습니다.

## 우리의 미래

SubQuery는 이미 [Polkadot & Kusama의 60개 이상의 프로젝트](https://project.subquery.network/)에 대해 매일 수백만 개의 데이터 쿼리를 제공하고 있지만 우리는 다음 성장 단계가 조직적이고 통제된 방식으로 수행되도록 하고 싶었습니다.

이러한 이유로 인센티브화된 테스트넷 프로그램을 통해 SubQuery 네트워크의 확장성을 시연하고 완전히 테스트하는 것이 중요하다고 생각합니다. 이 프로세스를 통해 2022년 3월 TGE와 내년 말 최종 메인넷을 통해 공개적으로 출시하기 전에 인덱서 커뮤니티를 구축할 수도 있습니다.

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

따라서 워크플로의 주요 결과물은 다음과 같은 주요 이정표로 나눌 수 있습니다.

## 현재 위치 — 2021년 4분기 중반

### 파라체인에 대한 EVM 지원

[EVM(Ethereum Virtual Machine)의 Polkadot 구현에 대한 베타 지원](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff)을 곧 출시할 예정입니다. 이를 통해 Polkadot 및 Ethereum 개발자는 Substrate와 EVM 데이터를 한 곳으로 원활하게 통합하고 GraphQL을 사용하여 이 단일 데이터 소스를 쿼리할 수 있습니다.

SubQuery는 다른 인덱서보다 고급 필터를 도입하여 비계약 트랜잭션, 트랜잭션 발신자, 계약 및 인덱싱된 로그 인수를 필터링할 수 있으므로 개발자는 특정 데이터 요구 사항을 충족하는 다양한 프로젝트를 구축할 수 있습니다.

### SubQuery 아카데미

Academy는 모듈식 교육을 제공하여 SubQuery 생태계의 개발자에게 기술을 향상하고 권한을 부여하도록 설계되었습니다. [아카데미의 첫 번째 과정은 _Hero Course_](https://doc.subquery.network/academy/herocourse/)이며 2021년 10월 22일 금요일에 시작되었습니다.

_Hero Course_의 각 모듈에는 녹화된 비디오로 제공되는 5분에서 10분 정도의 여러 수업이 있습니다. 비디오 콘텐츠에는 작성된 자습서, 슬라이드, 통합 문서 및 완성된 GitHub 코드 리포지토리에 대한 링크가 함께 제공됩니다.

이 과정은 개발자가 SubQuery에 대해 전혀 모르는 상태에서 새로운 블록체인 애플리케이션을 위한 SubQuery 데이터 소스를 구축하는 전문가가 될 수 있도록 설계되었습니다.

앞으로 몇 개월 동안 우리는 새로운 SubQuery _Hero Course_ 콘텐츠의 주간 릴리스와 앞으로 몇 주 동안 더 많은 과정을 통해 커뮤니티를 위한 더 많은 교육을 배포할 것입니다.

### Proof of Indexing

인덱싱 증명을 통해 동일한 SubQuery 프로젝트에서 작업하는 두 개의 서로 다른 인덱서가 정확히 동일한 데이터를 인덱싱했음을 보장할 수 있습니다. 탈중앙화 SubQuery 네트워크 개발에 필요한 핵심 컴포넌트입니다. 우리는 이것을 확인하고 보장하기 위해 Merkle Mountain 범위라는 개념을 사용하고 있습니다. 이에 대해 더 깊이 탐구하는 향후 블로그 게시물을 주목하십시오.

### 프리미엄 엔터프라이즈 서비스

Karura, Kodadot 및 Fearless Wallet과 같은 일부 대규모 고객은 모두 SubQuery에서 프로덕션 애플리케이션을 실행하고 있습니다. 이러한 팀은 향상된 서비스와 더 높은 수준의 안정성을 요구하고 있습니다.

우리는 대규모 고객이 자체 비즈니스를 운영하고 응용 프로그램에 대해 SubQuery에서 가능한 최고의 성능을 얻는 데 필요한 서비스 수준 계약, 엔터프라이즈 서비스 계층 및 기타 도구를 통해 문제에 대처하고 있습니다.

SubQuery로부터 엔터프라이즈급 서비스 및 지원을 받는 것에 대해 이야기하고 싶다면 팀에 연락하십시오.

## 마일스톤 1 — 2021년 4분기 말

### SubQuery Builders/Grants Programme

This grants programme is designed to facilitate and catalyse innovation with Polkadot and SubQuery, and to build the next generation of dApps to power the web3 revolution. It will support new projects with grants, technical support, marketing and business development advice from SubQuery and others.

We are excited about the potential of this and will be releasing more information soon.

### Coordinator and client SDK implementations

We will be improving our core SubQuery SDK and adding additional components for a SubQuery coordinator and client.

The indexer coordinator will be deployed by indexers to expose the network to the indexer, and allow the indexer to register itself with the SubQuery network and advertise the data that it is making available

The client SDK will be for the consumer role, and will allow them to find indexers and manage the entire transaction that a consumer will need to retrieve and pay for data.

### SQT Network contract internal MVP

Our first version of the SubQuery network will be within a smart contract, deployed on a leading Polkadot parachain. The internal MVP will allow us to internally start testing out everything here, and is a huge milestone for us to complete.

### EU Cluster

Our customers are requesting support for more clusters for SubQuery data around the world. More clusters mean more resiliency, and hosted SubQuery data closer to where their customers are. A new European cluster means faster requests for consumers, unrivalled performance for dApp developers and more resiliency for the SubQuery network.

### Improvements to subql init

The _subql init_ command is a familiar one for anyone that has built a SubQuery project; it represents a blank canvas — limitless opportunities. We are aware that we can do better to help others get started, rather than a blank canvas developers want a blank scaffold, where all the boiler-plate code is already written.

This roadmap item represents work we want to do to allow developers to start building on any parachain without needing to worry about endpoints, dictionaries, and types — all saving time for developers and helping others get started.

## Milestone 2 — Middle of Q1 2022

### Public testnet launch

Following the SQT Network contract internal MVP, we will invite a small group of participants to onboard and join us as we start testing the SubQuery Network. In order to launch, we need to complete a large number of tasks and an even bigger amount of documentation!

In early 2022, we will share more information about this process and how you can apply to take part.

### Point-in-time indexing

Imagine being able to find out the state of the blockchain at a certain point in time - what exactly did a SubQuery project look like back at the 5 millionth block? This is exactly what this new feature will provide.

### SQT Network contract v1 and external code audit

All important networks require a through code audit by an external partner to ensure that the network’s code is secure and scalable. SubQuery is no different, so we’ll be working with key partners for a full code audit here and also continue to receive code audits for our smart contracts going forward.

### Internal micropayments testing

This is a key feature for us. We are going to be doing a lot of work within the Polkadot ecosystem to manage and handle micropayments within SubQuery. The advantage of Polkadot is tiny transaction fees relative to other networks like Ethereum, meaning micropayments are much more relevant to. This will roll out to our incentivised test network after we carry out thorough internal testing.

### SubQuery Network Explorer and App

We’re building an explorer and other applications to allow participants in the SubQuery Network explore and find data within the SubQuery Network. Consumers will also use this to navigate the library of supported data sources, as well as delegators to analyse how indexers are performing to decide how to delegate their SQT tokens.

### Enterprise health monitoring

Following on from our SubQuery Enterprise service tier, you can also expect a large amount of health monitoring and other performance analytics tools to be made available to customers.

## Milestone 3 — End of Q1 2022

### SQT token generation event

After a successful test network phase we are expecting to launch the SubQuery token on a Polkadot parachain partner. We will be sharing more information on our tokenomics with the community in the coming weeks.

### Public incentivised testnet launch with micropayments

This is the final stage of our test network. We will release everything to our test network and expect participants to push it to its limits. This includes scale and load testing, fine tuning our economic models and coefficients, testing our documentation and onboarding processes, and making sure that you can transact with a precursor to SQT within it.

We expect that we will be rewarding participants of our test network, those that complete certain quests or tasks, and those that act as different members of the test network.

### Data traffic insights and reporting

We are handling millions of data requests to SubQuery projects each day. Most of our customers don’t have analytics in their own dApps for user privacy but they still need to know how their dApps are operating so we will be improving this.

### Scalable intelligent routing

We have a goal of a Billion daily SubQuery requests to our hosted service, that’s why we are going to introduce a globally scalable service with multiple SubQuery hosted services running.

It’s a new and continuously improving feature that automatically routes requests to the closest available node. Additionally, it allows us to redirect all requests immediately to a backup SubQuery zone, providing us with a fault tolerant system in the case of regional outage.

In the future it means that we’ll be creating more and more smaller SubQuery hosted services tactically placed closer to our users.

## Milestone 4 — Middle of Q2 2022

### Launch of the SubQuery Foundation

In our move to create a decentralized SubQuery Network we will establish a SubQuery Foundation to administer the future governance and growth of the ecosystem. The ownership of the SubQuery Network will come under the SubQuery foundation initially.

### Finalise research for other Layer-1 chains

While our home will always be Polkadot we are exploring supporting various other Layer-1 blockchains with our indexing capabilities.

### Liquidity mining program

In order to enhance the liquidity of the SQT token, we will create a liquidity mining program with a decentralized exchange (DEX). This will enable token holders to generate returns on their investment.

## Milestone 5 — End of Q2 2022

### Mainnet launch 🚀

After we complete testing of the SubQuery network will launch the first SubQuery Network mainnet. This is where everything really starts. Initially, we will onboard and reward participants of the test network, and then it will be completely open to everyone in the community.

### Centralised Exchange launch

In order to drive increased adoption of SQT, we anticipate launching the token on one if not multiple leading CEX during this period as well as many other DEXs.

## Milestone 6 — Long term plans

### Launch our own Parachain

Although we initially plan to partner with a top Polkadot parachain to get SubQuery Network released and scaled quicker, in the long-term SubQuery also intends to launch on it’s own parachain and integrate itself even more in the ecosystem.

This self owned parachain will allow us to further innovate in tools that can help developers build the web3 future faster. We want to aim for a parachain slot once we have a proven track record behind us and the data, community, and token to support it.

### SubQuery Foundation moves to a DAO

This one is a long way off, but it’s always our dream the SubQuery eventually becomes a community owned DAO. We’ve said many times that the community plays a huge part in SubQuery, everything that we do is for our customers — becoming a DAO is the embodiment of that focus.

That being said, this is a long long way off, and will only be done once we are absolutely confident of SubQuery's success and future with the community.

## About SubQuery

[SubQuery](https://subquery.network) is a decentralized data aggregation, indexing & querying layer between Layer-1 blockchains and decentralized applications. The protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
