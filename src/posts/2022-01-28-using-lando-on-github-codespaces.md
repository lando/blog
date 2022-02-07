---
title: Lando on GitHub Codespaces 
metaTitle: Lando on GitHub Codespaces | Lando
description: Getting started using Lando to provision your GitHub Codespaces Drupal dev environment.
summary: An exploration of GitHub Codespaces and guide to using Lando to provision your Codespace for Drupal development.
date: 2022-02-07 12:00:00

author: Alec Reynolds
pic: https://www.gravatar.com/avatar/f274dbe2c9fbaac8339c01d918ba50b5
link: https://twitter.com/reynoldsalec
location: Lando Alliance West

tags:
  - lando
---

Are you ready to join us in the cloud?

"Cloud Development" has been the future of development for years. Proponents told us to wait for a world where we could click a single link on a project repository and have a full development environment, from infrastructure to code editor, available on-demand in our browser window. No more waiting for builds! No more debugging local environments! Code on any device, anywhere...even your iPad from that Tahitian beach (because obviously it was just your laptop stopping you from going there).

With GitHub's release of Codespaces, we now have a tempting platform for remote cloud-based development. Read on to learn more about Codespaces and how Lando can help accelerate your pathway to remote development domination.


:warning: After our explorations, it's clear that Codespaces is still and evolving product and our approach to deploying Lando on Codespaces will likely evolve _greatly_ in the future. Make sure you subscribe to the Lando newsletter (see form at the bottom of this post) or [follow our Twitter](https://twitter.com/devwithlando) to get future updates.

## What is GitHub Codespaces?

