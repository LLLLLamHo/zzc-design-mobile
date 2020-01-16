const { Component } = React;
const { Calendar, Card } = zds;

const holiday = {
    '2020/1/1': { sub: '元旦' },
    '2020/1/24': { sub: '除夕' },
    '2020/1/25': { sub: '春节' },
    '2020/2/8': { sub: '元宵节' },
    '2020/2/14': { sub: '情人节' },
    '2020/3/8': { sub: '妇女节' },
    '2020/3/12': { sub: '植树节' },
    '2020/4/4': { sub: '清明节' },
    '2020/5/1': { sub: '劳动节' }
};

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            visible1: false,
            car_start: null,
            car_end: null,
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

    show () {
        this.setState( {
            visible1: true
        } );
    }
    hide () {
        this.setState( {
            visible1: false
        } );
    }

    set ( value ) {
        this.setState( {
            car_start: value.start,
            car_end: value.end,
            visible1: false
        } );
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
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
)