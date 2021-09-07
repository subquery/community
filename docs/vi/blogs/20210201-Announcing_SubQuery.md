# Công bố SubQuery

## Chuyển đổi và truy vấn dữ liệu của thế giới cho tương lai web3.0

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

OnFinality’s mission is to support blockchain developers by providing infrastructure services to customers of all shapes and sizes. We’re launching a new venture that aims to solve a core problem to advance this mission: SubQuery.

Almost every blockchain has a need to process and query data. The thriving Polkadot community is going to need a service that allows them to reliably find and consume data quickly. Our project is inspired by [The Graph](https://thegraph.com/), an service currently focused on Ethereum that allows customers to do this using GraphQL.

Since decentralised systems store data across networks querying is slow and hard. For the Web 3.0 dream to be realised, it’s got to be as fast (if not faster) than centralised networks for the end user. Protocol teams are currently building centralised indexing servers for their own projects, but this poses three issues:

-   Các nhóm Polkadot/Substrate không cần phải lo lắng về việc xây dựng hoặc quản lý điều này trong khi họ đang xây dựng dApp tiếp theo
-   Các đội liên tục sáng tạo lại bánh xe; lợi thế cơ bản của khả năng tương tác parachain của Polkadot là tránh được điều này
-   In our view, the Substrate/Polkadot ecosystem is poised to reach the same level of growth as Ethereum. We believe that it needs to provide the same level of community services that Ethereum already has

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

SubQuery’s aim is to help Polkadot/Substrate projects build better dApps by allowing anyone to reliably find and consume data faster. Our service will allow users to extract, transform, persist, and query data initially, as well as connect and present data in the future. Our aim is to make this a core piece of infrastructure for the Substrate/Polkadot ecosystem, just as The Graph has become for Ethereum.

> SubQuery ở đây để giúp bạn chuyển đổi và truy vấn dữ liệu của thế giới cho tương lai web3.0.

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Để giấc mơ Web 3.0 trở thành hiện thực, nó phải nhanh (nếu không muốn nói là nhanh hơn) so với các mạng tập trung cho người dùng cuối.

That’s why we’re incredibly proud to announce SubQuery, an open source project that allows users to run an indexer across their chain to build a dataset that can be queried with GraphQL. This suite of tools includes a command line interface to allow projects to generate their own SubQuery project, defining how the indexer should traverse and aggregate their own network. There’s a SubQuery node package that indexes the network and supports GraphQL queries. With the help of these tools, anyone can create and run queries easily.

> _Bạn có thể bắt đầu ngay lập tức bằng cách làm theo ví dụ của chúng tôi trên Github của SubQuery:_ [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

Ngoài ra, bạn có thể tìm hiểu thêm bằng cách đọc [tài liệu SubQuery](https://doc.subquery.network/) của chúng tôi hoặc truy cập trang web mới của chúng tôi tại [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

We’ll focus on building a managed hosted service based off this offering that will be more performant and scalable. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. We’re going to focus on this so that everyone else can focus on building and growing their dApp.

Once this is in place, our final phase is to tokenize the SubQuery business by building our own chain (likely parachain) for Polkadot. Although we’ll provide a similar billing model for enterprise and high consumption users (subscription plan with consumption levels), we’ll save this data to our chain to make it transparent to everyone and participating parties can stake for rewards as incentives. We’ll issue a governance token to provide stability to the chain and to allow the community to influence our direction and roadmap.

Despite over 10 years of development since bitcoin first started, centralised networks are still the mainstream. It’s largely due to the speed and cost of accessing and writing to the network. Ethereum made a huge step forward with decentralised smart contracts (and the Graph is an incredibly successful piece of infrastructure as a result), but the core network is struggling to mitigate transaction costs.

We saw Polkadot’s potential early and right from the start it felt natural to focus our efforts there. It solves Ethereum’s governance, forking, interoperability problems, and more. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. By putting in this effort now, even as Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

SubQuery will be built by the team at OnFinality, which is an infrastructure SaaS platform for blockchain teams and users to launch nodes and get access to a large range of blockchain protocols. We have a suite of symbiotic services including our API shared node service, and dedicated nodes that can be used in infrastructure management or as part of a protocol team’s CI/CD testing pipeline. We have relationships with the top Polkadot/Substrate teams, expertise in managed infrastructure hosting for the Substrate/Polkadot network, and the ability to deliver complex infrastructure projects and host them for production use.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Doanh nhân, Nhà đầu tư với hơn 20 năm kinh nghiệm CNTT chuyên về thiết kế cơ sở hạ tầng và dịch vụ đám mây

** Ian He - ** Giám đốc Giao thức ([ LinkedIn ](https://www.linkedin.com/in/yin-he-7a266345/))

Kiến trúc sư Blockchain, Người đóng góp cho polkadot-js, Người áp dụng sớm công nghệ Substrate và giành vị trí thứ hai trong cuộc thi hackathon Polkadot đầu tiên.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Cơ sở hạ tầng & Kiến trúc sư ứng dụng, kỹ sư phần mềm từng đoạt giải thưởng.

** James Bayly ** - Trưởng phòng Phát triển Kinh doanh ([ LinkedIn ](https://www.linkedin.com/in/james-bayly/))

Get started on the [SubQuery Github repository.](https://github.com/OnFinality-io/subql)

Đọc [ tài liệu SubQuery ](https://doc.subquery.network/) của chúng tôi

[Ghé thăm trang web mới của chúng tôi](https://subquery.network/)

Theo dõi chúng tôi tại:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)