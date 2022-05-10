# Tìm hiểu về Crowdloan trên Polkadot (Phần 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polkadot đã mang đến cho cộng đồng của mình một cuộc đua thú vị khác cho phiên đấu giá parachain thứ ba của họ. Gần đây chúng ta đã chứng kiến Parallel Finance và Astar đấu với nhau cho vị trí thứ ba, và cuối cùng thì Astar đã giành được chiến thắng. Hôm nay chúng ta sẽ khám phá thêm một chút về những gì đã xảy ra trong phiên đấu giá thứ ba bằng cách đi sâu vào dữ liệu đằng sau mỗi đóng góp.

SubQuery là dịch vụ lập chỉ mục dữ liệu hàng đầu của Polkadot. Trong tuần qua, chúng tôi đã xử lý hàng triệu yêu cầu mỗi ngày cho phần lớn các trang tổng quan gọi vốn cộng đồng, các ứng dụng và cả những website phân tích dữ liệu. Các đội ngũ như [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/) và [DotMarketCap](https://dotmarketcap.com/) sử dụng SubQuery để cung cấp dữ liệu thời gian thực trên các kênh huy động vốn cộng đồng và cả những dữ liệu trực tuyến khác một cách trực tiếp cho website và ứng dụng của họ.

Trước tiên, hãy bắt đầu với một số thông tin nhanh. Như bạn có thể thấy dưới đây, Astar đã có nhiều hơn cả về số lượng đóng góp cũng như số người đóng góp. Điều quan trọng cần lưu ý là Parallel đã huy động được một số tiền đáng kể thông qua quỹ ủy nhiệm của mình, do đó, số người đóng góp bị sai lệch vì các quỹ ủy nhiệm đã ẩn thông tin này.

Cả hai đều nhận được mức đóng góp trung bình là 10 DOT (367,70 đô la Mỹ) nhưng Astar đã thu hút được khoản đóng góp đơn lẻ lớn nhất với 2.005.295 DOT (73,7 triệu đô la Mỹ). Tổng kết lại, có tổng cộng gần 20 triệu DOT (735,4 triệu đô la Mỹ) đã được đóng góp cho cả hai trong phiên đấu giá thứ ba. Không có gì đáng ngạc nhiên, con số này ít hơn số tiền được đóng góp trong các cuộc đấu giá đầu tiên, tuy nhiên chúng ta có thể thấy số tiền đấu giá vẫn có giá trị đáng kể.

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png) Như bạn có thể thấy trong biểu đồ bên dưới, số lượng đóng góp tương đối ổn định, tỷ lệ đóng góp tăng đồng thời vào ngày 17 tháng 11 lên hơn 2.000 đóng góp trong khoảng thời gian 4 giờ. Tương tự như trận chiến giữa [Moonbeam và Acala](./20211124-polkadot-crowdloans.md), cuộc đấu giá này cho thấy các phong cách tham gia đấu giá khác nhau từ người chơi trong khi vẫn duy trì số lượng đóng góp tương đối đồng đều. Parallel Finance có ít hơn 20.000 đóng góp cho đợt gọi vốn cộng đồng của họ khi so sánh với Astar.

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

Nhưng vấn đề ở đây không phải là số lượng đóng góp, mà là giá trị của những đóng góp đó. Như bạn có thể thấy trong biểu đồ bên dưới, phiên đấu giá diễn ra vô cùng căng thẳng, các đội lần lượt dẫn đầu trong phiên đấu giá.

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

Như bạn có thể thấy trong biểu đồ sau có hai sự kiện cần theo dõi. Sự kiện đầu tiên là sự gia tăng đột biến về đóng góp cho Astar vào ngày 12 tháng 11. Điều này giúp họ dẫn đầu một cách ổn định cho đến ngày 24 tháng 11 khi mà Parallel Finance nhận được gần 2,5 triệu DOT (91 triệu đô la Mỹ).

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

Đối với sự kiện đầu tiên diễn ra vào ngày 12 tháng 11 lúc 2:26 sáng UTC khi một tài khoản được liên kết với Binance gửi 2.005.295 DOT (73,5 triệu đô la Mỹ) cho Astar và 1.026.763 DOT (37,9 triệu đô la Mỹ) cho Parallel Finance. Đây có khả năng là Binance đã chuyển các khoản đóng góp mà họ thu thập được từ cộng đồng của chính họ cho mỗi kênh crowdloan.

