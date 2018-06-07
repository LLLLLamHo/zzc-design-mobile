日期滑动选择框

## API

适用平台：WEB

提供各种维度的时间滑动选择。


## picker

| 属性       | 说明                                                                               | 类型     | 默认值             |
| ---------- | ---------------------------------------------------------------------------------- | -------- | ------------------ |
| prefixCls  | 组件的公用className前序                                                            | string   | zzc-picker         |
| className  | 为zzc-tabs-box添加额外class                                                        | string   | ''                 |
| style      | 为zzc-tabs-box添加额外style样式                                                    | object   | {}                 |
| mode       | 日期选择的模式，可以日期`date`，时间`time`,日期加时间`datetime`,年`year`,月`month` | string   | date               |
| onChange   | 值更变时出发回调函数                                                               | Function |                    |
| minDate    | 最小日期（2010-1-1）                                                               | string   | 当前年份向前取10年 |
| maxDate    | 最大日期（2018-1-1）                                                               | string   | 当前年份向后取10年 |
| selectTime | 默认选中日期时间                                                                   | Date     |                    |