const CracoAntDesignPlugin = require("craco-antd");
const WebpackBar = require('webpackbar');

module.exports = {
    webpack: {
        plugins: [
            new WebpackBar({ profile: true }),
        ]
    },
    plugins: [
        {
            plugin: CracoAntDesignPlugin
        }
    ]
};
