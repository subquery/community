# Karura Tích hợp SubQuery để tổng hợp và cung cấp dữ liệu DeFi cho các nhà phát triển Kusama

![](https://cdn-images-1.medium.com/max/1600/0*EBj5be1webNUchfi)

Trong những tuần gần đây, Karura và nhóm Acala đã tổ chức lễ ra mắt [Karura Swap](https://apps.karura.network/), sàn giao dịch phi tập trung đầu tiên trong hệ sinh thái Polkadot/Kusama.

Hôm nay, chúng ta cùng khám phá cách SubQuery giúp nền tảng này có thể thực hiện điều đó. Karura đang sử dụng SubQuery để trích xuất và truy vấn dữ liệu từ chuỗi của Karura, giúp các truy vấn nhanh chóng và hiệu quả cho [ứng dụng của Karura](https://apps.karura.network/).

> "Sử dụng Subquery giúp việc xây dựng dApp trở nên dễ dàng, không còn phải thực hiện một loạt lệnh phức tạp để lấy dữ liệu tôi cần."* --- Brett (Nhà phát triển tại Acala)*

Việc phát triển dApps trên Karura giờ đây nhanh hơn nhiều với các dự án SubQuery mới do Karura thực hiện. Có một [dự án SubQuery](https://explorer.subquery.network/subquery/AcalaNetwork/karura) công khai mà cộng đồng Karura có thể phân nhánh và xây dựng bất kỳ dApp nào mà họ mong muốn. Ngoài ra, một [Từ điển Karura](https://explorer.subquery.network/subquery/AcalaNetwork/karura-dictionary) giúp [lập chỉ mục nhanh hơn nhiều](https://subquery.medium.com/subquerys-just-got-a-lot-faster-with-the-dictionary-8a7a1447574).

![](https://cdn-images-1.medium.com/max/1600/1*vvI_pI93mhe4kzSNQ2yMoQ.png)

## Karura là gì?

Được thành lập bởi Acala Foundation, Karura là một mạng có thể mở rộng, tương thích với EVM, được tối ưu hóa cho DeFi và được xây dựng trên Kusama. Đó là một nền tảng DeFi tất cả trong một cung cấp một bộ ứng dụng tài chính bao gồm: một Staking Derivative (thanh khoản KSM), một stablecoin đa thế chấp được hỗ trợ bởi tài sản chuỗi chéo (kUSD) và AMM DEX (Karura Swap) --- tất cả đều có phí gas vi mô có thể được thanh toán bằng bất token nào. Truy cập [tại đây](http://apps.karura.network) để thử ứng dụng sử dụng SubQuery.

![](https://cdn-images-1.medium.com/max/1600/0*g174RcFJwJcw2ITS)

Karura cũng cung cấp một mô hình phân phối token có đạo đức và bền vững cũng như Kho bạc Karura trên chuỗi, cả hai đều hỗ trợ cộng đồng. Karura là dự án đầu tiên giành chiến thắng trong một cuộc đấu giá parachain trên Kusama, thu được số tiền từ cộng đồng lên tới 500.000 KSM (100 triệu USD) từ cộng đồng của dự án. Bởi vì Karura tận dụng Acala EVM, cho phép khả năng tương thích Ethereum với chức năng Substrate* không giới hạn, mạng được ưu tiên hỗ trợ triển khai các dự án DeFi hàng đầu nhằm mở rộng dịch vụ của họ ra ngoài Ethereum.

*[Substrate](http://substrate.dev/)* là framework xây dựng blockchain trên Polkadot và Kusama*

[Đọc thêm về Karura tại đây](https://medium.com/acalanetwork/countdown-to-karura-a-deep-dive-on-the-defi-hub-of-kusama-410066fc1e1f)

## Công cụ mở cho nhà phát triển Karura DApp

Giờ đây, cộng đồng Karura đã xây dựng dApp cộng đồng đầu tiên trong trung tâm DeFi của Kusama. Dưới đây là một ví dụ đơn giản về cách Karura có thể sử dụng SubQuery để tìm và truy xuất các giao dịch ngoại lai trong quá khứ (và các lần chuyển nhượng bên trong chúng) cho bất kỳ tài khoản nào trên Karura --- bạn có thể thấy rằng điều này được thực hiện hoàn toàn trực tuyến trong [ SubQuery explorer ](https://explorer.subquery.network/subquery/AcalaNetwork/karura).

![](https://cdn-images-1.medium.com/max/1600/0*t6stH0LeQC8M5fSp)

## Giới thiệu về SubQuery

[SubQuery](https://subquery.network/) là một lớp tổng hợp dữ liệu sẽ hoạt động giữa các blockchains layer-1 (Karura) và dApps. SubQuery cho phép các nhà phát triển dApp khám phá và chuyển đổi dữ liệu trên chuỗi để xây dựng các dApp trực quan nhanh hơn mà không cần lo lắng về việc xây dựng hoặc quản lý các công cụ để xử lý dữ liệu. [ Bắt đầu ngay bây giờ ](https://doc.subquery.network/).

[Website](https://subquery.network/) | [Documentation](https://doc.subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery)

## Về Karura

[ Karura ](http://acala.network/karura) là trung tâm DeFi tất cả trong một của Kusama. Được thành lập bởi Acala Foundation, Karura là một mạng có thể mở rộng, tương thích với EVM, được tối ưu hóa cho DeFi. Nền tảng cung cấp một bộ ứng dụng tài chính bao gồm: Staking Derivative (thanh khoản KSM), một stablecoin đa thế chấp được hỗ trợ bởi các tài sản chuỗi chéo (kUSD) và Karura Swap, một AMM DEX --- tất cả đều có phí khí vi mô có thể được thanh toán bằng bất kỳ token nào. Karura là một nền tảng blockchain được xây dựng tùy chỉnh cho DeFi và được cung cấp bởi KAR, cho phép giải quyết các giao dịch và thực hiện hợp đồng thông minh, khuyến khích các nhà khai thác node và trao quyền cho chủ sở hữu của nó tham gia quản trị.

[Linktree](http://linktr.ee/karuranetwork) | [Newsletter](https://share.hsforms.com/1X9RxkXk-R62I0VNbATaDXw4h8qc) | [Discord](https://discord.gg/vdbFVCH) | [Website](http://acala.network/karura) | [Twitter](https://twitter.com/KaruraNetwork) | [GitHub](https://github.com/AcalaNetwork/Acala) | [YouTube](http://youtube.com/c/acalanetwork)