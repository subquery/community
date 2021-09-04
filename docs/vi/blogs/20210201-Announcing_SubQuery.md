# Công bố SubQuery

## Chuyển đổi và truy vấn dữ liệu của thế giới cho tương lai web3.0

![](https://miro.medium.com/max/1400/1*J5u22qNxndcuCrFJ1mfGqg.png)

Nhiệm vụ của OnFinality là hỗ trợ các nhà phát triển blockchain bằng cách cung cấp các dịch vụ cơ sở hạ tầng cho khách hàng ở mọi hình dạng và quy mô. Chúng tôi đang khởi động một liên doanh mới nhằm giải quyết một vấn đề cốt lõi để thúc đẩy sứ mệnh này: SubQuery.

Hầu hết mọi blockchain đều có nhu cầu xử lý và truy vấn dữ liệu. Cộng đồng Polkadot đang phát triển mạnh sẽ cần một dịch vụ cho phép họ tìm kiếm và sử dụng dữ liệu một cách đáng tin cậy một cách nhanh chóng. Dự án của chúng tôi được lấy cảm hứng từ [The Graph](https://thegraph.com/), một dịch vụ hiện tập trung vào Ethereum cho phép khách hàng thực hiện việc này bằng GraphQL.

Vì các hệ thống phi tập trung lưu trữ dữ liệu trên các mạng nên việc truy vấn rất chậm và khó. Để giấc mơ Web 3.0 trở thành hiện thực, nó phải nhanh (nếu không muốn nói là nhanh hơn) so với các mạng tập trung cho người dùng cuối. Các nhóm giao thức hiện đang xây dựng các máy chủ lập chỉ mục tập trung cho các dự án của riêng họ, nhưng điều này đặt ra ba vấn đề:

-   Các nhóm Polkadot/Substrate không cần phải lo lắng về việc xây dựng hoặc quản lý điều này trong khi họ đang xây dựng dApp tiếp theo
-   Các đội liên tục sáng tạo lại bánh xe; lợi thế cơ bản của khả năng tương tác parachain của Polkadot là tránh được điều này
-   Theo quan điểm của chúng tôi, hệ sinh thái Substrate/Polkadot đã sẵn sàng để đạt được mức tăng trưởng tương tự như Ethereum. Chúng tôi tin rằng nó cần cung cấp cùng một mức độ dịch vụ cộng đồng mà Ethereum đã có

![](https://miro.medium.com/max/1400/1*l4b4BXWkczVDaHyv30lLQQ.png)

Mục đích của SubQuery là giúp các dự án Polkadot/Substrate xây dựng các dApp tốt hơn bằng cách cho phép bất kỳ ai cũng có thể tìm và sử dụng dữ liệu nhanh hơn một cách đáng tin cậy. Dịch vụ của chúng tôi sẽ cho phép người dùng trích xuất, chuyển đổi, duy trì và truy vấn dữ liệu ban đầu, cũng như kết nối và trình bày dữ liệu trong tương lai. Mục đích của chúng tôi là biến đây trở thành một phần cơ sở hạ tầng cốt lõi cho hệ sinh thái Substrate/Polkadot, giống như The Graph trong Ethereum.

> SubQuery ở đây để giúp bạn chuyển đổi và truy vấn dữ liệu của thế giới cho tương lai web3.0.

![](https://miro.medium.com/max/1000/1*IHstJG-hBwQzicLdWkGR5w.png)

Để giấc mơ Web 3.0 trở thành hiện thực, nó phải nhanh (nếu không muốn nói là nhanh hơn) so với các mạng tập trung cho người dùng cuối.

Đó là lý do tại sao chúng tôi vô cùng tự hào khi công bố SubQuery, một dự án mã nguồn mở cho phép người dùng chạy trình lập chỉ mục trên chuỗi của họ để tạo tập dữ liệu có thể được truy vấn bằng GraphQL. Bộ công cụ này bao gồm một giao diện dòng lệnh để cho phép các dự án tạo dự án SubQuery của riêng họ, xác định cách trình chỉ mục sẽ đi qua và tổng hợp mạng của riêng họ. Có một số node SubQuery lập chỉ mục mạng và hỗ trợ các truy vấn GraphQL. Với sự trợ giúp của các công cụ này, bất kỳ ai cũng có thể tạo và chạy các truy vấn một cách dễ dàng.

> _Bạn có thể bắt đầu ngay lập tức bằng cách làm theo ví dụ của chúng tôi trên Github của SubQuery:_ [_https://github.com/OnFinality-io/subql_](https://github.com/OnFinality-io/subql)

Ngoài ra, bạn có thể tìm hiểu thêm bằng cách đọc [tài liệu SubQuery](https://doc.subquery.network/) của chúng tôi hoặc truy cập trang web mới của chúng tôi tại [https://subquery.network/](https://subquery.network/)

![](https://miro.medium.com/max/1000/1*3oA1Hvns1vrImTsmowO_Jw.png)

Chúng tôi sẽ tập trung vào việc xây dựng một dịch vụ được lưu trữ được quản lý dựa trên dịch vụ này sẽ hoạt động hiệu quả hơn và có thể mở rộng. We are going to provide trusty public infrastructure that will build a powerful productionised SubQuery node from an uploaded SubQuery project. The service will then index and persist the chain state, and provide a production GraphQL endpoint that can replace self-hosted implementations. Chúng tôi sẽ tập trung vào vấn đề này để mọi người khác có thể tập trung vào việc xây dựng và phát triển dApp của họ.

Khi điều này đã sẵn sàng, giai đoạn cuối cùng của chúng tôi là mã hóa hoạt động kinh doanh SubQuery bằng cách xây dựng chuỗi của riêng chúng tôi (có thể là parachain) cho Polkadot. Although we’ll provide a similar billing model for enterprise and high consumption users (subscription plan with consumption levels), we’ll save this data to our chain to make it transparent to everyone and participating parties can stake for rewards as incentives. Chúng tôi sẽ phát hành token quản trị để cung cấp sự ổn định cho chuỗi và cho phép cộng đồng ảnh hưởng đến định hướng và lộ trình của chúng tôi.

Mặc dù đã hơn 10 năm phát triển kể từ khi bitcoin mới bắt đầu, nhưng các mạng tập trung vẫn là xu hướng chủ đạo. Phần lớn là do tốc độ và chi phí truy cập và ghi vào mạng. Ethereum đã đạt được một bước tiến lớn với các hợp đồng thông minh phi tập trung (và kết quả là Graph là một phần cơ sở hạ tầng cực kỳ thành công), nhưng mạng lõi đang phải vật lộn để giảm thiểu chi phí giao dịch.

Chúng tôi đã sớm nhận thấy tiềm năng của Polkadot và ngay từ đầu, chúng tôi cảm thấy tự nhiên khi tập trung nỗ lực vào đó. Nó giải quyết các vấn đề về quản trị, phân nhánh, khả năng tương tác của Ethereum và hơn thế nữa. The core premise of Polkadot is to create a thriving community of developers, users, and businesses that will tap into its multichain interoperability — that community is going to need a service that allows them to reliably find and consume data quickly.

Polkadot’s unique architecture means that we can focus on one network and then be able to support multiple current and future chains with ease. By putting in this effort now, even as Polkadot is still under development, we will be there ready to help the next generation of blockchain developers create the next big dApp.

SubQuery will be built by the team at OnFinality, which is an infrastructure SaaS platform for blockchain teams and users to launch nodes and get access to a large range of blockchain protocols. We have a suite of symbiotic services including our API shared node service, and dedicated nodes that can be used in infrastructure management or as part of a protocol team’s CI/CD testing pipeline. We have relationships with the top Polkadot/Substrate teams, expertise in managed infrastructure hosting for the Substrate/Polkadot network, and the ability to deliver complex infrastructure projects and host them for production use.

**Sam Zou —** CEO ([LinkedIn](https://www.linkedin.com/in/sam-zou-5b8169a/))

Doanh nhân, Nhà đầu tư với hơn 20 năm kinh nghiệm CNTT chuyên về thiết kế cơ sở hạ tầng và dịch vụ đám mây

** Ian He - ** Giám đốc Giao thức ([ LinkedIn ](https://www.linkedin.com/in/yin-he-7a266345/))

Kiến trúc sư Blockchain, Người đóng góp cho polkadot-js, Người áp dụng sớm công nghệ Substrate và giành vị trí thứ hai trong cuộc thi hackathon Polkadot đầu tiên.

**James Xu —** Solutions Architect ([LinkedIn](https://www.linkedin.com/in/zhexu/))

Cơ sở hạ tầng & Kiến trúc sư ứng dụng, kỹ sư phần mềm từng đoạt giải thưởng.

** James Bayly ** - Trưởng phòng Phát triển Kinh doanh ([ LinkedIn ](https://www.linkedin.com/in/james-bayly/))

Bắt đầu trên [ kho lưu trữ Github SubQuery. ](https://github.com/OnFinality-io/subql)

Đọc [ tài liệu SubQuery ](https://doc.subquery.network/) của chúng tôi

[Ghé thăm trang web mới của chúng tôi](https://subquery.network/)

Theo dõi chúng tôi tại:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)