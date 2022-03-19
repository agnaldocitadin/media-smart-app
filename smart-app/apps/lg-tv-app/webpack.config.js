const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill', './apps/lg-tv-app/lg.tv.source.js'],
    module: {
        rules: [
            { 
                test: /\.(js|jsx?)$/,
                include: [ path.resolve('apps/lg-tv-app'), path.resolve('src') ],
                exclude: /(node_modules|dis)/, 
                loader: 'babel-loader', 
                query: { 
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            { 
                test: /\.css$/,
                include: path.resolve('src/components'),
                loader: 'style-loader' 
            },
            { 
                test: /\.css$/,
                include: path.resolve('src/components'),
                loader: 'css-loader', 
                query: { 
                    modules: true, 
                    localIdentName: '[name]-[local]-[hash:base64:5]' 
                }
            },
            { 
                test: /\.(png|jpg|ttf)$/,
                include: path.resolve('src/assets'),
                use: 'url-loader'
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve('./dist/lg-tv-app'),
        filename: 'lg.tv.bundle.js'
    }
}