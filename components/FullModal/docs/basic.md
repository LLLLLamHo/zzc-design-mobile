全屏对话框

## API

适用平台：WEB

- 向用户展示重要信息
- 提醒用户对某个操作进行阅读
- 文案必须简短直白，如用作错误提示，需给出解决方案
- 会打断用户操作，请尽量避免频繁使用

## FullModal

| 属性                | 说明                                              | 类型              | 默认值     |
| ------------------- | ------------------------------------------------- | ----------------- | ---------- |
| prefixCls           | 组件的公用className前序                           | string            | zds-dialog |
| className           | 定义dialog最外层元素的class                       | string            | 无         |
| style               | 自定义样式dialog的body的样式                      | object            | {}         |
| title               | FullModal显示的title（必填）                      | string/JSXElement | 无         |
| visible             | 控制FullModal是否显示（必填）                     | boolean           | false      |
| closeCallback       | 控制FullModal点击关闭按钮的回调事件（必填）       | function          | 无         |
| isUseBScroll        | 内容是否采用JS进行滚动（BScroll）                 | boolean           | false      |
| BScrollOpt          | 用于初始化BScroll时所需要的参数                   | object            | {}         |
| BScrollInitCallback | 初始化后的回调函数，会将BScroll的实例当做参数传入 | function          | 无         |

* 因为fullModal中使用了BScroll进行模拟滚动，如果webpack中设置了代码分割，需要引入better-scroll.

简单的例子

```JavaScript
<FullModal
    visible={this.state.visible}
    title='这是一个标题'
    closeCallback={() => { this.setState({ visible: false }); }}
>
    <div>这里是说明文案</div>
</FullModal>
```
