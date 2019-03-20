var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.jsx',
	},
	output: {
		filename: '[name]-bundle.js',
		chunkFilename: '[name].[chunkhash:8].chunk.js',
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
			// {
			// 	test: /\.jsx?$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['es2015', 'react', 'stage-0'],
			// 		}
			// 	}
			// },
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					presets: ['env', 'es2015', 'react', 'stage-2'],
					plugins: ['syntax-dynamic-import', ['import', { libraryName: 'antd',  libraryDirectory: 'es', style: 'css' }]]
				}
			}
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
		new ExtractTextPlugin('style.css'),
		new UglifyJSPlugin({
			sourceMap: true //内部参数如果不传react会警告，
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	devServer: {
		contentBase: path.join(__dirname, "build"),
		compress: true,
		port: 8080
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: 'commons',
					priority: 10,
					chunks: 'initial'
				},
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					minChunks: 2,
					enforce: true
				}
			}
		}
	}

}