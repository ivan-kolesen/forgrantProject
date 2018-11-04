const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "boundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|ttf)$/,
        loader: "url-loader"
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: "source-map"
};
