# SubQuery Cung Cấp Cho Khách Hàng Dịch Vụ Hỗ Trợ Doanh Nghiệp

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

Khi cộng đồng của chúng tôi phát triển lớn hơn, chúng tôi thấy hàng trăm lượt triển khai và lưu lượng truy cập cũng nhiều hơn theo cấp số nhân vào dịch vụ lưu trữ của chúng tôi mỗi ngày. Tuy nhiên, nhóm nghiên cứu tại SubQuery đang vượt qua thách thức này và mở rộng quy mô dịch vụ để đáp ứng nhu cầu chưa từng có đối với các công cụ của khách hàng, đồng thời vẫn giữ cho [dịch vụ lưu trữ](https://projects.subquery.network/) miễn phí.

Nhiều khách hàng hiện đang nhờ vào SubQuery để cung cấp dữ liệu quan trọng về sứ mệnh cho các ứng dụng sản xuất của họ. Những khách hàng này đại diện cho một số ví lớn nhất ([Nova](https://novawallet.io/) và [Fearless](https://fearlesswallet.io/)), scanners ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/), và [DotMarketCap](https://dotmarketcap.com/)), nền tảng NFT ([Kodadot](https://kodadot.xyz/) và [Yuser](https://yuser.co/)), và nhiều hơn nữa. Đây là những ứng dụng khổng lồ mà cộng đồng Polkadot sử dụng hàng ngày và luôn phải trực tuyến.

Hiệu suất và độ tin cậy của dịch vụ lưu trữ của chúng tôi luôn được đặt lên hàng đầu. Bởi vì team "chị em" của chúng tôi là OnFinality, một nhà cung cấp cơ sở hạ tầng lớn nhất của Polkadot, vì vậy chúng tôi có nhiều kinh nghiệm trong lĩnh vực này. Do đó, hôm nay chúng ta sẽ xem xét ba cải tiến gần đây sẽ làm cho SubQuery trở thành nền tảng dữ liệu đáng tin cậy, có thể mở rộng và hoạt động hiệu quả nhất trong Polkadot.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

# Cơ sở dữ liệu chuyên dụng

Ban đầu, tất cả các dự án SubQuery đều được triển khai tới cơ sở dữ liệu dùng chung trong cơ sở hạ tầng của chúng tôi để tiết kiệm tiền và cho phép dịch vụ của chúng tôi duy trì miễn phí. Tuy nhiên, điều này làm cho các dự án có lưu lượng truy cập cao với các tập dữ liệu lớn, sẽ bóp nghẹt các dự án khác được lưu trữ trong cùng một cơ sở dữ liệu.

Nếu bạn đang xây dựng một dự án được thiết kế để sử dụng trong sản xuất, chúng tôi cung cấp một cơ sở dữ liệu chuyên dụng được lưu trữ trong các cụm SubQuery của chúng tôi có thể cung cấp cho dự án của bạn tất cả các tài nguyên cần thiết để xử lý hàng nghìn truy vấn phức tạp mà không lo ảnh hưởng đến hiệu suất từ những người khác.

Bạn nên liên hệ với chúng tôi tại sales@subquery.network nếu bạn muốn nâng cấp lên phiên bản này. Chúng tôi sao chép dữ liệu của bạn từ các bảng hiện có của bạn, vì vậy bạn không cần phải mất thời gian lập chỉ mục lại dữ liệu mà bạn đã có, từ đó giúp cho việc đến việc di chuyển dữ liệu mà không có thời gian chết.

# Hỗ trợ nhiều cụm

Khả năng phục hồi và độ tin cậy là tất cả đối với chúng tôi tại SubQuery. Việc có một cụm dự phòng ở một phần riêng biệt trên thế giới có nghĩa là chúng tôi có thể nhanh chóng khôi phục sau sự cố nhà cung cấp dịch vụ đám mây đôi khi khiến các khu vực ngoại tuyến.

Ngoài ra, khi bạn đưa ra yêu cầu đối với một dự án SubQuery trong dịch vụ được lưu trữ của chúng tôi, phần lớn thời gian chờ đợi là do độ trễ. Độ trễ là thời điểm cần thiết để yêu cầu của bạn vòng quanh thế giới đến cụm SubQuery gần nhất và có thể mất đến một hoặc hai giây từ một số vùng xa. Việc có nhiều cụm trên khắp thế giới cho phép chúng tôi giảm phần lớn thời gian yêu cầu (độ trễ).

Chúng tôi đã triển khai nhiều cụm ở các khu vực khác nhau cung cấp cùng một dịch vụ. Công việc này cũng bao gồm một công cụ trong [Dự án SubQuery](https://project.subquery.network/) cho phép bạn triển khai và quản lý dự án của mình trên các cụm này. Chúng tôi cũng đã triển khai các quy trình đảm bảo rằng cơ sở dữ liệu ở các khu vực khác nhau luôn nhất quán, để bất kể yêu cầu của bạn chuyển đến cụm nào, dữ liệu bạn nhận được đều nhất quán.

# Định tuyến thông minh

Khi chúng tôi có các cụm SubQuery đang chạy ở các vùng khác nhau, bước hợp lý tiếp theo là làm cho tính năng này trở nên ẩn đối với người dùng. Người dùng sẽ không bao giờ phải quyết định cụm nào mà yêu cầu của họ chuyển đến, SubQuery sẽ tự động định tuyến các yêu cầu của họ đến cụm khỏe mạnh gần nhất. Đây là những gì định tuyến thông minh của SubQuery cung cấp.

Chúng tôi cung cấp một điểm cuối toàn cầu duy nhất cho mỗi khách hàng cao cấp có định tuyến thông minh tự động áp dụng cho từng và mọi yêu cầu. Dịch vụ này bao gồm giám sát đáng kể liên tục ping từng cụm để kiểm tra sức khỏe và đảm bảo rằng người dùng không bao giờ được chuyển đến một cụm bị quá tải hoặc ngoại tuyến. Điểm cuối toàn cầu tối ưu hóa định tuyến cho từng yêu cầu đến cụm gần nhất để đảm bảo người dùng của bạn nhận được hiệu suất tốt nhất từ các cụm của bạn.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

Tóm lại, những dịch vụ này cho phép chúng tôi tự tin cung cấp dịch vụ cao cấp của mình cho nhiều khách hàng hơn. Chúng tôi làm việc với từng khách hàng để hiểu doanh nghiệp và mục tiêu của họ, sau đó thiết lập dịch vụ để đáp ứng nhu cầu của họ. SubQuery là nhà cung cấp dịch vụ dữ liệu lớn nhất ở Polkadot và các tính năng này cho thấy cách chúng tôi hỗ trợ hàng nghìn dự án cộng đồng cùng lúc với các dự án lớn nhất ở Polkadot.

# Giới thiệu về mạng SubQuery

SubQuery là nhà cung cấp dữ liệu hàng đầu của Polkadot, hỗ trợ lập chỉ mục & lớp truy vấn giữa các blockchains Lớp-1 (Polkadot) và các ứng dụng phi tập trung. Dịch vụ dữ liệu của SubQuery đang được hầu hết các trang web đấu giá parachain và huy động vốn cộng đồng trên Polkadot và Kusama hiện có sử dụng.

Giao thức của SubQuery loại bỏ các đặc điểm riêng của dữ liệu blockchain với SubQuery SDK, cho phép các nhà phát triển tập trung vào việc triển khai sản phẩm cốt lõi của họ mà không cần lãng phí nỗ lực vào các công nghệ phụ trợ tùy chỉnh.

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)|  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
