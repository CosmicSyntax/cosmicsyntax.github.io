const path = require("path");

module.exports = {
	externals: {
		jquery: '$',
		bootstrap: 'bootstrap',
	},
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "files"),
		filename: "main.js",
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./"), staticOptions: {},
			publicPath: "/files/",
			serveIndex: true,
			watch: true,
		},
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
