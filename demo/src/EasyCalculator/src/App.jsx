import React, { PureComponent } from 'react';
import { EasyCalculator } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    onChange = (val) => {
        this.setState({
            value: val
        })
    }
    render () {
        const { value } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>计数器</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <div className="demo-item">
                        <h5>基本使用</h5>
                        <div className='wrapper'>
                            <EasyCalculator defaultValue={0} />
                        </div>
                        <p className="desc"></p>
                    </div>
                    <div className="demo-item">
                        <h5>严格步数</h5>
                        <div className='wrapper'>
                            <EasyCalculator value={value} step={2} min={0} max={10} onChange={this.onChange} />
                        </div>
                        <p className="desc">value 步数设置由step决定</p>
                    </div>
                    <div className="demo-item">
                        <h5>精度</h5>
                        <div className='wrapper'>
                            <EasyCalculator defaultValue={1.2} step={0.2} min={0} max={10} />
                        </div>
                        <p className="desc">value 精度设置由step小位数决定</p>
                    </div>
                </div>
            </div>
        );
    }
}