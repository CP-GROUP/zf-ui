const htmlWebpackConfig = require('./build/htmlWebpackConfig')

module.exports = function(config){
    htmlWebpackConfig(config)
    return {
        devServer:{
            port: 7788
        }
    }
}