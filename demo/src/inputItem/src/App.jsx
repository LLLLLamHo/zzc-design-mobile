import React, { PureComponent } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { InputItem } from 'zzc-design-mobile';

export default class App extends PureComponent {
    state = {
        title: 'input 输入框',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: ''
    }

    handleChange1 = this.handleChange1.bind( this );
    handleChange2 = this.handleChange2.bind( this );
    handleChange3 = this.handleChange3.bind( this );
    handleChange4 = this.handleChange4.bind( this );
    handleChange5 = this.handleChange5.bind( this );
    handleChange6 = this.handleChange6.bind( this );

    handleChange1( event ) { console.log(1); console.log(event); this.setState( { value1: event.target.value } ); }
    handleChange2( event ) { this.setState( { value2: event.target.value } ); }
    handleChange3( event ) { this.setState( { value3: event.target.value } ); }
    handleChange4( event ) { this.setState( { value4: event.target.value } ); }
    handleChange5( event ) { this.setState( { value5: event.target.value } ); }
    handleChange6( event ) { this.setState( { value6: event.target.value } ); }

    createExtraEle() {
        return (
            <p className='extra-tips'>发送</p>
        );
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>{this.state.title}</h1>
                    <h2>输入框展示</h2>
                </div>
                <div className='zzc-demo-body'>
                    <h5>默认</h5>
                    <InputItem value={this.state.value1}
                        onChange={this.handleChange1}
                        extra={this.createExtraEle()}
                    />
                    <InputItem value={this.state.value2}
                        onChange={this.handleChange2}
                        extra={this.createExtraEle()}
                        disabled
                    />
                    <InputItem value={this.state.value3}
                        onChange={this.handleChange3}
                        noBorder
                    />
                </div>

                <div className='zzc-demo-body'>
                    <h5>无边框</h5>
                    <InputItem value={this.state.value4}
                        onChange={this.handleChange1}
                    />
                    <InputItem value={this.state.value5}
                        onChange={this.handleChange5}
                        disabled
                    />
                    <InputItem value={this.state.value6}
                        onChange={this.handleChange6}
                        noBorder
                    />
                </div>
            </div>

        );
    }
}
