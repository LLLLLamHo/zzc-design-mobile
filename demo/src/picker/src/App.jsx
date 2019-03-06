import React, {Component} from 'react';
import {Picker, Card} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            province: 1,
            city: 1,
            data1: [
                {
                    className: 'year-list',
                    itemClassName: 'year-item',
                    scrollType: 'year',
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
                    scrollType: 'month',
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
                    scrollType: 'day',
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
            ],
            data2: [
                {
                    className: 'province-list',
                    itemClassName: 'province-item',
                    scrollType: 'province',
                    selectIndex: 0,
                    listData: [
                        {
                            text: '省份1',
                            dataKey: '省份1',
                            className: 'test-class'
                        },
                        {
                            text: '省份2',
                            dataKey: '省份2',
                            className: 'test-class'
                        },
                        {
                            text: '省份3',
                            dataKey: '省份3',
                            className: 'test-class'
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
                    className: 'city-list',
                    itemClassName: 'city-item',
                    scrollType: 'city',
                    selectIndex: 0,
                    listData: [
                        {
                            text: '市区1-1',
                            dataKey: '市区1-1',
                            className: 'test-class'
                        },
                        {
                            text: '市区1-2',
                            dataKey: '市区1-2',
                            className: 'test-class'
                        },
                        {
                            text: '市区1-3',
                            dataKey: '市区1-3',
                            className: 'test-class'
                        },
                        {
                            text: '市区1-4',
                            dataKey: '市区1-4',
                            className: 'test-class'
                        }
                    ],
                    scrollData: {
                        wheel: {
                            selectedIndex: 2
                        }
                    }
                },
                {
                    className: 'area-list',
                    itemClassName: 'area-item',
                    scrollType: 'area',
                    listData: [
                        {
                            text: '区1-1-1',
                            dataKey: '区1-1-1',
                            className: 'test-class'
                        },
                        {
                            text: '区1-1-2',
                            dataKey: '区1-1-2',
                            className: 'test-class'
                        },
                        {
                            text: '区1-1-2',
                            dataKey: '区1-1-2',
                            className: 'test-class'
                        }
                    ]
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

    touchEnd2 ( scrollIndex, itemIndex ) {
        console.log( `touchEnd: scroll序号${scrollIndex}` );
        console.log( `touchEnd: item序号${itemIndex}` );
        if ( scrollIndex == 'province' ) {
            const newData = JSON.parse(JSON.stringify(this.state.data2));
            const data = newData[1].listData;
            for ( let i = 0; i < data.length; i++ ) {
                data[i].text = `市区${itemIndex + 1}-${i + 1}`;
                data[i].dataKey = `市区${itemIndex + 1}-${i + 1}`;
            }
            const cityList = newData[2].listData;
            for ( let i = 0; i < cityList.length; i++ ) {
                cityList[i].text = `区${itemIndex + 1}-${this.state.city}-${i + 1}`;
                cityList[i].dataKey = `区${itemIndex + 1}-${this.state.city}-${i + 1}`;
            }
            newData[0].selectIndex = itemIndex;
            // newData[0].scrollData.wheel.selectIndex = itemIndex;
            newData[1].selectIndex = this.state.city - 1;
            // newData[1].scrollData.wheel.selectIndex = itemIndex;
            this.setState({
                province: itemIndex + 1,
                data2: newData
            });
        } else if ( scrollIndex == 'city' ) {
            const newData = JSON.parse(JSON.stringify(this.state.data2));
            const data = newData[2].listData;
            for ( let i = 0; i < data.length; i++ ) {
                data[i].text = `区${this.state.province}-${itemIndex + 1}-${i + 1}`;
                data[i].dataKey = `区${this.state.province}-${itemIndex + 1}-${i + 1}`;
            }
            newData[0].selectIndex = this.state.province - 1;
            newData[1].selectIndex = itemIndex;
            this.setState({
                data2: newData,
                city: itemIndex + 1
            });
        }
        
    }
    touchStart2 ( scrollIndex ) {
        console.log( `touchStart: scroll序号${scrollIndex}` );
    }

    renderAfter2 ( scrollObj ) {
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
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>城市选择</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <Picker
                        onTouchEnd={( scrollIndex, itemIndex ) => {this.touchEnd2( scrollIndex, itemIndex );}}
                        onTouchStart={( scrollIndex ) => { this.touchStart2( scrollIndex );}}
                        pickerData={this.state.data2}
                        renderAfter={this.renderAfter2}
                    />
                </div>
            </div>
        );
    }
}