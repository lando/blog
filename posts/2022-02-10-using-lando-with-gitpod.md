---
title: Using Lando with Gitpod
byline: A look at Gitpod and how to get started using your Lando setup within Gitpod.
blog: true

date: 2022-02-10 12:00:00
updated:
  timestamp: 1644512400000

author:
  name: John Ouellet
  pic: https://www.gravatar.com/avatar/36cf0d0492681818218bb36b6fdd6e33
  link: ./../tag/john-ouellet.html
  location: Lando Alliance East

tags:
  - lando
  - John Ouellet
---

Local Docker based development has become a mainstay for most developers today.  However, Docker requires a decent machine to run efficiently, and performance problems plague developers running virtualized Docker instances on Mac and Windows.  Cloud development has come into the forefront as a way to get around upgrading your machine to handle your development tasks.

[Gitpod](https://www.gitpod.io/) is one cloud solution that has become widely used by many developers.  It allows developers to easily hook up a remote development environment from any computer to get the job done.  Keep reading to see how you can hook up your Lando setup with Gitpod.

:warning: Gitpod is still an evolving project.  We have found a couple small caveats in our exploration of the product that we will address below.  We will be continually adapting Lando to make Gitpod a better development experience for our users.  Make sure you subscribe to the Lando newsletter or [follow our Twitter](https://twitter.com/devwithlando) to get future updates.

## What is Gitpod?

Gitpod allows users to spin up remote VM environments that utilize VSCode or any Jetbrains IDE to develop in their browser.  Using a simple [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file) configuration file, you can quickly get up and running with a remote environment.  I would read through the docs to get familiar with this file as it is the base for all your Gitpod needs.

We have also spent some time developing a universally easy way to get your Lando projects going within Gitpod as well.  It won't take too long to hook up Lando to your Gitpod environment.

## Setting up Gitpod with our Demo

Gitpod can work on a variety of [git based providers](https://www.gitpod.io/docs/integrations).  For the sake of this article, we will be setting our repos up with [GitHub](https://www.gitpod.io/docs/github-integration).

### Step 1: Enable Gitpod for Your User/Org

The first time you are setting up Gitpod, you need to enable it so your repos can utilize it like any other third party app.  The setup is fairly simple, just go over to the [Gitpod apps page](https://github.com/apps/gitpod-io) to setup the app to work with whatever repos you want.

### Step 2: Fork the Demo Repo

For our [`drupal-dev-environment`](https://github.com/lando/drupal-dev-environment) repo. If you've setup Gitpod properly, all you need to do is visit your repo at this url: [https://gitpod.io/#https://github.com/YOURORG/drupal-dev-environment](https://gitpod.io/#https://github.com/YOURORG/drupal-dev-environment).

### Step 3: Wait for Gitpod to spin up.

The initial build will be very slow (10 mins+), so go have a delicious snack in the interim.  Gitpod uses a concept of [prebuilds](https://www.gitpod.io/docs/prebuilds#prebuilds) which will be built during the initial start.  Depending on your config, this may be very quick, or will take quite sometime.

Once Gitpod builds your environment, you will be launched into a VSCode instance on your web browser.  Our demo repo will then launch a preview browser after the site demo finishes installs.

From here, you can code away and do whatever you want. Your demo site is good to go!

## Using Lando in Gitpod

If you are not going to use our demo repo, we've created a [Dockerhub image](https://hub.docker.com/layers/devwithlando/gitpod/1/images/sha256-48d6443c6cac102771b4514de70067f0cc97fec20f9cdbad03658bee446324d7?context=explore) with the latest version of Lando installed and configured for you to use on your own projects.

The bare minimum you need to get going in your `.gitpod.yml` config file is:

```
image: devwithlando/gitpod:1

tasks:
  - name: Start Drupal
    command: |
      lando start
```

Very simple and straight forward.  You can do so much more and a good base example of what to use can be found in our [Drupal demo repo .gitpod.yml](https://github.com/lando/drupal-dev-environment/blob/9.4.x/.gitpod.yml).

## Various Caveats Using Gitpod and Lando

### Proxy

It seems the proxy can cause weird issues from time to time.  So right now, we disable it in our [Gitpod Docker image](https://github.com/lando/gitpod/blob/main/images/Dockerfile#L10).  If you do have proxy based urls, you can just click the port defined via `lando info` to open a new browser window in Gitpod as a work around.

### Localhost

Right now, Gitpod will only launch http urls.  If you want to launch your preview browser dynamically, you can use the command we [defined in our demo repo](https://github.com/lando/drupal-dev-environment/blob/9.4.x/.gitpod.yml#L15) to do so.  If you do have multiple services that use the localhost url (like when using PHPMyAdmin), you will need to change which url via `.urls[0]` to the right index number.  Usually it is only `.urls[0]` or `.urls[1]`.

OR you can just click the port number in the Gitpod UI and open a browser manually.

### Possible Network Issues

When testing, we noticed that if you use `lando start` within the prebuild `init` context, some strange things may occur when the instance times out.  When the instance starts back up again, you may see issues like:

```
ERROR: for database  Cannot start service database: network 920aa31515a0eb982ce8f89dbdd500e9154a07669b35a97c9733a208eb00d11c not found
```

To address this you will need to do a `lando destroy` and '`lando rebuild` to fix it.

You can avoid this by not putting `lando start` in your .gitpod.yml file's `init` command at the moment.  Instead you can just pull the docker images locally in the `init` step like [we do in our demo](https://github.com/lando/drupal-dev-environment/blob/9.4.x/.gitpod.yml#L6) to help speed up build times.

We're curious to hear about your Gitpod experiences! Give [our demo repo a try](https://github.com/lando/drupal-dev-environment) and join the [Lando Slack](https://launchpass.com/devwithlando) to tell us how it went.

And if you're a visual learner, you can check out this short intro video I did on using Gitpod with Lando: [https://www.youtube.com/watch?v=ZaXI6ooY8Ak](https://www.youtube.com/watch?v=ZaXI6ooY8Ak)
