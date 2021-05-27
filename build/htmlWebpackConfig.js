const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = function htmlWebpackConfig(config) {
    config.externals  = {echarts:'echarts'}
    config.plugins.forEach(plugin => {
        if(plugin instanceof HtmlWebpackPlugin&&plugin.options.filename==='index.html'){
            plugin.options.template = path.join(__dirname,'index.html')
        }
    });
}