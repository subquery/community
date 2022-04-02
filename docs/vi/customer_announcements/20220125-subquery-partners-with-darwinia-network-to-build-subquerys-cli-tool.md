# SubQuery hợp tác với Darwinia Network để xây dựng Công cụ CLI của SubQuery

![](https://miro.medium.com/max/1400/1*96OGWsQrxNGC5rblYxhdAw.jpeg)

Chúng tôi vui mừng được công bố mối quan hệ hợp tác giữa Darwinia Network và SubQuery Network. Darwinia gần đây đã giành được vị trí đấu giá Kusama parachain và đang chuẩn bị để đảm bảo vị trí Polkadot của họ. Là một phần trong lộ trình của Darwinia nhằm xây dựng một trung tâm cầu nối chuỗi chéo cho Polkadot, Darwinia đã hợp tác với SubQuery để xây dựng rất nhiều ứng dụng cần thiết để cung cấp trải nghiệm người dùng tối ưu cho các tương tác chuỗi chéo

Mối quan hệ đối tác của chúng tôi còn đi sâu hơn là chỉ sử dụng SubQuery để cung cấp năng lượng cho hệ sinh thái ứng dụng của Darwinia, chúng tôi đã hợp tác chặt chẽ với nhóm SubQuery để [xây dựng công cụ CLI](https://github.com/fewensa/subquery-cli) cho dịch vụ được quản lý bởi SubQuery ([https://project.subquery.network](https://project.subquery.network)). Bạn có thể sử dụng [CLI](https://github.com/fewensa/subquery-cli) này để tạo một dự án SubQuery và tự động triển khai phiên bản mới cho vùng dàn dựng hoặc vùng sản xuất. Ngoài ra, bạn có thể truy xuất thông tin bao gồm trạng thái đồng bộ hóa chi tiết và nhật ký từ dự án đang chạy của bạn được lưu trữ miễn phí trong Dự án SubQuery. Darwinia đã đưa điều này đi xa hơn và xây dựng một ví dụ [dòng công việc GitHub Action](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) sử dụng công cụ CLI để thực hiện việc này khi đẩy đến nhánh chính của [kho lưu trữ](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml) của họ. Tự động hóa mới này là một ví dụ tuyệt vời về mối quan hệ chặt chẽ giữa Darwinia và SubQuery và công cụ CLI đã được nhiều dự án khác trong hệ sinh thái lớn của SubQuery sử dụng.
> “Công cụ SubQuery CLI mà chúng tôi đã xây dựng đã thực sự giúp quy trình phát triển của chúng tôi trở nên dễ dàng, giờ đây chúng tôi hoàn toàn có thể quản lý các bản phát hành trong các chi nhánh và tự tin rằng các thay đổi của chúng tôi sẽ được triển khai tự động cho dịch vụ được lưu trữ của SubQuery. Chúng tôi đặc biệt tự hào về quy trình tự động của mình để kiểm tra xem tệp schema.graphql đã thay đổi hay chưa và nếu có, chúng tôi sẽ triển khai lại một cơ sở dữ liệu sạch mới ”- Yalin, Nhà phát triển cốt lõi - Mạng Darwinia


Kiểm tra [công cụ CLI mới tại đây](https://github.com/fewensa/subquery-cli) và xem [ví dụ sống động về nó tại đây](https://github.com/darwinia-network/bridger/blob/master/.github/workflows/subquery-prod.yml).

Ứng dụng đầu tiên trong số nhiều ứng dụng trong hệ sinh thái ứng dụng đang phát triển của Darwinia là [ứng dụng Wormhole](https://wormhole.darwinia.network/). Wormhole là một ứng dụng dễ sử dụng giúp việc chuyển tài sản giữa các mạng trở nên dễ dàng và là một phần quan trọng trong chiến lược chuỗi chéo của Darwinia. Hiện tại cầu nối giữa Darwinia và Ethereum đang hoạt động. [SubQuery được sử dụng để hiển thị các sự kiện và lịch sử giao dịch](https://explorer.subquery.network/subquery/darwinia-network/wormhole-darwinia) đã xảy ra trên địa chỉ Darwinia/Crab/Pangolin của bạn liên quan đến wormhole (ví dụ: sự xuất hiện của nội dung từ mạng khác).

![](https://miro.medium.com/max/1400/1*p3V-lvW6BmEVZXaDYDY7mw.png)

Đội ngũ Darwinia đang trong quá trình xây dựng một [Ứng dụng thông minh mới là một kho trung tâm](https://apps.darwinia.network/) để quản lý tất cả các tương tác mạng Darwinia bao gồm quản trị, đặt cược, khám phá chuỗi và hơn thế nữa. Ứng dụng này sử dụng một lượng đáng kể [dữ liệu SubQuery để hiển thị dữ liệu lịch sử và các hành động liên quan](https://explorer.subquery.network/subquery/darwinia-network/smart-app-crab). SubQuery sẽ hợp tác chặt chẽ với đội ngũ Darwinia để làm cho trải nghiệm người dùng này nhanh nhất và dễ dàng hơn trong toàn bộ hệ sinh thái Polkadot.
> “Chúng tôi rất vui khi sử dụng SubQuery để thay thế các dịch vụ phụ trợ hiện có của chúng tôi cho Wormhole, về lâu dài với Mạng SubQuery, điều này sẽ làm cho các dịch vụ của chúng tôi trở nên hoàn toàn phi tập trung và là nguồn mở - đó là điều mà chúng tôi tự hào!” — Yalin, Nhà phát triển cốt lõi - Mạng Darwinia


Ngoài ra, Darwinia đang sử dụng SubQuery để [cung cấp dữ liệu đằng sau](https://explorer.subquery.network/subquery/darwinia-network/home-plo-polkadot) [trang web Cung cấp khoản vay Parachain](https://darwinia.network/plo_contribute) của họ. Mặc dù Crab đã giành được vị trí của họ trên Kusama, nhưng vẫn chưa quá muộn để đóng góp vào chiến dịch giành vị trí Polkadot của Darwinia. Họ cũng đang tận dụng SubQuery để lập chỉ mục [Merkle Mountain ranges](https://explorer.subquery.network/subquery/darwinia-network/darwinia-mmr) cho tất cả các khối được tạo trong mạng của họ.

Darwinia Network đang sử dụng [Dự án SubQuery](https://project.subquery.network/) để quản lý dự án của riêng họ và cập nhật theo yêu cầu. Dịch vụ lập chỉ mục và truy vấn chúng tôi cung cấp hoàn toàn do SubQuery quản lý và được cung cấp miễn phí cho cộng đồng Polkadot trong [ SubQuery’s Explorer](https://explorer.subquery.network/).

## Giới thiệu về mạng Darwinia

Darwinia Network là một mạng lưới cầu nối xuyên chuỗi phi tập trung được xây dựng trên Substrate, là “Cầu Cổng Vàng” của hệ sinh thái xuyên chuỗi. Nó cung cấp giải pháp cầu nối chung an toàn nhất, kết nối Polkadot, Ethereum, BSC và các chuỗi không đồng nhất khác bằng cách chuyển tài sản xuyên chuỗi và gọi chuỗi từ xa. Ngoài ra, các lĩnh vực ứng dụng chính của nó bao gồm Defi, thị trường giao dịch NFT chuỗi chéo, trò chơi, v.v.

[Website](https://darwinia.network/) | [Twitter](https://twitter.com/DarwiniaNetwork) | [Telegram](https://t.me/DarwiniaNetwork) | [GitHub](https://github.com/darwinia-network) | [Discord](https://discord.gg/KMZVeyM)

## Giới thiệu về mạng SubQuery

[SubQuery](https://subquery.network/) là một tập hợp dữ liệu phi tập trung, lập chỉ mục & lớp truy vấn giữa các blockchain Lớp-1 và các ứng dụng phi tập trung (DApps). Hiện đang tập trung vào các dự án Polkadot và Substrate, dữ liệu dưới dạng dịch vụ này cho phép các nhà phát triển tập trung vào tính năng cốt lõi của họ

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
