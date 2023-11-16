---
title: Phase 1
phase: 1
published: true
---

{% assign topics = site.data.phase1.topics | reverse | where: "published", "true" %}
{% assign projects = site.data.phase1.projects %}
{% assign demos = site.data.phase1.demos %}

{% for topic in topics %}
{{ topic.date | date: "%B %-d" }}
: {% if topic.page %} [{{ topic.title }}]({% link {{topic.page}} %}){% else %} {{topic.title}} {% endif %}
: [Project]({{ projects[topic.project_name].url }}){:target="_blank"}{:rel="noopener noreferrer"}{: .label .project-label } {% if topic.code_demo %} [Demo]({{ demos[topic.code_demo].url }}){:target="_blank"}{:rel="noopener noreferrer"}{: .label .code-demo-label } {% endif %}
{% endfor %}
