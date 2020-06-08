---
layout: post
title: Noyau Development Update (19.10)
image: /img/blog/2020-01-19-1.jpg
location: /2020/01/19/noyau-development-update
categories: blog
tags:
  - ukuu
  - noyau
---

Over the past few months, a ton of work has been done to make our fork of [ukuu](https://github.com/joshuadowding/noyau) a little less frustrating to maintain. As a result, we haven't seen much in the way of feature development over the course of this cycle, though what we *have* seen is a significant overhaul of the code base itself as well as a cacophony of smaller additions and changes.

## Identity
The first and most obvious change is it's name: we've gone from 'ukuu' (short for Ubuntu Kernel Update Utility) to '[Noyau](https://www.collinsdictionary.com/dictionary/french-english/noyau)' - French for "core". We did this to differentiate our work from that of the project's progenitor. An ego move - nothing more, nothing less.

## Meson
The second, less obvious change is the transition from autotools to the [Meson](https://mesonbuild.com/) build system. While this was partially complete before the [last development update](https://joshuadowding.github.io/2019/09/25/ukuu-development/), as of this post the work as been completed.

## Optimizations
Previously, ukuu had two entry-points - as in two separate *void main()* functions. One was for the embedded CLI program, and the other was for the GUI (GTK) program. We've combined these two entry-points into a single entry-point that launches both the CLI and GUI programs. No more need for *ukuu-cli* and *ukuu-gtk* as separate entities.

## Notifications
Previously, ukuu would launch a bash script in the background that would notify the user of any new kernels available for download. However, not only did these notifications occur far too frequently, they also worked on a *timer* rather than notifying the user of any given state change - a new available kernel. This system has been removed from the program all-together since the user likely already knows of any recent kernel releases, and, frankly, who's that desperate to upgrade their kernel?

## Small Changes
Noyau will now download kernels over HTTPS instead of plain HTTP. In the future, we plan to implement checksum verification to compliment this. Noyau also displays a little more information on the main screen than it did previously: the 'status' column is now populated with the current status of a given kernel (previously blank), and the 'branch' column indicates whether the given kernel is a mainline kernel, or an "ubuntu" kernel forked for the purposes of long-term support.

## Release
As it stands, Noyau needs more testing before I'm confident enough to release our next version - 19.10. But as that gets underway, we plan to release a beta to the public to help us identify any remaining blockers.

***Stay tuned for more updates on the Noyau project.***
