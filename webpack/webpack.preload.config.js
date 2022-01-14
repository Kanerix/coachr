const { resolve } = require("path");

module.exports = {
	mode: "development", // process.env.NODE_ENV,
	target: "electron-preload",
	entry: "./src/preload/preload.ts",
	output: {
		filename: "preload.js",
		path: resolve(process.cwd(), "dist"),
	},
	resolve: {
		extensions: [".ts"],
	},
	module: {
		rules: require("./webpack.rules.config.js"),
	},
};
