Form表单

## API

适用平台：WEB

## Form

| 属性      | 说明                    | 类型                | 默认值   |
| --------- | ----------------------- | ------------------- | -------- |
| prefixCls | 组件的公用className前序 | string              | zzc-card |
| className | 样式类名                | string              | 无       |
| onSubmit  | onSubmit事件            | Function(err, data) | null     |

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
| onClick   | 点击事件                   | Function              | null     |

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
import { Form, Input, Button, Icon, Radio } from 'zzc-design-mobile';

class MyForm extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [
                    ...
                ]
            }]
        };
    }

    onSubmit ( err, data ) {
        console.log( err );
        console.log( data );
    }

    onChangeCascader = ( val ) => {
        this.props.form.setFormAssignValue( 'cascader', val, true );
    }

    onChangeSwitch ( value ) {
        this.props.form.setFormAssignValue( 'switch', value ? 1 : 0 );
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item
                    label='switch组件使用'
                    htmlFor='text'
                    clearBtn
                    extra={<Switch onChange={( value ) => { this.onChangeSwitch( value ); }} />}
                >
                    {this.props.form.getFieldDecorator( 'switch', {}, <Input placeholder='请输入普通文本' htmlType='hidden' readOnly /> )}
                    <p className='wechat_text'>关注微信有好礼</p>
                </Form.Item>
                <Form.Item
                    label='联动选中'
                    htmlFor='text'
                    clearBtn
                    extra={<Icon type='arrows' />}
                    onClick={() => this.setState( { visible: true } )}
                >
                    {this.props.form.getFieldDecorator( 'cascader', {
                        valueTranslate: ( value ) => {
                            return value ? '经过转换的值' : value;
                        },
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入普通文本' readOnly /> )}
                </Form.Item>
                <Cascader
                    visible={this.state.visible}
                    options={this.state.options}
                    onClose={() => this.setState( { visible: false } )}
                    onChange={this.onChangeCascader}
                />
                <Form.Item
                    label='生日日期'
                    extra={<Icon type='arrows' />}
                >
                    {this.props.form.getFieldDecorator( 'born', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        validateTrigger: 'onChange',
                        rules: [
                            {
                                required: true,
                                message: '必须选择生日日期'
                            },
                            {
                                message: '必须年满18岁',
                                validationFn: ( data ) => {
                                    const born = new Date( data ).getTime();
                                    const now = Date.now();
                                    return ( now - born ) >= 567648000000;
                                }
                            }
                        ]
                    }, <Input.DatePicker
                        datePickerData={{
                            minDate: '1960/1/1',
                            maxDate: new Date()
                        }}
                        timeFormat='YYYY-MM-DD'
                        placeholder='请选择日期'
                    />
                    )}
                </Form.Item>
                <Form.Item
                    label='驾照类型'
                    extra={<Icon type='arrows' />}
                >
                    {this.props.form.getFieldDecorator( 'car_license', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        validateTrigger: 'onChange',
                        initialValue: {
                            selectData: this.state.selectData,
                            value: null
                        },
                        rules: [
                            {
                                message: '驾照必须选择',
                                validationFn: ( data ) => {
                                    if ( data.value == null || data.value === '' ) return false;
                                    return true;
                                }
                            }
                        ]
                    }, <Input.Select placeholder='请选择驾照类型' />
                    )}
                </Form.Item>
                <Form.Item
                    label='手机号码'
                >
                    {this.props.form.getFieldDecorator( 'phoneNum', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        initialValue: {
                            phonePrefix: '+86',
                            value: ''
                        },
                        rules: [
                            {
                                message: '手机前缀不能为空',
                                validationFn: ( data ) => {
                                    if ( !data.phonePrefix || data.phonePrefix == '' ) return false;
                                    return true;
                                }
                            },
                            {
                                message: '手机号不能为空',
                                validationFn: ( data ) => {
                                    if ( !data.value || data.value == '' ) return false;
                                    return true;
                                }
                            }
                        ]
                    }, <Input showPhonePrefix inputType='phone' placeholder='请输入手机号' /> )}
                </Form.Item>
                <Form.Item
                    label='单选'
                    htmlFor='sex'
                >
                    {this.props.form.getFieldDecorator( 'sex_text', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        grounp: 'sex',
                        rules: [
                            {
                                required: true,
                                message: '性别文案不能为空'
                            }
                        ]
                    }, <Input placeholder='性别文案' /> )}
                    {this.props.form.getFieldDecorator( 'sex', {
                        initialValue: 'man',
                        grounp: 'sex',
                        rules: [
                            {
                                required: true,
                                message: '必选选择一个性别'
                            }
                        ]
                    }, <Radio.RadioGrounp
                        radioType='sex'
                    >
                        <Radio id='man'>先生</Radio>
                        <Radio id='women'>女士</Radio>
                    </Radio.RadioGrounp> )}
                </Form.Item>
                <Form.Item
                    label='普通文本'
                    htmlFor='text'
                    clearBtn
                >
                    {this.props.form.getFieldDecorator( 'text_1', {
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入普通文本' /> )}
                </Form.Item>
                <Form.Item
                    label='姓名'
                    htmlFor='name_1'
                    extra={<Icon type='change_user' />}
                >
                    {this.props.form.getFieldDecorator( 'name_1', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        grounp: 'name',
                        rules: [
                            {
                                required: true,
                                message: '姓拼音不能为空'
                            }
                        ],
                        formOnChange: ( value ) => {
                            console.log( 'formOnChange', value );
                        }
                    }, <Input placeholder='姓拼音' /> )}
                    {this.props.form.getFieldDecorator( 'name_2', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        grounp: 'name',
                        rules: [
                            {
                                required: true,
                                message: '名拼音不能为空'
                            }
                        ]
                    }, <Input placeholder='名拼音' /> )}
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
                    }, <Input.Textarea autoHeight placeholder='请输入普通多行文本' /> )}
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

