import { series, parallel, watch } from 'gulp'
import {
  archive,
  assets,
  clean,
  config,
  css,
  html,
  images,
  jsVue,
  mode,
  serve,
} from '@futhark/straws'

/* configuration */
const {
  ASSETS,
  CSS,
  IMAGES,
  JS,
  HTML,
  PATH,
} = config
const production = mode


/* Build */
const build = series(clean, parallel(assets, css, jsVue, images, html));

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
  watch(PATH.src + JS.src, series(jsVue))
    .on("all", series(serve.reload))
})

export default production ? series(build) : series(watcher)
export { archive, build }
