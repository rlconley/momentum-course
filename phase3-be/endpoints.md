---
layout: topic
title: API Endpoints
topic: Python
category: phase3-be
parent: Phase 3 Back End
nav_order: 9
published: false
---

## 🎯 Objectives

- How are the projects coming along? 👀
- Documenting and testing your API's endpoints with Insomnia
- Pagination

## 🏗️ Project

Keep on going. 💪 🚀

Today we need to get you past any blockers you may be experiencing and plan next steps for your application.

By now you should have provided your front end with **documented and functional endpoints** to be able to use application data.

You should have Djoser installed so that your log in and log out endpoints are working. Make sure you are sharing the Djoser information with your front end. You should include these endpoints in your API documentation or project README.

## Creating a properly hashed password

In order to save a properly hashed password for a user in the Django Admin, make sure you are using `UserAdmin` in `admin.py`. If you don't do this, the default form will save an unhashed password, you will run into authentication errors.

```python
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
...
admin.site.register(User, UserAdmin)
```

You can also [change a password from the command line](https://docs.djangoproject.com/en/4.1/topics/auth/default/#changing-passwords).

```shell
$ python manage.py changepassword jimih
Password:
Password (again):
Password changed successfully for user 'jimih'
```

## 🔖 References

- [Authentication with Djoser][drf-authentication]
- [DRF in Depth][deep-drf]

{% include reference_links.md %}
