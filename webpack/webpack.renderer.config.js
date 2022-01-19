const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve, join } = require("path");

module.exports = {
	mode: "development",
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
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: join(process.cwd(), "webpack", "template", "index.html"),
		}),
	],
};
