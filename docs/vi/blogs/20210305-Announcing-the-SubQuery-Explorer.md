# Công bố SubQuery Explorer

Kể từ khi công bố SubQuery với thế giới chỉ một tháng trước, phản hồi mà chúng tôi nhận được từ cộng đồng Polkadot đã rất tích cực. Chúng tôi đã thu hút được hàng nghìn người theo dõi trên các kênh của mình và đã có hơn 1.353 lượt cài đặt từ NPM. Chúng tôi được truyền cảm hứng khi nhận được tất cả các thông điệp ủng hộ và thấy được sự tương tác từ cộng đồng. **Đã đến lúc chúng ta nên đền đáp một điều gì đó!**

Chúng tôi đã làm việc thêm giờ trong tháng trước để phát hành giai đoạn quan trọng tiếp theo trong lộ trình của chúng tôi cho SubQuery. Hôm nay, chúng tôi sẽ thông báo về việc phát hành [SubQuery Explorer](https://explorer.subquery.network/)

![](https://miro.medium.com/max/1400/0*2bDaF3HPgNkpm8Kt)

[SubQuery Explorer](https://explorer.subquery.network/) là một dịch vụ được lưu trữ trực tuyến cung cấp quyền truy cập vào các dự án SubQuery được thực hiện bởi những người đóng góp trên khắp thế giới và được quản lý bởi nhóm SubQuery. Nó thúc đẩy sứ mệnh của chúng tôi là hỗ trợ các nhà phát triển Polkadot bằng cách cung cấp các dịch vụ cơ sở hạ tầng giúp truy cập dữ liệu mạng Polkadot dễ dàng hơn.

Ngày nay, bất kỳ ai cũng có thể truy vấn và trích xuất dữ liệu mạng Polkadot chỉ trong vài phút và miễn phí.

Trình khám phá SubQuery giúp bắt đầu dễ dàng. Chúng tôi đã tạo sẵn các dự án SubQuery cho hai trường hợp sử dụng (tìm hiểu thêm về các trường hợp này bên dưới) và đã lập chỉ mục từng mạng. Chúng tôi đang lưu trữ các node SubQuery này trực tuyến và cho phép mọi người truy vấn miễn phí từng node. Các node được quản lý này sẽ được đội ngũ SubQuery giám sát và điều hành ở mức hiệu suất cho phép các ứng dụng sử dụng và tin tưởng vào chúng.

![](https://miro.medium.com/max/1400/0*3hmnk6sNoO5pdOWc)

Bạn cũng sẽ lưu ý rằng SubQuery Explorer cung cấp một sân chơi để khám phá dữ liệu có sẵn với các truy vấn mẫu. Bạn có thể thử với từng SubQuery Graph bằng trình khám phá này mà không cần triển khai bất kỳ thứ gì trong mã nguồn. Ngoài ra, chúng tôi đã thực hiện một số cải tiến nhỏ đối với tài liệu của mình để hỗ trợ tốt hơn cho các nhà phát triển trong hành trình truy vấn và phân tích dữ liệu Polkadot của thế giới tốt hơn.

![](https://miro.medium.com/max/1400/0*V1Mjpi1-gAT6M8-q)

## **Staking Sum SubQuery Project**([Mã nguồn dự án trên GitHub](https://github.com/subquery/subql-examples/tree/main/sum-reward))

Bạn có thể nhanh chóng tìm thấy tổng doanh thu staking của bất kỳ tài khoản nào kể từ khi bắt đầu bằng cách truy vấn địa chỉ tài khoản của họ. Dự án subquery này lập chỉ mục và ghi lại các tài khoản tham gia staking trên blockchain. Việc tiếp tục lập chỉ mục sẽ tìm ra phần thưởng và số tiền staking thu được cho tài khoản này và tổng hợp số tiền của chúng vào cơ sở dữ liệu.

## **Validator Threshold SubQuery Project (**[Mã nguồn dự án trên GitHub](https://github.com/subquery/subql-examples/tree/main/validator-threshold))

Bạn có thể nhanh chóng thấy số lượng staking tối thiểu cần thiết để 1 validator được bầu. Dự án này là một ví dụ tuyệt vời về việc triển khai các trạng thái truy vấn trong hàm ánh xạ. Đầu tiên, nó tìm thấy các địa chỉ staking đang hoạt động thông qua một truy vấn trạng thái và ghi lại số tiền staking. Sau đó, nó sẽ tính toán số tiền staking tối thiểu và tổng số tiền staking trong chu kỳ này. Cuối cùng, nó ghi lại số lượng người được đề cử tối đa có thể được thưởng.

SubQuery Explorer chỉ là phần đầu tiên trong kế hoạch của chúng tôi để xây dựng một trung tâm cộng đồng cho dữ liệu Polkadot. Chúng tôi sẽ theo đuổi các tính năng sau:

-   Chúng tôi đang tập trung vào các công cụ cộng đồng, vì vậy bạn có thể mong đợi tài liệu chuyên sâu hơn dành cho nhà phát triển, hướng dẫn dễ làm theo và các dự án mẫu làm nổi bật một số trường hợp sử dụng thực sự thú vị cho dữ liệu mà SubQuery hiển thị.
-   Nhiều dự án SubQuery sẽ từ từ trực tuyến dựa trên phản hồi của cộng đồng, chúng tôi mong muốn có một số ý tưởng về những gì bạn muốn xem tiếp theo - hãy tiếp cận trên bất kỳ kênh xã hội nào của chúng tôi (xem bên dưới)
-   Chúng tôi sẽ xây dựng nền tảng đối tác để cộng đồng của chúng tôi có thể xây dựng và tải lên các dự án SubQuery của riêng họ và chúng tôi sẽ quản lý và lưu trữ chúng miễn phí cho bạn.

Bắt đầu truy vấn dữ liệu trên [SubQuery Explorer](https://explorer.subquery.network/)

Xây dựng dự án SubQuery của riêng bạn bằng cách làm theo [tài liệu SubQuery](https://doc.subquery.network/) của chúng tôi

Ghé thăm [website](https://subquery.network/) của chúng tôi

**Nói chuyện với chúng tôi trên:**

-   [hello@subquery.network](mailto:hello@subquery.network)
-   [Discord](https://discord.com/invite/78zg8aBSMG)
-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/#subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)

![](https://miro.medium.com/max/1400/0*tzhwpKRunR7AqFhr)