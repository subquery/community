# Tóm tắt Tháng 11-2021

![](https://miro.medium.com/max/1400/1*qzKzZnWY2ao3tiffwwugXQ.png) **_Tháng này, tất cả sẽ dành để nói về những gì đã được thực hiện_**

Xin được gửi đến các bạn bản cập nhật hàng tháng mới nhất từ SubQuery. Đây là bản cập nhật đặc biệt khái quát tất cả những điều thú vị đang diễn ra xung quanh cộng đồng của chúng tôi.

# Mạng lưới SubQuery

## SubQuery khởi chạy trên Acala

![](https://miro.medium.com/max/600/0*SJ1TWt1sGwUWqvuI.gif) Trong cuộc gọi cộng đồng, chúng tôi đã thông báo rằng SubQuery và token SQT sẽ hướng tới mục tiêu là ứng dụng ngoại bộ và token đầu tiên khởi chạy trên Acala.

Chúng tôi đã cân nhắc nhiều lựa chọn trước khi quyết định tăng cường quan hệ đối tác hiện tại với Acala bằng cách khởi chạy trên giao thức DeFi hàng đầu được xây dựng trên Polkadot này. Ba lý do chính dẫn đến quyết định khởi chạy trên Acala này là sự tiếp cận cộng đồng, phạm vi ảnh hưởng/kỹ thuật xuất sắc và hơn cả là mối quan hệ bền chặt hiện có của chúng tôi.

James đã cùng với Bette Chen của Acala có một cuộc phỏng vấn sâu rộng về sự quyết định cho mối quan hệ đối tác này bao gồm cả những chi tiết về lý do tại sao Acala và SubQuery được mệnh danh là một cặp đôi trời sinh.

[Đọc thêm về thông báo này tại đây](https://blog.subquery.network/blogs/20211125-subquery-network-acala.html)

## Những phát triển quan trọng trên mạng SubQuery

Mặc dù đang rất bận rộn với việc xây dựng Mạng SubQuery, chúng tôi vẫn đang gấp rút xúc tiến việc ra mắt mạng thử nghiệm vào quý đầu tiên của năm 2022. Chúng tôi đã đạt được tiến bộ vượt bậc về các hợp đồng thông minh và cả những cải tiến trong mô hình kinh tế với token của mình. Bạn sẽ sớm được thấy chúng tôi chia sẻ nhiều hơn về điều này.

# Phát triển sản phẩm cốt lõi

## Mở rộng quy mô dịch vụ được lưu trữ của chúng tôi

Dự án SubQuery đã có một sự tăng trưởng bùng nổ trong tháng qua khi [hàng nghìn học viên](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html) đã tạo ra rất nhiều dự án hơn trong dịch vụ được lưu trữ của chúng tôi ([project.subquery.network](https://project.subquery.network/)) chỉ trong vòng một vài tuần ngắn ngủi.

Chúng tôi đã cán một cột mốc quan trọng với hơn 2.000 dự án được triển khai cho dịch vụ được lưu trữ và nhờ đó chúng tôi có thể ưu tiên mở rộng quy mô dịch vụ được lưu trữ của mình. Giờ đây, chúng tôi có thể cung cấp cho khách hàng doanh nghiệp các nguồn lực đặc biệt để cải thiện hiệu suất và độ tin cậy.

Nếu bạn muốn nâng cấp dự án SubQuery của mình để nhận được nguồn cung ứng chuyên dụng này, hãy liên hệ với chúng tôi qua [sales@subquery.network](mailto:sales@subquery.network).

## Supporting External Chain Type Files in our Project Manifest

In November we launched  [**version 0.2.0**](https://doc.subquery.network/create/manifest/)  of our project manifest file (`project.yaml`). This new version provides developers with various improvements that have been requested by customers.

Most importantly, you can now reference a chain type definition file that has all the custom types included when you’re indexing a custom substrate chain. This quickly allows you to connect a new SubQuery project to any substrate-based chain, including all of Kusama’s parachains.

[You can read more about this new feature here](https://blog.subquery.network/blogs/20211105-november-technical-update.html#support-for-external-chain-type-files-in-project-manifest).

## Moonriver EVM Support

![](https://miro.medium.com/max/600/0*B27QVtvcR6nXA9ff.gif)

As previously announced we have implemented support for the Moonbeam and Moonriver networks in SubQuery. In November we followed up with all the developer resources that you need to get started.  [You can read the instructions here](https://blog.subquery.network/blogs/20211105-november-technical-update.html#moonbeam-evm-support).

Additionally, Scott was able to present this entire workflow to the  [Moonbuilders workshop](https://www.crowdcast.io/e/moonbuilders-ws/10)  for everyone to watch. Perfect timing for the lead up to the Gitcoin Grants that we are sponsoring (more on that below).

# Community

## Gitcoin Hackathon

Hot on the heels of the overwhelming success of the SubQuery Academy’s  _Hero Course_, we were proud to announce that we would be providing our first hackathon opportunity for all developers via  [Gitcoin Grants Round 12](https://gitcoin.co/hackathon/gr12/?org=subquery)  starting on December 1st.

SubQuery has proposed 5 bounties with a total prize pool of up to $34,000:

-   [Create a unified block explorer that combines Substrate and EVM insights from Moonbeam and Astar into one easy to use application](https://gitcoin.co/issue/subquery/grants/1)  — US$12,000 [Sponsored by Moonbeam and Astar]
-   [Work with SubQuery and the DeFi hub at Karura/Acala to build a dashboard that’s inspired by Zapper.fi or defisaver.com](https://gitcoin.co/issue/subquery/grants/2)  — US$8,000 [Sponsored by Acala]
-   [Create a staking dashboard that shows the best staking opportunities across Polkadot and its various parachains](https://gitcoin.co/issue/subquery/grants/3)  — US$3,000
-   [Build a marketplace explorer for all RMRK protocol based NFTs](https://gitcoin.co/issue/subquery/grants/4)  — US$2,000
-   [Extend the @subql/node service to index data from another layer 1 chain](https://gitcoin.co/issue/subquery/grants/5)  — US$12,000

[You can read more about these bounties here.](https://blog.subquery.network/blogs/20211120-gitcoin12-hackathon.html)

## Analysis into the Polkadot Crowdloans

SubQuery is Polkadot’s leading data indexing service, and over the past week, we’ve been powering millions of daily requests to the majority of the crowdloan dashboards, contribution apps, and analytics websites. Teams like  [**SubVis**](https://www.subvis.io/),  [**Parallel Finance**](https://parallel.fi/), and  [**DotMarketCap**](https://dotmarketcap.com/)  rely on SubQuery to provide real-time data on the crowdloans and other on-chain data directly to their websites and apps.

![](https://miro.medium.com/max/60/0*HfsoOwpat76ip6Jg?q=20)

![](https://miro.medium.com/max/700/0*HfsoOwpat76ip6Jg)

We recently took a deep dive into the Polkadot crowdloans (specifically the title fight between Acala and Moonbeam).  [You should read it here if you haven’t already](https://blog.subquery.network/blogs/20211124-polkadot-crowdloans.html).

# Other things you might have missed

-   We’re working closely with the new team at  [Web3Go](https://www.web3go.xyz/)  to  [provide data anaysis tools to the SubQuery ecosystem.](https://blog.subquery.network/customer_announcements/20211110-web3go.html)
-   [Listen to Sam and James on Brave New Coin’s podcast](https://bravenewcoin.com/insights/podcasts/subquery-connecting-the-dots-on-polkadot).
-   James talked to Acala’s Brett Kolodny to talk about how  [Acala use SubQuery in their stack](https://www.youtube.com/watch?v=Wbxwj8K67Lw).
-   Siqi, our China representative,  [talked to Acala Network and Polkaworld about the latest in web3](https://www.huoxing24.com/live/24313016).
-   We released modules  [1](https://doc.subquery.network/academy/herocourse/module1/)  to  [4](https://doc.subquery.network/academy/herocourse/module4/)  of our  [SubQuery Hero Course](https://blog.subquery.network/blogs/20211018-subquery-launches-the-subquery-academy.html)
-   James also talked to Jacky to explore Litentry’s plans  [for a future DID protocol](https://www.youtube.com/watch?v=Rqlpo9QIVyk).

As always, please  [join our social channels](https://linktr.ee/subquerynetwork)  (especially our  [Discord](https://discord.com/invite/subquery)) to stay updated on our latest news and announcements.

James, Sam, and the SubQuery Team

[Linktree](https://linktr.ee/subquerynetwork)  |  [Website](https://subquery.network/)  |  [Discord](https://discord.com/invite/78zg8aBSMG)  |  [Telegram](https://t.me/subquerynetwork)  |  [Twitter](https://twitter.com/subquerynetwork)  |  [LinkedIn](https://www.linkedin.com/company/subquery)  |  [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
