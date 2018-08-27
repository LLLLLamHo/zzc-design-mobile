import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import DatePicker from './components/datePicker';
import { DatePickerProps } from './propsType';
import './index.scss';

export default class DatePickerEntrance extends PureComponent<DatePickerProps, any> {
    render() {
        return (
            <Error componentName='DatePicker'>
                <DatePicker {...this.props} />
            </Error>
        );
    }
}