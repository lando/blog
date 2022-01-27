---
title: Advanced Lando-ing with Lagoon 
metaTitle: Advanced Lando-ing with Lagoon | Lando
description: Tips on build steps, performance tuning, tooling, and other advanced Lando techniques.
summary: We discuss build steps, performance tuning, tooling, and the future of the Lando project with our friends at Amazee.io.
date: 2021-12-16 12:00:00

author: Alec Reynolds
pic: https://www.gravatar.com/avatar/f274dbe2c9fbaac8339c01d918ba50b5
link: https://twitter.com/reynoldsalec
location: Lando Alliance West

tags:
  - lando
---

Are you ready to join us in the clouds?

"Cloud Development" has been the future of development for years. Proponents told us to wait for a world where we could click a single link on a project repository and have a full development environment, from infrastructure to code editor, available on-demand in our browser window. No more waiting for builds! No more debugging local environements! Code on any device, even your iPad!

With GitHub's release of Codespaces, we now have a tempting platform for remote cloud-based development.

In a nutshell, Codespaces gives you a flexible VM environment that VSCode accesses via its [Remote Containers feature](https://code.visualstudio.com/docs/remote/containers). You can use this same feature to develop locally (look for a future article), Codespaces simply gives you easy-to-use remote infrastructure running on Microsoft Azure (fear not, you need know nothing about Azure).

## Codespaces sounds cool. How does Lando help?

Codespaces is great, but it's largely a blank slate. Setting up infrastructure on Codespaces is basically the same as setting it up on your computer or a VM; it requires knowledge of Docker and a willingness to get dirty with DevOps.

Enter Lando. 


1. Enable Codespaces for Your User/Org

Codespaces ain't free. To enable it on your account, you need to go to your user (or org) settings and click on the "Billing & plans" sidebar item. Find the Codespaces section and click "update" next to the "monthly spending limit" description. You'll need to enter a non-zero amount. Since we'll be using a small machine that takes less than 20 cents to run per hour, you can safely set this limit at a few dollars and get enough time to run Codespaces for a work week.
 
Once Codespaces is enabled, you'll see a "Codespaces" tab when you click on the "Code" dropdown on any repo within your user or organization, depending on which level you enabled.

2. Fork the Demo Repo

This repo includes a .devcontainer setup that pre-installs Docker and Lando for you. The devcontainer files are the instructions for building the VM that Codespaces uses for your workspace.

A. Install Docker
https://docs.docker.com/engine/install/ubuntu/

B. Install Lando
https://docs.lando.dev/basics/installation.html#linux (debian instructions)

Make sure you fork it into the user/org that you enabled Codespaces for!


3. Run Lando Start Commands

`lando start`


4. Port Routing
  
The non-SSL localhost port worked for me with Codespace's port forwarding. http://localhost:49173

Looks like forwarding non-localhost ports is a known issue: https://github.com/github/feedback/discussions/9420
