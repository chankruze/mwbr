/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:00:18 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const isDevelopment = process.env.NODE_ENV === 'development';

const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
	return merge({
		devServer: {
			hotOnly: true
		},
		module: {
			rules: [
				// Files: js/jsx,
				// Pipes: babel-loader
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				// Files: .module.sass/.scss,
				// Pipes: css-loader
				{
					test: /\.module\.s(a|c)ss$/,
					use: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: isDevelopment
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDevelopment
							}
						}
					]
				},
				// Files: .sass/scss,
				// Pipes: sass-loader
				{
					test: /\.s(a|c)ss$/,
					exclude: /\.module.(s(a|c)ss)$/,
					use: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'sass-loader',
							options: {
								sourceMap: isDevelopment
							}
						}
					]
				},
				// Files: .module.css,
				// Pipes: css-loader
				{
					test: /\.module\.css$/,
					use: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: isDevelopment
							}
						}
					]
				},
				// Files: .css,
				// Pipes: sass-loader
				{
					test: /\.css$/,
					exclude: /\.module.(sa|sc|c)ss$/,
					use: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader'
					]
				},
				// Files: html,
				// Pipes: html-loader
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader'
						}
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images/',
								name: '[name][hash].[ext]'
							}
						}
					]
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: '@svgr/webpack',
							options: {
								jsx: true
							}
						}
					]
				},
				{
					test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
					exclude: /images/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'fonts/',
								name: '[name][hash].[ext]'
							}
						}
					]
				}
			]
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './public/index.html',
				filename: './index.html',
				hash: true
			}),
			new MiniCssExtractPlugin({
				filename: isDevelopment ? '[name].css' : '[name].[hash].css',
				chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
			}),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: 'public'
					}
				]
			}),
			new webpack.ProgressPlugin(),
			new Dotenv(),
			new webpack.SourceMapDevToolPlugin({})
		],
		resolve: {
			extensions: ['.js', '.jsx', '.scss', '.sass']
		},
		devtool: false
	});
};
