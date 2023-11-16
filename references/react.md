---
title: React
category: JavaScript
parent: References
layout: resource_list
---

{% include summary_toc.html %}

## Tutorials

- [Ali Spittel, Beginner's Guide to React Tutorial](https://welearncode.com/beginners-guide-react-2020/).
- [Kent C. Dodds, The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)
- [The official (beta) React tutorial](https://beta.reactjs.org/learn/tutorial-tic-tac-toe) - classic, official.
- [Dave Ceddia, React Tutorial](https://daveceddia.com/react-getting-started-tutorial/)

## Getting Started

- ⭐ [Official (Beta) React Docs](https://beta.reactjs.org/learn)
- [React Dev Tools Extension Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) Essential. Please install it.
- [Create React App Docs](https://create-react-app.dev/docs/getting-started)
- [Older Official React docs](https://reactjs.org/docs/getting-started.html) Uses older class syntax intead of hooks.

## React Concepts

- [What is React? A Visual Introduction for Beginners](https://learnreact.design/posts/what-is-react)
- [React Mental Model: Cutting Holes in HTML](https://learnreact.design/posts/react-mental-model-cut-holes-in-html-template)
- [Understanding what it means to be declarative instead of imperative - video](https://youtu.be/E7Fbf7R3x6I)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- [Thinking in React 2020](https://dev.to/laserreindeer/thinking-in-react-the-2020-version-4c18)
- [Thinking "declaratively" in React](https://daveceddia.com/thinking-statefully/)
- [Why React Re-Renders](https://www.joshwcomeau.com/react/why-react-re-renders/)
- [Jenn Creighton, React Is Fiction](https://www.youtube.com/watch?v=3s-vgOwNpac)

## Props and State

- [Props vs. State - blog post](https://lucybain.com/blog/2016/react-state-vs-pros/) ⚠️ _This post references the older class syntax of React. The basic concepts are the same, though._
- [Using State vs Props in React - video](https://www.youtube.com/watch?v=IYvD9oBCuJI)
- [Props & State Re-explained](https://learnreact.design/posts/props-state-reexplained)

## Components

- [Component Design in React](https://marvelapp.com/blog/making-good-component-design-decisions-in-react/)

## Managing State

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) -- This is the official doc page, so it includes examples with older React sytax using JavaScript classes for components. To see it with hooks, watch the video [Lifting State Up with Hooks](https://www.youtube.com/watch?v=HF4o9KAZNxw).
- [React Beta Docs: Managing State](https://beta.reactjs.org/learn/managing-state)
- [Syntax.fm podcast: State in React](https://syntax.fm/show/170/state-in-react)

## Conditional Rendering

- [4 Techniques for Conditional Rendering in React](https://linguinecode.com/post/4-techniques-conditional-render-react-props-state)
- [Conditional Rendering in React](https://www.robinwieruch.de/conditional-rendering-react)
- [React Official Docs: React Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [5 Ways to Implement Conditional Rendering in React](https://blog.bitsrc.io/5-ways-to-implement-conditional-rendering-in-react-64730323b434)

## Events

- [React Docs: Handling Events in React](https://reactjs.org/docs/handling-events.html)
- [Handling onClick Events in React](https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/)
- [Handing Events in React with examples for functional components](https://www.newline.co/@andreeamaco/how-to-use-react-onclick-events-in-class-and-functional-components--fb63a01e)
- [Supported Events in React](https://reactjs.org/docs/events.html#supported-events)

## AJAX in React

- [Axios on GitHub](https://github.com/axios/axios)
    - [Axios docs: Getting Started](https://axios-http.com/docs/intro)
    - [POST request example](https://axios-http.com/docs/post_example)
    - [POST request config](https://github.com/axios/axios#axiosconfig)
    - [Axios Request Config](https://github.com/axios/axios#request-config)
    - [Axios Response Schema](https://github.com/axios/axios#response-schema)
- [Notes: JS for React](https://github.com/momentumlearn/student-resources/blob/main/articles/js-for-react.md)
- [React Official Docs: AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)
- [CORS explained for front-end devs](https://dev.to/lydiahallie/cs-visualized-cors-5b8h)

## useEffect

- [Official React docs: Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [Ryan Florence tweet summarizing useEffect](https://twitter.com/ryanflorence/status/1125041041063665666)
- [Dave Ceddia: How useEffect Works, with Examples](https://daveceddia.com/useeffect-hook-examples/)
- [A Visual Guide to useEffect](https://alexsidorenko.com/blog/useeffect/)

## useRef

- [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html) - class-based component examples
- [useRef hook](https://reactjs.org/docs/hooks-reference.html#useref)

## Custom Hooks

- [Custom hook recipes](https://usehooks.com/)
- [More custom hooks](https://github.com/streamich/react-use)
- [Official React docs on custom hooks](https://reactjs.org/docs/hooks-custom.html)

### Custom hooks for local storage

- [Persisting React State in localstorage](https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/) _This blog post explains why you'd use a custom hook for this purpose as well as how you'd write it from scratch._
- [useLocalStorageState](https://github.com/astoilkov/use-local-storage-state) _This npm package gives you a custom hook to do what the above article walks you through doing._

## Forms

_See also [JS: Forms][js-forms] and [HTML: Forms][html-forms]_

- [React beta docs API reference: working with `<input>`](https://beta.reactjs.org/reference/react-dom/components/input)
- [React Mental Model: Working with Input](https://learnreact.design/posts/react-mental-model-html-input)
- [Dave Ceddia: React Forms](https://daveceddia.com/react-forms/)
- [React Official Docs: Uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
- [Controlled vs uncontrolled form inputs in React](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/) _This is a good summary of the two options for forms in React, but be aware that the code examples use the older class syntax instead of function components with hooks._
- [Data Binding in React (Using different form fields and keeping values in sync with state)](https://www.joshwcomeau.com/react/data-binding/)

## File Upload

- [MDN: File input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [MDN: Accessing selected files](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#accessing_selected_files)
- [using the FormData object](https://developer.mozilla.org/en-US/docs/Web/API/FormData/Using_FormData_Objects) You do not need to use this, but many online tutorials about file upload will show examples using this, and it is helpful to know about.

## Authentication

- [Token Authentication Endpoint guide for djoser library](https://djoser.readthedocs.io/en/latest/token_endpoints.html) -> This is the library being used by the backend

## Local Storage and State

- [use-local-storage-state](https://github.com/astoilkov/use-local-storage-state) -> You would `npm install use-local-storage-state` to use it in your code
    - Check out [this custom hook code example](https://usehooks.com/useLocalStorage/), which shows how you could implement this yourself (you could even borrow this code and use it in your project instead of the above library if you wanted to!).
- [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) Using local storage without syncing it with state may cause weird bugs, but you should know about the underlying local storage API that is implemented in browsers.

## Deployment

- [Instructions for deploying a React app to Netlify](https://momentumlearn.notion.site/Deploying-a-React-app-to-Netlify-409f3e2a2ae44ccd857b3797ff0963f8)
- [Netlify Docs](https://docs.netlify.com/site-deploys/create-deploys/)

## The Ship-It Mindset

- [About the Ship It Mindset](https://excid3.com/blog/finishing-is-all-that-matters)
- [ship it squirrel](https://shipitsquirrel.github.io/)

## Mocking Data in Development

- [How to Build a Front-End App Before you Have an API](https://dev.to/momentum/how-to-build-a-front-end-app-before-you-have-an-api-3ai3)
- [Create a mock API with Mockoon](https://mockoon.com/tutorials/getting-started/)

## File Structure

This is _very_ subjective, but there are strategies and organizational patterns that you can follow. You should follow the practices and conventions established by the team that you work with.

For starters, here are two good takes on how to organize your files.

- [React Folder Structure in 5 Steps](https://www.robinwieruch.de/react-folder-structure/)
- [Delightful React File/Directory Structure](https://www.joshwcomeau.com/react/file-structure/)

## React Router

### Basics

- [React Router Overview: What It Does and Why We Need It](https://reactrouter.com/en/main/start/overview#feature-overview)
- [React Router Official Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [How to Set Up React Router and Route to Other Components](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/)
- [Learn React Router v6 in 45 minutes](https://youtu.be/Ul3y1LXxzdU)

### General

- [React Router docs](https://reactrouter.com/en/main)
- [React Router Main Concepts](https://reactrouter.com/en/main/start/concepts) _This is pretty in-depth, and you may not need it, but it's helpful if you want more explanation._
- [A Complete Guide to React Router](https://ui.dev/react-router-tutorial/) _really comprehensive, really good_
- [The Complete Guide to URL Parameters with React Router](https://ui.dev/react-router-url-parameters/)

## Search

- [Axios Docs: Including search params in the request config](https://github.com/axios/axios#request-config)
- [Blog post on query params with Axios](https://www.kindacode.com/snippet/axios-passing-query-parameters-in-get-post-requests/)

### Filtering existing data in your component

You could also perform a search without making an AJAX request, by filtering data that you already have in React. Here are a couple of examples of how you could do that.

- [Create a search bar from scratch](https://blog.logrocket.com/create-search-bar-react-from-scratch/)
- [How to Build a Search Bar in React](https://www.emgoto.com/react-search-bar/)

{% include reference_links.md %}
