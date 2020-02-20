模态弹窗

## API

适用平台：WEB

同时只能存在一个modal，如果需要切换modal，需要从业务代码中先将现有的modal关闭！

## Modal

| 属性               | 说明                          | 类型                     | 默认值    |
| ------------------ | ----------------------------- | ------------------------ | --------- |
| prefixCls          | 组件的公用className前序       | string                   | zds-modal |
| className          | 定义Modal的body class         | string                   | 无        |
| style              | 自定义样式                    | object                   | {}        |
| title              | model显示的title              | string                   | 无        |
| buttons            | model的按钮组                 | array                    | []        |
| buttonDirection | 按钮排列方向            | 'horizontally'  \| 'vertical' | 'horizontally' |
| maskClose          | 点击遮罩层关闭Modal           | boolean                  | false     |
| closable           | 是否使用默认的按钮            | boolean                  | false     |
| closeCallback      | 关闭Modal后的回调函数（必填） | function                 | 无        |
| maskTransitionName | 遮罩层动画                    | string                   | zds-fade  |
| transitionName     | Modal动画                     | string                   | zds-zoom  |
| maskStyle          | 遮罩层样式                    | object                   | {}        |
| visible            | 控制Modal是否显示             | boolean                  | false     |
| transparent        | 是否不创建mask                | boolean                  | false     |
| lang               | 语言版本                      | string('cn'、'hk'、'en') | cn        |

## 如何定义动画？

我们要提供4个钩子，传入的动画名字应该是`fade`，因为内部会拼接为`zds-fade-enter`.
举例一个渐进渐出的动画效果为例：

```css
.zds-fade-enter {
    opacity: 0;
    animation-duration: .2s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused; 
}

.zds-fade-enter.zzc-fade-enter-active {
    -webkit-animation-name: zzcFadeIn;
    animation-name: zzcFadeIn;
    -webkit-animation-play-state: running;
    animation-play-state: running; 
}

.zds-fade-leave {
    opacity: 0;
    animation-duration: .2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
    animation-play-state: paused; 
}
.zds-fade-leave.zzc-fade-leave-active {
    -webkit-animation-name: zzcFadeOut;
    animation-name: zzcFadeOut;
    -webkit-animation-play-state: running;
    animation-play-state: running; 
}

@keyframes zzcFadeIn {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

@keyframes zzcFadeOut {
  0% {
    opacity: 1; }
  100% {
    opacity: 0; } }
```

## buttons

| 属性    | 说明               | 类型     | 默认值 |
| ------- | ------------------ | -------- | ------ |
| text    | 按钮文字           | string   | 无     |
| onPress | 点击按钮的回调事件 | function | 无     |
| props   | 传递紧按钮的参数   | object   | 无     |

* Modal所使用的按钮是使用zzcDesigne的`Button`组件，props传入的参数请参考`Button`的使用文档。

## 示例

```jsx
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

```jsx
<Modal
    title={this.state.title}
    visible={this.state.visible}
    maskClose={true}
    buttons={[
        {
            text: '确认',
            onPress: () => new Promise( ( resolve ) => {
                Toast.info( 'onPress Promise', 1 );
                setTimeout( resolve, 1000 );
            } ),
            props: {
                type: 'special',
                style: { color: '#696E7C', border: 'none' }
            }

        }
    ]}
    closeCallback={() => { this.setState( { visible3: false } ); }}
>
    <div className="modal-text">这是一个文案...</div>
</Modal>
```
