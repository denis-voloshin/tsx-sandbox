// Core
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');

// Plugins
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack config
module.exports = webpackMerge(
  webpackBaseConfig,
  {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      port: 3000
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        tsconfig: path.resolve(__dirname, './tsconfig.json')
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'TSX sandbox',
        favicon: path.resolve(__dirname, '../public/favicon.ico')
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(tsx?)|(js)$/,
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    configFile: path.resolve(__dirname, './tsconfig.json'),
                    transpileOnly: true
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  }
);
