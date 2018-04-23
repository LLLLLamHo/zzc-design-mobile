import React, { Component } from 'react';
import { Popup, Button } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visible: false,
            visible2: false
        };
    }

    openDefaultDialog() {
        this.setState( {
            visible: true,
            visible2: true
        } );
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Dialog 对话框</h1>
                </div>
                <div className='zzc-demo-body'>
                    <Button onClick={() => { this.openDefaultDialog(); }}>默认dialog</Button>
                    {this.state.visible && <Popup
                        visible={this.state.visible2}
                        closeCallback={() => { this.setState({ visible: false }); }}
                    >
                        <div className='modal-text'>这是一个文案....</div>
                    </Popup>}
                </div>
            </div>
        );
    }
}