const { resolve } = require("path");

module.exports = {
	mode: "development", // process.env.NODE_ENV,
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
