# SubQuery เผยแพร่ Whitepaper ฉบับปรับปรุง

![](https://miro.medium.com/max/700/0*guA8YHyJPhu0wmzf)

_อัปเดตแผนการสำหรับแนวทางที่ SubQuery จะปฏิวัติอนาคตของโครงสร้างพื้นฐาน web3_

หลังจากการออกแบบ, อภิปราย, ทดสอบ และพัฒนา มาเป็นเวลานาน วันนี้เราจึงได้ทำการเผยแพร่ [เอกสาร Whitepaper ฉบับปรับปรุงใหม่ ](https://static.subquery.network/whitepaper.pdf) จากการเผยแพร่ครั้งแรกในเดือนมิถุนายน 2021 SubQuery Whitepaper คือเอกสารสรุปกรอบการทำงานเชิงกลยุทธ์ของเรา สำหรับโปรเจกต์การกระจายอำนาจ SubQuery Network และโทเค็น SQT นับตั้งแต่การเผยแพร่ครั้งแรก ฐานลูกค้าและชุมชนของเราได้เติบโตขึ้นอย่างมีนัยสำคัญ และมีความก้าวหน้าอย่างมากในการสร้าง SubQuery Network สิ่งเหล่านี้ทำให้เราได้รับแรงบันดาลใจในการปรับปรุงและสร้างสรรค์สิ่งใหม่ๆ และได้กลายมาเป็น whitepaper เวอร์ชั่นล่าสุดของเรา <iframe width="1719" height="976" src="https://www.youtube.com/embed/Ghxyw5bIHs8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen mark="crwd-mark"></iframe>

เนื้อหาของ whitepaper ฉบับนี้เป็นเค้าโครงแผนการของ SubQuery ในการที่จะก้าวไปสู่การเป็นเครือข่ายแบบกระจายศูนย์ระดับโลกแก่ผู้เข้าร่วมการจัดระเบียบข้อมูลบนบล็อคเชน เพื่อให้แน่ใจว่าไม่มีจุดใดที่ผิดพลาดสำหรับ SubQuery เป็นที่คาดหวังว่าสิ่งนี้จะเพิ่มเวลา uptime ของ SubQuery ได้อีกมาก จัดเตรียม redundancy ได้ดียิ่งขึ้น และเพิ่มประสิทธิภาพด้วยการลด latency จะเห็นได้ว่าแอปพลิเคชั่นต่างๆ จะสามารถใช้ GraphQL เพื่อสืบค้นคลังเก็บข้อมูลใดๆ (ตามที่กำหนดโดยโปรเจกต์ SubQuery) จาก Indexers ทั่วทั้งเครือข่าย

![](https://miro.medium.com/max/700/0*xtd6e7mn7JkfhpzG)

## สิ่งที่เราโฟกัส

[whitepaper ฉบับปรับปรุงนี้](https://static.subquery.network/whitepaper.pdf) รักษาความเชื่อมั่นของ SubQuery ที่ว่า บริการด้านข้อมูลแห่งอนาคตจะต้องเป็นมัลติเชน, เรียบง่าย และยืดหยุ่น ในเอกสาร whitepaper จะลงรายละเอียดว่า SubQuery Network มีปัจจัยในการพิจารณาออกแบบ tokenomic อย่างไร ในขณะที่ยังคงเปิดให้ผู้ใช้ระดับองค์กรสามารถเรียกใช้บริการได้ด้วย

### การออกแบบให้เป็นมัลติเชน (Multi-chain)

_SubQuery เชื่อในแนวคิดที่ว่า ชุมชนบล็อคเชนควรทำงานร่วมกันเพื่อผลักดันให้เกิดการยอมรับ web3 ซึ่งเป็นอนาคต_

SubQuery มีพื้นฐานอยู่บนระบบนิเวศ Polkadot ที่นี่เป็นบ้านของเราและจะเป็นตำแหน่งที่ตั้งของ SubQuery Network แต่ในอนาคตจะเป็นมัลติเชน SubQuery รู้ดีว่าจะมีบล็อคเชนต่างๆ มากมายที่ทำงานร่วมกันเพื่อแก้ปัญหาที่แตกต่างกันออกไป

SubQuery Network ได้รับการออกแบบมาเพื่อให้รองรับกับโปรเจกต์ SubQuery จากเครือข่ายเลเยอร์ 1 ใดๆ ก็ตาม (ไม่ว่าจะอยู่ภายใน Polkadot หรือไม่ก็ตาม) มันจะถูกออกแบบและสร้างให้เป็นมัลติเชนตั้งแต่ต้น โดยที่คุณจะเห็นโปรเจกต์จากเครือข่ายหนึ่งถูกสร้างควบคู่ไปกับโปรเจกต์จากอีกเครือข่ายหนึ่ง

### เรียบง่ายและเข้าถึงได้

_SubQuery Network ได้รับการออกแบบให้เป็นผู้ให้บริการข้อมูลของประชาชน_

หลักการของ SubQuery Network คือความเรียบง่าย ตามความเห็นของ SubQuery นั้น วิธีการอื่นๆ ในการให้บริการสืบค้นข้อมูลแบบกระจายอำนาจนั้นมีความซับซ้อนจนเกินไป และทำให้ผู้เข้าร่วมคาดการณ์ผลตอบแทนที่จะได้รับจากการลงทุนได้ยาก เป้าหมายของเราจึงเป็นการทำให้คุณสามารถมีส่วนร่วมในเครือข่ายได้ง่าย และคาดการณ์ผลตอบแทนที่จะเกิดขึ้นในอนาคตได้อย่างชัดเจน

SubQuery ไม่ต้องการการ stake เป็นจำนวนที่สูงเพื่อเข้าร่วม หรือลงทุนมหาศาลในฮาร์ดแวร์ เราจะโฟกัสไปที่การทำให้ SubQuery สามารถเข้าร่วมและสร้างได้ง่ายกว่าคู่แข่งของเรา ความสำเร็จของ SubQuery ขึ้นอยู่กับความสำเร็จของผู้ที่สร้างอนาคตเหล่านั้นขึ้นมาด้วย

ซึ่งหมายความว่าเป้าหมายในการออกแบบคือการทำให้ทุกคนเข้ามามีส่วนร่วมได้ง่ายที่สุด คุณไม่จำเป็นต้องเป็นนักพัฒนาซอฟต์แวร์ หรือมีความรู้เชิงลึกเกี่ยวกับโมเดล tokenomic คุณสามารถเข้าร่วมในฐานะ Delegator ได้อย่างง่ายดาย ในฐานะผู้บริโภค คุณยังมีตัวเลือกในการชำระเงินมากมายที่ตรงกับความต้องการของคุณมากที่สุด สุดท้ายนี้ สิ่งหลักที่ผู้ก่อตั้ง SubQuery โฟกัสคือ เพื่อให้แน่ใจว่ามีการสนับสนุนเพียงพอที่จะช่วยให้ทุกคน ตั้งแต่ทีมผู้เชี่ยวชาญด้านบล็อคเชน ไปจนถึงนักพัฒนาซอฟต์แวร์มือใหม่ที่เข้ามาทำเป็นงานอดิเรก ก็สามารถสร้างโปรเจกต์ SubQuery ของตนเองได้

### ยืดหยุ่นได้

_SubQuery เป็นเพียงเครื่องมือหนึ่งที่อยู่ในมือของชุมชนของเรา โอกาสอันไม่มีที่สิ้นสุดนั้นมีอยู่ หากแต่ถูกจำกัดไว้สำหรับผู้คนที่มีความคิดสร้างสรรค์เท่านั้น_

ข้อได้เปรียบที่แท้จริงของ SubQuery อาจอยู่ที่ความยืดหยุ่น — ผู้ใช้จะมีอิสระในการปรับใช้และแปลงข้อมูลแบบกระจายศูนย์เพื่อให้เหมาะสมกับความต้องการของพวกเขา การขับเคลื่อนเรื่องความยืดหยุ่นนี้ยังครอบคลุมถึงการให้ delegator สามารถสนับสนุน indexer ที่แตกต่างกันได้อย่างรวดเร็วและง่ายดาย โดยไม่ต้องรอการขยายระยะเวลายกเลิกการผูกมัด สุดท้ายนี้ แนวทางดังกล่าวจะชัดเจนสมบูรณ์แบบได้โดยการแนะนำวิธีการชำระเงินสามวิธีที่เราจะกล่าวถึงถัดจากนี้

## นวัตกรรมวิธีการชำระเงินของ SubQuery

การเปลี่ยนแปลงครั้งใหญ่ที่สุดของ whitepaper ฉบับนี้คือ นวัตกรรมด้านวิธีการชำระเงินของเรา ทุกวันนี้ วิธีหลักในการชำระเงินของเรามักจะเป็นการสมัครสมาชิก(subscription) สำหรับเพลงที่เราฟัง รายการทีวีที่เราดู และแอปพลิเคชันที่เราใช้ ในการให้บริการแอปพลิเคชัน web3 รุ่นบุกเบิกนั้น เราได้นำรูปแบบการจ่ายตามการใช้งาน มาใช้แทน โดยที่ธุรกรรมแต่ละรายการในเครือข่ายจะมีราคาที่แน่ชัด

เราเห็นว่ารูปแบบของการสมัครสมาชิก(subscription) ที่จะทำการเรียกเก็บเงินจากผู้ใช้งานเป็นประจำจะยังคงอยู่ ผู้ให้บริการชอบวิธีการชำระเงินแบบนี้ เพราะทำให้สามารถคาดการณ์รายรับได้ เช่นเดียวกัน ทางฝั่งผู้ใช้บริการก็ชอบวิธีนี้เพราะพวกเขาสามารถรับรู้และคำนวณต้นทุนได้ง่าย นอกจากนี้ยังมีปัจจัยทางจิตวิทยาที่บ่งชี้ว่าเมื่อคุณสมัครรับบริการใดๆแล้ว ผู้บริโภคส่วนใหญ่จะต้องการใช้บริการให้มากที่สุดเท่าที่จะทำได้ ซึ่งเป็นการเพิ่มอุปสงค์ต่อการบริการนั้นๆ และยังช่วยในเรื่องการประหยัดต่อขนาด(economies of scale ) อีกด้วย

เป็นผลให้ SubQuery วางแผนที่จะแนะนำรูปแบบการชำระเงินภายในเครือข่าย SubQuery สามรูปแบบ เพื่อให้ผู้เข้าร่วมทั้งหมดมีวิธีที่หลากหลายในการทำธุรกรรมด้วย SubQuery Token (SQT) ทั้ง Indexer และผู้ใช้บริการจะรวมตัวกันใน Plan Marketplace เพื่อประกาศราคาและวิธีการชำระเงินที่รองรับ

![](https://miro.medium.com/max/700/0*f0yVHlbWTE8DdjuB)

### จ่ายตามการใช้งาน (PAYG)

วิธีแรก คือแนวทางปกติในหมู่อุตสาหกรรม web3 จ่ายเท่าที่คุณใช้ This is the baseline payment method and a fallback for others. Indexer แต่ละคนจะแจ้งราคา PAYG เมื่อพวกเขายื่นข้อเสนอรับงานที่มีโปรเจกต์ที่ต้องการว่าจ้างสร้างคำขอเอาไว้

### Closed Plans and Agreements

Closed Agreements represent an agreement between only one Indexer and one Consumer. It’s a direct relationship where all payment flows between the two parties for the work that is done. Closed Agreements are designed to give Indexers confidence that there is a market for data from a particular SubQuery Project, and essentially signal to them which Projects should be indexed. Closed Plans can also be placed on existing SubQuery Projects to attract additional Indexers to that SubQuery Project. This may be useful in situations where the existing monopolistic Indexer may be charging an unreasonable amount for the data or there is a lack of competition to drive prices to equilibrium.

### Open Plans and Agreements

Open Agreements are similar to Closed Agreements, but allow multiple Indexers to join and compete to provide data to the Consumer. An Open Agreement may start as an Agreement between one Consumer and one Indexer, but more parties may join the existing Agreement resulting in ’n’ Indexers and ’n’ Consumers.

Open Agreements provide favourable terms for both Indexers and Consumers, but enable better performance and reliability for Consumers by attracting more Indexers to compete and serve the same data. If Consumers are running large scale applications with users around the world, then Open Agreements are ideal.

![](https://miro.medium.com/max/1400/0*sc9-ee7VTl0XEhTS)

he combination of the above three payment options for indexers provide several advanced subscription based options for Consumers and Indexers. Some parties may benefit from the certainty of rewards provided by Closed Agreements and the predictability of recurring costs. Equally, others may instead prefer to hunt out the most affordable data by going for high volume recurring agreements or low spot prices on the Pay-as-you-Go market.

These changes, and many others outlined in the whitepaper illustrate our focus on building the largest web3 infrastructure service possible. We are confident that our token economic design is carefully considered and designed for inclusive growth for all participants. While starting with a huge centralised service and slowly moving towards a decentralised one isn’t easy, the team at SubQuery is up for the challenge and we hope you’ll join us!

For further information, please [contact our team in Discord](https://discord.com/invite/78zg8aBSMG) or chat with us in our next “Office Hours”. You can also [register your expression of interest](https://forms.gle/RyXyhb8T9Gxkwi7R9) to become an indexer in the imminent SubQuery test network.

[Read the updated whitepaper](https://static.subquery.network/whitepaper.pdf)

## เกี่ยวกับ SubQuery Network

เป้าหมายของ SubQuery คือการช่วยให้ผู้อื่นสามารถสร้างผลิตภัณฑ์ที่จะช่วยให้พวกเราก้าวไปสู่อนาคตของระบบการกระจายอำนาจได้เร็วยิ่งขึ้น SubQuery เป็นชุดเครื่องมือสำหรับนักพัฒนาบล็อคเชนและเป็นแกนหลักของโครงสร้างพื้นฐานของ web3 SubQuery project เป็น API ที่ครบถ้วนสมบูรณ์ในการจัดระเบียบและสืบค้นข้อมูลจากเชน การทำงานระหว่างบล็อคเชนเลเยอร์ 1 และแอปพลิเคชั่นแบบกระจายอำนาจ(dApp) SubQuery เป็นผู้จัดระเบียบดัชนีแบบโอเพนซอร์ซและให้บริการข้อมูลที่มีโครงสร้างที่ดีด้วยเทคโนโลยี GraphQL SubQuery คือพลังขับเคลื่อน dApp และเครื่องมือต่างๆ แห่งยุคถัดไปด้วยข้อมูล web3

Currently, anyone can already use SubQuery to extract and query blockchain data in only minutes and at no cost but in a centralised way. The SubQuery Network proposes to enable this same scalable and performant solution, but in a completely decentralised way.

[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/78zg8aBSMG) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)
