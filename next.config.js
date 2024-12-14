const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
var rules = require('./config/webpack.rules');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
const withOptimizedImages = require('next-optimized-images');

module.exports = withCSS(
	withSass(
		withOptimizedImages({
			webpack: (config) => {
				config.node = {
					fs: 'empty',
				};
				config.module.rules.push(
					{
						test: /.mjs$/,
						include: /node_modules/,
						type: 'javascript/auto',
					},
					{
						test: /\.(svg)$/,
						use: [
							{
								loader: 'react-svg-loader',
							},
						],
					},
					{
						test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
						use: [
							{
								loader: 'file-loader',
							},
						],
					},
					{
						test: /react-icons\/(.)*(.js)$/,
						loader: 'babel-loader',
						query: {
							presets: ['es2015', 'react'],
						},
					}
				);
				return {
					entry: {
						app: './src/index.jsx',
					},
					resolve: {
						extensions: ['.js', '.jsx'],
					},
					module: {
						noParse: [/mapbox-gl\/dist\/mapbox-gl.js/],
						rules: rules,
					},
					node: {
						fs: 'empty',
						net: 'empty',
						tls: 'empty',
					},
					plugins: [
						new webpack.NoEmitOnErrorsPlugin(),
						new WebpackCleanupPlugin(),
						new webpack.DefinePlugin({
							'process.env': {
								NODE_ENV: '"production"',
							},
						}),
						new HtmlWebpackPlugin({
							template: './src/template.html',
							title: 'Parking Lot Editor',
						}),
						new CopyWebpackPlugin([
							{
								from: './src/manifest.json',
								to: 'manifest.json',
							},
						]),
						new BundleAnalyzerPlugin({
							analyzerMode: 'static',
							defaultSizes: 'gzip',
							openAnalyzer: false,
							generateStatsFile: true,
							reportFilename: 'bundle-stats.html',
							statsFilename: 'bundle-stats.json',
						}),
					],
					...config,
				};
			},
		})
	)
);
