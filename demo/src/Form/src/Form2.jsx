import React, { Component } from 'react';
import { Form, Input, Button } from 'zzc-design-mobile';

class MyForm extends Component {
    onSubmit ( data ) {
        console.log( data );
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item
                    label='验证通过显示提示'
                    htmlFor='label0'
                >
                    {this.props.form.getFieldDecorator( 'label0', {
                        isShowSuccess: true,
                        successText: '验证成功',
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入' /> )}
                </Form.Item>
                <Form.Item
                    label='验证失败显示警告'
                    htmlFor='label0-1'
                >
                    {this.props.form.getFieldDecorator( 'label0-1', {
                        rules: [
                            {
                                required: true,
                                validationType: 'warning',
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入' /> )}
                </Form.Item>
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
                <Form.Item>
                    <Button htmlType='submit'>
                        提交
                    </Button>
                </Form.Item>
            </Form> );
    }
}
export default Form.create( MyForm );
