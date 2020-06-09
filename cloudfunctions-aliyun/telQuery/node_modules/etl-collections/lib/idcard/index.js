var fs = require('fs');
var path = require('path');
var zlib = require('zlib');
var config = require('../../conf');
var utils = require('../../utils');

// parse the idcard area
var parseArea = function(id, filepath) {
    var areaId = id.substr(0, 6);
    var lines = zlib.gunzipSync(fs.readFileSync(filepath)).toString().split('\n');

    for (var i = 0; i < lines.length; i++) {
        var line_array = lines[i].trim().split(',');
        if (areaId === line_array[0]) {
            return {
                areaId: areaId,
                areaName: line_array[1]
            };
        }
    };

    return {};
};

var getArea = function(id){
    return parseArea(id,config.idcard.datapath);
};

// parse idcard birthday
var getBirthday = function(id) {
    var birthday;
    if (id.length === 18) {
        birthday = id.substr(6, 8);
    } else if (id.length === 15) {
        birthday = '19' + id.substr(6, 6);
    };
    return {birthday: birthday};
};

// parse idcard gender
var getGender = function(id) {
    var n;
    if (id.length === 18) {
        n = id.substr(16, 1);
    } else if (id.length === 15) {
        n = id.substr(14, 1);
    };
    return { gender: n % 2 ? '男' : '女' };
};

// valid idcard
var isIdcard = function(id) {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(id);
};

// parse
var query = function(id) {
    var id = String(id);
    if (!isIdcard(id)) {
        console.error('Error: id card is illegal!');
        return;
    };
    return utils.extend( getArea(id), getBirthday(id), getGender(id) );
};

module.exports = {
    getArea: getArea,
    getBirthday: getBirthday,
    getGender: getGender,
    isIdcard: isIdcard,
    query: query
};
