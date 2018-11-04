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
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|ttf)$/,
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
