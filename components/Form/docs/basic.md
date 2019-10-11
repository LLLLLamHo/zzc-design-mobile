输入框布局

## API

适用平台：WEB

## Input

最基本的输入框组件

| 属性         | 说明                    | 类型     | 默认值   |
| ------------ | ----------------------- | -------- | -------- |
| prefixCls    | 组件的公用className前序 | string   | zzc-card |
| className    | 样式类名                | string   | 无       |
| style        | 自定义样式              | object   | {}       |
| id           | input的id属性           | string   | null     |
| name         | input的name属性         | string   | null     |
| value        | input的值（受控组件）   | any      | null     |
| defaultValue | input的值（非受控）     | any      | null     |
| placeholder  | input的placeholder值    | string   | ''       |
| htmlType     | input的type值           | string   | 'text'   |
| disabled     | input是否禁止输入       | boolean  | false    |
| maxLength    | input的最大值           | number   | null     |
| onChange     | onChange事件            | Function | null     |
| onBlur       | onBlur事件              | Function | null     |
| onFocus      | onFocus事件             | Function | null     |


```JavaScript
<Input placeholder='请输入姓名' />
<Input onChange={( e ) => { this.onChange( 'name', e ); }} value={name} placeholder='请输入姓名' />
<Input disabled placeholder='请输入姓名' />
<Input maxLength={20} placeholder='请输入姓名' />
```

