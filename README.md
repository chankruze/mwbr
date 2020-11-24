<!--
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 10:53:42 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
-->

# Minimal WBR (Webpack Babel React) Setup

This is a very basic setup for a react app. Unlike CRA (create-react-app), this setup gives access to webpack config directly, so we **DON'T** have to fork the `react-scripts` or tweak `create-react-app` webpack config(s) using `eject` and even we don't have to use `react-app-rewired` package.

Default support for:

- `jsx` (primary), `js`
- `sass` (primary), `scss` (primary), `css`.
- `module.sass` (primary), `module.scss` (primary), `module.css`.

What's preconfigured:

- babel
- prettier
- es-lint
- `_redirects` rule for routing in netlify hosting
- `CNAME` for custom domain

## How to Use ?

### `yarn start`

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

### `yarn lint`

Apply es-lint check to configured files

### `yarn dev`

First lints the project file then runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

### `yarn build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

Well, if you're here, you definitely know what you're going to do!

### Basic Demo

The minimal setup's demo is [here](https://mwbr.netlify.app/)

[![screenshot](https://res.cloudinary.com/chankruze/image/upload/v1606197207/github/Chankruze-s-Minimal-WBR-Setup.png)](https://mwbr.netlify.app/)
