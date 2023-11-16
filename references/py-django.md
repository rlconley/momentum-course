---
title: Django
category: python
parent: References
layout: resource_list
---

{% include summary_toc.html %}

### Intro to Django

- [Thinkific Django](https://momentumlearn.thinkific.com/courses/take/back-end-development-with-python-and-django/texts/32618875-what-is-django)
- [MDN: Django Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)
- [MDN: Introducción a Django (Español)](https://developer.mozilla.org/es/docs/Learn/Server-side/Django/Introduction)
- [Official Django documentation](https://docs.djangoproject.com/en/4.0/)
- [Documentación de Django (Español)](https://docs.djangoproject.com/es/4.0/)
- [Django Topic Guide](https://docs.djangoproject.com/en/4.0/topics/) (this is a useful table of contents for the Django docs)
- [Pretty Printed Django Videos](https://www.youtube.com/playlist?list=PLXmMXHVSvS-DQfOsQdXkzEZyD0Vei7PKf): Videos 1-10 are the ones specific to Django. There are other videos on related topics; they are useful but not relevant to the material we're covering right now.
- [Curso de Django Desde Cero (Español)](https://youtu.be/vXR5CAcRv5w) Partes 1-3
- [Django Chat Podcast: How to Learn Django](https://djangochat.com/episodes/how-to-learn-django)
- [Pretty Printed Django: an Introduction for Beginners](https://www.youtube.com/watch?v=QVX-etwgvJ8)

### Getting Started with the Database in Django

- [What is a relational database?](https://www.techtarget.com/searchdatamanagement/definition/relational-database)
- [Database Design Tutorial](https://learndjango.com/tutorials/database-design-tutorial-beginners) _This is a great short article that is really an intro to databases. It covers some data best practices and explains primary keys, foreign keys, and relationships._
- [Real Python: Django Migrations Primer](https://realpython.com/django-migrations-a-primer/)
- [DB Browser for SQLite](https://sqlitebrowser.org/) - a GUI for your sqlite database

### Debugging Django

- 📖 [Python Debugging with Pdb](https://realpython.com/python-debugging-pdb/)
- 📺 [Python Debugging with Pdb - Course on RealPython](https://realpython.com/courses/python-debugging-pdb/) - only the first three videos are free but they are useful!
- 📺 [Damilare Onajole, Debugging Python](https://pyvideo.org/pycon-nigeria-2018/debugging-python-applications-for-profit.html)

### Models and Queries

- [Django Docs: Models](https://docs.djangoproject.com/en/4.0/topics/db/models/)
- ⭐ [Django Docs: Model Field Reference](https://docs.djangoproject.com/en/4.0/ref/models/fields/)
- [Django Docs Model Relationships](https://docs.djangoproject.com/en/4.0/topics/db/models/#relationships)
- [What are Primary Keys & Foreign Keys?]({{ site.team_notes_repo }}/blob/main/pks_and_fks.md)
- [Django Docs Making Queries (using the ORM)](https://docs.djangoproject.com/en/4.0/topics/db/queries/)
- [Model field `null=True`](https://docs.djangoproject.com/en/4.0/ref/models/fields/#null) -> relevant for database storage
- [Model field `blank=True`](https://docs.djangoproject.com/en/4.0/ref/models/fields/#blank) -> relevant for model object validation
- [🍕 Tips for using Django's Many-to-Many Field](https://www.revsys.com/tidbits/tips-using-djangos-manytomanyfield/)
- [What is an Entity Relationship Diagram?](https://www.lucidchart.com/pages/er-diagrams) - _The first video is especially good._
- [Less Obvious Things to Do with the Django ORM](https://markusholtermann.eu/2019/03/less-obvious-things-to-do-with-djangos-orm/)
- [Django Migrations: How To Add Non-Nullable Fields Without A Default Value](https://ctrlzblog.com/django-migrations-how-to-add-non-nullable-fields-without-compromising-your-database/)

### Authentication, Registration, and the User Model in Django

- [django-registration-redux](https://django-registration-redux.readthedocs.io/en/latest/index.html)
    - We are using the [simple (one-step) backend](https://django-registration-redux.readthedocs.io/en/latest/simple-backend.html#the-simple-one-step-backend)
- [Simple Is Better Than Complex: How to Extend the Django User Model](https://simpleisbetterthancomplex.com/tutorial/2016/07/22/how-to-extend-django-user-model.html)
    - Clear comparison of the four choices you have, and when you would use each one.
- [Django docs: User Authentication](https://docs.djangoproject.com/en/4.0/topics/auth/#user-authentication-in-django)
- [Django docs: built-in User Model](https://docs.djangoproject.com/en/4.0/ref/contrib/auth/#user-model) -> _documentation for all the things you get for free with the User from Django_
- [Django docs: Extending the built-in User Model with AbstractUser](https://docs.djangoproject.com/en/4.0/topics/auth/customizing/#extending-django-s-default-user)
    - [Django Best Practices: Custom User Model](https://learndjango.com/tutorials/django-custom-user-model) -> _This tutorial is good to read for an overview, but you don't need to follow the instructions to implement the forms to create or change a user, since we are using the `django-registration-redux` package for that._
- [Django docs: Authentication in Web Requests](https://docs.djangoproject.com/en/4.0/topics/auth/default/#authentication-in-web-requests) -> _`django-registration-redux` handles some of this for us (giving us the login and logout urls, for instance) but it's helpful to see other ways you can use the authenticated user._
- [The `login_required` decorator](https://docs.djangoproject.com/en/4.0/topics/auth/default/#the-login-required-decorator)
- [Limiting access to logged-in users that pass a test](https://docs.djangoproject.com/en/4.0/topics/auth/default/#limiting-access-to-logged-in-users-that-pass-a-test)
- [Foreign Key to built-in User from DjangoGirls](https://tutorial.djangogirls.org/en/django_models/#creating-a-blog-post-model)
- [Extending the User model (preferred, used in Uptact)](https://simpleisbetterthancomplex.com/tutorial/2016/07/22/how-to-extend-django-user-model.html)

### URLs and Templates

- [Django Docs URLs](https://docs.djangoproject.com/en/4.0/topics/http/urls/)
- [Django Docs Template Language](https://docs.djangoproject.com/en/4.0/ref/templates/)

### Django Packages

- [Pipenv documentation](https://pipenv.pypa.io/en/latest/)
- [Django Debug Toolbar](https://django-debug-toolbar.readthedocs.io/en/latest/)
- [How to use django-extensions `shell_plus`](https://django-extensions.readthedocs.io/en/latest/shell_plus.html#shell-plus)
- [`django-environ`](https://django-environ.readthedocs.io/en/latest/)

### Related Python & Django References

- [RealPython: What is a decorator?](https://realpython.com/primer-on-python-decorators/)
- [Python dependency management overview](https://modelpredict.com/python-dependency-management-tools) -> _A good read to understand `pip`, `pyenv`, and `pipenv` better._
- [💥 Django Cheatsheet!](https://github.com/lucrae/django-cheat-sheet)
- [💫 Django Chat Podcast: How Django Experts Think](https://djangochat.com/episodes/how-django-experts-think) -> _Worth a listen, especially if you're feeling discouraged about ever learning Django, and super relevant._

### Images

- [Uploading Images](https://djangocentral.com/uploading-images-with-django/)

### Forms in Django

- [Working with Forms](https://docs.djangoproject.com/en/4.0/topics/forms/) -> A good place to start for an overview
- [What is up with `form.is_valid()`](https://docs.djangoproject.com/en/4.0/ref/forms/api/#django.forms.Form.is_valid)
- [Validation on a model form](https://docs.djangoproject.com/en/4.0/topics/forms/modelforms/#validation-on-a-modelform)
- [Form and field validation](https://docs.djangoproject.com/en/4.0/ref/forms/validation/)
- [The Forms API](https://docs.djangoproject.com/en/4.0/ref/forms/api/) -> Details on form object attribute and methods (such as `as_p()`)
- [Django's CSRF protection](https://docs.djangoproject.com/en/4.0/ref/csrf/)
    - [What is CSRF?](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

### Custom Management Commands

- [How to create custom django-admin commands (django docs)](https://docs.djangoproject.com/en/4.1/howto/custom-management-commands/)
- [How to Create Custom Django Management Commands - Simple Is Better Than Complex](https://simpleisbetterthancomplex.com/tutorial/2018/08/27/how-to-create-custom-django-management-commands.html)
