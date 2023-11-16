---
layout: topic
title: Multiple Components and Conditional Rendering
topic: JavaScript
category: phase3-fe
parent: Phase 3 Front End
nav_order: 5
published: false
---

## 🎯 Objectives

- Troubleshooting AJAX requests
- Using multiple components and conditional rendering to create multiple views of your application

## 🏗️ Project: Continuing React Trivia

Be methodical in your approach and don't try to do too much at once. It can help to talk with other developers to break the project down into steps you can take.

Goals in the order you should tackle them:

1. Get a list of categories from the Trivia API showing up on the page.
2. Make your trivia categories selectable. When a user clicks on a category to select it, you should make a request to get at least 10 questions for that category (note: the API will let you specify how many questions you want to get back and it will let you specify the type (e.g., multiple choice).
3. If you can get all the questions for the selected category, the next step is to show the questions. Ideally you want to show one question at at a time with answer choices for that question.
      - If this is too hard, just show the first question to start with.
      - Next, show the answer choices for that question (don't worry about the order at first; you can change that later).
      - When you can show one question with its answer choices, then make it possible for the user to see the next question in the list of questions by clicking a button
4. Make it possible for the user to select their answer choice. You will need to know what answer they selected, and you will need to know the correct answer. They got the answer right if the answer they selected is the same as the correct answer -- so you'll need to compare those two values somehow.
5. Tell the user if they got the question right.
      - OR keep track of questions answered correctly and tally them at the end (something like, "You got 6 out of 10 questions right!").
6. Have a way for the quiz to end. Optionally, go back to the list of categories to start another quiz.

If you read a goal and don't know how to do it, break it down into smaller goals. You may find that you need to do this a few times to break tasks down into smaller and smaller bits. This is more than OK: it's a smart way to work, and [all developers do it](https://www.developerway.com/posts/prison-break-solving-life-as-a-developer).

**By the end of the week you should have the first three goals done**, or at least the first two and the third in progress.

## 📖 Read | 📺 Watch | 🎧 Listen

Re-visit anything from yesterday's reading/watching/listening that you didn't get to, and:

- [Why React Re-Renders](https://www.joshwcomeau.com/react/why-react-re-renders/)
- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) -- This is the official doc page, so it includes examples with older React sytax using JavaScript classes for components. To see it with hooks, watch the video [Lifting State Up with Hooks](https://www.youtube.com/watch?v=HF4o9KAZNxw).

## 🔖 References

- [Conditional Rendering in React][react-conditional-render]
- [Managing State in React][react-state]

{% include reference_links.md %}
