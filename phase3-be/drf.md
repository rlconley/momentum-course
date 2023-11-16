---
layout: topic
title: Intro to Django REST Framework
topic: Python
category: phase3-be
parent: Phase 3 Back End
nav_order: 5
published: false
---

## 🎯 Objectives

Today we dive into Django REST Framework. 🤿

- Installing in a Django project
- Serializers
- Class-based Views
- Using DRF Documentation
- Generic API Views

## 🏗️ Project: Choose Your Own Adventure 🐪 🐫

Choose one of the following options.

**The application must be deployed, whichever option you choose. 🚀**

This project is due on {{ site.data.projects.drf_library_api.due_date | date: "%A, %B %e" }}.

### 🐪 OPTION ONE: Add an API to Habit Tracker

Continue working in your existing Habit Tracker repo. Add a new app to your project and call it `api` (`python manage.py startapp api`). Your app should provide CRUD endpoints that return JSON responses.

By Friday afternoon, you should be able to do almost all of the following via the API -- that is, **by making requests using Insomnia**.

- get a list of habits
- create a new habit
- get data about a specific habit that includes its associated daily records, if any
- create a record for a specific habit for today (stretch: create a record for any date)

By Monday, you should be able to complete all necessary CRUD tasks through the API:

- list habits
- create a new habit
- update a habit
- delete a habit
- get data about a specific habit that includes its associated daily records, if any
- create a record for a habit for today (stretch: create a record for any date)
- update a record for a habit
- delete a record from a habit

Write up a list of endpoints you think you will need before you start doing this. Don't make endpoints you don't need.

You should develop and test your endpoints using Insomnia. You can also use the browsable API that DRF gives you in the browser, but you should be comfortable using Insomnia.

### 🐫 OPTION TWO: Library API

Create a new API-only application that lets users keep track of books they are reading, want to read, or have read, and take private or public notes on books. More details about project requirements are included in the project README.

[Library API Project]({{ site.data.projects.drf_library_api.url }}).

You should _not_ make forms or templates for this app, but you _will_ need models, urls, views, and serializers. You should use class-based views and return JSON responses.

___

## 📖 Read | 📺 Watch | 🎧 Listen

- 📖 [REST Resource Naming Guide](https://restfulapi.net/resource-naming/) This resource will be very helpful in thinking about how to structure your urls.
- 🎧 [DjangoChat Podcast: DRF](https://djangochat.com/episodes/django-rest-framework-qnTHpeNF)
- 📖 [Django docs: Introduction to class-based views](https://docs.djangoproject.com/en/4.1/topics/class-based-views/intro/) _This refers to class-based views in Django but it explains the concept, which you will see applied in DRF._
- 📖 [Class-based vs. function-based views](https://simpleisbetterthancomplex.com/article/2017/03/21/class-based-views-vs-function-based-views.html) _This is about Django views in general, not specific to DRF._
- 📺 [DjangoCon 2019: Generic View? What Is That and Why Would I Use It?, Felipe Lee](https://www.youtube.com/watch?v=qmKowZNmkCo) _Again about class-based views in Django but the explanation is relevant to what you will see in DRF._
- 💫 📺 [What You Should Know About DRF, Lacey Williams Henschel, PyCascades 2021](https://www.youtube.com/watch?v=06DJBu1zwoY)

## 🔖 References

- [DRF]({% link references/drf.md %})
- [HTTP & REST]({% link references/http.md %})
- [Introduction to RESTful APIs][intro-apis]

{% include reference_links.md %}
