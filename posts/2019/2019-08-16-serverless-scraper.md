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

index.js
```js
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.url {
        context.res = {
            //Stuff goes here
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

Cheerio is an open source packages that can be used to scrape information from an html page. It uses a jquery syntax for querying. So if you are familiar with that this will be easy. We will start by adding the package.

`npm install cheerio`

To get the html from the site we will use request-promise. This is an easy to use promise base html fetcher.

`npm install request-promise`

Then we will add these to our index file.

index.js
```js
const cheerio = require("cheerio")
const request = require("request-promise")

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.url) {
        //These are the options for the request
        let options = {
            uri: req.query.url,
            transform: body => {
                //After the request comes back we pass it through cheerio
                return cheerio.load(body)
            }
        }

        // This is where we make the request to fetch the page
        // The $ is a cheerio object that we will use to search
        // for elements
        const $ = await request(options)
        context.res = {
            //This is where the successful response goes
            body: 'It  was successful'
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass in a URL you would like to scrape"
        };
    }
}
```

Now we can use the $ to find elements in a page. This is done with a jquery like syntax. In our case we are going to find all of the regular ads on a page. They are identified with the class 'regular-ads'. So to find all the elements we use the following.

```js
const ads = $('.regular-ad')
```

This gives us an array of elements where the class is regular-ads. We can then grab information from these elements. To find a elements text we just need to use the text() function.

eg. `ad[0].text()` will return all of the text in the first ad.

We are going to gather some information for each of the ads scraped from the page. To do this we will make an array and then loop through the ads and gather the information for each ad.

```js
let newAds = [];
ads.each((i, ad) => {
    newAds.push(
        {
            title: $(ad).find("a.title").text(),
            id: $(ad).attr("data-listing-id"),
            price: $(ad).find(".price").text()
        }
    )
})
```

## Using Airtable

In this example we don't want to get all of the ads every time we scrape the page. This means that we need to store the last ad every time we run the function. To store this data we are going to use a service called Airtable. It is basically an online spreadsheet with a good api. To do this you will need to setup an airtable account and new table. In the table we will need to add the columns url and lastId.

For our function we will need to import the Airtable apk.

```js
npm install airtable
```

Then we can add it to the top of our function.

```js
const Airtable = require('airtable')
```

Now we will make a function to get the last Id from the table and if it doesn't have a record we will create one.

```js
LastId = async () => {
    const apiKey = {your-api-key-from-airtable}
    let base = new Airtable({ apiKey }).base("{base-id}")

    const select = `({url} = "${url}")`;

    let row = await base("test-scraper")
        .select({
            view: "Grid view",
            filterByFormula: select,
        })
        .firstPage()

    if (row.length) {
        return row[0].fields.lastId
    }

    createNewRow(url)
    return
}
```

We will now create a function to add a new row if one was not found. This will set the base for adding a new id when we go through the ids.

```js
createNewRow = (url) => {
    const apiKey = {your-api-key}
    let base = new Airtable({ apikey }).base("{base-id}")

    base("test-scraper").create(
        {
            "url": url
        }
    )
}
```

This is our total function so far.

```js
const Cheerio = require("cheerio")
const Request = require("request-promise")
const Airtable = require("airtable")

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.url) {
        //These are the options for the request
        let options = {
            uri: req.query.url,
            transform: body => {
                //After the request comes back we pass it through cheerio
                return Cheerio.load(body)
            }
        }

        // This is where we make the request to fetch the page
        // The $ is a cheerio object that we will use to search for 
        // elements
        const $ = await Request(options)
        const ads = $('.regular-ad')
        let newAds = [];
        ads.each((i, ad) => {
            newAds.push(
                {
                    title: $(ad).find("a.title").text(),
                    id: $(ad).attr("data-listing-id"),
                    price: $(ad).find(".price").text()
                }
            )
        })

        let lastId = LastId(url)

        context.res = {
            //This is where the successful response goes
            body: JSON.stringify(newAds)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass in a URL you would like to scrape"
        }
    }
}

const LastId = async(url) => {
    const apiKey = 'api'
    let base = new Airtable({ apiKey }).base("{base-id}")

    const select = 'AND(url = "' + url + '")'

    let row = await base("{table-name}")
        .select({
            view: "Grid view",
            filteredByFormula: select
        }).firstPage()

    if (row.length) {
        return row[0].fields.lastId
    }

    createNewRow(url)  
    return
}

