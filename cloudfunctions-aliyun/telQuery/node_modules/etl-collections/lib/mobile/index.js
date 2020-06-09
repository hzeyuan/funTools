var fs = require('fs');
var zlib = require('zlib');
var filepath = require('../../conf');

var COUNTRY_NUMBER = {};
var MAX_CNUMBER_LENGTH = 0;
var COUNTRY_CODE = {};

var init = function(){
    zlib.gunzipSync(fs.readFileSync(filepath.country.datapath)).toString().split('\n').forEach(function(item) {
        var s = item.split(',').map(function(item) {
            return item.trim();
        });
        if (s.length < 3) return;
        var item = {
            code: s[1],
            name: s[2],
            enName: s[3],
            number: s[0]
        };
        COUNTRY_NUMBER[item.number] = item;
        COUNTRY_CODE[item.code] = item;
        if (s[0].length > MAX_CNUMBER_LENGTH) MAX_CNUMBER_LENGTH = s[0].length;
    });
};

init();

var getType = function(lines) {
    var type = {};
    lines.forEach(function(line) {
        var s = line.trim().split(',');
        if (s.length === 2) type[s[0]] = s[1];
    });
    return type;
};

var getArea = function(lines) {
    var area = {};
    lines.forEach(function(line) {
        var s = line.trim().split(',');
        if (s.length === 2) area[s[0]] = s[1];
    });
    return area;
};

var getNumber = function(numbers,number,lines) {
    if (!numbers[number]) numbers[number] = [];
    var map = numbers[number];
    lines.forEach(function(line, i) {
        var s = line.trim().split(',');
        if (s.length === 2) map[i] = s;
    });
    return numbers;
};


var getData = function(filepath) {
    var blocks = zlib.gunzipSync(fs.readFileSync(filepath)).toString().split('-,-\n');
    var data = {
        type: {},
        area: {},
        number: {}
    };

    blocks.forEach(function(block) {
        var lines = block.split('\n');
        if (lines[0] === 'type') {
            data.type = getType(lines.slice(1));
        } else if (lines[0] === 'area') {
            data.area = getArea(lines.slice(1));
        } else if (lines[0].substr(0, 7) === 'number-') {
            data.number = getNumber(data.number,lines[0].substr(7), lines.slice(1));
        }
    });
    return data;
};

var query = function(number) {
    number = number.toString();
    var data = getData(filepath.mobile.datapath);
    var i = parseInt(number.slice(0, 3), 10);
    var j = parseInt(number.slice(3, 7), 10);

    if (data.number[i] && data.number[i][j]) {
        var info = data.number[i][j];
        var area = data.area[info[0]];
        var type = data.type[info[1]];
        var s = area.split(/\s+/);
        return { province: s[0], city: s[1], type: type };
    }
    return {};
};

var getCountry = function(number) {
    number = number.toString().replace(/^\+?0*/, '');
    for (var i = 1; i <= MAX_CNUMBER_LENGTH; i++) {
        var n = number.slice(0, i);
        if (COUNTRY_NUMBER[n]) {
            return {
                code: COUNTRY_NUMBER[n].code,
                number: number.slice(i),
                country: COUNTRY_NUMBER[n].name,
                enCountry: COUNTRY_NUMBER[n].enName
            };
        }
    }
};

var getInfo = function(code){
    return COUNTRY_CODE[code];
};

module.exports = {
    query: query,
    getCountry: getCountry,
    getInfo: getInfo
};
