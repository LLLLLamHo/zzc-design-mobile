import React, { Component } from 'react';
import './index.scss';
import '../../../style/style.scss';
import { Steps, Button } from 'zzc-design-mobile';

export default class App extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            current: 1
        }
    }

    render () {
        const description = (
            <div>
                当地时间：<br/>
                2019年5月13日 09:00
            </div>
        );
        return (
            <div className="zzc-demo">
                <div className="zzc-demo-header">
                    <h1 className="zzc-demo-title">Steps 步骤条</h1>
                </div>
                <div className="zzc-demo-body">
                    <h5>居中的步骤条</h5>
                    <Steps current={this.state.current} alignCenter={true}>
                        <Steps.Step title="行程前"/>
                        <Steps.Step title="行程中"/>
                        <Steps.Step title="行程结束"/>
                    </Steps>
                </div>
                <div className="zzc-demo-body">
                    <h5>竖式步骤条</h5>
                    <Steps direction="vertical" current={2}>
                        <Steps.Step title="行程前"/>
                        <Steps.Step title="行程中"/>
                        <Steps.Step title="行程结束"/>
                    </Steps>
                </div>
                <div className="zzc-demo-body">
                    <h5>带标签步骤条</h5>
                    <Steps current={1}>
                        <Steps.Step tag="免费取消" title="订单确定"/>
                        <Steps.Step tag="扣除一天租金" className="demo-step" title="取车前48小时" description={description}/>
                        <Steps.Step tag="扣除全部租金" className="demo-step" title="取车" description={description}/>
                        <Steps.Step className="demo-step" title="行程结束"/>
                    </Steps>
                </div>
                <div style={{height: 100 + 'px'}}></div>
            </div>

        );
    }
}