| 属性               | 说明                                                                                                                                                | 类型                                                                                                               | 返回值                |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------- |
| getFormComponent   | 获取form元素对象                                                                                                                                    | getFormComponent()                                                                                                 | HTMLFormElement       |
| getFieldDecorator  | 将Input托管给Form                                                                                                                                   | getFieldDecorator(id: string, opt: getFieldDecoratorOption, item: JSX.Element)                                     | JSX.Element           |
| setFormAssignValue | 通知Form组件，更新指定input的值, 第三个参数用于强制进行校验，遇到readyOnly类型的input时，不能触发onchange事件，所以可以通过配置第三位参数来强制校验 | setFormAssignValue(id: string, value: any, isValidation: boolean)                                                  | void                  |
| getFormAllData     | 获取Form下所有托管的Input数据                                                                                                                       | getFormAllData()                                                                                                   | Object                |
| onValuesChange     | 任一表单域的值发生改变时的回调                                                                                                                      | onValuesChange( function )                                                                                         | id, value             |
| setFieldStatus     | 设置表单项状态                                                                                                                                      | setFieldStatus(id: string, { status: 'normal' \| 'error' \| 'success', message: string, errorRuleIndex?: number }) | void                  |
| formOnSubmit       | 触发表单验证                                                                                                                                        | formOnSubmit()                                                                                                     | {errList, outputData} |

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

| 属性            | 说明                                                                     | 类型                                 | 默认值   |
| --------------- | ------------------------------------------------------------------------ | ------------------------------------ | -------- |
| initialValue    | Input初始化值                                                            | any                                  | ''       |
| grounp          | 分组（验证分组，同组Item每次验证都会验证所有同组的item）                 | string                               | null     |
| isShowSuccess   | 是否显示验证成功提示                                                     | boolean                              | false    |
| successText     | 验证通过文案提示                                                         | String                               | null     |
| rules           | 验证规则                                                                 | Array<rules>                         | null     |
| validateTrigger | 验证时机                                                                 | 'onChange'  \| 'onFocus' \| 'onBlur' | 'onBlur' |
| formOnChange    | 当前input触发onChange的时候会单独触发，可以使用`onValuesChange`          | function(value) {}                   | null     |
| formOnBlur      | 当前input触发onBlur的时候会单独触发，可以使用`onValuesChange`            | function() {}                        | null     |
| formOnFocus     | 当前input触发onFocus的时候会单独触发，可以使用`onValuesChange`           | function() {}                        | null     |
| valueTranslate  | 用于转换form中实际存储的值与界面存储的值                                 | function(value: any): string {}      | null     |
| submitFormat    | 格式化组件输出的value值，必须返回一个值给Form组件，用于submit时填充value | function(value: any): any {}         | null     |
| trim            | 格式化前后空格（只对String类型的value生效）                              | boolean                              | false    |
| trimStart       | 格式化前空格（只对String类型的value生效）                                | boolean                              | false    |
| trimEnd         | 格式化后空格（只对String类型的value生效）                                | boolean                              | false    |

举个例子：如果你的组件里用到了前缀的电话号码组件，那么本来Input组件中就支持传入`value`和`phonePrefix`这两个值来控制默认的前缀和手机号码。那么也可以直接通过`initialValue`来控制。

```jsx
{this.props.form.getFieldDecorator( 'phoneNum', {
    isShowSuccess: true,
    successText: '验证成功',
    initialValue: {
        phonePrefix: '+852',
        value: '123'
    },
    rules: [
        {
            required: true,
            message: '手机号不能为空'
        }
    ]
}, <Input showPhonePrefix inputType='phone' placeholder='请输入手机号' /> )}
```

### rules

注意除了message之外，其余的条件在每一个规则中只能选择一个

| 属性           | 说明                                 | 类型     | 默认值  |
| -------------- | ------------------------------------ | -------- | ------- |
| validationType | 验证提示的样式('error' \| 'warning') | string   | 'error' |
| required       | 是否必填                             | boolean  | 无      |
| message        | 规则不通过输出警告信息               | string   | 无      |
| len            | 规定长度                             | number   | 无      |
| max            | 最大长度                             | number   | 无      |
| min            | 最小长度                             | number   | 无      |
| pattern        | 正则                                 | RegExp   | 无      |
| validationFn   | 自定义验证函数                       | function | 无      |

当前的Input组件如何是复合型的Input组件，如带号码前缀的组件，那么普通的验证方式将无法正确认证，因为无法知道当前Input需要多少的value来实现，所以提供`validationFn`参数，当传入的是一个函数，那么将当前要校验的值返回，但是必须返回一个`boolean`告诉Form，当前的验证结果。

```jsx
{this.props.form.getFieldDecorator( 'phoneNum', {
    isShowSuccess: true,
    successText: '验证成功',
    initialValue: {
        phonePrefix: '+86',
        value: '123123'
    },
    rules: [
        {
            message: '手机前缀不能为空',
            validationFn: ( data ) => {
                if ( !data.phonePrefix || data.phonePrefix == '' ) return false;
                return true;
            }
        },
        {
            message: '手机号不能为空',
            validationFn: ( data ) => {
                if ( !data.value || data.value == '' ) return false;
                return true;
            }
        }
     ]
}, <Input showPhonePrefix inputType='phone' placeholder='请输入手机号' /> )}
```

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