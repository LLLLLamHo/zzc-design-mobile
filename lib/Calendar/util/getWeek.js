"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getWeek;
/**
 * Created by lamho on 2017/4/7.
 */
function getWeek(weekCode, lang) {
    switch (weekCode) {
        case 0:
            return "日";
        case 1:
            return lang == 'cn' ? "一" : '壹';
        case 2:
            return "二";
        case 3:
            return "三";
        case 4:
            return "四";
        case 5:
            return "五";
        case 6:
            return "六";
    }
    return '';
}