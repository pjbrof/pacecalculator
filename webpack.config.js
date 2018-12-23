const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    headers: { "Access-Control-Allow-Origin": "*" }
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};
