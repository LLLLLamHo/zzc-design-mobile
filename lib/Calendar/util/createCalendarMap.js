'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = createCalendarMap;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCalendarMap(lang, dropOffMaxDays, dateExtension, startInfo, endInfo, yesterday, i18n) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var now = new Date();
    var calendarMap = [];
    // 今天
    var nowMonth = now.getMonth();
    var nowYear = now.getFullYear();
    var nowDay = now.getDate();
    var lastDateMap = dropOffMaxDays > 0 ? _getLastDateMap(Number(dropOffMaxDays)) : null;
    var startIndexInfo = null;
    var endIndexInfo = null;
    var step = 13;
    for (var i = 0; i < step; i++) {
        var _createMonthMap2 = _createMonthMap({
            n_y: nowYear,
            n_m: nowMonth,
            n_d: nowDay
        }, lastDateMap, year, month, lang, dateExtension, startInfo, endInfo, startIndexInfo, endIndexInfo, yesterday, i18n),
            monthData = _createMonthMap2.monthData,
            startIndex = _createMonthMap2.startIndex,
            endIndex = _createMonthMap2.endIndex;

        startIndexInfo = startIndex;
        endIndexInfo = endIndex;
        calendarMap.push(monthData);
        if (month >= 11) {
            month = 0;
            year += 1;
        } else {
            month += 1;
        }
    }
    // 必须要同时找到start和end的下标，否则返回null
    if (!startIndexInfo || !endIndexInfo) {
        startIndexInfo = null;
        endIndexInfo = null;
    }
    return {
        startIndexInfo: startIndexInfo,
        endIndexInfo: endIndexInfo,
        calendarMap: calendarMap
    };
}
function _getLastDateMap(AddDayCount) {
    var last = new Date();
    last.setDate(last.getDate() + AddDayCount);
    var lastYear = last.getFullYear();
    var lastMonth = last.getMonth();
    var lastDay = last.getDate();
    return {
        l_y: lastYear,
        l_m: lastMonth,
        l_d: lastDay
    };
}
function _createMonthMap(now, lastDateMap, year, month, lang, dateExtension, startInfo, endInfo, startIndexInfo, endIndexInfo, yesterday, i18n) {
    var startDay = 0;
    var lastDay = new Date(year, month + 1, 0).getDate();
    var monthList = [];
    // 过去日期
    var effectiveDate = void 0; // 起始定点
    var lastEffectiveEnd = void 0; // 结尾定点
    var effectiveRang = false; // 默认限制区间（针对月份级别）
    if (year <= now.n_y && month <= now.n_m) {
        effectiveDate = now.n_d;
    }
    if (lastDateMap && year == lastDateMap.l_y && month == lastDateMap.l_m) {
        lastEffectiveEnd = lastDateMap.l_d;
    }
    if (lastDateMap && (year == now.n_y && month > now.n_m || year > now.n_y) && (year < lastDateMap.l_y && month > lastDateMap.l_m || year == lastDateMap.l_y && month < lastDateMap.l_m)) {
        effectiveRang = true;
    }
    var rowList = [];
    // 第一天补位，如果不是星期1，那么将需要补位
    rowList = _setStartEmptyItem(year, month, startDay + 1);
    for (var i = startDay; i < lastDay; i++) {
        var col = void 0;
        var currData = i + 1;
        if (lastDateMap) {
            if (lastEffectiveEnd && currData <= lastEffectiveEnd || effectiveDate && currData >= effectiveDate || effectiveRang) {
                col = rowList.push(_getDayItemInfo({
                    day: currData,
                    month: month,
                    year: year,
                    gone: false,
                    sub: _createDayInfoSubText((0, _assign2.default)({}, now, { c_y: year, c_m: month, c_d: currData }), i18n)
                }, dateExtension));
            } else {
                col = rowList.push(_getDayItemInfo({
                    day: currData,
                    month: month,
                    year: year,
                    gone: yesterday && year == now.n_y && month == now.n_m && currData == now.n_d - 1 ? false : true,
                    sub: _createDayInfoSubText((0, _assign2.default)({}, now, { c_y: year, c_m: month, c_d: currData }), i18n)
                }, dateExtension));
            }
        } else {
            // 无限制区间
            if (effectiveDate && currData < effectiveDate) {
                col = rowList.push(_getDayItemInfo({
                    day: currData,
                    month: month,
                    year: year,
                    gone: yesterday && year == now.n_y && month == now.n_m && currData == now.n_d - 1 ? false : true,
                    sub: _createDayInfoSubText((0, _assign2.default)({}, now, { c_y: year, c_m: month, c_d: currData }), i18n)
                }, dateExtension));
            } else {
                col = rowList.push(_getDayItemInfo({
                    day: currData,
                    month: month,
                    year: year,
                    gone: false,
                    sub: _createDayInfoSubText((0, _assign2.default)({}, now, { c_y: year, c_m: month, c_d: currData }), i18n)
                }, dateExtension));
            }
        }
        // 7列为1行
        if (rowList.length % 7 == 0) {
            monthList.push(rowList.splice(0, 7));
        }
        // 如果传入有已经选中的时间，那么将在创建时查找命中的日期
        if (startInfo && endInfo && (startIndexInfo == null || endIndexInfo == null)) {
            var monthLength = col == 7 && monthList.length > 0 ? monthList.length - 1 : monthList.length; // 周最后一天 后退一行
            if (year == startInfo.Y && month == startInfo.M && currData == startInfo.D) {
                startIndexInfo = { year: year, monthKey: month, rowKey: monthLength, itemKey: col - 1 };
            }
            if (year == endInfo.Y && month == endInfo.M && currData == endInfo.D) {
                endIndexInfo = { year: year, monthKey: month, rowKey: monthLength, itemKey: col - 1 };
            }
        }
    }
    // 如果最后一天不是星期日，那么需要对日期补位
    // 当当前rowList的length为0，代表这个月最后一天是星期日，所以不需要进行额外补位
    rowList = rowList.length == 0 ? rowList : rowList.concat(_setEndEmptyItem(year, month, rowList.length));
    monthList.push(rowList.splice(0, 7));
    return {
        monthData: {
            title: _createMonthTitle(month, lang),
            m: month,
            y: year,
            list: monthList
        },
        endIndex: endIndexInfo,
        startIndex: startIndexInfo
    };
}
function _setStartEmptyItem(year, month, day) {
    var date = new Date(year + '/' + (month + 1) + '/' + day + ' 00:00:00');
    var week = date.getDay() - 1; // 因为星期天是放最后，所以需要减一来计算
    var emptyList = [];
    for (var i = 0; i < week; i++) {
        emptyList.push(_getDayItemInfo({
            year: year,
            month: month,
            empty: true
        }));
    }
    return emptyList;
}
function _setEndEmptyItem(year, month, length) {
    var emptyList = [];
    for (var i = 7; i > length; i--) {
        emptyList.push(_getDayItemInfo({
            year: year,
            month: month,
            empty: true
        }));
    }
    return emptyList;
}
function _dateExtensionMerge(dataInfo, dateExtension) {
    var defaultItemInfo = {
        empty: dataInfo.empty || false,
        gone: dataInfo.gone || false,
        y: dataInfo.year,
        m: dataInfo.month,
        d: dataInfo.day,
        main: dataInfo.day,
        sub: dataInfo.sub || null
    };
    var extensionItem = dateExtension[defaultItemInfo.y + '/' + (defaultItemInfo.m + 1) + '/' + defaultItemInfo.d];
    if (extensionItem) {
        defaultItemInfo.sub = extensionItem.sub || defaultItemInfo.sub;
        defaultItemInfo.main = extensionItem.date || defaultItemInfo.main;
        if (extensionItem.date) {
            defaultItemInfo.extensionMain = true;
        }
    }
    return defaultItemInfo;
}
function _getDayItemInfo(dataInfo) {
    var dateExtension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (!dateExtension) {
        return {
            empty: dataInfo.empty || false,
            gone: dataInfo.gone || false,
            y: dataInfo.year,
            m: dataInfo.month,
            d: dataInfo.day,
            main: dataInfo.day,
            sub: dataInfo.sub
        };
    } else {
        return _dateExtensionMerge(dataInfo, dateExtension);
    }
}
function _createMonthTitle(month, lang) {
    switch (month) {
        case 0:
            return lang == 'cn' ? '一月' : '壹月';
        case 1:
            return '二月';
        case 2:
            return '三月';
        case 3:
            return '四月';
        case 4:
            return '五月';
        case 5:
            return '六月';
        case 6:
            return '七月';
        case 7:
            return '八月';
        case 8:
            return '九月';
        case 9:
            return '十月';
        case 10:
            return lang == 'cn' ? '十一月' : '十壹月';
        case 11:
            return '十二月';
    }
    return '';
}
function _createDayInfoSubText(data, i18n) {
    if (data.n_y == data.c_y && data.n_m == data.c_m && data.n_d == data.c_d) {
        return i18n.today;
    }
    return null;
}