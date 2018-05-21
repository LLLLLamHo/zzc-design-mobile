import React, {Component} from 'react';
import {Tabs} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
        };
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Tabs 标签页</h1>
                    <h2>提供多个标签页面切换功能</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Tabs />
                </div>
            </div>
        );
    }
}