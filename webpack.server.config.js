/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    target: "node",
    externals: [nodeExternals()],
    entry: ["./src/server/index.js"],
    stats: 'errors-only',
    output: {
        path: path.resolve(__dirname, "bin"),
        filename: "server.js",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                options: {
                    presets: [["env", { modules: false }], "react"],
                    plugins: [
                        ["transform-object-rest-spread", { useBuiltIns: true }],
                        "transform-class-properties"
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: "ignore-loader"
            },
            {
                test: /\.css$/,
                loader: "ignore-loader"
            },
            {
                test: /\.(jpg|png|svg|gif|pdf)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]"
                }
            }
        ]
    }
};
