# Tìm hiểu về Crowdloan trên Polkadot (Phần 1)

![](https://miro.medium.com/max/2400/1*JvR4YsstF6OHG3mTr_1Seg.png)

**SubQuery đào sâu vào dữ liệu đấu giá Parachain**

Polkadot vừa đạt được một cột mốc quan trọng, đó là việc hoàn thành vòng đấu giá parachain đầu tiên. Trong những tuần qua, chúng tôi đã quan sát thấy một cuộc chiến nảy lửa để giành lấy vương miện Polkadot, vị trí parachain đầu tiên, giữa Moonbeam và Acala. Sau một cuộc đua đầy gay cấn, chiến thắng trong cuộc đấu giá này đã gọi tên Acala. Nếu bạn muốn tìm hiểu thêm về cách người chiến thắng được chọn trong mô hình đấu giá hiện đại này, hãy xem bản tóm tắt của [Dan Reecer (từ Acala)](https://twitter.com/danreecer_/status/1364646604024786949).

SubQuery là dịch vụ lập chỉ mục dữ liệu hàng đầu của Polkadot. Trong tuần qua, chúng tôi đã xử lý hàng triệu yêu cầu mỗi ngày cho phần lớn các trang tổng quan gọi vốn cộng đồng, các ứng dụng và cả những website phân tích dữ liệu. Các đội ngũ như [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/) và [DotMarketCap](https://dotmarketcap.com/) sử dụng SubQuery để cung cấp dữ liệu thời gian thực trên các kênh huy động vốn cộng đồng và cả những dữ liệu trực tuyến khác một cách trực tiếp cho website và ứng dụng của họ.

Hôm nay chúng ta sẽ khám phá thêm một chút về những gì đã xảy ra trong phiên đấu giá đầu tiên bằng cách đi sâu vào dữ liệu đằng sau mỗi đóng góp trong đó.

![](https://miro.medium.com/max/2400/0*Pcp3KJvC5eyP2KQ3)

Thứ nhất, từ khi công bố đợt huy động vốn cộng đồng lần đầu tiên cho đến khi phiên đấu giá thứ nhất kết thúc (hơn 13 ngày một chút), hơn 87,5 triệu DOT đã được huy động trên tất cả các kênh với gần 68.000 địa chỉ. Với 68.000 địa chỉ cùng 187.000 đóng góp đã đem về con số 3,54 tỷ đô la Mỹ trong 2 tuần. Đó là một con số phi thường theo bất kỳ tiêu chuẩn nào và là dấu hiệu rất lớn về cách các cá nhân (và tổ chức) cam kết khóa DOT trong tối đa 2 năm để hỗ trợ các mạng yêu thích của họ. Số vốn cam kết tương đương với gần 10% toàn bộ nguồn cung lưu hành của Polkadot.

![](https://miro.medium.com/max/2400/0*-ovBJnjxAKfeB81Y)

Sự quan tâm của nhà đầu tư thực sự bùng nổ khi bắt đầu các cuộc đấu giá với một lượng lớn các khoản đóng góp (theo số lượng) trong vài giờ đầu tiên cũng như ngay trước khi kết thúc phiên đấu giá. Ngày đầu tiên huy động vốn từ cộng đồng đã chứng kiến ​​hơn 34.000 lượt đóng góp và những lúc cao điểm đã có đến 5.618 lượt đóng góp chỉ trong khoảng 2 giờ.

Như bạn có thể thấy trong biểu đồ bên dưới, cho đến nay Moonbeam có số lượng đóng góp lớn nhất trong suốt phiên đấu giá, thu hút gần 23.984 đóng góp từ 21.333 địa chỉ so với Acala.

![](https://miro.medium.com/max/2400/0*MSHfjnu7KmMvDmnY)

Acala rõ ràng đã đi trước với tư cách là người chiến thắng, vậy điều này xảy ra như thế nào? Số lượng người đóng góp và những đóng góp của họ ẩn chứa một sự thực là mức đóng góp trung bình cho Acala nhiều hơn cho Moonbeam. Tổng đóng góp tính theo giá trị thể hiện trong biểu đồ dưới đây, trong đó Acala dẫn trước Moonbeam một chút trong suốt phiên đấu giá.

![](https://miro.medium.com/max/2400/0*YbV-ReqSwfimUsbO)

Phần lớn các đóng góp tính theo giá trị diễn ra trong hai sự kiện riêng lẻ, hai sự kiện quan trọng này về cơ bản đã thay đổi kết quả của phiên đấu giá đầu tiên.

![](https://miro.medium.com/max/2400/0*jmRsZ7kxEYAWYaUq)

Sự kiện đầu tiên diễn ra trong khoảng thời gian 5 phút, từ thời điểm 01 giờ 25 phút UTC chiều ngày 11 tháng 11. Một địa chỉ duy nhất liên kết với địa chỉ [Binance’s Crowdloan](https://www.binance.com/en/dotslot) đã thực hiện một loạt 7 giao dịch với tổng giá trị hơn 19 triệu DOT (768,9 triệu đô la Mỹ). Đầu tiên là một đóng góp đơn lẻ lớn nhất cho Moonbeam với hơn 9 triệu DOT (364 triệu USD), tiếp theo là 6 đóng góp khác cách nhau trung bình 34 giây. Địa chỉ này cũng có đóng góp đáng kể cho Acala (2,6 triệu DOT), Clover (2,1 triệu DOT), Astar (2 triệu DOT), và Manta (1,7 triệu DOT).

Sự kiện quan trọng thứ hai diễn ra trong khoảng thời gian 75 phút từ 10 giờ 40 phút sáng ngày 13 tháng 11 khi một tài khoản đã có nhiều đóng góp đáng kể cho Acala. Tài khoản này đại diện cho [địa chỉ LCDOT của Acala](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157) và do Acala đã gửi tất cả DOT đang được stake của mình cho crowdloan của chính nó. Đầu tiên là một số giao dịch thử nghiệm, sau đó là một số giao dịch lớn bao gồm cả khoản lớn nhất là 5,5 triệu DOT (222,5 triệu USD). Cuối cùng, quỹ LCDOT của Acala đã đóng góp tổng cộng 3758 lần trong cuộc đấu giá này.

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

Các chuỗi giao dịch này cuối cùng đã có thể đẩy Acala lên trên Moonbeam và mang lại cho Acala tỷ lệ chiến thắng là 63,11% trong tổng số các khối. Khi khối chiến thắng ngẫu nhiên được chọn sau gần 56 giờ ở khối 7.718.090, Acala đã dẫn trước Moonbeam chỉ với gần 38.000 DOT (tương đương 1,5 triệu USD).

Một trong những điều đáng kinh ngạc về các cuộc đấu giá này, là ngay cả sau khi huy động được hơn 66 triệu DOT (2,67 tỷ USD) giữa Acala và Moonbeam, tỷ lệ chiến thắng ở khối được chọn ngẫu nhiên chỉ là 0,056% tổng số tiền.

Vậy ai đã đóng góp vào các khoản huy động vốn từ cộng đồng? Thứ nhất, số tiền trung bình của tất cả đóng góp chỉ là 12 DOT (USD 485,64), trong đó 47% các đóng góp ở mức dưới 10 DOT và 88% dưới 100 DOT (USD 4,047,00). Điều này chỉ ra rằng cộng đồng những người đóng góp cá nhân là cực kỳ mạnh mẽ, minh chứng cho sự quan tâm của các nhà đầu tư nhỏ lẻ đối với các cuộc đấu giá parachain.

Câu hỏi lớn trong đầu mọi người rằng ai sẽ là mạng lưới đại chúng? Mạng lưới nào có tỷ lệ người đóng góp nhỏ lẻ lớn nhất? Để có những thông tin chi tiết sau đây về phân tích quy mô đóng góp, chúng tôi đã loại trừ một số tài khoản của sàn giao dịch hoặc các tài khoản mà cộng đồng đã biết (xem danh sách trong phụ lục). Bạn có thể thấy rằng một số mạng được tài trợ gần như hoàn toàn với lượng đóng góp nhỏ (SubGame Gamma và Darwinia). Mặt khác, các nhà đầu tư vốn hóa lớn (> 5.000 DOT) chiếm 68% số tiền crowdloan của Moonbeam (theo giá trị), 62% của Parallel Finance và 58% của Clover.

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

Rõ ràng là chúng ta ở đây để so sánh Moonbeam và Acala, và có thể thấy rằng Acala có nguồn vốn nhỏ lẻ nhiều hơn Moonbeam, với 33% đóng góp của Acala thấp hơn 1.000 DOT (USD 40.470) so với 21% của Moonbeam.

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_Xin lưu ý rằng những thông tin đề cập trên đây xoay quanh “mạng lưới đại chúng” được đưa ra sau khi loại trừ những người đóng góp được biết đến là đã tập hợp tất cả các đóng góp vào làm một. SubQuery mới chỉ xác định được một số lượng nhỏ, chắc chắn sẽ có những tập hợp mà chúng tôi có thể đã bỏ sót và không được chia sẻ tại đây_

Vậy mọi người đang đóng góp từ đâu? SubQuery đã xác định rằng [Acala’s LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157) thực sự là một thành công trong quá trình này khi chiếm gần 28% tổng số đóng góp. Với hơn 24 triệu DOT (971 triệu đô la Mỹ) được đóng góp trực tiếp cho Acala, cuộc đấu giá này có thể sẽ diễn ra theo một hướng khác nếu không có đại diện này.

Ngoài ra, [Binance](https://www.binance.com/en/dotslot) cũng là một đơn vị đã tham gia tích cực với 27% đóng góp trên tổng số những người đã tham. Chúng tôi cũng ghi nhận đóng góp lớn của [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot) ở mức 11% và của [Kraken](https://www.kraken.com/learn/parachain-auctions) là 7%. Các sàn giao dịch tập trung rõ ràng vẫn là một phương thức tham gia được nhiều người ưa thích.

## Giới thiệu về mạng SubQuery

SubQuery là nhà cung cấp dữ liệu hàng đầu của Polkadot, hỗ trợ lập chỉ mục & lớp truy vấn giữa các blockchains Lớp-1 (Polkadot) và các ứng dụng phi tập trung. Dịch vụ dữ liệu của SubQuery đang được hầu hết các trang web đấu giá parachain và crowdloan Polkadot và Kusama sử dụng.

Giao thức của SubQuery loại bỏ các đặc điểm riêng của dữ liệu blockchain với SubQuery SDK, cho phép các nhà phát triển tập trung vào việc triển khai sản phẩm cốt lõi của họ mà không cần lãng phí nỗ lực vào các công nghệ phụ trợ tùy chỉnh.

​​​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Phụ lục

Tất cả giá USD được niêm yết theo giá đóng cửa của Phiên đấu giá đầu tiên = USD 40,47

Tất cả dữ liệu là từ khi bắt đầu Polkadot Crowdloans đến khi hoàn thành phiên đấu giá đầu tiên vào 11 giờ 57 phút sáng UTC ngày 18 tháng 11 (khối 7,756.107)

Các trang web Crowdloan bị loại trừ

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdloan](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
