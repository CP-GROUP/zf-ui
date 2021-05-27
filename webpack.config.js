const HtmlWebpackPlugins = require('html-webpack-plugin');
const path = require('path');

module.exports = function(config){

    const htmlIndexPlugins =   new HtmlWebpackPlugins({
        template: path.resolve(__dirname,'./index.html'),
        title: 'test',
        chunks: ['chunks', 'site-desktop'],
        filename: 'index.html',
    })
    // 使用项目html模板文件，方便做特殊业务
    config.plugins[4] = htmlIndexPlugins;

    return {
        devServer:{
            port: 7788
        }
    }
}