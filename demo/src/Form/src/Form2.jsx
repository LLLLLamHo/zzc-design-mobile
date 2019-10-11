import React, { Component } from 'react';
import { Form, Input, Icon } from 'zzc-design-mobile';

class Form1 extends Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.form.setFormAssignValue('label22', '123123123')
        // },2000);
    }
    render () {
        return (
            <Form>
                <Form.Item
                    label='必填选项'
                    htmlFor='label1'
                >
                    {this.props.form.getFieldDecorator('label11', {
                        initialValue: 123,
                        rules: [
                            {
                                required: true,
                                message: '信息不能为空'
                            }
                        ]
                    }, <Input placeholder='请输入姓名' id='label1' />)}
                </Form.Item>
                <Form.Item
                    label='姓名'
                >
                    {this.props.form.getFieldDecorator('label22', {}, <Input placeholder='请输入姓名' id='label2' />)}
                </Form.Item>
            </Form> );
    }
}
export default Form.create( 'form1', Form1 );
