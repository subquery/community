# เจาะลึก Polkadot Crowdloans (ตอนที่ 2)

![](https://miro.medium.com/max/1400/0*MqQhXJbmnfMSqf-8)

Polkadot ได้เปิดโอกาสให้กับคอมมูนิตี้ของตนได้เข้าร่วมการประมูล Parachain Slot รอบที่สาม โดยที่เราต่างก็ได้เป็นพยานในการแข่งขันระหว่าง Parallel Finance และ Astar เพื่อที่จะชิงสล็อตที่ 3 ในท้ายที่สุด Astar ก็เป็นผู้ที่ได้รับชัยชนะ ซึ่งวันนี้เราจะมาเรียนรู้เพิ่มเติมเล็กน้อยเกี่ยวกับสิ่งที่เกิดขึ้นภายในการประมูลครั้งที่ 3 โดยจะเจาะข้อมูลในเชิงลึกของทุกๆผลงาน

Subquery คือ ผู้ให้บริการชั้นนำในด้าน Indexing บน chain ของ Polkadot และในช่วงสัปดาห์ที่ผ่านมา เราได้เพิ่มคำขอมหาศาลนับล้านครั้งต่อวันไปยังแดชบอร์ดของ crowloan ซึ่งรวมถึงแอพลิเคชั่นที่สนับสนุนและเว็บไซต์ในการวิเคราะห์ข้อมูล โดยมีทีมต่างๆ เช่น [SubVis](https://www.subvis.io/), [Parallel Finance](https://parallel.fi/), [DotMarketCap](https://dotmarketcap.com/) ก็ได้ใช้งาน SubQuery ในการให้บริการข้อมูลแบบเรียลไทม์บน crowdloans และข้อมูลทางตรงไปยังเว็บไซต์และแอพลิเคชั่นบนเชนอื่นๆอีกด้วย

อันดับแรกเรามาเริ่มกันที่ข้อมูลในระดับที่สูงกันเลย จากในตารางด้านล่างคุณจะเห็นได้ว่า Astar ได้รับทั้งการสนับสนุนและมีจำนวนผู้สนับสนุนมากกว่าทั้ง Parallel Finance และ Combined โดยสิ่งสำคัญที่ควรต้องทราบก็คือ Parallel นั้นระดมทุนเป็นจำนวนมากผ่านกองทุน Proxy ดังนั้นยอดตัวเลขของผู้สนับสนุนจึงอาจไม่ถูกต้อง เพราะว่าบัญชีผู้ใช้ Proxy จะถูกซ่อนข้อมูล

ทั้ง 2 โปรเจ็คได้รับการสนับสนุนโดยเฉลี่ยอยู่ที่ 10 DOT (367.70 ดอลล่าห์สหรัฐ) แต่ Astra สามารถที่จะดึงดูดการสนับสนุนส่วนใหญ่เพียงครั้งเดียวสูงถึง 2,005,295 DOT (73.7 ล้านดอลล่าห์สหรัฐ) เลยทีเดียว ในท้ายที่สุดทั้ง 2 โปรเจ็คก็ได้รับเงินสนับสนุนถึง 20 ล้าน DOT (735.4 ล้านดอลล่าห์สหรัฐ) ของการประมูลครั้งที่ 3 นี้ ก็ไม่น่าแปลกใจเท่าไหร่ที่จะมีจำนวนตัวเลขในการประมูลจะต่ำกว่าในการประมูลครั้งแรก อย่างไรก็ตามมันก็ยังเป็นยอดการประมูลที่อยู่ในระดับที่สูงอยู่ดี

![](https://miro.medium.com/max/1920/1*cHMt10lANsqtkLYHCv6iWg.png) ตามที่ได้เห็นจากกราฟด้านล่างนี้ จำนวนของยอดการสนับสนุนมีอัตราก็เพิ่มขึ้นค่อนข้างคงที่ โดยมีอัตราการสนับสนุนที่เพิ่มขึ้นพร้อมๆกัน ในวันที่ 17 พฤศจิกายน เป็นจำนวนมากกว่า 2000 ครั้งในเวลาแค่ 4 ชั่วโมง เช่นเดียวกันกับ [การต่อสู้กัน Moonbeam และ Acala](./20211124-polkadot-crowdloans.md) ถึงแม้ว่าการประมูลจะมีรูปแบบการเข้าร่วมที่แตกต่างกันอย่างมาก แต่ก็ยังมีจำนวนของผู้สนับสนุนที่ใกล้เคียง Parallel Finance ได้รับการสนับสนุนใน crowdloan ต่ำกว่า 20,000 ครั้ง เมื่อเทียบกันกับ Astar

![](https://miro.medium.com/max/1920/0*QLdNkyaQBBj3L9Eu)

แต่จริงๆแล้วตัวเลขของจำนวนผู้สนับสนุนมันไม่ใช่สิ่งสำคัญหรอก สิ่งที่สำคัญจริงๆก็คือมูลค่าของการสนับสนุนเหล่านั้นต่างหาก อย่างที่คุณเห็นในกราฟด้านล่างนั้น จะเห็นว่าการประมูลใกล้เคียงกันมาก จะมีการผลัดการแซงไปมาตลอดการประมูล

![](https://miro.medium.com/max/1920/0*AGGfB2oBSwoplGhv)

จากที่คุณเห็นในกราฟดังต่อไปนี้ มี 2 เหตุการณ์ที่ต้องจับตามอง เหตุการณ์แรกคือการพุ่งสูงขึ้นของปริมาณการสนับสนุนของ Astar ในวันที่ 12 พฤศจิกายน จากเหนุการณ์ที่เกิดขึ้นทำให้ Astar กลายเป็นผู้นำจนถึงวันที่ 24 พฤศจิกายน ที่ Parallel Finance ได้รับเงินสนับสนุนเพิ่มถึง 2.5 ล้าน DOT (91 ล้านดอลล่าห์สหรัฐ)

![](https://miro.medium.com/max/1920/0*UK4Drn6LXcjebF_V)

For the first event occurred on the 12th of November at 2:26am UTC when an account linked to Binance deposited in quick succession, 2,005,295 DOT (US$73.5 million) to Astar and 1,026,763 DOT (US$37.9 million) to Parallel Finance. This is likely Binance providing the contributions that it collects from it’s own community to each crowdloan.

The second even was a bit weirder, and was rather 25 separate events.In a 11 minutes, Parallel’s Crowdloan proxy vehicle made 25 identical contributions of 98,982 DOT (US$3,639,568.14) each to Parallel totalling 2,474,550 DOT (US$90,989,203.50). It’s not clear why these deposits were made via smaller DOT amounts, potentially Parallel’s Crowdloan proxy vehicle was set up to contribute a maximum amount of this value each time.

![](https://miro.medium.com/max/1920/0*ZErTVoVAvSJvaIsL)

Astar and Parallel Finance led a very competitive auction, where Astar was selected as the winner at block [7927110](https://polkadot.subscan.io/block/7927110), with a lead of only 120,000 DOT. If there was another random block selected any earlier or later, the result may have been quite different.

So who is contributing? Firstly there are two massive whales that are responsible for a combined 41% of all contributions and 69.34% of all value (13,756,262 DOT). These two accounts represent Parallel Finance’s Crowdloan proxy vehicle and Binance. Kraken and Bifrost’s SALP program were also represented in the top 6 contributors. Parallel’s Crowdloan proxy vehicle was particularly prevalent in our results with over 9.3 million DOT contributed (US$344.6 million) representing over 47% of all contributions.

Unfortunately this high percentage means that comparing the average contribution size is difficult, since this proxy obscures the contribution data way too much. In the future, we might even dive deep into Parallel’s data and use this to determine exactly how many of these contributions come from whales versus individual small cap investors.

Having two auctions that have been extremely competitive suggests a healthy ecosystem, and it is encouraging to see the amount of commitment that the community has shown. Here at SubQuery we are very excited to continue working alongside the best Polkadot projects, and can’t wait to see what the future has in store for us.

---

## About SubQuery Network

SubQuery is Polkadot’s leading data provider, supporting an indexing & querying layer between Layer-1 blockchains (Polkadot) and decentralized applications. SubQuery’s data service is being used by most of the Polkadot and Kusama crowdloan and parachain auction websites live today.

SubQuery’s protocol abstracts away blockchain data idiosyncrasies with the SubQuery SDK, allowing developers to focus on deploying their core product without needlessly wasting efforts on custom backend technologies.

​​​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## Appendix

All USD prices are quoted at the price at the 3rd Auctions’s close = USD$36.77

All data is from the start of the Polkadot Crowdloans to the completion of the third auction on 3rd December 1.43AM UTC (block 7,957,704).

Excluded Crowdloan Sites

- [Acala LCDOT](https://medium.com/acalanetwork/acala-liquid-crowdloan-dot-lcdot-launch-on-polkadot-f28d8f561157)
- [Binance Crowdloan](https://www.binance.com/en/dotslot)
- [Parallel Finance](https://crowdloan.parallel.fi/#/auction/polkadot)
- [Kraken Crowdloan](https://www.kraken.com/learn/parachain-auctions)
- [https://pos.dog/](https://pos.dog/)
- [Bifrost SALP](https://medium.com/bifrost-finance/bifrost-announces-slot-auction-liquidity-protocol-salp-weekly-report-51-57a7f69aad34)
