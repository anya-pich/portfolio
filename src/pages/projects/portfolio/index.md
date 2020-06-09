---
title: "Portfolio"
date: "2020-06-08"
posttype: "project"
summary: "Gatsby, React, JSX, CSS, GraphQL, Markdown, Surge"
---

With this personal website, I've set out to create a home for my coding projects, musings and experimentations. This is also a place where you can find links to my other online profiles or get in touch with me [directly](http://annapi.ch/contact).

### Motivation

I really wanted to play around with Gatsby and GraphQL! They both received several mentions when I asked software engineers in the industry about new tech they were most excited about, so I just had to find out for myself by trying it out.

### Process

I started by going through all the introductory tutorials available on the Gatsby website. They're fantastic and I highly recommend checking them out - like much of Gatsby's documentation they're easy to follow, thoroughly illustrated with examples and set you up with all the basics that you'll need in order to get your project off the ground. Check them out [here](https://www.gatsbyjs.org/tutorial/).

Gatsby is a static site generator built on top of React, that uses GraphQL to manage data throughout the site, to great effect. For example, it can convert Markdown documents into webpages with auto-generated url routes and a linked index list. In addition to making setup quick and easy, the way that Gatsby builds and serves static sites made up of only the critical HTML, CSS, data and JavaScript, means sites also load quickly and are easier for crawlers to access for search engine optimization.

Gatsby tutorials cover the basics of GraphQL, but I wanted to learn more and after some trial and error found [How To GraphQL](https://www.howtographql.com/) to be extremely helpful in explaining what GraphQL is, how it works and why it's better than RESTful routing - reducing the transfer of redundant data and making it easier to handle the response in a multitude of applications.

### Features

Thanks to Gatsby's markdown magic my website has no back end! All the posts are generated from markdown documents at build time. I have GraphQL queries set up to parse any new markdown documents and set them up with an HTML template, auto-generated slug and index link.

My contact form is powered by [FormSpree](https://formspree.io/) which was as easy to [set up](https://www.gatsbyjs.org/docs/building-a-contact-form/#formspree) as pointing the form submit action to their API, deploying, and following the instructions that arrive in your email inbox once a form is first submitted.

### Lessons Learned

Working on this project made me realize just how much I'd come to rely on Bootstrap in previous projects. I became rusty with CSS and this was an opportunity to revisit fundamentals as well as learn some new CSS concepts/applications. Gatsby tutorials leaned heavily on in-line styling, so I started with almost exclusively in-line styling but ended up refactoring to modular CSS in order to facilitate media queries.

### Build Status

This is a work in progress. Please report any bugs and suggestions [here](http://annapi.ch/contact).

#### To Do:
* Refactor CSS for clarity and efficiency
* Improve responsive design
* Add about page

#### Tech Used:
* [Gatsby](https://www.gatsbyjs.org/)
* [GraphQL](https://graphql.org/)
* [React](https://reactjs.org/)
* [React-icons](https://github.com/react-icons/react-icons)
* JavaScript, JSX, CSS

#### Design Inspiration:
* [Splash image](https://medium.com/about)
* [Typography](http://hellohappy.org/beautiful-web-type/)
* [Colors](https://www.thenordics.com/tool/color-nordic-yellow)
* [Design](www.theschooloflife.com)