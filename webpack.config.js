const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    devtool: "inline-source-map",
    node: {
        global: false, // drops use of 'eval' in webpack generation, which isn't support by extensions
    },
    mode: "development",
    entry: {
        content: "./src/content.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CopyPlugin([
            { from: "./src/static", to: "./" },
            { from: "./src/images", to: "./images" },
        ]),
    ],
    watchOptions: {
        ignored: /node_modules/,
    },
};
