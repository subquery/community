# Bản tóm tắt Tháng 4 năm 2021

Tháng 4 là một tháng vô cùng bận rộn đối với SubQuery, sự phát triển của chúng tôi đang bắt đầu tăng tốc với tốc độ khủng khiếp và chúng tôi đang phá vỡ các kỷ lục mới mỗi ngày. Như chúng tôi đã đề cập vào tháng trước, trọng tâm của chúng tôi trong ngắn hạn là hai yếu tố; mở rộng quy mô nền tảng của chúng tôi để bắt kịp với nhu cầu tăng vọt và tương tác với ngày càng nhiều đối tác để giúp họ tạo các dự án SubQuery của riêng mình.

Trong bản cập nhật tháng này:

-   Tập trung vào các công cụ của Đối tác - Khởi chạy Dự án SubQuery
-   Trường hợp sử dụng SubQuery của BiFrost
-   Cải tiến khả năng mở rộng của nhà cung cấp dịch vụ OnFinality của chúng tôi
-   Và nhiều hơn nữa…

Về mặt đối tác, chúng tôi đã tung ra một sản phẩm chính cần thiết để thúc đẩy sự phát triển của SubQuery về mặt hoạt động. Trước khi bạn có thể tạo và chạy các dự án SubQuery của riêng mình tại địa phương hoặc trong cơ sở hạ tầng của riêng bạn. [Projects](https://project.subquery.network/) cho phép người dùng đẩy dự án của họ lên cộng đồng SubQuery và chúng tôi sẽ chạy chúng trong một dịch vụ công có hiệu suất cao, có thể mở rộng và được quản lý - miễn phí!

![](https://miro.medium.com/max/1400/0*zZkmiEq5g2BbAxfl)

Phần còn thiếu cuối cùng này giờ đây có nghĩa là chúng tôi có một bộ công cụ hoàn chỉnh để cho phép và trao quyền cho khách hàng [khám phá](https://explorer.subquery.network/), [tạo](https://doc.subquery.network/quickstart.html), [chạy](https://doc.subquery.network/run/indexing_query.html), rồi [tự xuất bản](https://doc.subquery.network/publish/publish.html#benefits) các dự án SubQuery cho chính họ.

![](https://miro.medium.com/max/1400/0*pDQgyo3phe2ZcMml)

Vào tháng 4, [Bifrost Finance](https://bifrost.finance/) đã ra mắt bản beta của dApp mới của họ, giao diện tương tác chính thức cho tất cả các dịch vụ của Bifrost. Thông qua dApp này, người dùng có thể đúc vTokens, mua lại và hoán đổi các dẫn xuất này và xem thu nhập của họ trong thời gian thực.

Dịch vụ của SubQuery giúp Bifrost cung cấp phần lớn dữ liệu được hiển thị trong dApp mới của họ. Tất cả dữ liệu lịch sử về các sự kiện chuyển nhượng, đúc tiền và đổi quà (chẳng hạn như giá, ngày, đơn vị tiền tệ và nhóm) được tổng hợp và truy vấn từ dịch vụ truy vấn và lập chỉ mục nâng cao của SubQuery. Ví dụ: SubQuery cho phép Bifrost tính toán thời gian thực và giá mua lại cho vDot và vEth để hiển thị trong ứng dụng của họ, đồng thời lấy tổng số vTokens trong một ví nhất định.

![](https://miro.medium.com/max/1400/0*heWoX8Kw1nm1iYd9)

Dự án Bifrost SubQuery mới trong SubQuery Explorer

> “Nếu không có SubQuery, thật khó để tưởng tượng việc thu thập dữ liệu từ chuỗi theo cách thủ công sẽ phức tạp như thế nào. Các nhà phát triển Bifrost có thể dành nhiều thời gian để tìm kiếm tất cả dữ liệu giao dịch trên chuỗi để sử dụng cho lịch sử giao dịch. SubQuery giúp các nhà phát triển tiết kiệm rất nhiều chi phí làm việc lặp đi lặp lại. Bifrost sẽ hợp tác lâu dài với SubQuery để đẩy nhanh tốc độ phát triển sản phẩm”. — Bifrost Finance

OnFinality là nhà cung cấp dịch vụ chính cho SubQuery - hầu hết các trình chỉ mục SubQuery trong các dự án Polkadot và Kusama đang sử dụng các điểm cuối API công khai của OnFinality để lấy dữ liệu của họ. Lưu lượng truy cập đáng kể từ SubQuery là một trong những lý do tại sao OnFinality là nhà cung cấp cơ sở hạ tầng lớn nhất trong hệ sinh thái Polkadot / Kusama.

Vào tháng 4, OnFinality đã đạt được mục tiêu dài hạn là 100 triệu lượt trong một ngày, trên thực tế, họ đã đạt được mục tiêu đó với 127 triệu lượt yêu cầu trong 24 giờ (gần 1.500 lượt mỗi giây).

![](https://miro.medium.com/max/1400/0*FLq4vXluI9CTiBQ8)

OnFinality cũng [đưa ra đề xuất ngân quỹ của họ](https://kusama.polkassembly.io/treasury/72) cho cột mốc thứ hai nhằm cải thiện khả năng mở rộng của dịch vụ API của họ. Định tuyến thông minh cho phép họ sử dụng tối đa các cụm node khác nhau trên cơ sở người dùng của họ ở các vùng địa lý khác nhau. SubQuery dựa trên cơ sở hạ tầng này nên điều quan trọng cần lưu ý là tiếp tục đầu tư và cải tiến ở đây. Tháng vừa qua đã chứng minh việc tiếp tục đầu tư quy mô là rất quan trọng để chúng tôi có thể tiếp tục cung cấp dịch vụ tốt nhất mỗi ngày.

-   Giám đốc điều hành Sam Zou của chúng tôi đã trình bày _Tương lai không gian mạng trên sự kiện trực tuyến Parachains_ với Web3, Acala, Polkawarriors và Bitfwd

-   Giám đốc Phát triển Kinh doanh của chúng tôi, James Bayly đã tham gia một cuộc trò chuyện ảo thú vị bên cạnh DFG và James Wo trong chuỗi chương trình DFG Talks của họ.

-   Thời gian của chúng tôi trong Berkeley Xcelerator đã bắt đầu - cho đến nay, chúng tôi đã tham dự một số phiên tuyệt vời
-   Chúng tôi đã thực hiện một số cải tiến lớn cho [website SubQuery](https://subquery.network/) của mình
-   Bản phát hành mới của [tài liệu cải tiến](https://doc.subquery.network/) dành cho các nhà phát triển SubQuery
-   Các văn phòng của chúng tôi đang được cải thiện, chúng tôi may mắn có thể làm việc trong cùng một không gian ở New Zealand

![](https://miro.medium.com/max/1400/0*cOsJ2TLa4yqpY0Ig)

Mong đợi một số tin tức quan trọng đến vào tháng 5 cho cộng đồng của chúng tôi - chúng tôi đang làm việc trên một số thứ lớn và chúng tôi không thể chờ đợi để chia sẻ nó. Trong thời gian chờ đợi, hãy tạo dự án SubQuery của riêng bạn bằng cách làm theo [hướng dẫn bắt đầu nhanh mới của chúng tôi tại đây](https://doc.subquery.network/quickstart.html).