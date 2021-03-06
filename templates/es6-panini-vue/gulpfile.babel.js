import { series, parallel, watch } from 'gulp'
import {
  archive,
  assets,
  clean,
  config,
  css,
  panini,
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
  PANINI,
  PATH,
} = config
const production = mode


/* Build */
const build = series(clean, parallel(assets, css, jsVue, images, panini.html));

/* Watching */
const watcher = series(build, serve.init, () => {
  // assets
  watch(PATH.src + ASSETS.src, series(assets))
    .on("all", series(serve.reload))
  // css
  watch(PATH.src + CSS.src, series(css))
    .on("all", series(serve.reload))
  // panini html
  watch(PATH.src + PANINI.src, series(panini.refresh, panini.html))
    .on("all", series(serve.reload))
  // panini data
  watch(PATH.src + PANINI.data, series(panini.refresh, panini.html))
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
