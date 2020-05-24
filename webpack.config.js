const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  performance: { hints: false }, // パフォーマンスの警告が出ないようにする
};
