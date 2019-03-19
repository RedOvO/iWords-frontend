var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + "/build"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react', 'stage-0']
					}
				}
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: 'public/favicon.ico',
			filename: 'index.html',
			template: 'public/index.html',
			inject: 'body',
			minify: {
				collapseWhitespace: true, //去除空格
				removeComments: true //去除注释
			}
		}),
		new ExtractTextPlugin('style.css')
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	devServer: {
		contentBase: path.join(__dirname, "build"),
		compress: true,
		port: 8080
	}

}