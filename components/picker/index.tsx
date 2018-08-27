import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Picker from './components/picker';
import { PickerProps } from './propsType';
import './index.scss';

export default class PickerEntrance extends PureComponent<PickerProps, any> {
    render() {
        return (
            <Error componentName='Picker'>
                <Picker {...this.props} />
            </Error>
        );
    }
}