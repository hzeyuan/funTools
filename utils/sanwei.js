module.exports = {
    SanweiResult: function(e) {
        return [ {
            current: !1,
            done: !1,
            text: "您的标准胸围: ",
            desc: Math.round(.535 * e) + "cm"
        }, {
            done: !1,
            current: !1,
            text: "您的标准腰围: ",
            desc: Math.round(.365 * e) + "cm"
        }, {
            done: !1,
            current: !1,
            text: "您的标准臀围: ",
            desc: Math.round(.565 * e) + "cm"
        } ];
    }
};