# SubQuery nhanh hơn rất nhiều với Dictionary

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

Hôm nay, chúng tôi tự hào thông báo về cải tiến mới của chúng tôi đối với SubQuery, tính năng lập chỉ mục SubQuery Dictionary.

The SubQuery Dictionary is all about speeding up your Projects. It dramatically improves indexing the performance of your SubQuery Project, **sometimes up to 10x faster.**

When indexing chain data, SubQuery Projects used to inspect each block. Polkadot’s chain is large, 130GB of unstructured data over almost 6 million blocks. This takes many hours to index, time that you don’t want to wait for — especially when testing.

Các dự án SubQuery hiện có tùy chọn để bỏ qua tất cả điều này, về cơ bản chúng tôi lập chỉ mục trước vị trí của tất cả các sự kiện trong một chuỗi.

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

Hiệu suất được cải thiện nhiều nhất khi dữ liệu không xuất hiện phổ biến mà thay vào đó nằm xen kẽ dọc theo chuỗi, như thể dữ liệu hiếm, Dictionary bỏ qua nhiều khối hơn và do đó tác động đến hiệu suất lớn hơn.

The Dictionary endpoint can be added in [your ‘project.yaml’ file](https://doc.subquery.network/create/manifest.html), or alternatively [specified at run time](https://doc.subquery.network/run/run.html#using-a-dictionary). Additionally, you can also override this endpoint when running your Project in [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

Bạn có thể đọc thêm về Dictionary trong [tài liệu hữu ích của chúng tôi tại đây](https://doc.subquery.network/run/run.html#using-a-dictionary).

Chúng tôi tin rằng SubQuery là tùy chọn lập chỉ mục dữ liệu tốt nhất có sẵn cho bất kỳ dApp Polkadot / Substrate nào và việc triển khai SubQuery Dictionary mới này cho phép chúng tôi cải thiện hơn nữa dịch vụ của mình bằng cách tăng tốc quá trình lập chỉ mục cho các Dự án SubQuery của bạn.

You can try it yourself in [SubQuery Projects](https://project.subquery.network/) or view the dictionaries themselves in [our explorer](https://explorer.subquery.network/). In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)