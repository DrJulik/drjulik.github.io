---
layout: post
title: "Friday Quicktip: Google Analytics in Gatsby"
date: 2020-06-20 -0400
categories: quicktip
author: Yuliy
image: "assets/images/gatsby_analytics/front.png"
---

The last couple of weeks I have invested a good amount of time into the exploration of Gatsby, an amazing React-based SSG. One of the things that came up during this exploration is the integration of Google Analytics. Just like with a lot of things in Gatsby the problem is solved with a plugin, which, in this case, is _gatsby-plugin-google-analytics_. Easy, right? Except, when it doesn’t work.

## Two quick things to fix the Gatsby google analytics issue

### 1) Remove the unnecessary options!

The example config that is provided [on the plugin page](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/) is cool and feature rich, but it may not work! I recommend removing ALL options except for tracking id and head, testing it, and then, if you absolutely need them, include other things one by one. Your config entry should look like this.

    module.exports = {
    plugins: [
        {
        resolve: `gatsby-plugin-gtag`,
        options: {
            trackingId: `UA-XXXXXXXX-X`,
            head: false,
            },
        },
    ],
    }

### 2) Move the plugin to the top of your plugin list

The other thing that helps is moving the plugin code up to the very top of your plugin list, so that it loads before all the other stuff.

And that is pretty much it.

**P.S**: If the plugin still does not work, try gatsby-plugin-gtag. It does pretty much does the same thing, but instead of adding deprecated analytics.js script, it uses gtag.js.

_Keep learning!_
