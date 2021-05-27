const path = require('path');

module.exports = function(config){
    if (config.plugins[4]) {
        config.plugins[4].options.template = path.resolve(__dirname,'./index.html')
    }
    return {
        devServer:{
            port: 7788
        }
    }
}