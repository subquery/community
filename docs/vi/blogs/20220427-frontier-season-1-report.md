# SubQuery Frontier Mùa 1: Báo cáo Testnet

![](https://miro.medium.com/max/700/0*b3TqTiJWGrNSs28F)

Tuần trước, chúng tôi đã hoàn thành thành công mùa đầu tiên của testnet SubQuery Frontier. Testnet, viết tắt của "test network", là một mạng được các nhà phát triển sử dụng để kiểm tra code trước khi nó được triển khai trên mạng chính (hoặc "Mainnet"). Trong trường hợp của SubQuery, việc ra mắt testnet đánh dấu một cột mốc quan trọng trong quá trình phát triển của chúng tôi khi chúng tôi tiến tới việc triển khai đầy đủ mainnet, cùng thời điểm với việc niêm yết token của chúng tôi trên các sàn giao dịch tập trung.

Mùa 1 của testnet SubQuery Frontier có mục tiêu sau: tìm và sửa các lỗi nghiêm trọng và các vấn đề về tài liệu liên quan đến các hoạt động chính ngày qua ngày của người lập chỉ mục. Để giúp chúng tôi làm điều này, chúng tôi đã tuyển dụng 23 nhà vận hành node có kinh nghiệm trong việc chạy các sản phẩm có hiệu suất cao và khả năng mở rộng với giám sát và bảo mật ví/cơ sở hạ tầng.

<iframe width="692" height="389" src="https://www.youtube.com/embed/hZ1Mn-jOuHQ" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Chúng tôi tập trung vào những gì chúng tôi gọi là "các hoạt động chính của Người lập chỉ mục" trong phần này, bao gồm quy trình giới thiệu cơ bản để Người lập chỉ mục đăng ký, bắt đầu xử lý dự án SubQuery và bán dữ liệu cho Mạng lưới. Điều này bao gồm cài đặt tất cả các dịch vụ, làm theo tài liệu của chúng tôi để lập chỉ mục và thông báo hỗ trợ dự án SubQuery của họ, sau đó thực hiện các hoạt động stake và ủy quyền. Người lập chỉ mục cũng được kỳ vọng sẽ duy trì và hiển thị các điểm cuối GraphQL của họ trong thời gian hoạt động của mỗi điểm được đo lường.

> _ "Trải nghiệm tổng thể là tốt, mọi thứ gọn gàng, trực quan và rõ ràng. Đã có rất nhiều thay đổi trong suốt chặng đường và chúng tôi mong muốn được báo cáo nhiều lỗi hơn mà chúng tôi sẽ tìm thấy trong Mùa 2, để khởi đầu suôn sẻ Mạng SubQuery gốc! "_ - Người tham gia Mùa 1

Chúng tôi đã thu thập một lượng lớn dữ liệu và phản hồi trong mùa này, bao gồm một số lỗi UX quan trọng và phản hồi về các dịch vụ của trình lập chỉ mục. Tất cả những người lập chỉ mục tham gia đều có thể bắt đầu mà không gặp sự cố, một minh chứng cho chất lượng của tài liệu và các ứng dụng lập chỉ mục mà nhóm của chúng tôi đã xây dựng. Chúng tôi cũng đã học được rất nhiều về cách các dịch vụ trình lập chỉ mục hoạt động trên các nền tảng đám mây và phần cứng khác nhau, điều này sẽ giúp chúng tôi xác định và chia sẻ các chiến lược để chạy các node trình lập chỉ mục có khả năng mở rộng.

Tổng kết lại, nhóm của chúng tôi đã ngạc nhiên trong sự dễ chịu bởi không có bất kỳ vấn đề lớn nào và chúng tôi rất vui khi nhanh chóng chuyển sang Mùa 2, một phiên bản beta với số lượng người tham gia đông hơn. Mùa 2 sẽ ra mắt với các tính năng mới bao gồm bảng xếp hạng, trong đó các thử thách sẽ được cho điểm và chỉ những người có chỉ số hiệu suất hoạt động cao mới vươn lên dẫn đầu và nhận phần thưởng cho những nỗ lực của họ. Hệ thống bảng xếp hạng sẽ khuyến khích người tham gia của chúng tôi hơn nữa và đảm bảo chúng tôi đang có được một bài kiểm tra áp lực thực sự từ mùa 2 khi mà các Nhà lập chỉ mục chiến đấu để vượt qua nhau trong bảng xếp hạng.

Giai đoạn tiếp theo này sẽ đặc biệt quan trọng đối với chúng tôi trên nhiều mặt. Chủ yếu, bằng cách mời một lượng lớn người tham gia hơn, chúng tôi hy vọng sẽ mô phỏng tải lượng; lên tới 200 triệu yêu cầu/ngày để đảm bảo mạng lưới được trang bị và có khả năng quản lý toàn bộ thời gian hoạt động và trải nghiệm chất lượng. Điều này sẽ chuẩn bị cho Mùa 3, chào đón bất kỳ kiểu người tham gia nào bao gồm cả những người có sở thích và những người không rành về kỹ thuật trong cộng đồng của chúng tôi --- chúng tôi mong đợi sẽ được thử thách họ về tài liệu và thông tin liên lạc của chúng tôi!

![](https://miro.medium.com/max/700/0*viJ1DgWiGoPdI2fS)

Frontier Testnet đang được triển khai theo từng giai đoạn mà chúng tôi gọi là các mùa, bắt đầu từ ngày 11 tháng 4 với mỗi mùa kéo dài trong 2-3 tuần. Sau khi đưa ra [ lời kêu gọi các nhà lập chỉ mục tham gia ](./20211202-indexer-invitation), chúng tôi đã bị choáng ngợp bởi phản ứng từ cộng đồng của mình và sau khi cân nhắc kỹ lưỡng, chúng tôi đã chọn 23 người lập chỉ mục để tham gia vào mùa giải đầu tiên. Giờ đây, mùa đầu tiên đã hoàn thành, chúng tôi đang mong chờ Mùa 2 vừa mới bắt đầu hôm nay với hơn 100 Nhà lập chỉ mục được lựa chọn cẩn thận và mở rộng thêm các chức năng.

Mặc dù có một số yếu tố đang diễn ra, chúng tôi hy vọng có thể công bố thời gian TGE của chúng tôi ngay sau khi kết thúc Mùa 2, đồng thời bắt đầu chuẩn bị triển khai Mùa 3. Để biết thêm thông tin về testnet, vui lòng truy cập trang web tài liệu SubQuery: https://university.subquery.network/

Để biết thêm thông tin, vui lòng [ liên hệ với nhóm của chúng tôi trên Discord ](https://discord.com/invite/78zg8aBSMG).

## Giới thiệu về mạng SubQuery

[SubQuery](https://subquery.network/) là bộ công cụ dành cho nhà phát triển blockchain cho phép những người khác xây dựng các ứng dụng Web3 trong tương lai. Dự án SubQuery là một API hoàn chỉnh để tổ chức và truy vấn dữ liệu từ chuỗi L1. Hiện đang phục vụ các dự án Polkadot, Substrate và Avalanche, dữ liệu dưới dạng dịch vụ này cho phép các nhà phát triển tập trung vào phát triển cốt lõi sản phẩm và giao diện người dùng của họ mà không cần lãng phí thời gian xây dựng chương trình phụ trợ tùy chỉnh để xử lý dữ liệu. Mạng SubQuery đề xuất kích hoạt giải pháp có thể mở rộng và đáng tin cậy tương tự này, nhưng theo cách hoàn toàn phi tập trung.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
