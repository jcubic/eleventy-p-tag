---
layout: layout.liquid
permalink: "/index.html"
---

{% assign posts = collections.my_collection | reverse %}

{% for post in posts %}
* [{{post.date | date: "%Y-%m-%d" }}]: {% if post.data.url %}[{{ post.data.title }}]({{ post.data.url }}){% else %}{{ post.data.title }}{% endif %} {{ post.content }}
{% endfor %}

{% include "_abbr" %}
