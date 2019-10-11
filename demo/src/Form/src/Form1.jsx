import React, { Component } from 'react';
import { Form, Input, Icon } from 'zzc-design-mobile';

class Form1 extends Component {
    render () {
        return (
            <Form>
                <Form.Item
                    label='标签1'
                    htmlFor='label1'
                >
                    <Input placeholder='请输入姓名' id='label1' />
                </Form.Item>
                <Form.Item
                    label='姓名'
                >
                    <Input placeholder='请输入姓名' id='label2' />
                </Form.Item>
            </Form> );
    }
}
export default Form1;
