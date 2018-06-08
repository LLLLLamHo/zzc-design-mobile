import React, {Component} from 'react';
import {DatePicker, Card} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            isShow1: true
        };
    }

    touchEnd ( scrollIndex, itemIndex ) {
        console.log( `touchEnd: scroll序号${scrollIndex}` );
        console.log( `touchEnd: item序号${itemIndex}` );
    }
    touchStart ( scrollIndex ) {
        console.log( `touchStart: scroll序号${scrollIndex}` );
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
        console.log(data);
        this.state[`isShow${index}`] = false;
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
                                <p>日期选择框</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <DatePicker
                    visible={this.state.isShow1}
                    minuteStep={15}
                    use12hour
                    mode='date'
                    selectTime={new Date('2016-4-10 09:00')}
                    onValueChange={(date) => { this.onValueChange(date); }}
                    onClose={() => { this.close( 1 ); }}
                    onSubmit={(data) => { this.submit(data, 1); }}
                />
            </div>
        );
    }
}