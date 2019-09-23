import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Loading from './components/Loading';
import { LoadingProps } from './propsType';
import './index.scss';

export default class LoadingEntrance extends PureComponent<LoadingProps, any> {
    render() {
        return (
            <Error componentName='Loading'>
                <Loading {...this.props} />
            </Error>
        );
    }
}