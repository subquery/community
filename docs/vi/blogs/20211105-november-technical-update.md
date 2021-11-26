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

Just like a normal SubQuery project, you use a mapping function to transform off chain data to the GraphQL entities that you define, the difference is that instead of a `SubstrateEvent` or `SubstrateExtrinsic`, your mapping function will receive a `MoonbeamCall` or `MoonbeamEvent` which are based on Ether's [TransactionResponse](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse) or [Log](https://docs.ethers.io/v5/api/providers/types/#providers-Log) type. [You can read more about these here](https://doc.subquery.network/create/moonbeam/#moonbeamcall).

[Read the full documentation on this process here](https://doc.subquery.network/create/moonbeam/#moonbeamcall)

## Example Project

There is a complete example project that indexes eth `transfer` events and `approve` smart contract calls. The code for this example project is [here on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter) or accessible via the [live SubQuery project on SubQuery Explorer here](https://explorer.subquery.network/subquery/subquery/moonriver-evm-starter-project).

The bulk of the changes happen in the Manifest file (`project.yaml`). You can see below that we have [extended call filters](https://doc.subquery.network/create/moonbeam/#call-filters) to support either [function signature strings](https://docs.ethers.io/v5/api/utils/abi/fragments/#FunctionFragment) or the function sighash to filter the function called on the contract. For [event filters](https://doc.subquery.network/create/moonbeam/#event-filters), you can use topics filtering that follows the [Ethereum JSON-PRC log filters standard found here](https://docs.ethers.io/v5/concepts/events/). Note that SubQuery introduces more advanced filters than other indexers for Moonbeam EVM and these improvements should significantly benefit developers.

![](https://miro.medium.com/max/700/1*4JRHItnILfCie4FT6sYLEA.png)

If you are familiar with how Substrate based SubQuery project are made, you’ll notice how similar the mapping functions are for the new Moonriver support. Each mapping function receives a `MoonbeamCall` or `MoonbeamEvent` and processes them just like any other SubQuery project.

![](https://miro.medium.com/max/700/1*k4_uJYYCsTnPRRJ7avq2WA.png)

If you have any questions about this make sure you [check our docs](https://doc.subquery.network/create/moonbeam) or reach out to us on our #technical-support channel in our [Discord community](https://discord.com/invite/subquery).

[Clone the example project on GitHub](https://github.com/subquery/tutorials-moonriver-evm-starter)

As you can see, creating a Moonriver or Moonbase Alpha project that indexes both Substrate and EVM data in a single project is extremely simple and largely similar. You can use SubQuery’s advanced scaffolding tools to speed up your dApp development and take advantage or richer indexing for you data to build more intuitive dApps. We can’t wait to see what you build!

## About SubQuery

SubQuery is a data aggregation layer that operates between the layer-1 blockchains (such as Moonriver and Polkadot) and DApps. This service unlocks blockchain data and transforms it to a queryable state so that it can be used in intuitive applications. It allows DApp developers to focus on their core use case and front-end, without needing to waste time on building a custom backend for data processing.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Github](https://github.com/subquery/subql) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## About Moonbeam

Moonbeam is an Ethereum-compatible smart contract platform on the Polkadot network that makes it easy to build natively interoperable applications. This Ethereum compatibility allows developers to deploy existing Solidity smart contracts and DApp frontends to Moonbeam with minimal changes. As a parachain on the Polkadot network, Moonbeam will benefit from the shared security of the Polkadot relay chain and integrations with other chains that are connected to Polkadot. Currently in active development by PureStake, Moonbeam is expected to reach MainNet by Q4 2021. Learn more: [https://moonbeam.network/](https://moonbeam.network/).
