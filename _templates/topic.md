---
# TEMPLATE FOR A RESEARCH TOPIC
# The five topics are in the _topics folder. To add one, copy this file there,
# rename it (the name becomes the address: /topics/name/) and fill it in.
# The topic then appears in the tiles on the home page and on the Research topics page.

title: "Full title of the topic"
short_title: "Short title"        # used in tiles, tags and the breadcrumb
key: name-of-the-file             # same as the file name, without .md; publications and events refer to it
order: 6                          # position among the topics
icon: dimensions                  # id of an icon in assets/icons/icons.svg
summary: "One sentence shown in the tiles and under the title."

in_short: |
  First paragraph of the explainer for non-specialists.

  Second paragraph.

example:
  title: "Title of the example"
  text: |
    A concrete example in plain words. Leave out the whole "example" block if there is none.
  # label: "A real example"       # optional; the default label is "A hypothetical example"

# Optional: who works on the topic, in Markdown. Without it, the page says that
# contributors will be listed as the work starts.
# team: |
#   - Name Surname (Institution)
---
## Why it matters for Europe

Text.

## What we study

- **Subtopic:** one sentence.

## Methods and data

Text.
