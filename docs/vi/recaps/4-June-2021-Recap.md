# Tóm tắt Tháng 6 năm 2021

## Mọi thứ đang trở nên bận rộn 🔥

Trong bản cập nhật tháng này:

-   Phát hành Whitepaper 🎊
-   Mở rộng đội ngũ 👩💻
-   Triển khai staging📥
-   Dịch vụ từ điển SubQuery 📖
-   Cải thiện phạm vi tiếp cận của chúng tôi ở Trung Quốc 🇨🇳

Mạng SubQuery là nỗ lực của chúng tôi nhằm hướng tới một mạng phân quyền và được mã hóa để đảm bảo không có điểm lỗi nào cho SubQuery và khuyến khích càng nhiều người tham gia vào quá trình này càng tốt.

[Tháng trước, chúng tôi đã phát hành công khai báo cáo chính thức của mình để mọi người đọc.](https://static.subquery.network/whitepaper.pdf) Bạn cũng có thể đọc/xem [giải thích ngắn tại đây](https://subquery.medium.com/the-subquery-network-a-summary-46cde0acb010).

Chúng tôi có những mục tiêu đầy tham vọng tại SubQuery là trở thành nhà cung cấp dịch vụ dữ liệu nhanh nhất và có thể truy cập được trên Substrate. Chúng tôi đã viết báo cáo chính thức này để nêu bật [lợi thế cạnh tranh](https://subquery.medium.com/subquery-network-our-goals-and-competitive-advantages-a6efdd544be4) của chúng tôi và trọng tâm của chúng tôi bây giờ là thực hiện tầm nhìn này. Mạng SubQuery xoay quanh hai khía cạnh chính, tính linh hoạt và tính đơn giản.

Các mục tiêu đầy tham vọng yêu cầu một nhóm hạng nhất và chúng tôi đã liên tục bổ sung các thành viên mới vào nhóm trong tháng. Bao gôm; thực tập sinh phát triển mới, một nhà thiết kế UX, một người viết tài liệu phát triển và nhân viên phát triển kinh doanh tại Trung Quốc.

Chúng tôi vẫn đang tìm kiếm thêm, đặc biệt là trong các lĩnh vực sau. Vui lòng cho chúng tôi biết nếu bạn nghĩ đến ai đó:

-   [Trưởng bộ phận Marketing](https://angel.co/company/subquery/jobs/1494376-head-of-marketing) hoặc phát triển kinh doanh tại Hoa Kỳ EU (đây là cơ hội hiếm có không thể bỏ qua)
-   [Kỹ sư SRE](https://angel.co/company/subquery/jobs/1497942-site-reliability-engineer)
-   Các nhà phát triển [Rust](https://angel.co/company/subquery/jobs/1494414-rust-developer) và [Solidity](https://angel.co/company/subquery/jobs/1494435-solidity-developer)

Chúng tôi tin rằng các nhà phát triển trong ngành của chúng tôi nên tập trung vào việc xây dựng tương lai chứ không phải chạy cơ sở hạ tầng - dịch vụ được lưu trữ trên máy chủ SubQuery của chúng tôi là biểu hiện của điều đó. [ Vào tháng 6, chúng tôi đã phát hành các vùng triển khai ](https://subquery.medium.com/deployment-slots-are-here-subquery-projects-4fe2629f8858), một tính năng hoàn toàn mới giúp cải thiện trải nghiệm của nhà phát triển trong dịch vụ được lưu trữ của SubQuery.

Vị trí triển khai là một tính năng mới có nghĩa là các nhà phát triển có thể cập nhật Dự án của họ, lập chỉ mục lại dữ liệu của họ và nâng cấp Dự án SubQuery được lưu trữ của họ mà không có thời gian chết. Chúng tôi tiếp tục đặt dịch vụ được quản lý miễn phí của mình trở thành lựa chọn mặc định cho khách hàng của chúng tôi chọn để vận hành cơ sở hạ tầng của họ.

Một yêu cầu chung mà chúng tôi gặp phải từ khách hàng là làm thế nào để cải thiện tốc độ lập chỉ mục của dự án SubQuery của họ. Việc lập chỉ mục dữ liệu lịch sử trên một chuỗi lớn như Polkadot có thể mất hàng giờ nếu không phải vài ngày, khiến việc kiểm tra trở nên khó khăn.

Các dự án SubQuery hiện có tùy chọn để bỏ qua tất cả điều này bằng cách sử dụng tính năng mới của chúng tôi - [Từ điển SubQuery](https://subquery.medium.com/subquerys-just-got-a-lot-faster-with-the-dictionary-8a7a1447574). Về cơ bản, chúng tôi lập chỉ mục trước vị trí của tất cả các sự kiện trong một chuỗi và kết quả là chúng tôi nhận thấy tốc độ lập chỉ mục nhanh hơn gấp 10 lần, SubQuery nhanh hơn bao giờ hết.

Trung Quốc là một phần quan trọng trong các kế hoạch mở rộng chiến lược của chúng tôi. Vào tháng 6, Siqi đã tham gia cùng chúng tôi và sẽ dẫn dắt sự phát triển kinh doanh của chúng tôi trong khu vực. Cô ấy chắc chắn đã thành công, kết nối với nhiều khách hàng và đối tác hiện tại của chúng tôi ở đó.

Siqi đã ở trên sân khấu [ tại sự kiện Polka Ecology National Tour cực kỳ thành công tại ga Hợp Phì ](https://twitter.com/SubQueryNetwork/status/1409696588465721348), thiết lập mối liên hệ với nhiều bên dự án khác cũng tham dự hội nghị. Cô ấy sẽ có mặt tại nhiều sự kiện trong tương lai, vì vậy hãy để ý đến cô ấy và nói xin chào!

Bước sang tháng tới, chúng tôi mong muốn tiếp tục phát triển nhanh chóng và đang thực hiện nhiều dự án thú vị. Giữ liên lạc thông qua phương tiện truyền thông xã hội của chúng tôi để là người đầu tiên biết điều gì đang xảy ra!

James, Sam và Nhóm SubQuery

[Website](https://subquery.network/) | [Email](mailto:hello@subquery.network) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [Medium](https://subquery.medium.com/)