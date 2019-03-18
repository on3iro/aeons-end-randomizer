[![CircleCI](https://circleci.com/gh/on3iro/aeons-end-randomizer/tree/master.svg?style=svg)](https://circleci.com/gh/on3iro/aeons-end-randomizer/tree/master)
[![App](https://img.shields.io/badge/App%3A-https%3A%2F%2Fon3iro.github.io%2Faeons--end--randomizer%2F-%232196f3.svg?style=flat-square)](https://on3iro.github.io/aeons-end-randomizer/)
[![Official Aeons End Discord](https://img.shields.io/badge/AE%20Discord-https%3A%2F%2Fdiscord.gg%2FPvjcfPt-%237289DA.svg?style=flat-squar)](https://discord.gg/PvjcfPt)

![AER](./public/images/android-icon-96x96.png)

## ToC

<!-- vim-markdown-toc GFM -->

* [About](#about)
* [Updating to the newest version](#updating-to-the-newest-version)
* [Available Scripts](#available-scripts)
  * [`yarn start`](#yarn-start)
  * [`yarn test`](#yarn-test)
  * [`yarn run build`](#yarn-run-build)
  * [`yarn run build:for_testing`](#yarn-run-buildfor_testing)
  * [`yarn run deploy`](#yarn-run-deploy)
  * [`yarn run analyze:app`](#yarn-run-analyzeapp)
  * [`yarn run analyze:vendor`](#yarn-run-analyzevendor)
  * [`yarn run eject`](#yarn-run-eject)

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

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `yarn run build:for_testing`

This builds the app for test environments. The regular `build` command will resolve
all file paths relative to the `homepage` set inside the `package.json`. To create a bundle
deployable to other environments, e.g. `surge.sh`, use this build command.


### `yarn run deploy`

Creates the regular build and pushes to the repositories `gh-pages` branch afterwards.


### `yarn run analyze:app`

Runs the source-map-explorer and displays its results inside the browser.
This analyzes only app data. `node_modules` are skipped.


### `yarn run analyze:vendor`

Runs the source-map-explorer and displays its results inside the browser.
This analyzes only vendor data. `app` data is skipped.


### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
