const path = require("path");

module.exports = {
    externals: {
        jquery: 'jQuery'
    },
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "files"),
        filename: "main.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./"),
        publicPath: "/files",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            //use: {
                //loader: "babel-loader",
                //options: {
                    //presets: ["@babel/preset-env"]
                //}
            //}
        }]
    }
};
