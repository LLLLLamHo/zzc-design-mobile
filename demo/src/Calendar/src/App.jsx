import React, { PureComponent } from 'react';
import { Calendar } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {

        };
    }

    calcTime ( type, value ) {
        const { start, end } = value;
        if ( !start || !end ) return;
        if ( end.t - start.t < 0 ) {
            return '不足一天按一天计算';
        }
        return;
    }

    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Calendar 日历</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <div style={{ height: '100%', width: '100%', position: 'fixed', top: 0, left: 0, background: 'blue' }}>
                        <Calendar
                            yesterday
                            defaultCalendarTips='建议取车时间为航班到达后1小时，租车当天未满24小时算1天'
                            timeChange={( value ) => this.calcTime( 'timeChange', value )}
                            dayChange={( value ) => this.calcTime( 'dayChange', value )}
                            calendarMode='car'
                            mode='day*time'
                        />
                    </div>
                </div>
            </div>
        );
    }
}