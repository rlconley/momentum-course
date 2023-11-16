---
layout: topic
title: Uploading Files
topic: JavaScript
category: phase3-fe
parent: Phase 3 Front End
nav_order: 11
published: false
---

## 🎯 Objectives

- Project progress check-in
- Get past any blockers you have
- File inputs and implementing file upload

## 🏗️ Wrapping Up This Project

What remains to be done on your project? Some things to consider:

- Is it working in production?
- Is it styled?
- Have you considered [how to handle states like errors (e.g., a 400 or 403 response), loading, or empty](https://blog.logrocket.com/ui-design-best-practices-loading-error-empty-state-react/)?

## 📂 Handling Uploaded Files

The back-end is learning how to accept requests that included attached files (including image files). They will need to provide you with an endpoint that can accept attached files so that you can make a request to upload the file. But even before that endpoint is working, you can implement the form to allow users to upload a file.

The HTTP method for the request could be a POST, PUT, or PATCH, depending on how the backend implements the endpoint. The example below is an update to an existing record; notice that we are using the PATCH method.

This request includes only the file itself and no JSON; notice that the file is in the second position as an argument to `axios.patch()` as the body of the request. We must set the Content-Disposition header, which required by the server to handle the binary file attachment, in addition to the Authorization and Content-Type headers.

```js
axios.patch(url, file, {
  headers: {
    Authorization: 'Token ' + token,
    'Content-Type': file.type,
    'Content-Disposition': `attachment; filename=${file.name}`
  }
}).then(res => console.log(res.data))
```

NOTE: If you Google how to include a file attachment in an AJAX request, you'll see a lot of references to [using the FormData object](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects). If you want to do it this way, please discuss with your back end devs, as they will need to make sure that they can parse MultiPart form content.

The above method does not use the FormData object. It's a little simpler in that it sends just the file and no additional data. You'll need a way to [access the file that is being uploaded by the user](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#accessing_selected_files). That file is what is stored in the `file` variable in the above example.

See the references below for more information about using a file input element and accessing a selected file. [The `useRef()` hook](https://reactjs.org/docs/hooks-reference.html#useref) will be helpful to get the files from the input element after a user has selected a file using the form.

## 🔖 Resources

- [HTTP headers][http-headers]
- [The useRef hook][react-useref]
- [Uploading Files][file-upload]

{% include reference_links.md %}
