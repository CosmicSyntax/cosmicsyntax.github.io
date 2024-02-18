const path = require("path");

module.exports = {
	externals: {
		jquery: '$',
		bootstrap: 'bootstrap',
	},
	entry: "./src/main.ts",
	output: {
		path: path.resolve(__dirname, "files"),
		filename: "main.js",
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./"),
			staticOptions: {
				redirect: true,
			},
			publicPath: "/pweb/",
			serveIndex: true,
			watch: true,
		},
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	experiments: {
		asyncWebAssembly: true,
		syncWebAssembly: true,
	},
	module: {
		rules: [{
			test: /\.ts|\.js$/,
			use: 'ts-loader',
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
