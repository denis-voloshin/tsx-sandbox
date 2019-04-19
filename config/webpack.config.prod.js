// Core
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');

// Plugins
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack config
module.exports = webpackMerge(
  webpackBaseConfig,
  {
    mode: 'production',
    devtool: false,
    performance: {
      hints: false
    },
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        maxSize: 250000,
        cacheGroups: {
          vendors: {
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

              switch (packageName) {
                case 'react':
                case 'react-dom': {
                  return packageName;
                }
                default: {
                  return 'libs';
                }
              }
            }
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'TSX sandbox',
        favicon: path.resolve(__dirname, '../public/favicon.ico'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
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
                    configFile: path.resolve(__dirname, './tsconfig.json')
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
