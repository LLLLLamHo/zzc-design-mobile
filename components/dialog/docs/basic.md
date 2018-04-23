对话框

## API

适用平台：WEB

创建一个对话框，modal和alert都是基于dialog进行封装。

##Dialog

| 属性               | 说明                             | 类型                           | 默认值    |
| ------------------ | -------------------------------- | ------------------------------ | --------- |
| prefixCls          | 组件的公用className前序          | string                         | zzc-modal |
| className          | 定义dialog最外层元素的class      | string                         | 无        |
| boxClassName       | 定义dialog的body class           | string                         | 无        |
| maskClassName      | 定义dialog的mask class           | string                         | 无        |
| maskTransitionName | 定义dialog的mask 的动画class标识 | string                         | 无        |
| transitionName     | 定义dialog的mask 的动画class标识 | string                         | 无        |
| style              | 自定义样式dialog的body的样式     | object                         | {}        |
| maskStyle          | 定义dialog的mask的样式           | string                         | 无        |
| title              | dialog显示的title                | JSXElement                     | 无        |
| footer             | dialog显示的footer               | JSXElement                     | 无        |
| visible            | 控制dialog执行动画               | boolean                        | false     |
| maskClose          | 点击mask触发关闭                 | boolean                        | false无   |
| transparent        | 是否不创建mask                   | boolean                        | false     |
| closeCallback      | 控制dialog关闭的方法             | function                       | 无        |

默认dialog会直接显示，`visible`是用来控制dialog是否执行动画效果，当`visible`为`true`时会添加`enter`动画钩子，当为`true`改为`false`的时候会执行`leave`动画钩子。


简单的例子

```jsx
<Dialog
    visible='这是一个标题'
    maskClose={true}
    closeCallback={console.log(123)}
>
    <div className='modal-text'>这是一个文案...</div>
</Dialog>
```

关于`transitionName`和`maskTransitionName`有固定的样式配置。如果只是传入字符串，会在显示时添加对应class字符串，关闭时去掉对应的class字符串，但是如果传入的是一个对象，必须提供4个动画钩子：

```js
// 内置了一些动画钩子
zoom: {
    enter: 'zzc-zoom-enter',
    enterActive: 'zzc-zoom-enter-active',
    leave: 'zzc-zoom-leave',
    leaveActive: 'zzc-zoom-leave-active'
},
fade: {
    enter: 'zzc-fade-enter',
    enterActive: 'zzc-fade-enter-active',
    leave: 'zzc-fade-leave',
    leaveActive: 'zzc-fade-leave-active'
}

// 自定义动画钩子
transitionName={{
    enter: 'zzc-123-enter',
    enterActive: 'zzc-123-enter-active',
    leave: 'zzc-123-leave',
    leaveActive: 'zzc-123-leave-active'
}}
```