日期滑动选择框

## API

适用平台：WEB

提供各种维度的时间滑动选择。


## picker

| 属性          | 说明                                                                                                                                                                       | 类型                         | 默认值                       |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------- |
| prefixCls     | 组件的公用className前序                                                                                                                                                    | string                       | zds-picker                   |
| className     | 为zzc-tabs-box添加额外class                                                                                                                                                | string                       | ''                           |
| style         | 为zzc-tabs-box添加额外style样式                                                                                                                                            | object                       | {}                           |
| warningText   | 警告提示                                                                                                                                                                   | string                       | null                         |
| title         | 弹框title文案                                                                                                                                                              | string                       | '选择时间'                   |
| buttonText    | 确认按钮文案                                                                                                                                                               | string                       | '确认日期'                   |
| mode          | 日期选择的模式，可以日期`date`，时间`time`,日期加时间`datetime`,年`year`,月`month`,小时`hour`,年和月`yearAndMonth`                                                                              | string                       | date                         |
| onChange      | 值更变时出发回调函数                                                                                                                                                       | Function                     |                              |
| onSubmit      | 保存时间                                                                                                                                                                   | Function                     |                              |
| minDate       | 最小日期（2010/01/01）                                                                                                                                                     | string/Date                  | 当前年份向前取10年           |
| maxDate       | 最大日期（2018/01/01）                                                                                                                                                     | string/Date                  | 当前年份向后取10年           |
| selectTime    | 默认选中日期时间                                                                                                                                                           | string/Date                  | string（2018/01/01 12:10）   |  |
| minuteStep    | 分钟的间隔数                                                                                                                                                               | number                       | 1                            |
| use12hour     | 是否使用12小时制                                                                                                                                                           | boolearn                     | false                        |
| hourRange     | 小时范围(`use12hour将会失效`)                                                                                                                                              | [start: number, end: number] | false                        |
| onValueChange | 更改选中项的时候触发，返回当前选中的时间                                                                                                                                   | Function                     |                              |
| reverse       | 反转模式，默认情况下当前上一个选中的月份的天数超过当前月份的天数，会自动重置为当前月份最后一天，如果反转模式为true的话，那么将重置为当前月份的第一天。（28号和31号的问题） | boolearn                     | false                        |
| maskClose     | 点击mask关闭时间选择框                                                                                                                                                     | boolean                      | true                         |
| lang          | 语言版本                                                                                                                                                                   | string('cn'、'hk'、'en')     | cn                           |
| i18n          | 多语言                                                                                                                                                                     | i18n                         | null                         |
| monthList     | 自定义月份显示                                                                                                                                                             | Array<string>                | [1,2,3,4,5,6,7,8,9,10,11,12] |

### i18n配置

| 属性                 | 类型   | 默认值     |
| -------------------- | ------ | ---------- |
| year                 | string | '年'       |
| month                | string | '月'       |
| day                  | string | '日'       |
| hour                 | string | '时'       |
| minutes              | string | '分'       |
| am                   | string | '上午'     |
| pm                   | string | '下午'     |
| confirm              | string | '确认'     |
| cancel               | string | '取消'     |
| close                | string | '关闭'     |
| open                 | string | '打开'     |
| datePickerTitle      | string | '选择时间' |
| datePickerButtomText | string | '确认日期' |

>默认使用lang中内置的cn，hk和en的文案，如果需要使用如日文，法文等，可以无视lang，直接传入完成的i18n进行重写

## 使用方式

如果使用`mode='time'`，则传入`selectTime`的格式应该为`12:30`字符串，如果使用`mode=year/month`,只需要传入对应的年份和月份即可。例如：`'2019'`或者`'8'`。其他`mode`方式钧可以使用string或者是一个字符串。

```jsx
<DatePicker
    visible={this.state.isShow}
    minuteStep={15}
    use12hour
    mode='date'
    selectTime={new Date(this.state.time1)}
    onValueChange={(data) => { console.log( data ); }}
    onClose={() => { this.setState({isShow: false}) }}
    onSubmit={(data) => { this.setState({isShow: false}) }}
/>
```

* 在使用时，如果定义了`minDate`,`maxDate`的情况下，需要注意`selectTime`请保证在限制时间内。
* 如果需要定义`minDate`,`maxDate`，建议使用字符串类型参数传入，并保证传入时分，如：`2017/8/8 12:00`，否则将不限制小时和分钟。