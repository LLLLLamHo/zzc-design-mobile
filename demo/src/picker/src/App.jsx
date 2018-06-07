import React, {Component} from 'react';
import {Picker, Card} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            data1: [
                {
                    className: 'year-list',
                    itemClassName: 'year-item',
                    selectIndex: 2,
                    listData: [
                        {
                            text: '2015',
                            dataKey: '2015222'
                        },
                        {
                            text: '2016',
                            dataKey: '2016222'
                        },
                        {
                            text: '2017',
                            dataKey: '2017222'
                        },
                        {
                            text: '2018',
                            dataKey: '2018222'
                        },
                        {
                            text: '2019',
                            dataKey: '2019222'
                        }
                    ],
                    scrollData: {
                        wheel: {
                            selectedIndex: 2,
                            rotate: 25,
                            adjustTime: 33333
                        }
                    }
                },
                {
                    className: 'month-list',
                    itemClassName: 'month-item',
                    selectIndex: 2,
                    listData: [
                        {
                            text: '1月',
                            dataKey: '0'
                        },
                        {
                            text: '2月',
                            dataKey: '1'
                        },
                        {
                            text: '3月',
                            dataKey: '2'
                        },
                        {
                            text: '4月',
                            dataKey: '3'
                        },
                        {
                            text: '5月',
                            dataKey: '4'
                        },
                        {
                            text: '6月',
                            dataKey: '5'
                        },
                        {
                            text: '7月',
                            dataKey: '6'
                        }
                    ]
                },
                {
                    className: 'data-list',
                    itemClassName: 'data-item',
                    listData: [{
                        text: '1日'
                    },
                    {
                        text: '2日'
                    },
                    {
                        text: '3日'
                    },
                    {
                        text: '4日'
                    },
                    {
                        text: '5日'
                    },
                    {
                        text: '6日'
                    },
                    {
                        text: '7日'
                    }]
                }
            ]
        };
    }

    touchEnd ( scrollIndex, itemIndex ) {
        console.log( `touchEnd: scroll序号${scrollIndex}` );
        console.log( `touchEnd: item序号${itemIndex}` );
    }
    touchStart ( scrollIndex ) {
        console.log( `touchStart: scroll序号${scrollIndex}` );
    }

    renderAfter ( scrollObj ) {
        console.log( scrollObj );
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Picker 滚动选择框</h1>
                    <h2>基本的滑动交互的功能组件，作为底层组件使用，如果要使用日期滑动选择组件，请使用DatePicker。</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Picker
                        onTouchEnd={( scrollIndex, itemIndex ) => {this.touchEnd( scrollIndex, itemIndex );}}
                        onTouchStart={( scrollIndex ) => { this.touchStart( scrollIndex );}}
                        pickerData={this.state.data1}
                        renderAfter={this.renderAfter}
                    />
                </div>
            </div>
        );
    }
}