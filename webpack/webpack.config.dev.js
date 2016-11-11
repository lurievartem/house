require('babel-polyfill');

var path = require('path');
var webpack = require('webpack');
var autoprefix = require('autoprefix');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dist');
var favIconPath = path.resolve(projectRootPath, './static/favicon.ico');
var src = path.join(__dirname, '../src');

var config = {
    devtool: 'inline-source-map',
    context: projectRootPath,
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './src/client.js'
    ],
    output: {
        path: assetsPath,
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/static/'
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            exclude: [/node_modules/, /static/, /.+\.config.js/],
            include: projectRootPath,
            loader: 'eslint'
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
                test: /\.jsx?$/,
                exclude: [/node_modules/, /static/, /.+\.config.js/],
                include: projectRootPath,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        extensions: ['', '.json', '.js', '.jsx']
    },
    postcss: function() {
        return [autoprefix];
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(projectRootPath, 'src', 'index.tmpl.html'),
            inject: 'body',
            favicon: favIconPath
        }),
        new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};


module.exports = config;
