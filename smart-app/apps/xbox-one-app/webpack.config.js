const path = require('path')

module.exports = {
    devtool: 'eval-source-map',
    entry: ['babel-polyfill', './apps/xbox-one-app/xbox.one.source.js'],
    module: {
        rules: [
            { 
                test: /\.(js|jsx?)$/,
                include: [ path.resolve('apps/xbox-one-app'), path.resolve('src') ],
                exclude: /(node_modules|dist)/, 
                loader: 'babel-loader', 
                query: { 
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-syntax-dynamic-import"]
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
        path: path.resolve('./dist/xbox-one-app'),
        filename: 'xbox.one.bundle.js'
    }
}