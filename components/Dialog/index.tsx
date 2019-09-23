import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Dialog from './components/Dialog';
import { DialogProps } from './propsType';
import '../style/index';
import './index.scss';

export default class DialogEntrance extends PureComponent<DialogProps, any> {
    render() {
        return (
            <Error componentName='Dialog'>
                <Dialog ref={(dialog) => { this.props.getRef && this.props.getRef(dialog) }} {...this.props} />
            </Error>
        );
    }
}