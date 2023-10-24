日历组件

## API

适用平台：WEB

## Calendar

| 属性                | 说明                                                                             | 类型                                   | 默认值       |
| ------------------- | -------------------------------------------------------------------------------- | -------------------------------------- | ------------ |
| prefixCls           | 组件的公用className前序                                                          | string                                 | zzc-calendar |
| className           | classname                                                                        | string                                 | ''           |
| style               | 自定义样式                                                                       | string                                 | 无           |
| lang                | 语言环境 'cn','hk'                                                               | string                                 | 'cn'         |
| i18n                | 语言配置,不配置默认使用内部i18n配置                                              | I18n                                   | null         |
| calendarMode        | 日历模式，暂时内置'car'                                                          | string                                 | 'default'    |
| mode                | 日历选择范围模式，'day','day*time'                                               | string                                 | 'day'        |
| timeRange           | 小时范围， mode=='day*time才生效'                                                | [number, number],  string: "{ left: [number, number], right:[number, number] }"                    | [0,24]       |
| minutesInterval     | 分钟间隔数， mode=='day*time才生效'                                              | number                                 | 30           |
| defaultStartTime    | 默认选中的开始小时和分钟                                                         | string                                 | 9:00         |
| defaultEndTime      | 默认选中的结束小时和分钟                                                         | string                                 | 9:00         |
| startTime           | 默认选中开始的日期                                                               | Date，number，string                   | null         |
| endTime             | 默认选中结束的日期                                                               | Date，number，string                   | null         |
| defaultCalendarTips | 默认提示文案                                                                     | string                                 | ''           |
| yesterday           | 前一天是否可点击                                                                 | boolean                                | false        |
| dropOffMaxDays      | 最大在租期限制                                                                  | number                                 | 0            |
| visible             | 是否显示日历                                                                     | boolean                                | false        |
| dayChange           | 日期改变时触发，函数执行完后return一个字符串，用于动态修改日历的提示信息         | function                               | null         |
| timeChange          | 时间改变时触发，函数执行完后return一个字符串，用于动态修改日历的提示信息         | function                               | null         |
| onChange            | 确认时间时触发，函数执行完后return一个字符串，用于动态修改日历的提示信息         | function                               | null         |
| onClose             | 提供给日历的关闭调用函数                                                         | function                               | null         |
| dayCalculator       | 当开始和结束时间选择完成后，可以通过该函数进行自定义计算并返回给日历内部进行显示 | (start: number, end: number) => string | null         |
| dateExtension       | 扩展日历显示                                                                     | DateExtension                          | null         |
rangeInView             |   可选择区域                |   [Date\|string, Date\|string]            |   null

> 注意，如果timeRange设置为[0, 23],minutesInterval设置为30, 那么时间范围只能选择到0:00 ~ 23:00。
> 如果想选择范围是0:00 ~ 23:30，那么使用默认即可

函数触发说明

```jsx
timeChange={( value ) => ...todo}
dayChange={( value ) => ...todo}

// value数据如下
// {
//     type: "end" || "start"
//     start: {
//         Y: 2020
//         M: 0
//         D: 16
//         h: 9
//         m: 0
//         w: 4
//         t: 1579136400000
//     } || null,
//     end: {
//         Y: 2020
//         M: 0
//         D: 25
//         h: 9
//         m: 0
//         w: 6
//         t: 1579914000000
//     } || null
// }

onChang={(value) => {...todo}}
// {
//  start: "2020/1/23 09:00"
//  end: "2020/1/24 09:00"
// }


```

### i18n配置

| 属性                                                             | 类型   | 默认值                                                                                       |
| ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| left_title                                                       | string | '当地时间'                                                                                   |
| left_placeholder                                                 | string | '选择当地取车日期'                                                                           |
| right_title                                                      | string | '当地时间'                                                                                   |
| right_placeholder                                                | string | '选择当地取车日期'                                                                           |
| monthList                                                        | Array  | ['一月', '二月', '三月', '四月', '五月', '七月', '八月', '九月', '十月', '十一月', '十二月'] |
| weekList                                                         | Array  | ['一', '二', '三', '四', '五', '六', '日']                                                   |
| picker_car 当calendarMode为car时，用于选中日期的文字提示         | string | '取车'                                                                                       |
| return_car 当calendarMode为car时，用于选中日期的文字提示         | string | '当地时间'                                                                                   |
| inTheDay_car                                                     | string | '取还车'                                                                                     |
| picker_default 当calendarMode为default时，用于选中日期的文字提示 | string | null                                                                                         |
| return_default 当calendarMode为default时，用于选中日期的文字提示 | string | null                                                                                         |
| reset_btn_text                                                   | string | '重置'                                                                                       |
| submit_btn_text                                                  | string | '确认时间'                                                                                   |
| time_picker_title                                                | string | '取车时间'                                                                                   |
| time_return_title                                                | string | '还车时间'                                                                                   |
| listAcrossTheYearText                                            | string | '年'(日历中第二年的月份前的跨年标识)                                                         |
| month                                                            | string | 月                                                                                           |
| week                                                             | string | 周                                                                                           |
| day                                                              | string | 天                                                                                           |
| today                                                            | string | 今天                                                                                         |


