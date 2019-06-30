# Marp CLI example

**The good starter example for using [Marp] via [Marp CLI].**

- Write your slide deck by [Marp] Markdown.
- Manage the content of slides via Git. (Using [GitPitch](https://gitpitch.com/) style `PITCHME.md`)
- Host your deck at GitHub, and publish as webpage with [Netlify] / [Now]!

[marp]: https://marp.app/
[marp cli]: https://github.com/marp-team/marp-cli
[netlify]: https://www.netlify.com/
[now]: https://zeit.co/now

<p align="center">
  <a href="https://yhatt-marp-cli-example.netlify.com/"><img src="https://yhatt-marp-cli-example.netlify.com/og-image.jpg" width="500" /></a>
</p>

## See published slide

- <img src="https://www.netlify.com/img/press/logos/logomark.svg" width="24" height="24" valign="bottom" /> **[Netlify]**: https://yhatt-marp-cli-example.netlify.com/
- <img src="https://assets.zeit.co/image/upload/front/assets/design/now-black.svg" width="24" height="24" valign="bottom" /> **[Now]**: https://yhatt-marp-cli-example.now.sh/

## Usage

It's surprisingly easy to start writing your slide deck!

### <img src="https://www.netlify.com/img/press/logos/logomark.svg" width="24" height="24" valign="bottom" /> [Netlify]

Push **"Deploy to netlify"** button. [Netlify] will create your repository based on this example and host website automatically.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yhatt/marp-cli-example)

After than, clone _your repository_ and install Marp CLI. (Required [Node.js](https://nodejs.org/) >= 8)

```bash
git clone https://github.com/[your-name]/[repository-name].git
cd ./[repository-name]

npm install
```

OK, ready to write your slide deck! Edit **`PITCHME.md`** with your favorite editor, and preview with `npm run start`. By pushing Git commit to `master`, Netlify will host the deck to website.

> :information_source: Netlify integration can make an [Open Graph](http://ogp.me/) image automatically.

### <img src="https://assets.zeit.co/image/upload/front/assets/design/now-black.svg" width="24" height="24" valign="bottom" /> [Now]

You can try publishing deck by using [Now] without a forked repository. After than [install and setup Now](https://zeit.co/docs/v2/getting-started/installation/), clone this repository and just run `now`.

```bash
git clone https://github.com/yhatt/marp-cli-example.git
cd ./marp-cli-example

now
```

An example slide will publish to **`https://marp-cli-example.[your-name].now.sh`**. When you made a satisfied deck by editing `PITCHME.md`, publish to your favorite and friendly URL by `now alias`.

```bash
# Alias to https://friendly-subdomain.now.sh
now alias https://marp-cli-example.[your-name].now.sh friendly-subdomain

# Alias to your custom domain registered to Now
now alias https://marp-cli-example.[your-name].now.sh your-custom-domain.com
```

Of course, you can manage deck via Git / GitHub at a forked repository. As same as Netlify, [Now GitHub integration](https://zeit.co/github) allows publishing `master` branch automatically.

## How to write

Please see the documentation of [Marpit Markdown](https://marpit.marp.app/markdown), [the features of Marp Core](https://github.com/marp-team/marp-core#features), and the default example in [`PITCHME.md`](https://raw.githubusercontent.com/yhatt/marp-cli-example/master/PITCHME.md).

### Assets and themes

- `assets` directory can put your assets for using in the deck. (e.g. Image resources)
- `themes` directory can put [custom theme CSS](https://marpit.marp.app/theme-css). To use in the deck, please change `theme` global directive.

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
