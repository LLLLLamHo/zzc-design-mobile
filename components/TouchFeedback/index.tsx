import React, { PureComponent } from 'react';
import TouchFeedback from './components/TouchFeedback';
import Error from '../_util/Error';
import { TouchFeedbackProps } from './propstype';

export default class TouchFeedbackEntrance extends PureComponent<TouchFeedbackProps, any> {
    render() {
        return (
            <Error componentName='TouchFeedback'>
                <TouchFeedback {...this.props} />
            </Error>
        );
    }
}