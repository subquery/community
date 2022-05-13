# Hướng dẫn Nhập môn SubQuery trên Terra

![](https://miro.medium.com/max/1400/1*DiTE9KuzH0xHLojzGWxOuw.png)

Trong một thời gian dài, chúng tôi đã phát triển và hỗ trợ tinh chỉnh Terra ở hậu trường và thử nghiệm nó với các đối tác phát triển quan trọng (hãy chú ý đến các thông báo trong những ngày tới). Khoảng thời gian kéo dài này cho phép chúng tôi cực kỳ tin tưởng vào khả năng mở rộng, độ tin cậy và các tính năng mà SubQuery sẽ mang lại cho Terra. Trong bài viết này, chúng tôi chia sẻ hướng dẫn chi tiết dành cho nhà phát triển và lộ trình cho toàn thể cộng đồng Terra sử dụng để giải quyết nhu cầu lập chỉ mục dữ liệu của họ.

SubQuery là một công cụ lập chỉ mục dữ liệu mở, linh hoạt và nhanh chóng. Công cụ lập chỉ mục mở của chúng tôi được thiết kế để giúp các nhà phát triển xây dựng API của riêng họ trong vài giờ và nó được thiết kế để lập chỉ mục các chuỗi cực kỳ nhanh chóng với sự hỗ trợ của từ điển (các chỉ mục được tính toán trước). Kinh nghiệm của chúng tôi với khách hàng trên tất cả các lĩnh vực trên Polkadot (ví, mạng, trình khám phá, NFT, DeFi, quét chuỗi, v. v.) đã giúp chúng tôi xây dựng điều này.

Đây vẫn là phiên bản đầu tiên và mặc dù chúng tôi nghĩ là nó vượt xa "bản beta", chúng tôi sẽ đánh giá cao nếu có bất kỳ lỗi nào có thể được báo cáo cho nhóm của chúng tôi để có thể giải quyết chúng nhanh chóng.

<iframe width="656" height="369" src="https://www.youtube.com/embed/dS7h3isQCeA" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Tại sao lại chọn SubQuery?

Các ứng dụng trên hệ sinh thái Terra đã phát triển mạnh mặc dù thiếu nghiêm trọng một số công cụ chính dành cho nhà phát triển và dịch vụ cơ sở hạ tầng. Thật đáng kinh ngạc khi thấy, và được là minh chứng cho động lực và sự khéo léo của các Lunatics ở Terra. Hầu hết các trường hợp khi chúng tôi hỏi các nhóm về cách họ giải quyết nhu cầu lập chỉ mục dữ liệu của họ, đó là:

- ** Xây dựng giải pháp của riêng bạn: ** Một triển khai tùy chỉnh do chính bạn chạy được tạo riêng cho ứng dụng của bạn. Vậy tại sao phải phát minh lại bánh xe? SubQuery đang tập trung vào việc xây dựng một trình lập chỉ mục mở, nhanh và đáng tin cậy - chúng tôi ở đây để giúp bạn tiết kiệm thời gian
- ** Thiết kế hợp đồng thông minh cho các truy vấn: ** Một số nhóm thậm chí còn triển khai các câu hỏi tùy chỉnh trong hợp đồng thông minh của họ để cho phép cụ thể các truy vấn nâng cao hơn cho logic ứng dụng của họ.

Tại SubQuery, chúng tôi có một SDK mã nguồn mở dễ sử dụng và nhanh chóng. Nó cung cấp cho bạn một điểm cuối GraphQL tiêu chuẩn hoặc bạn chỉ có thể truy vấn trực tiếp cơ sở dữ liệu. Với nó, bạn có thể lập chỉ mục một tập hợp dữ liệu độc đáo từ các hợp đồng thông minh của riêng mình, cho phép bạn tạo ra một sản phẩm vượt trội giúp đánh bật đối thủ cạnh tranh của bạn! Chúng tôi cung cấp cho bạn sự linh hoạt để có được dữ liệu bạn cần ở dạng phù hợp nhất.

Độ tin cậy là điểm chính yếu và bạn cần một nền tảng đáng tin cậy và có thể mở rộng để lưu trữ nó. [ Dịch vụ được quản lý của SubQuery ](https://subquery.network/managedservices) là giải pháp lưu trữ hàng đầu trong ngành dành cho tất cả khách hàng mà đang phục vụ hàng trăm triệu yêu cầu hàng ngày cho các dự án lớn nhất trên Polkadot. Chúng tôi cung cấp cho [ khách hàng cấp doanh nghiệp ](./20211228-enterprise-hosted.md) các dịch vụ như cơ sở dữ liệu chuyên dụng, cụm dự phòng, định tuyến đa cụm thông minh cũng như giám sát và phân tích nâng cao. Chúng sẽ hỗ trợ ứng dụng của bạn khi bạn đã sẵn sàng và sẽ mở rộng quy mô cùng với bạn.

Và cuối cùng, trong vài tháng nữa, bạn sẽ có thể hoàn toàn phi tập trung hóa cơ sở hạ tầng SubQuery của mình với Mạng SubQuery, tương lai của cơ sở hạ tầng Web3. Mạng SubQuery sẽ lập chỉ mục và cung cấp dữ liệu dự án của bạn cho cộng đồng toàn cầu theo cách được khuyến khích và có thể xác minh. Nó được thiết kế để hỗ trợ bất kỳ dự án SubQuery nào từ bất kỳ mạng Layer 1 nào bao gồm cả Terra, vì vậy bạn có thể tận dụng quy mô thống nhất của Mạng SubQuery từ khi khởi chạy.

## Hướng dẫn cài đặt

Trước tiên, bạn sẽ cần cài đặt phiên bản gần đây của @subql/cli qua lệnh npm i -g @subql/cli@latest

Cách tốt nhất là bắt đầu với [ dự án khởi đầu của chúng tôi ](https://github.com/subquery/terra-subql-starter), dự án này chứa một dự án đang chạy với ví dụ về tất cả các chức năng ánh xạ: Dự án này lập chỉ mục như sau:

- **BlockHandler:** Tất cả các khối và hàm băm và chiều cao của chúng
- **TransactionHandler:** Tất cả các giao dịch và hàm băm, chiều cao và dấu thời gian của chúng
- **EventHandler:** Tất cả các sự kiện chuyển hợp đồng thông minh và hàm băm, chiều cao, người gửi, người nhận và số tiền của chúng từ một địa chỉ hợp đồng thông minh đã lọc (bLuna)
- **MessageHandler:** Tất cả các thông báo hợp đồng thông minh và dữ liệu băm, chiều cao, hợp đồng, người gửi và execute_msg của chúng từ một địa chỉ hợp đồng thông minh đã lọc (bLuna)

SubQuery hỗ trợ lập chỉ mục các hợp đồng thông minh của Terra bao gồm cả đăng ký giao dịch và tin nhắn cũng như trình xử lý. Bạn có thể xem một ví dụ hoạt động về hỗ trợ Hợp đồng thông minh trong [ dự án dành cho người mới bắt đầu ](https://github.com/subquery/terra-subql-starter) và đọc tài liệu về [ SubQuery University ](http://localhost:8080/build/manifest.html#mapping-handlers-and-filters).

Việc triển khai trên Terra của SubQuery đã được thiết kế để hoạt động gần như giống hệt với việc hỗ trợ Polkadot của SubQuery và theo cách tương tự như cách tiếp cận của Graph. Chúng tôi đã cập nhật [ SubQuery University ](https://university.subquery.network/) để thêm thông tin cụ thể về Terra vào tài liệu tổng hợp của SubQuery. Bạn có thể bắt đầu bằng cách làm theo [ hướng dẫn bắt đầu tuyệt vời này tại đây ](http://university.subquery.network/quickstart/quickstart-terra.html).

## Triển khai Dự án của bạn với Dịch vụ được Quản lý của SubQuery

Mặc dù bạn sẽ luôn có thể chạy dự án của mình tren cơ sở hạ tầng của riêng bạn một cách dễ dàng, nhưng dịch vụ được quản lý của [ SubQuery ](https://subquery.network/managedservices) hiện hỗ trợ dự án Terra. Một số dự án lớn nhất phụ thuộc vào dịch vụ được quản lý ở [ cấp doanh nghiệp ](./20211228-enterprise-hosted.md) của SubQuery và bây giờ bạn cũng có thể làm được. Là một phần của thỏa thuận ra mắt đối tác, chúng tôi sẽ cung cấp cho bạn 3 tháng lưu trữ miễn phí.

Bạn có thể [ làm theo hướng dẫn tại đây ](https://university.subquery.network/run_publish/publish.html) để xuất bản dự án Terra SubQuery của mình lên dịch vụ được quản lý của chúng tôi. Xin lưu ý rằng bạn phải lưu trữ [ dự án SubQuery của mình bằng IPFS ](https://university.subquery.network/run_publish/publish.html) chứ không phải GitHub.

Bạn có thể cập nhật dự án dịch vụ được quản lý của mình bao nhiêu tùy thích. Chúng tôi thậm chí còn có [ vị trí triển khai theo giai đoạn ](./20210604-Deployment-Slots-are-here-for-SubQuery-Projects.md) để cho phép bạn thực hiện 'nâng cấp màu xanh lam/xanh lá' cây liền mạch mà không có bất kỳ thời gian ngừng hoạt động nào. Giai đoạn này cũng có thể được sử dụng để chạy một phiên bản SubQuery rõ ràng với cơ sở dữ liệu mới để lập lại chỉ mục nền hoàn chỉnh cho dự án của bạn. Khách hàng thường liên kết vị trí dàn dựng với các phiên bản dàn/phát triển của ứng dụng của họ.

Sau khi được triển khai, bạn có thể truy cập dự án của mình bằng SubQuery Explorer và thực hiện yêu cầu trực tiếp từ ứng dụng của bạn tới điểm cuối được GraphQL cung cấp. Hãy cho chúng tôi biết nếu bạn muốn chúng tôi bật các tính năng nâng cao hơn như [ đăng ký GraphQL ](https://university.subquery.network/run_publish/subscription.html), các truy vấn phức tạp hơn và [ chức năng tổng hợp ](https://university.subquery.network/run_publish/aggregate.html).

Vui lòng thông báo cho chúng tôi khi bạn đã triển khai dự án của mình vì chúng tôi có thể cần hỗ trợ tinh chỉnh kích thước lô để đảm bảo rằng nút lưu trữ Terra của chúng tôi chạy tốt cho dự án của bạn.

## Hỗ trợ của SubQuery cho Terra

Hôm nay chúng tôi chia sẻ những điều sau:

-   Lập chỉ mục nâng cao các khối, sự kiện
-   Terra Dictionary: Các chỉ mục được tính toán trước để [ giảm đáng kể thời gian lập chỉ mục ](./20210630-SubQuery-Just-Got-a-lot-Faster-with-the-Dictionary.md)
-   Hỗ trợ đầy đủ cho Terra trong dịch vụ được quản lý [ cấp doanh nghiệp ](./20211228-enterprise-hosted.md) miễn phí của chúng tôi
-   Tài liệu trực quan của [ SubQuery University ](https://university.subquery.network/)

Trong những tuần tới, bạn có thể mong đợi:

-   Khóa học từng bước trong [ Học viện SubQuery ](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   Hỗ trợ đầy đủ cho Terra trong Mạng SubQuery phi tập trung của chúng tôi (bạn sẽ sớm thấy một dự án trong mạng thử nghiệm Frontier hiện tại của chúng tôi)

---

Việc ra mắt bản beta của chúng tôi cho Terra đánh dấu một cột mốc quan trọng trong cam kết của chúng tôi trong việc cung cấp các công cụ lập chỉ mục nâng cao cho cộng đồng Terra để giúp các nhà phát triển tiến xa hơn, nhanh hơn. Chúng tôi mong muốn nhận được phản hồi từ cộng đồng để cải thiện dịch vụ của chúng tôi và tăng khả năng hiển thị của chúng tôi với tư cách là đối tác cơ sở hạ tầng đáng tin cậy cho một trong những cộng đồng nhà phát triển lớn mạnh nhanh nhất trong Web3

James Bayly

## Các đường dẫn

-   [Hướng dẫn bắt đầu](https://university.subquery.network/quickstart/quickstart-terra.html)
-   [SubQuery University (Tài liệu)](https://university.subquery.network/)
-   [Dự án mẫu trên Terra](https://github.com/subquery/terra-subql-starter)
-   [Dịch vụ quản lý](https://explorer.subquery.network/)
-   [Xuất bản Dự án Terra của riêng bạn lên Dịch vụ Quản lý](https://project.subquery.network/)

## Giới thiệu về SubQuery

[ SubQuery ](https://subquery.network/) là bộ công cụ dành cho nhà phát triển blockchain cho phép những người khác xây dựng các ứng dụng Web3 trong tương lai. Dự án SubQuery là một API hoàn chỉnh để tổ chức và truy vấn dữ liệu từ chuỗi Layer 1. Hiện đang phục vụ các dự án Polkadot, Substrate, Avalanche và bây giờ là Terra, dữ liệu dưới dạng dịch vụ này cho phép các nhà phát triển tập trung vào phát triển cốt lõi sản phẩm và giao diện người dùng của họ mà không cần lãng phí thời gian vào việc xây dựng chương trình phụ trợ để xử lý dữ liệu. Mạng SubQuery đề xuất kích hoạt giải pháp có thể mở rộng và đáng tin cậy tương tự này, nhưng theo cách hoàn toàn phi tập trung.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
