/**
 * @file local compile
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  target: 'electron-renderer',
  node: {
    __dirname: true
  },
  optimization: {
    minimize: false,

    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        },
        common: {
          test: /[\\/]src[\\/]/,
          name: 'lazy',
          chunks: 'async',
          minSize: 30000,
          minChunks: 1,
          reuseExistingChunk: true
        }
      }
    }
  },
  entry: {
    app: './src/app.tsx'
  },
  output: {
    filename: '[name].js',
    // chunk 包加 hash [name].[chunkhash].js
    chunkFilename: '[name].js',
    path: path.resolve(__dirname + '/../dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /dist|node_modules/
      },
      {
        test: /\.less$/,
        include: /src|node_modules\/antd|node_modules\/@ant-design/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'primary-color': '#1890ff'
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: /src|node_modules\/codemirror/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/template.html',
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  externals: {
    webpack: 'commonjs webpack',
    write: 'commonjs write',
    rimraf: 'commonjs rimraf',
    yargs: 'commonjs yargs',
    'node-cmd': 'commonjs node-cmd',
    'fast-glob': 'commonjs fast-glob',
    'directory-tree': 'commonjs directory-tree',
    'xterm': 'commonjs xterm',
    'node-pty': 'commonjs node-pty'
  }
};
