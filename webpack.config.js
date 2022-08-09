// entry->output

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  // plugins:[new MiniCssExtractPlugin()],
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/, 
        exclude: /node_modules/,
      },
      {
        test:/\.(s[as]|c)ss$/i,
        exclude:/node_modules/,
        use:[
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          // "sass-loader",
        ]
      }
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer:{
    contentBase:path.join(__dirname,'public'),
    historyApiFallback:true
  }
};
