const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.jsx',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'js/[name].[contenthash].js' : 'js/[name].js',
      assetModuleFilename: 'assets/[name].[hash][ext]',
      clean: true,
    },

    resolve: { extensions: ['.js', '.jsx'] },

    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },

        {
          test: /\.s[ac]ss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },

        { test: /\.svg$/, use: ['@svgr/webpack'] },

        { test: /\.(png|jpe?g|webp)$/, type: 'asset/resource' },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/images/favicon-32x32.png',
      }),
      ...(isProd
        ? [
            new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash].css',
            }),
          ]
        : []),
    ],

    devServer: { port: 3000, open: true, hot: true },

    devtool: isProd ? false : 'eval-source-map',
  };
};
