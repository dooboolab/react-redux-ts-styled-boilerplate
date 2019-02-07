const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
  ],
  resolve: {
    modules: [
      './node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  devServer: {
    contentBase: __dirname + '/dist/',
    inline: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    'helpers': true,
                    'regenerator': false
                  }
                ]
              ]
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.js(x?)$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-flow'
              ],
              plugins: [
                [
                  '@babel/plugin-transform-runtime',
                  {
                    'helpers': true,
                    'regenerator': false
                  }
                ]
              ]
            },
          },
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
};
