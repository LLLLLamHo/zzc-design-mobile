import React, { Component } from 'react';
import { Input, Form, List, Card2 } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

const { ListItem } = List;
const { Textarea } = Input

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            description: ''
        };  
    }

    onChange(type, e) {
        if (type == 'name') {
            this.setState({
                name: e.target.value
            });

        }
        else if (type == 'description') {            
            this.setState({
                description: e.target.value
            });
        } else {
            this.setState({
                age: e.target.value
            });
        }
    }

    render() {
        const { name, age, description } = this.state;

        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Input</h1>
                    <h2>基础的Input组件</h2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px' }} title='非受控Input' />
                        <Form>
                            <Form.Item
                                label='姓名'
                                htmlFor='label1'
                            >
                                <Input placeholder='请输入姓名' id='label1' />
                            </Form.Item>
                            <Form.Item
                                label='年龄'
                            >
                                <Input placeholder='请输入年龄' id='label2' />
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px' }} title='受控Input' />
                        <Form>
                            <Form.Item
                                label='姓名'
                                htmlFor='label3'
                            >
                                <Input placeholder='请输入姓名' id='label3' value={name} onChange={(e) => { this.onChange('name', e); }} />
                            </Form.Item>
                            <Form.Item
                                label='年龄'
                                htmlFor='label4'
                                style={{ border: 0 }}
                            >
                                <Input placeholder='请输入年龄' id='label4' value={age} onChange={(e) => { this.onChange('age', e); }} />
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0, paddingBottom: '15px' }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px', paddingBottom: '12px' }} title='非受控Textarea' />
                        <Form>
                            <Form.Item style={{ paddingTop: 0 }} >
                                <Textarea style={{ height: '84px' }} placeholder='固定高度' defaultValue = "这是一段默认文案" />
                            </Form.Item>
                        </Form>
                        <Form>
                            <Form.Item>
                                <Textarea autoHeight placeholder='高度自适应' />
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0, paddingBottom: '15px' }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px', paddingBottom: '12px' }} title='受控Textarea' />
                        <Form>
                            <Form.Item
                                label='自我介绍'
                                htmlFor='label5'
                                style={{ paddingTop: 0, alignItems: 'self-end' }}
                            >
                                <Textarea autoHeight placeholder='自适应高度' value={description} onChange={(e) => { this.onChange('description', e); }} />
                            </Form.Item>
                            <Form.Item
                                label='自我介绍'
                                htmlFor='label5'
                                style={{ alignItems: 'self-end' }}
                            >
                                <Textarea style={{ height: '84px' }} placeholder='固定高度' value={description} onChange={(e) => { this.onChange('description', e); }} />
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px' }} title='其他设置' />
                        <Form>
                            <Form.Item
                                label='姓名'
                                htmlFor='label5'
                            >
                                <Input placeholder='请输入姓名' id='label5' disabled />
                            </Form.Item>
                            <Form.Item
                                label='年龄'
                                htmlFor='label6'
                            >
                                <Input placeholder='请输入年龄' id='label6' maxLength={20} />
                            </Form.Item>
                            <Form.Item
                                label='自我介绍'
                                htmlFor='label6'
                                style={{ alignItems: 'self-end' }}
                            >
                                <Textarea style={{ height: '42px' }} disabled placeholder='禁用' />
                            </Form.Item>
                            <Form.Item
                                label='固定多行文本'
                                htmlFor='label6'
                                style={{ alignItems: 'self-end' }}
                            >
                                <Textarea style={{ height: '42px' }} value='这是一段固定的文案 这是一段固定的文案 这是一段固定的文案' />
                            </Form.Item>
                            <Form.Item
                                label='限制文本长度'
                                htmlFor='label6'
                                style={{ alignItems: 'self-end' }}
                            >
                                <Textarea style={{ height: '42px' }} count='10' placeholder='请输入' />
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>

            </div>
        );
    }
}