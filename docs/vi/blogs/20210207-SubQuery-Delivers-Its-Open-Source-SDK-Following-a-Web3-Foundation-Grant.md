# SubQuery cung cấp SDK mã nguồn mở sau khi được hỗ trợ bởi Web3 Foundation

## Các nhà phát triển hiện có thể chuyển đổi và truy vấn dữ liệu của thế giới cho tương lai Web3

![](https://miro.medium.com/max/1400/1*f9Jw37LjUGu8P8W39cjDYw.png)

Tuần này, OnFinality (nhóm đằng sau SubQuery), đã cung cấp cho Web3 Foundation Grant một quy trình làm việc hoàn chỉnh để tạo các dự án SubQuery. Chúng tôi vui mừng thông báo về công việc mà chúng tôi đã thực hiện để hoàn thành khoản tài trợ này và chia sẻ nó với mọi người để họ có thể bắt đầu sử dụng dự án của chúng tôi ngay hôm nay giúp họ truy vấn các dữ liệu trên mạng của họ hiệu quả hơn.

SubQuery được xây dựng bởi nhóm OnFinality, là một cơ sở hạ tầng & Nền tảng SaaS dành cho các nhóm blockchain và người dùng để khởi chạy các node và có quyền truy cập vào một loạt các giao thức blockchain. Chúng tôi có một bộ các dịch vụ cộng sinh bao gồm các node chia sẻ API và có mối quan hệ với các nhóm Polkadot/Substrate hàng đầu.

Hầu hết mọi blockchain đều có nhu cầu xử lý và truy vấn dữ liệu. Dự án của chúng tôi được lấy cảm hứng từ sự phát triển của các giao thức dữ liệu phục vụ lớp ứng dụng và chúng tôi muốn giúp cộng đồng Polkadot phát triển mạnh mẽ. Mục đích của SubQuery là giúp các dự án Polkadot/Substrate xây dựng các dApp tốt hơn bằng cách cho phép bất kỳ ai cũng có thể tìm và sử dụng dữ liệu nhanh hơn một cách đáng tin cậy. Dịch vụ của chúng tôi cho phép người dùng trích xuất, chuyển đổi, duy trì và truy vấn dữ liệu, cũng như kết nối và trình bày dữ liệu trong tương lai.

[Chương trình tài trợ mở của Web3 Foundation](https://github.com/w3f/Open-Grants-Program/pull/136) đã cho phép chúng tôi xây dựng SubQuery, một dự án mã nguồn mở cho phép người dùng chạy trình chỉ mục trên chuỗi của họ để xây dựng tập dữ liệu có thể được truy vấn bằng GraphQL.

Bộ công cụ này bao gồm @subql/cli, để cho phép các dự án tạo dự án SubQuery của riêng họ, xác định cách trình lập chỉ mục sẽ đi qua và tổng hợp trên mạng của các dự án đó. Là một phần trong đề xuất của chúng tôi, chúng tôi đã cung cấp một hướng dẫn cơ bản chỉ cho người dùng cách sử dụng cli để lập chỉ mục mạng của họ mà [bạn có thể làm theo tại đây](https://doc.subquery.network/quickstart.html). Chúng tôi thậm chí còn cung cấp tài liệu dành cho nhà phát triển chi tiết hơn để sử dụng nâng cao hơn.

Thứ hai, có một tập các node SubQuery tải dự án SubQuery được tạo bởi CLI và sau đó lập chỉ mục mạng và lưu trữ bằng cơ sở dữ liệu Postgres. Sử dụng Hasura, bạn có thể chạy các truy vấn GraphQL ngay lập tức trên các bảng được lập chỉ mục. Với sự trợ giúp của các công cụ này và tài liệu hỗ trợ cộng đồng mà chúng tôi luôn cải tiến, bất kỳ ai cũng có thể tạo và chạy các truy vấn một cách dễ dàng.

**Bạn có thể bắt đầu ngay lập tức bằng cách làm theo ví dụ của chúng tôi trên** [**Github của SubQuery**](https://github.com/OnFinality-io/subql) **. Ngoài ra, bạn có thể tìm hiểu thêm bằng cách đọc ** [**tài liệu SubQuery**](https://doc.subquery.network/) ** hoặc** [**truy cập website mới của chúng tôi**](https://subquery.network/) **. **

Chúng tôi vô cùng biết ơn sự hỗ trợ của Web3 Foundation đã giúp chúng tôi thực hiện dự án vì cộng đồng này. Web3 Foundation tài trợ cho các nhóm nghiên cứu và phát triển xây dựng nền tảng công nghệ của web phi tập trung. Nó được thành lập tại Zug, Thụy Sĩ bởi đồng sáng lập và cựu giám đốc công nghệ của Ethereum, Tiến sĩ Gavin Wood. Polkadot là dự án hàng đầu của Tổ chức.

Chúng tôi sẽ tập trung vào việc xây dựng một dịch vụ được lưu trữ được quản lý dựa trên dịch vụ này sẽ hoạt động hiệu quả hơn và có thể mở rộng. Chúng tôi sẽ cung cấp cơ sở hạ tầng công cộng đáng tin cậy sẽ xây dựng một nút SubQuery được sản xuất mạnh mẽ từ một dự án SubQuery đã tải lên. Sau đó, dịch vụ sẽ lập chỉ mục và duy trì trạng thái chuỗi, đồng thời cung cấp điểm cuối GraphQL production có thể thay thế các triển khai tự lưu trữ. Chúng tôi sẽ tập trung vào vấn đề này để mọi người khác có thể tập trung vào việc xây dựng và phát triển dApp của họ.

Chúng tôi đã sớm nhận thấy tiềm năng của Polkadot và ngay từ đầu, chúng tôi cảm thấy tự nhiên khi tập trung nỗ lực vào đó. Tiền đề cốt lõi của Polkadot là tạo ra một cộng đồng lớn mạnh gồm các nhà phát triển, người dùng và doanh nghiệp sẽ khai thác khả năng tương tác đa tuyến của nó - cộng đồng đó sẽ cần một dịch vụ cho phép họ tìm kiếm và sử dụng dữ liệu một cách đáng tin cậy một cách nhanh chóng.

Kiến trúc độc đáo của Polkadot có nghĩa là chúng tôi có thể tập trung vào một mạng và sau đó có thể hỗ trợ nhiều chuỗi hiện tại và tương lai một cách dễ dàng. Mặc dù Polkadot vẫn đang được phát triển, chúng tôi sẽ sẵn sàng giúp đỡ thế hệ nhà phát triển blockchain tiếp theo tạo ra dApp lớn kế tiếp.

Bắt đầu trên [Github của SubQuery.](https://github.com/OnFinality-io/subql)

Đọc [tài liệu SubQuery](https://doc.subquery.network/) của chúng tôi

[Ghé thăm trang web mới của chúng tôi](https://subquery.network/)

Tìm hiểu thêm về Web3 Foundation bằng cách truy cập [website](https://web3.foundation/) của họ. Để theo dõi những phát triển mới nhất tại Web3 Foundation, hãy tham gia cùng họ trên [Reddit](https://www.reddit.com/r/dot/) hoặc [Twitter](https://twitter.com/web3foundation).

Theo dõi chúng tôi tại:

-   [Telegram](https://t.me/subquerynetwork)
-   [Twitter](https://twitter.com/subquerynetwork)
-   [Matrix](https://matrix.to/#/%23subquery:matrix.org)
-   [LinkedIn](https://www.linkedin.com/company/subquery)