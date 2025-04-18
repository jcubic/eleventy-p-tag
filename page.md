---
layout: layout.liquid
title: This is title
description: This is description
permalink: "/index.html"
tags: pages_en
---

{% assign posts = collections.my_collection | reverse %}

{% for post in posts %}
* [{{ post.data.title }}]({{ post.data.url }}) {{ post.content }}
{% endfor %}
