<br  />

<div  align="center"><strong>Start your react typescript project with manual webpack config in seconds</strong></div>

<div  align="center">Flexible to control webpack, easy to deploy</div>
<div align="center"><sub><i>Keywords: React Starter, Webpack, Typescript, React.js, Redux, Babel, jest, react-router, sass, redux-thunk, pm2</i></sub></div>

<p align="center"><sub>Created with by 👻 <a href="#">Aldenn</a></sub></p>

<br  />

# Overview

React-Typescript-Webpack was config with React, Typescript and Webpack without CRA. Faster to star next react project.

---

## Quick Start

For Development:

1. Clone this repo to your local machine using:

   ```
   git clone git@github.com:thaind97git/react-typescript-webpack.git
   ```

2. Change the current working directory to the project:

   ```
   cd react-typescript-webpack
   ```

3. Install dependencies:

   ```
   [ yarn or npm ] install
   ```

4. At this point you can run `npm run dev` or `yarn dev` to run project with development mode

   _Now, your browser will auto open at `http://127.0.0.1:3000`_

For Production:

1. Run command to build:

   ```
   [ yarn or npm run ] build
   ```

2. Run project at build directory
   - Using pm2: `[ yarn or npm run ] start-pm2`
   - Run with terminal: `[ yarn or npm run ] start`

---

## Features

- [x] React hook
- [x] Webpack 5
- [x] Typescript
- [x] Sass
- [x] Redux-thunk
- [ ] Redux-saga
- [x] Jest
- [x] Axios
- [x] I18n
- [x] React-router
- [x] Alias
- [x] Hot reload
- [x] Eslint
- [x] Prettier and Husky

---

## How to using

- Router:

  - Create new feature at `src/features/<feature-name/>`
  - Create a `route.ts` inside `src/features/<feature-name/>` and export a default array match with rules:

    ```
    import { lazy } from 'react';
    const Component = lazy(() => import('./path-to-component'));

    export default [
      {
        /*
         * name of a route
         * using to apply key react when generate routes
         * required
        */
        name: 'name',
        /*
         * path of route
        */
        path: '/path-name',
        /*
         * using as exact in react-router
        */
        exact: true,
        /*
         * dynamic render layout for each route
         * header: false -> route will auto hide header
         * if this rendered don't need to declare
         * control this inside `src/store/slices/layoutSlice` with more section
        */
        layout: {
          header: false,
          footer: false,
        },
        /*
         * component rendered inside route
        */
        component: Component,
      },
    ];
    ```

    _- You don't need do anything else after create and modify `route.ts` because i'm using [import-glob](https://www.npmjs.com/package/import-glob) to auto import (check at `webpack/webpack.common.js` for plugin, `src/router/index.ts` and `src/layouts/main/index.tsx` for using)._

    _- If you don't want to use auto import or <b>using project with jest</b>, just using the code that i'm commented. Because i'm not yet support auto import for jest._

- Write new component

  - Create new folder at `src/components/<component-name/>`
  - Create an `index.tsx` and `style.scss`

    _- <b>Don't need</b> import `scss` into component, It will already merged into App.scss after you restart server._

    _- This is a feature by using [import-glob](https://www.npmjs.com/package/import-glob) (check at `webpack/webpack.common.js` for plugin and `src/styles/App.scss` for using)_

    _- You should use [BEM](http://getbem.com/) to write css without conflict_

---

## Carefully

- Don't create folder with the `PascalCase`. Because it will throw error when build prod at ubuntu. I will fix it later or happy if you have a PR to fix it.
  ```
  Module not found: Error: Can't resolve '@/path-to-pascal-case' in '/path-to-lower-case'
  ```

---

## Other References

- Webpack Plugins
  - [ts-loader](https://github.com/TypeStrong/ts-loader)
  - [import-glob](https://www.npmjs.com/package/import-glob)
  - [eslint-loader](https://www.npmjs.com/package/eslint-loader)
  - [babel-loader](https://github.com/babel/babel-loader)
  - [svg-loader](https://github.com/gregberge/svgr)
  - [sass](https://www.npmjs.com/package/sass), [sass-loader](https://www.npmjs.com/package/sass-loader)
  - [html-loader](https://www.npmjs.com/package/html-loader)
  - [alias](https://webpack.js.org/configuration/resolve/)
  - [webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin)
  - ...
- [React-scripts CRA](https://github.com/facebook/create-react-app/tree/master/packages/react-scripts/config)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-Staged](https://github.com/okonet/lint-staged)

## License

This project is licensed under the MIT license, Copyright (c) 2021 Aldenn.
For more information see `LICENSE.md`.
