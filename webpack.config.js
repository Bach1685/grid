// path — встроенный в Node.js модуль
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // Указываем путь до входной точки:
  entry: {
    main: "./src/script.js",
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin({
      template: "./dist",
    }),
  ],
  // Описываем, куда следует поместить результат работы:
  output: {
    // Путь до директории (важно использовать path.resolve):
    path: path.resolve(__dirname, "dist"),
    // Имя файла со сборкой:
    filename: "[script].[contenthash].js",
    clean: true,
  },
};
