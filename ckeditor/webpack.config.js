const {resolve}=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path:resolve(__dirname,'build')
  },
  module:{
    rules:[
     {test:/\.css$/,use:['style-loader','css-loader']},
     {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
     {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
     {test:/\.(jpg|png|gif)$/,loader:"url-loader",options:{limit:8*1024}}
    ]
  },
  plugins:[
   new HtmlWebpackPlugin({
     template:'./src/index.html'
   })
  ],
  mode:'development'
}