Thậm chí lần thứ hai có hơi kỳ lạ hơn một chút và có đến 25 sự kiện riêng biệt. Trong 11 phút, quỹ ủy nhiệm Crowdloan của Parallel đã thực hiện 25 khoản đóng góp giống hệt nhau là 98.982 DOT mỗi lần (3.669.568,14 đô la Mỹ) cho Parallel với tổng cộng là 2.474.550 DOT (90.989.203,50 đô la Mỹ). Không rõ tại sao các khoản tiền gửi này được chia ra các số lượng DOT nhỏ hơn, các quỹ uỷ nhiệm Crowdloan của Parallel có khả năng đã được thiết lập giá trị đóng góp tối đa cho mỗi lần gửi.

![](https://miro.medium.com/max/1920/0*ZErTVoVAvSJvaIsL)

Astar và Parallel Finance đã mang đến một cuộc đấu giá có tính cạnh tranh, trong đó Astar được chọn là người chiến thắng tại khối [7927110](https://polkadot.subscan.io/block/7927110), với mức dẫn đầu chỉ là 120.000 DOT. Nếu có một khối ngẫu nhiên khác được lựa chọn sớm hơn hoặc muộn hơn, kết quả có thể đã hoàn toàn khác.

Vậy ai là người đóng góp? Thứ nhất, có hai cá voi khổng lồ đã đóng góp tổng cộng 41% trên tổng số DOT, chiếm 69,34% tổng giá trị (13.756.262 DOT). Hai tài khoản này này chính là đại diện uỷ nhiệm Crowdloan của Parallel Finance và Binance. Kraken và Chương trình SALP của Bifrost cũng có mặt trong top 6 đóng góp hàng đầu. Các đại diện uỷ nhiệm Crowdloan của Parallel đã thực sự nổi bật trong thống kê kết quả của chúng tôi với hơn 9,3 triệu DOT đã được gửi vào (344,6 triệu đô la Mỹ), chiếm hơn 47% trên tổng số tất cả các khoản đóng góp.

Điều đáng tiếc là tỷ lệ phần trăm cao này có nghĩa là việc so sánh kích thước đóng góp trung bình là rất khó khăn do các đại diện uỷ nhiệm này không cho phép tiếp cận quá nhiều các dữ liệu. Trong tương lai, chúng tôi thậm chí có thể đi sâu vào dữ liệu của Parallel và sử dụng dữ liệu này để xác định chính xác số lượng đóng góp này đến từ các cá voi hay là các nhà đầu tư nhỏ lẻ.

Có hai phiên đấu giá cực kỳ cạnh tranh cho thấy một hệ sinh thái lành mạnh và điều đó thật đáng khích lệ khi thấy được mức độ cam kết mà cộng đồng đã thể hiện. Tại SubQuery, chúng tôi rất vui mừng khi được tiếp tục làm việc cùng với các dự án Polkadot hàng đầu và chúng tôi rất háo hức chờ đợi xem tương lai sẽ ra sao.

---

## Giới thiệu về mạng SubQuery

SubQuery là nhà cung cấp dữ liệu hàng đầu của Polkadot, hỗ trợ lập chỉ mục & lớp truy vấn giữa các blockchains Lớp-1 (Polkadot) và các ứng dụng phi tập trung. Hiện nay, dịch vụ dữ liệu của SubQuery đang được hầu hết các trang web huy động vốn cộng đồng và đấu giá parachain của Polkadot và Kusama sử dụng.

Giao thức của SubQuery loại bỏ đặc điểm riêng của dữ liệu blockchain với SubQuery SDK, cho phép các nhà phát triển tập trung vào việc triển khai sản phẩm cốt lõi của họ mà không cần lãng phí nỗ lực vào các công nghệ phụ trợ tùy chỉnh.

​​​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Phụ lục

Tất cả giá USD được niêm yết theo giá đóng cửa của Phiên đấu giá thứ 3 = USD$36,77

Tất cả dữ liệu tính từ khi bắt đầu Polkadot Crowdloans cho đến khi hoàn thành phiên đấu giá thứ ba vào ngày 3 tháng 12, 1.43 giờ sáng UTC (khối 7,957,704).

Các trang web Crowdloan bị loại trừ

- [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
- [Binance Crowdloan](https://www.binance.com/en/dotslot)
- [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
- [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
- [https://pos.dog/](https://pos.dog/)
- [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
