module.exports = {
    mode: 'development', // 开发环境
    entry: './entry.js', // 主入口文件
    output: {
        filename: 'bundle.js', // 打包以后的名字
        path: __dirname // 打包以后文件的位置
    },
    module: { // 配置相应的loader
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]

        }]
    }
}