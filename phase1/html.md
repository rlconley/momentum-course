---
layout: post
title: HTML
parent: Phase 1 Front End
nav_order: 2
published: true
---

## Objectives

- Learn about HTML tags and elements
- Create a page with HTML

## Intro to GitHub Classroom

We are using a tool called GitHub classroom during this course. For each project, GitHub classroom will generate a repository (repo) on GitHub for each person to work in.

Each day we will share an project invitation here on this page. Clicking on the link will take you to a page where you will see a message that looks something like this:

![]({{ 'assets/images/gh-classroom-screenshot.png' | relative_url }}){:.img--post}

You'll see your github username as part of the repo name instead of `your-github-username`. When you accept the project, GitHub will create your homework repo and, when it is done, give you a link to it (from now on, this is the link you will use to see your project on GitHub, NOT the project invitation link). Go to that newly created repo and click on the green button to "Clone or download" your repo. This will copy the repo's url to your clipboard. If you aren't sure how to do this, there is a link to a video demo below.

In your terminal, navigate to the folder where you intend to keep your projects. When you are in the directory you want to be in (check with `pwd`!), type `git clone url-for-your-repo`, but in place of `url-for-your-repo`, paste in the url you copied from GitHub. You'll see output indicating the repo is being cloned. When it's done, make sure you `cd` into it and type `git status` to see that you are in a git repo. Open this repo in VS Code (an easy way to do this is to type `code .` when you are in the project repo) and do your work here. Add and commit in the terminal as you work.

## Using VS Code

VS Code (or Visual Studio Code) is a code editor made by Microsoft. It is free and open source, and it's used by many professional developers these days.

See [Getting Started with VS Code](https://code.visualstudio.com/docs/introvideos/basics) for an overview and a video intro to using this tool. **NOTE**: The video begins with installation instructions, which you can skip. You installed this with homebrew in the computer setup instructions (by running `brew install visual-studio-code`), so you should be able to see an icon for Visual Studio Code in your `Applications` folder. If you have not installed it yet, make sure you do. We will use it every day from now on.

## 🎯 Project: Build a small business website

You submit this project by pushing your code to your project repo on GitHub. Please get as far as you can before our next meeting.

- [Link to the project invitation]({{ site.data.projects.html_small_business.url }})
- [Quick video showing how to clone your project repo](https://www.loom.com/share/c7871fa5f80f4cbda3dbcce36db68dab)

## 🔖 References

- [Accessibility (a11y)]({% link references/a11y.md %})
- [HTML]({% link references/html.md %})
- [Asking Questions and Getting Help][help]
- [Using Visual Studio Code][vs-code]
- [HTML notes]({{ site.team_notes_repo }}/blob/main/html.md)
- [Git Notes]({% link references/git-and-cli.md %})

{% include reference_links.md %}
