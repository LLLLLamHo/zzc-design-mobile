import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Modal from './components/Modal';
import { ModalProps } from './porpsType';
import './index.scss';

export default class ModalEntrance extends PureComponent<ModalProps, any> {
    render() {
        // 外部调用setState传入props中
        const props = {...this.props, ...this.state};
        return (
            <Error componentName='Modal'>
                <Modal {...props} />
            </Error>
        );
    }
}