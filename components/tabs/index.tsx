import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import Tabs from './components/tabs';
import { TabsProps } from './propsType';
import './index.scss';

export default class TabsEntrance extends PureComponent<TabsProps, any> {
    render() {
        return (
            <Error componentName='Tabs'>
                <Tabs {...this.props} />
            </Error>
        );
    }
}