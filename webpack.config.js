const path = require("path");

module.exports = {
    externals: {
        jquery: 'jQuery'
    },
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "script"),
        filename: "script.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./"),
        publicPath: "/script",
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
