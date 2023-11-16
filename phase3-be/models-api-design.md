---
layout: topic
title: Models and API Design
topic: Python
category: phase3-be
parent: Phase 3 Back End
nav_order: 8
published: false
---

## 🎯 Objectives

- Models for your collaborative project
- Designing the endpoints you need
- Setting CORS headers

## 🏗️ Collaborative Project

Today you should have your models nailed down and be able to work with them in the admin and the shell -- that is, you can save them to the database and retrieve them, and all the relationships work properly (for example, can you create a new friend for a user, and query to see a user's friends? Can you write a query to see a user's friends' cards?).

You should have a plan **written down** for at least the basic set of urls that your front-end will need. You may make changes to this as you go, but you need a place to begin.

When creating your list of endpoints, remember to **only build what you need.**

- What lists or collections of data will you need to return? There are probably some you can omit.
- What single resources will you need to provide?
- What HTTP methods will you need to support for each endpoint? (There are probably some you don't need.)
- Which routes will need the user to be authenticated and which do not require authentication?
- Will you need to restrict any actions at the object level? For example, you'll probably want to make sure that only the owner of a resource can make changes to it, or add associated objects.
- For each endpoint you are making, you should be able to answer the question: Why do we need this? If you don't know, ask your front-end developers if they need it, and why. If no one has a good reason, then you should not make the endpoint.

### Goals by the next meeting

At minimum, your API should...

- return JSON for GET requests for questions and answers OR cards and friends.
- accept POST requests to create questions and answers OR cards and friends.

## 🔖 References

- [REST API Design][api-design]
- [DRF in more depth][deep-drf]
- [Permissions][drf-permissions]
- [CORS][cors]

{% include reference_links.md %}
