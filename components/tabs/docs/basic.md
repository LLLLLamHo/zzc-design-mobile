弹出菜单

## API

适用平台：WEB

同时只能存在一个popup，如果需要切换popup，需要从业务代码中先将现有的popup关闭！

##Modal

| 属性               | 说明                               | 类型                              | 默认值              |
| ------------------ | ---------------------------------- | --------------------------------- | ------------------- |
| prefixCls          | 组件的公用className前序            | string                            | zzc-modal           |
| className          | 定义popup的body class              | string                            | 无                  |
| style              | 自定义样式                         | object                            | {}                  |
| maskClose          | 点击遮罩层关闭popup                | boolean                           | false               |
| onClose            | 关闭popup后的回调函数（必填）      | function                          | 无                  |
| maskStyle          | 遮罩层样式                         | object                            | {}                  |
| visible            | 控制popup是否显示                  | boolean                           | false               |
| transparent        | 是否不创建mask                     | boolean                           | false               |
| direction          | 弹出的方向                         | string(可选top,bottom,left,right) | bottom              |


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

