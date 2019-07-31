# futhark:builder, Template for es6 + panini


## What is futhark:builder

Futhark:builder is a set of templates to kickstart your projects.
It has been created to be cloned and be a boilerplate for new projects.
It give you also an exemple of how to use the modules of the futhark project.


## Main features

- gulp for automation
- babel transcoding and pollyfills
- es6 modules (import/export)
- sass compilation
- panini templating


## Directories architecture

```
.
├── .babelrc
├── .browserlistrc
├── .editorconfig
├── .eslintrc
├── gulpfile.babel.js
├── package.json
├── src
│   ├── fonts
│   ├── images
│   ├── index.html
│   ├── javascript
│   │   ├── main.js
│   │   └── modules
│   │       └── greeting.js
│   ├── json
│   └── sass
│       └── style.scss
└── straws.config.json
```

If you need to change the project architecture go to the `straws.config.json` file.
