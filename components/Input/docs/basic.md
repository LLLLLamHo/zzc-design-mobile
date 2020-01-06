<!--
 * @Author: your name
 * @Date: 2019-11-05 17:56:38
 * @LastEditTime : 2020-01-06 12:09:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zzc-design-mobile/components/Input/docs/basic.md
 -->
输入框布局

## API

适用平台：WEB

## Input

最基本的输入框组件

| 属性         | 说明                    | 类型     | 默认值   |
| ------------ | ----------------------- | -------- | -------- |
| prefixCls    | 组件的公用className前序 | string   | zzc-input |
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

## Input.Textarea

```jsx
<Input placeholder='请输入姓名' />
<Input onChange={( e ) => { this.onChange( 'name', e ); }} value={name} placeholder='请输入姓名' />
<Input disabled placeholder='请输入姓名' />
<Input maxLength={20} placeholder='请输入姓名' />
```

最基本的多行文本输入框组件

| 属性         | 说明                    | 类型     | 默认值   |
| ------------ | ----------------------- | -------- | -------- |
| prefixCls    | 组件的公用className前序 | string   | zzc-input-textarea |
| className    | 样式类名                | string   | 无       |
| style        | 自定义样式              | object   | {}       |
| id           | Textarea的id属性           | string   | null     |
| value        | Textarea的值（受控组件）   | any      | null     |
| defaultValue | Textarea的值（非受控）     | any      | null     |
| placeholder  | placeholder值    | string   | ''       |
| autoHeight   | 高度自适应, autoHeight | boolean  | false |
| disabled     | textarea是否禁止输入       | boolean  | false    |
| count        | 计数功能,剩余可以输入长度,兼具最大长度,  | number  |  null |
| maxLength    | textarea的最大值 (已输入count,不传) | number   | Infinity |   


```jsx
<Input.Textarea autoHeight placeholder='请输入姓名' defaultValue="姓名" />
<Input.Textarea onChange={( e ) => { this.onChange( 'name', e ); }} value={name} placeholder='请输入姓名' />
<Input.Textarea disabled placeholder='请输入姓名' />
<Input.Textarea maxLength={20} placeholder='请输入姓名' />
<Input.Textarea count={20} placeholder='请输入姓名' />
```

