滑动选择框

## API

适用平台：WEB

用于DatePicker组件的底层组件，也可以用该组件进行扩展其他功能。


## picker

| 属性         | 说明                                                             | 类型     | 默认值     |
| ------------ | ---------------------------------------------------------------- | -------- | ---------- |
| prefixCls    | 组件的公用className前序                                          | string   | zds-picker |
| className    | 为zds-tabs-box添加额外class                                      | string   | ''         |
| style        | 为zds-tabs-box添加额外style样式                                  | object   | {}         |
| pickerData   | 传入picker组件的数据                                             | Array    | []         |
| renderAfter  | 渲染完成后的回调函数(返回滑动列表)                                             | Function |            |
| onTouchStart | 开始滑动事件，会返回当前滑动的滑动框下标                         | Function |            |
| onTouchEnd   | 滑动结束事件，会返回当前滑动结束后触发事件的BScroll的标识（如果没有标识则返回下标）和当前选中的滑动框中的item的下标 | Function |            |



## pickerData

有一些固定的参数需要传入，用于初始化滚动项中的信息。

| 属性          | 说明                             | 类型   | 默认值 |
| ------------- | -------------------------------- | ------ | ------ |
| className     | scroll父元素的class              | string | ''     |
| itemClassName | scroll中每个选项的class          | string | ''     |
| defaultIndex  | 默认的选中项                     | number | ''     |
| listData      | list的item信息                   | Array  | []     |
| scrollType      | scroll的类型标识                   | string  | ''     |
| scrollData    | 传入picker组件初始化scroll的参数,[详情查看](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api.html#offtype-fn) | object | {}     |

## listData

| 属性    | 说明                                   | 类型   | 默认值 |
| ------- | -------------------------------------- | ------ | ------ |
| text    | item显示的文案                         | string | ''     |
| dataKey | item元素中的data-key，不传默认使用text | string | ''     |


```JavaScript
<Picker
    onTouchEnd={( scrollIndex, itemIndex ) => {this.touchEnd( scrollIndex, itemIndex );}}
    onTouchStart={( scrollIndex ) => { this.touchStart( scrollIndex );}}
    pickerData={this.state.data}
    renderAfter={this.renderAfter}
/>
```









