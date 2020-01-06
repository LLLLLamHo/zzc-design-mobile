<!--
 * @Author: your name
 * @Date: 2019-11-05 17:56:38
 * @LastEditTime : 2020-01-06 13:41:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /zzc-design-mobile/components/Input/docs/basic.md
 -->
输入框布局

## API

适用平台：WEB

## Input

最基本的输入框组件

| 属性         | 说明                    | 类型     | 默认值    |
| ------------ | ----------------------- | -------- | --------- |
| prefixCls    | 组件的公用className前序 | string   | zzc-input |
| className    | 样式类名                | string   | 无        |
| style        | 自定义样式              | object   | {}        |
| id           | input的id属性           | string   | null      |
| name         | input的name属性         | string   | null      |
| value        | input的值（受控组件）   | any      | null      |
| defaultValue | input的值（非受控）     | any      | null      |
| lang         | 语言 cn或hk             | string   | cn        |
| placeholder  | input的placeholder值    | string   | ''        |
| htmlType     | input的type值           | string   | 'text'    |
| disabled     | input是否禁止输入       | boolean  | false     |
| maxLength    | input的最大值           | number   | null      |
| onChange     | onChange事件            | Function | null      |
| onBlur       | onBlur事件              | Function | null      |
| onFocus      | onFocus事件             | Function | null      |
| lang         | 'cn'或者'hk'            | string   | cn        |


```jsx
<Input placeholder='请输入姓名' />
<Input onChange={( e ) => { this.onChange( 'name', e ); }} value={name} placeholder='请输入姓名' />
<Input disabled placeholder='请输入姓名' />
<Input maxLength={20} placeholder='请输入姓名' />
```

## 带有手机号码前缀的input

需要以下额外属
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

### 弹出选择框Input.Select

需要以下额外属性

| 属性            | 说明                   | 类型        | 默认值 |
| --------------- | ---------------------- | ----------- | ------ |
| selectData      | 提供给Select组件的参数 | SelectProps | null   |
| selectBodyStyle | Select组件的bodyStyle  | object      | null   |

参考Select的组件说明`selectData`调用。建议只修改title和data两个属性

> Select类型的Input组件一定是非受控的，所以不能使用`defaultValue`来进行赋值

#### demo
```jsx

selectData: {
    title: '驾照类型',
    data: [
        {
            text: '中国驾照',
            type: 'active',
            value: 'code1'
        },
        {
            text: '中国驾照+国际驾照翻译认证件',
            type: 'normal',
            value: 'code2'
        },
    ]
}

onChangeSelect ( item ) {
    const { selectData } = this.state;
    const { data } = selectData;
    for ( let i = 0; i < data.length; i++ ) {
        if ( i == item.key ) {
            data[i].type = 'active';
        } else if ( data[i].type != 'disabled' ) {
            data[i].type = 'normal';
        }
    }
    this.setState( {
        selectData,
        selectIndex: item.key
    } );
}

<Form.Item
    label='驾照类型'
    extra={<Icon type='arrows' />}
>
    <Input.Select 
        value={this.state.selectIndex} 
        selectData={this.state.selectData} 
        placeholder='请选择驾照类型' 
        onChange={( item ) => { this.onChangeSelect( item ) }}
    />
</Form.Item>

```

### 时间选择框Input.DatePicker

可选以下额外属性

| 属性           | 说明                                           | 类型   | 默认值 |
| -------------- | ---------------------------------------------- | ------ | ------ |
| datePickerData | 传递给DatePicker组件的参数，查看DatePicker文档 | object | null   |
| timeFormat     | 显示的格式化格式，查看moment.js文档            | string | null   |

参考DatePicker的组件说明设置`datePickerData`。只能修改以下参数：

```jsx
// datePickerData默认值和可以设置的参数
lang: 'cn',
reverse: false,
maskClose: true,
use12hour: false,
minuteStep: 15,
minDate: null,
maxDate: null,
mode: 'date',
buttonText: null,
title: null,
warningText: null
```

> time类型的Input组件一定是非受控的，所以不能使用`defaultValue`来进行赋值

```jsx
<Form.Item
    label='生日日期'
    extra={<Icon type='arrows' />}
>
    <Input.DatePicker
        datePickerData={{
            minDate: '1960/1/1',
            maxDate: new Date()
        }}
        timeFormat='YYYY-MM-DD'
        value={this.state.born}
        inputType='time'
        placeholder='请选择生日日期'
        id='born'
        onChange={( item ) => { console.log(item); this.setState( { born: item.currDate } ) }}
    />
</Form.Item>
<Form.Item
    label='租车日期'
    extra={<Icon type='arrows' />}
    htmlFor='getCat'
>
    <Input.DatePicker
        datePickerData={{
            mode: 'datetime'
        }}
        timeFormat='YYYY-MM-DD HH:mm'
        value={this.state.getCat}
        inputType='time'
        placeholder='租车日期'
        id='getCat'
        onChange={( item ) => { this.setState( { getCat: item.currDate } ) }}
    />
</Form.Item>
```

## Input.Textarea

最基本的多行文本输入框组件

| 属性         | 说明                                    | 类型    | 默认值             |
| ------------ | --------------------------------------- | ------- | ------------------ |
| prefixCls    | 组件的公用className前序                 | string  | zzc-input-textarea |
| className    | 样式类名                                | string  | 无                 |
| style        | 自定义样式                              | object  | {}                 |
| id           | Textarea的id属性                        | string  | null               |
| value        | Textarea的值（受控组件）                | any     | null               |
| defaultValue | Textarea的值（非受控）                  | any     | null               |
| placeholder  | placeholder值                           | string  | ''                 |
| autoHeight   | 高度自适应, autoHeight                  | boolean | false              |
| disabled     | textarea是否禁止输入                    | boolean | false              |
| count        | 计数功能,剩余可以输入长度,兼具最大长度, | number  | null               |
| maxLength    | textarea的最大值 (已输入count,不传)     | number  | Infinity           |


```jsx
<Input.Textarea autoHeight placeholder='请输入姓名' defaultValue="姓名" />
<Input.Textarea onChange={( e ) => { this.onChange( 'name', e ); }} value={name} placeholder='请输入姓名' />
<Input.Textarea disabled placeholder='请输入姓名' />
<Input.Textarea maxLength={20} placeholder='请输入姓名' />
<Input.Textarea count={20} placeholder='请输入姓名' />
```
