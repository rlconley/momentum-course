---
title: Phase 3
phase: 3
published: false
---

{% assign be_topics = site.data.phase3.topics_be | reverse %}
{% assign fe_topics = site.data.phase3.topics_fe | reverse %}
{% assign all_topics = be_topics | concat: fe_topics %}
{% assign sorted_topics = all_topics | sort: 'date' | reverse | where: "published", "true" %}
{% assign projects = site.data.phase3.projects %}
{% assign demos = site.data.phase3.demos %}

{% for topic in sorted_topics %}
{{ topic.date | date: "%B %-d" }}
: **{{topic.tag}}**{: .label .{{topic.tag}}-label } {% if topic.page %} [{{ topic.title }}]({% link {{topic.page}} %}){% else %} {{topic.title}} {% endif %}
: {% if topic.post_today %} [Post]({% link news.md %}){: .label .post-label } {% endif %} [Project]({{ projects[topic.project_name].url }}){:target="_blank"}{:rel="noopener noreferrer"}{: .label .project-label } {% if topic.code_demo_url %} [Demo]({{ demos[topic.code_demo].url }}){:target="_blank"}{:rel="noopener noreferrer"}{: .label .code-demo-label } {% endif %}
{% endfor %}
