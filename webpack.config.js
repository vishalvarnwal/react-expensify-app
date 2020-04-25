// entry point  --app.js  -> outut

const path = require('path')

console.log(path.join(__dirname,'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,       /*files loaded with .js*/
            exclude: /node_module/    /*Those we dont want to pick by babel */
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    devtool: 'cheap-module-eval-source-map',   //source map help us to debugging the original code

    devServer: {             //kind a live server but snappy and fast
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
};