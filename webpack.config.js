const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nf_react\/node_modules/,
        loader: 'babel-loader',
        options: {
        	babelrc: false,
          presets: [
            ["@babel/preset-env", {
                "targets": {
                    'browsers': ['Chrome >=59']
                },
                "modules":false,
                "loose":true
            }],"@babel/preset-react"],
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};