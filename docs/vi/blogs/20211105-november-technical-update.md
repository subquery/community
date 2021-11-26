# SubQuery tháng 11: Cập nhật EVM và Tập tin kê khai

![](https://miro.medium.com/max/1400/1*q9GErDrvAyacOPm97krV6Q.png)

**Đọc thêm để tìm hiểu sâu hơn về các yếu tố kỹ thuật trong bản phát hành mới nhất của SubQuery**

# Hỗ trợ cho các tệp ngoại chuỗi trong Tập tin kê khai Dự án

Hôm nay, [phiên bản 0.2.0](https://doc.subquery.network/create/manifest/) của tập tin kê khai dự án của chúng tôi (`project.yaml`) đã chính thức được ra mắt. Phiên bản mới này cung cấp cho các nhà phát triển nhiều cải tiến đã được yêu cầu bởi khách hàng.

Quan trọng nhất, giờ đây bạn có thể tham chiếu khái niệm của một loại chuỗi bất kỳ bao gồm các tuỳ chỉnh khi bạn lập chỉ mục chuỗi Substrate. Điều này cho phép bạn kết nối một dự án SubQuery mới với bất kỳ chuỗi Substrate nào bao gồm tất cả các parachain của Kusama. Đây phải là một tệp chuỗi tiêu chuẩn chỉ ra các loại cụ thể được hỗ trợ bởi chuỗi khối này ở định dạng `.json` hoặc `.yaml`.

Giải pháp này cho phép bạn tránh sao chép và quản lý các khái niệm chuỗi trong chính tập tin kê khai và cho phép bạn chỉ sao chép [các tệp chuỗi đã xuất bản mà được liệt kê trong các kho lưu trữ như PolkadotJS](https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/api/spec).

[Bạn có thể đọc thêm về tập tin kê khai mới bao gồm cách bạn có thể di chuyển các dự án của mình sang tập tin đó ngay trong tài liệu cập nhật của chúng tôi.](https://doc.subquery.network/create/manifest/)

# Hỗ trợ Moonbeam EVM

Tuần trước, chúng tôi đã [thông báo rằng chúng tôi đang làm việc với Moonbeam để hỗ trợ lập chỉ mục EVM và Substrate hoàn chỉnh cho Moonriver](https://subquery.medium.com/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff).

Cùng với thông báo đó, hôm nay chúng tôi sẽ cung cấp tất cả các tài nguyên dành cho nhà phát triển mà bạn cần để có thể bắt đầu.

Hiện tại, không có công cụ mã nguồn mở nào cho phép các nhà phát triển thu thập và truy vấn dữ liệu một cách linh hoạt trên cả Ethereum và Polkadot/Kusama. Hạn chế này có thể khiến các giải pháp dApps trong Moonriver bị đưa vào lớp hợp đồng thông minh và do đó hạn chế tiềm năng của chúng đối với người tiêu dùng trên cả hai mạng lưới đang phát triển mạnh này. Sự hợp tác này với Moonbeam mang đến một giải pháp lập chỉ mục dữ liệu thống nhất và hoàn chỉnh cho tất cả dữ liệu chuỗi khối trong Moonriver và sẽ mang lại lợi ích to lớn cho hệ sinh thái ứng dụng đang phát triển trên đó.

**SubQuery sẽ là khách mời trong Hội thảo Moonbuilders tiếp theo vào Thứ Tư, ngày 1 tháng 12**. [**Các bạn hãy đăng ký tại đây**](https://www.crowdcast.io/e/moonbuilders-ws/10)**.**

![](https://miro.medium.com/max/600/1*AET6Ek_PqFDRoc29Jiitnw.gif)

[Trước hết, hãy làm quen với tài liệu cập nhật về cách kết nối và lập chỉ mục dữ liệu từ Moonbeam, Moonbase Alpha và Moonriver.](https://doc.subquery.network/create/moonbeam/) Quy trình lập chỉ mục dữ liệu Moonbeam chỉ bao gồm hai bước:

## Bước 1: Thêm nguồn dữ liệu tùy chỉnh của Moonbeam

Chúng tôi đã tạo một bộ xử lý dữ liệu được thiết kế riêng để làm việc với việc triển khai [Frontier](https://github.com/paritytech/frontier) của Moonbeam. Nó cho phép bạn tham chiếu các tài nguyên ABI cụ thể được bộ xử lý sử dụng để phân tích cú pháp các đối số và địa chỉ hợp đồng thông minh nơi mà các sự kiện bắt đầu hoặc lệnh gọi được thực hiện. [Bạn có thể đọc thêm tại đây](https://doc.subquery.network/create/moonbeam/#data-source-spec).

SubQuery giới thiệu các bộ lọc nâng cao hơn các trình lập chỉ mục khác, cho phép lọc các giao dịch không theo hợp đồng, người gửi giao dịch, hợp đồng và các đối số nhật ký được lập chỉ mục. Điều này cho phép các nhà phát triển xây dựng nhiều loại dự án phục vụ cho nhu cầu dữ liệu cụ thể của họ.

## Bước 2: Lập chỉ mục dữ liệu Moonbeam

Cũng giống như một dự án SubQuery thông thường, bạn sử dụng một hàm ánh xạ để chuyển đổi dữ liệu chuỗi thành các thực thể GraphQL mà bạn đã xác định. Sự khác biệt là thay vì nhận được một `SubstrateEvent` hoặc `SubstrateExtriuality`, hàm ánh xạ của bạn sẽ nhận được một `MoonbeamCall` hoặc `MoonbeamEvent` dựa trên các dạng [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) hoặc [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) của Ether. [Bạn có thể đọc thêm về những điều này tại đây](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Đọc tài liệu đầy đủ về quy trình này tại đây](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Dự án mẫu

Có một dự án mẫu hoàn chỉnh lập chỉ mục các sự kiện `transfer` trên Ethereum và các cuộc gọi `approve` của hợp đồng thông minh. Mã cho dự án mẫu này hiện có [trên GitHub ](https://github.com/subquery/tutorials-moonriver-evm-starter) hoặc có thể được truy cập thông qua [dự án SubQuery trên SubQuery Explorer tại đây](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

Phần lớn các thay đổi xảy ra trong tập tin kê khai (`project.yaml`). Bạn có thể thấy như dưới đây rằng chúng tôi có [ các bộ lọc cuộc gọi mở rộng](https://doc.subquery.network/create/moonbeam/#call-filters) để hỗ trợ [ các chuỗi hàm ký](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) hoặc hàm sighash để lọc các hàm được gọi trên hợp đồng. Đối với [bộ lọc sự kiện](https://doc.subquery.network/create/moonbeam/#event-filters), bạn có thể sử dụng bộ lọc chủ đề tuân theo [tiêu chuẩn bộ lọc nhật ký của Ethereum JSON-PRC tại đây](https://docs.ethers.io/v5/concepts/events/). Lưu ý rằng SubQuery giới thiệu nhiều bộ lọc nâng cao hơn các bộ lập chỉ mục khác cho Moonbeam EVM và những cải tiến này sẽ mang lại lợi ích đáng kể cho các nhà phát triển.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

Nếu bạn đã quen với cách thực hiện dự án SubQuery dựa trên Substrate, bạn sẽ nhận thấy các hàm ánh xạ cũng tương tự như đối với việc hỗ trợ Moonriver. Mỗi hàm ánh xạ nhận được một `MoonbeamCall` hoặc `MoonbeamEvent` và xử lý chúng giống như bất kỳ dự án SubQuery nào khác.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

Nếu bạn có bất kỳ câu hỏi nào về vấn đề này, hãy [kiểm tra tài liệu của chúng tôi](https://doc.subquery.network/create/moonbeam) hoặc liên hệ với chúng tôi qua kênh #technical-support [trên Discord](https://discord.com/invite/subquery).

[Sao chép dự án mẫu trên GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

Như bạn có thể thấy, việc tạo một dự án Moonriver hoặc Moonbase Alpha lập chỉ mục dữ liệu của cả Substrate và EVM trong một dự án duy nhất là cực kỳ đơn giản và khá tương đồng. Bạn có thể sử dụng các công cụ nâng cao của SubQuery để tăng tốc độ phát triển dApp của mình và tận dụng lợi thế của việc lập chỉ mục phong phú cho dữ liệu của bạn để xây dựng các dApp trực quan hơn. Chúng tôi rất nóng lòng được xem những gì bạn xây dựng!

## Giới thiệu về SubQuery

SubQuery là một lớp tổng hợp dữ liệu hoạt động giữa các blockchain lớp 1 (chẳng hạn như Moonriver và Polkadot) và DApps. Dịch vụ này mở khóa dữ liệu blockchain và chuyển nó sang trạng thái có thể truy vấn để có thể sử dụng trong các ứng dụng trực quan. Nó cho phép các nhà phát triển DApp tập trung vào các tính năng cốt lõi và giao diện người dùng của họ, mà không cần lãng phí thời gian vào việc xây dựng các chương trình phụ trợ tùy chỉnh để xử lý dữ liệu.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Giới thiệu về Moonbeam

Moonbeam là một nền tảng hợp đồng thông minh tương thích với Ethereum trên mạng Polkadot giúp dễ dàng xây dựng các ứng dụng có thể tương tác nguyên bản. Khả năng tương thích Ethereum này cho phép các nhà phát triển triển khai các hợp đồng thông minh Solidity hiện có và giao diện người dùng DApp trên Moonbeam với những thay đổi tối thiểu. Với tư cách là một parachain trên mạng Polkadot, Moonbeam sẽ được hưởng lợi bảo mật của relay chain Polkadot và có thể tích hợp với các chuỗi khác được kết nối với Polkadot. Hiện đang được PureStake tích cực phát triển, Moonbeam dự kiến sẽ khởi chạy MainNet vào quý 4 năm 2021. Tìm hiểu thêm tại đây: [https://moonbeam.network/](https://moonbeam.network/).
