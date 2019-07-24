import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Popup from './components/Popup';
import { PopupProps } from './porpsType';
import './index.scss';

export default class PopupEntrance extends PureComponent<PopupProps, any> {
    render() {
        return (
            <Error componentName='Popup'>
                <Popup {...this.props} />
            </Error>
        );
    }
}