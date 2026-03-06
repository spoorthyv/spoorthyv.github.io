const webpack = require('webpack');

module.exports = function override(config, env) {
    // Alias to fix pdf.mjs strictly looking for exactly 'process/browser'
    config.resolve.alias = {
        ...config.resolve.alias,
        'process/browser': require.resolve('process/browser.js'),
    };

    config.resolve.fallback = {
        ...config.resolve.fallback,
        process: require.resolve('process/browser.js'),
    };

    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
        }),
    ]);

    // Force false fullySpecified to apply before CRA's built-in loaders
    config.module.rules.unshift({
        test: /\.m?js$/,
        resolve: {
            fullySpecified: false,
        },
    });

    return config;
};
