import React, { Component } from 'react';
import { DatePicker, Card } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isShow1: false,
            time1: '2016-09-21',
            isShow2: false,
            time2: '2016-09-21 12:20',
            isShow3: false,
            time3: '12:30',
            isShow4: false,
            time4: '2018',
            isShow5: false,
            time5: '8',
            isShow6: false,
            time6: '2016-09-21 12:20'
        };
    }

    renderAfter ( scrollObj ) {
        console.log( scrollObj );
    }

    onValueChange(date) {
        console.log(date);
    }

    show( index ) {
        this.state[`isShow${index}`] = true;
        this.setState( this.state );
    }

    close( index ) {
        this.state[`isShow${index}`] = false;
        this.setState( this.state );
    }

    submit(data, index) {
        this.state[`isShow${index}`] = false;
        this.state[`time${index}`] = data.currDate;
        this.setState( this.state );
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>DatePicker 日期选择框</h1>
                    <h2>提供各种时间维度的滑动选择框</h2>
                </div>

                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 1 ); }}>
                                <p>日期选择框,当前日期：{this.state.time1}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow1}
                        minuteStep={15}
                        use12hour
                        mode='date'
                        selectTime={new Date(this.state.time1)}
                        onValueChange={(date) => { this.onValueChange(date); }}
                        onClose={() => { this.close( 1 ); }}
                        onSubmit={(data) => { this.submit(data, 1); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 2 ); }}>
                                <p>日期时间选择框,当前日期：{this.state.time2}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow2}
                        mode='datetime'
                        selectTime={this.state.time2}
                        onValueChange={(date) => { this.onValueChange(date); }}
                        onClose={() => { this.close( 2 ); }}
                        onSubmit={(data) => { this.submit(data, 2); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 3 ); }}>
                                <p>时间选择框,当前日期：{this.state.time3}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow3}
                        mode='time'
                        minuteStep={15}
                        selectTime={this.state.time3}
                        onValueChange={(date) => { this.onValueChange(date); }}
                        onClose={() => { this.close( 3 ); }}
                        onSubmit={(data) => { this.submit(data, 3); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 4 ); }}>
                                <p>年份选择框,当前年份：{this.state.time4}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow4}
                        mode='year'
                        selectTime={this.state.time4}
                        onValueChange={(date) => { this.onValueChange(date); }}
                        onClose={() => { this.close( 4 ); }}
                        onSubmit={(data) => { this.submit(data, 4); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 5 ); }}>
                                <p>月份选择,当前月份：{this.state.time5}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow5}
                        mode='month'
                        selectTime={this.state.time5}
                        onValueChange={(date) => { this.onValueChange(date); }}
                        onClose={() => { this.close( 5 ); }}
                        onSubmit={(data) => { this.submit(data, 5); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 6 ); }}>
                                <p>多语言版本,当前时间：{this.state.time6}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow6}
                        use12hour
                        lang='hk'
                        mode='datetime'
                        selectTime={this.state.time6}
                        onValueChange={(date) => { this.onValueChange(date); }}
                        onClose={() => { this.close( 6 ); }}
                        onSubmit={(data) => { this.submit(data, 6); }}
                    />
                </div>
            </div>
        );
    }
}