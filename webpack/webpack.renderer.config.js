const { resolve } = require("path");

module.exports = {
	mode: "development", // process.env.NODE_ENV,
	target: "electron-renderer",
	entry: "./src/renderer/index.tsx",
	devtool: "inline-source-map",
	devServer: {
		static: resolve(process.cwd(), "public", "index.html"),
	},
	output: {
		filename: "renderer.js",
		path: resolve(process.cwd(), "dist"),
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: require("./webpack.rules.config.js"),
	},
};
