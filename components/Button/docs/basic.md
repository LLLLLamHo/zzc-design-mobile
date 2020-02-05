按钮组件

点击后会触发一个操作。

## API

适用平台：WEB

### Button

| 属性            | 说明                                                  | 类型     | 默认值     |
| --------------- | ----------------------------------------------------- | -------- | ---------- |
| prefixCls       | 组件的公用className前序                               | string   | zds-button |
| type            | 按钮类型，可选值为`default`、`sub`、`special`或者不设 | string   | `default`  |
| size            | 按钮大小，可选值为`default`、`middle`、`small`        | string   | 'default'  |
| htmlType        | 按钮类别，例如：submit                                | string   | 无         |
| activeStyle     | 点击反馈的自定义样式                                  | {}       | {}         |
| activeClassName | 点击反馈的自定义类名                                  | string   |            |
| disabled        | 设置禁用                                              | boolean  | false      |
| inactive        | 未激活                                                | boolean  | false      |
| onClick         | 点击按钮的点击回调函数                                | function | 无         |
| style           | 自定义样式                                            | Object   | 无         |
| inline          | 是否设置为行内按钮                                    | boolean  | false      |
| className       | 样式类名                                              | string   | 无         |

```jsx
<Button>默认按钮</Button>
<Button><Icon style={{ marginRight: '5px', width: '18px', height: '18px' }} type='success' />默认按钮</Button>
<Button inactive>未激活按钮</Button>
<Button disabled>禁用按钮</Button>
<Button inline>确认</Button>
<Button inline type='sub'>确认</Button>
<Button inline type='special'>确认</Button>
```

### ButtonGroup
| 属性      | 说明                    | 类型   | 默认值     |
| --------- | ----------------------- | ------ | ---------- |
| prefixCls | 组件的公用className前序 | string | zds-button |
| style     | 自定义样式              | Object | 无         |
| className | 样式类名                | string | 无         |
| direction | 排序方向                | string | 'center'   |

```jsx
<ButtonGroup>
    <Button>确认</Button>
    <Button type='sub'>确认</Button>
</ButtonGroup>
```