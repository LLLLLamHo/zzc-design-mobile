import React, { PureComponent } from 'react';
import config from '../../_util/config';
import { CalendarListBoxProps } from '../propsType';
let observer: any = {}
export default class CalendarListBox extends PureComponent<CalendarListBoxProps, any> {
    constructor(props) {
        super(props);
    }


    listBox;

    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    componentDidMount() {
        const setTimeText = this.props.setTimeText;
        requestAnimationFrame(() => {
            this.scrollToTop()
            // 创建 IntersectionObserver 实例
            observer = new IntersectionObserver((entries: any) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 目标元素进入视口
                        setTimeText(entry.target.firstChild.innerText)
                    } else {
                        // 目标元素离开视口
                    }
                    });
                }, {
                // 选项配置
                root: document.querySelector('.zds-calendar-list-box'), // 相对的根元素
                rootMargin: '0px 0px -98% 0px', // 可以在这里设置相对根元素的 margin
                threshold: 0 // 阈值，表示目标元素的多少可见时触发回调
            });
            this.onScroll()
        });
    }

    componentDidUpdate() {
        requestAnimationFrame(() => {
            this.scrollToTop()
        });
    }

    onScroll(){
        // 监听目标元素
        document.querySelectorAll('.zds-calendar-list-box .item').forEach(item => {
            // console.log(observer)
            observer.observe(item);
        });
    }

    scrollToTop() {
        const {startTime, endTime} = this.props;
        if ( !startTime || !endTime ) return;
        const targetItem: HTMLDivElement | null = document.querySelector(`[data-c-y="${startTime.Y}"][data-c-m="${startTime.M}"] [data-c-d="${startTime.D}"]`);
        if (!this.listBox || !targetItem) return;
        this.listBox.scrollTop = targetItem.offsetTop;
    }

    // renderI18nMonthText(monthData, currYear, monthList, listAcrossTheYearText): string {
    //     return `${monthData.y != currYear ? `${monthData.y}${listAcrossTheYearText}` : ''}${monthList[monthData.m]}`
    // }

    renderI18nMonthText(monthData, _currYear, _monthList, listAcrossTheYearText): string {
        return `${monthData.y}${listAcrossTheYearText}${monthData.m + 1}月`
    }

    createMonthItem(monthData, key, monthList: null | Array<string>, listAcrossTheYearText: string): JSX.Element {
        const currYear = new Date().getFullYear();
        return (
            <div key={key} className='item' data-c-y={monthData.y} data-c-m={monthData.m}>
                {/* <p className='title'>{this.renderI18nMonthText(monthData, currYear, monthList, listAcrossTheYearText)}</p> */}
                <p className='title'>{this.renderI18nMonthText(monthData, currYear, monthList, listAcrossTheYearText)}</p>
                {
                    monthData.list.map((row, rowKey) => {
                        return (
                            <ul className='list-item' key={rowKey} data-c-r={rowKey}>
                                {
                                    row.map((dayInfo, dayKey) => {
                                        return (
                                            <li
                                                data-c-d={dayInfo.d}
                                                className={this.setItemClass(dayInfo)}
                                                key={dayKey}
                                                onClick={() => {
                                                    !dayInfo.gone && !dayInfo.empty && this.props.selectItem(monthData.y, dayInfo.m, rowKey, dayKey, dayInfo);
                                                }}
                                            >
                                                {dayInfo._sub != null && <p className='sub_top'>{dayInfo._sub}</p>}
                                                {dayInfo.main != null && <p>{dayInfo.isToday ? <span>今</span> : dayInfo.main}</p>}
                                                {dayInfo.sub != null && <p className='sub'>{dayInfo.sub}</p>}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        )
                    })
                }
            </div>
        );
    }

    setItemClass(dayInfo) {
        const { gone, empty, startOnly, start, end, active, extensionMain } = dayInfo;
        // 名字扩展，需要将字号缩小
        let className = extensionMain ? 'extension ' : '';
        if (gone) {
            className += 'gone';
        } else if (empty) {
            className +=  'empty';
        } else if (start && end) {
            className +=  'start end';
        } else if (startOnly) {
            className +=  'start only';
        } else if (start) {
            className +=  'start';
        } else if (end) {
            className +=  'end';
        } else if (active) {
            className +=  'active';
        }
        return className;
    }

    render() {
        const { prefixCls, list, paddingBottom, monthList, listAcrossTheYearText } = this.props;
        return (
            <div ref={(list) => { this.listBox = list }} className={`${prefixCls}-list-box`} style={{paddingBottom: `${paddingBottom}px`}} onScroll={this.onScroll}>
                {
                    list.map((item, key) => {
                        return this.createMonthItem(item, key, monthList, listAcrossTheYearText)
                    })
                }
            </div>
        );
    }
}