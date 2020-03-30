---
layout: post
title: ukuu Development Update (19.10)
image: /img/portfolio/ukuu/ukuu-1.jpg
location: /2019/09/25/ukuu-development
categories: blog
tags:
  - ukuu
  - noyau
---

Ukuu ("oo-koo"), or the Ubuntu Kernel Update Utility, is an [app](https://en.wikipedia.org/wiki/Application_software) that I'm very fond of. I use it to keep my operating system up-to-date with the latest kernel releases from Canonical. However earlier this year the project was archived by it's maintainer; it was replaced with a closed-source alternative requiring the purchase of a licence. This new release boasts only moderate differences to the abandoned open-source project, but I was unwilling to purchase a licence for this new product for a variety of reasons:

- The [blog post](https://teejeetech.in/2019/01/20/ukuu-v19-01/) announcing the move to a closed-source model states two different prices for the cost of a license. According to the post, a licence costs both $11, and $12, with further investigation revealing the true price being the latter. While the difference is negligible and the price relatively low, this lack of basic proof-reading initially put me off engaging with the new project.
- The comments underneath the [blog post](https://teejeetech.in/2019/01/20/ukuu-v19-01/#comments) gave me the impression that I would have to wait a number of days before being e-mailed my "licence" by the maintainer personally. It seems that the post neglected to mention this potential delay, resulting in his customers having to complain in the comments section (which was subsequently closed).
- The status of automatic updates is unknown. If a comment on this [blog post](https://teejeetech.in/2019/04/28/ukuu-v19-04/), updates require the maintainer to e-mail a package to each of his customers manually. Either that, or a private repository could be in use.

As a result I decided to fork the project and turn it into a hobby. I'm hoping to use it to learn more about building and packaging software for the open-source desktop - particularly for Ubuntu-derived platforms. Also, I'm open to changing it's name.

## Canonical Livepatch Overlap
When Canonical announced the [Livepatch Service](https://ubuntu.com/livepatch) I was concerned that it might make this project somewhat redundant. But after some research I concluded that Livepatch poses no risk to projects like this in it's current form. Livepatch delivers critical kernel patches from the current stable branch: so an Ubuntu release launched with the 5.3.x Linux Kernel would only receive .x (bug-fix) releases through the service. Since this project allows it's users to experiment with entirely new versions of kernel (5.4, 5.5, 6.0 etc), I don't envisage any *immediate* threat.

## Upcoming Release
I plan on releasing a new version of ukuu in the coming months. I may try to synchronize the release with the upcoming Ubuntu 19.10 release slated for October 17th, but I won't be holding myself to it. I may also increment the version number to match the Ubuntu release it's synchronized with (18.9.x - 19.10) - who knows.

Regardless of what it's called or what it's version number might be, the next release will feature numerous changes and improvements. Some highlights include:

- Refreshed user interface incorporating a modern GTK3 HeaderBar and popovers.
- Complete transition from autotools to the [Meson](https://mesonbuild.com/) build system.
- Removed all intrusive prompts and nagware.
- Fixes for numerous build issues.

***Stay tuned for further updates on this project.***
