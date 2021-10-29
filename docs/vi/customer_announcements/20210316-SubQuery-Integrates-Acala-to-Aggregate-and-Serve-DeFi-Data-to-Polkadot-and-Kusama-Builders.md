# SubQuery tích hợp Acala để tổng hợp và cung cấp dữ liệu DeFi cho Polkadot và các nhà xây dựng Kusama

![](https://miro.medium.com/max/1400/1*cg4kJs0WEcyPP73EAtHomA.png)

Tuần trước [SubQuery](https://www.subquery.network/) đã phát hành giai đoạn tiếp theo của dự án, [SubQuery Explorer](https://explorer.subquery.network/). Tuần này, Acala và SubQuery đã hoàn tất quá trình tích hợp để cho phép người dùng và nhà phát triển truy vấn, trích xuất dữ liệu từ trung tâm Acala DeFi cho Polkadot chỉ trong vài phút và miễn phí.

SubQuery là một lớp tổng hợp dữ liệu sẽ hoạt động giữa blockchain layer-1 (Acala) và lớp DApp. Giải pháp tổng hợp và sắp xếp dữ liệu từ Acala và các blockchain khác, cung cấp dữ liệu có cấu trúc tốt cho các nhà phát triển để sử dụng cho nhiều loại dự án. Dịch vụ này cho phép các nhà phát triển DApp tập trung vào cốt lõi và giao diện người dùng của họ mà không cần lãng phí thời gian vào việc xây dựng chương trình phụ trợ tùy chỉnh để xử lý dữ liệu.

Acala là một người tin tưởng vững chắc và là người xây dựng lâu dài cho tương lai đa chuỗi - giảm sự phân mảnh thanh khoản, tăng khả năng tổng hợp và cho phép mọi người tiếp cận DeFi. Acala là một blockchain chuyên biệt tập trung vào tài chính phi tập trung (DeFi) và tạo ra nhiều gốc DeFi để trở thành một trung tâm DeFi và cơ sở hạ tầng phục vụ hệ sinh thái Polkadot và Kusama. Nhóm đã xây dựng các sản phẩm bao gồm một stablecoin đa thế chấp (aUSD - The Acala Dollar), một nhà tạo lập thị trường tự động (AMM) DEX, một tài sản cổ phần được mã hóa có tên là Liquid DOT (LDOT) và triển khai tính năng bring-your-own-gas cho phép thanh toán phí gas bằng bất kỳ tài sản được hỗ trợ nào như stablecoin. Acala’s parachain có kế hoạch đóng vai trò là trung tâm DeFi cho Polkadot và là điểm tập trung tổng hợp tài sản và tính thanh khoản từ nhiều chuỗi khối.

Hôm nay, khi bạn truy cập [SubQuery Explorer](https://explorer.subquery.network/), bạn sẽ được chào đón với Dự án Acala SubQuery mới. SubQuery này tự động theo dõi tất cả dữ liệu bên ngoài được tạo trên Acala và có thể nhanh chóng hiển thị số liệu thống kê tổng hợp có nguồn gốc cho những điều sau:

-   Dữ liệu lịch sử về các thay đổi thanh khoản (được chia nhỏ bởi các nhà cung cấp)
-   Dữ liệu lịch sử về tất cả các hoán đổi tài sản chuỗi chéo
-   Lịch sử chuyển nhượng

![](https://miro.medium.com/max/1400/0*sXPljA1RE754fuDQ)

Bạn có thể thử với Đồ thị Acala SubQuery bằng cách sử dụng [Explorer](https://explorer.subquery.network/) mà không cần triển khai bất kỳ thứ gì trong mã. Ngoài ra, chúng tôi đã ghi lại các loại mà bạn có thể chỉ định trong mỗi yêu cầu GraphQL khi phân tích dữ liệu của Acala.

Dưới đây là một ví dụ đơn giản về cách người dùng có thể nhanh chóng và dễ dàng xem 5 sự kiện chuyển giao trước đó bằng cách sử dụng mã thông báo ACA qua mạng Acala Mandala. Bạn có thể thấy ở đây rằng chúng tôi sử dụng ngôn ngữ GraphQL đơn giản để sắp xếp và truy xuất dữ liệu này cho bất kỳ máy khách nào. DApps có thể sử dụng điều này để theo dõi các vị thế cho vay và nhảy vào các cuộc đấu giá, v. v. để giúp thanh lý tài sản thế chấp.

![](https://miro.medium.com/max/1400/0*zlxPf2tz8DVX95kY)

Sau đây là một ví dụ phức tạp hơn một chút, trong đó chúng tôi kiểm tra một tài khoản và truy xuất tất cả các sự kiện hoán đổi token được thực hiện bởi nó. DApp danh mục đầu tư có thể sử dụng dữ liệu này để tạo tổng quan về hiệu suất tài khoản và token của chủ sở hữu, doanh thu từ việc staking, cung cấp thanh khoản và chi phí khi đi vay.

![](https://miro.medium.com/max/1400/0*hdTbn41vDvIYuv3_)

[SubQuery Explorer](https://explorer.subquery.network/) là một dịch vụ được lưu trữ trực tuyến cung cấp quyền truy cập vào các dự án SubQuery đã xuất bản được thực hiện bởi những người đóng góp trên khắp thế giới và được quản lý bởi nhóm SubQuery. Nhiệm vụ của nó là dễ dàng truy cập vào dữ liệu mạng Polkadot bằng cách cung cấp các dịch vụ cơ sở hạ tầng để giúp các nhà phát triển đạt được nhiều điều hơn.

[SubQuery](https://www.subquery.network/) cho phép mọi nhóm Substrate/Polkadot xử lý và truy vấn dữ liệu của họ. Dự án được lấy cảm hứng từ sự phát triển của các giao thức dữ liệu phục vụ lớp ứng dụng và mục đích của nó là giúp các dự án Polkadot/Substrate xây dựng các dApp tốt hơn bằng cách cho phép bất kỳ ai cũng có thể tìm và sử dụng dữ liệu nhanh hơn một cách đáng tin cậy. Ngày nay, bất kỳ ai cũng có thể truy vấn và trích xuất dữ liệu mạng Polkadot chỉ trong vài phút và miễn phí.

[Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

[Acala](http://acala.network/) là trung tâm tài chính phi tập trung và stablecoin của Polkadot giúp việc sử dụng hoặc xây dựng các ứng dụng tài chính trở nên nhanh chóng và dễ dàng, cải thiện hiệu quả giao dịch và tiết kiệm thời gian. Nền tảng này cung cấp một bộ các nguyên tắc tài chính: một stablecoin đa thế chấp được hỗ trợ bởi các tài sản chuỗi chéo như Bitcoin, một phái sinh đặt cược không tin cậy và một sàn giao dịch phi tập trung để giải phóng tính thanh khoản và tạo sức mạnh cho các đổi mới tài chính. Acala là nền tảng mở trên thực tế dành cho các ứng dụng tài chính để sử dụng các hợp đồng thông minh hoặc các giao thức tích hợp với khả năng xuyên chuỗi độc lập và bảo mật mạnh mẽ.

[Discord](https://discord.gg/vdbFVCH) | [Website](https://acala.network/) | [Twitter](https://twitter.com/AcalaNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [Acala Wiki](https://github.com/AcalaNetwork/Acala/wiki) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc)