const { override, babelInclude, fixBabelImports, addLessLoader } = require('customize-cra');
const paths = require('react-scripts/config/paths');

// Tell CRA to use the given path as the index, instead of the default src/index.tsx
paths.appIndexJs = `${paths.appSrc}/flow-ui-example/index.tsx`;

// TODO: Figure out how to get rid of this
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true
    }),
);
