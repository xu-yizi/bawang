const HtmlWebpackPlugin = require('html-webpack-plugin'); //HTML的打包
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //CSS的打包
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //CSS的压缩
const CopyWebpackPlugin = require('copy-webpack-plugin'); //不需要带包的使用这个插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //打包前先清空产出物的文件夹
module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'plugin-demo',
            minify: true,
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'plugin-demo',
            minify: true,
            filename: 'footer.html',
            template: './src/footer.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index.css',
            template: './src/css/index.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/static', to: 'static' }
            ]
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    devServer: {
        contentBase: __dirname + "dist",
        port: 9999, //端口号
        open: true //服务器开启页面是否打开 true是打开 默认不打开
    }
};