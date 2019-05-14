---
title: Lessons Learned From a Major Migration
date: 2019-04-22 14:00:00
description: "Migration"
image: "./images/birds.jpg"
slug: migration
---

At work we are working on a fairly old codebase. I think the current iteration of the site started back in 2006. So in the web world this is getting pretty old. It is also built on zend framework 1 which at the time was the new hotness for php frameworks.

Now that it is 2018 and zend framework 1 hit end of life in 2016 it was time to make some changes and migrate our codebase to something else. To keep things a little simpler we choose to go with zend framework 3. This is a good framework that is build with configuration over convention in mind. Meaning that you can change every little thing in the framework but doing somethings will take some work, it won’t be as automatic as some frameworks. However many of the principles and api’s of zend 1 were similar to zend 3 so we decided it would be an easier transition.

I had only been working at this position working as a full time programmer when I was given the responsibility of leading the migration. This was a daunting task for me because I didn’t even understand the current framework (zend 1) and they wanted me to convert our whole website over to zend 3. I was flattered that they put so much faith in me but I was really nervous about doing this. However, a year later we finally got the site converted over and it is working.

## Lessons Learned
* Keep your code decoupled
* Truly understand the system
* Tests are lifesavers
* Working on a functioning site is difficult

## Keep your code decoupled
One thing that I learned in converting our code was that it was very tightly coupled. So much of our code depended on something else. There is a reason why we use frameworks and that is so we can keep a separation of concerns. The Model View Controller (MVC) design is meant to keep things seperate and easily modular. Unfortunately much of our code was dependant on different parts. For example our models had things that were dependant on the view or controllers. The best way to write code is to keep these things as separate as possible. That way it is easier to swap things as needed. In this case we were swapping the view and controller layers of the site, but in turn we needed to update a lot of our models as well.

It is also much easier to test when things are decoupled. A great programming pattern or technique is to use dependency injection. You can look up more about this topic but basically it means that you pass in whatever is needed for that class in the constructor. We didn’t use this in our original system so much of our code is using global variables in the classes. The problem with this is that if we need to test anything we need to fire up the whole program to make make sure that the class has the correct information when processing.

## Truly understand the system
The first thing that I had to do when updating the code was understand what our code was doing. It doesn’t have to be a detailed knowledge of every function and class in the system but a general overview of how the framework functions is very important.

In this project there were quite a few fundamental changes to the way Zend 1 and Zend 3 worked. They are both MVC frameworks but there is a little less magic in Zend 3. Things like the init function in action controllers are not automatic anymore and things need to be called explicitly. This is a great choice for the framework because it means that you have more control over the system and know what is going on without wondering if you just don’t understand how it works.

## Tests are lifesavers
Now our testing system is far from being perfect and needs a lot of work but we do have some basic tests that will catch many of the large issues that we might run into. These tests were great for when we were moving to our new framework because it assured us that things are running the same on the new system as it is on the old.

Manual testing has its place but if you want to be able to develop with confidence and do it quickly you need to set up automated tests. Our testing system uses PHPUnit and we have started to use Cypress for end to end testing. Try your best to keep your tests quick so that it is much easier to run them and you won’t skip the tests trying to save time. It also helps to separate your tests into different categories and you can run them separately and this helps to keep the test quick.

## Working on a functioning site is difficult
One of the biggest issues that we had to overcome is that we had to migrate the code to a new code base while maintaining and updating the current one. Because we had a 4 month timeline on this project we needed to make sure that we could still make changes to the live site. This proved to make things a little difficult and we have learned some things during this process.

We went about it by trying to first limit changes to the live site the best that we could. Whenever we needed to make a change or add code we needed to make sure that that code was added to the new site. For new code it was fairly easy to just add to the new code to the new site. It was the changed code that proved to be difficult. We overcame this by doing a diff on the files that were changed and then accepting the new changes as needed. The problem that we had is that we didn’t do frequently enough. We should have been doing it as we made changes or at least daily. When we did it every 2 weeks or so we ran into too many conflicts that didn’t help things.

In all of this work we were able to make our site much faster with a better and maintained framework. Just remember if you are planning on doing a project like this to keep things simple, tested, and organized.