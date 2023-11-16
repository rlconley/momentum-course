---
layout: home
title: Posts
permalink: daily-update
has_children: true
nav_order: 2
---

## Posts & Announcements

{: .pt-3 .home-posts-headline }

{% assign daily_posts = site.daily_posts | reverse %}
{% for post in daily_posts %}
{{post.url}}
{{ post }}
{% endfor %}
