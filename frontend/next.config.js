const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-plugin-transpile-modules');

module.exports = withCustomBabelConfigFile(
    withTranspileModules(
        withTypescript({
            babelConfigFile: path.resolve('../babel.config.js'),
            transpileModules: ['@invoi']
        })
    )
);
