# Bản Beta của SubQuery được phát hành cho Avalanche

![](https://miro.medium.com/max/1400/1*BiJaESR69-vDimBJmXhQvw.png)

Hôm nay, sau nhiều tháng cải tiến, tái cấu trúc và thử nghiệm, chúng tôi rất vui khi chia sẻ sự bản hỗ trợ beta của giải pháp lập chỉ mục mở với cộng đồng Avalanche. Sau khi thành lập SubQuery là công cụ lập chỉ mục dữ liệu hàng đầu trong Polkadot, [thông báo gần đây của chúng tôi về việc mở rộng sang Avalanche](./20220321-avalache.md) trong [Avalanche Summit](https://www.avalanchesummit.com/agenda) gần đây đã nhận được sự hào hứng của các nhà phát triển mong muốn một sản phẩm linh hoạt và có thể mở rộng công cụ lập chỉ mục.

Làm theo hướng dẫn beta tại đây: https://university.subquery.network/quickstart/quickstart-avalanche.html

SubQuery là một công cụ lập chỉ mục dữ liệu mở, linh hoạt và nhanh chóng. Công cụ lập chỉ mục mở của chúng tôi được thiết kế để giúp các nhà phát triển xây dựng API của riêng họ trong vài giờ và nó được thiết kế để lập chỉ mục các chuỗi cực kỳ nhanh chóng với sự hỗ trợ của từ điển (các chỉ mục được tính toán trước). Kinh nghiệm của chúng tôi với khách hàng trên tất cả các lĩnh vực trên Polkadot (ví, mạng, trình khám phá, NFT, DeFi, quét chuỗi, v. v.) đã giúp chúng tôi xây dựng điều này.

Kể từ hôm nay, các nhà phát triển của Avalanche sẽ có thể truy cập vào bản beta của cùng một giải pháp indexing được sử dụng rộng rãi trên Polkadot một cách nhanh chóng, linh hoạt và mở. Vì đây là phiên bản beta nên nó có thể có một số vấn đề. Do đó, chúng tôi sẽ đánh giá cao nếu có bất kỳ lỗi nào được báo cáo để team có thể giải quyết chúng một cách nhanh chóng.

## Tại sao lại chọn SubQuery?

_Ở thời điểm hiện tại, đã có một số lựa chọn khác trong Avalanche, vậy tại sao bạn lại cần xây dựng dự án với SubQuery?_

Tôi đã được hỏi câu hỏi này bởi rất nhiều người mà tôi đã may mắn được gặp tại Avalanche Summit. Ở SubQuery, chúng tôi có ba giải pháp khác nhau:

- Xây dựng giải pháp của riêng bạn: Tại sao phải phát minh lại bánh xe? SubQuery đang tập trung vào việc xây dựng một trình lập chỉ mục mở, nhanh và đáng tin cậy --- chúng tôi ở đây để giúp bạn tiết kiệm thời gian
- Các dịch vụ dữ liệu được chuẩn hóa hoặc "API hợp nhất (unified APIs)": Nếu bạn đang xây dựng cùng một ứng dụng trên cùng một hợp đồng thông minh cơ bản như những dự án khác, thì những provider này thực sự rất tuyệt vời, nhưng bạn thì không. Bạn cần một bộ dữ liệu duy nhất cho phép bạn tạo ra một sản phẩm vượt trội giúp đánh bật mọi đối thủ cạnh tranh! Chúng tôi cung cấp cho bạn sự linh hoạt để có được dữ liệu bạn cần ở dạng phù hợp nhất
- Các dịch vụ dữ liệu GraphQL mở khác: Những ai đã từng sử dụng chúng đều gặp phải vấn đề tương tự nhau, chúng thiếu nghiêm trọng sự hỗ trợ của nhà phát triển và có một số vấn đề nghiêm trọng về hiệu suất. Ngoài ra, chúng có phạm vi hỗ trợ trên một số contract chain mà không có kế hoạch mở rộng sang subnet con tiếp theo

Tại SubQuery, chúng tôi có một SDK mã nguồn mở dễ sử dụng và nhanh chóng. Nó cung cấp cho bạn một điểm cuối GraphQL tiêu chuẩn hoặc bạn chỉ có thể truy vấn trực tiếp cơ sở dữ liệu.

Độ tin cậy là điểm chính yếu và bạn cần một nền tảng đáng tin cậy và có thể mở rộng để lưu trữ nó. [Dịch vụ được quản lý bởi SubQuery](https://subquery.network/managedservices) là giải pháp lưu trữ hàng đầu trong ngành dành cho tất cả khách hàng mà đang phục vụ hàng trăm triệu yêu cầu hàng ngày cho các dự án lớn nhất trên Polkadot. Chúng tôi cung cấp cho [khách hàng cấp doanh nghiệp](./20211228-enterprise-hosted.md) các dịch vụ như cơ sở dữ liệu chuyên dụng, cụm dự phòng, định tuyến đa cụm thông minh cũng như giám sát và phân tích nâng cao. Chúng sẽ hỗ trợ ứng dụng của bạn khi bạn đã sẵn sàng và sẽ mở rộng quy mô cùng với bạn.

Và cuối cùng, trong vài tháng nữa, bạn sẽ có thể hoàn toàn phi tập trung hóa cơ sở hạ tầng SubQuery của mình với Mạng SubQuery, tương lai của cơ sở hạ tầng Web3. Mạng SubQuery sẽ lập chỉ mục và cung cấp dữ liệu dự án của bạn cho cộng đồng toàn cầu theo cách được khuyến khích và có thể xác minh. Nó được thiết kế để hỗ trợ bất kỳ dự án SubQuery nào từ bất kỳ mạng Layer 1 nào bao gồm cả Avalanche, vì vậy bạn có thể tận dụng quy mô thống nhất của Mạng SubQuery từ khi khởi chạy.

## Hướng dẫn cài đặt

Làm theo hướng dẫn beta tại đây: https://university.subquery.network/quickstart/quickstart-avalanche.html

Trước tiên, bạn cần cài đặt @subql/cli via *npm i -g @subql/cli*

Cách tốt nhất là bắt đầu với dự án khởi đầu của chúng tôi, dự án này chứa một dự án đang chạy với ví dụ về tất cả các chức năng ánh xạ: https://github.com/subquery/avalanche-subql-starter. Dự án này index từ [ Pangolin Smart Contract ](https://snowtrace.io/token/0x60781c2586d68229fde47564546784ab3faca982):

- BlockHandler: Tất cả các khối và thông tin cốt lõi của chúng
- TransactionHandler: Tất cả các giao dịch từ chức năng phê duyệt bên trong hợp đồng thông minh Pangolin (Pangolin smart contract)
- EventHandler: Tất cả các sự kiện chuyển từ Pangolin smart contract

Việc triển khai trên Avalanche của SubQuery đã được thiết kế để hoạt động gần như giống hệt với việc hỗ trợ Polkadot của SubQuery và theo cách tương tự như cách tiếp cận của Graph. Chúng tôi đã cập nhật [SubQuery University](https://university.subquery.network/build/introduction.html) để thêm thông tin cụ thể về Avalanche vào tài liệu tổng hợp của SubQuery. Bạn có thể bắt đầu bằng cách làm theo [hướng dẫn bắt đầu tuyệt vời này tại đây](https://university.subquery.network/quickstart/quickstart-avalanche.html).

## Hỗ trợ của SubQuery cho Avalanche

We are completing the first phase of our full support for the Avalanche ecosystem.

![](https://miro.medium.com/max/1400/0*GUKZJfJCz1nB_3zc)

Hôm nay chúng tôi chia sẻ những điều sau:

- Lập chỉ mục chuỗi hợp đồng nâng cao
- Avalanche Dictionary: Các chỉ mục được tính toán trước để [giảm đáng kể thời gian lập chỉ mục](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
- Hỗ trợ đầy đủ cho Avalanche trong dịch vụ được quản lý [cấp doanh nghiệp](./20211228-enterprise-hosted.md) miễn phí của chúng tôi
- Tài liệu trực quan của [SubQuery University](https://university.subquery.network/)

Trong những tuần tới, bạn có thể mong đợi:

- Khóa học từng bước trong [Học viện SubQuery](./20211018-subquery-launches-the-subquery-academy.md)
- Hỗ trợ đầy đủ cho Avalanche trong Mạng SubQuery phi tập trung của chúng tôi (bạn sẽ sớm thấy một dự án trong mạng thử nghiệm Frontier hiện tại của chúng tôi)

With the number of Subnets planned over the coming months, there will be a huge need for fast, open, and flexible indexing support that works across all compatible Subnets. We have experience implementing this level of configurability for Polkadot's parachains, and are investigating how to provide the same outcome for Avalanche (e.g. by importing custom implementations of snowman.Block etc).

The launch of our beta support for Avalanche marks a significant milestone in our commitment to offer enhanced indexing tools for the Avalanche community to enable her developers to go further, faster. We are eager to get feedback from the community in order to improve our offering and increase our visibility as a trusted infrastructure partner for one of the fastest growing developer communities in Web3

We are now looking for launch partners that we can closely support as they develop their first SubQuery projects in this ecosystem. Reach out to me at james.bayly@subquery.network if you want to be first on the journey with us.

_James Bayly_

Follow the beta guide here: https://university.subquery.network/quickstart/quickstart-avalanche.html

## Giới thiệu về SubQuery

[SubQuery](https://subquery.network/) là bộ công cụ dành cho nhà phát triển blockchain cho phép những người khác xây dựng các ứng dụng Web3 trong tương lai. Một dự án SubQuery là một API hoàn chỉnh để tổ chức và truy vấn dữ liệu từ các chuỗi layer 1. Hiện đang phục vụ các dự án Polkadot, Substrate, Avalanche và Terra, dữ liệu dưới dạng dịch vụ này cho phép các nhà phát triển tập trung vào phát triển cốt lõi sản phẩm và giao diện người dùng của họ mà không cần lãng phí thời gian vào việc xây dựng chương trình phụ trợ để xử lý dữ liệu. SubQuery Network đề xuất kích hoạt giải pháp có thể mở rộng và đáng tin cậy tương tự như thế này, nhưng theo cách hoàn toàn phi tập trung.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
