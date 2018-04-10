模态弹窗

## API

适用平台：WEB

##Modal

| 属性               | 说明                    | 类型     | 默认值    |
| ------------------ | ----------------------- | -------- | --------- |
| prefixCls          | 组件的公用className前序 | string   | zzc-modal |
| className          | 定义Modal的body class   | string   | 无        |
| style              | 自定义样式              | object   | {}        |
| title              | model显示的title         | string   | 无        |
| buttons            | model的按钮组            | array    | []        |
| markClose          | 点击遮罩层关闭Modal     | boolean  | false     |
| closable           | 是否使用默认的按钮      | boolean  | false     |
| closeCallback      | 关闭Modal后的回调函数   | function | 无        |
| maskTransitionName | 遮罩层动画              | string   | fade      |
| transitionName     | Modal动画               | string   | zoom      |
| maskStyle          | 遮罩层样式              | object   | {}        |
| type               | 模式                    | string   | modal     |
| visible            | 控制Modal是否显示       | boolean  | false     |

##buttons

| 属性    | 说明               | 类型     | 默认值 |
| ------- | ------------------ | -------- | ------ |
| text    | 按钮文字           | string   | 无     |
| onPress | 点击按钮的回调事件 | function | 无     |
| props   | 传递紧按钮的参数   | object   | 无     |

*Modal所使用的按钮是使用zzcDesigne的`Button`组件，props传入的参数请参考`Button`的使用文档。

##示例

```js
<Modal
    title={this.state.title}
    closable={true}
    visible={this.state.visible}
    closeCallback={() => { this.setState( { visible: false } ); }}
>
    <div className="modal-text">这是一个文案...</div>
</Modal>
```

有时候我们需要进行一些异步操作之后才决定是否关闭`Modal`，这个时候在按钮的点击事件传入一个`Promise`。Modal会在你的`Promise`中调用`resolve`的时候进行关闭，从而实现异步关闭`Modal`。

```js
<Modal
    title={this.state.title}
    visible={this.state.visible}
    markClose={true}
    buttons={[
        {
            text: '确认',
            onPress: () => new Promise( ( resolve ) => {
                Toast.info( 'onPress Promise', 1 );
                setTimeout( resolve, 1000 );
            } ),
            props: {
                type: 'main',
                className: 'aaaa'
            }

        }
    ]}
    closeCallback={() => { this.setState( { visible3: false } ); }}
>
    <div className="modal-text">这是一个文案...</div>
</Modal>
```
