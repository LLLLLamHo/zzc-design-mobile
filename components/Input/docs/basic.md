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
| lang         | 语言 cn或hk             | string   | cn       |
| placeholder  | input的placeholder值    | string   | ''       |
| htmlType     | input的type值           | string   | 'text'   |
| disabled     | input是否禁止输入       | boolean  | false    |
| maxLength    | input的最大值           | number   | null     |
| onChange     | onChange事件            | Function | null     |
| onBlur       | onBlur事件              | Function | null     |
| onFocus      | onFocus事件             | Function | null     |
| lang         | 'cn'或者'hk'            | string   | cn       |


```jsx
<Input placeholder='请输入姓名' />
<Input onChange={( e ) => { this.onChange( 'name', e ); }} value={name} placeholder='请输入姓名' />
<Input disabled placeholder='请输入姓名' />
<Input maxLength={20} placeholder='请输入姓名' />
```

## 带有手机号码前缀的input

需要以下额外属性

| 属性               | 说明                                             | 类型                  | 默认值 |
| ------------------ | ------------------------------------------------ | --------------------- | ------ |
| inputType          | 'phone'                                          | string                | null   |
| showPhonePrefix    | 是否显示号码前缀选择器(inputType等于phone才生效) | boolean               | false  |
| phonePrefix        | 默认选中的号码前缀                               | string                | +86    |
| phonePrefixList_cn | 可选前缀列表（简体），受lang参数影响             | array<PrefixListItem> | null   |
| phonePrefixList_hk | 可选前缀列表（繁体），受lang参数影响             | array<PrefixListItem> | null   |

### PrefixListItem
| 属性   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| id     | 前缀号码 | string | null   |
| detail | 详细描述 | string | null   |

```js
[
    { id: '+86', detail: '中国大陆 +(86)' },
    { id: '+852', detail: '香港（中国） +(852)' },
    { id: '+886', detail: '台湾（中国） +(882)' },
    { id: '+853', detail: '澳门（中国） +(853)' },
    { id: '+1', detail: '美国 +(1)' },
    { id: 'other', detail: '其他' }
]
```

基本使用
```jsx
<Input inputType='phone' showPhonePrefix placeholder='请输入手机号' id='phone' onChange={(value) => {console.log(value)}}/>
```

当Input组件声明为`phone`模式，并开启了好吗前缀选择功能，那么onChange的时候的返回体将从原来返回value变成对象，返回当前选中的前缀号码以及input的value。

```jsx
{
    prefix: "+853"
    value: "123"
}
```