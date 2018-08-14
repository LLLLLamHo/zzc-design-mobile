import React, {Component} from 'react';
import {DatePicker, Card} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        const today = new Date();
        const minDay = new Date();
        const maxDay = new Date();
        this.state = {
            isShow1: false,
            time1: '1996/09/21',
            isShow2: false,
            time2: '2016/09/21 12:20',
            isShow3: false,
            time3: '12:30',
            isShow4: false,
            time4: '2018',
            isShow5: false,
            time5: '8',
            isShow6: false,
            time6: '2016/09/21 12:20',
            minDate: '1900/01/01',
            maxDate: '2020/01/01',
            isShow7: false,
            time7: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
            minDate2: new Date( minDay.setFullYear( minDay.getFullYear() - 1 ) ),
            maxDate2: new Date( maxDay.setFullYear( maxDay.getFullYear() + 1 ) ),
            isShow8: false,
            time8: '2016/10/10 10:30:00',
            minDate3: '2017/8/8 14:45:00',
            maxDate3: '2019/8/1 00:01:00',
            isShow9: false,
            time9: '2020/10/10 12:00:00',
            minDate4: '2017/8/8 12:00:00',
            maxDate4: '2019/8/1 00:00:00'
        };
    }

    renderAfter ( scrollObj ) {
        console.log( scrollObj );
    }

    onValueChange ( date ) {
        console.log( date );
    }

    show ( index ) {
        this.state[`isShow${index}`] = true;
        this.setState( this.state );
    }

    close ( index ) {
        this.state[`isShow${index}`] = false;
        this.setState( this.state );
    }

    submit ( data, index ) {
        this.state[`isShow${index}`] = false;
        this.state[`time${index}`] = data.currDate;
        this.setState( this.state );
    }

    renderCallback () {
        console.log( 'showed' );
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
                            <div className='card-box2' onClick={() => {this.show( 1 );}}>
                                <p>日期选择框,当前日期：{this.state.time1}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow1}
                        minuteStep={15}
                        minDate={new Date( this.state.minDate )}
                        maxDate={new Date( this.state.maxDate )}
                        use12hour
                        mode='date'
                        selectTime={new Date( this.state.time1 )}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 1 );}}
                        onSubmit={( data ) => {this.submit( data, 1 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 7 );}}>
                                <p>限制时间,当前日期：{this.state.time7}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow7}
                        minuteStep={15}
                        minDate={this.state.minDate2}
                        maxDate={this.state.maxDate2}
                        use12hour
                        mode='date'
                        selectTime={this.state.time7}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 7 );}}
                        onSubmit={( data ) => {this.submit( data, 7 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 8 );}}>
                                <p>限制时间-24小时,当前日期：{this.state.time8}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow8}
                        minuteStep={30}
                        minDate={this.state.minDate3}
                        maxDate={this.state.maxDate3}
                        use12hour={false}
                        mode='datetime'
                        selectTime={this.state.time8}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 8 );}}
                        onSubmit={( data ) => {this.submit( data, 8 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 9 );}}>
                                <p>限制时间-12小时,当前日期：{this.state.time9}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow9}
                        minuteStep={15}
                        minDate={this.state.minDate4}
                        maxDate={this.state.maxDate4}
                        use12hour={true}
                        mode='datetime'
                        selectTime={this.state.time9}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 9 );}}
                        onSubmit={( data ) => {this.submit( data, 9 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 2 );}}>
                                <p>日期时间选择框,当前日期：{this.state.time2}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow2}
                        mode='datetime'
                        selectTime={this.state.time2}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 2 );}}
                        onSubmit={( data ) => {this.submit( data, 2 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 3 );}}>
                                <p>时间选择框,当前日期：{this.state.time3}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow3}
                        mode='time'
                        minuteStep={15}
                        selectTime={this.state.time3}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 3 );}}
                        onSubmit={( data ) => {this.submit( data, 3 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 4 );}}>
                                <p>年份选择框,当前年份：{this.state.time4}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow4}
                        mode='year'
                        selectTime={this.state.time4}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 4 );}}
                        onSubmit={( data ) => {this.submit( data, 4 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 5 );}}>
                                <p>月份选择,当前月份：{this.state.time5}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow5}
                        mode='month'
                        selectTime={this.state.time5}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 5 );}}
                        onSubmit={( data ) => {this.submit( data, 5 );}}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => {this.show( 6 );}}>
                                <p>多语言版本,当前时间：{this.state.time6}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow6}
                        maskClose={false}
                        use12hour
                        lang='hk'
                        mode='datetime'
                        selectTime={this.state.time6}
                        onValueChange={( date ) => {this.onValueChange( date );}}
                        onClose={() => {this.close( 6 );}}
                        onSubmit={( data ) => {this.submit( data, 6 );}}
                    />
                </div>

            </div>
        );
    }
}