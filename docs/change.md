`zzc-design-mobile` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 图标说明
- 修复bug 🐞
- 新功能  🌟

#### 发布周期

* 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
* 次版本号：每月发布一个带有新特性的向下兼容的版本。
* 主版本号：含有破坏性更新和新特性，不在发布周期内。

#### 3.5.8

- 🐞 修复MoreSelect滚动卡顿问题
- 🐞 修复Input在readonly下再Safari下的键盘问题

#### 3.5.7
`2020-03-18`

- 🌟 新增Form设置表单项状态函数 [#56](https://github.com/LLLLLamHo/zzc-design-mobile/issues/56)

#### 3.5.6
`2020-03-17`

- 🐞 修复Calendar日历时间问题 [#55](https://github.com/LLLLLamHo/zzc-design-mobile/issues/55) [#54](https://github.com/LLLLLamHo/zzc-design-mobile/issues/54)
- 🐞 修复Form的清空内容按钮问题 [#53](https://github.com/LLLLLamHo/zzc-design-mobile/issues/53)

#### 3.5.4 ~ 3.5.5
`2020-03-9`

- 🌟 新增DatePicker的monthList配置
- 🐞 修复Calendar日历时间问题


#### 3.5.2 ~ 3.5.3
`2020-03-6`

- 🌟 新增Calendar的i18n配置资源
- 🌟 新增Calendar的dayCalculator函数进行自定日期计算
- 🌟 新增DatePicker的i18n配置资源
- 🐞 修复Calendar日历算法错误导致的问题

#### 3.5.1
`2020-03-5`

- 🌟 新增Calendar的i18n配置资源

#### 3.5.0
`2020-03-4`

- 🌟 新增Form的电话前缀选择框的more*phone模式
- 🌟 新增ActionSheet组件

#### 3.4.0
`2020-02-18`

- 🐞 修复大小写问题导致linux打包失败

#### 3.3.0
`2020-02-18`

- 🌟 新增MoreSelect组件

#### 3.2.8
`2020-02-07`

- 🐞 修复级联选择器的样式bug

#### 3.2.7
`2020-02-05`

- 🐞 修复Button按钮非inline情况下无法修改size
- 🐞 修复Button按钮的activeClassName参数使用错误的问题

#### 3.2.6
`2020-01-20`

- 🐞 修复Form表单非required类型的验证条件的触发时机，改为value非空的情况下才验证非required类型的验证条件
- 🐞 修复Form表单中的Input卸载后，没有通知Form内部状态删除对应id的Input数据问题。

#### 3.2.5
`2020-01-20`

- 🐞 修复Dialog的mask的滑动穿透问题，禁止了mask的touchmove事件
- 🐞 修复Form组件不能外部传值的问题

#### 3.2.4
`2020-01-19`

- 🐞 去除Radio的默认radio样式

#### 3.2.3
`2020-01-17`

- 🌟 新增Form组件的getFieldDecorator函数新的参数submitFormat


#### 3.2.2
`2020-01-17`

- 🐞 修改Form的submit返回的字段
- 🐞 修改Select的循环key的生成规则

#### 3.2.1
`2020-01-17`

- 🐞 修复Input组件的手机号前缀弹窗高度限制问题

#### 3.2.0
`2020-01-16`

- 🌟 新增日历组件Calendar
- 🐞 修复DatePicker的日期范围和小时范围的参数冲突导致的问题

#### 3.1.5
`2020-01-14`

- 🌟 Form添加valueTranslate参数，用于转换input的value和显示的字段
- 🌟 增加Form组件的demo类型
- 🌟 增加Form组件的setFormAssignValue第三位参数，强制进行验证

#### 3.1.4
`2020-01-14`

- 🌟 FormItem添加onClick事件

#### 3.1.3
`2020-01-13`

- 🌟 新增Form组件的三个触发事件
  - formOnChange
  - formOnBlur
  - formOnFocus
- 🌟 DatePicker组件添加hourRange参数[#48](https://github.com/LLLLLamHo/zzc-design-mobile/issues/48)
- 🌟 Toast支持传入React Element[#49](https://github.com/LLLLLamHo/zzc-design-mobile/issues/49)


#### 3.1.2
`2020-01-10`

- 🌟 新增Cascader组件

#### 3.1.1
`2020-01-06`

- 🌟 新增Textarea组件
- 🌟 新增Switch组件
- 🐞 修改Input的Select调用方式
- 🐞 修改Input的DatePicker调用方式
- 🐞 修改Input组件的参数
- 🌟 新增FormItem组件的clearBtn参数，新增清楚input内容功能

#### 3.1.0
`2020-01-03`

- 🌟 新增Input组件time模式并接入Form
- 🌟 新增Input组件select模式并接入Form
- 🌟 新增Input组件phone模式并接入Form
- 🌟 新增Radio单选框组件并接入Form
- 🌟 完成第一期Form组件

#### 3.0.13
`2019-12-09`

- 🐞 修改loading的svg文件

#### 3.0.12
`2019-12-03`

- 🌟 新增Skeleton骨架组件


#### 3.0.10~3.0.11
`2019-11-19`

- 🌟 新增Step组件
- 🐞 去除ga统计


#### 3.0.9
`2019-10-24`

- 🐞 修改多个样式问题https://github.com/LLLLLamHo/zzc-design-mobile/projects/2


#### 3.0.8
`2019-10-24`

- 🌟 新增Icon组件内的规范svg
- 🐞 修改各组件的Icon引用，更改为新规范的svg
- 🐞 修复bug[#32](https://github.com/LLLLLamHo/zzc-design-mobile/issues/32)
- 🐞 修复bug[#33](https://github.com/LLLLLamHo/zzc-design-mobile/issues/33)
- 🐞 修复bug[#34](https://github.com/LLLLLamHo/zzc-design-mobile/issues/34)


#### 3.0.6~3.0.7
`2019-10-21`

- 🐞 修改Mask的颜色

#### 3.0.5
`2019-10-18`

- 🌟 对Dialog组件的mask组件添加了touchmove的默认事件禁止，影响范围：Popup，Modal，Alert
- 🐞 修改EasyCalculator组件初始化获取值错误
- 🐞 修改Picker文档的说明错误
- 🐞 修改Prompt样式问题

#### 3.0.4
`2019-10-16`

- 🐞 修改Popup样式问题

#### 3.0.3
`2019-10-11`

- 🐞 修改Prompt组件的样式问题
  
#### 3.0.2
`2019-10-8`

- 🌟 新增Prompt组件
- 🌟 新增EasyCalculator组件

#### 3.0.1
`2019-9-23`

- 🌟 新增Card2组件
- 🌟 新增Select组件
- 🌟 新增List组件
- 🌟 DatePicker添加新hour模式
- 🐞 修改全部ui的计算单位为px
- 🐞 修改配色，使用新的ui规范

#### 2.1.0~2.1.2
`2019-8-15`

- 🐞 修复DataPicker组件的reverse参数内部实现
  
`2019-8-14`

- 🌟 添加DataPicker组件的reverse参数，控制超出当月天数重置的方式。


`2019-7-24`

- 🐞 因linux对大小写路径引用敏感，所以将所有组件的路径修改为首字母大写。

`2019-3-20`

- 🐞 修复Alert手动关闭的问题
- 🐞 修复Popup的预渲染的关闭渲染问题
- 🌟 添加Alert组件文档中对调用Alert后返回的函数说明


`2019-3-6`

- 🐞 修复Picker选中item的自动class失效问题


`2019-3-6`

- 🌟 新增Picker的listData添加className配置，自定义每个item的className


`2019-2-28`

- 🐞 修改ImageView组件的关闭BUG


`2019-2-27`

- 🐞 修改picker组件，当外部数据更改时不会更改里面滚动数据


`2018-10-17`

- 🐞 修改Card.Body默认最后一个的边线去掉的逻辑，每一个Card.Body都需要手动去除边线。 [#26](https://github.com/LLLLLamHo/zzc-design-mobile/issues/26)


`2018-10-17`

- 🐞 修复fullModal点击穿透的问题 [#23](https://github.com/LLLLLamHo/zzc-design-mobile/issues/23)
- :clipboard: 新增Tabs组件异步渲染说明

`2018-09-25`

- 🌟 popup添加新参数`preRender`进行预加载。[#21](https://github.com/LLLLLamHo/zzc-design-mobile/issues/21)
- 🐞 修复loading报错问题[#22](https://github.com/LLLLLamHo/zzc-design-mobile/issues/22)
- 🐞 修复datePicker组件传入参数selectTime为空字符串时的错误[#19](https://github.com/LLLLLamHo/zzc-design-mobile/issues/19)

`2018-09-13`

- 🌟 为fullModal添加better-scroll滚动的功能，添加三个参数`isUseBScroll`,`BScrollOpt`和`BScrollInitCallback`。

`2018-08-27`

- 🌟 添加组件报错埋点

#### 1.3.8~1.3.9

`2018-08-21`

- 🌟 添加统计

#### 1.3.7

`2018-08-15`

- 🌟 新增datepicker小时和分钟的范围限制
- 🐞 修改datepicker原有的一些范围限制导致的bug

#### 1.3.6

`2018-07-27`

- 🐞 修改modal使用的button的size

#### 1.3.5

`2018-07-26`

- 🐞 修改datepicker组件的限制月份和日期

#### 1.3.4

`2018-07-25`

- 🐞 修改Button的默认圆角

#### 1.3.3

`2018-07-09`

- 🐞 修改Button的默认圆角

#### 1.3.2

`2018-07-09`

- 🐞 修改Button的full模式下size问题

#### 1.3.1

`2018-07-06`

- 🐞 修改DatePicker组件样式

#### 1.3.0

`2018-07-05`

- 🌟 新增FullModal组件。

#### 1.2.4

`2018-07-05`

- 🐞 修复Toast传入指定parentNode时会清除parentNode中的内容

#### 1.2.3

`2018-07-05`

- 🌟 Toast添加传入指定parentNode功能

#### 1.2.2

`2018-07-04`

- 🐞 修复DatePicker组件传入时间的兼容问题

#### 1.2.1

`2018-07-04`

- 🐞 修复DatePicker组件更改外部参数的时候，内部没有重新生成对应的日期数组。

#### 1.2.0

`2018-06-29`

- 🌟 新增TouchFeedback组件。

#### 1.1.1

`2018-06-29`

- 🐞 修复DatePicker组件切换月份无法更新日期的bug。
- 🌟 DatePicker的`maxDate`和`minDate`支持传入Date对象。

#### 1.1.0

`2018-06-28`

- 🌟 新增Animate组件。

#### 1.0.17 ~ 1.0.18

`2018-06-28`

- 🐞 修复dialog快速点击mask关闭造成无法关闭的bug
- 🐞 修复modal在没有完成进入动画前关闭造成无法完全关闭modal的问题
- 🐞 修复popup在没有完成进入动画前关闭造成无法完全关闭popup的问题
- 🐞 修复datePicker在没有完成进入动画前关闭造成无法完全关闭datePicker的问题

#### 1.0.16

`2018-06-27`

- 🌟 新增ImageView组件，提供图片滑动功能。

#### 1.0.15

`2018-06-25`

- 🐞 修复Button中的标签转换由a改为div


#### 1.0.14

`2018-06-25`

- 🐞 修复Card中的Header里的样式从.38rem改为.32rem

#### 1.0.13

`2018-06-25`

- 🐞 修复Card中多余的样式

#### 1.0.12

`2018-06-25`

- 🐞 修复dialog的z-index为1003

#### 1.0.11

`2018-06-25`

- 🐞 修复modal组件外部props的visible控制组件消失时动画失效
- 🌟 增加Loading组件

#### 1.0.10

`2018-06-25`

- 🐞 修复toast组件单独引入动画失效



#### 1.0.9

`2018-06-14`

发布ZZC Design Mobile的正式版本。
