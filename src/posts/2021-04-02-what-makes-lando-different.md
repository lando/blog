---
title: What Makes Lando Different?
metaTitle: What Makes Lando Different? | Lando
description: You have many choices for dev tools. What makes Lando different?
summary: You have many choices for dev tools, particularly for local development. What makes Lando different?
date: 2021-04-02 12:00:00

author: Alec Reynolds
pic: https://www.gravatar.com/avatar/f274dbe2c9fbaac8339c01d918ba50b5
link: https://twitter.com/reynoldsalec
location: Lando Alliance West

tags:
  - lando
---

## 1. Lando Describes Applications, Not Services.

> **"So Lando is just an abstraction layer for Docker Compose?"**

At its core Lando is helping you manage Docker to run your applications infrastructure. However, Lando describes infrastructure in a very different way from Docker Compose.

### Lando vs. Docker Compose

Docker Compose focuses on a series of _services_, the pieces of infrastructure that run your application.

Lando is more focused on the _application_, viewing infrastructure as menu options you take to create a delicious web app meal.

Docker Compose wants you describe each step in baking the infrastructure for a Laravel app. In contrast, you can tell Lando to run the Laravel recipe. If you don't like that recipe's assumptions, you can swap out ingredients (say a different database or adding a service like Elasticsearch) at will. Either way, Lando will have baked you a cake by the time you'd still be mixing the batter with Docker Compose.

**Compare this Landofile...**

```yaml
name: myapp
recipe: drupal9
```

**...with the equivelant `docker-compose.yml`:**

```yaml
version: "3"

services:
  mysql:
    image: mysql:8.0
    container_name: mysql
    command: --default-authentication-plugin=mysql_native_password
    restart: unless-stopped
    env_file: .env
    volumes:
      - db-data:/var/lib/mysql
    networks:
      - internal

  drupal:
    image: drupal:8.7.8-fpm-alpine
    container_name: drupal
    depends_on:
      - mysql
    restart: unless-stopped
    networks:
      - internal
      - external
    volumes:
      - drupal-data:/var/www/html

  webserver:
    image: nginx:1.17.4-alpine
    container_name: webserver
    depends_on:
      - drupal
    restart: unless-stopped
    ports:
      - 80:80
    volumes:
      - drupal-data:/var/www/html
      - ./nginx-conf:/etc/nginx/conf.d
    networks:
      - external

networks:
  external:
    driver: bridge
  internal:
    driver: bridge

volumes:
  drupal-data:
  db-data:
```


If you LOVE working through the intimate details of your infrastructure, that's great! You probably have a good reason, and Lando can accommodate your needs down to the level of custom Docker/Docker Compose configurations should you need them.

For the rest of us who want to spend our time at the application layer, the work Lando does behind the scenes to smooth out the knobby corners of Docker will be immediately welcome.


## 2. Lando Turns Process Into Code.

> **"So Lando just does local development?"**

Lando doesn't just manage your infrastructure, it also manages the processes your team uses to develop, test, and deploy your applications.

If you've used one of the Lando recipes for Platform.sh, Pantheon, Amazee.io, Acquia, or other hosting platform partners, you might be familiar with the commands `lando pull` and `lando push`. These are great examples of ways that Lando can help automate your development process with these hosting platforms. `lando pull` is a straw that any of your team can use to suck down the sweet juices of a project from the cloud. If they get thirsty for new seed data during the project, they can re-run `lando pull` at any time to repopulate their local environment with data, file assets, or code. `lando push` allows them to re-deploy the work.

### Escape the Shell

The fun doesn't stop there. You can customize these commands, make your own tooling commands, and otherwise commit your processes into executable Lando commands. Common examples include creating a `lando test` command to run your testing suites, adding a `lando build` command to build your app's dependencies, wrapping your existing shell scripts, or anything else your heart desires!

Read more about Lando Tooling commands here: [https://docs.lando.dev/config/tooling.html](https://docs.lando.dev/config/tooling.html)

## 3. Lando Isn't Bait.

> **"So is Lando just a shill for [INSERT NAME OF HOSTING PROVIDER HERE]?"**

Most dev tools have a not-so-secret purpose: they're a delicious morsel of bait waiting to lure developers so they can become the koi in a walled garden.

Sure, things may be nice within the confines of the garden. You're hand-fed prized solutions by ever-helpful staff, eager to see you succeed on their platform. However, in the competition to keep you in their garden, many companies create dev tools that make it easy to come into the garden, but harder to get out or move between them.

### Don't Take the Bait.

**"Open source" shouldn't be a lure to bait developers into a single pond.** To be sure, useful dev tools can come out of this approach, and we won't begrudge anyone for trying to make money. But if you're going to bite the bait, make sure you know if the hook underneath has barbs! Understand the ecosystems your dev tools come from. Consider how the organizations in question make money. Do their philosophies and business models align with your goals?

Lando thinks that great open source projects are streams, not fish hooks. As modern web developers with diverse needs, we have to choose various "ponds" to swim in. Selecting hosting providers, CI/CD services, operating systems, IDEs: all of these put us into different pools of solutions. We accept their limits in exchange for the freedom of not having to dig our own swimming hole.

Lando's primary goal is to serve developers by linking those ecosystems together and respecting the realities of modern web development. A cohort of competitor companies sponsor Lando. As of this writing, Acquia, Amazee.io, Blackmesh, Pantheon, and Platform.sh all sponsor Lando to one degree or another, while competing fiercely in the hosting marketplace. This is a strength that will grow with upcoming improvements in Lando 4.0.

## 4. Lando is YOU.

> **"So Lando is just a dev tool?**

Lando is more than a dev tool: it's a movement, a community that's pushing to make the lives of developers better. If anything, Lando the "tool" is a symbol, the flowing flag of the rebellion. The revolution isn't in the flag, but in the hands that hold it aloft.

That's why new people are always hopping on [the Lando Slack](https://launchpass.com/devwithlando), where over 1.6K Lando users gather to ask questions, help each other, and share their favorite moments from Spaceballs.

That's why Lando makes [DevQuest](https://devquest.lando.dev/), a podcast solely dedicated to Lando users and others who are trying to liberate themselves through their adventuring in the tech world.

It's why individual developers and companies [contribute to the Lando project.](https://github.com/sponsors/lando) and why Lando 4.0 will reduce the barriers to contributing code while increasing the possibilities of what Lando can do.

### Developers of the World Unite

<img style="float:right; margin: 20px; object-fit:cover; border-radius:50%;" src="/images/LandoAlliance.jpg" alt="Lando liberating developers fist in the air picture." />


Ultimately, Lando as a technology will become irrelevant, but the Lando community and its spirit will survive far longer than any dev tool. We can't be solely focused on solving problems like local development, build automation, testing, deployment. We need to stay attuned to the broader context of our work, to the changing realities of web development. We need to find more ways to not only allow ourselves to thrive within the tech world, but to help others enjoy its fruits and avoid its dangers.

Lando started because a couple of developers wanted to free their teammates from drudgery. Today it's expanded to help thousands of developers get more work done and collaborate more easily. With our power united, tomorrow we could elevate thousands of new developers into creative, well-compensated careers.

A better world is possible for all developers. Can we build it together?
