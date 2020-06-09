var path = require('path');

module.exports = {
    idcard: {
        originpath: path.resolve(__dirname+'/../data/chinese-id-card-area.csv'),
        datapath: path.resolve(__dirname+'/../data/chinese-id-card-area.data')
    } ,
    mobile: {
        originpath: path.resolve(__dirname+'/../data/mobile-phone.csv'),
        datapath: path.resolve(__dirname+'/../data/mobile-phone.data')
    },
    country: {
        originpath: path.resolve(__dirname+'/../data/country.csv'),
        datapath: path.resolve(__dirname+'/../data/country.data')
    }
}
