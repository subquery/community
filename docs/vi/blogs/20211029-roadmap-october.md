# SubQuery công bố lộ trình kỹ thuật

![](https://cdn-images-1.medium.com/max/800/1*Qcu5mFIs8eJhAXaMpWOlMQ.png)

**SubQuery thông báo các cột mốc quan trọng bao gồm cả tiến trình TGE**

Hôm nay, chúng tôi rất vui mừng khi lần đầu tiên được công bố lộ trình kỹ thuật chi tiết của mình. Mục tiêu của SubQuery là trở thành nhà cung cấp dữ liệu hàng đầu trong hệ sinh thái Polkadot và sự hỗ trợ mà chúng tôi nhận được từ cộng đồng để giúp chúng tôi đạt được điều này thực sự tuyệt vời. Từ lúc chính thức thành lập vào cuối năm 2020 thông qua một [nguồn tài trợ Web3](https://web3.foundation/) cho đến khi phát hành phiên bản mã nguồn mở đầu tiên của chúng tôi vào tháng 1 năm 2021 rồi cả khi [kết thúc vòng gọi vốn Series A vào tháng 9](https://subquery.medium.com/series-a-1abed6c1c2af), chúng tôi xin chân thành cảm ơn sự hỗ trợ của tất cả các bạn đã giúp chúng tôi đi được đến giai đoạn này!

Khi chúng tôi tiếp tục đạt được động lực, đã đến lúc chúng tôi phải chia sẻ nhiều hơn về kế hoạch của chúng tôi cho tương lai, bao gồm cả lộ trình kỹ thuật của chúng tôi. Chúng tôi rất vui mừng về cách phát triển tiếp theo của SubQuery sẽ thúc đẩy nhiều giá trị hơn nữa cho hệ sinh thái Polkadot và mang lại nhiều cơ hội hơn cho cộng đồng tham gia vào sự phát triển của chúng tôi.

## Tương lai của chúng ta

Mặc dù SubQuery đã phục vụ hàng triệu truy vấn dữ liệu mỗi ngày cho [hơn 60 dự án trên Polkadot & Kusama](https://project.subquery.network/), chúng tôi muốn đảm bảo rằng giai đoạn tăng trưởng tiếp theo của chúng tôi được tiến hành một cách có tổ chức và có kiểm soát.

Vì lý do này, chúng tôi cảm thấy điều quan trọng là chúng tôi phải chứng minh và kiểm tra đầy đủ khả năng mở rộng của Mạng SubQuery thông qua một chương trình mạng thử nghiệm được khuyến khích. Quá trình này cũng sẽ cho phép chúng tôi thiết lập một cộng đồng các nhà lập chỉ mục trước khi ra mắt công khai thông qua TGE vào tháng 3 năm 2022 và mạng chính cuối cùng của chúng tôi vào cuối năm sau.

![](https://miro.medium.com/max/2400/1*I6mko5xumHAArzGePvEZiQ.jpeg)

Do đó, các nhiệm vụ chính trong quy trình làm việc của chúng tôi có thể được chia thành các mốc quan trọng sau.

## Hiện tại chúng ta đang ở đâu - Giữa quý 4 năm 2021

### Hỗ trợ EVM cho parachains

Chúng tôi sẽ sớm phát hành [hỗ trợ beta của chúng tôi cho việc triển khai Polkadot của Máy ảo Ethereum (EVM)](https://medium.com/@subquery/subquery-adds-ethereum-virtual-machine-evm-functionality-in-integration-with-moonbeam-and-ddbcdf0fd8ff). Điều này cho phép các nhà phát triển Polkadot và Ethereum tích hợp liền mạch cả dữ liệu Substrate và EVM vào một nơi và truy vấn nguồn dữ liệu duy nhất này bằng GraphQL.

SubQuery sẽ giới thiệu các bộ lọc nâng cao hơn các trình chỉ mục khác, cho phép lọc các giao dịch không theo hợp đồng, người gửi giao dịch, hợp đồng và các đối số nhật ký được lập chỉ mục, vì vậy các nhà phát triển có thể xây dựng nhiều dự án phục vụ cho nhu cầu dữ liệu cụ thể của họ.

### Học viện SubQuery

Học viện được thiết kế để nâng cao kỹ năng và trao quyền cho các nhà phát triển trong hệ sinh thái SubQuery bằng cách cung cấp cho họ chương trình giáo dục theo mô-đun. [Khóa học đầu tiên của chúng tôi trong Học viện là _Khóa học Anh hùng_](https://doc.subquery.network/academy/herocourse/) và được khai giảng vào Thứ Sáu ngày 22 tháng 10 năm 2021.

Trong mỗi mô-đun của _Khóa học Anh hùng_, có một số bài học từ 5 đến 10 phút được cung cấp bằng một video được ghi lại. Nội dung video đi kèm với các hướng dẫn bằng văn bản, các trang trình bày, sổ làm việc và các liên kết đến kho lưu trữ mã GitHub đã hoàn thành.

Khóa học được thiết kế để giúp một nhà phát triển từ không biết gì về SubQuery trở thành chuyên gia trong việc xây dựng nguồn dữ liệu SubQuery cho ứng dụng blockchain mới của họ.

Trong vài tháng tới, chúng tôi sẽ triển khai nhiều chương trình giáo dục hơn cho Cộng đồng, với việc phát hành hàng tuần nội dung SubQuery _Khóa học anh hùng_ mới và các khóa học khác trong những tuần tới.

### Bằng chứng lập chỉ mục

Bằng chứng về việc lập chỉ mục cho phép chúng tôi đảm bảo rằng hai người lập chỉ mục khác nhau làm việc với cùng một dự án SubQuery đã lập chỉ mục cho cùng một dữ liệu chính xác. Đây là một thành phần quan trọng cần thiết để phát triển mạng SubQuery phi tập trung. Chúng tôi đang sử dụng một khái niệm gọi là Dãy núi Merkle để xác nhận và đảm bảo điều này, hãy theo dõi một bài đăng blog trong tương lai khám phá sâu hơn về điều này.

### Dịch vụ doanh nghiệp cao cấp

Chúng tôi có một số khách hàng lớn như Karura, Kodadot và Fearless Wallet, tất cả đều đang chạy các ứng dụng production trong SubQuery. Các đội này đang yêu cầu dịch vụ được cải thiện và mức độ tin cậy cao hơn.

Chúng tôi đang vượt qua thách thức với Thỏa thuận mức dịch vụ, cấp dịch vụ doanh nghiệp và các công cụ khác mà khách hàng lớn hơn của chúng tôi cần để điều hành doanh nghiệp của riêng họ và nhận được hiệu suất tốt nhất có thể từ SubQuery cho các ứng dụng của họ.

Vui lòng liên hệ với nhóm nếu bạn muốn trao đổi với chúng tôi về việc nhận hỗ trợ và dịch vụ cấp doanh nghiệp từ SubQuery.

## Mốc 1 - Cuối quý 4 năm 2021

### Chương trình Nhà xây dựng / Tài trợ SubQuery

Chương trình tài trợ này được thiết kế để tạo điều kiện và thúc đẩy sự đổi mới với Polkadot và SubQuery, đồng thời xây dựng thế hệ dApp tiếp theo để thúc đẩy cuộc cách mạng web3. Nó sẽ hỗ trợ các dự án mới với các khoản tài trợ, hỗ trợ kỹ thuật, tiếp thị và tư vấn phát triển kinh doanh từ SubQuery và những người khác.

Chúng tôi rất vui mừng về tiềm năng của điều này và sẽ sớm công bố thêm thông tin.

### Điều phối viên và triển khai SDK khách hàng

Chúng tôi sẽ cải thiện SubQuery SDK cốt lõi của mình và thêm các thành phần bổ sung cho khách hàng và điều phối viên SubQuery.

Bộ điều phối trình lập chỉ mục sẽ được triển khai bởi người lập chỉ mục để hiển thị mạng với trình lập chỉ mục và cho phép trình lập chỉ mục tự đăng ký với mạng SubQuery và quảng cáo dữ liệu mà nó đang cung cấp

SDK khách hàng sẽ dành cho vai trò người tiêu dùng và sẽ cho phép họ tìm người lập chỉ mục và quản lý toàn bộ giao dịch mà người tiêu dùng sẽ cần để truy xuất và trả tiền cho dữ liệu.

### Hợp đồng nội bộ của Mạng SQT MVP

Phiên bản mạng SubQuery đầu tiên của chúng tôi sẽ nằm trong một hợp đồng thông minh, được triển khai trên một parachain Polkadot hàng đầu. MVP nội bộ sẽ cho phép chúng tôi bắt đầu thử nghiệm nội bộ mọi thứ ở đây và là một cột mốc quan trọng để chúng tôi hoàn thành.

### Cụm EU

Khách hàng của chúng tôi đang yêu cầu hỗ trợ thêm các cụm cho dữ liệu SubQuery trên khắp thế giới. Nhiều cụm hơn có nghĩa là nhiều khả năng phục hồi hơn và dữ liệu SubQuery được lưu trữ gần hơn với vị trí khách hàng của họ. Một cụm châu Âu mới có nghĩa là yêu cầu nhanh hơn cho người tiêu dùng, hiệu suất vô song cho các nhà phát triển dApp và khả năng phục hồi cao hơn cho mạng SubQuery.

### Các cải tiến đối với subql init

Lệnh _subql init_ là một lệnh quen thuộc đối với bất kỳ ai đã xây dựng dự án SubQuery; nó đại diện cho một khung trống - cơ hội vô hạn. Chúng tôi nhận thức được rằng chúng tôi có thể làm tốt hơn để giúp những người khác bắt đầu, thay vì một nhà phát triển canvas trống rỗng muốn có một khung trống, nơi tất cả mã boiler-plate đã được viết sẵn.

Mục lộ trình này đại diện cho công việc mà chúng tôi muốn làm để cho phép các nhà phát triển bắt đầu xây dựng trên bất kỳ parachain nào mà không cần lo lắng về điểm cuối, từ điển và loại - tất cả đều tiết kiệm thời gian cho nhà phát triển và giúp những người khác bắt đầu.

## Mốc 2 - Giữa Q1 2022

### Khởi chạy testnet công khai

Tuân theo MVP nội bộ của hợp đồng Mạng SQT, chúng tôi sẽ mời một nhóm nhỏ người tham gia cùng chúng tôi khi chúng tôi bắt đầu thử nghiệm Mạng SubQuery. Để khởi chạy, chúng tôi cần hoàn thành một số lượng lớn nhiệm vụ và một lượng tài liệu lớn hơn nữa!

Vào đầu năm 2022, chúng tôi sẽ chia sẻ thêm thông tin về quá trình này và cách bạn có thể đăng ký tham gia.

### Lập chỉ mục điểm trong thời gian

Hãy tưởng tượng có thể tìm ra trạng thái của blockchain tại một thời điểm nhất định - chính xác thì một dự án SubQuery trông như thế nào ở khối thứ 5 triệu? Đây chính xác là những gì tính năng mới này sẽ cung cấp.

### Hợp đồng mạng SQT v1 và kiểm tra mã bởi một đối tác uy tín

Tất cả các mạng quan trọng đều yêu cầu đối tác bên ngoài kiểm tra mã thông qua để đảm bảo rằng mã của mạng đó an toàn và có thể mở rộng. SubQuery cũng không khác, vì vậy chúng tôi sẽ làm việc với các đối tác chính để kiểm tra toàn bộ mã tại đây và cũng tiếp tục nhận kiểm tra mã cho các hợp đồng thông minh của chúng tôi trong tương lai.

### Thử nghiệm thanh toán vi mô nội bộ

Đây là một tính năng chính đối với chúng tôi. Chúng tôi sẽ thực hiện nhiều công việc trong hệ sinh thái Polkadot để quản lý và xử lý các khoản thanh toán vi mô trong SubQuery. Lợi thế của Polkadot là phí giao dịch nhỏ so với các mạng khác như Ethereum, có nghĩa là các khoản thanh toán vi mô có liên quan hơn nhiều. Điều này sẽ được triển khai cho mạng thử nghiệm được khuyến khích của chúng tôi sau khi chúng tôi thực hiện thử nghiệm nội bộ kỹ lưỡng.

### Ứng dụng và Trình khám phá mạng SubQuery

Chúng tôi đang xây dựng trình khám phá và các ứng dụng khác để cho phép những người tham gia trong Mạng SubQuery khám phá và tìm dữ liệu trong Mạng SubQuery. Người tiêu dùng cũng sẽ sử dụng điều này để điều hướng thư viện các nguồn dữ liệu được hỗ trợ, cũng như người ủy quyền để phân tích cách người lập chỉ mục đang hoạt động để quyết định cách ủy quyền mã thông báo SQT của họ.

### Giám sát sức khỏe doanh nghiệp

Tiếp theo từ cấp dịch vụ SubQuery Enterprise của chúng tôi, bạn cũng có thể mong đợi một lượng lớn các công cụ theo dõi sức khỏe và phân tích hiệu suất khác được cung cấp cho khách hàng.

## Mốc 3 - Cuối Q1 2022

### Sự kiện tạo token SQT

Sau giai đoạn mạng thử nghiệm thành công, chúng tôi dự kiến ​​sẽ khởi chạy token SubQuery trên đối tác parachain của Polkadot. Chúng tôi sẽ chia sẻ thêm thông tin về tokenomics của chúng tôi với cộng đồng trong những tuần tới.

### Khởi chạy testnet được khuyến khích công khai với các khoản thanh toán vi mô

Đây là giai đoạn cuối cùng của mạng thử nghiệm của chúng tôi. Chúng tôi sẽ phát hành mọi thứ lên mạng thử nghiệm của mình và mong những người tham gia đẩy nó đến giới hạn. Điều này bao gồm kiểm tra quy mô và tải, tinh chỉnh các mô hình và hệ số kinh tế của chúng tôi, kiểm tra tài liệu và quy trình giới thiệu của chúng tôi, đồng thời đảm bảo rằng bạn có thể giao dịch với tiền thân của SQT trong đó.

Chúng tôi cũng mong muốn sẽ thưởng cho những người tham gia thử nghiệm mạng lưới của chúng tôi, những người hoàn thành nhiệm vụ hoặc một số nhiệm vụ nhất định và cả những thành viên khác của mạng thử nghiệm này.

### Báo cáo và thông tin chi tiết về lưu lượng dữ liệu

Chúng tôi đang xử lý hàng triệu yêu cầu dữ liệu cho các dự án SubQuery mỗi ngày. Hầu hết khách hàng của chúng tôi không có số liệu phân tích trong dApp của riêng họ do chính sách về quyền riêng tư của người dùng nhưng họ vẫn cần biết dApp của họ đang hoạt động như thế nào, vì vậy chúng tôi sẽ cải thiện điều này.

### Định tuyến thông minh có thể mở rộng

Mục tiêu của chúng tôi là mỗi ngày có một tỷ yêu cầu đối với dịch vụ được lưu trữ, đó là lý do tại sao chúng tôi sẽ giới thiệu một dịch vụ có thể mở rộng ra toàn cầu cho những vụ đang hoạt động được lưu trữ trên SubQuery.

Đây là một tính năng mới và liên tục được cải tiến, tự động định tuyến các yêu cầu đến nút có sẵn gần nhất. Ngoài ra, nó cho phép chúng tôi chuyển hướng tất cả các yêu cầu ngay lập tức đến vùng SubQuery dự phòng, cung cấp cho chúng tôi một hệ thống chịu lỗi trong trường hợp khu vực ngừng hoạt động.

Trong tương lai, điều này có nghĩa là chúng tôi sẽ tạo ra ngày càng nhiều dịch vụ nhỏ hơn được lưu trữ trên SubQuery và tiếp cận người dùng một cách có chiến thuật.

## Cột mốc 4 - Giữa quý 2 năm 2022

### Khởi chạy SubQuery Foundation

Với động thái nhằm tạo ra một Mạng SubQuery phi tập trung, chúng tôi sẽ thành lập Tổ chức SubQuery để quản lý việc quản trị và tăng trưởng của hệ sinh thái trong tương lai. Quyền sở hữu của Mạng lưới SubQuery ban đầu sẽ thuộc về Tổ chức SubQuery.

### Hoàn thiện nghiên cứu cho các chuỗi lớp 1 khác

Trong khi ngôi nhà của chúng tôi sẽ luôn là Polkadot, chúng tôi sẽ khai thác và hỗ trợ nhiều blockchain Lớp-1 khác với khả năng lập chỉ mục của chúng tôi.

### Chương trình khai thác thanh khoản

Để tăng cường tính thanh khoản của token SQT, chúng tôi sẽ tạo một chương trình khai thác thanh khoản với sàn giao dịch phi tập trung (DEX). Điều này sẽ cho phép chủ sở hữu token tạo ra lợi nhuận từ khoản đầu tư của họ.

## Cột mốc 5- Cuối Quý 2 năm 2022

### Khởi chạy mainnet 🚀

Sau khi hoàn tất quá trình chạy thử, chúng tôi sẽ khởi chạy mạng lưới SubQuery chính thức đầu tiên. Đây là nơi mọi thứ thực sự bắt đầu. Ban đầu, chúng tôi sẽ giới thiệu và trao thưởng cho những người tham gia mạng thử nghiệm, sau đó sẽ mở rộng hoàn toàn cho tất cả mọi người trong cộng đồng.

### Niêm yết trên sàn tập trung

Để thúc đẩy ứng dụng của SQT, chúng tôi dự kiến sẽ giới thiệu token trên một hoặc là nhiều sàn tập trung hàng đầu trong giai đoạn này cũng như nhiều sàn phi tập trung khác.

## Cột mốc 6 - Kế hoạch dài hạn

### Khởi chạy Parachain riêng

Mặc dù ban đầu chúng tôi dự định hợp tác với một parachain hàng đầu trên Polkadot để triển khai và mở rộng SubQuery Network với quy mô nhanh hơn, nhưng về lâu dài, SubQuery cũng có ý định ra mắt parachain của riêng mình để có thể tích hợp nhiều hơn nữa trong hệ sinh thái.

Parachain riêng này sẽ cho phép chúng tôi đổi mới các công cụ hơn nữa để có thể giúp các nhà phát triển xây dựng tương lai web3 nhanh hơn. Chúng tôi muốn nhắm tới một vị trí parachain sau khi chúng tôi có một hồ sơ theo dõi đã được chứng minh và cả những dữ liệu, cộng đồng cùng một token để hỗ trợ điều đó.

### Tổ chức SubQuery chuyển sang hình thức DAO

Đây là một chặng đường dài, nhưng chúng tôi luôn mơ ước SubQuery cuối cùng sẽ trở thành một Tổ chức tự trị phi tập trung- DAO thuộc sở hữu của cộng đồng. Chúng tôi đã nói nhiều lần rằng cộng đồng đóng một vai trò rất lớn trong SubQuery, mọi thứ chúng tôi làm đều là vì khách hàng của mình - trở thành DAO là hiện thân của trọng tâm đó.

Nói như vậy, đây là một chặng đường dài và sẽ chỉ được thực hiện khi chúng tôi hoàn toàn tin tưởng vào sự thành công và tương lai của SubQuery với cộng đồng.

## Giới thiệu về SubQuery

[SubQuery](https://subquery.network) là một lớp tổng hợp dữ liệu, lập chỉ mục & và truy vấn phi tập trung giữa các blockchains Lớp-1 và các ứng dụng phi tập trung. Giao thức này loại bỏ các đặc điểm riêng của dữ liệu blockchain với SubQuery SDK, cho phép các nhà phát triển tập trung vào việc triển khai sản phẩm cốt lõi của họ mà không cần lãng phí vô ích vào các công nghệ phụ trợ tùy chỉnh.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
