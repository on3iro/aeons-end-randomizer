[![CircleCI](https://circleci.com/gh/on3iro/aeons-end-randomizer/tree/dev.svg?style=svg)](https://circleci.com/gh/on3iro/aeons-end-randomizer/tree/dev)
[![Netlify Status](https://api.netlify.com/api/v1/badges/210c9bd3-9f4d-4554-b9fc-0b319d89b81e/deploy-status)](https://app.netlify.com/sites/aer/deploys)
[![App](https://img.shields.io/badge/App-aeons--end--randomizer.de-%232196f3)](https://aeons-end-randomizer.de)
[![Docs](https://img.shields.io/badge/Docs-on3iro.github.io%2Faeons--end--randomizer-success)](https://on3iro.github.io/aeons-end-randomizer)
[![Official Aeons End Discord](https://img.shields.io/badge/AE%20Discord-https%3A%2F%2Fdiscord.gg%2FPvjcfPt-%237289DA.svg?style=flat-squar)](https://discord.gg/PvjcfPt)

![AER](./public/images/android-icon-96x96.png)

## ToC

<!-- vim-markdown-toc GFM -->

- [About](#about)
- [Updating to the newest version](#updating-to-the-newest-version)
- [Available Scripts](#available-scripts)
  - [`yarn start`](#yarn-start)
  - [`yarn test:jest`](#yarn-testjest)
  - [`yarn test:jest:ci`](#yarn-testjestci)
  - [`yarn test:coverage`](#yarn-testcoverage)
  - [`yarn test:components`](#yarn-testcomponents)
  - [`yarn test:components:coverage`](#yarn-testcomponentscoverage)
  - [`yarn test:redux`](#yarn-testredux)
  - [`yarn test:redux:coverage`](#yarn-testreduxcoverage)
  - [`yarn test:cy`](#yarn-testcy)
  - [`yarn test:cy:open`](#yarn-testcyopen)
  - [`yarn deploy:docs`](#yarn-deploydocs)
  - [`yarn run build`](#yarn-run-build)
  - [`yarn run build:gh-pages`](#yarn-run-buildgh-pages)
  - [`yarn run deploy`](#yarn-run-deploy)
  - [`yarn run analyze:app`](#yarn-run-analyzeapp)
  - [`yarn run analyze:vendor`](#yarn-run-analyzevendor)
- [Using types and data in other apps](#using-types-and-data-in-other-apps)
- [TODO - writing client side migrations](#todo---writing-client-side-migrations)
- [Contribution Guidelines](#contribution-guidelines)
- [Code of Conduct](#code-of-conduct)

<!-- vim-markdown-toc -->

## About

Aeons End Randomizer is an unofficial companion app for the popular deck
building game [Aeons End](https://boardgamegeek.com/boardgame/191189/aeons-end).
It is build as an offline first Progressive Web App, which means that it can be opened inside
a regular web browser, but also be saved to you smartphone or tablet device (by using the
"add-to-homescreen" option, your handheld browser provides).
If you do the latter, the randomizer will behave almost like a native application.

AER currently does not communicate with any kind of backend. All user data, like e.g.
your settings are saved locally on you device in your browsers instance of [indexedDB](https://boardgamegeek.com/boardgame/191189/aeons-end).
This way you will always be able to use the app, even during periods where you do not have an internet connection.

## Updating to the newest version

Currently updating is a bit cumbersome (don't worry, we are working on it).
To receive the newest version of the app close all instances of it (browser tabs and
instances added to your homescreen) and re-open them.
In most cases this should do the trick. If you still do not have the newest version
(check by referencing the version number inside the apps drawer), repeat the process.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test:jest`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:jest:ci`

Runs jest single threaded for CI purposes.
Otherwise memory issues might occur.

### `yarn test:coverage`

Runs all tests and creates coverage for them

### `yarn test:components`

Only runs component tests

### `yarn test:components:coverage`

Only runs component tests and creates coverage

### `yarn test:redux`

Only runs redux related tests

### `yarn test:redux:coverage`

Only runs redux tests and creates coverage

### `yarn test:cy`

Runs cypress test inside the command line

### `yarn test:cy:open`

Opens the cypress app to run tests and see the dashboard

### `yarn deploy:docs`

Deploys the `./docs` directory directly to github pages.
You need to have repository access and push permissions to run this command.

> **NOTE:** To show the docs locally, you have to install docsify as global npm
> package and run `docsify serve docs -p 3001` inside the project root.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run build:gh-pages`

This builds the app for github pages. _This should no longer be used, as production moved to netlify!_

### `yarn run deploy`

_This is currently used as a our legacy way of deployment! We now deploy manually to surge instead._
Creates the regular build and pushes to the repositories `gh-pages` branch afterwards.

### `yarn run analyze:app`

Runs the source-map-explorer and displays its results inside the browser.
This analyzes only app data. `node_modules` are skipped.

### `yarn run analyze:vendor`

Runs the source-map-explorer and displays its results inside the browser.
This analyzes only vendor data. `app` data is skipped.

## Docker Setup

This project can also be deployed via docker-compose.

Simply run `docker-compose up -d` inside the docker folder. Open [http://localhost:8080](http://localhost:8080) to view it in the brwoser.

For further instructions regarding docker or docker-compose please refer to the official documentations of [docker](https://docs.docker.com/) or [docker-compose](https://docs.docker.com/compose/)

## Using types and data in other apps

The typings and all of our aeons end data are part of this mono-repository.
However we publish both separately to npm, so they can be easily consumed by other
applications and libraries.

* [Aeons End data](https://www.npmjs.com/package/aer-data)
* [Aeons End typescript types](https://www.npmjs.com/package/aer-types)

## TODO - writing client side migrations

## [Contribution Guidelines](CONTRIBUTING.md)

## [Code of Conduct](CODE_OF_CONDUCT.md)
