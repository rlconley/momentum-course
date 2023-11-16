---
title: Django REST Framework and Building APIs
category: python
parent: References
layout: resource_list
---

{% include summary_toc.html %}

## Intro to REST APIs

- [Notes: REST APIs 101]({{ site.team_notes_repo }}/blob/main/rest.md)
- [RESTful APIs](https://restful-api-design.readthedocs.io/en/latest/intro.html) _Read up through the "Standard Methods" subsection of the section on "Methods". You can read more if you want to but it gets pretty deep._
- [Safia Abdullah, You and Me Learn All About HTTP](https://dev.to/captainsafia/you-and-me-learn-all-about-http-with-safia-abdalla-3nd0)
- [Web APIs Explained By Selling Goods From Your Farm](https://blog.codeanalogies.com/2018/02/27/web-apis-explained-by-selling-goods-from-your-farm/)
- [What is a REST API?](https://www.youtube.com/watch?v=-mN3VyJuCjM)
- [A Beginner's Guide to REST](https://mlsdev.com/blog/81-a-beginner-s-tutorial-for-understanding-restful-api)
- [REST APIs: How They Work and What You Need to Know](https://blog.hubspot.com/website/what-is-rest-api)

## REST API Design

- [REST Resource Naming Guide](https://restfulapi.net/resource-naming/) _This resource may be helpful in thinking about how to structure your urls._
- [A Long (Mostly Helpful) List of Things to Keep In Mind When You're Building an API](https://betterprogramming.pub/22-best-practices-to-take-your-api-design-skills-to-the-next-level-65569b200b9) _Many of these best practices you get for free with DRF; some are included with packages we use; and some of this is advice for the choices you have to make in the code you write._
- [Overview of creating an API](https://www.caktusgroup.com/blog/2019/02/01/creating-api-endpoint-django-rest-framework/) _Nothing much new in this article, but it is a good summary and high-level overview of how to go about creating an API with DRF._

## Django REST Framework Basics

- [Django REST Framework Documentation](https://www.django-rest-framework.org/)
- [Installation](https://www.django-rest-framework.org/#installation)
- [Django Chat: Django REST Framework](https://djangochat.com/episodes/django-rest-framework)
- [Django REST Framework: An Introduction - RealPython](https://realpython.com/django-rest-framework-quick-start/)

## Serializers

- [DRF Docs: Serializers](https://www.django-rest-framework.org/api-guide/serializers/)
- [DRF Docs: ModelSerializer](https://www.django-rest-framework.org/api-guide/serializers/#modelserializer)
- [DRF Docs: Serializer SlugRelatedField](https://www.django-rest-framework.org/api-guide/relations/#slugrelatedfield)
- [Using Different Read and Write Serializers in DRF](https://www.revsys.com/tidbits/using-different-read-and-write-serializers-django-rest-framework/)
- [How to Save Extra Data to a DRF Serializer](https://simpleisbetterthancomplex.com/tutorial/2019/04/07/how-to-save-extra-data-to-a-django-rest-framework-serializer.html) _For example, when you need to associate a user with an object that you are creating_
- [Effectively using DRF Serializers](https://testdriven.io/blog/drf-serializers/)

## Views

### Class-based Views

- [Django docs: Introduction to class-based views](https://docs.djangoproject.com/en/4.1/topics/class-based-views/intro/) _This refers to class-based views in Django but it explains the concept, which you see applied in DRF._
- [Class-based vs. function-based views](https://simpleisbetterthancomplex.com/article/2017/03/21/class-based-views-vs-function-based-views.html) _This is about Django views in general, not specific to DRF._
- [DRF Docs: Class-based views](https://www.django-rest-framework.org/api-guide/views/) _This talks about `APIView`_.

### Generic Views

- [DjangoCon 2019: Generic View? What Is That and Why Would I Use It?, Felipe Lee](https://www.youtube.com/watch?v=qmKowZNmkCo) _Again about class-based views in Django but the explanation is relevant to what you will see in DRF._
- [Article on DRF Generic Views](https://testdriven.io/blog/drf-views-part-2/)

## Viewsets

- [What You Should Know About DRF, Lacey Williams Henschel, PyCascades 2021](https://www.youtube.com/watch?v=06DJBu1zwoY)
- [What You Should Know About DRF, Part 1: ModelViewSet attributes and methods](https://www.laceyhenschel.com/blog/2021/2/22/what-you-should-know-about-drf-part-1-modelviewset-attributes-and-methods)
- [What You Should Know About DRF, Part 2: Customizing built-in methods](https://www.laceyhenschel.com/blog/2021/2/23/what-you-should-know-about-drf-part-2-customizing-built-in-methods)
- [What You Should Know About DRF, Part 3: Adding custom endpoints](https://www.laceyhenschel.com/blog/2021/2/23/what-you-should-know-about-django-rest-framework-part-3-adding-custom-endpoints)

### `@action` decorator in ViewSets

- [DRF Docs: Marking extra actions for routing with the `@action` decorator](https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing)
- [DRF Docs: Routing for extra actions](https://www.django-rest-framework.org/api-guide/routers/#routing-for-extra-actions)

## DRF in Depth

- 💜 [Classy Django REST Framework](http://www.cdrf.co/) _This is **exceptionally** useful for working with classes in DRF_.
- ⭐ [How to Save Extra Data to a DRF Serializer](https://simpleisbetterthancomplex.com/tutorial/2019/04/07/how-to-save-extra-data-to-a-django-rest-framework-serializer.html)  _This is essential for adding in extra info that is not included in your serializer, like the user (from request.user) that is associated with the object you want to create._
- [DRF Recipes](https://tinystruggles.com/posts/drf_recipes/)
- [DRF docs: Pagination](https://www.django-rest-framework.org/api-guide/pagination/)
- [Django Docs: Changing a password](https://docs.djangoproject.com/en/4.0/topics/auth/default/#changing-passwords)

## Permissions

- [DRF Docs: Permissions](https://www.django-rest-framework.org/api-guide/permissions/)
- [DRF Permissions](https://testdriven.io/blog/drf-permissions/)
- [Built-in Permission Classes in DRF](https://testdriven.io/blog/built-in-permission-classes-drf/)
- [Custom Permissions in DRF](https://testdriven.io/blog/custom-permission-classes-drf/)
- [Pro Tip about DRF Permissions](https://www.revsys.com/tidbits/tip-about-drf-permissions/) _This shows how to combine permissions with logical operators like `and` and `or`_

## Setting CORS Headers

_See also [HTTP: CORS][cors]_

- [Django CORS Guide](https://www.stackhawk.com/blog/django-cors-guide/)
- [`django-cors-headers`](https://github.com/adamchainz/django-cors-headers)
- [Enabling CORS in Django](https://www.stackhawk.com/blog/django-cors-guide/)

## Authentication

- [Djoser documentation](https://djoser.readthedocs.io/en/latest/)
    - [Base Endpoint Guide for Djoser](https://djoser.readthedocs.io/en/latest/base_endpoints.html)  _Includes endpoint to create a new user and other useful stuff_
    - [Token Authentication Endpoint Guide for Djoser](https://djoser.readthedocs.io/en/latest/token_endpoints.html) _Details on the token auth endpoints_
- [DRF docs: Token-based authentication](https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication)
- [The Ultimate Tutorial for Django REST Framework: Login and Authentication](https://sunscrapers.com/blog/django-rest-framework-login-and-authentication/) _This uses the Djoser library._
- 📺 [Finally Understand Auth in DRF - a Will Vincent talk](https://www.youtube.com/watch?v=pY-oje5b5Qk) _Will isn't using the Djoser library but he does a great job of reviewing different auth strategies and why you would choose one or the other. Watch this for a better understanding and overview of authentication._
- 📖 [Simple Is Better Than Complex: How to Implement Token Authentication in DRF](https://simpleisbetterthancomplex.com/tutorial/2018/11/22/how-to-implement-token-authentication-using-django-rest-framework.html) _This does NOT use Djoser, but it's a great walkthrough of some of what Djoser does for you if you would like more detail._

## Pagination

- [DRF docs: Pagination](https://www.django-rest-framework.org/api-guide/pagination/)
- [Classy DRF: PageNumberPagination](https://www.cdrf.co/3.13/rest_framework.pagination/PageNumberPagination.html)

## Search

- [Search from the Ground Up](https://www.youtube.com/watch?v=is3R8d420D4&list=PL2NFhrDSOxgXXUMIGOs8lNe2B-f4pXOX-&index=2) _DjangoCon 2019 video explaining search in detail_
- [Django Docs: Search overview](https://docs.djangoproject.com/en/4.1/topics/db/search/)
- [Basic and Full-Text Search with Django and Postgres](https://testdriven.io/blog/django-search/)
- [Blog post with more on full-text search](https://www.netlandish.com/blog/2020/06/22/full-text-search-django-postgresql/)
- [If you want A LOT more detail about full-text search in Postgres and Django, this blog piece has you covered](https://pganalyze.com/blog/full-text-search-django-postgres)
- [Pretty Printed: How to Perform Full Text Searches in Django with Postgres](https://www.youtube.com/watch?app=desktop&v=139a0fm0YFY)
- [Full Text Search with Django and PostgreSQL: More Facets, Less Dependencies](https://youtu.be/QFs6qgvyTC4) _Team 11 Momentum grad Jason Judkins is a co-presenter of this talk given at DjangoCon in October 2022!_ 🤩

### Filtering

- [DRF - Filtering](https://www.django-rest-framework.org/api-guide/filtering/) _Pretty useful reference. Includes how to filter your output based on GET parameters, which you will want to do for using search terms._
- [Django Docs: full-text search & the search lookup](https://docs.djangoproject.com/en/4.1/ref/contrib/postgres/search/#the-search-lookup)
- [Django Docs: SearchVector](https://docs.djangoproject.com/en/4.0/ref/contrib/postgres/search/#searchvector) _You'll need this if you want to search against more than a single field._

## File Upload

- [Django File (and Image) Uploads Tutorial](https://learndjango.com/tutorials/django-file-and-image-uploads-tutorial) _Another solid post from Will Vincent; he does not include all the necessary info to make file uploads work in production but otherwise it's a good overview about how to configure Django to accept uploads._
- [File Upload with DRF](https://goodcode.io/articles/django-rest-framework-file-upload/)
- [Success with Static Files](https://www.mattlayman.com/django-riffs/success-static-files/)
- [Django Docs: ImageField](https://docs.djangoproject.com/en/3.2/ref/models/fields/#imagefield)
- [Django Docs: FileField](https://docs.djangoproject.com/en/3.2/ref/models/fields/#filefield)
- [Pillow: Python Imaging Library](https://pillow.readthedocs.io/en/stable/)
    - [`django-imagekit`](https://django-imagekit.readthedocs.io/en/latest/) _If you want to resize images when they are uploaded, or do any kind of image processing, you will need this. Don't add it unless you know you need it._
- [`django-storages`](https://django-storages.readthedocs.io/en/latest/index.html)
- [DRF Docs: `FileUploadParser`](https://www.django-rest-framework.org/api-guide/parsers/#fileuploadparser) _Without this you will get errors about unsupported media types_

### AWS S3

- [What is Amazon S3?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) _This is Amazon's documentation and it gets really in-depth._
    - [Introduction to S3](https://www.youtube.com/watch?v=77lMCiiMilo) _Also from Amazon_
- [How to Set Up Amazon S3](https://simpleisbetterthancomplex.com/tutorial/2017/08/01/how-to-setup-amazon-s3-in-a-django-project.html)
    - [AWS S3 Free Tier Info](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=categories%23storage)
- [Storing Django Static and Media files on AWS S3](https://testdriven.io/blog/storing-django-static-and-media-files-on-amazon-s3/)

{% include reference_links.md %}
