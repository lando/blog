---
title: Pantheon Localdev Launch
metaTitle: Pantheon Localdev | Lando
description: Intuitive Pantheon user interface, combined with raw, unadulterated power of Lando underneath the hood.
summary: Intuitive Pantheon user interface, combined with raw, unadulterated power of Lando underneath the hood.
date: 2021-01-26

author: Alec Reynolds
pic: https://www.gravatar.com/avatar/f274dbe2c9fbaac8339c01d918ba50b5
link: https://twitter.com/reynoldsalec
location: Lando Alliance West

tags:
  - lando
---

There's no shame in saying it: sometimes even the most hardcore "neckbeard" developer just wants a GUI. A warm, friendly face for an application that we can click around in. Something that doesn't require us to remember esoteric commands or read around a CLI prompt to figure out option flags, especially if you're striving for your [Ballmer Peak](https://xkcd.com/323/). Whether you're a dyed-in-the-wool veteran coder or someone who makes websites out of necessity, a GUI tool can lower your cognitive load so you can focus on more important things.

> Pantheon Localdev puts comprehensive tools at your fingertips while still enabling collaboration with development environment parity.

Now, for all of you who love the power of Lando but want it in a delicious GUI wrapper, the folks at Pantheon have something special for you: Pantheon Localdev.

## What is Pantheon Localdev?

[Pantheon Localdev](https://pantheon.io/localdev) is a desktop application that allows you to run your Pantheon websites on your local computer easily and efficiently. After downloading Localdev and inserting your Pantheon credentials, Localdev displays all your web projects on Pantheon's WebOps platform.

![Pantheon Localdev dashboard.](/images/localdev-dashboard.jpg)

Select a project, click on "Download", and you're off to the races.

![Pantheon Localdev downloading a website.](/images/localdev-pulling.jpg)

Once the site is done downloading, you should see a screen giving you details on your project and helpful links to access it locally, run CLI commands on it, refresh its database/code/files from Pantheon, and more.

![Pantheon Localdev showing a website.](/images/localdev-site.jpg)


## Why Should I Use It?

Chances are you already have some sort of local development tool. Why use Pantheon Localdev?

**1. Easy to use.**

The GUI interface and easy install means that even non-technical users who just want to edit a line of text or CSS can spin up Localdev. No head scratching required.

**2. Parity with Pantheon Environments.**

Localdev uses the same infrastructure and services that run your production websites on Pantheon. Setting up Solr on your laptop is tough. Dealing with a bug that breaks your production site but works fine on your local machine is frustrating. Localdev solves those problems.

**3. CLI Power (When You Need It).**

If you're command line-curious, the Lando CLI that powers Localdev allows you to use Terminus, WP-CLI, Drush, Composer, and other CLI tooling.

## How Does This Devil Magic Work?

Pantheon Localdev uses [Lando](https://lando.dev), which orchestrates Docker containers with other web development tools and coordinates communication with Pantheon's API.

If that all sounds like black magic to you, think of it this way: Lando installs all the infrastructure necessary to run a website onto your computer. To make sure that those tools are reliable and that they don't mess with any of your other tools, Lando puts them into compartmentalized spaces called "containers".

If you're a web developer, think of Pantheon Localdev as the frontend and Lando as the backend.

## What's Next?

Localdev 1.0 is now released under General Availability and has been vetted for wide adoption. You can download Localdev for MacOS [here](https://pantheon.io/localdev) today. We're looking forward to working with wonderful Pantheon customers like yourself to improve the Localdev experience for everyone!
