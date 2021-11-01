---
title: Acquia and Lando (or, The Tale of a Tryst)
metaTitle: Acquia Cloud Lando Integration | Lando
description: Today, we're proud to announce that the romance is official. Acquia has sponsored a formal Lando integration.
summary: Long has the relationship between Acquia and Lando been a love that dare not speak its own name. Today, we're proud to announce that the romance is official - Acquia has sponsored a formal Lando integration.
date: 2021-03-03 12:00:00

author: Alec Reynolds
pic: https://www.gravatar.com/avatar/f274dbe2c9fbaac8339c01d918ba50b5
link: https://twitter.com/reynoldsalec
location: Lando Alliance West

tags:
  - lando
---

For the last year, as Lando has become the go-to local development solution for a wide range of PHP-focused hosting companies, our friends in the Drupal world have been asking: when does Acquia get an integration?

Long has the relationship between Acquia and Lando been a love that dare not speak its own name. It was a tryst rumored in hallways at Drupal camps, a romance that existed in our hearts, but never in the comforting solidity of code.

Today, we're proud to announce that the romance is official: Acquia has sponsored a formal Lando integration.

## Dev Desktop: Remembering the Departed

> Over its 12+ year lifespan, Dev Desktop was the first stop for many developers experimenting with Drupal.

But before we talk about the spawn of this beautiful love between Acquia and Lando, we should pause in deference to the departed and pay our respects to [Acquia Dev Desktop](https://dev.acquia.com/blog/announcing-acquia-dev-desktop-end-life).

Dev Desktop was originally [released in 2009](https://www.acquia.com/blog/acquia-stack-installer-aka-damp) as the Acquia Stack Installer or the "DAMP Stack." In 2011 it was redesigned and [rebranded as Dev Desktop](https://twitter.com/christefano/status/44485845968891904). Over this 12+ year lifespan, Dev Desktop was the first stop for many developers experimenting with Drupal. It's ease of use and reliability made it a favorite of trainers and others. Even as it neared a decade in age and competed against an emerging wave of virtualized solutions, Dev Desktop was still used by thousands of developers worldwide.

Perhaps the venerability of Dev Desktop was one reason that it took longer for Acquia to embrace other solutions. After a decade of marriage to Dev Desktop, Acquia had accumulated reams of support documentation and instructional videos. Dev Desktop was still a popular solution for many types of users, including many in large-scale institutional and enterprise settings. Plus it still worked!

## Acquia and Lando: A Forbidden Love

However, even while Dev Desktop still lived, Acquia and Lando shared longing looks. Over the years, we had numerous hushed conversations with Acquia team members, wistfully wishing that Lando and Acquia could be drawn together in a moment of unbridled passion.

In 2020, that passion spilled over in the form of Dev Studio CLI, which aimed to "expose Drupal development workflows tailored to Drupal developers who work in modern virtual environments such as Lando or DrupalVM". Its utilization of Lando as a pluggable backend was an innovative step forward in providing Acquia developers with virtualized development environments.

> ...wishing that Lando and Acquia could be drawn together in a moment of unbridled passion.

Dev Studio CLI put the Acquia-Lando romance into the public eye, but it was more of a chance meeting on the ballroom floor than a first date. Dev Studio CLI showed that greater things would be possible from a tighter integration between Acquia and Lando. Thus Dev Studio CLI's deprecation date of March 30th, 2021 is not a funeral, but rather the blossoming of a sweeter love.

## Redeeming the Romance

Despite its short life, Dev Studio CLI pointed the way towards today's fruitful partnership between Acquia and Lando.

> The new Lando integration with Acquia CLI provides a modern Docker-based developer workflow.

Instead of trying to satisfy its diverse developer audience with a single product in the mold of Dev Desktop, Acquia will support two solutions: Acquia Cloud IDE and Lando. Acquia Cloud IDE provides a new cloud-based development experience that is both powerful and easy for new developers. By providing development environments coupled with [Theia IDE](https://theia-ide.org/), it provides a development experience similar to VS Code that's accessible from any web-enabled device, even a tablet or low-powered laptop.  If you haven't tried out Acquia Cloud IDE, [check it out](https://www.acquia.com/products/drupal-cloud/cloud-ide).

For those who prefer to work with their tools locally, the new Lando integration with [Acquia CLI](https://docs.acquia.com/acquia-cli/) provides a modern Docker-based developer workflow. This means you can use your tools on your computer while running infrastructure that mimics Acquia Cloud's production environments.

## What's in the Acquia Lando Integration?

The integration uses Acquia CLI to pull down projects from Acquia Cloud and deploy work after you're done developing on Lando. If you've used Lando before you'll recognize the workflow. A `lando init` command will initialize your local setup and start a dialogue that helps you authenticate using Acquia CLI. Once your site is up and running, a `lando pull` command will let you pick the environment to pull from Acquia Cloud, and select the assets (code/database/files) to download. A `lando push` command similarly gives you the ability to push code, database, and/or files to an environment of your choosing on Acquia.

> The Lando integration should eliminate the "it works on my machine" excuse.

While you're developing, Lando uses many of the same services that Acquia Cloud does. We've made some small adjustments to ease developer experience; for example, Varnish won't be running locally to prevent confusion around caching while you're developing. The Lando integration should eliminate the "it works on my machine" excuse, but also not create new inconveniences for developers working locally.

## When Can I Get It?

The integration is currently under development and a beta release should be available in March 2021.

A huge thank-you to everyone at Acquia, both current and past team members, who made this possible. Special thanks to John Kennedy ([@CommerceJohn](https://twitter.com/CommerceJohn)) for lighting the spark and to Matthew Grasmick ([@grasmash](https://twitter.com/grasmash)) for fanning the flame. We hope this integration is a pyrotechnic display of our burning passion for the special developers in the Acquia and Lando communities!

If you want to be notified when the Acquia Cloud Lando Integration beta is released, sign up for the Lando newsletter using the form below.
