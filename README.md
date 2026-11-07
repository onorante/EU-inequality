# EU-inequality

Website for inequality in the EU: https://onorante.github.io/EU-inequality/

The site is built by GitHub Pages with Jekyll. There is nothing to install: edit a file on GitHub, commit, and the site updates within a minute or two.

## Structure of the site

| Menu | Address | File |
|---|---|---|
| Home | `/` | `index.html` |
| About | `/about/` | `about.md` |
| Research topics | `/topics/` | `topics.md`, plus one file per topic in `_topics/` |
| Publications | `/publications/` | `publications.html`, plus one file per publication in `_publications/` |
| Data and tools | `/data/` | `data.md` |
| Events and seminars | `/events/` | `events.html`, plus one file per event in `_events/` |
| Collaborate | `/collaborate/` | `collaborate.md` |

Not in the menu: page not found (`404.html`) and a style guide showing colours, type and icons (`styleguide.html`, at `/styleguide/`).

Topics, publications and events are **collections**: each entry is one file with its own page, and the lists on the site are built from these files automatically. A publication appears on the Publications page, on the page of each of its topics and on the home page; an event appears on the Events and seminars page, on the pages of its topics and, if it is the next one, on the home page.

## Add a publication

1. Copy `_templates/publication.md` into the `_publications` folder.
2. Give it a short name without spaces, for example `wealth-at-the-top.md`. The page will be `/publications/wealth-at-the-top/`.
3. Fill in the fields (title, authors, date, type, topics, summary in plain words; optional: series, PDF, DOI, publisher's page, code) and write the abstract below the second line of dashes.

Types: `policy-brief`, `working-paper`, `technical-report`, `handbook-chapter`, `data-note`, `presentation` (labels in `_data/publication_types.yml`).

## Add an event or seminar

1. Copy `_templates/event.md` into the `_events` folder and rename it, for example `seminar-2027-03-wealth.md`.
2. Fill in the fields and write the description below the second line of dashes.

Types: `seminar`, `flagship`, `workshop`, `course`, `other` (labels in `_data/event_types.yml`). An event counts as upcoming until its `date`, then as past. This is decided each time the site is rebuilt, that is after every change to the repository; if nothing changes for a while, a past event stays under "upcoming" until the next change. When the exact date is not known, put an approximate `date` for ordering and the text to show in `when` (for example "Autumn 2027").

## Add a news item

Add an entry to `_data/news.yml` (the file contains an example to copy). News items appear on the home page and on the Events and seminars page; when there are none, these blocks are hidden.

## Edit a research topic

Each topic is a file in `_topics`. The front matter holds the title, the short title, the one-sentence summary used in the tiles, the "In short" explainer and the example; the text below the second line of dashes holds "Why it matters for Europe", "What we study" and "Methods and data". The lists of results and related events are added automatically. To add a topic, copy `_templates/topic.md`. Publications and events refer to topics by their `key`: `beyond-income`, `beyond-averages`, `wealth`, `economy`, `place`.

Files whose name starts with `_` (such as everything in `_templates`) are never published.

## Where things are

| To change | Edit |
|---|---|
| Colours, font, sizes, spacing | Section 1 at the top of `assets/css/main.css` |
| Page width, header style, section style, dark mode | `layout_options` in `_config.yml` |
| Menu | `_data/navigation.yml` |
| Home page text | The front matter at the top of `index.html` |
| Icons | `assets/icons/icons.svg` (one `<symbol>` per icon) |
| Header, footer, logo | `_includes/header.html`, `_includes/footer.html`, `_includes/logo.html` |
| Layout of topic, publication and event pages | `_layouts/topic.html`, `_layouts/publication.html`, `_layouts/event.html` |
| Lists of publications, events, news, topic tiles | `_includes/publication-list.html`, `event-list.html`, `news-list.html`, `topic-grid.html` |

## Change the layout of the whole site

In `_config.yml`:

```yaml
layout_options:
  width: standard       # narrow | standard | wide
  header: centered      # inline | centered
  sections: stacked     # split | stacked
  color_scheme: light   # light | auto
```

Every page follows. A single page can override an option in its own front matter:

```yaml
layout_options:
  width: wide
```

## Add a page

Create a file such as `team.md`:

```markdown
---
layout: page
title: Team
icon: households
intro: One sentence shown under the title.
---

Text in Markdown.
```

It will be published at `/team/`. Add it to the menu in `_data/navigation.yml`.

A page can also show lists of items in the same style as the home page (see `data.md`): add `sections` to its front matter, each with an `id`, a `title`, an optional `intro` and a list of `items` (`title`, `text`, and optionally `icon` and `url`). The Markdown text comes before these lists, or after them with `body_position: after`.

## Change an icon

Each icon in `assets/icons/icons.svg` is a `<symbol>` with an id such as `income`. Replace the shapes inside it with those of any 24×24 outline icon (for example from https://lucide.dev, the set used now) and keep the id. Every place that uses the icon changes with it. To add an icon, add a new `<symbol>` with a new id, and add the id to the list at the top of `styleguide.html` to see it in the style guide.

Icons from Lucide are under the ISC licence (`assets/icons/LICENSE-lucide.txt`).
