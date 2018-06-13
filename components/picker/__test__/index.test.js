import React from 'react';
import {render} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Picker from '../index.tsx';
test( 'Modal', () => {
    const wrapper = render(
        <Picker
            pickerData={[
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
                    ]
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
            ]}
        />
    );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

