---
layout: post
title: "Fake API for a Real FrontEnd"
date: 2020-06-29 -0400
categories: api json
author: Yuliy
image: "assets/images/fake_api/front.png"
---

When you are starting a front-end project, whether for learning, tutorials or just prototyping, there is sometimes a need for some external data. What are the choices? Well, we could write our own API first, but let’s be real, you’d rather just fetch something nice and premade. That is where [JSON placeholder](https://jsonplaceholder.typicode.com/) comes in: free, easy to use REST API for all your testing purposes. Stick around till the end, where I’ll show you another service (by the same guys) that allows you to customize your fake API data.

## How to use JSON placeholder?

There is no need to install anything. All we need is to make a request (GET, POST, PUT, PATCH, DELETE) using either fetch or axios (or whatever you make your API requests with).

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json))
```

Boom! That’s it. You have your fake data.

JSON placeholder provides us with six resources: posts, comments, albums, photos, todos and users. They are all structured a little differently, so look them up and see what suits you.

One last thing. While JSON placeholder allows you to make PUT and DELETE requests to change or delete data, you won’t actually be deleting anything. Because they won’t let you.

Do you want to have a fake API that you CAN change and customize and mess around with? Let’s talk about JSON Server!

## What is JSON Server?

Now if you want your data to be a little bit more custom, JSON server is the answer. JSON server utilizes a .json file that you fill with your data, which then acts as your own little API!

We start by installing json server with npm:

```
npm install -g json-server
```

Creating our database file (db.json) and filling it with some JSON stuff:

```
{
"posts": [
{ "id": 1, "title": "json-placeholder", "author": "Yuliy" },
{ "id": 2, "title": "json-server", "author": "John" },
{ "id": 3, "title": "json-json", "author": "Doe" }]
}
```

Starting the “server”:

```
json-server --watch db.json
```

Now if you make a request to your localhost:3000/posts you will get that nice custom data that you created! But wait, there’s more! With JSON server all of your PUT and DELETE requests actually work! Like a real API!

That’s it for me today!

Keep Learning!
