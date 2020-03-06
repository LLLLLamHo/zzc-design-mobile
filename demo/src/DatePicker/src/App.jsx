import React, { Component } from 'react';
import { DatePicker, Card } from 'zzc-design-mobile';
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
            time1: '2019/07/19',
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
            isShow7: false,
            time7: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`,
            minDate2: new Date( minDay.setFullYear( minDay.getFullYear() - 1 ) ),
            maxDate2: new Date( maxDay.setFullYear( maxDay.getFullYear() + 1 ) ),
            isShow8: false,
            time8: '2017/8/8 10:30:00',
            minDate3: '2017/8/8',
            maxDate3: '2017/8/8',
            isShow9: false,
            time9: '2020/10/10 12:00:00',
            time10: '2020/10/10 12:00:00',
            minDate4: '2020/8/9 11:00:00',
            maxDate4: '2020/8/10 11:00:00',
            isShow11: false,
            time11: '12:30',
            warningText: null
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
                            <div className='card-box2' onClick={() => { this.show( 1 ); }}>
                                <p>日期选择框,当前日期：{this.state.time1}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        reverse
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow1}
                        minuteStep={15}
                        mode='date'
                        selectTime={new Date( this.state.time1 )}
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 1 ); }}
                        onSubmit={( data ) => { this.submit( data, 1 ); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 7 ); }}>
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
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 7 ); }}
                        onSubmit={( data ) => { this.submit( data, 7 ); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 9 ); }}>
                                <p>限制时间-24小时,当前日期：{this.state.time9}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow9}
                        minuteStep={15}
                        minDate={this.state.minDate4}
                        maxDate={this.state.maxDate4}
                        // hourRange={[10, 12]}
                        mode='datetime'
                        selectTime={this.state.time9}
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 9 ); }}
                        onSubmit={( data ) => { this.submit( data, 9 ); }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 10 ); }}>
                                <p>限制时间-12小时,当前日期：{this.state.time10}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        renderCallback={this.renderCallback}
                        visible={this.state.isShow10}
                        minuteStep={15}
                        minDate={this.state.minDate4}
                        maxDate={this.state.maxDate4}
                        use12hour
                        mode='datetime'
                        selectTime={this.state.time10}
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 10 ); }}
                        onSubmit={( data ) => { this.submit( data, 10 ); }}
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
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 2 ); }}
                        onSubmit={( data ) => { this.submit( data, 2 ); }}
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
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 3 ); }}
                        onSubmit={( data ) => { this.submit( data, 3 ); }}
                        hourRange={[10, 20]}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body borderDirection='left'>
                            <div className='card-box2' onClick={() => { this.show( 11 ); }}>
                                <p>小时选择框,当前日期：{this.state.time11}</p>
                            </div>
                        </Card.Body>
                    </Card>
                    <DatePicker
                        visible={this.state.isShow11}
                        warningText={this.state.warningText}
                        mode='hour'
                        use12hour
                        selectTime={this.state.time11}
                        onValueChange={( date ) => {
                            this.setState( {
                                warningText: '该时间非营业时间，需要支付额外服务费'
                            } );
                            this.onValueChange( date );
                        }}
                        onClose={() => { this.close( 11 ); }}
                        onSubmit={( data ) => { this.submit( data, 11 ); }}
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
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 4 ); }}
                        onSubmit={( data ) => { this.submit( data, 4 ); }}
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
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 5 ); }}
                        onSubmit={( data ) => { this.submit( data, 5 ); }}
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
                        maskClose={false}
                        use12hour
                        lang='en'
                        mode='datetime'
                        selectTime={this.state.time6}
                        onValueChange={( date ) => { this.onValueChange( date ); }}
                        onClose={() => { this.close( 6 ); }}
                        onSubmit={( data ) => { this.submit( data, 6 ); }}
                        i18n={{
                            year: '年',
                            month: '月',
                            day: '日',
                            hour: '時',
                            minutes: '分',
                            am: '午前',
                            pm: '午後',
                            confirm: '確認',
                            cancel: 'キャンセル',
                            close: 'クローズ',
                            open: '開く',
                            datePickerTitle: '選択時間',
                            datePickerButtomText: '日付を確認する'
                        }}
                    />
                </div>
            </div>
        );
    }
}


