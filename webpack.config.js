const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: process.env.DEVELOPMENT === 'dev' ? 'development' : 'production',
    plugins: [new MiniCssExtractPlugin()],
   module: {
       rules: [
           {
               test: /\.css$/,
               use: ['style-loader', 'css-loader'],
           },
           {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
       ],
    },
};