---
layout: page
title: Topics by Date
description: Listing of course topics by date.
permalink: index.html
has_toc: false
nav_order: 1
---

# Software Engineering Immersive

_Topics are listed by date, newest to oldest. New entries are added daily._

{% assign modules = site.modules | sort: "phase" | reverse | where: "published", "true"%}

{% for module in modules %}
{{ module }}
{% endfor %}
