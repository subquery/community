# SubQuery nhanh hơn rất nhiều với Dictionary

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Hôm nay, chúng tôi tự hào thông báo về cải tiến mới của chúng tôi đối với SubQuery, tính năng lập chỉ mục SubQuery Dictionary.

SubQuery Dictionary là tất cả về việc tăng tốc các Dự án của bạn. Nó cải thiện đáng kể việc lập chỉ mục hiệu suất của Dự án SubQuery của bạn, **đôi khi nhanh hơn tới 10 lần.**

Khi lập chỉ mục dữ liệu chuỗi, các Dự án SubQuery được sử dụng để kiểm tra từng khối. Chuỗi của Polkadot có dung lượng lớn, 130 Gb dữ liệu phi cấu trúc trên gần 6 triệu khối. Quá trình này mất nhiều giờ để lập chỉ mục, thời gian mà bạn không muốn đợi - đặc biệt là khi thử nghiệm.

Các dự án SubQuery hiện có tùy chọn để bỏ qua tất cả điều này, về cơ bản chúng tôi lập chỉ mục trước vị trí của tất cả các sự kiện trong một chuỗi.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Hiệu suất được cải thiện nhiều nhất khi dữ liệu không xuất hiện phổ biến mà thay vào đó nằm xen kẽ dọc theo chuỗi, như thể dữ liệu hiếm, Dictionary bỏ qua nhiều khối hơn và do đó tác động đến hiệu suất lớn hơn.

Điểm cuối Dictionary có thể được thêm vào [tệp ‘project.yaml’ của bạn](https://doc.subquery.network/create/manifest.html) hoặc cách khác là [ được chỉ định tại thời gian chạy](https://doc.subquery.network/run/run.html#using-a-dictionary). Ngoài ra, bạn cũng có thể ghi đè điểm cuối này khi chạy Dự án của mình trong [Dự án truy vấn con](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Bạn có thể đọc thêm về Dictionary trong [tài liệu hữu ích của chúng tôi tại đây](https://doc.subquery.network/run/run.html#using-a-dictionary).

Chúng tôi tin rằng SubQuery là tùy chọn lập chỉ mục dữ liệu tốt nhất có sẵn cho bất kỳ dApp Polkadot / Substrate nào và việc triển khai SubQuery Dictionary mới này cho phép chúng tôi cải thiện hơn nữa dịch vụ của mình bằng cách tăng tốc quá trình lập chỉ mục cho các Dự án SubQuery của bạn.

Bạn có thể tự mình thử nó trong [Dự án SubQuery](https://project.subquery.network/) hoặc tự xem các Dictionary trong [Explorer](https://explorer.subquery.network/) của chúng tôi. Để sử dụng Dictionary trong dự án hiện tại của bạn, phiên bản [@subql/cli](https://www.npmjs.com/package/@subql/cli) của bạn ít nhất phải là 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)