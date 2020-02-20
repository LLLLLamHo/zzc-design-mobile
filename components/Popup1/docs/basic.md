弹出菜单

## API

适用平台：WEB

同时只能存在一个popup，如果需要切换popup，需要从业务代码中先将现有的popup关闭！

## Modal

| 属性           | 说明                           | 类型                              | 默认值    |
| -------------- | ------------------------------ | --------------------------------- | --------- |
| prefixCls      | 组件的公用className前序        | string                            | zds-popup |
| className      | 定义popup的body class          | string                            | 无        |
| style          | 自定义样式                     | object                            | {}        |
| bodyStyle      | 弹框主题样式                   | object                            | {}        |
| maskStyle      | 遮罩层样式                     | object                            | {}        |
| maskClose      | 点击遮罩层关闭popup            | boolean                           | false     |
| onClose        | 关闭popup后的回调函数（必填）  | function                          | 无        |
| renderCallback | 渲染完成并动画结束的回调函数   | function                          | 无        |
| visible        | 控制popup是否显示              | boolean                           | false     |
| transparent    | 是否不创建mask                 | boolean                           | false     |
| direction      | 弹出的方向                     | string(可选top,bottom,left,right) | bottom    |
| preRender      | 预先渲染内容（尽可能避免使用,影响性能） | boolean                           | false     |

简单的调用demo

```jsx
<Popup
    maskClose={true}
    visible={this.state.visible}
    onClose={() => {
        this.setState( {
            visible: false
        } );
    }}
>
    <div>123</div>
</Popup>
```

当`maskClose`为true时，必须提供`onClose`给popup内部调用。

### 使用tips
如果在使用popup的时候，需要显示的内容过多，或者`children`是由多个其他组件互相组合的情况下，建议使用`min-height`、`max-height`、`min-widht`和`max-width`去控制整体popup的高度和宽度，避免出现高度和宽度在动画执行过程中导致计算错误。

