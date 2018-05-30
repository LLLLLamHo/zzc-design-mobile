import React, { PureComponent } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { InputItem } from 'zzc-design-mobile';

export default class App extends PureComponent {
    state = {
        title: 'input 输入框',
        value1: '',
        value2: '',
        value3: ''
    }

    handleChange1 = this.handleChange1.bind( this );
    handleChange2 = this.handleChange2.bind( this );
    handleChange2 = this.handleChange2.bind( this );

    handleChange1( event ) {
        this.setState( {
            value1: event.target.value
        } );
    }

    handleChange2( event ) {
        this.setState( {
            value2: event.target.value
        } );
    }

    handleChange3( event ) {
        this.setState( {
            value3: event.target.value
        } );
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
                        handleChange={this.handleChange1}
                    />

                    <h5>默认 disabled</h5>
                    <InputItem value={this.state.value2}
                        handleChange={this.handleChange2}
                    />
                    <h5>默认 error</h5>
                    <InputItem value={this.state.value3}
                        handleChange={this.handleChange3}
                    />
                </div>
            </div>

        );
    }
}
