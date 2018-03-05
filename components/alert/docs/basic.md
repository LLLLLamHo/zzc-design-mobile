警告弹窗

## API

适用平台：WEB

##Alert

| 属性          | 说明                    | 类型                   | 默认值    |
| ------------- | ----------------------- | ---------------------- | --------- |
| prefixCls     | 组件的公用className前序 | string                 | zzc-alert |
| className     | 定义最外层父元素的class | string                 | 无        |
| style         | 自定义样式              | object                 | {}        |
| title         | 弹窗显示的title         | string                 | 无        |
| content       | 弹窗显示的内容          | string/react component | null      |
| buttons       | 弹窗的按钮组            | array                  | []        |
| markClose     | 点击遮罩层关闭Alert     | boolean                | false     |
| closable      | 是否使用默认的按钮      | boolean                | false     |
| closeCallback | 关闭Alert后的回调函数   | function               | 无     |



##buttons

| 属性    | 说明               | 类型     | 默认值 |
| ------- | ------------------ | -------- | ------ |
| text    | 按钮文字           | string   | 无     |
| onPress | 点击按钮的回调事件 | function | 无     |
| props   | 传递紧按钮的参数   | object   | 无     |

*Alert所使用的按钮是使用zzcDesigne的`Button`组件，props传入的参数请参考`Button`的使用文档。

##示例

```js
Alert( {
    title: '标题',
    content: <p>asdasdasdasd</p>,
    buttons: [
        {
            text: '取消',
            onPress: () => {
                console.log( '点击取' )
            },
            props: {
                style: { color:'#254FCB' }
            }
        }
    ]
} );
```

有时候我们需要进行一些异步操作之后才决定是否关闭`Alert`，这个时候在按钮的点击事件传入一个`Promise`。Alert会在你的`Promise`中调用`resolve`的时候进行关闭，从而实现异步关闭`Alert`。

```js
Alert( {
    title: '发起一个请求',
    buttons: [
        {
            text: '确认',
            onPress: () => new Promise( ( resolve ) => {
                Toast.info( 'onPresPromise', 1 );
                setTimeout( resolve, 1000 );
            } ),
            props: {
                type: 'main',
                className: 'aaaa'
            }

        }
    ]
} );
```