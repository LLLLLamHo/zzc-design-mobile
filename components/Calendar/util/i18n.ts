export default function i18n(lang) {
    return lang == 'cn' ? {
        left_title: '当地时间',
        left_placeholder: '选择当地取车日期',
        right_title: '当地时间',
        right_placeholder: '选择当地取车日期',
        weekList: ['一', '二', '三', '四', '五', '六', '日']
    } : {
        left_title: '當地時間',
        left_placeholder: '選擇當地取車日期',
        right_title: '當地時間',
        right_placeholder: '選擇當地取車日期',
        weekList: ['壹', '二', '三', '四', '五', '六', '日']
    }
}