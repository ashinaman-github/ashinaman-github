const webpack = require('webpack');

const app = {
  mode: 'development',
  entry: {
    main: [
      `${__dirname}/${process.env.npm_package_config_entry}/assets/js/main.js`
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `assets/js/[name].js`
  },
  resolve: {
    modules: [ 'node_modules' ],
    extensions: [ '.js', '*' ],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["@babel/preset-env"]
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'API_URL': JSON.stringify('/path/to/file')
    //   }
    // }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      'window.$': 'jquery'
    }),
    // new webpack.optimize.UglifyJsPlugin(),
  ]
};

module.exports = app;
