import React, { Component } from 'react';
import { Input, Form, List, Card2, Icon } from 'zzc-design-mobile';
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
            description: '',
            born: '1993/9/17',
            getCat: new Date(),
            selectIndex: 'code1',
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
                        value: 'code6'
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

    onChange ( type, value ) {
        if ( type == 'name' ) {
            this.setState( {
                name: value
            } );
        } 
        else if (type == 'description') {
            this.setState({
                description: value
            });
        }
        else {
            this.setState( {
                age: value
            } );
        }
    }

    onChangeSelect ( item ) {
        const { selectData } = this.state;
        const { data } = selectData;
        for ( let i = 0; i < data.length; i++ ) {
            if ( i == item.key ) {
                data[i].type = 'active';
            } else if ( data[i].type != 'disabled' ) {
                data[i].type = 'normal';
            }
        }

        this.setState( {
            selectData,
            selectIndex: item.value
        } );
    }

    render () {
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
                            <Form.Item
                                label='手机号'
                            >
                                <Input inputType='phone' showPhonePrefix placeholder='请输入手机号' id='phone' onChange={( value ) => { console.log( value ) }} />
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
                                <Input placeholder='请输入姓名' id='label3' value={name} onChange={( value ) => { this.onChange( 'name', value ); }} />
                            </Form.Item>
                            <Form.Item
                                label='年龄'
                                htmlFor='label4'
                                style={{ border: 0 }}
                            >
                                <Input placeholder='请输入年龄' id='label4' value={age} onChange={( value ) => { this.onChange( 'age', value ); }} />
                            </Form.Item>
                            <Form.Item
                                label='驾照类型'
                                extra={<Icon type='arrows' />}
                            >
                                <Input.Select value={this.state.selectIndex} selectData={this.state.selectData} placeholder='请选择驾照类型' id='car' onChange={( item ) => { this.onChangeSelect( item ) }} />
                            </Form.Item>
                            <Form.Item
                                label='生日日期'
                                extra={<Icon type='arrows' />}
                            >
                                <Input.DatePicker
                                    datePickerData={{
                                        minDate: '1960/1/1',
                                        maxDate: new Date()
                                    }}
                                    timeFormat='YYYY-MM-DD'
                                    value={this.state.born}
                                    placeholder='请选择生日日期'
                                    id='born'
                                    onChange={( item ) => { console.log(item); this.setState( { born: item.currDate } ) }}
                                />
                            </Form.Item>
                            <Form.Item
                                label='租车日期'
                                extra={<Icon type='arrows' />}
                                htmlFor='getCat'
                            >
                                <Input.DatePicker
                                    datePickerData={{
                                        mode: 'datetime'
                                    }}
                                    timeFormat='YYYY-MM-DD HH:mm'
                                    value={this.state.getCat}
                                    placeholder='租车日期'
                                    id='getCat'
                                    onChange={( item ) => { this.setState( { getCat: item.currDate } ) }}
                                />
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>

                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0, paddingBottom: '15px' }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px', paddingBottom: '12px' }} title='非受控Textarea' />
                        <Form>
                            <Form.Item style={{ paddingTop: 0 }} >
                                <Textarea style={{ height: '84px' }} placeholder='固定高度' defaultValue="这是一段默认文案" />
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
                                <Textarea autoHeight placeholder='自适应高度' value={description} onChange={(value) => { this.onChange('description', value); }} />
                            </Form.Item>
                            <Form.Item
                                label='自我介绍'
                                htmlFor='label5'
                                style={{ alignItems: 'self-end' }}
                            >
                                <Textarea style={{ height: '84px' }} placeholder='固定高度' value={description} onChange={(value) => { this.onChange('description', value); }} />
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