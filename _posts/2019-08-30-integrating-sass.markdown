---
layout: post
title: 'Upgrading basic setups with Sass'
date: 2019-08-30 -0400
categories: general, sass, css
author: Yuliy
image: 'assets/images/integrating_sass/front.png'
---

&nbsp;&nbsp;&nbsp;Web Development beginners are often overwhelmed with the number of technologies, languages and ways of doing one single thing. When you get acquainted with the basic routine of “Write HTML, style it with some CSS”, beginners are often lost and don’t know how to properly progress, without skipping over something essential. In this short article I will explain why, in my opinion, working with Sass and Sass-based templates is the essential next step for any web development beginner.

&nbsp;&nbsp;&nbsp;Learning Sass is a great next step after you learn the basics of HTML and CSS. Sass is a CSS preprocessor that is interpreted, or compiled into regular old CSS. Writing your styles using Sass instead of simple CSS is not that much more complicated, but opens a window into a whole new world of possibilities. If you want to know more about starting with Sass I would recommend watching [this](https://www.youtube.com/watch?v=roywYSEPSvc&t=) video by Gary Simon or [this one](https://www.youtube.com/watch?v=Zz6eOVaaelI&t=) by DevEd.

### So why use Sass as a teaching tool? Three reasons:

- First experience working with a “bigger” project
- Teaches modularity using partials
- Gives a feel for component based front end

&nbsp;&nbsp;&nbsp;Graduating from working with one HTML and one CSS file may seem like a daunting task. However, when your project grows and you need to style multiple pages that include multiple components on each page having everything in one css file is extremely confusing. Here’s where good old Sass has our back! Built into Sass are partials, a way to split your .scss files into one central file and import other files into it. This makes maintaining your CSS real easy and you can take on bigger projects without the fear of having to maintain a giant styles.css file. This leads us nicely into the next part!

&nbsp;&nbsp;&nbsp;Modularity in front-end programming is an important concept to master and implementing Sass into your project is a good first step towards the goal. As I already mentioned, using partials helps you to maintain clarity in a bigger project by splitting your code into parts. But how do we know which way to split those parts? Your first instinct may be to split your Sass partials based on the amount of pages you have and keep separate styles for separate pages (i.e \_about.scss, \_contact.scss etc). Even though everyone does this and a lot of people still prefer this method, it will be immensely helpful for your future career to shift into a component-based styling mindset.

&nbsp;&nbsp;&nbsp;The modern front-end is ruled by JS frameworks (React, Vue, Angular etc) and the way these frameworks handle the styling dictates how we think about the structure of our HTML and CSS. Modern frameworks split the structure of the website or a webApp into components, separate chunks of HTML and CSS, which are reusable, modifiable and easily maintainable. To that end, there exist many methodologies and naming conventions for components, such as [BEM](http://getbem.com/). For example, in any given project you would have your header as a separate component, that you would be able to reuse on all your pages without having to copy the styling to all your pages. But Yuliy, what if I want to change the header styles on my contact page? Wouldn’t I have to copy all of my styles AND add the new ones? With the magic of Sass and @extend you don’t have to repeat yourself: you just extend your existing component with whatever modifier you need (width, height, something else entirely) and now you have a reusable component! [Here](https://medium.com/objects-in-space/objects-in-space-f6f404727) is a great read on the topic of implementing BEM with Sass.

### Conclusion:

&nbsp;&nbsp;&nbsp;Sass is amazing. For what is a very small price of a couple of evenings spent reading the docs, Sass offers an amazing range of functionality and is a great stepping stone into more complex ideas. In this short read I have basically covered only two amazing Sass functions \_partials and @extend, yet you should already be excited! Sass features an amazing variety of other useful tools, such as variables, nesting and mixins.

## Resources:

### [Official Sass Documentation](https://sass-lang.com/documentation)

### [CSS: The Definitive Guide](https://amzn.to/2ZEnstq) <br>

### [CSS: The Missing Manual](https://amzn.to/2ZDys6q)
