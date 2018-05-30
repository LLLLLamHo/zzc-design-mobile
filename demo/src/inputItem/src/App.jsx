import React, { PureComponent } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { InputItem, Icon } from 'zzc-design-mobile';

export default class App extends PureComponent {
    state = {
        title: 'input 输入框'
    }
    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>{this.state.title}</h1>
                    <h2>输入框展示</h2>
                </div>
                <div className='zzc-demo-body'>
                    <h5>颜色、类型</h5>
                    <InputItem />
                </div>
            </div>

        );
    }
}
