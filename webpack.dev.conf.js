const path = require('path');
module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"), // string
		// filename: "[name].[chunkhash].js"
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
};