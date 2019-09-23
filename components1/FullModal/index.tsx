import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import FullModal from './components/FullModal';
import { FullModalProps } from './propsTyps';
import './index.scss';

export default class FullModalEntrance extends PureComponent<FullModalProps, any> {
    render() {
        return (
            <Error componentName='FullModal'>
                <FullModal {...this.props} />
            </Error>
        );
    }
}