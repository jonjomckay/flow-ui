Jonjo's Boomi Flow UI
=====================

This is a custom UI framework for Boomi Flow applications, using modern technologies, with support for
easy theming, and native support for embedding inside other React applications as a component.

[![NPM](https://img.shields.io/npm/v/@jonjomckay/flow-ui.svg)](https://www.npmjs.com/package/@jonjomckay/flow-ui) [![Build Status](https://travis-ci.com/jonjomckay/flow-ui.svg?branch=master)](https://travis-ci.com/jonjomckay/flow-ui)

## Features

* 👍 Support for _most_ built-in Flow page components
* 🎨 Theming
* 🗄️ State management using [Redux](https://redux.js.org)
* 🚀 Built for performance first
* ⚖️ Minimal bundle size, with few dependencies
    * [`@jonjomckay/flow-ui`](https://bundlephobia.com/result?p=@jonjomckay/flow-ui@0.2.0) weighs 16.1 kB (v0.2.0)
    * [`@jonjomckay/flow-ui-theme-ant-design`](https://bundlephobia.com/result?p=@jonjomckay/flow-ui-theme-ant-design@0.2.0) weighs 4.1 kB (v0.2.0)

## Quick Start

1. Pick a [theme](#themes) and install it (Ant Design, in this example)

    ```bash
     yarn add @jonjomckay/flow-ui-theme-ant-design antd
    ```

2. Import the theme and the `Flow` component, and render them

    ```jsx
    // Import the Flow component and the Ant Design theme
    import { Flow } from '@jonjomckay/flow-ui';
    import AntDesign from '@jonjomckay/flow-ui-theme-ant-design';
    
    // Render the component, passing in at least a theme, tenant ID and flow ID
    const Example = () => (
        <Flow theme={ AntDesign } tenant="a-tenant-id" id="a-flow-id" />
    );
    ```

## Themes

The library supports dynamic themes, usable by plugging them into the `Flow` component.

### Ant Design

This is a theme that uses the [Ant Design](https://ant.design) UI library, based on the specification of the same name. To
use it, you'll need to install the theme itself along with Ant Design.

```bash
yarn add @jonjomckay/flow-ui-theme-ant-design antd
```

Using it is just a case of importing the theme and supplying it to your `Flow` component:

```jsx
import AntDesign from '@jonjomckay/flow-ui-theme-ant-design';

<Flow theme={ AntDesign } />
```

### Custom

It's possible to implement your own themes, using the `ITheme` interface exported by `@jonjomckay/flow-ui`. Your theme
will need to implement all fields on this interface, with each field being a React component handling the given props.

## Packages

### `flow-ui`

This package contains all the core interfaces, actions and logic required to render a Flow. From an outside perspective,
the two most important parts are the `ITheme` interface, which all UI themes need to implement, and the `Flow` component,
which is to be used by React applications in order to render flows.

### `flow-ui-example`

This package contains an example application, using the `Flow` component to render multiple flows.

## License

This library and all packages are released under the [MIT License](https://opensource.org/licenses/MIT).
