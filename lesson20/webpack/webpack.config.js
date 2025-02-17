const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.html',
	output: {
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'scss-loader'],
			},
		],
	},
};

