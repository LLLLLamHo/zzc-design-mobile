import React, { Component } from 'react';
import { Form, Input, Button, Icon, Radio } from 'zzc-design-mobile';

class MyForm extends Component {
    onSubmit ( data ) {
        console.log( data );
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item
                    label='手机号码'
                    htmlFor='sex'
                >
                    {this.props.form.getFieldDecorator( 'phoneNum', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        initialValue: {
                            phonePrefix: '',
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
                        rules: [
                            {
                                required: true,
                                message: '性别文案不能为空'
                            }
                        ]
                    }, <Input placeholder='性别文案' /> )}
                    {this.props.form.getFieldDecorator( 'sex', {
                        initialValue: 'man',
                        rules: [
                            {
                                required: true,
                                message: '必选选择一个性别'
                            }
                        ]
                    }, <Radio.RadioGrounp
                        radioType='sex'
                        onChange={( data ) => { console.log( 'gounp', data ) }}
                    >
                        <Radio id='man'>先生</Radio>
                        <Radio id='women'>女士</Radio>
                    </Radio.RadioGrounp> )}
                </Form.Item>
                <Form.Item
                    label='普通文本'
                    htmlFor='text'
                >
                    {this.props.form.getFieldDecorator( 'text', {
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
                        rules: [
                            {
                                required: true,
                                message: '名拼音不能为空'
                            }
                        ]
                    }, <Input placeholder='名拼音' /> )}
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