### 日历信息扩展 DateExtension

配置文件示例

```jsx
{
    '2020/1/1': { date: '元旦', sub: '￥288' },
    '2020/1/24': { date: '除夕', sub: '￥288' },
    '2020/1/25': { date: '春节', sub: '￥288' },
    '2020/2/8': { date: '元宵节', sub: '￥288' },
    '2020/2/14': { date: '情人节', sub: '￥288' },
    '2020/3/8': { date: '妇女节', sub: '￥288' },
    '2020/3/12': { date: '植树节', sub: '￥288' },
    '2020/4/4': { date: '清明节', sub: '￥288' },
    '2020/5/1': { date: '劳动节', sub: '￥288' }
}

{
    '2020/1/1': { sub: '元旦' },
    '2020/1/24': { sub: '除夕' },
    '2020/1/25': { sub: '春节' },
    '2020/2/8': { sub: '元宵节' },
    '2020/2/14': { sub: '情人节' },
    '2020/3/8': { sub: '妇女节' },
    '2020/3/12': { sub: '植树节' },
    '2020/4/4': { sub: '清明节' },
    '2020/5/1': { sub: '劳动节' }
}
```

必须严格按照格式配置，其中，`date`参数是用于覆盖日期的数字，`sub`参数用于覆盖和展示日期的次级文案

### 完整demo

```jsx
import React, { PureComponent } from 'react';
import { Calendar, Card } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';
import holiday from './holiday';
import hotel from './hotel';

export default class App extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {
            visible1: false,
            car_start: null,
            car_end: null,
            visible2: false,
            hotel_start: null,
            hotel_end: null
        };
    }

    calcTime ( type, value ) {
        if (!value) return;
        const { start, end } = value;
        if ( !start || !end ) return;
        if ( end.t - start.t < 0 ) {
            return '不足一天按一天计算';
        }
        return;
    }

    show ( number ) {
        if ( number == 1 ) {
            this.setState( {
                visible1: true
            } );
        } else {
            this.setState( {
                visible2: true
            } );
        }
    }
    hide ( number ) {
        if ( number == 1 ) {
            this.setState( {
                visible1: false
            } );
        } else {
            this.setState( {
                visible2: false
            } );
        }
    }

    set ( number, value ) {
        console.log(value);
        if ( number == 1 ) {
            this.setState( {
                car_start: value.start,
                car_end: value.end,
                visible1: false
            } );
        } else {
            this.setState( {
                hotel_start: value.start,
                hotel_end: value.end,
                visible2: false
            } );
        }
    }


    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Calendar 日历</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <div>
                        <Card full>
                            <Card.Body borderDirection='left'>
                                <div className='card-box2' onClick={() => { this.show( 1 ); }}>
                                    <p>打开租车日历: </p>
                                </div>
                                <p className='text'>{this.state.car_start} - {this.state.car_end}</p>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
                <Calendar
                    visible={this.state.visible1}
                    yesterday
                    defaultCalendarTips='建议取车时间为航班到达后1小时，租车当天未满24小时算1天'
                    timeChange={( value ) => this.calcTime( 'timeChange', value )}
                    dayChange={( value ) => this.calcTime( 'dayChange', value )}
                    onChange={( value ) => { this.set( 1, value ); }}
                    startTime={this.state.car_start}
                    endTime={this.state.car_end}
                    calendarMode='car'
                    mode='day*time'
                    dateExtension={holiday}
                    onClose={() => { this.hide( 1 ) }}
                />
                <div className='zzc-demo-body full'>
                    <div>
                        <Card full>
                            <Card.Body borderDirection='left'>
                                <div className='card-box2' onClick={() => { this.show( 2 ); }}>
                                    <p>打开酒店日历:</p>
                                </div>
                                <p className='text'>{this.state.hotel_start} - {this.state.hotel_end}</p>
                            </Card.Body>
                        </Card>
                        <Calendar
                            visible={this.state.visible2}
                            // defaultCalendarTips='建议取车时间为航班到达后1小时，租车当天未满24小时算1天'
                            timeChange={( value ) => this.calcTime( 'timeChange', value )}
                            dayChange={( value ) => this.calcTime( 'dayChange', value )}
                            onChange={( value ) => { this.set( 2, value ); }}
                            startTime={this.state.car_start}
                            endTime={this.state.car_end}
                            onClose={() => { this.hide( 2 ) }}
                            mode='day'
                            dateExtension={hotel}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
```

英文版，对i18n参数完全重写

```jsx
i18n={{
    left_title: 'Local date',
    right_title: 'Local date',
    left_placeholder: 'Pick-up date',
    right_placeholder: 'Drop-off date',
    monthList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekList: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    reset_btn_text: 'Reset',
    submit_btn_text: 'Confirm',
    time_picker_title: 'Pick Time',
    time_return_title: 'Drop Time',
    picker_car: 'Pick',
    return_car: 'Drop',
    inTheDay_car: 'Pick Drop',
    month: '.',
    week: '',
    day: 'Day',
    listAcrossTheYearText: '.',
    today: 'today'
}}
```