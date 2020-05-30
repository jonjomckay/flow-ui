Jonjo's Boomi Flow UI
=====================

This is a custom UI framework for Boomi Flow applications, using modern technologies, with support for
easy theming, and native support for embedding inside other React applications as a component.

[![NPM](https://img.shields.io/npm/v/@jonjomckay/flow-ui.svg)](https://www.npmjs.com/package/@jonjomckay/flow-ui) [![Build Status](https://travis-ci.com/jonjomckay/flow-ui.svg?branch=master)](https://travis-ci.com/jonjomckay/flow-ui)

## Themes

TODO

### Ant Design

#### Installation

To use the theme, you'll need to install the theme itself, along with Ant Design.

```bash
yarn add @jonjomckay/flow-ui-theme-ant-design antd
```

#### Usage

Rendering a flow using the library is pretty simple, using the `Flow` component and your chosen theme.

```jsx
// Import the Flow component and the Ant Design theme
import { Flow } from '@jonjomckay/flow-ui';
import AntDesign from '@jonjomckay/flow-ui-theme-ant-design';

// Render the component, passing in at least a theme, tenant ID and flow ID
const Example = () => (
    <Flow theme={ AntDesign } tenant="a-tenant-id" id="a-flow-id" />
);
```

## Packages

### `flow-ui`

This package contains all the core interfaces, actions and logic required to render a Flow. From an outside perspective,
the two most important parts are the `ITheme` interface, which all UI themes need to implement, and the `Flow` component,
which is to be used by React applications in order to render flows.

### `flow-ui-theme-ant-design`

This is a theme that uses the [Ant Design](https://ant.design) UI library, based on the specification of the same name. Its
only export is an implementation of `ITheme`.

### `flow-ui-example`

This package contains an example application, using the `Flow` component to render multiple flows.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
