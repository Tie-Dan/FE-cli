module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};