# Mạng SubQuery - Tóm tắt

> How does the SubQuery Network work? [ELI5](https://www.dictionary.com/e/slang/eli5/#:~:text=ELI5%20stands%20for%20the%20phrase,naive%20understanding%20of%20the%20issue.)

Hôm nay chúng ta sẽ nói về cách Mạng SubQuery hoạt động ở cấp độ cao.

## Những người tham gia


![](https://miro.medium.com/max/1400/1*9993cakplwupZC5tbUv3vA.png)

Những người tham gia vào Mạng SubQuery

Có ba loại tham gia trong Mạng SubQuery:

-   **Người tiêu dùng**: Người tiêu dùng sẽ đưa ra yêu cầu đối với Mạng SubQuery về dữ liệu cụ thể và trả một số tiền được quảng cáo cho SQT
-   **Bộ lập chỉ mục**: Người lập chỉ mục sẽ lưu trữ các Dự án SubQuery trong cơ sở hạ tầng của riêng họ, chạy dịch vụ node và truy vấn để lập chỉ mục dữ liệu và trả lời các yêu cầu GraphQL.
-   **Người ủy quyền**: Người ủy quyền sẽ tham gia vào mạng bằng cách hỗ trợ Người lập chỉ mục yêu thích của họ để kiếm phần thưởng

## Indexer (Người lập chỉ mục), Người tiêu dùng và Truy vấn

Let’s start with Indexers, Indexers do a lot of the hard work behind the scenes. The manage hardware, run infrastructure, monitor resources, and choose the right SubQuery projects to index

This takes time and money, but once they have this, Consumers may come and make requests. Consumers will make requests to the SubQuery network for specific data and pay an advertised amount of our token, SQT.

![](https://miro.medium.com/max/1400/1*dKLkzSc2uXYaPW_IXUxstQ.png)

Người tiêu dùng sẽ yêu cầu mạng SubQuery về dữ liệu cụ thể và thanh toán một lượng token được quảng cáo của chúng tôi, SQT.

## Chức năng sản xuất Cobb-Douglas

This payment goes into a project revenue pool and at the end of a staking era (28 days) we take this project revenue pool and split it. It’s spit across indexers by something called the Cobb-Douglas production function.

![](https://miro.medium.com/max/1400/1*E-W7o7cWoclxHb8rXAMdpA.png)

Nó xuất hiện trên các chỉ mục bởi một thứ gọi là hàm sản xuất Cobb-Douglas.

Nói một cách dễ hiểu, cách tiếp cận này có nghĩa là doanh thu được phân bổ cho những Indexer cạnh tranh theo tỷ lệ của số request được phản hồi và số tiền được stake.

![](https://miro.medium.com/max/1400/1*VhDu2BGDxd3ob7z9XkoOXA.png)

Doanh thu được phân bổ cho những Indexer cạnh tranh theo tỷ lệ của số request được phản hồi và số tiền được stake.

In our view, the beauty of this equation is that a rational Indexer must maintain a high level of staked SQT relative to the work they do in order to receive optimal revenue. As a result, we do not need to enforce arbitrary staking requirements because Indexers are incentivised to self-manage and maintain a stake or skin in the game.

## Delegators

So Indexers are incentivised to both do as much work as possible, and to stake as much as possible to maximise their rewards. This is where delegators come in.

Delegator có thể ủy quyền số SQT của họ cho Indexer, mỗi Indexer có thể công bố _tỷ lệ chia sẻ doanh thu phí truy vấn_ và Delegator đó sẽ được thưởng bằng một phần doanh thu phí truy vấn mà Indexer được thưởng.

![](https://miro.medium.com/max/1400/1*YoN7PV7h3a2nAFN-ODqILg.png)

Delegator có thể ủy quyền phần SQT rảnh rỗi của họ cho Indexer và những Delegator đó sẽ được thưởng bằng một phần doanh thu phí truy vấn mà Indexer được thưởng

_Tỷ lệ chia sẻ doanh thu phí truy vấn_ mà Indexer quảng cáo bị khóa cho mỗi chu kỳ 28 ngày và việc giảm tỷ lệ này phải được quảng cáo trong toàn bộ chu kỳ staking 28 ngày trước khi có hiệu lực.

Tương tự, Delegator có thể xóa số tiền ủy quyền của họ bất kỳ lúc nào, nhưng họ sẽ chỉ nhận được phần thưởng khi họ đã ủy quyền cho toàn bộ chu kỳ staking.

![](https://miro.medium.com/max/1400/0*we0k4A07pbj86COZ)

Delegator sẽ chỉ nhận được phần thưởng khi họ đã ủy quyền cho toàn bộ chu kỳ staking

## Đơn đặt hàng

Indexing a project takes time and money, there’s a lot of data on the chain. In order to encourage Indexers to index and support an entirely new SubQuery Project, we plan to implement a market mechanism for Consumers to signal guaranteed revenue to Indexers of new SubQuery Projects.

We’re calling them purchase orders, and Consumers can advertise a contract on chain for a set price and number of requests. Indexers can view this and choose to fill the contracts.

![](https://miro.medium.com/max/1400/1*IPtaZlt24E7h9bKNZWdSCw.png)

Người tiêu dùng có thể quảng cáo một đơn đặt hàng trên chuỗi với một mức giá và số lượng yêu cầu đã định.

Các đơn đặt hàng cũng có thể được đặt trên các Dự án SubQuery hiện có để thu hút thêm Indexer nhằm cải thiện tính cạnh tranh và giảm giá