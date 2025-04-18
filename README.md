# Eleventy Bug

## Usage

```bash
git clone <URL>
npm install
npx @11ty/eleventy --serve
```

## Issue

This structure:

```liquid
{% for post in posts %}
* [{{ post.data.title }}]({{ post.data.url }}) {{ post.content }}
{% endfor %}
```

Generates this HTML when there are more than one item in collection:

```html
<li>
  <p>
     <a href="https://www.11ty.dev/">Eleventy is Cool</a>
     <p>This is official <strong>Eleventy</strong> Website</p>
  </p>
</li>
```

`<p>` inside `<p>` tag, and when you add `IdAttributePlugin` you end up with:

```html
<li>
  <p><a href="https://www.11ty.dev/">Eleventy is Cool</a> </p>
  <p>This is official <strong>Eleventy</strong> Website</p>
  <p></p>
</li>
```

empty `<p></p>` at the end.
