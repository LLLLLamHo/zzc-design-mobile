单选框

## API

适用平台：WEB

## Radio

最基本的输入框组件

| 属性           | 说明                                     | 类型     | 默认值    |
| -------------- | ---------------------------------------- | -------- | --------- |
| prefixCls      | 组件的公用className前序                  | string   | zds-radio |
| className      | 样式类名                                 | string   | ''        |
| style          | 自定义样式                               | object   | {}        |
| id             | radio原生id                              | string   | 必填      |
| name           | radio原生name                            | string   | 必填      |
| defaultChecked | 是否选中（非受控）不能和checked公用      | boolean  | false     |
| checked        | 是否选中（受控）不能和defaultChecked公用 | boolean  | false     |
| disabled       | 禁用                                     | boolean  | false     |
| radioType      | 内置单选类型，现有（sex）                | string   | null      |
| onChange       | 修改选中回调函数                         | function | null      |


## Radio.Grounp

最基本的输入框组件

| 属性         | 说明                                                  | 类型     | 默认值       |
| ------------ | ----------------------------------------------------- | -------- | ------------ |
| prefixCls    | 组件的公用className前序                               | string   | radio-grounp |
| className    | 样式类名                                              | string   | ''           |
| style        | 自定义样式                                            | object   | {}           |
| name         | radio原生name                                         | string   | 必填         |
| defaultValue | 选中组内对应id的radio，不能和value共用（非受控）      | string   | false        |
| value        | 选中组内对应id的radio，不能和defaultValue共用（受控） | string   | false        |
| disabled     | 禁用                                                  | boolean  | false        |
| radioType    | 内置单选类型，现有（sex）                             | string   | null         |
| onChange     | 修改选中回调函数                                      | function | null         |



>最佳实践应该时刻保持使用Radio.Grounp进行组合使用，Form组件只支持Radio.Grounp作为表单组件传入


```jsx

<Radio onChange={( data ) => { console.log( data ) }} defaultChecked name='test'>单选框1</Radio>
<Radio onChange={( data ) => { console.log( data ) }} name='test'>单选框2</Radio>

// data 返回数据格式
// {
//      checked: true
//      id: "women"
//      name: "sex"
// }

// 分组
<Radio.RadioGrounp
    name='sex'
    defaultValue='man'
    radioType='sex'
    onChange={(data) => {console.log('gounp', data)}}
>
    <Radio id='man'>先生</Radio>
    <Radio id='women'>女士</Radio>
</Radio.RadioGrounp>
```

