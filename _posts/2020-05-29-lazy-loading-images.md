---
layout: post
title: "Lazy Loading Images"
date: 2020-05-29 -0400
categories: optimization
author: Yuliy
image: "assets/images/lazy_loading/front.jpg"
---

What makes the websites and webapps, that we spend days and nights creating, run slower than we are expecting? More often than not it’s all that extra content, like images, which are often loaded outside of field of view! One of the best ways to handle offscreen images (or other media) is lazy loading.

### So, what is _lazy loading_? Let’s consult [wikipedia](https://en.wikipedia.org/wiki/Lazy_loading):

> Lazy loading (also known as asynchronous loading) is a design pattern commonly used in computer programming to defer initialization of an object until the point at which it is needed. It can contribute to efficiency in the program's operation if properly and appropriately used.

Umm...okay. All it really means is that things are only going to be loaded when they are needed, and in our case the things are images and they are needed when they appear in our browser window. And it’s not just the speed of the webpage we should be concerned with. Think of the mobile users! The amount of data and processing power you can save someone by lazy-loading a huge gallery could be enormous! So now that we know what it is and why we want it, let’s get into how we can achieve it.

## Native lazy-loading

Let’s start with the newest, and, in my opinion, the easiest way to implement lazy loading for our images. Starting with Chrome 76 we can use the loading attribute on img and iframe elements to completely defer their loading.

    <img src="image.png" loading="lazy" alt="…" width="200" height="200">
    <iframe src="https://example.com" loading="lazy"></iframe>

The attribute supports three values:

_Auto_ : the default value. Same as not including the attribute <br>
_Lazy_ : Defer loading of the resource until it reaches a calculated distance from the viewport. <br>
_Eager_ : loads the element immediately, regardless of whether it is visible

Easy, right? There are, however, a couple of considerations. First of all, to prevent the weird movement of the content around the lazy-loaded element it is recommended to specify the height and width of the element. (They will still lazy-load if you don’t specify the dimensions). Secondly, we can’t use the loading attribute for the background images set using CSS (I will mention one way to approach this below). Finally, the support for the feature is somewhat limited. [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Browser_compatibility) is the full list of compatible and incompatible browsers. The bottom line is that, as of now, if you want to lazy-load stuff in IE and Safari, you want to keep on reading.

## Lazy loading libraries

A good combination of ease of implementation and browser compatibility is provided for us in lazy-loading libraries. This option is perfect for people who a) don’t care how lazy-loading works under the hood and b) want a quick solution that also has the necessary degree of browser compatibility.
Now, it would be crazy for me to go over every single library out there. That would be insane. I will however list two that I am familiar with:

[Lazysizes](https://github.com/aFarkas/lazysizes) : a well-maintained lazy-loading library, which uses intersection observer (more on that later). All you need to do is add the class "lazyload" to your images/iframes in conjunction with a data-src and/or data-srcset attribute.

[Blazy](https://github.com/dinbror/blazy) : super lightweight (weighing in at 1.4 KB) library. As with lazysizes, it doesn't need any third party utilities to load, and works for IE7+. It does not, however, use intersection observer and it is no longer being maintained. (Last update dates October 25, 2016).

## The behind the scenes (Intersection observer and event handlers)

If you stuck with the article this long that means you really want to know how the sausage is made. I’m not going to go in depth here, mostly because the article that I am going to link below covers the two technologies with much more understanding than I have in my head. Before the introduction of IntersectionObserver API a couple of years ago, it was more or less common practice to use event handlers like _scroll_ to gauge when elements enter viewport and when to load them. The good guys over at Google have [two great examples](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video#using_event_handlers_the_most_compatible_way) of how the scroll implementation differs from the IntersectionObserver. You can see just how much simpler the IntersectionObserver implementation is. The one drawback of this API is that if you are one of the unfortunate souls who cares about IE support, you will want to use a polyfill. Otherwise the browser support [is great](https://caniuse.com/#feat=intersectionobserver).

## Bonus: CSS Stuff

So, what do we do with those large images that we have from our _background-image_ properties? Because of how the render tree is structured, the browser is only going to load an external resource when it sees that a CSS rule involving it is applied. Basically, the image won’t be downloaded until we need it. All we need is two rulesets, one that would include the _background-image_ property with our placeholder image:

    .background {
    background-image: url("hero-placeholder.jpg");
    }

And the other that loads the image that we want!

    .background.visible {
    background-image: url("hero.jpg");
    }

From here we use Intersection observer to check whether the element is in viewport and add the visible class to the element with the class of background, which will load the image.

That is it for lazy loading. Once again, the articles linked here are really good so maybe read them instead of this one.

Keep learning.
