import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'zzc-design-mobile';

class MyForm extends Component {
    onSubmit ( data ) {
        console.log( data );
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Item
                    label='普通文本'
                    htmlFor='label0'
                >
                    {this.props.form.getFieldDecorator( 'label0', {
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
