module.exports = {
  entry: './src/RoutedApp.jsx',
  output: {
    path: '/home/leigh/node/moonpig/dist',
    filename: 'app.bundle.js',
  },
  // webpack loader for JSX files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      /*
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      */
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'css-loader',
          },
          { loader: 'style-loader' },
        ],
      },
    ],
  },
  // split chunks outputs: app, vendor and source-map bundles
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          test: /node_modules/,
        },
      },
    },
  },
  devtool: 'source-map',
};
