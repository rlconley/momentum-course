---
layout: topic
title: DRF Views and Serializers
topic: Python
category: phase3-be
parent: Phase 3 Back End
nav_order: 6
published: false
---

## 🎯 Objectives

- Views, Generic Views, and Viewsets
- Nesting and customizing serializers
- Permissions

## 🏗️ Project

Keep on with your API building 😎 💪! What do you need to know to get it working?

By now you should have a **list of endpoints** that your API provides, even if they are not all complete yet. A good place to document this list of endpoints would be in your README, formatted with Markdown. This list should show the URLs along with the HTTP methods/verbs, and ideally should include an example of the JSON that has to be included in the request body (for any requests that send data in the body) and an example of the JSON response that will be returned, for each endpoint. **This list will be helpful for your own testing and it can serve as necessary documentation for your API.**

Here is an example of what your documentation might look like for an endpoint to create a book:

___

### Create a new book

#### Request

Requires authentication. `title` and `author` are required fields.

`POST api/books`



```json
{
   "title": "The Anatomy of Melancholy",
   "author": "Robert Burton",
   "publication_year": 1621
}
```

#### Response

```json
201 Created

{
  "pk": 6,
  "title": "The Anatomy of Melancholy",
  "author": "Robert Burton",
  "publication_year": 1621,
  "featured": false,
  "reviews": []
}

```

___

By today or tomorrow, your app should respond with JSON data to GET requests for all habits (or books), for a single habit (or book), and for one habit's (or book's) associated objects (like records or reviews). By tomorrow you should also have at least some of your POSTs working and can begin working on UPDATE and DELETE.

💁 **Make sure you thoroughly test your endpoints in Insomnia** to confirm that they are returning what they should, and NOT returning what they shouldn't. Use `show_urls` from django-extensions to help you check what urls you have defined.

👀 **Is your app deployed yet?**  🚀

## 📖 Read | 📺 Watch | 🎧 Listen

### Ship It

- [About the Ship It Mindset](https://excid3.com/blog/finishing-is-all-that-matters)
- [ship it squirrel](https://shipitsquirrel.github.io/)

### Deepen your understanding of OOP

- [How Classes and Objects Work in Python](https://earthly.dev/blog/how-cls-obj-work-python/)
- [RealPython: super()](https://realpython.com/python-super/)

## 🔖 References

- [DRF]({% link references/drf.md %})
- [Serializers][drf-serializers]
- [Views][drf-views]
- [Permissions][drf-permissions]

{% include reference_links.md %}
