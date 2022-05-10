# SubQuery를 소개합니다.

## 다가오는 web3.0 시대의 데이터 변환과 쿼리

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

OnFinality의 사명은 모든 형태와 규모의 고객에게 인프라 서비스를 제공하여 블록체인 개발자들을 지원하는 것입니다. 우리는 이 미션을 수행하기 위해 핵심 문제를 해결하는 것을 목표로 하는 새로운 도전인 SubQuery를 시작합니다.

대부분의 모든 블록체인은 데이터를 처리하고 쿼리해야합니다. 점점 커져가고 있는 Polkadot 커뮤니티에서는 데이터를 안정적으로 찾고, 빨리 사용할 수 있는 서비스가 필요합니다. 우리 프로젝트는 현재 이더리움에서 GraphQL을 사용하여 고객들에게 이 서비스를 제공하는 [The Graph](https://thegraph.com/)에서 영감을 받았습니다.

분산 시스템은 네트워크를 통해 데이터를 저장하기 때문에, 쿼리는 느리고 어렵습니다. Web 3.0의 꿈이 실현되기 위해서는, 최종 사용자를 위해 중앙 집중식 네트워크보다 더 빠르지는 못하더라도 비슷해야합니다.  프로토콜 팀들은 현재 자체 프로젝트를 위한 중앙 집중식 인덱싱 서버를 구축하고 있지만, 이는 세 가지 이슈가 있습니다.

- Polkadot/Substrate팀은 다음 dApp을 구축하는 동안 이를 구축하거나 관리하는 것에 대해 걱정할 필요가 없습니다.
- 팀들은 끊임없이 바퀴를 재발명하고 있습니다; Polkadot의 parachain 상호 운용성의 근본적인 이점은 이것을 피하는 것입니다.
- 우리의 관점에서, Substrate/Polkadot 생태계는 Ethereum과 같은 수준의 성장에 도달할 준비가 되어 있습니다. 우리는 Ethereum이 이미 가지고 있는 것과 동일한 수준의 커뮤니티 서비스를 제공해야 한다고 생각합니다.

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

SubQuery의 목표는 누구나 안정적으로 데이터를 더 빨리 찾고 사용할 수 있도록 하여 Polkadot/Substrate 프로젝트가 더 나은 dApp을 만들 수 있도록 돕는 것입니다. 우리 서비스를 통해 사용자는 초기에 데이터를 추출, 변환, 유지 및 쿼리할 수 있을 뿐만 아니라 향후에 데이터를 연결하고 표시할 수도 있습니다. 우리의 목표는 Ethereum에서의 The Graph처럼, Substrate/Polkadot 생태계의 핵심 인프라로 만드는 것입니다.

**SubQuery is here to help you transform and query the world’s data for a web3.0 future.**

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

For the Web 3.0 dream to be realised, it’s got to be as fast (if not faster) than centralised networks for the end user.

That’s why we’re incredibly proud to announce SubQuery, an open source project that allows users to run an indexer across their chain to build a dataset that can be queried with GraphQL. This suite of tools includes a command line interface to allow projects to generate their own SubQuery project, defining how the indexer should traverse and aggregate their own network. There’s a SubQuery node package that indexes the network and supports GraphQL queries. With the help of these tools, anyone can create and run queries easily.

**You can get started right away by following our example on the SubQuery Github repository: [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)**

Additionally, you can find out more by reading our [SubQuery docs](https://doc.subquery.network/) or visiting our new website at [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

We’ll focus on building a managed hosted service based off this offering that will be more performant and scalable. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

Once this is in place, our final phase is to tokenize the SubQuery business by building our own chain (likely parachain) for Polkadot. Although we’ll provide a similar billing model for enterprise and high consumption users (subscription plan with consumption levels), we’ll save this data to our chain to make it transparent to everyone and participating parties can stake for rewards as incentives. We’ll issue a governance token to provide stability to the chain and to allow the community to influence our direction and roadmap.

Despite over 10 years of development since bitcoin first started, centralised networks are still the mainstream. It’s largely due to the speed and cost of accessing and writing to the network. Ethereum made a huge step forward with decentralised smart contracts (and the Graph is an incredibly successful piece of infrastructure as a result), but the core network is struggling to mitigate transaction costs.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. It solves Ethereum’s governance, forking, interoperability problems, and more. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. By putting in this effort now, even as Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

SubQuery will be built by the team at OnFinality, which is an infrastructure SaaS platform for blockchain teams and users to launch nodes and get access to a large range of blockchain protocols. We have a suite of symbiotic services including our API shared node service, and dedicated nodes that can be used in infrastructure management or as part of a protocol team’s CI/CD testing pipeline. We have relationships with the top Polkadot/Substrate teams, expertise in managed infrastructure hosting for the Substrate/Polkadot network, and the ability to deliver complex infrastructure projects and host them for production use.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Entrepreneur, Investors with more than 20 years of IT experience specialising in infrastructure and cloud service design

**Ian He —** Head of Protocol ([LinkedIn](https://www.linkedin.com/in/yin-he-7a266345/))

Blockchain Architect, Contributor to polkadot-js, Early adopter of Substrate technology and won second place in the first Polkadot hackathon.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Infrastructure & Application Architect, Award-winning software engineer.

**James Bayly** — Head of Business Development ([LinkedIn](https://www.linkedin.com/in/james-bayly/))

Get started on the [SubQuery Github repository.](https://github.com/OnFinality-io/subql)

Read our [SubQuery docs](https://doc.subquery.network/)

[Visit our new website](https://subquery.network/)

Follow us on:

- [Telegram](https://t.me/subquerynetwork)
- [Twitter](https://twitter.com/subquerynetwork)
- [Matrix](https://matrix.to/#/%23subquery:matrix.org)
- [LinkedIn](https://www.linkedin.com/company/subquery)
