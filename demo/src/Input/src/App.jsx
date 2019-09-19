import React, { Component } from 'react';
import { Input, List, Card2 } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

const { ListItem } = List;

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: '',
            age: ''
        };
    }

    onChange ( type, e ) {
        if ( type == 'name' ) {
            this.setState( {
                name: e.target.value
            } );
        } else {
            this.setState( {
                age: e.target.value
            } );
        }
    }

    render () {
        const { name, age } = this.state;

        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Input</h1>
                    <h2>基础的Input组件</h2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px' }} title='非受控Input' />
                        <List>
                            <ListItem
                                title={<div className='inputItem'><p>输入姓名： </p><Input placeholder='请输入姓名' /></div>}
                            />
                            <ListItem
                                title={<div className='inputItem'><p>输入年龄：  </p><Input placeholder='请输入年龄' /></div>}
                            />
                        </List>
                    </Card2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px' }} title='受控Input' />
                        <List>
                            <ListItem
                                title={<div className='inputItem'><p>输入姓名： </p><Input onChange={( e ) => { this.onChange( 'name', e ); }} value={name} placeholder='请输入姓名' /></div>}
                            />
                            <ListItem
                                title={<div className='inputItem'><p>输入年龄：  </p><Input onChange={( e ) => { this.onChange( 'age', e ); }} value={age} placeholder='请输入年龄' /></div>}
                            />
                        </List>
                    </Card2>
                </div>
                <div className='zzc-demo-body'>
                    <Card2 style={{ padding: 0 }}>
                        <Card2.Header style={{ paddingLeft: '15px', paddingRight: '15px' }} title='其他设置' />
                        <List>
                            <ListItem
                                title={<div className='inputItem'><p>禁止输入：</p><Input disabled placeholder='请输入姓名' /></div>}
                            />
                            <ListItem
                                title={<div className='inputItem'><p>限制最大长度：</p><Input maxLength={20} placeholder='请输入姓名' /></div>}
                            />
                        </List>
                    </Card2>
                </div>
            </div>
        );
    }
}