import React, { Component } from 'react';
import { FullModal, Button } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visible: false
        };
    }

    openDefaultDialog() {
        this.setState( {
            visible: true
        } );
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>FullModal 全屏模态框</h1>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => { this.openDefaultDialog(); }}>打开全屏模态框</Button>
                    {this.state.visible && <FullModal
                        visible={this.state.visible}
                        title='这是一个标题'
                        closeCallback={() => { this.setState({ visible: false }); }}
                    >
                        <div className='modal-text'>这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案</div>
                    </FullModal>}
                </div>
            </div>
        );
    }
}