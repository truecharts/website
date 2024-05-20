# Chart Docs
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## News

- To add new authors, add their username in the `authors.ts` file in `src/content/docs/news/authors.ts`.
- News Posts **must** have these fields in the `frontmatter`:
  - `title`
  - `slug` (must start with `news/`)
  - `date`
  - `authors` (The key in the `authors` object in `src/content/docs/news/authors.ts`)

## Supported Code Block Languages

Check upstream [docs](https://github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-grammars/README.md#grammars)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev-windows`     | Starts local dev server on windows machines      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build),
or jump into the [Astro Discord server](https://astro.build/chat).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Shrinks99"><img src="https://avatars.githubusercontent.com/u/5672810?v=4?s=100" width="100px;" alt="Henry Wilkinson"/><br /><sub><b>Henry Wilkinson</b></sub></a><br /><a href="https://github.com/truecharts/website/commits?author=Shrinks99" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!