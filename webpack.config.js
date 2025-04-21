const { join } = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    // library: {
    //   type: 'umd',
    // },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
    // concatenateModules: false // 禁用模块合并
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new DefinePlugin({
      __DEV__: JSON.stringify(true),
      'process.env.ENV': JSON.stringify('dev'),
    }),
  ],
  devtool: 'source-map',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  devServer: {
    static: './dist',
  },
};
