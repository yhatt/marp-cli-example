# Marp CLI example

[Marp CLI](https://github.com/marp-team/marp-cli) + [Netlify](https://www.netlify.com/) ≒ [GitPitch](https://gitpitch.com/) style hosting of [Marp](https://github.com/marp-team/marp) slide deck on the web.

### :point_right: https://yhatt-marp-cli-example.netlify.com/

<p align="center">
  <a href="https://yhatt-marp-cli-example.netlify.com/"><img src="https://yhatt-marp-cli-example.netlify.com/og-image.jpg" width="500" /></a>
</p>

## Usage

It's surprisingly easy to start writing your slide deck! Push **"Deploy to netlify"** button. Netlify will create your repository based on this example and host website automatically.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yhatt/marp-cli-example)

After than, clone _your repository_ and install Marp CLI. (Required [Node.js](https://nodejs.org/) >= 8)

```bash
git clone https://github.com/[your-name]/[repository-name].git
npm install
```

OK, ready to write your slide deck! Edit **`PITCHME.md`** with your favorite editor. By pushing Git commit to `master`, Netlify will host the deck to website.

### How to write

Please see the documentation of [Marpit Markdown](https://marpit.marp.app/markdown), [the features of Marp Core](https://github.com/marp-team/marp-core#features), and the default example in [`PITCHME.md`](https://raw.githubusercontent.com/yhatt/marp-cli-example/master/PITCHME.md).

### Preview deck

```bash
npm run start
```

It will be opened preview window, and track change of `PITCHME.md`.

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
