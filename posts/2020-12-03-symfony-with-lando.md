---
title: Symfony Development with Lando
metaTitle: Symfony Development with Lando | Lando
description: It's official! Symfony support has been baked into Lando!
summary: Learn how easy it is to develop locally with Symfony and Lando
date: 2020-12-03
original:

author: Mike Milano
pic: https://s.gravatar.com/avatar/78e2002b834641bd69454e28f729ce12
link: https://github.com/mikemilano
location: US

tags:
- lando

feed:
  enable: true
  author:
    - name: Mike Milano
      email: alliance@lando.dev
      link: https://github.com/mikemilano
  contributor:
    - name: Mike Milano
      email: alliance@lando.dev
      link: https://github.com/mikemilano
---

As of version `3.0.22`, Lando ships with a Symfony recipe which makes
standing up a new site, or running an existing site, pretty easy.

In this article, we'll setup a new Symfony application and use Symfony Console
to create a home page controller.

> Note: In the future, anytime you wish to start a new Symfony site with Lando, you can
follow the [Getting Started](https://docs.lando.dev/config/symfony.html#getting-started)
documentation.

## Create a New Site

To get started, let's create a directory and initialize the Symfony recipe.

```bash
mkdir myapp
cd myapp

lando init --source cwd --recipe symfony --webroot public --name myapp
```

You should now have a `.lando.yml` file which should look like this:
```yaml
name: myapp
recipe: symfony
config:
  webroot: public
```

Next we'll use `composer` to create the Symfony app based on `symfony/website-skeleton`.

```bash
# Create the app
lando composer create-project symfony/website-skeleton tmp && cp -r tmp/. . && rm -rf tmp

# Install desired dependencies
lando composer require annotations doctrine logger maker profiler twig var-dumper
```

At this point our codebase has been created and we're ready to start the stack.

```bash
lando start
```

That command should result with information related to your new environment. It
should look somethingn like this:

```
 NAME            myapp                                               
 LOCATION        /Users/mmilano/projects/myapp
 SERVICES        appserver, database                                 
 APPSERVER URLS  https://localhost:32826                             
                 http://localhost:32828                              
                 http://myapp.lndo.site/                             
                 https://myapp.lndo.site/               
```

## Using Symfony Console

Lando provides tooling which allows you to run Symfony Console within
the context of your Lando environment.

Instead of `bin/console` you will use `lando console`.

Let's create a home page by using the `maker` bundle.

```bash
lando console make:controller DefaultController
```

This creates a new file: `src/Controller/DefaultController.php`.

If you would like this to be your home page, modify the Route annotation
path from `/default` to `/`.

```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/default", name="default")
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}
```

## Setting up the Database

You can get database credentials for a Lando environment by running `lando info`.

In our case, the credentials are as follows:
```
host: database
user: symfony
pass: symfony
dbname: symfony
```

Now add these values to the `DATABASE_URL` entry in your `.env` file: 
```
DATABASE_URL="mysql://symfony:symfony@database:3306/symfony?serverVersion=5.7"
```

Using the database is beyond the scope of this article but the database already
exists and Doctrine related console commands should work as they do with any other 
Symfony environment.

## What Next?

This demo is pretty simple, but Lando is extremely flexible and can accommodate 
much more complicated stacks. For instance, if your application requires
Redis, you can reference Lando's [Redis Documentation](https://docs.lando.dev/config/redis.html#supported-versions)
and add it to `.lando.yml`. Once you change the Lando file, running `lando rebuild`
will rebuild the stack with Redis. `lando info` will reveal the Redis connection info.

You're not limited to the services Lando lists. If you have less common or completely
custom services, use the [Compose](https://docs.lando.dev/config/compose.html) service
to define any image as you would with Docker Compose. 

## Community Support

If you end up stuck or need help with the more complicated configurations, join
our [Slack Channel](https://launchpass.com/devwithlando) where Lando maintainers
and members of the community help each other every day.

Join and let us know how it goes!
