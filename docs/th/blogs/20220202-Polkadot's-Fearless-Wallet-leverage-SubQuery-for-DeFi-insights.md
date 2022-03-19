# Fearless Wallet ของ Polkadot ใช้ประโยชน์จากข้อมูลเชิงลึกบน DeFi ของ SubQuery

![](https://miro.medium.com/max/1400/1*HcPJ-5hy6WZrLhkuL6P2BA.png)

ในวันนี้พวกเรารู้สึกตื่นเต้นที่จะได้เจาะลึกตัวอย่างการใช้งานของพันธมิตรเรา ซึ่งเป็นหนึ่งในผู้ให้บริการ Wallet ที่ใหญ่ที่สุดบน Polkadot นั่นก็คือ [Fearless Wallet](https://fearlesswallet.io/)

ซึ่งหากคุณยังไม่รู้ Fearless Wallet เป็นผู้ให้บริการ non-custodial wallets รายหนึ่งบน polkadot ที่ใช้งานได้ง่ายที่สุด และมีเครื่องมือสำหรับใช้ในการ staking อย่างครบครัน พวกเขาได้อยู่ในตลาดมาอย่างยาวนาน มีการพัฒนาระบบอย่างต่อเนื่อง รวมทั้งมีการเพิ่มฟีเจอร์และฟังก์ชั่นการใช้งานใหม่ๆมาโดยตลอด

Fearless Wallet ได้นำเอาบริการของ SubQuery มาใช้เป็นส่วนสำคัญใน stack ต่างๆ โดย Subquery ถูกนำมาใช้เป็นหลักในการเก็บ จัดการ และแสดงผลประวัติการใช้งานของแต่ละบัญชี ไม่ว่าจะเป็นข้อมูล transaction ของแต่ละ address ข้อมูลจากภายนอก รวมถึงการแสดงรายได้จากการ Staking ซึ่งจะมีในอนาคต

แต่ด้วยขนาดการใช้งานของ Fearless wallet เป็นสิ่งที่ทำให้พวกเขาแตกต่าง โดยกระเป๋า Fearless Wallet ได้ถูกใช้บริการบน SubQuery project มากกว่า 21 parachains กระจายไปในทั้ง Polkadot และ Kusama การที่กระเป๋า Fearless Wallet เป็นหนึ่งในกระเป๋าเงินที่ได้รับความนิยมสูงของ Polkadot พวกเขาจึงมุ่งเน้นไปที่ความครอบคลุมของเครือข่ายซึ่งกำล้งขยายตัวอย่างรวดเร็ว ซึ่งการที่ SubQuery ถูกนำไปใช้บนเครือข่ายต่างๆ ทำให้สิ่งนี้เป็นไปได้ง่าย ด้วยการเปลี่ยนโค้ดเพียงไม่กี่บรรทัดเท่านั้น

![](https://miro.medium.com/max/1400/1*5D3J7-_HC2tAP05oOlV5yw.png)

> "Fearless Wallet เป็นกระเป๋าที่รองรับสินทรัพย์หลายตัวที่เติบโตบน Polkadot และ Kusama โดย SubQuery ทำให้เราสามารถนำพาให้ผู้ใช้งานของเราใช้งาน parachain ใหม่ๆได้อย่างง่ายดายและเต็มประสิทธิภาพ และด้วยจำนวน parachain ที่เพิ่มขึ้นอยู่ตลอดเวลา การเชื่อมโยงระหว่างเครื่องมือของ SubQuery และประสบการณ์ใช้งานอันยอดเยี่ยมของ Fearless Wallet จะเพิ่มมูลค่าให้กับทั้งระบบนิเวศไปอย่างต่อเนื่อง” - ทีมงาน Fearless Wallet

นอกจากนี้ Fearless Wallet ยังเร่งพัฒนาเครื่องมือที่ใช้ในการวิเคราะห์ข้อมูล เพื่อที่จะรองรับฟังก์ชั่น collator และ validator staking ในทุกๆ parachain โดย SubQuery จะขาดไปไม่ได้เลยในการสร้างฟังก์ชันนี้ เนื่องจากจะต้องมีการรวบรวม คำนวณ และให้บริการข้อมูลส่งตรงไปยังแอพพลิเคชั่น นอกจากนี้คุณอาจจะได้เห็นฟังก์ชั่นการใช้งานของ RMRK NFT และ Polkaswap DEX รวมเข้ากับแอพพลิเคชั่นในเร็ววันนี้

![](https://miro.medium.com/max/1400/1*3X7m4-m0NJ3xQ44UKZB7tw.png)

Fearless Wallet ได้ใช้ [SubQuery Projects](https://project.subquery.network/) เพื่อจัดการโปรเจกต์ของตนและทำการอัปเดตตามต้องการ พวกเขาใช้ประโยชน์จากบริการ enterprise-level hosting ของ SubQuery เพื่อถ่ายโอนฐานข้อมูล, automated deployment และ geographic routing ไปยังหลายคลัสเตอร์ทั่วโลกเพื่อประสิทธิภาพที่สูงและระยะเวลาการประมวลผลสั้น โดยบริการ indexing และ query ข้อมูลที่เรามีให้นั้นได้รับการจัดการเบ็ดเสร็จโดย SubQuery และได้มอบมันให้กับคอมมูนิตี้ของ Polkadot ผ่านทาง [SubQuery's Explorer](https://explorer.subquery.network/)

> “SubQuery สามารถที่จะจัดการข้อมูลที่อยู่บน blockchain ได้อย่างอยู่หมัด และทำให้มันง่ายต่อการพัฒนาแอพพลิเคชั่นต่างๆที่จะมาเข้าร่วม พวกเราภูมิใจที่ได้ร่วมงานกับ Fearless Wallet เพื่อมอบประสบการณ์ที่ดีให้แก่ผู้ใช้ และได้เติบโตไปพร้อมกับพวกเขาที่กำลังดังระเบิดในระบบนิเวศของ Polkadot” - James Bayly หัวหน้าฝ่ายพัฒนาธุรกิจ — SubQuery

## เกี่ยวกับ SubQuery

[SubQuery](https://subquery.network/) คือการรวมข้อมูลที่กระจายอำนาจ การจัดทำ index & เลเยอร์การ query ระหว่างบล็อคเชนของ Layer-1 และแอปพลิเคชันที่กระจายอำนาจ (DApps) ปัจจุบันมุ่งเน้นไปที่โปรเจ็กต์ Polkadot และ Substrate บริการ data-as-a-a-service ช่วยให้นักพัฒนาสามารถมุ่งเน้นไปที่กรณีการใช้งานหลักและ front-end โดยไม่ต้องเสียเวลาไปกับการสร้าง back-end แบบกำหนดเองสำหรับการประมวลผลข้อมูล

<[เว็บไซต์](https://subquery.network/) | [อีเมล](hello@subquery.network) | [ดิสคอร์ด](https://discord.com/invite/78zg8aBSMG) | [เทเลแกรม](https://t.me/subquerynetwork) | [ทวิตเตอร์](https://twitter.com/subquerynetwork) | [มาทริกซ์](https://matrix.to/#/#subquery:matrix.org) | [ลิงด์อิน](https://www.linkedin.com/company/subquery) | [กิตฮับ](https://www.youtube.com/channel/UCi1a6NUUjegcLHDFLr7CqLw)

## เกี่ยวกับกระเป๋า Fearless Wallet

[Fearless Wallet](https://fearlesswallet.io/) เป็นกระเป๋าเงินมือถือที่ออกแบบมาสำหรับอนาคตที่กระจายอำนาจบนเครือข่าย Kusama และ Polkadot พร้อมรองรับแพลตฟอร์ม iOS และ Android ประสบการณ์ผู้ใช้ที่ยอดเยี่ยม ประสิทธิภาพที่รวดเร็ว และพื้นที่เก็บข้อมูลที่ปลอดภัยสำหรับบัญชีของคุณ กระเป๋า Fearless Wallet จะรวม Polkaswap เพื่อการแลกเปลี่ยนสินทรัพย์ที่กระจายอำนาจได้ง่าย

[เว็บไซต์](https://fearlesswallet.io/) | [Android Apps](https://play.google.com/store/apps/details?id=jp.co.soramitsu.fearless) | [IOS](https://apps.apple.com/us/app/fearless-wallet/id1537251089) | [มีเดียม](https://medium.com/fearlesswallet/) | [เทเลเเกรม](https://t.me/fearlesswallet) | [ทวิตเตอร์](https://twitter.com/FearlessWallet)
