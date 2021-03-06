const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './script.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
      ],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
      }),
   ],
};
