# SubQuery เร็วขึ้นมากด้วย Dictionary

![](https://miro.medium.com/max/1400/1*iEQbr-KZNIkztylVowAuaQ.png)

วันนี้ เราภูมิใจที่จะประกาศการปรับปรุงใหม่สำหรับ SubQuery คือ คุณสมบัติการทำ index ชื่อ SubQuery Dictionary

The SubQuery Dictionary is all about speeding up your Projects. SubQuery Dictionary คือทั้งหมดเกี่ยวกับการเร่งความเร็วของโครงการของคุณ มันปรับปรุงประสิทธิภาพการ index ของโครงการ SubQuery ของคุณอย่างมาก **ในบางครั้งเร็วขึ้นมากถึง 10 เท่า**

When indexing chain data, SubQuery Projects used to inspect each block. เมื่อทำการ index ข้อมูลของเชน ที่โครงการ SubQuery ใช้ในการตรวจสอบแต่ละบล็อค เชนของ Polkadot นั้นมีขนาดใหญ่ โดยรมีข้อมูลที่ไม่มีโครงสร้างขนาด 130 Gb มากกว่า 6 ล้านบล็อค สิ่งนี้ใช้เวลาในการ index มากกว่า 6 ชั่วโมง ซึ่งเป็นเวลาที่คุณไม่ต้องการรอ โดยเฉพาะเมื่อทำการทดสอบ This takes many hours to index, time that you don’t want to wait for — especially when testing.

ตอนนี้โครงการ SubQuery ต่างๆมีทางเลือกในการข้ามขั้นตอนนี้ไป โดยพื้นฐานแล้วเราทำการ pre-index ตำแหน่งของเหตุการณ์ทั้งหมดไว้ในเชนเดียว

![](https://miro.medium.com/max/1400/1*uIjz8W4TG9Q0au9zoKbHVw.png)

ประสิทธิภาพจะดีขึ้นอย่างมากเมื่อข้อมูลไม่ใช่เหตุการณ์ธรรมดา แต่กลับกระจายกันไปตามเชน ทำให้เหมือนกับว่าข้อมูลนั้นหายาก Dictionary จะข้ามบล็อคมากขึ้น ทำให้ส่งผลต่อประสิทธิภาพมากกว่า

คุณสามารถเพิ่มปลายทางของ Dictionary ใน [ไฟล์ ‘ โครงการ.yaml’ ของคุณ](https://doc.subquery.network/create/manifest.html) หรืออีกทางหนึ่ง [กำหนดไว้เมื่อรันไทม์](https://doc.subquery.network/run/run.html#using-a-dictionary) นอกจากนี้ คุณยังสามารถแทนที่ปลายทางนี้เมื่อรันโครงการของคุณใน [SubQuery Projects](https://project.subquery.network/) Additionally, you can also override this endpoint when running your Project in [SubQuery Projects](https://project.subquery.network/).

![](https://miro.medium.com/max/1400/1*xl4wENAv_oNingDQZyrtyw.png)

คุณสามาถอ่านเกี่ยวกับ dictionary เพิ่มเติมได้ใน[เอกสารที่เป็นประโยชน์ ที่นี่](https://doc.subquery.network/run/run.html#using-a-dictionary)

เราเชื่อว่า SubQuery เป็นตัวเลือกที่ดีที่สุดในการ index ข้อมูลสำหรับ Polkadot/Substrate dApp ต่างๆ และการนำ Dictionary ของ SubQuery มาใช้นี้ จะช่วยให้เราสามารถทำให้การบริการของเราดีขึ้น ด้วยการเร่งความเร็วกระบวนการสร้าง Index สำหรับโครงการ SubQuery ของคุณ

คุณสามารถทดลองด้วยตัวเองใน [โครงการ SubQuery ](https://project.subquery.network/) หรือดู dictionary ต่างๆด้วยตัวเองใน [explorer ของเรา](https://explorer.subquery.network/) ในการใช้งาน Dictionary ในโครงการที่มีอยู่ของคุณ เวอร์ชั่น [@subql/cli](https://www.npmjs.com/package/@subql/cli) ของคุณอย่างน้อยต้องเป็นเวอร์ชั่น 0.10.0 In order to use a Dictionary in your existing project, your [@subql/cli](https://www.npmjs.com/package/@subql/cli) version must be at least 0.10.0

![](https://miro.medium.com/max/1400/1*CrbWsx1rFiBNjkCepxbkPQ.png)