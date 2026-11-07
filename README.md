# EU-inequality

Website for inequality in the EU: https://onorante.github.io/EU-inequality/

The site is built by GitHub Pages with Jekyll. There is nothing to install: edit a file on GitHub, commit, and the site updates within a minute or two.

## Where things are

| To change | Edit |
|---|---|
| Colours, font, sizes, spacing | Section 1 at the top of `assets/css/main.css` |
| Page width, header style, section style, dark mode | `layout_options` in `_config.yml` |
| Menu | `_data/navigation.yml` |
| Home page text | The front matter at the top of `index.html` |
| Icons | `assets/icons/icons.svg` (one `<symbol>` per icon) |
| Header, footer, logo | `_includes/header.html`, `_includes/footer.html`, `_includes/logo.html` |

A reference page showing all colours, type and icons is at `/styleguide/` (not linked from the menu).

## Change the layout of the whole site

In `_config.yml`:

```yaml
layout_options:
  width: standard       # narrow | standard | wide
  header: inline        # inline | centered
  sections: split       # split | stacked
  color_scheme: light   # light | auto
```

Every page follows. A single page can override an option in its own front matter:

```yaml
layout_options:
  width: wide
```

## Add a page

Create a file such as `data.md`:

```markdown
---
layout: page
title: Data
icon: data
intro: The indicators and datasets we use.
---

Text in Markdown.
```

It will be published at `/data/`. Add it to the menu in `_data/navigation.yml`.

## Change an icon

Each icon in `assets/icons/icons.svg` is a `<symbol>` with an id such as `income`. Replace the shapes inside it with those of any 24×24 outline icon (for example from https://lucide.dev, the set used now) and keep the id. Every place that uses the icon changes with it. To add an icon, add a new `<symbol>` with a new id.

Icons from Lucide are under the ISC licence (`assets/icons/LICENSE-lucide.txt`).
