module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "boundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.png$/,
        loader: "url-loader"
      }
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: "source-map"
};
