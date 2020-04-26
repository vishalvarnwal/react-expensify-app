// entry point  --app.js  -> outut

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(path.join(__dirname,'public'));

module.exports = (env) => {

    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',   //source map help us to debugging the original code
    
        devServer: {             //kind a live server but snappy and fast
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true
        }
    };
};