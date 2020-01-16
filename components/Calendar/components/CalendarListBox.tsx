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

    createMonthItem(monthData, key) {
        const currYear = new Date().getFullYear();
        const yearsGap = (monthData.y - currYear) * 12;// 跨年需要减12个月
        return (
            <div key={key} className='item' data-c-y={monthData.y} data-c-m={+(key) - yearsGap}>
                <p className='title'>{monthData.y != currYear ? `${monthData.y}年` : ''}{monthData.title}</p>
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
                                                    !dayInfo.gone && !dayInfo.empty && this.props.selectItem(key, rowKey, dayKey, dayInfo);
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
        const { gone, empty, startOnly, start, end, active } = dayInfo;
        if (gone) {
            return 'gone';
        } else if (empty) {
            return 'empty';
        } else if (start && end) {
            return 'start end';
        } else if (startOnly) {
            return 'start only';
        } else if (start) {
            return 'start';
        } else if (end) {
            return 'end';
        } else if (active) {
            return 'active';
        } else {
            return '';
        }
    }

    render() {
        const { prefixCls, list, paddingBottom } = this.props;
        return (
            <div ref={(list) => { this.listBox = list }} className={`${prefixCls}-list-box`} style={{paddingBottom: `${paddingBottom}px`}}>
                {
                    list.map((item, key) => {
                        return this.createMonthItem(item, key)
                    })
                }
            </div>
        );
    }
}