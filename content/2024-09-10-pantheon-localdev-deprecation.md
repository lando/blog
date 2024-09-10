---
title: Pantheon LocalDev Deprecation
byline: Goodbye to an old friend, hello to the raw power of Lando.
blog: true

path: 2024-09-10 12:00:00
updated:
  timestamp: 1726008908

author:
  name: Alec Reynolds
  pic: https://www.gravatar.com/avatar/f274dbe2c9fbaac8339c01d918ba50b5
  link: ./../tag/alec-reynolds.html
  location: Lando Alliance West

tags:
  - lando
  - Alec Reynolds
---

## Pantheon's LocalDev is Officially Deprecated

On June 30, 2023, Pantheon discontinued support for its built-in LocalDev feature. If you're a die-hard LocalDev user, have no fear: we’re here to help you with the transition.

## What Should I Use Instead?

If you're reading this and _haven't_ tried Lando, you should! LocalDev was, at its heart, a GUI wrapper around Lando functionality. Using Lando directly gives you access to its full, raw power. 

Lando is available on Linux, Mac OS, and Windows. It allows developers to quickly spin up the services and tooling needed to work on development projects. Lando helps developers assign dependencies on a per-project basis with config tooling that can live in a project’s git repository. 

Lando has “recipes” - a feature consisting of combinations of commonly used services and tooling to enable specific use cases. There is one specifically designed for sites hosted on the Pantheon Platform. [Get Lando](https://lando.dev/download/)!

Pantheon also provides an [installation guide](https://docs.pantheon.io/guides/local-development/lando-wordpress) for users to reference. 
