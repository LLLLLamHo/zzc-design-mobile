import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Switch } from 'zzc-design-mobile';

export default class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            status1: true,
            status2: false,
            status3: true,
            status4: false,
        }
    }
    changeState1(value){
        this.setState({
            status1:value,
        })
    }
    changeState2(value){
        this.setState({
            status2:value,
        })
    }

    render () {
        const{status1,status2,status3,status4}=this.state;
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">switch 开关</h1>
                </div>
                <div className="zzc-demo-body">
                    <h5>普通选择</h5>
                    <div className='list'>
                        开启中
                        <Switch checked={status1} onChange={(value) => { this.changeState1(value); }} />
                    </div>
                    <div className='list'>
                        已关闭
                        <Switch checked={status2} onChange={(value) => { this.changeState2(value); }} />
                    </div>

                    <h5>禁用状态</h5>
                    <div className='list'>
                        不可点击
                        <Switch checked disabled  />
                    </div>
                    <div className='list'>
                        不可点击
                        <Switch checked={status4} disabled/>
                    </div>
                </div>
                {/* <div style={{height: 100 + 'px'}}></div> */}
            </div>

        );
    }
}