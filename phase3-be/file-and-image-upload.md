---
layout: topic
title: File & Image Upload
topic: Python
category: phase3-be
parent: Phase 3 Back End
nav_order: 11
published: false
---

## 🎯 Objectives

- How to upload files with Django & DRF
- How to configure storage for production uploads

## 🏗️ Wrapping up this Project

Your documentation should be done and delivered to the front end by now. For an example of what your documentation should look like, see the README for the DRF Library example.

Make sure to check your permissions and validations. Your model fields should not allow the creation of records with null fields that are crucial for the functioning of your app, for instance.

👉 If your project does not yet meet minimum requirements, you should aim for meeting them **by the end of the day tomorrow**.

## 📎 Handling requests that include attached files

### Using Insomnia

- Select the right HTTP method for your endpoint.
- Choose binary file attachment from the body menu (where you normally put the body of a request)
- Set headers on the Headers tab (this example assumes an image file in jpeg format, named `profile-photo.jpg`):

  ```txt
  Content-Type: image/jpeg
  Content-Disposition: attachment; filename=profile-photo.jpg
  ```

For more information on these headers see References.

#### CORS for file upload

Assuming you are using `django-cors-headers`, you'll need to add the following to `settings.py` to allow the request headers necessary for file attachments:

```py
# in settings.py

from corsheaders.defaults import default_headers

CORS_ALLOW_HEADERS = list(default_headers) + [
    'content-disposition',
]
```

## 📖 Read | 📺 Watch | 🎧 Listen

### File Upload

- [Django File (and Image) Uploads Tutorial](https://learndjango.com/tutorials/django-file-and-image-uploads-tutorial) -> A good and very recent post from Will Vincent; he does not include all the necessary info to make file uploads work in production but otherwise it's a good overview.
- 📖 [File Upload with DRF](https://goodcode.io/articles/django-rest-framework-file-upload/)
- 🎧 + 📖 [Success with Static Files](https://www.mattlayman.com/django-riffs/success-static-files/)
- 📖 [What is Amazon S3?](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) -> Skim this -- this is Amazon's documentation and it gets really in-depth.
    - 📺 [Introduction to S3](https://www.youtube.com/watch?v=77lMCiiMilo) -> Also from Amazon


## 🔖 References

- [DRF File Upload][file-upload]
- [CORS][cors]
- [HTTP Headers][http-headers]

{% include reference_links.md %}
