import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Button from './components/button';
import {ButtonProps} from './propsType';
import '../style/index';
import './index.scss';

export default class ButtonEntrance extends PureComponent<ButtonProps, any> {
    render() {
        return (
            <Error componentName='Button'>
                <Button {...this.props} />
            </Error>
        );
    }
}