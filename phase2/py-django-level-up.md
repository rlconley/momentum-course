---
layout: post
title: Django Level Up ⚡
topic: Python
category: phase2
parent: Phase 2 Back End
nav_order: 8
published: true
---

## 🗓️ Today's Topics

- Django Music retrospective
- Building a larger Django app
- Pair programming

## 🎯 Project: Django Flashcards

For this project you will work in pairs using pair progamming techniques. You will work in a shared repo and **submit one application** that your duo will build together. 

The first thing you should do is to Then, the very next thing you should do is determine what **models** you will need and what attributes and relationships they should have. An ER diagram can be very helpful here.

👉 [Django flashcards project repo]({{ site.data.phase2.projects.django_flashcards.url }})

This is **due on {{ site.data.phase2.projects.django_flashcards.due_date | date: "%A, %B %e" }}**.

### Dev Teams

For this project, **the first team member listed should accept the assignment** and enter the name of your team.

After that step, the other team members can then accept the assignment and join their team.

- Team Bubbles: Jose, Jon
- Team Buttercup: Jordan, Maria
- Team Blossom: Kelsey, Freddie


### ✅ Project Checklist

- Set up a new Django project from scratch. There is no starter code in the assignment repo.
- Make sure to create a `.gitignore` file to exclude certain files (like your `.env` file and `db.sqlite3`) from Git. You can get one specific to a Django project at [gitignore.io](https://www.toptal.com/developers/gitignore). Just search for `Django` and copy and paste the text you find there into your `.gitignore` file. It should be placed at the root of your repo.
- Make sure to create a custom user model, following best practices. **Do this before you run any migrations.** [This guide may be helpful to you.](https://learndjango.com/tutorials/django-custom-user-model)
- You may want to install `django-debug-toolbar`, `django-extensions`, and `django-environ`, as we have done in previous projects.

## 🔖 Resources

### Pairing

- [Pair Programming Guide](https://tuple.app/pair-programming-guide/template) _This template for a pairing session is practical and actionable, and it can work if there are three of you as well! There are other resources on this site also worth a look._
- [GitHub: creating a commit with multiple authors](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) _Be sure to share the credit for code you pair on!_

### Django

- 🍕 [Tips for Using Django's Many-to-Many Field](https://www.revsys.com/tidbits/tips-using-djangos-manytomanyfield/) _This was included in earliers posts too. It's probably the best written explanation of M2M relationships out there, so don't miss it._
- [Django Docs: Related Objects Reference](https://docs.djangoproject.com/en/4.2/ref/models/relations/) _Working with objects that are related to each other via O2M or M2M relationships_
- [Django Docs: Making Queries](https://docs.djangoproject.com/en/4.2/topics/db/queries/) _Queries are what you need to look things up in the database_
- [Creating Interactive Views in Django](https://hackersandslackers.com/creating-django-views/) _Detailed post really breaking down views._
- [Django Slug Tutorial](https://learndjango.com/tutorials/django-slug-tutorial)
- [Django Docs: Built-in Template Tags and Filters](https://docs.djangoproject.com/en/4.2/ref/templates/builtins/)
- [CRC model](http://agilemodeling.com/artifacts/crcModel.htm) _The Class-Responsibility-Collaborator model helps you to reason about how to design your models and relationships._
- [Django Docs: Model Field Reference](https://docs.djangoproject.com/en/4.2/ref/models/fields/) _This is a reference for all the different field types you can use in your models. It's a good place to look if you want to know what options are available for a particular field type._
