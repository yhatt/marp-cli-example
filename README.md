# Marp CLI example

**The good starter example for using [Marp] via [Marp CLI].**

- Write your slide deck by [Marp] Markdown.
- Manage the content of slides via Git. (Using [GitPitch](https://gitpitch.com/) style `PITCHME.md`)
- Host your deck at GitHub, and publish as webpage with [GitHub Pages], [Netlify], and [Vercel][vercel] (ZEIT Now)!

[marp]: https://marp.app/
[marp cli]: https://github.com/marp-team/marp-cli
[github pages]: https://pages.github.com/
[netlify]: https://www.netlify.com/
[vercel]: https://vercel.com/

<p align="center">
  <a href="https://yhatt.github.io/marp-cli-example"><img src="https://yhatt.github.io/marp-cli-example/og-image.jpg" width="500" /></a>
</p>

## See published slide deck

- <img src="https://icongr.am/octicons/mark-github.svg" width="24" height="24" valign="bottom" /> **[GitHub Pages]**: https://yhatt.github.io/marp-cli-example
- <img src="https://www.netlify.com/img/press/logos/logomark.svg" width="24" height="24" valign="bottom" /> **[Netlify]**: https://yhatt-marp-cli-example.netlify.app/
- <img src="https://raw.githubusercontent.com/yhatt/marp-cli-example/master/vercel.svg?sanitize=true" width="24" height="24" valign="bottom" /> **[Vercel]**: https://marp-cli-example.yhatt.now.sh/

## Usage

It's surprisingly easy to start publishing your slide deck through [Netlify] and [Vercel]! (GitHub Pages requires a few steps)

### <img src="https://icongr.am/octicons/mark-github.svg" width="24" height="24" valign="bottom" /> [GitHub Pages]

[Fork this repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) from **"Fork"** button in right-top corner to start!

#### Setup GitHub Actions

We have [GitHub Actions workflow](.github/workflows/github-pages.yml) to build and deploy from `master` to `gh-pages` automatically.

In the moment, deploying from public repository to GitHub Pages requires setting up your access token as secret. ([Track discussion in forum...](https://github.community/t5/GitHub-Actions/Github-action-not-triggering-gh-pages-upon-push/m-p/26869/highlight/true))

1. Go to **["Personal Access Tokens"](https://github.com/settings/tokens)** setting page and click **"Generate New Token"**.
2. Create new token with **"repo"** scope, and _copy generated token_.
3. Go to **"Settings"** tab in forked repository, and select **"Secrets"** from sidebar.
4. Add a new secret **"ACCESS_TOKEN"** with the value of generated token.
5. Turn on GitHub Actions in forked repository from **"Actions"** tab.

Marp slide deck generated from [`PITCHME.md`](PITCHME.md) will be published to `https://<your-name>.github.io/<repository-name>`.

> :warning: Please notice the slide deck hosted with GitHub Pages will be made public even if you forked this to private repository.

### <img src="https://www.netlify.com/img/press/logos/logomark.svg" width="24" height="24" valign="bottom" /> [Netlify]

Push **"Deploy to netlify"** button. [Netlify] will create your repository based on this example and host website from `master` branch automatically.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yhatt/marp-cli-example)

### <img src="https://raw.githubusercontent.com/yhatt/marp-cli-example/master/vercel.svg?sanitize=true" width="24" height="24" valign="bottom" /> [Vercel] (formerly ZEIT Now)

Push **"Deploy"** button. [Vercel] can choose to create your repository into GitHub / GitLab / BitBucket based on this example, or just to try publishing slide deck in your without fork.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/yhatt/marp-cli-example)

> :information_source: The auto-generated open graph image is not available in deployment through Vercel.

## How to write

For Marp slide deck features, please see the documentation of [Marpit Markdown](https://marpit.marp.app/markdown), [the features of Marp Core](https://github.com/marp-team/marp-core#features), and the default example in [`PITCHME.md`](https://raw.githubusercontent.com/yhatt/marp-cli-example/master/PITCHME.md) for .

You have to install [Node.js](https://nodejs.org/) and run `npm i` at first if you want to write slide deck with [Marp CLI].

### Edit deck

Just edit **[`PITCHME.md`](./PITCHME.md)**!

#### Preview deck

[**Marp for VS Code**](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension is the best partner for writing Marp slide deck with live preview.

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode">
    <img src="https://raw.githubusercontent.com/marp-team/marp-vscode/master/docs/screenshot.png" width="500" />
  </a>
</p>

#### Preview via CLI

```bash
npm run start
```

It will be opened preview window via installed Google Chrome, and track change of `PITCHME.md`.

### Assets and themes

- `assets` directory can put your assets for using in the deck. (e.g. Image resources)
- `themes` directory can put [custom theme CSS](https://marpit.marp.app/theme-css). To use in the deck, please change `theme` global directive.

### Build deck via CLI

```bash
npm run build
```

The built assets will output to `dist` folder.

#### Build per assets

```bash
npm run deck      # Output static HTML to dist/index.html
npm run og-image  # Output image for Open Graph to dist/og-image.jpg
```

## LICENSE

[WTFPL](/LICENSE)