const createNewRow = (url) => {
    const apiKey = 'api'
    let base = new Airtable({ apiKey }).base("{base-id}")

    base("{table-name}").create(
        {
            url: url
        }
    )
}
```

## Send Emails with Mailgun

When new ads are found we will send those ads to a given email address. To do this we will use a service called Mailgun, which is an api email delivery. You will need to setup an account and get the api key to use this api. You will also need to setup a domain to send from. This can be a sandbox account.

First add the Mailgun dependency

`npm install mailgun-js`

Then add it to our imports at the top.

```js
const Cheerio = require("cheerio")
const Request = require("request-promise")
const Airtable = require("airtable")
const Mailgun = require("mailgun-js")
```

The function to send emails will look something like this. We get the api key and domain for Mailgun from the environment variables. Then we will send the email through Mailgun.

```js
const sendNotifications = (ad, email) => {
    const apiKey = process.env['MAILGUN_API_KEY']
    const domain = process.env['MAILGUN_DOMAIN']

    const mail = Mailgun({apiKey, domain})
    const data = {
        from: 'Kijiji Alerts <test@spencerwallace.ca>',
        to: email,
        subject: 'New Kijiji ad',
        template: 'kijiji-ad',
        "v:title": ad.title,
        "v:link": ad.link,
        "v:price": ad.price,
        "v:image": ad.image
    };

    mail.messages().send(data, function(err, body) {
        console.log(body)
    })
}
```

We will also need to add a second query parameter for our email address that we can pass in. At the top of our index function we will get the query parameter for email.

```js
const email = req.query.email
```

## Complete Function

Here is the full function with everything. It isn't the most elegant function and can be refactored into separate files but for todays purposes we are going to keep it simple.

```js
const Cheerio = require("cheerio")
const Request = require("request-promise")
const Airtable = require("airtable")
const Mailgun = require("mailgun-js")

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const url = req.query.url
    const email = req.query.email

    if (url && email) {
        //These are the options for the request
        let options = {
            uri: url,
            transform: body => {
                //After the request comes back we pass it through cheerio
                return Cheerio.load(body)
            }
        }

        // This is where we make the request to fetch the page
        // The $ is a cheerio object that we will use to search for 
        // elements
        const $ = await Request(options)
        const ads = $('.regular-ad')
        let allAds = ads.map((i, ad) => {
            return  {
                    title: $(ad).find("a.title").text(),
                    link: "https://kijiji.ca" + $(ad)
                    .find("a.title")
                    .attr("href"),
                    id: $(ad).attr("data-listing-id"),
                    price: $(ad).find(".price").text(),
                    image: $(ad).find("img").attr("src"),
                    }
                })

        // Get the last id from airtable
        let lastId = await LastId(url)

        // Gather up all the newAds
        let newAds = []
        // The each function is from the cheerio object
        // return false breaks the loop
        allAds.each((i, ad) => {
            if (ad.id === lastId) {
                return false
            }
            newAds.push(ad)
        })

        if (newAds.length) {
            let newestAdId = newAds[0].id
            saveNewestAdId(url, newestAdId)
            newAds.forEach((ad) => {
                sendNotifications(ad, email)
            })
        }

        context.res = {
            //This is where the successful response goes
            body: JSON.stringify(newAds)
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass in a URL you would like to scrape"
        }
    }
}

const LastId = async (url) => {
    const apiKey = process.evn["AIRTABLE_API_KEY"]
    const base = new Airtable({ apiKey }).base("app6oORsYg8BZk2GE")

    const select = `({url} = "${url}")`;

    let row = await base("test-scraper")
        .select({
            view: "Grid view",
            filterByFormula: select,
        })
        .firstPage()

    if (row.length) {
        return row[0].fields.lastId
    }

    createNewRow(url)
    return
}

const createNewRow = (url) => {
    const apiKey = process.evn["AIRTABLE_API_KEY"]
    const base = new Airtable({ apiKey }).base("app6oORsYg8BZk2GE")

    base("test-scraper").create(
        {
            "url": url
        }
    )
}

const saveNewestAdId = (url, id) => {
    const apiKey = process.evn["AIRTABLE_API_KEY"]
        .firstPage((err, records) => {
            if (err) {
                console.error(err)
                return
            }
            if (records.length === 1) {
                base("test-scraper").update(records[0].id,
                    {
                        lastId: id
                    }, (err, record) => {
                        if (err) {
                            console.error(err)
                            return
                        }
                    })
            }
        })
}

const sendNotifications = (ad, email) => {
    const apiKey = process.env['MAILGUN_API_KEY'];
    const domain = process.env['MAILGUN_DOMAIN'];

    const mail = Mailgun({apiKey, domain})
    const data = {
        from: 'Kijiji Alerts <alert@rfd.spencerwallace.ca>',
        to: email,
        subject: 'New Kijiji ad',
        template: 'kijiji-ad',
        "v:title": ad.title,
        "v:link": ad.link,
        "v:price": ad.price,
        "v:image": ad.image
    };

    mail.messages().send(data, function(err, body) {
        console.log(body)
    })

}
```

## Deploy Function