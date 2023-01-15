# Customer Interview with Adam Dossa from Polymesh

![](https://miro.medium.com/max/1400/0*nEVomCcfEtKSLZ9k)

Find out from Adam Dossa, Head of Blockchain at [Polymesh](https://polymesh.network/), why the team went with SubQuery as their indexing solution.

Adam also explains what Polymesh is all about, what's the difference between Polymesh and Polymath --- and finally we also talked about crypto institutional regulation!

For all of you lovers of reading, we have the interview transcript here below. And if you're more into videos, you can watch the interview [here](https://www.youtube.com/watch?v=iZfjx9LqzwM)!

[00:00:00] Marta: Welcome, everyone. In another episode of the Subquery Customer Interview series where we discuss our customer's projects, their goals, their use cases, and some technical challenges they faced, and we also learn how SubQuery helped them overcome those challenges. I'm Marta Adamczyk, I work as a technology evangelist at SubQuery, and I'm the host of today's episode, and I have the most amazing guest with me, Adam Dossa. How are you?

[00:00:26] Adam: Very good. Thanks. Nice to meet you, Marta.

[00:00:28] Marta: Great to have you here. We finally made it, it was quite hard to get on the call at the same time because we have different time zones to accommodate and busy schedules, but here we are and I'm absolutely excited to get to know more about you, your roles, your background, and also projects that you're involved in.

[00:00:48] So Adam is a former CTO of Polymath and the head of blockchain at Polymesh. Polymesh is a blockchain designed for regulated assets to solve issues with security token adoptions, governance, confidentiality, settlement and more. And we are curious to get to know more about those projects, your roles in those projects, and also how they are related, Polymesh and Polymath. Could you tell us a bit now?

[00:01:18] Adam: Yeah, thanks very much for having me on. So Polymath is a Canadian company that was set up in late 2017, and I joined in early 2018. And the mission of Polymath has always been around bringing regulated securities, so things like equity and debt and real estate funds and so on onto public blockchains.

[00:01:37] So when we first started back in early 2018, the focus initially, probably for the first 12 months or so was on Ethereum. So we built effectively a whole bunch of smart contracts that were deployed as smart contracts into the Ethereum network. And kinda collectively those smart contracts allowed users to create these tokens, which had sort of compliance and some of these sort of regulatory features embedded in them.

[00:02:00] Marta: Right.

[00:02:01] Adam: And we pursued that path for around 12 months. We authored a standard called ERC 1400, which is a sort of extension of ERC 20 which is a token standard aimed at these regulated or kinda compliant tokens. And that saw fairly wide adoption. That was actually a community effort rather than just Polymath. But we helped drive that effort. And then around a year into that based on obviously our own experience, lots of conversations with financial ecosystem entities... We kinda came to this realization that whilst Ethereum is a great blockchain and... a very exciting week for Ethereum this week with the merch coming up... But it is a general-purpose blockchain, right? So it's not optimized for gaming and DeFi or for finance or anything else, right?

Meant to be a sort of general purpose blockchain that tries to kinda keep everybody happy all of the time. And as a result, some of the design choices were pretty non-optimal for our very specific use case, which is...

[00:02:53] Marta: mm-hmm.

[00:02:53] Adam: regulated securities in capital markets. So we decided to build out a blockchain that was optimized just for our specific use case. And we did that. So we looked at a whole bunch of different choices and technologies that were available at that time. And we landed on using the substrate framework, which is a framework authored by Parity, owned by Parity, an open-source framework that allows you to build blockchains in a fairly modular way. Add your own business logic on top of the blockchain and also make changes to the core functionality things as needed.

So we landed on that framework and we've been building that out for the last two and a half years. We had two public test nets and then incentivized test nets. And then our main net launched back in October. So we're actually, probably I think a couple of weeks off our one-year anniversary for Polymesh.

[00:03:40] Marta: Congrats.

[00:03:41] Adam: Thank you. So we'll have to have a cake or something on that date.

[00:03:45] Marta: You should.

[00:03:47] Adam: So the other question you asked was about the relationship between the Polymath company and the Polymesh? So in February this year, in order to put the Polymesh blockchain on a firmer regulatory footing... We created a new entity, which is the Polymesh Association, which is based outta Zoug, which is a Canton in Switzerland.

It's a not-for-profit, so it has a mandate to effectively increase the adoption of security tokens and digital assets. Obviously sort of shepherd and steward the Polymesh blockchain and encourage the adoption, work with companies and institutions to help integrate them into the blockchain and encourage adoption of the blockchain. And I think that Switzerland obviously has in terms of regulators one of the clearer sets of rules around blockchains and tokens associated with them.

So we were able to work with Finma, which is a Swiss regulator, to make sure that the POLYX token, which is the native token of Polymesh, is classed as a utility token rather than anything else. So it helped the chain on the sort of clearer regulatory bating. And particularly in our space where we work with large institutions with multiple regulators and large compliance teams.

Having that clarity is really critical so that's why the association was set up. And also when it was set up, a whole bunch of sort of assets and personnel were moved over to that new entity.

[00:05:01] Marta: Yeah, that sounds amazing. And like a long journey. Probably a lot of people involved, and a lot of hiccups, right?

[00:05:07] Adam: Yeah. Yeah. Lots and lots of learnings along the way. Definitely.

[00:05:12] Marta: Great. And looking back on all of this, what do you think is the biggest problem you're solving for your users with Polymesh?

[00:05:21] Adam: So I think it's a really good question. When we designed Polymesh and to be clear, it's like an evolving blockchain. We actually have a big upgrade coming hopefully towards the end of this month or early next month, which has a whole bunch of new features. So it's definitely like an evolving product. But in terms of some of the USPs for Polymesh, we've taken the middle path, right?

So on the one side, when you talk to a lot of traditional institutions, larger banks, larger exchanges, and so on and so forth they have understandable sort of reticence or you could say concerns around using public blockchains, things like privacy... and there are a whole bunch of other concerns around using some of the larger public blockchains.

So with Polymesh, we took a middle path where Polymesh is a public blockchain, so anyone can run a node. Anyone can inspect the transactions, and make sure that, you know...

[00:06:07] Marta: mm-hmm.

[00:06:07] Adam: ...transactions are following the established rules of the blockchain. But there are certain roles within the blockchain, which are permissioned. So for example, in order to be a validator on the network that we call operators, you have to be a financially regulated entity. So something like a bank or an exchange, or a transfer agent or a custodian.

So rather than having anyone run a validated node and anyone who can obviously means, for example, someone in a sanctioned jurisdiction. Obviously, it offers concerns for large institutions. Instead of that being the case, that's one of the permission roles.

Another permission aspect, Polymesh is that every user on the chain, and this is unusual and definitely there are trade-offs with this approach, but every user on the chain has to go through a very light identity verification process that we call customer due diligence. And until you've gone through that process, you can't hold POLYX, which is the native token on the blockchain. And you can't submit transactions to the chain.

So all of this, I think two aspects. One of the nice things about substrate is it does let you make these types of changes at the core level of the blockchain, which is great. And the reason we've obviously put those in place was based on, we spent a lot of time talking to regulators and large banks, large exchanges, custodians and so on, who are really excited and keen to get into the digital asset space.

But on the one hand, they wanna be at the sort of forefront of innovation. And on the other hand, they have large compliance teams who...

[00:07:31] Marta: Exactly.

[00:07:32] Adam: ...pull them in the other direction. And these companies have a lot at risk where they have brand risk, and regulators obviously are very happy to hand out fines if they find one of the concerns. I don't wanna overplay this. But one of the concerns that were taught was mentioned several times, is that on a public blockchain, if you're running a validated node in a public blockchain and you receive a transaction fee... You don't really know if that transaction fee has come from somebody in a sanctioned country.

And there can be strong rules around for our banks to not allow to do business or receive funds or fees from certain countries, whatever those sort of sanctioned countries are, or sanctioned individuals actually.

[00:08:06] Marta: Right.

[00:08:07] Adam: And there's obviously in the last six months or so, there's been a lot after sanctions around the war in Ukraine. And so there's been a lot more focus on those types of things. And it's been interesting to watch the rest of the space. There was the tornado cash OFAC sanction that happened a few weeks ago.

[00:08:27] Marta: Mm-hmm.

[00:08:28] Adam: We have to pay a lot of attention to those types of things and really design a solution where we feel that we can get the benefits of a public blockchain with the transparency and accessibility...

[00:08:37] Marta: Right

[00:08:38] Adam: ...alongside giving these companies the assurances they need to operate on them.

[00:08:43] Marta: Right. Yeah. I wanted to ask you about potential ways, and how you overcome any resistance when you enter a traditional finance industry with blockchain-based innovative solutions. But you answered already to this question a little bit, but yeah. I think this is something that any project that is blockchain-based is facing, but especially for finance, this is crucial.

[00:09:07] Adam: Yeah, exactly. And it's been my background prior to Polymesh. So I spent 15 years working at Morgan Stanley, which is very much in the category of a large institutional trading house. So I have some insight and it's been really interesting. And as I said, these companies have super smart people working at them.

They all have a bunch of individuals there who really see the promise and the potential of DeFi, right? Whether that's the innovation we see around things like AMMs and these liquidity pools and these different approaches to liquidity, whether it's innovation around product types and these clever financial products that do things using smart contracts that really aren't possible in the traditional world.

So they see all of that sort of potential. But they obviously are working in these companies that have not just one regulator, right? But they'll have multiple regulators. They'll have entities in the US and Europe and the UK and Asia, et cetera, et cetera. So they'll have a lot of different regulators to keep happy. And working through with these companies has been, I mean, certainly, it's challenging. It's interesting. Obviously, the timeline is... sometimes I look at it with a little bit of jealousy, right?

When you look at a new DeFi protocol that's launched and then a week later has 5 billion under management because in the wild west side of DeFi, you can do that and there's the sort of community that we'll get involved in that.

But I think in our space, the timelines are much longer.

[00:10:22] Marta: Mm-hmm.

[00:10:23] Adam: These companies take a lot longer to reach considered opinions. They like to take baby steps, well like analysis, proof of concept, MVP, and so on and so forth. So it's sort of smaller steps over a longer timeframe.

But one of the reasons we set up the association was to give longevity to the chain. That the association obviously has assets to ensure that the chain has that longevity. So we can take that slightly longer-term view as opposed to needing that sort of day-by-day view, which is sometimes more prevalent in the DeFi side of things.

[00:10:51] Marta: Yeah, that's really interesting. I think most people won't expect that it can take this long for any decentralized project. But then you have to consider all of that that you mentioned, and it takes time and you have a lot of companies and institutions to contact and cooperate with.

So that's for sure. Interesting. You've mentioned a lot about regulations and circumstances that are impacting your project and are important for you, and I wanted to know, how important it is for you to follow all the changes in regulations in terms of national level and also global...

[00:11:32] Adam: yeah.

[00:11:32] Marta: and local. I know that you need to be updated. How big is this effort? And another question related to it is that I've noticed from your blog that you spend a lot of time educating your users about local governance and local rules and I wanted to know how important is it for you?

[00:11:54] Adam: Yeah, so I mean, it is definitely really important. I mean, as you said, one of the aspects of the traditional financial world is quite siloed into generally different geographies. But even within one country, like in the US can have different rules depending on different states and so on.

And there are multiple regulators, and multiple stakeholders involved. And even within one country. There can be multiple regulators that focus on different areas. And also needless to say the blockchain space or let's say the regulators' perspective on blockchain technology has also evolved rapidly at different paces, right?

But all of the regulators globally, all of the big regulators are engaging with it in one form or another. Maybe at different paces with different points of view, but they're all engaging with it. So staying on top of that is complex and time-consuming.

And my focus is more on technology, but we have other people in the team who are sort of spending their time more pouring through these like 50 pages... From various regulators, which is just a good way to get to sleep in the evening sometimes.

So it is time-consuming, but it is important and we are seeing it as well. One of the reasons, kinda going back to the Ethereum days, one of the reasons we put together, ERC 1400 standard was to try to start the conversation around what standards look like not on a country-by-country basis.

But what can they look like across borders? And one of the promises, one of the advantages of something like blockchain technology is to streamline cross-border settlement, right? So typically cross board settlement is complicated, but for the reasons we talked about, you moving one jurisdiction, like one regulatory sort of perimeter to another one.

And that can be complex. One of the advantages of blockchains is that blockchains themselves don't really recognize borders and assets should be able to freely move between different geographies and so on. But I would say it's definitely still an ongoing effort. When you're dealing with regulated securities, although sometimes you think of an ERC 20 token, it's super simple. You take one transaction and move it from one party to another.

In the regulated space you often have transfer agents involved. You have to apply their compliance rules and make sure that everyone's KYC is valid. You have custodians, so some digital assets or some assets, in general, require you to use of a custodian, so you can't necessarily control it yourself.

You have to delegate control to a third party. So we're working with some custodians who are moving into the digital space. So there are a lot more stakeholders involved. And so it can be kinda complicated trying to put that pitch together and bring all those pieces together.

And one of the main efforts of the association is to work. So we have a grant program called it the EDF, Ecosystem Development Fund. So we have a grant program to help some of these companies integrate with the change that they can offer, for example, custodian services or transfer agent services or exchanges and so on. And that working with these companies to integrate is a large part of what we do.

[00:14:33] Marta: Well, it's so complex that it's hard to comprehend and I bet there is a lot of data that you need to index. Right? And I'm curious, what is your experience with SubQuery? Because I know that you've been working with us closely for some time already and had a lot of success and I would like to get to know your insights.

[00:14:55] Adam: So we've worked with SubQuery since our incentivized Testnet. So I think that was around the middle of last year, maybe slightly earlier, maybe March, or April last year or something. And actually, we had another indexing solution, which I won't mention by name, before we weren't very happy with.

So I went out to the market and had a look. And with these sort of things... You are always faced with a few options. One is to build it in-house --- we should put on resources trying to build it in-house. And the other is obviously to try to find a well-maintained, strong community-driven project and adopt that instead.

And obviously, that decision we made and SubQuery was that project. So we've been working with it for a long time.

[00:15:29] Marta: Exactly.

[00:15:30] Adam: As you say, data indexing or data querying and so on is critical. I think it's critical probably across all these different cases, but one of the large requirements often in the regulated spaces is regulatory reporting, right?

So regulators want it ideally real-time. Well, in fact, in the traditional world, it's not real time. It's often done periodically, every month, every six months, every 12 months. Again, one of the advantages of using a blockchain is you have a single source of truth, and you can do reporting effectively in real time or kinda close to real time.

That's one of the big advantages. And regulatory reporting is critical. I'm sure you know, and the viewers know, blockchains are not optimized really for querying data, right?

[00:16:06] Marta: No.

[00:16:06] Adam: By that nature, right? It's a whole bunch of blocks. And if you wanna know what happened a year ago or whatever, or six months ago, you have to look through this whole chain of data, and it can be very complex, particularly with historical data, right?

Current data is the easiest query, but historical data can be quite hard and and slow to get hold of. Obviously this is a big problem for us. SubQuery is here to solve that particular problem. You make that data available, indexed in an easily queryable form. And then we use it in a bunch of places.

We have an SDK that sort of wraps up a little functionality with the chain. And the SDK when you're sort of initializing, it takes a SubQuery endpoint effectively. And then under the covers we use that endpoint where appropriate, right? Depending on whatever the user is trying to do.

So we use it there. We use it in some of our UIs just to surface inside historical data, historical transactions and various other useful data that's useful to surface to users. So it's been a great project to give those types of functionality. We're integrating with exactly that sort of functionality.

[00:17:07] Marta: Well, we are happy to be of any use and help to you, so that's great. And was it hard to start working with SubQuery for you?

[00:17:17] Adam: So, it's been an ongoing process and, there are still some complexities to dealing with SubQuery.

I think some of that complexity is to do with the way we use it and the way we're trying to index data, right?

[00:17:26] Marta: Mm-hmm.

[00:17:27] Adam: Join together different bits of data that make sense to join and so on. So I think the documentation is good. Obviously your team, SubQuery team have been on hand as well. We have a telegram with the team and our developers often ask questions and post issues and so on as needed.

So that's been helpful to have. I think it's been a great experience. Yeah, I won't be lying. There were definitely hurdles along the way, right? Or issues we've had to sort of work out with you guys. To help understand along the way. And I think also SubQuery is a product as well has evolved, right?

So it's a relatively actively developed space and one of the challenges for SubQuery is that you are obviously trying to provide like a generalized solution, right? Across all substrate chains effectively. And that can be tricky because although substrate chains often share a lot of commonalities, right? The whole purpose is that they aren't all exactly the same, right? But they all have their own spin on things.

[00:18:14] Marta: And we also expand beyond substrate based chains. Yeah.

[00:18:18] Adam: That makes it even harder.

[00:18:19] Marta: It makes it harder. Yeah, but at the same time, it's so rewarding to be able to reach out to different ecosystems, and different teams, and help others build their projects in a more efficient and faster way.

It's definitely challenging but we are doing it.

[00:18:34] Adam: That makes sense. I think the other aspect is that substrate itself is rapidly evolving, right? So they have monthly releases and you probably have a bunch of different chains and different monthly releases. I guess the large projects. But Polymesh is on a different stage.

[00:18:48] Marta: Yeah, our dev team is busy.

[00:18:51] Adam: Exactly. I'm sure they have their work cut out for them. But as I say, given all of that, we use it heavily in production. We really have outages. I think most of the complexity for us comes around when we're doing upgrades. Actually, as I mentioned at the start of the call, we're in the process of doing a large upgrade at the moment. Especially if our types change and our data changes. That can be a tricky thing for any indexer.

Cause you're indexing some block, you suddenly have to start indexing in a different way. So those sorts of challenges are definitely ones we're still working through. And I think we're working with your team on some of these questions.

[00:19:23] Marta: Yeah. Well, I think it's all ongoing effort, and we should expect that every day, everywhere we have something to do. So that's just our reality. It's like continuous work. I would wrap up with a question. If you have any advice for those who are entering blockchain now?

[00:19:42] Adam: Yeah, you know, this is a question I've been asked a few times before. I'd say a few things to think about. One is that I think it's a great industry. I think if you wanna be working on the cutting edge of technology, maths, economics, game theory, then blockchain is a great space. Clearly, reputationally, the blockchain has pros and cons. Right? There obviously is a lot of really interesting work that goes on in the space.

There are also a lot of scams, there's a lot of stuff that is more exploitative or maybe less sort of socially useful. And I think recognizing that is important. But I think there's often this tendency in the media to throw out the baby with the bath water, right?

Where you just focus on the scams, maybe cause that's the more interesting headlines and ignore the fact that there's a huge amount of really interesting stuff. Whether it's to do so one of the areas we're focused on at the moment, it's confidentiality, zero-knowledge proofs and all this stuff, which is cutting-edge math.

Super interesting has applications outside of the blockchain. This is a more generation of cryptographic thing. So in terms of advice, I think, first of all, it's a great industry to be in. My general advice is, especially if you are a more sort of junior or younger developer who gets involved...

There are a lot of open-source projects. Things like SubQuery are open source, and Polymesh is open source. All of the code is developed out in the open. Often there is sort of small issues. You can make contributions. You can start building up, when we interview one of the first things we ask for is a GitHub profile.

And although, obviously if you're working in a private company, that might be possible. It's always great to see people who've engaged with open-source projects. You've made contributions, however, small and big. So go to conferences, which are now starting up in real life. Again, hopefully, this year.

Meet people and network. There are a lot of opportunities out there. And in some ways I think it's one of the easiest, if you're enthusiastic, it's probably one of the easiest spaces to kinda get involved in relative to some other areas.

[00:21:23] Marta: Well said. Thank you so much, Adam. That was a great chat. Very insightful. Thank you for joining us.

[00:21:31] Adam: And thank you very much, Marta, for having me on. Great to chat.

[00:21:34] Marta: Yeah, thank you. Bye.

[00:21:36] Adam: Thanks.

## 서브쿼리란

[SubQuery](https://subquery.network/) is a blockchain developer toolkit facilitating the construction of Web3 applications of the future. A SubQuery project is a complete API to organise and query data from Layer-1 chains. Currently servicing Polkadot, Avalanche, Algorand, Cosmos and Flare projects, this data-as-a-service allows developers to focus on their core use case and front-end without wasting time building a custom backend for data processing activities. In the future, the SubQuery Network intends to replicate this scalable and reliable solution in a completely decentralised manner.

​​[Linktree](https://linktr.ee/subquerynetwork) | [Website](https://subquery.network/) | [Discord](https://discord.com/invite/subquery) | [Telegram](https://t.me/subquerynetwork) | [Twitter](https://twitter.com/subquerynetwork) | [Matrix](https://matrix.to/#/#subquery:matrix.org) | [LinkedIn](https://www.linkedin.com/company/subquery) | [YouTube](https://www.youtube.com/c/SubQueryNetwork)
