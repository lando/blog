---
title: Lando + Hugo [+ ARM]
metaTitle: Lando + Hugo [+ ARM] | Lando
description: Developing a static Hugo site with Lando and a team on varying chipsets. 
summary: Developing a static Hugo site with lando and a team on varying chipsets.
date: 2021-08-27 12:30:00

author: Geoff St. Pierre
pic: https://www.gravatar.com/avatar/e103c2a2a8f8caf5848b38b80422cdd9
link: https://twitter.com/serundeputy
location: Lando Alliance East

tags:
  - lando
  - devops
---

tl;dr Developing a static Hugo site with Lando and a team on varying chipsets.

## 🔧 Use Case 🔧

Our team is made up of developers in multiple locations on Linux, Intel Macs, M1 Macs, etc. Our documentation is written using the [Hugo](https://github.com/gohugoio/hugo) static site generator. Hugo is great, but it was not long after rollout that various developers inside and outside of the documentation team were running into local dev stack dependency nightmares 😱.

## 🔥 Lando to the Rescue 🔥

Our first step was easy: we burned down all those different versions of `node`, `npm`, `hugo` cli etc and put A L L the necessary tooling into the dev stack managed by Lando.  But we still had the different underlying chipsets to deal with! The magic bullet came by building the `hugo` cli from source via `go install --tags extended`.  The `extended` part is what allows us to watch and compile SASS and rebuild new content.

```yaml
    build:
      - rm -rf $HOME/src
      - mkdir -p $HOME/src
      - cd $HOME/src && git clone https://github.com/gohugoio/hugo.git
      - cd $HOME/src/hugo && go install --tags extended

```

By building form source, this allows Go to detect the chipset and build the right version of `hugo` cli per developer.

## 🛋️ Living the Easy Life 🛋️

Now developers are living the dream:

```bash
git clone REPO
lando start
lando serve
```

Done.

## ⏺️  Resources ⏺️

Here is the full [`.lando.yml`](https://github.com/serundeputy/hugo-lando/blob/mainline/.lando.yml) file.

Happy coding!
