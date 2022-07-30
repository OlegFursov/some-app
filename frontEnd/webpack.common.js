const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
     entry: "./src/index.js",
      plugins: [
          new HtmlWebpackPlugin({
               template: "./src/index.html",
          })   
     ],
     module: {
          rules: [
               {
                    test: /\.css/,
                    use: ["style-loader", "css-loader"]
               },
               {
                    test: /\.html$/,
                    use: "html-loader",
               },
               {
                    test: /\.(svg|png|jpg)$/,
                    use: {
                         loader: "file-loader",
                         options: {
                              name: "[name].[hash].[ext]",
                              inputPath: "../../img",
                              outputPath: "images"
                         }
                    }  
               },
          ],
     },

}