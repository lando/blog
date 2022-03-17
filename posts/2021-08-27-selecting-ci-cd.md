---
title: Lando and the Gateway to CI/CD
metaTitle: Lando and the Gateway to CI/CD | Lando
description: Users often call Lando the "first step" to CI/CD. This post from our friends at BlackMesh helps you take the next step.
summary: Users often call Lando the "first step" to CI/CD. This post from our friends at BlackMesh helps you take the next step. 
date: 2021-08-27 12:00:00

author: Alec Reynolds
pic: https://www.gravatar.com/avatar/f274dbe2c9fbaac8339c01d918ba50b5
link: https://twitter.com/reynoldsalec
location: Lando Alliance West

tags:
  - lando
  - devops
---

tl;dr If you're evaluating CI/CD services, check out [the guide we wrote with BlackMesh.](https://www.contegix.com/resources/library/cicd-beyond-jenkins)

When we talk with users, they often tell us that Lando was their "first step" towards true Continue Integration and Deployment (CI/CD). Lando gave them a way to quickly spin up disposable development environments to try out new ideas. Those who in the past might have only refreshed their development enviroment once or twice a year were now able to do it weekly or daily with Lando. True feature-branch based development accelerated the time from feature request -> deployment, providing better tools for coding, reviewing code, and even deploying it via Lando's hosting partner integrations.

Beyond that, Lando provided an easy place to configure test suites and build processes, the heart of what we usually think of as CI/CD. Developers could perfect tests and builds on Lando, then deploy them to a service like CircleCI or GitHub Actions. In fact, we've had numerous users deploy Lando into a CI/CD solution as a quick way to get tests running without having to dive into a new configuration file syntax.

## Taking the Next Step

However, there comes a time when all code needs to take the leap out of development and into a staging or production environment. A great CI/CD service is at the core of that experience.

In partnership with our friends at BlackMesh, we wrote up a [quick guide](https://www.contegix.com/resources/library/cicd-beyond-jenkins) to some of the most popular CI/CD tools available today. Take a read and let us know what you think!

[Checkout the guide to evaluating CI/CD in 2021](https://www.contegix.com/resources/library/cicd-beyond-jenkins)
