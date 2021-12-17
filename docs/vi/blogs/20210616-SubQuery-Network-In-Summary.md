# Mạng SubQuery - Tóm tắt

> Mạng SubQuery hoạt động như thế nào? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Hôm nay chúng ta sẽ nói về cách Mạng SubQuery hoạt động ở cấp độ cao.

## Những người tham gia


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Những người tham gia vào Mạng SubQuery

Những người tham gia vào Mạng SubQuery được chia thành 3 dạng:

-   **Người tiêu dùng**: Người tiêu dùng sẽ đưa ra yêu cầu đối với Mạng SubQuery về dữ liệu cụ thể và trả một số lượng SQT được báo trước đó
-   **Người lập chỉ mục**: Người lập chỉ mục sẽ lưu trữ các Dự án SubQuery trong cơ sở hạ tầng của riêng họ, chạy dịch vụ node và truy vấn để lập chỉ mục dữ liệu và trả lời các yêu cầu GraphQL.
-   **Người ủy quyền**: Người ủy quyền sẽ tham gia vào mạng bằng cách hỗ trợ Người lập chỉ mục yêu thích của họ để kiếm phần thưởng

## Indexer (Người lập chỉ mục), Người tiêu dùng và Truy vấn

Hãy bắt đầu Người lập chỉ mục: Người lập chỉ mục thực hiện rất nhiều công việc khó khăn đằng sau hậu trường. Họ quản lý phần cứng, chạy cơ sở hạ tầng, giám sát tài nguyên và chọn các dự án SubQuery phù hợp để lập chỉ mục

Việc này tốn thời gian và tiền bạc, nhưng một khi họ làm được điều này, Người tiêu dùng có thể đến và đưa ra yêu cầu. Người tiêu dùng sẽ đưa ra yêu cầu đối với mạng SubQuery về dữ liệu cụ thể và trả một lượng token SQT được thông báo trước.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Người tiêu dùng sẽ đưa ra yêu cầu đối với mạng SubQuery về dữ liệu cụ thể và trả một lượng token SQT được thông báo trước.

## Hàm sản xuất Cobb-Douglas

Khoản thanh toán này được tính vào doanh thu của dự án và khi kết thúc chu kỳ đặt cược (28 ngày), chúng tôi sẽ lấy doanh thu này ra và tiến hành phân chia. Doanh thu này được gửi tới những Người lập chỉ mục thông qua hàm sản xuất Cobb-Douglas.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Doanh thu này được gửi tới những Người lập chỉ mục thông qua hàm sản xuất Cobb-Douglas.

Nói một cách dễ hiểu, cách tiếp cận này có nghĩa là doanh thu được phân bổ cho những Người lập chỉ mục cạnh tranh theo tỷ lệ của số yêu cầu được phản hồi và số lượng token đặt cược.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Doanh thu được phân bổ cho những Người lập chỉ mục cạnh tranh theo tỷ lệ của số yêu cầu được phản hồi và số lượng token đặt cược.

Theo quan điểm của chúng tôi, cái hay của phương trình này là Người lập chỉ mục phải duy trì mức SQT đặt cược cao so với công việc họ làm để nhận được doanh thu tối ưu. Do đó, chúng tôi không cần phải thúc ép họ đặt cược vì Người lập chỉ mục được khuyến khích tự quản lý và duy trì số lượng đặt cược cũng như sự biểu hiện của họ trong cuộc chơi này.

## Người uỷ quyền

Vì vậy, những người lập chỉ mục được khuyến khích vừa làm nhiều việc nhất có thể, vừa đặt cược nhiều nhất có thể để tối đa hóa phần thưởng của họ. Đây là lý do những người uỷ quyền xuất hiện.

Delegator có thể ủy quyền số SQT của họ cho Indexer, mỗi Indexer có thể công bố _tỷ lệ chia sẻ doanh thu phí truy vấn_ và Delegator đó sẽ được thưởng bằng một phần doanh thu phí truy vấn mà Indexer được thưởng.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegator có thể ủy quyền phần SQT rảnh rỗi của họ cho Indexer và những Delegator đó sẽ được thưởng bằng một phần doanh thu phí truy vấn mà Indexer được thưởng

_Tỷ lệ chia sẻ doanh thu phí truy vấn_ mà Indexer quảng cáo bị khóa cho mỗi chu kỳ 28 ngày và việc giảm tỷ lệ này phải được quảng cáo trong toàn bộ chu kỳ staking 28 ngày trước khi có hiệu lực.

Tương tự, Delegator có thể xóa số tiền ủy quyền của họ bất kỳ lúc nào, nhưng họ sẽ chỉ nhận được phần thưởng khi họ đã ủy quyền cho toàn bộ chu kỳ staking.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegator sẽ chỉ nhận được phần thưởng khi họ đã ủy quyền cho toàn bộ chu kỳ staking

## Đơn đặt hàng

Lập chỉ mục một dự án cần nhiều thời gian và tiền bạc, có rất nhiều dữ liệu trên chuỗi. Để khuyến khích Người lập chỉ mục lập chỉ mục và hỗ trợ Dự án SubQuery hoàn toàn mới, chúng tôi có kế hoạch triển khai cơ chế thị trường cho Người tiêu dùng để báo hiệu doanh thu đảm bảo cho Người lập chỉ mục của Dự án SubQuery mới.

Chúng tôi đang gọi chúng là đơn đặt hàng và Người tiêu dùng có thể quảng cáo một hợp đồng theo chuỗi với một mức giá và số lượng yêu cầu đã định. Người lập chỉ mục có thể xem điều này và chọn điền vào các hợp đồng.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Người tiêu dùng có thể quảng cáo một đơn đặt hàng trên chuỗi với một mức giá và số lượng yêu cầu đã định.

Các đơn đặt hàng cũng có thể được đặt trên các Dự án SubQuery hiện có để thu hút thêm Indexer nhằm cải thiện tính cạnh tranh và giảm giá