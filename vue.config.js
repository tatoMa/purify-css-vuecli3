// npm install purify-css purifycss-webpack glob-all mini-css-extract-plugin --save-dev
const glob = require("glob-all");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSSPlugin = require("purifycss-webpack");
const path = require('path');
module.exports = {
    configureWebpack: {
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css"
            }),
            new PurifyCSSPlugin({
                paths: glob.sync([
                    // path.join(__dirname, "Views/**/*.cshtml"),
                    // path.join(__dirname, "Scripts/**/*.html"),
                    // path.join(__dirname, "Scripts/**/*.js")
                    path.join(__dirname, './src/index.html'),
                    path.join(__dirname, './**/*.vue'),
                    path.join(__dirname, './src/**/*.js')
                ])
            })
        ],
    }
}