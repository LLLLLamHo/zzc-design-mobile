Form表单

## API

适用平台：WEB

## Form

| 属性      | 说明                    | 类型     | 默认值   |
| --------- | ----------------------- | -------- | -------- |
| prefixCls | 组件的公用className前序 | string   | zzc-card |
| className | 样式类名                | string   | 无       |
| onSubmit  | onSubmit事件            | Function | null     |

## Form.Item

| 属性      | 说明                       | 类型                  | 默认值   |
| --------- | -------------------------- | --------------------- | -------- |
| prefixCls | 组件的公用className前序    | string                | zzc-card |
| className | 样式类名                   | string                | 无       |
| style     | 样式对象                   | Object                | {}       |
| htmlFor   | 用于label标签的htmlFor属性 | string                | null     |
| label     | 用label标签的展示          | string                | null     |
| colon     | label标签文案后是否添加":" | boolean               | false    |
| extra     | input后是否添加额外元素    | JSX.Element \| string | null     |

### 普通的使用方式

该使用方式仅仅只是提供了基本的样式，并不会帮你进行任何的验证，提示等功能。

```jsx
<Form>
    <Form.Item
        label='标签1'
        htmlFor='label1'
    >
        <Input placeholder='请输入姓名' id='label1' />
    </Form.Item>
    <Form.Item
        label='姓名'
        extra={<Icon type='info' />}
    >
        <Input placeholder='请输入姓名' id='label2' />
    </Form.Item>
    <Form.Item
        label='多行输入'
        extra={<Icon type='info' />}
    >
        <Input.Textarea placeholder='请输入自我介绍' id='label3' />
    </Form.Item>
</Form>
```

### 将整个input数据托管给Form进行处理

更加推介使用拖过给Form的方式来使用。通过将input中的输入变化拖过给form，form会根据你的配置来进行验证和错误提示，并且能整个form表单下的input值一次全部获取。

以下是DEMO中的使用方式。

```jsx
import React, { Component } from 'react';
import { Form, Input, Button } from 'zzc-design-mobile';

class MyForm extends Component {
    onSubmit(data) {
        console.log(data);
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item
                    label='必填选项'
                    htmlFor='label1'
                >
                    {this.props.form.getFieldDecorator( 'label11', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入' /> )}
                </Form.Item>
                <Form.Item
                    label='最小值为2个字符串'
                >
                    {this.props.form.getFieldDecorator( 'label22', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            },
                            {
                                min: 2,
                                message: '最小值为2个字符串'
                            }
                        ]
                    }, <Input placeholder='请输入' /> )}
                </Form.Item>
                <Form.Item
                    label='最大值为5个字符串'
                >
                    {this.props.form.getFieldDecorator( 'label23', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            },
                            {
                                max: 5,
                                message: '最大值为5个字符串'
                            }
                        ]
                    }, <Input placeholder='请输入' /> )}
                </Form.Item>
                <Form.Item
                    label='输入一定为5个字符串'
                >
                    {this.props.form.getFieldDecorator( 'label24', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            },
                            {
                                len: 5,
                                message: '输入一定为5个字符串'
                            }
                        ]
                    }, <Input placeholder='请输入' /> )}
                </Form.Item>
                <Form.Item
                    label='正则表达式'
                >
                    {this.props.form.getFieldDecorator( 'label25', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            },
                            {
                                message: '邮箱格式不正确',
                                pattern: /(.)+@(.)+\.(.)+/
                            }
                        ]
                    }, <Input placeholder='请输入' /> )}
                </Form.Item>
                <Form.Item
                    label='普通多行文本'
                    htmlFor='label1'
                    style={{ alignItems: 'self-end' }}
                >
                    {this.props.form.getFieldDecorator( 'label1', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            },
                            {
                                max: 10,
                                message: '长度不能超过10个字符'
                            }
                        ]
                    }, <Input.Textarea count='10' autoHeight placeholder='请输入普通多行文本' /> )}
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>
                        提交
                    </Button>
                </Form.Item>
            </Form> );
    }
}
export default Form.create( MyForm );

```

首先使用`Form.create`传入你的Form组件，然后会为你额外传入一个`form`对象。

form对象会额外提供一些api给你去扩展你的input组件

### props.form

| 属性               | 说明                            | 类型                                                                           | 返回值          |
| ------------------ | ------------------------------- | ------------------------------------------------------------------------------ | --------------- |
| getFormComponent   | 获取form元素对象                | getFormComponent()                                                             | HTMLFormElement |
| getFieldDecorator  | 将Input托管给Form               | getFieldDecorator(id: string, opt: getFieldDecoratorOption, item: JSX.Element) | JSX.Element     |
| setFormAssignValue | 通知Form组件，更新指定input的值 | setFormAssignValue(id: string, value: any)                                     | void            |
| getFormAllData     | 获取Form下所有托管的Input数据   | getFormAllData()                                                               | Object          |

## getFieldDecorator

用于扩展input组件，只要通过`getFieldDecorator`函数包裹的input组件，将会托管给Form组件进行验证，`需要确保id是唯一`。

```jsx
<Form.Item
    label='最小值为2个字符串'
>
    {this.props.form.getFieldDecorator( 'label22', {
        rules: [
            {
                required: true,
                message: '信息不能为空'
            },
            {
                min: 2,
                message: '最小值为2个字符串'
            }
        ]
    }, <Input placeholder='请输入' /> )}
</Form.Item>   
```

### getFieldDecoratorOption

| 属性            | 说明                 | 类型                                 | 默认值   |
| --------------- | -------------------- | ------------------------------------ | -------- |
| initialValue    | Input初始化值        | any                                  | ''       |
| isShowSuccess   | 是否显示验证成功提示 | boolean                              | false    |
| successText     | 验证通过文案提示     | String                               | null     |
| rules           | 验证规则             | Array<rules>                         | null     |
| validateTrigger | 验证时机             | 'onChange'  \| 'onFocus' \| 'onBlur' | 'onBlur' |

### rules

注意除了message之外，其余的条件在每一个规则中只能选择一个

| 属性           | 说明                                 | 类型    | 默认值  |
| -------------- | ------------------------------------ | ------- | ------- |
| validationType | 验证提示的样式('error' \| 'warning') | string  | 'error' |
| required       | 是否必填                             | boolean | 无      |
| message        | 规则不通过输出警告信息               | string  | 无      |
| len            | 规定长度                             | number  | 无      |
| max            | 最大长度                             | number  | 无      |
| min            | 最小长度                             | number  | 无      |
| pattern        | 正则                                 | RegExp  | 无      |

### 添加Button组件触发Form的submit事件

```jsx
<Form.Item>
    <Button htmlType='submit'>
        提交
    </Button>
</Form.Item>
```

通过调用Button组件，传入`htmlType='submit'`后，Button组件点击将会触发Form的submit事件，通过在调用Form组件时传入onSubmit事件，即可获取整个表单的托管数据，以及触发所有托管数据的规则验证。

`通过使用onSubmit事件，将会禁止默认的form原生的submit行为。`