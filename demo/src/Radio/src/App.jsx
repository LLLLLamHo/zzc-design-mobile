import React, { Component } from 'react';
import { Form, Radio, Card2 } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            radioValue1: 'test1',
            grounpValue: 'man2'
        };
    }

    onChange1 ( data ) {
        this.setState( {
            radioValue1: data.id
        } );
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Radio</h1>
                    <h2>基础单选组件</h2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Form>
                            <Form.Item
                                label='非受控'
                            >
                                <Radio onChange={( data ) => { console.log( data ) }} defaultChecked name='test'>单选框1</Radio>
                                <Radio onChange={( data ) => { console.log( data ) }} name='test'>单选框2</Radio>
                            </Form.Item>
                            <Form.Item
                                label='受控'
                            >
                                <Radio onChange={( data ) => { this.onChange1( data ) }} checked={this.state.radioValue1 == 'test1'} id='test1' name='test2'>单选框1</Radio>
                                <Radio onChange={( data ) => { this.onChange1( data ) }} checked={this.state.radioValue1 == 'test2'} id='test2' name='test2'>单选框2</Radio>
                            </Form.Item>
                            <Form.Item
                                label='单选框组(非受控)'
                                htmlFor='label1'
                            >
                                <Radio.RadioGrounp
                                    name='sex'
                                    defaultValue='man'
                                    radioType='sex'
                                    onChange={(data) => {console.log('gounp', data)}}
                                >
                                    <Radio id='man'>先生</Radio>
                                    <Radio id='women'>女士</Radio>
                                </Radio.RadioGrounp>
                            </Form.Item>
                            <Form.Item
                                label='单选框组(受控)'
                                htmlFor='label1'
                            >
                                <Radio.RadioGrounp
                                    name='sex2'
                                    value={this.state.grounpValue}
                                    radioType='sex'
                                    onChange={(data) => {this.setState({
                                        grounpValue: data.id
                                    })}}
                                >
                                    <Radio id='man2'>先生</Radio>
                                    <Radio id='women2'>女士</Radio>
                                </Radio.RadioGrounp>
                            </Form.Item>
                        </Form>
                    </Card2>
                </div>
            </div>
        );
    }
}
