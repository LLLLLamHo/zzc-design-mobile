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
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Calendar 日历</h1>
                </div>
                <div className='zzc-demo-body full'>
                    <div style={{ height: '100%', width: '100%', position: 'fixed', top: 0, left: 0, background: 'blue' }}>
                        <Calendar calendarMode='car' />
                    </div>
                </div>
            </div>
        );
    }
}