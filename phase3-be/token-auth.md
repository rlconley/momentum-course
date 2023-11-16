---
layout: topic
title: Token Authentication
topic: Python
category: phase3-be
parent: Phase 3 Back End
nav_order: 7
published: false
---

## 🎯 Objectives

- API project review
- Token authentication in DRF with [Djoser](https://djoser.readthedocs.io/en/latest/)
- Plan for collaborative project

## 🏗️ Collaborative Project

Today we begin the project we'll work on for the rest of the phase. Read [today's post]({% link news.md %}) for more details.

Meet with your team and work on your plan. Today, plan out your **models**. You should draw an ER diagram for your models. Think about what fields you need for your models (the Django Model Field Reference may be helpful). What are the relationships your models will need to have with each other?

Then, plan and write down **a list of the endpoints** you think you will need. What data will those endpoints have to return? Will your endpoints need to accept any data (remember you can do this in the body of the request or using part of the URL)? What permissions will you need to implement for your endpoints?

Your list of planned endpoints should look something like (this is a _partial_ list using examples from Habit Tracker. You're going to need a bunch more endpoints than this). Keep in mind that you should include endpoints ONLY if you need them, so consider the actions that you need to support according to the project requirements.

_Example planning for endpoints (you'll need more than these, of course):_

| **Request URL**           | **Description**                                            |
| :------------------------ | :--------------------------------------------------------- |
| `GET api/habits`          | returns a list of all habits for the authenticated user    |
| `GET api/habits/<int:pk>` | returns details about one habit and its associated records |
| `POST api/habits`         | create a new habit                                         |

It should take you some time to talk all this through.

🚫 **No writing code yet!** Today should be used for planning only. We'll cover working together on GitHub tomorrow.

## 📖 Read | 📺 Watch | 🎧 Listen

- 📺 [Finally Understand Auth in DRF - a Will Vincent talk](https://www.youtube.com/watch?v=pY-oje5b5Qk) -> Will isn't using the Djoser library but he does a great job of reviewing different auth strategies and why you would choose one or the other. Watch this for a better understanding and overview of authentication.
- 📖 [Julia Evans comic explaining CORS better than MDN does](https://twitter.com/b0rk/status/1445039796804542473?lang=en)
- 📖 [More Julia Evans on the Same Origin Policy](https://twitter.com/b0rk/status/1155493682885341184)
- 📖 [A Visual Guide to CORS by Lydia Hallie](https://dev.to/lydiahallie/cs-visualized-cors-5b8h)
- 📖 [Simple Is Better Than Complex: How to Implement Token Authentication in DRF](https://simpleisbetterthancomplex.com/tutorial/2018/11/22/how-to-implement-token-authentication-using-django-rest-framework.html) _This does NOT use Djoser, but it's a great walkthrough of what Djoser does for you if you would like more detail._

## 🔖 References

- [CORS][cors]
- [DRF Authentication][drf-authentication]
- [DRF Permissions][drf-permissions]
- [Git Collaboration][git-collab]

{% include reference_links.md %}
