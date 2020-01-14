import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Calendar from './components/Calendar';
import '../style/index';
import './index.scss';

export default class CalendarEntrance extends PureComponent {
    render() {
        return (
            <Error componentName='Calendar'>
                <Calendar {...this.props} />
            </Error>
        );
    }
}