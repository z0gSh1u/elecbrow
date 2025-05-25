const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configuration for the renderer process
const rendererConfig = {
  mode: 'development',
  entry: './src/renderer/index.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'renderer.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/renderer/index.html',
    }),
  ],
};

// Configuration for the main process
const mainConfig = {
  mode: 'development',
  entry: './src/main/main.ts',
  target: 'electron-main',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};

// Configuration for the preload script
const preloadConfig = {
  mode: 'development',
  entry: './src/main/preload.ts',
  target: 'electron-preload',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'preload.js',
  },
};

module.exports = [rendererConfig, mainConfig, preloadConfig];
