---
layout: post
title: ukuu Development
image:
categories:
tags:
---

Ukuu - or the Ubuntu Kernel Update Utility - is a small utility that I'm very fond of. I use it to keep my Ubuntu installation up-to-date with the latest kernel releases, beyond that which Canonical provide officially. However, at around the start of the year Ukuu was archived by it's maintainer and abandoned in favour of a closed-source edition. This new version had to be purchased through the maintainers new online store, and while it boasted some impressive new features, I was unwilling to do so for a variety of reasons:

- The [blog post](https://teejeetech.in/2019/01/20/ukuu-v19-01/) announcing the move to a closed-source model states two different prices for the cost of a license. According to the post, a licence costs both $11, and $12, with further investigation revealing the true price being the latter. While the difference is negligable and the price relativly low, this lack of basic proof-reading initially put me off engaging with the new project.
- The comments underneith the [blog post](https://teejeetech.in/2019/01/20/ukuu-v19-01/) gave me the impression that I would have to wait a number of days before being e-mailed my "licence" by the maintainer personally. It seems that the post neglected to mention this potential delay, resulting in his customers having to complain in the comments section (which was subsiquently closed).
- The status of automatic updates is unknown. If a comment on this [blog post](https://teejeetech.in/2019/04/28/ukuu-v19-04/), updates require the maintainer to e-mail a package to each of his customers manually. Either that, or a private repository could be in use.

I acknowledge that this isn't exactly top-notch journalisum, but I am not a journalist. 

As a result, I - along with a number of other people - decided to fork the project and try to make my own improvements to it as a small hobby.

## Canonical Livepatch Overlap
When Canonical announced their new Livepatch service I was concerned that it's functionality overlapped that of ukuu. However Livepatch is desgined for Ubuntu LTS releases, is restricted to three machines for free users, and only focuses on installing critical kernel patches in the current stable branch. So an Ubuntu release running Linux Kernel 5.3.x would only recieve .x releases via the Livepatch service. Therefore I see no significant overlap between ukuu and Livepatch in it's current form.

## Upcoming Release
I plan to release a new version of ukuu in the coming months, continuing the lineage of the original open-source version by keeping it's original name and incrementing it's version to **18.10**. As it stands the new release features the following changes and improvements:

- A refreshed user interface incorperating a modern GTK3 headerbar and popovers.
- A complete transition to the meson build system.
- The removal of ukuu's intrusive prompts and nagware.
- Fixes for numerous build issues.

Stay tuned for further updates on this project.
