# SubQuery cung cấp cho khách hàng dịch vụ hỗ trợ doanh nghiệp

![](https://miro.medium.com/max/1400/1*z_StqAT5KeaxQLBCm-xpRQ.jpeg)

Khi cộng đồng của chúng tôi phát triển lớn hơn, chúng tôi đang thấy hàng trăm lượt triển khai và lưu lượng truy cập nhiều hơn theo cấp số nhân vào dịch vụ được lưu trữ của chúng tôi mỗi ngày. Tuy nhiên, nhóm nghiên cứu tại SubQuery đang vượt qua thách thức này và đang mở rộng quy mô dịch vụ để đáp ứng nhu cầu chưa từng có đối với các công cụ của khách hàng, đồng thời vẫn giữ cho [dịch vụ lưu trữ](https://projects.subquery.network/) miễn phí.

Nhiều khách hàng hiện đang dựa vào SubQuery để cung cấp dữ liệu quan trọng về sứ mệnh cho các ứng dụng sản xuất của họ. Những khách hàng này đại diện cho một số ví lớn nhất ([Nova](https://novawallet.io/) và [Fearless](https://fearlesswallet.io/)), máy quét ([Subscan](https://www.subscan.io/), [SubVis](https://www.subvis.io/) và [DotMarketCap](https://dotmarketcap.com/)), nền tảng NFT ([Kodadot](https://kodadot.xyz/) và [Yuser](https://yuser.co/)), và nhiều hơn nữa. Đây là những ứng dụng khổng lồ mà cộng đồng Polkadot sử dụng hàng ngày và luôn phải trực tuyến.

Hiệu suất và độ tin cậy của dịch vụ được lưu trữ của chúng tôi đã nằm trên đầu danh sách ưu tiên của chúng tôi trong một thời gian ở đây tại SubQuery. Nhóm chị em của chúng tôi là OnFinality, nhà cung cấp cơ sở hạ tầng lớn nhất của Polkadot, vì vậy chúng tôi có nhiều kinh nghiệm trong lĩnh vực này. Do đó, hôm nay chúng ta sẽ xem xét ba cải tiến gần đây sẽ làm cho SubQuery trở thành nền tảng dữ liệu đáng tin cậy, có thể mở rộng và hoạt động hiệu quả nhất trong Polkadot.

![](https://miro.medium.com/max/1200/1*QckhJzjQqw9czpBMRhXgXQ.gif)

# Dedicated Databases

Initially, all SubQuery projects were deployed to shared databases in our infrastructure to save money and allow our service to remain free. However, this would cause high traffic projects with large data sets to strangle other projects hosted in the same database.

If you’re building a project that is designed for production use, we offer a dedicated database hosted in our SubQuery clusters that can give your project all the resources it needs to handle thousands of complicated queries without worrying about performance impact from others.

You should get in touch with us at sales@subquery.network if you’d like to upgrade to this. We replicate your data from your existing tables so you don’t need to spend time reindexing data you already have resulting in a migration with zero downtime.

# Multiple Cluster Support

Resiliency and reliability mean everything to us at SubQuery. Having a redundant cluster in a separate part of the world means that we can quickly recover from cloud provider outages that occasionally take regions offline.

Additionally, when you make a request to a SubQuery project in our hosted service, the majority of the waiting time comes from latency. Latency is the point to point time it takes your request to circle the world to the nearest SubQuery cluster and can take up to a second or two from some remote regions. Having multiple clusters around the world allows us to reduce the most significant part of the request time (the latency).

We’ve implemented multiple clusters in different regions that provide the same service. This work also includes a tool in  [SubQuery Projects](https://project.subquery.network/)  that allows you to deploy and manage your project across these clusters. We’ve also implemented processes that ensure that databases in different regions stay consistent, so that regardless of which cluster your request goes to, the data that you receive is consistent.

# Intelligent Routing

Once we have SubQuery clusters running in different regions, the next logical step is to make this feature invisible to your users. Your users should never have to decide what cluster their requests go to, SubQuery should automatically route their requests to the closest healthy cluster. This is what SubQuery’s intelligent routing provides.

We offer a single global endpoint to each premium customer that has intelligent routing automatically applied to each and every request. This service includes considerable monitoring that constantly ping each cluster for health checks and ensure that a user is never routed to a cluster that is overwhelmed or offline. The global endpoint optimises the routing for each request to the nearest cluster to ensure your users receive the best performance from your clusters.

![](https://miro.medium.com/max/1000/0*DNXDiABzli0et1MU)

In summary, these services allow us to offer our premium service to more customers with confidence. We work with each customer to understand their business and goals, and then to set up a service to meet their needs. SubQuery is the largest data service provider in Polkadot, and these features show how we support thousands of community projects at the same time as the biggest projects in Polkadot.

# Giới thiệu về mạng SubQuery

SubQuery là nhà cung cấp dữ liệu hàng đầu của Polkadot, hỗ trợ lập chỉ mục & lớp truy vấn giữa các blockchains Lớp-1 (Polkadot) và các ứng dụng phi tập trung. Dịch vụ dữ liệu của SubQuery đang được hầu hết các trang web đấu giá parachain và huy động vốn cộng đồng trên Polkadot và Kusama hiện có sử dụng.

Giao thức của SubQuery loại bỏ các đặc điểm riêng của dữ liệu blockchain với SubQuery SDK, cho phép các nhà phát triển tập trung vào việc triển khai sản phẩm cốt lõi của họ mà không cần lãng phí nỗ lực vào các công nghệ phụ trợ tùy chỉnh.

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)|  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [Matrix](https://matrix.to/#/#subquery:matrix.org)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
