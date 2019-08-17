---
title: Serverless Web Scraper Using Azure Functions
date: 2019-08-16 14:00:00
description: This is an example of how to setup a web scraper using an Azure function.
image: '../images/hunter-haley-s8OO2-t-HmQ-unsplash.jpg'
credit: Photo by Hunter Haley on Unsplash
slug: serverless-scraper
---

Serverless function are great because you don't need to have a server to run some tasks. In this example I will show you how to make a web scraper that will check for new content on a classifieds website [(kijiji.com)](https://kijiji.com) and send emails when it finds something new. I have setup a cronjob on a server to trigger my functions using a curl command.

We will be using [Airtable](https://airtable.com) for storing data, and [Mailgun](https://mailgun.com) to send emails.

If you have never [setup an Azure](azure-functions-vscode) function you can follow my example. That post will show you how you can setup an azure Function using VS code.

### Assumptions

* Understanding of JavaScript
* Know how to setup an Azure function
* Understand how to use NPM
* Know the basics of URL GET requests

## Outline

We will be doing the following in this article

1. [Set up web scraper](#setup-scraper-using-cheerio)
2. [Store ad Id in Airtable](#using-airtable)
3. [Send information with Mailgun](#send-emails-with-mailgun)

## Setup Scraper using Cheerio

When you have a blank http triggered Azure function setup we will first work on the setting up the web scraper. We are going to pass in the url of the page that we want to scrape with the request. To do this we are going to use a query parameter in the request url.

eg. `https://the-function-address.com/?url=https://example-url.com`

When we use ? after the initial url it means we are going to pass in some parameters. In this case we are using the parameter url with the value https://example-url.com. In our code we can get this value using `req.query.url`. This will give us the value that we pass in.

```js
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.url {
        context.res = {
            
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass in a URL you would like to scrape"
        };
    }
};
```

## Using Airtable

## Send Emails with Mailgun
