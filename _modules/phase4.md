---
title: Phase 4
phase: 4
published: false
---

{% assign topics = site.data.phase4.topics | reverse %}
{% assign sorted_topics = topics | sort: 'date' | reverse | where: "published", "true"  %}

{% for topic in sorted_topics %}
{{ topic.date | date: "%B %-d" }}
: {% if topic.page %} [{{ topic.title }}]({% link {{topic.page}} %}){% else %} {{topic.title}} {% endif %}
: {% if topic.post_today %} [Post]({% link news.md %}){: .label .post-label } {% endif %}
{% endfor %}
