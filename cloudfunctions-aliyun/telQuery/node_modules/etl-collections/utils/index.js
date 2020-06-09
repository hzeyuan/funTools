var fs = require('fs');
var zlib = require('zlib');
var utils = {};

Function.prototype.getName = function() {
    return this.name || this.toString().match(/function\s*([^(]*)\(/)[1]
};

utils.save_compress_file = function(source, target) {
    if (fs.existsSync(source)) {
        var data = fs.readFileSync(source);
        fs.writeFileSync(target, zlib.gzipSync(data));
    } else {
        console.log("=> Fail: File not exists ->", source);
    }
};


utils.extend = function(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function(source) {
        if (typeof source === 'function') {
            target[source.getName()] = source;
        } else if (typeof source === 'object') {
            for (var prop in source) {
                target[prop] = source[prop];
            }
        }
    });
    return target;
};

module.exports = utils;
