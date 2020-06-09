var utils = require('./index');
var config = require('../conf');

var build = function(){
    for (var v in config) {
        if (config.hasOwnProperty(v)) {
            console.log(config[v]);
            utils.save_compress_file(config[v].originpath, config[v].datapath);
        }
    }
}

build();
