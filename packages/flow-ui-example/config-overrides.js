const { override, babelInclude, fixBabelImports, addLessLoader } = require('customize-cra');
const getYarnWorkspaces = require('get-yarn-workspaces');

// TODO: Figure out how to get rid of this
module.exports = override(
    babelInclude(getYarnWorkspaces()),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true
    }),
);
