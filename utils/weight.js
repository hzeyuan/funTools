function e(e, t) {
    return e / (t * t);
}

function t(e, t, r, n) {
    return [{
        current: !1,
        done: !1,
        text: "体重状态: ",
        desc: e
    }, {
        done: !1,
        current: !1,
        text: "危险性处于: " + t + "状态",
        desc: ""
    }, {
        done: !1,
        current: !1,
        text: "您的理想体重是: ",
        desc: n + "公斤"
    }, {
        done: !1,
        current: !1,
        text: "您的体质指数: ",
        desc: r
    }, {
        done: !1,
        current: !1,
        text: "体质指数: ",
        desc: "(18.5～23.9为正常范围)"
    }];
}

module.exports = {
    HealthMsg: function (r, n, o) {
        var u = "";
        if (parseFloat(n) <= 0 || parseFloat(n) >= 250 || parseFloat(r) <= 0 || parseFloat(r) >= 250) u = [{
            current: !1,
            done: !1,
            text: "身高或体重超过计算范围了！",
            desc: ""
        }]; else {
            var a, c;
            a = (a = e(r, n / 100)).toFixed(1), a = parseFloat(a), c = "M" == o ? Math.round(50 + 2.3 * (n - 152) / 2.54) : Math.round(45.5 + 2.3 * (n - 152) / 2.54),
                u = a >= 40 ? t("Ⅲ度肥胖", "非常严重增加", a, c) : a >= 30 && a < 40 ? t("II度肥胖", "严重增加", a, c) : a > 27 && a <= 29.9 ? t("I度肥胖", "中度增加", a, c) : a >= 24 ? t("肥胖前期", "增加", a, c) : a >= 18.5 && a <= 23.9 ? t("正常范围", "平均水平", a, c) : t("体重过低", "低，但其它疾病危险性增加", a, c);
        }
        return u;
    }
};