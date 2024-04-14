# Why this folder exists

We are using Cloudflare for some kind of link shortener
And we use those links in our documentation. For example
`/s/discord` will redirect you to `https://discord.gg/tVsPTHWTtr`

But because the link-validator we use has no idea about those redirects
it will error out. So we create this "dumb" pages in order to:

1. skip the validation failure
2. fallback to a browser redirect, even without Cloudflare

```yaml
---
title: Discord
head:
  - tag: "meta"
    attrs:
      http-equiv: "refresh"
      content: "0;url=https://discord.gg/tVsPTHWTtr"
---
```

## Why this file starts with `_`

So we skip generating a page for it
