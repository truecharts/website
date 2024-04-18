# Chart Docs

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
