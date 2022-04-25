# Công bố SubQuery

## Chuyển đổi và truy vấn dữ liệu của thế giới cho tương lai web3.0

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

Sứ mệnh của OnFinality là hỗ trợ các nhà phát triển blockchain thông qua việc cung cấp các dịch vụ cơ sở hạ tầng cho khách hàng ở mọi hình thức và quy mô. Chúng tôi đang khởi động một liên doanh mới nhằm giải quyết một vấn đề cốt lõi để thúc đẩy sứ mệnh này: SubQuery.

Hầu hết mọi blockchain đều có nhu cầu xử lý và truy vấn dữ liệu. Cộng đồng Polkadot đang phát triển mạnh sẽ cần một dịch vụ cho phép họ tìm kiếm và sử dụng dữ liệu một cách đáng tin cậy một cách nhanh chóng. Dự án của chúng tôi được lấy cảm hứng từ [The Graph](https://thegraph.com/), một dịch vụ hiện tập trung vào Ethereum cho phép khách hàng thực hiện việc này bằng GraphQL.

Vì các hệ thống phi tập trung lưu trữ dữ liệu trên các mạng nên việc truy vấn rất chậm và khó. Để giấc mơ Web 3.0 trở thành hiện thực, nó phải nhanh (nếu không muốn nói là nhanh hơn) so với các mạng tập trung cho người dùng cuối. Các nhóm giao thức hiện đang xây dựng các máy chủ lập chỉ mục tập trung cho các dự án của riêng họ, nhưng điều này đặt ra ba vấn đề:

- Các nhóm Polkadot/Substrate không cần phải lo lắng về việc xây dựng hoặc quản lý điều này trong khi họ đang xây dựng dApp tiếp theo
- Các đội liên tục sáng tạo lại bánh xe; lợi thế cơ bản của khả năng tương tác parachain của Polkadot là tránh được điều này
- Theo quan điểm của chúng tôi, hệ sinh thái Substrate/Polkadot đã sẵn sàng để đạt được mức tăng trưởng tương tự như Ethereum. Chúng tôi tin rằng nó cũng cần các dịch vụ cộng đồng ở một mức độ tương tự mà Ethereum đã có

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

Mục đích của SubQuery là giúp các dự án Polkadot/Substrate xây dựng các dApp tốt hơn bằng cách cho phép bất kỳ ai cũng có thể tìm và sử dụng dữ liệu nhanh hơn một cách đáng tin cậy. Dịch vụ của chúng tôi sẽ cho phép người dùng trích xuất, chuyển đổi, duy trì và truy vấn dữ liệu ban đầu, cũng như kết nối và trình bày dữ liệu trong tương lai. Mục đích của chúng tôi là biến Subquery thành một phần cơ sở hạ tầng cốt lõi cho hệ sinh thái Substrate/Polkadot, giống như The Graph trong Ethereum.

**SubQuery ở đây để giúp bạn chuyển đổi và truy vấn dữ liệu của thế giới cho tương lai web3.0.**

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Để giấc mơ Web 3.0 trở thành hiện thực, nó phải nhanh (nếu không muốn nói là nhanh hơn) so với các mạng tập trung cho người dùng cuối.

Đó là lý do tại sao chúng tôi vô cùng tự hào khi công bố SubQuery, một dự án mã nguồn mở cho phép người dùng chạy trình lập chỉ mục trên chuỗi của họ để tạo tập dữ liệu có thể được truy vấn bằng GraphQL. Bộ công cụ này bao gồm một giao diện dòng lệnh để cho phép các dự án tạo dự án SubQuery của riêng họ, xác định cách các chỉ mục sẽ đi qua và tích hợp với mạng lưới. There’s a SubQuery node package that indexes the network and supports GraphQL queries. With the help of these tools, anyone can create and run queries easily.

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
