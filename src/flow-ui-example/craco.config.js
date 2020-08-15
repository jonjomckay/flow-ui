const WebpackBar = require('webpackbar');

module.exports = {
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }]
        ]
    },
    webpack: {
        plugins: [
            new WebpackBar({ profile: true }),
        ]
    }
};
