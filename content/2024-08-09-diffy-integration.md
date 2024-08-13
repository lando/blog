---
title: Using Diffy with Lando
byline: Visual regression testing for your Lando website
blog: true

path: 2024-08-09 12:00:00
updated:
  timestamp: 1723231659000

author:
  name: Yuri Gerasymov
  pic: https://gravatar.com/avatar/42d7cb4fbe19a308cfd9d67303aeaa57
  link: /blog/tag/yuri-gerasymov.html
  location: Vancouver BC

tags:
  - lando
  - Yuri Gerasymov
---

**NOTE: Lando is not affiliated with and does not receive compensation from Diffy, but we do think it's a cool tool and hope Yuri's post helps Lando users who are curious about visual regression testing.**

[Diffy](https://diffy.website) is a visual regression testing tool that allows you to take screenshots of your website and compare them so you know what pages changed because of your latest code update. It is a great way to validate your updates, theme changes, or any other changes that might affect your site.

Previously, you needed to have a publicly available website where Diffy could take screenshots. But now, it is possible to take screenshots from your local Lando environment and compare them with screenshots from your Staging or Production environments.

To do that, you need to take a few small steps.

### Add a snippet to your `.lando.yml` file

You need to add
```yaml
services:
  diffy:
    type: compose
    webroot: .
    build:
      - rm -rf /app/.diffy-worker
      - mkdir -p /app/.diffy-worker
      - cd /app/.diffy-worker && wget -qO- https://github.com/DiffyWebsite/diffy-worker/archive/refs/heads/main.tar.gz | tar xz --strip-components=1
      - cd /app/.diffy-worker && npm install
    services:
      image: diffywebsite2/screenshot-worker:0.0.2
      command: app
tooling:
  screenshot:
    service: diffy
    cmd: cd .diffy-worker && node diffy-screenshots --url=https://diffy-marketing.lndo.site --screenshot-name=lando
```

Once you run `lando restart`, you will get a new container in your setup, and Lando will download the code of the Diffy worker for taking screenshots.

Remember to replace `diffy-marketing.lndo.site` with whatever host is of your local website.

### Configure the worker

You need to have `.env` file inside of `.diffy-worker` directory. We recommend you to copy it from `.env.example` and set `DIFFY_API_KEY` and `DIFFY_PROJECT_ID` variables.

### Run the screenshots

Once worker is configured, you are welcome to run `lando screenshot`. Thi will take screenshots from your environment and upload them to Diffy for future comparisons.

Here is a video walkthrough of setting up a project in Diffy and running screenshots from the local website.

<div style="position: relative; padding-bottom: 64.5933014354067%; height: 0;"><iframe src="https://www.loom.com/embed/780b4a107bcb48f7b5aa6d9fc9810184?sid=3e2d86f8-7603-4860-99e9-5c34a5b3e0fb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
