---
title: Phase 2
phase: 2
published: true
---

{% assign topics = site.data.phase2.topics | reverse | where: "published", "true" %}
{% assign demos = site.data.phase2.demos %}
{% assign projects = site.data.phase2.projects %}

{% for topic in topics %}
{{ topic.date | date: "%B %-d" }}
: {% if topic.page %} [{{ topic.title }}]({% link {{topic.page}} %}){% else %} {{topic.title}} {% endif %}
: [Project]({{ projects[topic.project_name].url }}){:target="_blank"}{:rel="noopener noreferrer"}{: .label .project-label } {% if topic.code_demo %} [Demo]({{ demos[topic.code_demo].url }}){:target="_blank"}{:rel="noopener noreferrer"}{: .label .code-demo-label } {% endif %}
{% endfor %}
