# Tìm hiểu về Polkadot Crowdloan

![](https://miro.medium.com/max/2400/1*JvR4YsstF6OHG3mTr_1Seg.png)

**SubQuery đào sâu vào dữ liệu đấu giá Parachain**

Polkadot vừa đạt được một cột mốc quan trọng, đó là việc hoàn thành vòng đấu giá parachain đầu tiên. Trong những tuần qua, chúng tôi đã quan sát thấy một cuộc chiến nảy lửa để giành lấy vương miện Polkadot, vị trí parachain đầu tiên, giữa Moonbeam và Acala. Sau một cuộc đua gay cấn, người chiến thắng trong cuộc đấu giá được tiết lộ là Acala, nếu bạn muốn tìm hiểu thêm về cách người chiến thắng được chọn trong cuộc đấu giá hình nến hiện đại này, hãy xem bản tóm tắt xuất sắc của [Dan Reecer (từ Acala)](https://twitter.com/danreecer_/status/1364646604024786949).

SubQuery là dịch vụ lập chỉ mục dữ liệu hàng đầu của Polkadot và trong tuần qua, chúng tôi đã cung cấp hàng triệu yêu cầu hàng ngày cho phần lớn các trang tổng quan cộng đồng, ứng dụng đóng góp và trang web phân tích. Các nhóm như [ SubVis ](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/) và [ DotMarketCap ](https://dotmarketcap.com/) sử dụng SubQuery để cung cấp dữ liệu thời gian thực trên các kênh cộng đồng và dữ liệu trực tuyến khác trực tiếp cho trang web và ứng dụng.

Hôm nay chúng ta sẽ khám phá thêm một chút về những gì đã xảy ra trong phiên đấu giá đầu tiên bằng cách đi sâu vào dữ liệu đằng sau mỗi đóng góp.

![](https://miro.medium.com/max/2400/0*Pcp3KJvC5eyP2KQ3)

Thứ nhất, từ khi ra mắt quảng cáo cộng đồng đầu tiên cho đến khi kết thúc phiên đấu giá đầu tiên (hơn 13 ngày một chút), hơn 87,5 triệu DOT đã được đóng góp trên tất cả các quỹ cộng đồng chỉ dưới 68.000 địa chỉ. Về cơ bản, 68.000 địa chỉ đã làm việc cùng nhau trên 187.000 đóng góp để gây quỹ và cam kết hơn 3,54 tỷ đô la Mỹ trong 2 tuần. Đó là một con số phi thường theo bất kỳ tiêu chuẩn nào và là dấu hiệu rất lớn về cách các cá nhân (và tổ chức) cam kết khóa DOT của họ trong tối đa 2 năm để hỗ trợ các mạng yêu thích của họ. Số vốn cam kết tương đương với gần 10% toàn bộ nguồn cung lưu hành của Polkadot.

![](https://miro.medium.com/max/2400/0*-ovBJnjxAKfeB81Y)

Sự quan tâm của nhà đầu tư thực sự bùng nổ khi bắt đầu các cuộc đấu giá, với một lượng lớn các khoản đóng góp (theo số lượng) trong vài giờ đầu tiên và cũng ngay trước khi kết thúc phiên đấu giá. Ngày đầu tiên của các khoản huy động vốn từ cộng đồng đã chứng kiến ​​hơn 34.000 lượt đóng góp và mức cao điểm vào phút cuối đã quay trở lại với 5.618 lượt đóng góp trong khoảng thời gian 2 giờ.

Như bạn có thể thấy trong biểu đồ bên dưới, cho đến nay, Moonbeam có số lượng đóng góp lớn nhất trong suốt phiên đấu giá, thu hút gần 23.984 đóng góp từ hơn 21.333 địa chỉ duy nhất so với Acala.

![](https://miro.medium.com/max/2400/0*MSHfjnu7KmMvDmnY)

Acala rõ ràng đã đi trước với tư cách là người chiến thắng, vậy điều này xảy ra như thế nào? Số lượng người đóng góp và đóng góp của họ che dấu một sự thực là trung bình các đóng góp của Acala nhiều hơn Moonbeam. Do đó, tổng đóng góp về mặt giá trị trông giống như biểu đồ bên dưới, trong đó Acala dẫn trước Moonbeam một chút trong suốt phiên đấu giá.

![](https://miro.medium.com/max/2400/0*YbV-ReqSwfimUsbO)

Phần lớn các đóng góp theo giá trị xảy ra trong hai sự kiện riêng lẻ, hai sự kiện quan trọng này về cơ bản đã thay đổi kết quả của phiên đấu giá đầu tiên.

![](https://miro.medium.com/max/2400/0*jmRsZ7kxEYAWYaUq)

Sự kiện đầu tiên xảy ra trong khoảng thời gian 5 phút bắt đầu lúc 1:25 chiều UTC vào ngày 11 tháng 11. Một địa chỉ duy nhất mà chúng tôi đã liên kết với địa chỉ [ Binance’s Crowdloan ](https://www.binance.com/en/dotslot) đã thực hiện một loạt 7 giao dịch với tổng giá trị hơn 19 triệu DOT (768,9 triệu đô la Mỹ). Đầu tiên là đóng góp đơn lẻ lớn nhất cho Moonbeam với hơn 9 triệu DOT (364 triệu USD), tiếp theo là 6 đóng góp khác cách nhau trung bình 34 giây. Địa chỉ này cũng có đóng góp đáng kể cho Acala (2,6 triệu DOT), Clover (2,1 triệu DOT), Astar (2 triệu DOT), và Manta (1,7 triệu DOT).

Sự kiện quan trọng thứ hai xảy ra trong khoảng thời gian 75 phút từ 10h40 sáng ngày 13 tháng 11 khi một tài khoản đã có nhiều đóng góp đáng kể cho Acala. Tài khoản này đại diện cho [ địa chỉ LCDOT của Acala ](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157) và Acala đã triển khai tất cả DOT stake của mình crowdloan của chính nó. Đầu tiên là một số giao dịch thử nghiệm, sau đó là một số giao dịch lớn bao gồm lớn nhất là 5,5 triệu DOT (222,5 triệu USD). Cuối cùng, quỹ LCDOT của Acala đã đóng góp được 3758 lần trong cuộc đấu giá.

![](https://miro.medium.com/max/2400/0*GTJviXqhPmRIIf73)

These series of transactions were ultimately able to push Acala above Moonbeam, and provide Acala with a winning percentage of 63.11% of the blocks. When the random winning block was selected ~56 hours later at block 7,718,090, Acala was ahead of Moonbeam by just ~38,000 DOT (USD$1.5 million).

One of the amazing things about these auctions, is that even after raising over 66 million DOT (USD$2.67 billion) between Acala and Moonbeam, the winning margin at the randomly selected block was just 0.056% of the total amount.

So who was contributing to the crowdloans? Firstly, the median amount contributed by all was just 12 DOT (USD$485.64), 47% of all contributions were less than 10 DOT and 88% were less than 100 DOT (US$4,047.00). This clearly demonstrates an extremely strong and robust community of individual contributors, testament to the retail interest in the parachain auctions.

The big question on everyone’s mind is who’s the people’s network? Which network has the largest proportion of small contributors? For the following insights into contribution size breakdown we have excluded some known exchange or crowdloan accounts (list in the appendix). You can see that some networks are almost completely small cap funded (SubGame Gamma and Darwinia). On the other hand, large cap investors (>5,000 DOT) make up 68% of Moonbeam’s crowdloan (by value), 62% of Parallel Finance’s, and 58% of Clover’s.

![](https://miro.medium.com/max/2400/0*ztRnFrVfJ2aTlMiU)

Obviously we are here to look at Moonbeam and Acala, and here we can see that Acala has more small cap funding than Moonbeam, with 33% of Acala’s contributions being less than 1,000 DOT (USD$40,470) compared to 21% of Moonbeam’s.

![](https://miro.medium.com/max/2400/0*ge-2XDPgddj-J07V)

_Note, the previous insights around “the people’s network” have been taken after excluding known contributors that aggregate other contributions into one. SubQuery has only identified a small number, there will certainly be aggregators that we have missed that may be material to the data shared here_

So where are people contributing from? SubQuery has identified that  [Acala’s LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)  was a runaway success, and resulted in almost 28% of all contributions. With over 24 million DOT (US$971 million) contributed directly to Acala, this auction would likely have gone another way without it.

Additionally,  [Binance](https://www.binance.com/en/dotslot)  proved to be a popular participation pathway with 27% of contributions across all most participants. We round out the significance contribution methods with  [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)  at 11% of contributions, and  [Kraken](https://www.kraken.com/learn/parachain-auctions)  at 7%. Centralised exchanges are still clearly a preferred method of participation.

## About SubQuery Network

SubQuery is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today.

SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​​​[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Appendix

All USD prices are quoted at the price at the 1st Auctions’s close = USD$40.47

All data is from the start of the Polkadot Crowdloans to the completion of the first auction on 18th November 11.57AM UTC (block 7,756,107)

Excluded Crowdloan Sites

-   [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
-   [Binance Crowdloan](https://www.binance.com/en/dotslot)
-   [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
-   [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
-   [https://pos.dog/](https://pos.dog/)
-   [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
