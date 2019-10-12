自带的svg图标库

## API

适用平台：WEB

| 属性      | 说明                                     | 类型   | 默认值   |
| --------- | ---------------------------------------- | ------ | -------- |
| prefixCls | 组件的公用className前序                  | string | zds-icon |
| type      | 图标类型，可以`success`/`error`等等      | string | 无       |
| size      | 图标大小，可选值为`lg`、`md`、`sm`、`xs` | string | `md`     |
| style     | 自定义样式                               | Object | 无       |
| className | 样式类名                                 | string | 无       |

```jsx
<Icon size="lg" type="success" />
<Icon type="success" />
<Icon size="sm" type="success" />
<Icon size="xs" type="success" />
<Icon style={{ fill: 'green' }} type="success" />
<Icon style={{ fill: 'red' }} type="error" />
<Icon style={{ fill: 'blue' }} type="waring" />
```
