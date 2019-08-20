---
layout: post
title: 'Setting Up Free Hosting with Netlify'
date: 2019-08-15 12:00:00 -0400
categories: webdev, hosting, netlify
author: Yuliy
image: 'assets/images/setting_up_free_hosting_with_netlify/netlify_home.png'
---

&nbsp;&nbsp;&nbsp;What if I told you that you, as a complete beginner, can host your static websites **for free**?
In this quick article I will guide you through hosting your first website using Netlify. This is a fantastic way to host demos of your projects (thats how I use it), static sites for your clients or even your portfolio! Absolutely free! That is where this very blog is hosted!

**Let’s begin!**

&nbsp;&nbsp;&nbsp;First things first, we need to go to <https://app.netlify.com/> and login using one of the four options: GitHub, GitLab, BitBucket or by Email. I strongly suggest that you login with one of the first three options, since we will be using one of these to host our website. In case you don’t use git...PLEASE START! Learning the basics of git and version control will help you tremendously in your webdev career. However, if you are, for whatever reason, still strongly opposed to getting one of these accounts, don’t worry: Netlify also provides a way to just dump your static assets (your HTML, CSS and JS) and be done with it.

&nbsp;&nbsp;&nbsp;Once you’re logged in, spend a couple of minutes clicking through different tabs. Netlify offers a lot more than just free hosting. Among other things they have recently presented Netlify Dev, a powerful tool for local development and Netlify Analytics, a great way to gather data about visitors on your site! Allright, back to hosting! Here we have two options:

**Option number One**: If you have a GitHub / GitLab account we press the “New site from Git” button. After that, we choose our Git provider (in my case GitHub) and then choose the repository where you have the files for your project (If you don’t have a repo with some html and css, just quickly throw something together now!).

**Option number Two**: If you don’t have a Git account or don’t want to bother with creating a repository now, you can just drag the folder with your static assets to the grey faded area.
![Hosting on Netlify without a Git account](/assets/images/setting_up_free_hosting_with_netlify/no_git.png)

&nbsp;&nbsp;&nbsp;For a basic deploy we don’t need to change any of the settings on the deploy settings page. However, if you have a separate folder you want to use for build purposes (i.e build or dist) make sure that you change this value in the Publish Directory field. Likewise, if you’re using a static site generator or another build tool, make sure that you input the appropriate command. Ready to deploy? Press the deploy button aaand… that’s it! It usually takes Netlify only a couple of moments to deploy a simple static website. However, if your build process is more sophisticated, it might take a couple of minutes.Refresh the page and if your link with a crazy domain name turned green, congratulations! Your site is deployed and ready to view.

**BONUS: Form submissions!**

&nbsp;&nbsp;&nbsp;A common feature of many static websites are contact forms. While Netlify does deploy static websites, it also offers a pretty cool way to deal with your contact form submissions. Be warned though, the free tier is limited to a 100 submissions a month, so if you think you’ll need more you will need to pay (or look for another solution like Formspree). All you need to do to start receiving submissions is to add `name` attribute and `data-netlify="true"` to the `<form>` tag, as well name attributes to all your inputs. Netlify will use these names to determine what it will call the form entries in the Netlify app interface. If you want more information about spam filtering, ajax form submissions and other more advanced stuff, I suggest looking at the Netlify docs [here](https://www.netlify.com/docs/form-handling/).

Now I am officially done. Thanks for reading.
Till the next time. Keep Learning!

_Yuliy_
