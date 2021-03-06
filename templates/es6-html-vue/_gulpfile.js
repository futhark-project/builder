/* Imports */
const { series, parallel, watch } = require('gulp')

const {
  archive,
  assets,
  clean,
  config,
  css,
  html,
  images,
  js,
  modeArg,
  serve,
} = require('@futhark/straws')

/* configuration */
const {
  ASSETS,
  CSS,
  IMAGES,
  JS,
  HTML,
  PATH,
} = config

const production = modeArg


/* Build */
const build = series(clean, parallel(assets, css, js, images, html));

/* Watching */
const watcher = series(build, serve.init, () => {
  // assets
  watch(PATH.src + ASSETS.src, series(assets))
    .on("all", series(serve.reload))
  // css
  watch(PATH.src + CSS.src, series(css))
    .on("all", series(serve.reload))
  // html
  watch(PATH.src + HTML.src, series(html))
    .on("all", series(serve.reload))
  // images
  watch(PATH.src + IMAGES.src, series(images))
    .on("all", series(serve.reload))
  // javascript
  watch(PATH.src + JS.src, series(js))
    .on("all", series(serve.reload))
})

module.exports = {
  archive: archive,
  default: production ? series(build) : series(watcher),
  build: build
}
