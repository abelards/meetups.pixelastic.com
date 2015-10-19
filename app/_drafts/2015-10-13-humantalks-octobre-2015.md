---
layout: post
title: "HumanTalks Octobre 2015"
tags: humantalks
---

This HumanTalks sessions took place at UrbanLinkers, a Parisian recruiting
company. The room was packed and we had just enough seats for everybody.

# IBM Bluemix

The first talk was by Alain Airbon, which was very nervous. He said so right at
the beginning of his talk, but it was quite obvious. He talked about Bluemix,
which is the PaaS developped by IBM. He showed us how the Bluemix dashboard UI
was working, but it felt a lot like a commercial presentation, and we did not
learn anything we could have learn in 10 minutes in the dashboard ourselves.

I did not really understood what Bluemix was doing actually. He spent very
little time explaining what a PaaS was (he compared it to IaaS, explaining the
differences, but even for IaaS, I would have love to have an explanation).
I think Amazon is to IaaS what Heroku is to PaaS, but I'm not even sure.

It was clear that Alain was very nervous, and wanted the audience to like his
talk on stage, but it did feel too shallow, and too commercial. And developers
have a very low tolerance to bullshit. An advice I could give to first-time
speakers would be to talk about something they really like and are passionate
about, that the audience can feel how they feel about it. A personnal feedback
on how he used Bluemix to deploy one of its own projects would have worked
better I think.

Still, I liked the way he introduced Bluemix: "Bluemix is simply Cloudfoundry,
repainted to the IBM colors. We might not be better than the alternatives, but at
least we follow standards and use an open-source project". This was honest and
straight to the point.

I hope this first talk will not discourage him from trying again another time,
we're still completely open to hosting him another time and can give some
advices on public speaking.


# How to fail at code review

The second talk was by Michel Domenjoud, from Octo Technology. He was giving the
same talk two days after at the Agile Tour Lille. Michel shared with us some
stories about code review, and specifically peer review.

Michel is convinced that regular code review inside a team will lead to better,
more maintanable and more stable code in production. He annouces numbers as high
as a ROI of 4 to 1. For one hour spent on code review, we can save up to four
hours of debugging. Almost 65% of bugs can be found before shipping, thanks to
the reviews.

Michel then shared 3 personnal stories with us. First, he told us about that
time when he worked for 10 days on feature that was originally estimated to
3 days. In the end he did a lot of refactoring, touched hundred of classes and
thousands of LOC. Once done, he asked a colleague for a review. 30 minutes
later, one of them came back to him with a few issues spotted, mostly variable
naming and a few typos. So they pushed to production.

Two weeks later, a bug popped in. After two days investigating, it was
obvious that the bug came from this new feature, so they had to start debugging
live.

Here is what they did wrong. First, they rushed the whole thing. On average, you
cannot review more than 300LOC/hour, so take your time and do it with a fresh
mind, not late at night. If the feature involves a lot of changes, it's expected
that the review also take some time. Also, Michel should not have waited 10 days
before submitting his work for a review, he should have asked feedback earlier.

But also, it seems that the reviewer did not know what to look for in the code
review. He found typos and naming issues, but he did not really looked inside
the logic and the behavior. No-one told him what to look for.

In the second story, Michel told us about Bob who came to him one day at the
coffee machine. Bob was upset, he was saying that Martin code was really ugly,
that he was still doing hard-coded SQL requests. Bob said he spent the last hour
fixing the issues of Martin.

That was a perfect recipe for failing at code review as well. Bob never spoke to
Martin, he just complained to Michel. Instead they should have talked together.
Then, Bob should never have corrected the issues himself. The author should fix
its own errors, otherwise he will never learn. And finally this whole story of
hardcoded SQL requests has never been written anywhere, so you cannot blame
people for not following them.

The last story was about Kent and Beckie that were arguing loudly about
snake_case vs camelCase, shouting in the open-space. In the end, Kent left
saying "you're a shitty coder, Beckie!".

This is really the worse that could happen. Kent was criticizing people, not
their code. When in doubt, always refer to the principles of the Egoless
Programming. Your code is not an extension of yourself. It can be judged,
improved or deleted, this has nothing to do with you.

Also, it was not the right time to argue about snake_case or camelCase. Refrain
from starting a framework work or any kind of trolling when doing a code review.
This is not the time nor the place. Find compromises, write it down and follow
it.

I really liked this talk. Michel gave real-life examples that we can all
understand. Coding involves much more human contact that we could initially
imagine. The code of a project belongs to the community building it, not to the
one person that wrote it. Anyone can write code. Writing maintainable,
understandable, shareable code is harder. The only way to do it properly is to
talk to your colleagues, and code together.

# Memory techniques

This talk, I gave it myself. I've written a summary of it [on my
blog](http://blog.pixelastic.com/2015/10/16/memory-techniques/).


# How to hack your electricity meter

Cédric Finance told us about how he hacked its electricity meter at home with
a Raspberry Pi. He did not actually really hacked it, he simply pluggued the
Raspberry Pi to the public part of the meter and read the data sent by it.

He did it because he realized that we never really know how much electricty
we're using. When he leave the water tap open, it's obvious how much water we're
wasting, and we can almost see money flowing down the sink. For electricity, we
never really know until we receive our bill. But he also simply did it because
he could.

Getting back to the technical side of things. The meter sends data as a stream
of keys/values. The data is not self explenatory but fortunatly the spec is
available and it can easily be parsed. He realized that it gave him a much more
accurate set of informations than what was printer on its bill.

As soon as he got the data, he pushed it to Thingspeak, a SaaS service to push
streamed data and generate graphs. With that he quickly saw that its water
heater was malfunctionning. It was supposed to only work on off-peak hours, but
was actually always working. Knowing that, he fixed it.

He then dropped Thingspeak to build a custom dashboard to capture data with
a higher frequency. He let it run for more than a year and was then able to
compare usage from one year to the next.

At first he did it just for fun, but he soon realized that he could better
understand its electricity consumption and make some improvements to it. Now he
went ever further, with humidity and heat sensors in his home and graphs for all
that.

# Conclusion

Once again, a nice serie of talks. And once again, my favorites are the personal
sharing of experience. Next week will be a special event as we'll be celebrating
the HumanTalks Paris birthday, in a bigger room than usual. Hope to see you
there.