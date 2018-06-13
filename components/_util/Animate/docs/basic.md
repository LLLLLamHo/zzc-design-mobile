动画组件

主要为我们提供组件的动画事件绑定以及class的添加和删除

## API

适用平台：WEB

| 属性          | 说明                                                 | 类型          | 默认值 |
| ------------- | ---------------------------------------------------- | ------------- | ------ |
| animationName | 传入动画的名称                                       | object/string | ''     |
| visible       | 控组组件的动画状态，true执行enter操作，相反执行leave | boolean       | false  |
| onEnd         | 动画结束触发的回调函数                               | function      | null   |

使用例子：

```JavaScript
<Animate
    visible={visible}
    animationName={{
        enter: 'zzc-zoom-enter',
        enterActive: 'zzc-zoom-enter-active',
        leave: 'zzc-zoom-leave',
        leaveActive: 'zzc-zoom-leave-active'
    }}
    onEnd={( type ) => {
        type === 'leave' && closeCallback();
    }}
>
    <div style={maskStyle} ref={( ref ) => { this.mask = ref; }} className={newMaskClassName} />
</Animate>
```

onEnd函数会返回一个参数，代表当前动画的状态，返回`enter`或`leave`。