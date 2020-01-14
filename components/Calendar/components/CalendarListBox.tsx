import React, { PureComponent } from 'react';
import config from '../../_util/config';
import { CalendarProps } from '../propsType';

export default class CalendarListBox extends PureComponent<any, any> {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        prefixCls: `${config.cls}-calendar`,
    };

    createMonthItem(monthData, key) {
        const currYear = new Date().getFullYear()
        return (
            <div key={key} className='item' data-c-y={monthData.y} data-c-m={key}>
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
                                                <p>{dayInfo.d}</p>
                                                {dayInfo._sub ? <p className='sub'>{dayInfo._sub}</p> : dayInfo.sub ? <p className='sub'>{dayInfo.sub}</p> : null}
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
        const { prefixCls, list } = this.props;
        console.log(list)
        return (
            <div className={`${prefixCls}-list-box`}>
                {
                    list.map((item, key) => {
                        return this.createMonthItem(item, key)
                    })
                }
            </div>
        );
    }
}