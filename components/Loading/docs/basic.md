模态弹窗

## API

适用平台：WEB

为当前页面提供一个加载中的提示框，用于数据请求，页面加载等待等情况。

## Modal

| 属性               | 说明                          | 类型                     | 默认值    |
| ------------------ | ----------------------------- | ------------------------ | --------- |
| prefixCls          | 组件的公用className前序       | string                   | zds-modal |
| className          | 定义Modal的body class         | string                   | 无        |
| style              | 自定义样式                    | object                   | {}        |
| closeCallback      | 关闭Modal后的回调函数（必填） | function                 | 无        |
| maskStyle          | 遮罩层样式                    | object                   | {}        |
| visible            | 控制Modal是否显示             | boolean                  | false     |
| text               | 显示文案                      | string | ''        |

## 示例

```jsx
<Loading
    visible={true}
    text='努力加载中....'
    closeCallback={() => {console.log(123)}}
/>
```
