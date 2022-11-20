/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (webpackEnv, argv) => {
  const isEnvDevelopment = argv.mode === 'development';
  const isEnvProduction = argv.mode === 'production';

  return {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
    entry: './src/index.tsx',
    output: {
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: 'swc-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { modules: true } },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
                ref: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
          },
          isEnvProduction
            ? {
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
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new ForkTsCheckerWebpackPlugin({
        async: isEnvDevelopment,
        typescript: {
          diagnosticOptions: {
            syntactic: true,
          },
        },
        issue: {
          include: [
            { file: '../**/src/**/*.{ts,tsx}' },
            { file: '**/src/**/*.{ts,tsx}' },
          ],
          exclude: [
            { file: '**/src/**/__tests__/**' },
            { file: '**/src/**/?(*.){spec|test}.*' },
            { file: '**/src/setupProxy.*' },
            { file: '**/src/setupTests.*' },
          ],
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'bundle-report.html',
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: 'bundle-stats.json',
      }),
    ],
    devServer: {
      port: 3000,
      hot: true,
      host: 'localhost',
      historyApiFallback: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
