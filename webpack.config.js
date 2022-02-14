/*
 * @Author: zhouzhishou
 * @Date: 2020-11-05 21:34:55
 * @Description: 
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    
    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",
    
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins:[
        new HtmlWebpackPlugin( {
            template: './public/index.html',
            filename: 'index.html',
            title: 'app',
        } ),
    ],
    devServer:{//开发服务器配置
        port:3000,//设置端口号
        progress:true,//进度条
        contentBase:'./dist', //服务器访问基本目录
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "babel-loader" },
            
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
