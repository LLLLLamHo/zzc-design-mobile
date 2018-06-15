module.exports = {
    devtool: 'source-map',
    entry: {
        index: './src/js/index.js'
    },
    module: {
        rules: [{
            test: /\.md$/,
            use: [
                {
                    loader: 'html-loader'
                },
                {
                    loader: 'markdown-loader',
                    options: {}
                }
            ]
        },
        {
            test: /\.json$/,
            use: [{
                loader: 'json-loader'
            }]
        }
        ]
    }
};