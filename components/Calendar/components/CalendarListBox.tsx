import React, { PureComponent } from 'react';
import config from '../../_util/config';
import { CalendarListBoxProps } from '../propsType';

export default class CalendarListBox extends PureComponent<CalendarListBoxProps, any> {
    constructor(props) {
        super(props);
    }

    listBox;

    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    componentDidMount() {
        requestAnimationFrame(() => {
            this.scrollToTop()
        });
    }

    componentDidUpdate() {
        requestAnimationFrame(() => {
            this.scrollToTop()
        });
    }

    scrollToTop() {
        const {startTime, endTime} = this.props;
        if ( !startTime || !endTime ) return;
        const targetItem: HTMLDivElement | null = document.querySelector(`[data-c-y="${startTime.Y}"][data-c-m="${startTime.M}"] [data-c-d="${startTime.D}"]`);
        if (!this.listBox || !targetItem) return;
        this.listBox.scrollTop = targetItem.offsetTop;
    }

    renderI18nMonthText(monthData, currYear, monthList, listAcrossTheYearText): string {
        return `${monthData.y != currYear ? `${monthData.y}${listAcrossTheYearText}` : ''}${monthList[monthData.m]}`
    }

    createMonthItem(monthData, key, monthList: null | Array<string>, listAcrossTheYearText: string): JSX.Element {
        const currYear = new Date().getFullYear();
        return (
            <div key={key} className='item' data-c-y={monthData.y} data-c-m={monthData.m}>
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
                                                    !dayInfo.gone && !dayInfo.empty && this.props.selectItem(dayInfo.m, rowKey, dayKey, dayInfo);
                                                }}
                                            >
                                                {dayInfo.main != null && <p>{dayInfo.main}</p>}
                                                {dayInfo._sub != null ? <p className='sub'>{dayInfo._sub}</p> : dayInfo.sub != null ? <p className='sub'>{dayInfo.sub}</p> : null}
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
            <div ref={(list) => { this.listBox = list }} className={`${prefixCls}-list-box`} style={{paddingBottom: `${paddingBottom}px`}}>
                {
                    list.map((item, key) => {
                        return this.createMonthItem(item, key, monthList, listAcrossTheYearText)
                    })
                }
            </div>
        );
    }
}