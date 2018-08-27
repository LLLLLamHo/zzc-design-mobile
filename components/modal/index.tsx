import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Modal from './components/modal';
import { ModalProps } from './porpsType';
import './index.scss';

export default class ModalEntrance extends PureComponent<ModalProps, any> {
    render() {
        return (
            <Error componentName='Modal'>
                <Modal {...this.props} />
            </Error>
        );
    }
}