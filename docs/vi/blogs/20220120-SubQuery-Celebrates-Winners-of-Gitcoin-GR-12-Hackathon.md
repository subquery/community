# SubQuery Chúc Mừng Những Người Chiến Thắng Cuộc Thi Hackathon Gitcoin GR 12

![](https://miro.medium.com/max/1400/1*MnMY9j3nasex9_9MNHUPtA.png)

SubQuery, giải pháp lập chỉ mục dữ liệu hàng đầu trong Polkadot, rất vui mừng được giới thiệu những người chiến thắng của [cuộc thi Gitcoin GR 12 Hackathon gần đây](https://gitcoin.co/hackathon/gr12?org=subquery). Gitcoin được công nhận là một trong những cộng đồng nhà phát triển blockchain ưu việt, tập trung vào việc tạo cộng đồng và ứng dụng cho Web3. [SubQuery hợp tác với Gitcoin vào tháng 12](https://subquery.medium.com/subquery-announces-gitcoin-hackathon-16c9d18753a) để tài trợ cho năm thử thách với trị giá 37.000 USD (tổng giải thưởng lớn nhất trong thử thách), mời các nhà phát triển xây dựng các công cụ hữu ích, dashboards và thậm chí mở rộng SubQuery sang blockchain layer-1 khác.

Hackathon diễn ra từ ngày 1 - 16 tháng 12 năm 2021 với các dự án blockchain hàng đầu như Moonbeam, Astar và Acala đóng góp vào các nhóm giải thưởng khác nhau. Giải thưởng được trao cho những người đã hoàn thành xuất sắc các dự án theo tiêu chuẩn đề ra và cả những người có các ý tưởng sáng tạo nhất hoặc những người có các giải pháp nhằm cải thiện SDK cốt lõi của SubQuery. Dưới đây là một bản tóm tắt ngắn về những thử thách được đặt ra:

- [Tạo trình explorer thống nhất kết hợp dữ liệm của Substrate và EVM từ Moonbeam và Astar thành một ứng dụng dễ sử dụng](https://gitcoin.co/issue/subquery/grants/1) — US$12.000 [Được bảo trợ bởi Moonbeam và Astar]
- [Tạo dashboard trung tâm DeFi lấy cảm hứng từ Zapper.fi hoặc defisaver.com](https://gitcoin.co/issue/subquery/grants/2) — US $ 8.000 [Tài trợ bởi Acala]
- [Tạo dashboard staking hiển thị các tuỳ chọn staking tốt nhất trên Polkadot và các parachain khác nhau của Polkadot](https://gitcoin.co/issue/subquery/grants/3)— US$3.000
- [Xây dựng marketplace explorer cho tất cả NFT dựa trên giao thức RMRK](https://gitcoin.co/issue/subquery/grants/4) — US$2.000
- [Mở rộng dịch vụ @subql/node để lập chỉ mục dữ liệu từ một blockchain layer-1 khác](https://gitcoin.co/issue/subquery/grants/5) — US$12.000

## Explorer hợp nhất giữa EVM và Substrate

Hệ sinh thái Polkadot/Kusama bao gồm các blockchains (được gọi là Parachains) được xây dựng bằng Substrate, sử dụng API Substrate. Tuy nhiên, một số Parachains nhất định, chẳng hạn như Moonbeam và Astar, cung cấp khả năng tương thích Ethereum liền mạch bằng cách có thành phần EVM hoàn toàn tương thích. Việc có khả năng hiển thị đồng thời vào dữ liệu Substrate và EVM hiện đang là thách thức, dẫn đến hai trải nghiệm bị cô lập trong Moonbeam và Moonriver. Bạn phải chọn giữa phía Substrate (ví dụ: Subscan) và phía EVM (ví dụ: Moonscan & Blockscout).

Thử thách này được dự kiến nhằm giải quyết cơ hội lớn để xây dựng một nơi duy nhất để hiểu toàn bộ lịch sử hoạt động trong tài khoản. Ví dụ: để xem các hành động đặt cược và quản trị và chuyển ERC20 trong một giao diện người dùng duy nhất. Đây sẽ là một ứng dụng được sử dụng hàng ngày bởi các cộng đồng lớn trong Moonbeam, Astar và nhiều parachains tương thích EVM khác đang phát triển.

![](https://miro.medium.com/max/1400/0*b_o0NDpJOCv0QvXS)

Người chiến thắng [thử thách này](https://gitcoin.co/issue/subquery/grants/1/10002717200027175) là @bizzyvinci, người [đã xây dựng trình khám phá giao diện người dùng trực tuyến trên Heroku](https://moonriver-explorer.herokuapp.com/). Do thử thách này là một nhiệm vụ to lớn nên không có gì ngạc nhiên khi nó chưa hoàn thành 100%, nhưng chúng tôi rất vui mừng được hỗ trợ tiến độ cho sự đổi mới thay đổi trò chơi này và giúp mở rộng nó sang các chuỗi EVM khác.

@bizzyvinci đã nói như sau: “Tôi đã xây dựng [Moonriver Explorer](https://moonriver-explorer.herokuapp.com/) và đó là một trải nghiệm tuyệt vời. Bước đầu tiên là tìm hiểu về SubQuery và chết tiệt, họ có một tài liệu tuyệt vời đi kèm với kho mẫu. Tài liệu bao gồm mọi thứ cần thiết để bắt đầu và giải thích rõ từng khía cạnh, chẳng hạn như tệp kê khai, lược đồ graphql trong số những thứ khác."

## Bảng điều khiển DeFi Karura/Acala

Acala và Karura đại diện cho một tầm nhìn lớn về tương lai của DeFi, vì vậy có một cơ hội lớn để xây dựng các công cụ có giá trị cho hệ sinh thái. Thách thức này yêu cầu các nhà phát triển tạo ra các công cụ DeFi cho cộng đồng Karura/Acala được truyền cảm hứng từ những công cụ như [Zapper.fi](http://zapper.fi/) và [defisaver.com](http://defisaver.com/) tận dụng các dịch vụ lập chỉ mục dữ liệu của SubQuery.

Người chiến thắng trong [thử thách này](https://gitcoin.co/issue/subquery/grants/2/100027176) là Web3Go, người đã xây dựng một bản tóm tắt thực sự tốt đẹp về [Vị trí Nợ thế chấp (CDP) của Acala](https://web3go.xyz/#/CDPDetail). Để người dùng kiếm kUSD stablecoin trên Karura, trước tiên họ phải gửi mã thông báo của một trong những tài sản thế chấp được chấp nhận (ví dụ: KSM). Khi người dùng đã làm như vậy, tham số tỷ lệ tài sản thế chấp tối thiểu xác định số lượng tài sản thế chấp tối thiểu cần thiết để người dùng kiếm kUSD. Nếu giá thị trường của tài sản thế chấp của CDP giảm xuống đủ thấp, thì CDP có thể bị coi là “không an toàn”

![](https://miro.medium.com/max/1400/0*l7GA1axntiHCINRM)

Giao diện của Web3Go liệt kê rõ ràng tất cả các vị trí CDP, tỷ lệ và trạng thái an toàn của chúng. Đối với mỗi vị trí, nó cũng cung cấp thông tin về lịch sử của vị trí đó và dễ dàng cho phép người khác giám sát công cụ tài chính. <iframe width="560" height="315" src="https://www.youtube.com/embed/hc3YDjv6dkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

## Bảng điều khiển Polkadot Staking

Đặt cược là một cách chính để sử dụng mã thông báo DOT và KSM của bạn, nhưng hiện tại UX để đặt cược rất khó hiểu và dẫn đến việc hầu hết người dùng đưa ra các lựa chọn thiếu khoa học.

Mục tiêu của thử thách này là kết hợp dữ liệu trên chuỗi và trải nghiệm người dùng trực quan, để giúp người dùng hiểu lợi nhuận đặt cược ước tính tốt nhất, so sánh hiệu suất lịch sử của các trình xác thực và cho người dùng thấy lợi tức đầu tư của họ có thể là bao nhiêu.

Ashik đã xây dựng PolkStakes, một [trang web xếp hạng trình xác thực Polkadot](https://polkstakes.vercel.app/) tìm nạp tất cả các trình xác thực và hiển thị danh sách các trình xác thực được tổ chức gọn gàng trong Polkadot với xếp hạng riêng của PolkStake (dựa trên hiệu suất thời đại trước, hoa hồng, khoản thanh toán và phần thưởng đặt cược, v. v.). Đó là một giao diện người dùng đơn giản và gọn gàng thực sự gây ấn tượng với chúng tôi.

![](https://miro.medium.com/max/1400/0*Kaho31-nn-ly8tFS)

“_Subquery làm giảm nỗ lực lập chỉ mục dữ liệu trên chuỗi theo cách thủ công. Vì nó cung cấp một điểm cuối graphql, chúng tôi có thể truy vấn dữ liệu một cách dễ dàng. Nó làm giảm nỗ lực trong việc duy trì một chương trình phụ trợ và cơ sở dữ liệu. Giờ đây, việc tổng hợp dữ liệu để tính toán xếp hạng Polkstakes được thực hiện trong giao diện người dùng. Điều này phải được chuyển đến SubQuery. Ngoài ra, phải thực hiện hình ảnh hóa tốt hơn đối với dữ liệu được lập chỉ mục và dự đoán lợi nhuận ước tính chính xác hơn phải được thêm vào._” — Ashik từ Polkdata

Nhóm SubVis xuất sắc cũng đã xây dựng [bảng điều khiển đặt cược Polkadot tuyệt đẹp](https://polkadot-staking-dashboard.vercel.app/) hiển thị tổng số thống kê đặt cược theo thời gian và hiệu suất trình xác thực ở một nơi. Các tính năng đặt cược mới tham gia vào các trang đấu giá và trang cộng đồng hiện có mà SubVis nổi tiếng.

![](https://miro.medium.com/max/1400/0*uPDQdMug2JaZwMbA)

Cuối cùng, Web3Go đã đưa vào một mục xuất sắc khác với số liệu thống kê chi tiết về việc đặt cược trên Moonriver. Họ cung cấp thông tin ngay cả về người ủy quyền cho mỗi người đối chiếu, phần thưởng lịch sử được cung cấp bởi mỗi người đối chiếu và thậm chí cả những hành động mà người đối chiếu thực hiện. Chúng cung cấp các lợi ích bổ sung là có thể hiển thị lịch sử đặt cược cho địa chỉ ví của riêng bạn.

![](https://miro.medium.com/max/1400/0*jQgOnvcaXt6cprJR)

## Trình khám phá thị trường RMRK NFT

RMRK là một giao thức tiên tiến của NFT Legos tạo ra các NFT không chỉ đơn thuần là một jpeg. Nhóm tại RMRK đang đưa các tiêu chuẩn mới của NFT vào hệ sinh thái DOT và dẫn đầu trong việc xây dựng thế hệ tiếp theo.

Thử thách này yêu cầu việc tạo ra một bảng điều khiển chi tiết theo dõi sự phát triển của tất cả các RMRK (có khả năng tập trung vào [Kanarias](https://kanaria.rmrk.app/)), bao gồm chuyển nhượng, lịch sử biểu tượng cảm xúc và hơn thế nữa trên RMRK2. Bảng điều khiển này phải sử dụng một dự án SubQuery tập trung RMRK2.

Người chiến thắng trong [thử thách này](https://gitcoin.co/issue/subquery/grants/4/100027174) là một bảng điều khiển xuất sắc khác từ Web3Go được gọi là [NFT Garden](https://web3go.xyz/#/NFTProfiler). Nó bao gồm chi tiết chuyên sâu về từng bộ sưu tập NFT, chẳng hạn như giá trung bình, khối lượng, phạm vi giá và tất cả các giao dịch cho từng mặt hàng. Ngoài ra, có một số hình ảnh trực quan thú vị về tất cả các đặc điểm trong NFT.

![](https://miro.medium.com/max/1400/0*1_mUnNIBYI84G_qs)

“_Kể từ khi Web3Go ra đời, chúng tôi đã sử dụng SubQuery làm kiến trúc cơ bản để lập chỉ mục dữ liệu. Bộ công cụ phát triển do SubQuery cung cấp đã được chứng minh là rất phù hợp cho nhóm của chúng tôi để nhanh chóng phát triển, triển khai và nâng cấp các dự án, đây cũng là chìa khóa dẫn đến kết quả tốt của chúng tôi trên Gitcoin Hackathon. Trong bước tiếp theo, chúng tôi sẽ sử dụng Subquery để phát triển trang tổng quan cho tất cả các dự án trên Polkadot & Kusama parachains, sẽ liên quan đến Defi, NFT và Tokens!_ ”Hao Ding từ Web3Go cho biết.

## Mở rộng SubQuery sang một Blockchain lớp-1 khác

SubQuery có nguồn gốc từ Polkadot, đó là ngôi nhà của chúng tôi và chúng tôi đã làm việc chăm chỉ để xây dựng các mối quan hệ trong hệ sinh thái này. Mặc dù vậy, chúng tôi cũng tin tưởng vào một tương lai đa chuỗi, vì chúng tôi biết rằng sẽ có nhiều blockchain khác nhau làm việc cùng nhau để giải quyết các vấn đề khác nhau. Kế hoạch dài hạn của chúng tôi là sử dụng SubQuery và điều chỉnh nó để hoạt động cho các blockchain khác không có giải pháp lập chỉ mục hiện tại để giúp các nhà phát triển xây dựng các dApp mới.

Người chiến thắng trong [thử thách 12.000 đô la Mỹ này](https://gitcoin.co/issue/subquery/grants/5/100027175) là Naveen, người đã mở rộng SubQuery để lập chỉ mục blockchain Terra. Điều này được thực hiện bằng cách tạo một nhánh mở rộng gói nút của việc triển khai subql chính thức đến chỉ mục Terra. Naveen đang tiếp tục nghiên cứu vấn đề này và bạn có thể sớm có tin tức về các kế hoạch của SubQuery trong việc hỗ trợ các chuỗi lớp 1 khác bên ngoài Polkadot. <iframe width="560" height="315" src="https://www.youtube.com/embed/K_pjh5OC95A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

“_Tôi đã nghiên cứu một loạt các công cụ lập chỉ mục trong vài tháng qua và đã tiến xa hơn đến việc xây dựng một công cụ lập chỉ mục từ đầu. Đó có thể là lý do tại sao SubQuery thu hút sự chú ý của tôi trong Gitcoin GR12 Hackathon. Tôi đã nhận nhiệm vụ mở rộng SubQuery để lập chỉ mục Terra. Tôi không tin rằng tôi có thể làm được điều này trong 15 ngày. Nhưng, SubQuery được kiến trúc theo một cách tuyệt vời đến mức nó cho phép tôi tạo ra một bức tranh tinh thần về những gì đang diễn ra một cách nhanh chóng. Tôi đã hack cùng một giải pháp hoạt động đúng lúc và tôi hiện đang làm việc với SubQuery để hợp nhất trình chỉ mục Terra vào gói subql. Trong tương lai gần, tôi sẽ tiếp tục làm việc với SubQuery để duy trì và mở rộng dự án và có thể xây dựng các chỉ mục cho một số chuỗi lớp 1 khác_” Naveen cho biết.

[Sam Zou](https://twitter.com/zoujialiu), Giám đốc điều hành kiêm Người sáng lập SubQuery nhận xét: “_SubQuery rất vui với kết quả của Gitcoin GR12 Hackathon. Sứ mệnh của chúng tôi là dựa vào việc có một mạng lưới các nhà phát triển được trao quyền để tạo và đổi mới trong hệ sinh thái Substrate/Polkadot. Sự hợp tác này đã tạo cơ hội cho các nhà phát triển có động lực trên khắp thế giới xây dựng các ứng dụng của tương lai. Chúng tôi rất vui mừng được nuôi dưỡng những người chiến thắng trong các thử thách để phát triển hơn nữa ý tưởng của họ_”

Tiếp theo từ cuộc thi Hackathon thành công này, SubQuery muốn khuyến khích các nhà phát triển muốn tìm hiểu thêm về cách xây dựng ứng dụng với SubQuery hãy [đăng ký “Khóa học anh hùng” trực tuyến miễn phí của chúng tôi hoặc đăng ký Chương trình tài trợ được công bố gần đây của chúng tôi](https://subquery.coassemble.com/unlock/dOKZW6O#/).

---

## Giới thiệu về SubQuery

[SubQuery](https://subquery.network/) là một tập hợp dữ liệu phi tập trung, lập chỉ mục & lớp truy vấn giữa các blockchains Lớp-1 và các ứng dụng phi tập trung. Dịch vụ này mở khóa dữ liệu blockchain và chuyển nó sang trạng thái có thể truy vấn để có thể sử dụng trong các ứng dụng trực quan. Nó cho phép các nhà phát triển DApp tập trung vào tính năng cốt lõi và giao diện người dùng của họ, mà không cần lãng phí thời gian vào việc xây dựng chương trình phụ trợ tùy chỉnh để xử lý dữ liệu. Mạng SubQuery sắp tới sẽ phi tập trung và mã hóa hệ sinh thái để cho phép mọi người tham gia vào cuộc cách mạng dữ liệu web3.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Youtube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
