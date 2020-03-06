import {
    DateExtension,
    selectTimeInterface,
    _createMonthMap_now,
    selectTimeIndex,
    CalendarMapItemRow,
    CreateCalendarMap_dataInfo,
    _createDayInfoSubText_data,
    createCalendarMapReturn,
    i18n
} from '../propsType';

export default function createCalendarMap(lang: 'cn' | 'hk', dateExtension: DateExtension | null, startInfo: selectTimeInterface | null, endInfo: selectTimeInterface | null, yesterday: boolean, i18n: i18n): createCalendarMapReturn {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    const now = new Date();
    const calendarMap: Array<any> = [];

    // 今天
    const nowMonth = now.getMonth();
    const nowYear = now.getFullYear();
    const nowDay = now.getDate();
    let startIndexInfo: selectTimeIndex | null = null
    let endIndexInfo: selectTimeIndex | null = null;

    const step = 13;
    for (let i = 0; i < step; i++) {

        const { monthData, startIndex, endIndex } = _createMonthMap({
            n_y: nowYear,
            n_m: nowMonth,
            n_d: nowDay,
        }, year, month, lang, dateExtension, startInfo, endInfo, startIndexInfo, endIndexInfo, yesterday, i18n);

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
        startIndexInfo = null
        endIndexInfo = null;
    }

    return {
        startIndexInfo,
        endIndexInfo,
        calendarMap
    };
}

function _createMonthMap(now: _createMonthMap_now, year: number, month: number, lang: 'cn' | 'hk', dateExtension: DateExtension | null, startInfo: selectTimeInterface | null, endInfo: selectTimeInterface | null, startIndexInfo: selectTimeIndex | null, endIndexInfo: selectTimeIndex | null, yesterday: boolean, i18n: i18n) {
    const startDay = 0;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const monthList: Array<any> = [];

    // 过去日期
    let effectiveDate;
    if (year <= now.n_y && month <= now.n_m) {
        effectiveDate = now.n_d;
    }

    let rowList: Array<any> = [];
    // 第一天补位，如果不是星期1，那么将需要补位
    rowList = _setStartEmptyItem(year, month, startDay + 1);
    for (let i = startDay; i < lastDay; i++) {
        let col;
        const currData = i + 1;

        if (effectiveDate && currData < effectiveDate) {

            col = rowList.push(_getDayItemInfo({
                day: currData,
                month,
                year,
                gone: yesterday && year == now.n_y && month == now.n_m && currData == now.n_d - 1 ? false : true,// 如果允许选择前一天，那么需要判断今天的前一天不置灰
                sub: _createDayInfoSubText({
                    ...now,
                    c_y: year,
                    c_m: month,
                    c_d: currData
                }, i18n)
            }, dateExtension));
        } else {
            col = rowList.push(_getDayItemInfo({
                day: currData,
                month,
                year,
                gone: false,
                sub: _createDayInfoSubText({
                    ...now,
                    c_y: year,
                    c_m: month,
                    c_d: currData
                }, i18n)
            }, dateExtension));
        }

        // 7列为1行
        if (rowList.length % 7 == 0) {
            monthList.push(rowList.splice(0, 7));
        }

        // 如果传入有已经选中的时间，那么将在创建时查找命中的日期
        if (startInfo && endInfo && (startIndexInfo == null || endIndexInfo == null)) {
            if (year == startInfo.Y && month == startInfo.M && currData == startInfo.D) {
                startIndexInfo = { monthKey: month, rowKey: monthList.length, itemKey: col - 1 };
            }
            if (year == endInfo.Y && month == endInfo.M && currData == endInfo.D) {
                endIndexInfo = { monthKey: month, rowKey: monthList.length, itemKey: col - 1 };
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
            list: monthList,
        },
        endIndex: endIndexInfo,
        startIndex: startIndexInfo
    };
}

function _setStartEmptyItem(year: number, month: number, day: number) {
    const date = new Date(`${year}/${month + 1}/${day} 00:00:00`);
    const week = date.getDay() - 1;// 因为星期天是放最后，所以需要减一来计算
    const emptyList: Array<any> = [];
    for (let i = 0; i < week; i++) {
        emptyList.push(_getDayItemInfo({
            year,
            month,
            empty: true
        }));
    }
    return emptyList;
}

function _setEndEmptyItem(year: number, month: number, length: number) {
    const emptyList: Array<any> = [];
    for (let i = 7; i > length; i--) {
        emptyList.push(_getDayItemInfo({
            year,
            month,
            empty: true
        }));
    }
    return emptyList;
}


function _dateExtensionMerge(dataInfo: CreateCalendarMap_dataInfo, dateExtension: DateExtension): CalendarMapItemRow {
    const defaultItemInfo: CalendarMapItemRow = {
        empty: dataInfo.empty || false,
        gone: dataInfo.gone || false,
        y: dataInfo.year,
        m: dataInfo.month,
        d: dataInfo.day,
        main: dataInfo.day,
        sub: dataInfo.sub || null
    };
    const extensionItem = dateExtension[`${defaultItemInfo.y}/${defaultItemInfo.m + 1}/${defaultItemInfo.d}`];
    if (extensionItem) {
        defaultItemInfo.sub = extensionItem.sub || defaultItemInfo.sub;
        defaultItemInfo.main = extensionItem.date || defaultItemInfo.main;
        if (extensionItem.date) {
            defaultItemInfo.extensionMain = true;
        }
    }
    return defaultItemInfo;

}

function _getDayItemInfo(dataInfo: CreateCalendarMap_dataInfo, dateExtension: DateExtension | null = null): CalendarMapItemRow {
    if (!dateExtension) {
        return {
            empty: dataInfo.empty || false,
            gone: dataInfo.gone || false,
            y: dataInfo.year,
            m: dataInfo.month,
            d: dataInfo.day,
            main: dataInfo.day,
            sub: dataInfo.sub
        }
    } else {
        return _dateExtensionMerge(dataInfo, dateExtension);
    }
}

function _createMonthTitle(month: number, lang: 'cn' | 'hk'): string {
    switch (month) {
        case 0: return lang == 'cn' ? '一月' : '壹月';
        case 1: return '二月';
        case 2: return '三月';
        case 3: return '四月';
        case 4: return '五月';
        case 5: return '六月';
        case 6: return '七月';
        case 7: return '八月';
        case 8: return '九月';
        case 9: return '十月';
        case 10: return lang == 'cn' ? '十一月' : '十壹月';
        case 11: return '十二月';
    }
    return '';
}

function _createDayInfoSubText(data: _createDayInfoSubText_data, i18n: i18n): string | null {
    if (data.n_y == data.c_y && data.n_m == data.c_m && data.n_d == data.c_d) {
        return i18n.today;
    }
    return null;
}