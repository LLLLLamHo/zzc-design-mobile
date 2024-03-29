'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = i18n;
function i18n(lang) {
    return lang == 'cn' ? {
        left_title: '当地时间',
        left_placeholder: '选择当地取车日期',
        right_title: '当地时间',
        right_placeholder: '选择当地取车日期',
        monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        weekList: ['日', '一', '二', '三', '四', '五', '六'],
        picker_car: '取车',
        return_car: '还车',
        inTheDay_car: '当日取还',
        picker_default: null,
        return_default: null,
        reset_btn_text: '重置',
        submit_btn_text: '确认时间',
        submit_btn_text_1: '确定(共',
        submit_btn_text_2: '天)',
        time_picker_title: '取车时间',
        time_return_title: '还车时间',
        listAcrossTheYearText: '年',
        month: '月',
        week: '周',
        day: '天',
        days: '日',
        today: '今天'
    } : {
        left_title: '當地時間',
        left_placeholder: '選擇當地取車日期',
        right_title: '當地時間',
        right_placeholder: '選擇當地取車日期',
        monthList: ['壹月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十壹月', '十二月'],
        weekList: ['日', '壹', '二', '三', '四', '五', '六'],
        picker_car: '取車',
        return_car: '還車',
        inTheDay_car: '當日取還',
        picker_default: null,
        return_default: null,
        reset_btn_text: '重置',
        submit_btn_text: '確認時間',
        submit_btn_text_1: '確定(共',
        submit_btn_text_2: '天)',
        time_picker_title: '取車時間',
        time_return_title: '还車時間',
        listAcrossTheYearText: '年',
        month: '月',
        week: '周',
        day: '天',
        days: '日',
        today: '今天'
    };
}