---
layout: post
title: "Changing Default Strapi Media Uploader"
date: 2020-07-19 -0400
categories: youtube
author: Yuliy
image: "assets/images/youtube/strapicloudinary.png"
---

Strapi is an amazing headless CMS that works particularly well with Static Site Generators such as Gatsby or Next. Unfortunately, the way I like to deploy it (with MongoDB to Heroku) it requires a third party image hosting solution, so that Heroku doesn’t delete the uploaded images. Thankfully, changing the default media uploader in Strapi is fairly simple. We basically only need to do two things: install a plugin and add a config file.
In terms of our media storage providers the three more popular choices are Cloudinary, AWS and Google Cloud Storage. Since the way they are installed are pretty identical, I will first show you how to setup Cloudinary and then tell you how the installation process differs for other two.

P.S Here is the [video of me setting it up](https://www.youtube.com/watch?v=NnOng-on7cQ)!

## Cloudinary

Before we start you want to make sure to go to [Cloudinary website](https://cloudinary.com/) and create an account. Everything we want will be displayed right on your dashboard: _cloud name_, _api key_ and _api secret_.

First, we want to install the strapi-provider-upload-cloudinary plugin with npm (or yarn).

    npm i strapi-provider-upload-cloudinary

Secondly, create a settings file to let Strapi know that we want use Cloudinary as our default upload method. In the extensions folder we want to create a folder called upload, in which create a folder called config, in which we create a settings.json file. That was a lot. Your path should like this: _extensions/upload/config/settings.json._

In here we paste the following:

    {"provider": "cloudinary",
    "providerOptions": {
    "cloud_name": "YOUR CLOUDINARY CLOUD NAME",
    "api_key": "YOUR CLOUDINARY API KEY",
    "api_secret": "YOUR CLOUDINARY API SECRET"}}

Go ahead and paste your values.

Normally you would want to use environment variables to hide the API keys, but I’m not overly concerned about this random setup. But if you are pushing a real production app, you should probably hide those keys.

And that is it. Now you push those files to Heroku and upload your media with Cloudinary.
Now we have Cloudinary as our default image uploader. Now remember, if you want to use AWS or Google Cloud Storage the setup method is almost identical and I will show you how to do that, in short, bellow.

## AWS

### Install strapi-provider-upload-aws-s3

    npm i strapi-provider-upload-aws-s3

### Here is the config for the _settings.json_

    { "provider": "aws-s3",
    "providerOptions": {
    "accessKeyId": "YOUR AWS IAM ACCESS KEY",
    "secretAccessKey": "YOUR AWS IAM SECRET KEY",
    "region": "YOUR S3 BUCKET REGION",
    "params": {
    "Bucket": "YOUR S3 BUCKET NAME"}}}

## Google Cloud Storage

### Install strapi-provider-upload-google-cloud-storage

    npm i strapi-provider-upload-google-cloud-storage

### And here is the config for the settings.json

    {"provider": "google-cloud-storage",
    "providerOptions": {
    "serviceAccount": "YOUR GCS SERVICE ACCOUNT JSON",
    "bucketName": "YOUR GCS BUCKET NAME",
    "baseUrl": "https://storage.googleapis.com/YOUR GCS BUCKET NAME"}}

And that is it!

Keep Learning!
