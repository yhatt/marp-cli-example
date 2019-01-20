# Marp CLI example

[Marp CLI](https://github.com/marp-team/marp-cli) + [Netlify](https://www.netlify.com/) ≒ [GitPitch](https://gitpitch.com/) style hosting of [Marp](https://github.com/marp-team/marp) slide deck on the web.

### :point_right: https://yhatt-marp-cli-example.netlify.com/

- Navigate slide deck with arrow key, mouse wheel, and swipe gesture.
- Toggle fullscreen by hitting <kbd>f</kbd> key.

## Usage

It's surprisingly easy to start writing your slide deck! Push **"Deploy to Netlify"** button. Netlify will create your repository based on this example and host website automatically.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yhatt/marp-cli-example)

After than, clone *your repository* and install Marp CLI. (Required [Node.js](https://nodejs.org/) >= 8)

```
git clone https://github.com/[your-name]/[repository-name].git
npm install
```

OK, ready to write your slide deck! Edit **`PITCHME.md`** with your favorite editor. By pushing Git commit to `master`, Netlify will host the deck to website.

### How to write

Please see the documentation of [Marpit Markdown](https://marpit.marp.app/markdown), [the features of Marp Core](https://github.com/marp-team/marp-core#features), and the default example in [`PITCHME.md`](https://raw.githubusercontent.com/yhatt/marp-cli-example/master/PITCHME.md).

### Preview deck

```
npm run start
```

It will be opened preview window, and track changes of `PITCHME.md`.

### Convert into static HTML

```
npm run build
```

The converted HTML will output to `dist/index.html`.

## LICENSE

[WTFPL](/LICENSE)
