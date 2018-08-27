import React, { PureComponent } from 'react';
import Error from '../_util/Error';
import ImageView from './components/imageView';
import { ImageViewProps } from './propsType';
import './index.scss';

export default class FullModalEntrance extends PureComponent<ImageViewProps, any> {
    render() {
        return (
            <Error componentName='ImageView'>
                <ImageView {...this.props} />
            </Error>
        );
    }
}