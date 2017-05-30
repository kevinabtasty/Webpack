var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		bundle : './src/index.js',
		vendor: ['jquery', 'jquery-ui']
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/'
	},
    resolve: {
        alias: {
        	// JS
            'jquery': __dirname + '/libs/jquery.js',
            'jquery-ui': __dirname + '/libs/jquery-ui/jquery-ui.min.js',
            // CSS
            'jquery-ui-css': __dirname + '/libs/jquery-ui/jquery-ui.min.css'
        }
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [{
					loader: "style-loader" 
				}, {
					loader: "css-loader" 
				}]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" 
				}, {
					loader: "css-loader" 
				}, {
					loader: "sass-loader" 
				}]
			},
      		{ 
      			test: /\.(jpe?g|png|gif)$/i, 
				use: [{
					loader: "file-loader" 
				}]
      		}
		]
	},	
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({ 
			compress: { 
				warnings: false 
			} 
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: false
		})
	],
	watch: true
};