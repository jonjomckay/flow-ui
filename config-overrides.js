const { override, fixBabelImports, addLessLoader } = require('customize-cra');

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
