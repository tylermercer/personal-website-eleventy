---
title: Tyler Mercer
layout: 'base'
pageScopedStyles: true
---

Hello from index.md

{% for post in collections.posts -%}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}