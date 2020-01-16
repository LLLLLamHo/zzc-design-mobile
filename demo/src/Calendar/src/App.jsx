import React, { PureComponent } from 'react';
import { Calendar, Card } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';
import holiday from './holiday';
import hotel from './hotel';

export default class App extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {
            visible1: false,
            car_start: null,
            car_end: null,
            visible2: false,
            hotel_start: null,
            hotel_end: null
        };
    }

    calcTime ( type, value ) {
        if (!value) return;
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
        } else {
            this.setState( {
                visible2: true
            } );
        }
    }
    hide ( number ) {
        if ( number == 1 ) {
            this.setState( {
                visible1: false
            } );
        } else {
            this.setState( {
                visible2: false
            } );
        }
    }

    set ( number, value ) {
        if ( number == 1 ) {
            this.setState( {
                car_start: value.start,
                car_end: value.end,
                visible1: false
            } );
        } else {
            this.setState( {
                hotel_start: value.start,
                hotel_end: value.end,
                visible2: false
            } );
        }
    }


    render () {
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
                                <p className='text'>{this.state.car_start} - {this.state.car_end}</p>
                            </Card.Body>
                        </Card>

                    </div>
                </div>
                <Calendar
                    visible={this.state.visible1}
                    yesterday
                    defaultCalendarTips='建议取车时间为航班到达后1小时，租车当天未满24小时算1天'
                    timeChange={( value ) => this.calcTime( 'timeChange', value )}
                    dayChange={( value ) => this.calcTime( 'dayChange', value )}
                    onChange={( value ) => { this.set( 1, value ); }}
                    startTime={this.state.car_start}
                    endTime={this.state.car_end}
                    calendarMode='car'
                    mode='day*time'
                    dateExtension={holiday}
                    onClose={() => { this.hide( 1 ) }}
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
            </div>
        );
    }
}