---
layout: post
title: "My favourite VsCode Extensions"
date: 2020-05-15 -0400
categories: vscode
author: Yuliy
image: "assets/images/favourite_vs_code_extensions/front.png"
---

VS Code has been gaining traction and winning the hearts of developers for a while now. One of
the many (many!) reasons why developers love VS code is the humongous library of user-
developed plugins. Everyone has their top 10, things that they use everyday. Why not share
mine?

## **_Below are some of my favourite VsCode extensions_** :

### 1) ES7 React / Redux / GraphQL / React-Native snippets

If you are working with React, chances are you are already familiar with this one. If you
are not, you are missing out! Not for much longer! This extension provides multitude of
shortcuts for React, React Native, Redux, GraphQL and general JS. What I use this extension
for most of the time, though, is quick generation of components. If you are writing your components
by hand this will save you minutes, and, in the long term, _HOURS_. Generating components is
as easy as typing _rcc_ (for class based component) or _rfc_ (for simple functional component).
Within those two there are also several variations: You want prop types in your class
component? _rpcp_ ! You want arrow functional component with default export? _rafce_ ! For
full list of all the shortcuts just visit the plugin’s page in VsCode. You may think that
remembering all these shortcuts is just not worth it, but trust me, after a little bit they
become second nature.

### 2) Setting Sync

This one is for the folks who often change their devices or just want to be able to have a
way to sync their settings and other VsCode bits. The Setting Sync plugin does just that: it syncs
your settings, key bindings, snippets, extensions and other parts of your VsCode environment.
The installation process is pretty straightforward: after the installation the plugin allows you to
login with your github (by the way, that is where your settings will be stored). From there you
can upload, download and reset your settings. If you are like me and like backing up your stuff,
one day this extension will save you a ton of time.

### 3) Live Server

Live server is an extension that provides us with the ability to have a local development
server for static websites with a live browser reload. The usage is simple: after installing the
extension you just right click on your html and choose Open with Live Server (alternatively you
can press the go live button on the bottom right). You are good to go!

### 4) Prettier

Oh, what would I do without Prettier. Prettier is a code formatter which enforces a
consistent style by parsing your code and reprints it with according to its own rules. In short, it makes your
ugly, unreadable, spaghetti of a code and makes it readable by other humans. The extension
supports a ton of languages, including JS, Typescript, and CSS. All you need to do to make it
work is to include a few lines of code in your VSCode config to make sure that Prettier is chosen
as a default formatter. From there you have a few usage options: using the command palette
(the long way) or taking a few extra steps to enable format on save, which makes the
formatting fast and convenient. The extension is customizable and all the options can be found
in the [docs](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

### 5) Bracket Pair Colorizer

This one is super straightforward and nice to have. This extension makes your matching
brackets easy to identify by making them the same colour. Fun! You can even configure which
colours you would like to use! More fun! Obviously they have more in depth configs and stuff,
but I am ~~not~~ ashamed to admit that it works great out of the box and I have never had to
tinker with any of it. P.S: The devs have released a v2 of this great extension, which promises
better speed and accuracy, so maybe go with that one.

### 6) Auto Rename Tag

Another self explanatory extension! You know how you need to turn that h1 into h2, or that div
into a section, and you have to move back and forth between the opening and the closing tags?
This is especially frustrating if you have a ton of code in between and you just get lost in the
divs and start questioning why are you even doing this? One time I spent hours debugging a
weird padding issue in the header, which turned out to be a heading with an h1 opening tag
and an h2 closing tag (No warnings in VsCode or the console). Sad story aside, this extension
has proved most useful to me and saved a bunch of time. I do need to mention two important
things: One, there are a bunch of people in reviews of this extension who claimed that there
are bugs and that it did not work for them. As always, YMMV. Two, the VsCode team has been
working on the similar feature for some time, and in the March 2020 update (after some trial
and error) they have updated the feature and you can enable it by running the command _On
Type Rename Symbol_ on an HTML tag or Turning on the _editor.renameOnType
setting_ and move the cursor to an HTML tag. HOWEVER, as of now this feature only
works in html, so if you need to work in XML or JSX the extension is the way to go.

### 7) Live Sass Compiler

If you were ever interested in using SASS on a quick, small project, but did not want to waste
time with figuring out the whole compiling thing, this extension is for you! Live Sass Compiler is
a VSCode Extension that helps you to compile/transpile your SASS/SCSS files to CSS files in real
time with live browser reload. All you need to do to start compiling Sass is to press the _Watch My
Sass_ button on the bottom left and you are ready to go! By default the extension will generate your
css file along with the css map file (you can turn off map generation in settings). While you are
tinkering with settings you can also change the where you want your css to be generated, customize
the extension names (.css or .min.css), exclude folders and even add autoprefix support.

### 8) Git Lens

Last, but not least is a git-related extension that is ESSENTIAL when working on a team project. I
can describe it all I want, but it is best described by its devs:

> GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a
> glance via Git blame annotations and code lens, seamlessly navigate and explore Git
> repositories, gain valuable insights via powerful comparison commands, and so much
> more”.

Yeah, you read that right! You will be able to clearly see who wrote that awful
line of code that broke your project and that you had to spend hours finding and fixing.
Configuring the extension is extremely easy as it comes with its own interactive setting
editor which can be accessed via GitLens: Open Settings (gitlens.showSettingsPage)
command from the Command Palette. For the full list of goodies visit [the github page](https://github.com/eamodio/vscode-gitlens) and finally end the blame games. Hopefully.
