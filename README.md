# Eleventy Bug

## Usage

```bash
git clone <URL>
npm install
npx @11ty/eleventy --serve
```

## Issue

when adding:

```liquid
{% include "_abbr" %}
```

At the end of the page.md

The rendered HTML have:
* `<li>` tag with `<p>` inside
* empty `<p></p>` tag at the end of `<li>`
* an extra `<li></li>` tag
