# Marp CLI example

**The good starter project to use [Marp CLI].**

- Write your slide deck by [Marp] Markdown.
- Manage the content of slides via Git.
- Host your deck at GitHub, and publish as webpage with [Netlify] / [Now]!

[marp]: https://marp.app/
[marp cli]: https://github.com/marp-team/marp-cli
[netlify]: https://www.netlify.com/
[now]: https://zeit.co/now

<p align="center">
  <a href="https://yhatt-marp-cli-example.netlify.com/"><img src="https://yhatt-marp-cli-example.netlify.com/og-image.jpg" width="500" /></a>
</p>

## See published slide

- <img src="https://www.netlify.com/img/press/logos/logomark.svg" width="16" height="16" /> **[Netlify]**: https://yhatt-marp-cli-example.netlify.com/
  <!-- - <img src="https://assets.zeit.co/image/upload/front/assets/design/now-black.svg" width="16" height="16" /> **[Now]**: https://yhatt-marp-cli-example.now.sh/ -->

## Usage

It's surprisingly easy to start writing your slide deck!

### [Netlify]

Push **"Deploy to netlify"** button. [Netlify] will create your repository based on this example and host website automatically.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yhatt/marp-cli-example)

After than, clone _your repository_ and install Marp CLI. (Required [Node.js](https://nodejs.org/) >= 8)

```bash
git clone https://github.com/[your-name]/[repository-name].git
npm install
```

OK, ready to write your slide deck! Edit **`PITCHME.md`** with your favorite editor, and preview with `npm run start`.

By pushing Git commit to `master`, Netlify will host the deck to website.

### [Now]

You can try publishing deck by using [Now] without fork repository. After than [install Now](https://zeit.co/docs/v2/getting-started/installation/), clone this repository and just run `now`.

```bash
git clone https://github.com/yhatt/marp-cli-example.git
now
```

An example slide will publish to https://yhatt-marp-cli-example-xxxxxxxxx.now.sh. When you made a satisfying deck by editting `PITCHME.md`, publish to your favorite and friendly URL by `now alias`.

```bash
now alias https://yhatt-marp-cli-example-xxxxxxxxx.now.sh your-deck-name
```

Of course, you can manage deck via Git / GitHub at forked repository. As same as Netlify, Now's GitHub integration allows to publish `master` branch automatically.

## How to write

Please see the documentation of [Marpit Markdown](https://marpit.marp.app/markdown), [the features of Marp Core](https://github.com/marp-team/marp-core#features), and the default example in [`PITCHME.md`](https://raw.githubusercontent.com/yhatt/marp-cli-example/master/PITCHME.md).

### Preview deck

```bash
npm run start
```

It will be opened preview window via Chrome, and track change of `PITCHME.md`.

### Build deck

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
