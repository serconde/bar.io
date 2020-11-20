const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const helpers = require('./helpers');

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath('src'),
    resolve: {
      alias: {
        'common-app': helpers.resolveFromRootPath('src/common-app'),
        common: helpers.resolveFromRootPath('src/common'),
        layouts: helpers.resolveFromRootPath('src/layouts'),
        core: helpers.resolveFromRootPath('src/core'),
        scenes: helpers.resolveFromRootPath('src/scenes'),
        pods: helpers.resolveFromRootPath('src/pods'),
        assets: helpers.resolveFromRootPath('src/assets'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    entry: {
      app: ['regenerator-runtime/runtime', './index.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(svg|eot|ttf|woff|woff2)$/i,
          loader: 'url-loader',
          options: {
            limit: 8192,
            // esModule: false,
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      emitOnErrors: true,
      moduleIds: 'named',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'all',
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            enforce: true,
            maxSize: 200000,
          },
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: 'assets/favicon.ico',
        filename: 'index.html',
        template: 'index.html',
        hash: true,
      }),
    ],
  },
);
