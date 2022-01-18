const { resolve } = require("path");

module.exports = {
	mode: "development",
	target: "electron-main",
	entry: "./src/main/main.ts",
	output: {
		filename: "main.js",
		path: resolve(process.cwd(), "dist"),
	},
	resolve: {
		extensions: [".ts"],
	},
	module: {
		rules: require("./webpack.rules.config.js"),
	},
};
