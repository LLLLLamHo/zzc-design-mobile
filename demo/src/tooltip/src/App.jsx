import React, { PureComponent } from 'react';
import { Button, Tooltip } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends PureComponent {
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>List 列表</h1>
                    <h2>列表布局，主要分为List组件和List.Item组件配合使用</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <h5>基本使用</h5>
                    {/* <Tooltip>
                        <span>默认</span>
                    </Tooltip> */}
                </div>
            </div>
        );
    }
}