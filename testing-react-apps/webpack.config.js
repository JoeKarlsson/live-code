const path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, '/src/entry.js'),
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'button.js',
		publicPath: '/',
	},
	devtool: 'eval-source-map',
	resolve: {},
	plugins: [
	],
	module: {
		rules: [{
			test: /(\.js$|\.jsx$)/,
			exclude: /node_modules/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						presets: [
							'react',
						],
					},
				},
			],
		}],
	},
};
