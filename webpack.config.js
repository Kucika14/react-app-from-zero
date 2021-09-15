const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = {
	// https://webpack.js.org/configuration/entry-context/#entry
	entry: path.join(__dirname, "src", "components", "index.tsx"),
	// https://webpack.js.org/concepts/output/
	output: {
		path:path.resolve(__dirname, "dist"),
		filename: "boundle.js",
	},
	target: "web",
	resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
	module: {
		// https://webpack.js.org/configuration/module/#rule
		/* rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						// https://babeljs.io/docs/en/presets/
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
		] */
		rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
	  {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
	},
	plugins: [
		// https://webpack.js.org/plugins/html-webpack-plugin/
		new HtmlWebpackPlugin({
			template:path.join(__dirname, "src", "components", "index.html"),
		}),
    new MiniCssExtractPlugin({
      filename: "./src/main.css",
    }),
	],
	// https://webpack.js.org/configuration/mode/
	mode: 'development',
}
