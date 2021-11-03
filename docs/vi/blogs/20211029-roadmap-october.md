# SubQuery công bố lộ trình kỹ thuật

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery thông báo các cột mốc quan trọng bao gồm cả tiến trình TGE**

Hôm nay, chúng tôi rất vui mừng khi lần đầu tiên được công bố lộ trình kỹ thuật chi tiết của mình. Mục tiêu của SubQuery là trở thành nhà cung cấp dữ liệu hàng đầu trong hệ sinh thái Polkadot và sự hỗ trợ mà chúng tôi nhận được từ cộng đồng để giúp chúng tôi đạt được điều này thực sự tuyệt vời. Từ lúc chính thức thành lập vào cuối năm 2020 thông qua một [nguồn tài trợ Web3](https://web3.foundation/) cho đến khi phát hành phiên bản mã nguồn mở đầu tiên của chúng tôi vào tháng 1 năm 2021 rồi cả khi [kết thúc vòng gọi vốn Series A vào tháng 9](https://subquery.medium.com/series-a-1abed6c1c2af), chúng tôi xin chân thành cảm ơn sự hỗ trợ của tất cả các bạn đã giúp chúng tôi đi được đến giai đoạn này!

Khi chúng tôi tiếp tục đạt được động lực, đã đến lúc chúng tôi phải chia sẻ nhiều hơn về kế hoạch của chúng tôi cho tương lai, bao gồm cả lộ trình kỹ thuật của chúng tôi. Chúng tôi rất vui mừng về cách phát triển tiếp theo của SubQuery sẽ thúc đẩy nhiều giá trị hơn nữa cho hệ sinh thái Polkadot và mang lại nhiều cơ hội hơn cho cộng đồng tham gia vào sự phát triển của chúng tôi.

## Tương lai của chúng ta

Mặc dù SubQuery đã phục vụ hàng triệu truy vấn dữ liệu mỗi ngày cho [hơn 60 dự án trên Polkadot & Kusama](https://project.subquery.network/), chúng tôi muốn đảm bảo rằng giai đoạn tăng trưởng tiếp theo của chúng tôi được tiến hành một cách có tổ chức và có kiểm soát.

Vì lý do này, chúng tôi cảm thấy điều quan trọng là chúng tôi phải chứng minh và kiểm tra đầy đủ khả năng mở rộng của Mạng SubQuery thông qua một chương trình mạng thử nghiệm được khuyến khích. Quá trình này cũng sẽ cho phép chúng tôi thiết lập một cộng đồng các nhà lập chỉ mục trước khi ra mắt công khai thông qua TGE vào tháng 3 năm 2022 và mạng chính cuối cùng của chúng tôi vào cuối năm sau.

![](https://cdn-images-1.medium.com/max/800/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Do đó, các nhiệm vụ chính trong quy trình làm việc của chúng tôi có thể được chia thành các mốc quan trọng sau.

## Hiện tại chúng ta đang ở đâu - Giữa quý 4 năm 2021

### Hỗ trợ EVM cho parachains

Chúng tôi sẽ sớm phát hành [hỗ trợ beta của chúng tôi cho việc triển khai Polkadot của Máy ảo Ethereum (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Điều này cho phép các nhà phát triển Polkadot và Ethereum tích hợp liền mạch cả dữ liệu Substrate và EVM vào một nơi và truy vấn nguồn dữ liệu duy nhất này bằng GraphQL.

SubQuery sẽ giới thiệu các bộ lọc nâng cao hơn các trình chỉ mục khác, cho phép lọc các giao dịch không theo hợp đồng, người gửi giao dịch, hợp đồng và các đối số nhật ký được lập chỉ mục, vì vậy các nhà phát triển có thể xây dựng nhiều dự án phục vụ cho nhu cầu dữ liệu cụ thể của họ.

### Học viện SubQuery

Học viện được thiết kế để nâng cao kỹ năng và trao quyền cho các nhà phát triển trong hệ sinh thái SubQuery bằng cách cung cấp cho họ chương trình giáo dục theo mô-đun. [Khóa học đầu tiên của chúng tôi trong Học viện là _Khóa học Anh hùng_](https://doc.subquery.network/academy/herocourse/) và được khai giảng vào Thứ Sáu ngày 22 tháng 10 năm 2021.

Trong mỗi mô-đun của _Khóa học Anh hùng_, có một số bài học từ 5 đến 10 phút được cung cấp bằng một video được ghi lại. Nội dung video đi kèm với các hướng dẫn bằng văn bản, các trang trình bày, sổ làm việc và các liên kết đến kho lưu trữ mã GitHub đã hoàn thành.

Khóa học được thiết kế để giúp một nhà phát triển từ không biết gì về SubQuery trở thành chuyên gia trong việc xây dựng nguồn dữ liệu SubQuery cho ứng dụng blockchain mới của họ.

Trong vài tháng tới, chúng tôi sẽ triển khai nhiều chương trình giáo dục hơn cho Cộng đồng, với việc phát hành hàng tuần nội dung SubQuery _Khóa học anh hùng_ mới và các khóa học khác trong những tuần tới.

### Bằng chứng lập chỉ mục

Bằng chứng về việc lập chỉ mục cho phép chúng tôi đảm bảo rằng hai người lập chỉ mục khác nhau làm việc với cùng một dự án SubQuery đã lập chỉ mục cho cùng một dữ liệu chính xác. Đây là một thành phần quan trọng cần thiết để phát triển mạng SubQuery phi tập trung. Chúng tôi đang sử dụng một khái niệm gọi là Dãy núi Merkle để xác nhận và đảm bảo điều này, hãy theo dõi một bài đăng blog trong tương lai khám phá sâu hơn về điều này.

### Dịch vụ doanh nghiệp cao cấp

Chúng tôi có một số khách hàng lớn như Karura, Kodadot và Fearless Wallet, tất cả đều đang chạy các ứng dụng production trong SubQuery. Các đội này đang yêu cầu dịch vụ được cải thiện và mức độ tin cậy cao hơn.

Chúng tôi đang vượt qua thách thức với Thỏa thuận mức dịch vụ, cấp dịch vụ doanh nghiệp và các công cụ khác mà khách hàng lớn hơn của chúng tôi cần để điều hành doanh nghiệp của riêng họ và nhận được hiệu suất tốt nhất có thể từ SubQuery cho các ứng dụng của họ.

Vui lòng liên hệ với nhóm nếu bạn muốn trao đổi với chúng tôi về việc nhận hỗ trợ và dịch vụ cấp doanh nghiệp từ SubQuery.

## Mốc 1 - Cuối quý 4 năm 2021

### Chương trình Nhà xây dựng / Tài trợ SubQuery

Chương trình tài trợ này được thiết kế để tạo điều kiện và thúc đẩy sự đổi mới với Polkadot và SubQuery, đồng thời xây dựng thế hệ dApp tiếp theo để thúc đẩy cuộc cách mạng web3. Nó sẽ hỗ trợ các dự án mới với các khoản tài trợ, hỗ trợ kỹ thuật, tiếp thị và tư vấn phát triển kinh doanh từ SubQuery và những người khác.

Chúng tôi rất vui mừng về tiềm năng của điều này và sẽ sớm công bố thêm thông tin.

### Điều phối viên và triển khai SDK khách hàng

Chúng tôi sẽ cải thiện SubQuery SDK cốt lõi của mình và thêm các thành phần bổ sung cho khách hàng và điều phối viên SubQuery.

Bộ điều phối trình lập chỉ mục sẽ được triển khai bởi người lập chỉ mục để hiển thị mạng với trình lập chỉ mục và cho phép trình lập chỉ mục tự đăng ký với mạng SubQuery và quảng cáo dữ liệu mà nó đang cung cấp

SDK khách hàng sẽ dành cho vai trò người tiêu dùng và sẽ cho phép họ tìm người lập chỉ mục và quản lý toàn bộ giao dịch mà người tiêu dùng sẽ cần để truy xuất và trả tiền cho dữ liệu.

### Hợp đồng nội bộ của Mạng SQT MVP

Phiên bản mạng SubQuery đầu tiên của chúng tôi sẽ nằm trong một hợp đồng thông minh, được triển khai trên một parachain Polkadot hàng đầu. MVP nội bộ sẽ cho phép chúng tôi bắt đầu thử nghiệm nội bộ mọi thứ ở đây và là một cột mốc quan trọng để chúng tôi hoàn thành.

### Cụm EU

Khách hàng của chúng tôi đang yêu cầu hỗ trợ thêm các cụm cho dữ liệu SubQuery trên khắp thế giới. Nhiều cụm hơn có nghĩa là nhiều khả năng phục hồi hơn và dữ liệu SubQuery được lưu trữ gần hơn với vị trí khách hàng của họ. Một cụm châu Âu mới có nghĩa là yêu cầu nhanh hơn cho người tiêu dùng, hiệu suất vô song cho các nhà phát triển dApp và khả năng phục hồi cao hơn cho mạng SubQuery.

### Các cải tiến đối với subql init

Lệnh _subql init_ là một lệnh quen thuộc đối với bất kỳ ai đã xây dựng dự án SubQuery; nó đại diện cho một khung trống - cơ hội vô hạn. Chúng tôi nhận thức được rằng chúng tôi có thể làm tốt hơn để giúp những người khác bắt đầu, thay vì một nhà phát triển canvas trống rỗng muốn có một khung trống, nơi tất cả mã boiler-plate đã được viết sẵn.

Mục lộ trình này đại diện cho công việc mà chúng tôi muốn làm để cho phép các nhà phát triển bắt đầu xây dựng trên bất kỳ parachain nào mà không cần lo lắng về điểm cuối, từ điển và loại - tất cả đều tiết kiệm thời gian cho nhà phát triển và giúp những người khác bắt đầu.

## Mốc 2 - Giữa Q1 2022

### Khởi chạy testnet công khai

Tuân theo MVP nội bộ của hợp đồng Mạng SQT, chúng tôi sẽ mời một nhóm nhỏ người tham gia cùng chúng tôi khi chúng tôi bắt đầu thử nghiệm Mạng SubQuery. Để khởi chạy, chúng tôi cần hoàn thành một số lượng lớn nhiệm vụ và một lượng tài liệu lớn hơn nữa!

Vào đầu năm 2022, chúng tôi sẽ chia sẻ thêm thông tin về quá trình này và cách bạn có thể đăng ký tham gia.

### Lập chỉ mục điểm trong thời gian

Hãy tưởng tượng có thể tìm ra trạng thái của blockchain tại một thời điểm nhất định - chính xác thì một dự án SubQuery trông như thế nào ở khối thứ 5 triệu? Đây chính xác là những gì tính năng mới này sẽ cung cấp.

### Hợp đồng mạng SQT v1 và kiểm tra mã bởi một đối tác uy tín

Tất cả các mạng quan trọng đều yêu cầu đối tác bên ngoài kiểm tra mã thông qua để đảm bảo rằng mã của mạng đó an toàn và có thể mở rộng. SubQuery cũng không khác, vì vậy chúng tôi sẽ làm việc với các đối tác chính để kiểm tra toàn bộ mã tại đây và cũng tiếp tục nhận kiểm tra mã cho các hợp đồng thông minh của chúng tôi trong tương lai.

### Thử nghiệm thanh toán vi mô nội bộ

Đây là một tính năng chính đối với chúng tôi. Chúng tôi sẽ thực hiện nhiều công việc trong hệ sinh thái Polkadot để quản lý và xử lý các khoản thanh toán vi mô trong SubQuery. Lợi thế của Polkadot là phí giao dịch nhỏ so với các mạng khác như Ethereum, có nghĩa là các khoản thanh toán vi mô có liên quan hơn nhiều. Điều này sẽ được triển khai cho mạng thử nghiệm được khuyến khích của chúng tôi sau khi chúng tôi thực hiện thử nghiệm nội bộ kỹ lưỡng.

### Ứng dụng và Trình khám phá mạng SubQuery

Chúng tôi đang xây dựng trình khám phá và các ứng dụng khác để cho phép những người tham gia trong Mạng SubQuery khám phá và tìm dữ liệu trong Mạng SubQuery. Người tiêu dùng cũng sẽ sử dụng điều này để điều hướng thư viện các nguồn dữ liệu được hỗ trợ, cũng như người ủy quyền để phân tích cách người lập chỉ mục đang hoạt động để quyết định cách ủy quyền mã thông báo SQT của họ.

### Giám sát sức khỏe doanh nghiệp

Tiếp theo từ cấp dịch vụ SubQuery Enterprise của chúng tôi, bạn cũng có thể mong đợi một lượng lớn các công cụ theo dõi sức khỏe và phân tích hiệu suất khác được cung cấp cho khách hàng.

## Mốc 3 - Cuối Q1 2022

### Sự kiện tạo token SQT

Sau giai đoạn mạng thử nghiệm thành công, chúng tôi dự kiến ​​sẽ khởi chạy token SubQuery trên đối tác parachain của Polkadot. Chúng tôi sẽ chia sẻ thêm thông tin về tokenomics của chúng tôi với cộng đồng trong những tuần tới.

### Khởi chạy testnet được khuyến khích công khai với các khoản thanh toán vi mô

Đây là giai đoạn cuối cùng của mạng thử nghiệm của chúng tôi. Chúng tôi sẽ phát hành mọi thứ lên mạng thử nghiệm của mình và mong những người tham gia đẩy nó đến giới hạn. Điều này bao gồm kiểm tra quy mô và tải, tinh chỉnh các mô hình và hệ số kinh tế của chúng tôi, kiểm tra tài liệu và quy trình giới thiệu của chúng tôi, đồng thời đảm bảo rằng bạn có thể giao dịch với tiền thân của SQT trong đó.

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
