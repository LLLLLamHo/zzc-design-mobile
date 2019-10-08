import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Prompt, Toast } from 'zzc-design-mobile';

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    render () {

        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Prompt 全局提示</h1>
                </div>
                <div className="zzc-demo-body">
                    <h5>基本使用</h5>
                    <Prompt>
                        <p>中立提示文案</p>
                    </Prompt>
                    <Prompt
                        mode='info'
                    >
                        <p>带有info图标的中立提示文案</p>
                    </Prompt>
                    <Prompt
                        mode='click'
                        onClick={() => {
                            Toast.info('点击', 1);
                        }}
                    >
                        <p>带有点击的中立提示文案</p>
                    </Prompt>
                    <Prompt
                        mode='info*click'
                        onClick={() => {
                            Toast.info('点击', 1);
                        }}
                    >
                        <p>带info和点击的中立提示文案</p>
                    </Prompt>
                    <Prompt
                        lineClamp={3}
                        mode='info'
                        contextText='设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数设置最多展示3行行数'
                    />
                </div>
                <div className="zzc-demo-body">
                    <h5>其余样式</h5>
                    <Prompt type='warn'>
                        <p>中立提示文案</p>
                    </Prompt>
                    <Prompt type='success'>
                        <p>中立提示文案</p>
                    </Prompt>
                </div>
            </div>

        );
    }
}