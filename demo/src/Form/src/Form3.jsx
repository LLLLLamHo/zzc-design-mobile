import React, { Component } from 'react';
import { Form, Input, Button, Icon, Radio } from 'zzc-design-mobile';

class MyForm extends Component {

    constructor( props ) {
        super( props );
        this.state = {
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
                    {
                        text: '中国驾照+英文公证件',
                        type: 'normal',
                        value: 'code3'
                    },
                    {
                        text: '香港驾照',
                        type: 'normal',
                        value: 'code4'
                    },
                    {
                        text: '台湾驾照',
                        type: 'normal',
                        value: 'code5'
                    },
                    {
                        text: '其他驾照',
                        type: 'normal',
                        value: 'code6',
                        click: (item, key, next) => {
                            next('日本驾照');
                        }
                    },
                    {
                        text: '中国驾照+车行翻译件 (不支持)',
                        type: 'disabled',
                        value: 'code7'
                    }
                ]
            }
        };
    }

    onSubmit ( data ) {
        console.log( data );
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
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
                    }, <Input
                        datePickerData={{
                            minDate: '1960/1/1',
                            maxDate: new Date()
                        }}
                        timeFormat='YYYY-MM-DD'
                        inputType='time'
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
                    }, <Input inputType='select' placeholder='请选择驾照类型' />
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
                        ]
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