In a nutshell, Codespaces gives you a flexible VM environment that VSCode accesses via its [Remote Containers feature](https://code.visualstudio.com/docs/remote/containers). Codespaces creates a Docker container called your "dev container" that will contain all the tools and infrastructure needed to run your application. If you look at the [.devcontainer](https://github.com/lando/drupal-dev-environment/blob/HEAD/.devcontainer) directory in the example repo, you'll see a Dockerfile which defines that dev container and a `devcontainer.json` file which specifies further details on setting up your Codespaces environment.

Because all of these ideas belong to VSCode, you can use these same `.devcontainer` setups to develop locally (look for a future article). Codespaces simply gives you easy-to-use remote infrastructure running on GitHub's Azure cloud (fear not, you need know nothing about Azure).

## Codespaces Sounds Cool. How Does Lando Help?

Codespaces is great, but it's largely a blank slate. Setting up infrastructure on Codespaces is basically the same as setting it up on your computer or a VM; it requires knowledge of Docker and a willingness to get dirty with DevOps.

Enter Lando. With Lando installed within your Codespaces environment, you can use your existing Landofiles and the same Lando commands you're familiar with to run your infrastructure, setup tooling, etc.

### Installing Lando via Dev Container Features

If you dive into the `devcontainer.json` file, you'll notice a section defining separate "features" to install:

```json
  "features": {
    "docker-in-docker": "latest",
    "lando/lando-dev-container-feature/landodevcontainer": "latest",
  }
```

[Dev container features](https://code.visualstudio.com/docs/remote/containers#_dev-container-features-preview) is an attempt to create easy ways to build Dev container environments for use on Codespaces and elsewhere. The feature is clearly in beta right now; the spec is in flux, but we've created a very basic feature that installs the Lando binary for Debian environments: [Lando Dev Container Feature](https://github.com/lando/lando-dev-container-feature)

In the future we'll make the Lando Dev Container Feature more flexible so it can be used to install Lando on a variety of Dev container setups.

### Inception Time: Docker-in-Docker

You probably also noticed the "docker-in-docker" feature in `devcontainer.json`.

Lando actually runs within this dev container using a "docker-in-docker" architectural approach. This means that we install a version of Docker _inside_ the Devcontainer. This approach has some potential downsides, but seems to be the most stable/easy way to run Lando (and indeed any multi-container dev setups) in Codespaces right now...stay tuned for updates as we evolve our approach.

## Getting Started Codespaces and Lando

### Step 1: Enable Codespaces for Your User/Org

Codespaces ain't free. To enable it on your account, you need to go to your user (or org) settings and click on the "Billing & plans" sidebar item. Find the Codespaces section and click "update" next to the "monthly spending limit" description. You'll need to enter a non-zero amount. Since we'll be using a small machine that takes less than 20 cents to run per hour, you can safely set this limit at a few dollars.
 
Once Codespaces is enabled, you'll see a "Codespaces" tab when you click on the "Code" dropdown on any repo within your user or organization, depending on which level you enabled.

### Step 2: Fork the Demo Repo

Fork our [drupal-dev-environment](https://github.com/lando/drupal-dev-environment) repo. If you've successfully enabled Codespaces, you should be able to either click on the green "Code" button in your new repo and create a Codespace or visit `https://github.com/[YOUR-GITHUB-USER]/drupal-dev-environment/codespaces`.

### Step 3: Wait for Codespaces to Spin Up.

The Codespaces build process looks something like this:

1. Codespaces creates its VM
2. Builds your `devcontainer.json`-specified Dockerfile
3. Runs features as additional Docker image layers ontop the Dockerfile instructions
4. Boots up VSCode in browser (should validate whether features finish before this happens)
5. Continues running `postCreateCommand`/other commands defined in `devcontainer.json`

On first start, it's possible that you'll probably see Codespaces executing the `postCreateCommand` in the terminal window. This command is defined in our demo `devcontainer.json`; it starts Lando, runs composer install, and install drush.

### Step 4: Visit Your Site

Once the `postCreateCommand` is done running, you should see a tab called "Ports" with the number "3" after it. This means Lando has successfully started and Codespaces has detected three ports that it can forward for your web browsing pleasure! The three exposed ports should relate to...

- Your appserver (aka where you can see the website)
- MySQL
- PHPMyAdmin (for browsing your SQL DB)

Click on "Ports" and find the port related to appserver. Clicking on the globe icon should give you a browser window showing the Drupal installation screen.

Note that these ports are currently marked as "private", which means that you must be authenticated with your GitHub account to see them. You can choose to share these ports with your org or even make them public.

#### Notes on Port Forwarding

You may notice that Lando's Traefik proxy has been disabled, IE that the "nice URLs" Lando generates when run locally (ex: myproject.lndo.site) aren't produced. Codespaces [has issues forwarding non-localhost ports](https://github.com/github/feedback/discussions/9420) and the benefit of Lando's proxy is somewhat negated by Codespace's forwarding feature, so we've decided that it's simpler to disable it.

We've also configured the default `.lando.yml` to disable the appserver's SSL. This is primarily for ease-of-use. Codespaces doesn't automatically recognize Lando's SSL ports as HTTPS, so to use them a user would need to configure them as "HTTPS" in the Ports tab on Codespaces manually.

Since GitHub encrypts traffic at its edge you can still enjoy an SSL connection, but if you have a use case that demands SSL (say containers communicating with each other via SSL) or have security concerns, you'll want to remove these lines from the Landofile and may need to do additional Codespaces configuration:

```
  appserver:
    ssl: false
```

## Codespaces Criticisms

Overall, we're very impressed with what GitHub/Microsoft have achieved with Codespaces. This feels like a comprehensive effort to create a future of development that is device agnostic, allowing developers to run projects using any infrastructure. However, it's clear that these are still early days for Codespaces. A few things we're looking forward to seeing improved:

### 1. Build Performance
Currently it's difficult/impossible to pre-install containers on your Codespaces environment. This means that, once you build your Codespaces environment, you then have to run `lando start` and Lando will pull all the necessary Docker images, which takes time. Having a way to prebuild entire environments would vastly speed up spin-up...and indeed this seems to be a [forthcoming feature](https://docs.github.com/en/codespaces/customizing-your-codespace/prebuilding-codespaces-for-your-project).

### 2. Inability to Designate Ports as SSL in devcontainer.json

Ports other than `:443` aren't automatically identified as SSL by Codespaces, which means that all of Lando's SSL-powered ports show up with errors if you try to visit them. We've disabled SSL in our demo repo config; it would be nice to see Codespaces allow you to designate non `:443` ports as SSL in the future.

### 3. Stabilization of Dev Container Features

The ability to have highly-reusable Lego block-like scripts to construct dev containers on the fly is great, akin to GitHub's extensive Actions ecosystem, but the concept is clearly still a work-in-progress.

### 4. Lack of a Spin-up Link

It's weird that on GitHub's own platform, I have to explain to you how to enable Codespaces and find the button to create a new one, whereas competitors (*cough* Gitpod) provide links that start environments in a single click.

## What Do You Think?

We're curious to hear about your Codespaces experiences! Give [our demo repo a try](https://github.com/lando/drupal-dev-environment) and joing the [Lando Slack](https://launchpass.com/devwithlando) to tell us how it went.
