import React, { PureComponent } from 'react';
// import { Calendar, Card } from 'zc-design-mobile';
import { Calendar, Card } from '../../../../es';
import './index.scss';
import '../../../style/style.scss';
import holiday from './holiday';
import hotel from './hotel';

export default class App extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {
            visible1: false,
            car_start: new Date('2023/8/25').toString(),
            car_end: new Date('2023/9/5').toString(),
            visible2: false,
            hotel_start: null,
            hotel_end: null,
            visible3: false,
            start: null,
            end: null,
            defaultStartTime: '03:10',
            defaultEndTime: "21:50",
            pickupTimeRange:0,
            returnTimeRange:0,
        };
    }

    calcTime ( type, value ) {
        if ( !value ) return;
        const { start, end } = value;
        if ( !start || !end ) return;
        if ( end.t - start.t < 0 ) {
            return '不足一天按一天计算';
        }
        return;
    }

    show ( number ) {
        if ( number == 1 ) {
            this.setState( {
                visible1: true
            } );
        } else if ( number == 2 ) {
            this.setState( {
                visible2: true
            } );
        } else {
            this.setState( {
                visible3: true
            } );
        }
    }
    hide ( number ) {
        if ( number == 1 ) {
            this.setState( {
                visible1: false
            } );
        } else if ( number == 2 ) {
            this.setState( {
                visible2: false
            } );
        } else {
            this.setState( {
                visible3: false
            } );
        }
    }

    set ( number, value ) {
        console.log( number, value );
        if ( number == 1 ) {
            this.setState( {
                car_start: value.start,
                car_end: value.end,
                visible1: false
            } );
        } else if ( number == 2 ) {
            this.setState( {
                hotel_start: value.start,
                hotel_end: value.end,
                visible2: false
            } );
        } else {
            this.setState( {
                start: value.start,
                end: value.end,
                visible3: false
            } );
        }
    }

    resetTime ( date ) {
        const year = new Date( date ).getFullYear();
        const month = new Date( date ).getMonth();
        const day = new Date( date ).getDate();
        return `${year}-${month + 1}-${day}`;
    }

    changeSelectDay = (value) =>{
        if ( !value ) return;
        const { start, end } = value;
        if ( !start || !end ) return;
        
        this.setState({
            pickupTimeRange: start.D == 16 ? 17:0,
            returnTimeRange: end.D == 16? 20:0,
            defaultStartTime: start.D == 16?'18:00':'11:00',
            defaultEndTime: end.D == 16?'21:00':'13:00',
        })
    }

    getRange = () => {
        const {
            pickupTimeRange,
            returnTimeRange
        } = this.state;
        const left = [ pickupTimeRange,24 ];
        const right = [ returnTimeRange,24 ];
        // console.log('getTimeRange', left,pickupTimeRange,returnTimeRange)
        return JSON.stringify({
            left,
            right
        })
    }

    render () {
        const range = this.getRange();
        const { defaultStartTime, defaultEndTime } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Calendar 日历</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <div>
                        <Card full>
                            <Card.Body borderDirection='left'>
                                <div className='card-box2' onClick={() => { this.show( 1 ); }}>
                                    <p>打开租车日历: </p>
                                </div>
                                <p className='text'>{this.resetTime( this.state.car_start )} - {this.resetTime( this.state.car_end )}</p>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
                <Calendar
                    maskClose
                    calendarMode='car'
                    mode='day*time'
                    visible={this.state.visible1}
                    minutesInterval={10}
                    yesterday
                    defaultCalendarTips='租期按24h制计算，不满24h按1天算'
                    calendarTips='当地门店营业方式为下午办理取车(12:00-16:00)，上午办理还车(9:00-11:00)，请按建议时段选择取还时间。'
                    timeChange={( value ) => this.calcTime( 'timeChange', value )}
                    dayChange={( value ) => this.changeSelectDay( value )}
                    onChange={( value ) => { this.set( 1, value ); }}
                    startTime={this.state.car_start}
                    endTime={this.state.car_end}
                    // timeRange={[10,23]}
                    defaultStartTime={defaultStartTime}
                    defaultEndTime={defaultEndTime}
                    timeRange={range}
                    popupTitle="取还车时间"
                    dateExtension={holiday}
                    onClose={() => { this.hide( 1 ) }}
                    pickupCityLocalTimeStr={'2024-4-13 17:27:21'}
                    // rangeInView={['2023-11-22 11:29', '2023-11-25 23:59']}
                />
                <div className='zzc-demo-body full'>
                    <div>
                        <Card full>
                            <Card.Body borderDirection='left'>
                                <div className='card-box2' onClick={() => { this.show( 2 ); }}>
                                    <p>打开酒店日历:</p>
                                </div>
                                <p className='text'>{this.state.hotel_start} - {this.state.hotel_end}</p>
                            </Card.Body>
                        </Card>
                        <Calendar
                            visible={this.state.visible2}
                            // defaultCalendarTips='建议取车时间为航班到达后1小时，租车当天未满24小时算1天'
                            timeChange={( value ) => this.calcTime( 'timeChange', value )}
                            dayChange={( value ) => this.calcTime( 'dayChange', value )}
                            onChange={( value ) => { this.set( 2, value ); }}
                            startTime={this.state.car_start}
                            endTime={this.state.car_end}
                            onClose={() => { this.hide( 2 ) }}
                            mode='day'
                            dateExtension={hotel}
                        />
                    </div>
                </div>
                <div className='zzc-demo-body full'>
                    <div>
                        <Card full>
                            <Card.Body borderDirection='left'>
                                <div className='card-box2' onClick={() => { this.show( 3 ); }}>
                                    <p>多语言版本:</p>
                                </div>
                                <p className='text'>{this.state.start} - {this.state.end}</p>
                            </Card.Body>
                        </Card>
                        <Calendar
                            visible={this.state.visible3}
                            yesterday
                            defaultCalendarTips='this is english tips text'
                            timeChange={( value ) => this.calcTime( 'timeChange', value )}
                            dayChange={( value ) => this.calcTime( 'dayChange', value )}
                            onChange={( value ) => { this.set( 3, value ); }}
                            startTime={this.state.start}
                            endTime={this.state.end}
                            calendarMode='car'
                            mode='day*time'
                            onClose={() => { this.hide( 3 ) }}
                            i18n={{
                                left_title: 'Local date',
                                right_title: 'Local date',
                                left_placeholder: 'Pick-up date',
                                right_placeholder: 'Drop-off date',
                                monthList: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                weekList: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                reset_btn_text: 'Reset',
                                submit_btn_text: 'Confirm',
                                time_picker_title: 'Pick Time',
                                time_return_title: 'Drop Time',
                                picker_car: 'Pick',
                                return_car: 'Drop',
                                inTheDay_car: 'Pick Drop',
                                month: '.',
                                week: '',
                                day: 'Day',
                                listAcrossTheYearText: '.',
                                today: 'today'
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}