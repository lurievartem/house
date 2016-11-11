require('babel-polyfill');

var path = require('path');
var webpack = require('webpack');
var autoprefix = require('autoprefix');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dists');
var favIconPath = path.resolve(projectRootPath, './static/favicon.ico');
var src = path.join(__dirname, '../src');

var config = {
    context: projectRootPath,
    entry: [
        'babel-polyfill',
        './src/client.js'
    ],
    output: {
        path: assetsPath,
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/static/'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/, /static/, /.+\.config.js/],
            include: projectRootPath,
            loader: 'eslint-loader'
        }],
        loaders: [
            {
                test: /\.css$/,
                include: src,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.scss$/,
                include: src,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            },
            {
                test: /\.json$/,
                include: src,
                loader: 'json'
            },
            { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
            { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
            {
                test: /\.jsx$|\.js$/,
                exclude: [/node_modules/, /static/, /.+\.config.js/],
                include: projectRootPath,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'lib',
            'src',
            'node_modules'
        ],
        extensions: ['', '.json', '.js', '.jsx']
    },
    postcss: function() {
        return [autoprefix];
    },
    plugins: [
        new CleanPlugin([assetsPath], { root: projectRootPath }),
        new HtmlWebpackPlugin({
            template: path.join(projectRootPath, 'src', 'index.tmpl.html'),
            inject: 'body',
            favicon: favIconPath,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
    ]
};


module.exports = config;
