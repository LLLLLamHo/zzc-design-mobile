import React from 'react';
import classnames from 'classnames';
import { Icon } from 'zzc-design-mobile';
import { StepProps } from '../propsTypes';
export default class Step extends React.PureComponent<StepProps> {
    constructor(props: StepProps) {
        super(props);
    }

    render() {
        const { className, title, description, icon, active, alignCenter, status, tag, style } = this.props;
        return (
            <div
            className={
                classnames('zds-step', {
                    'is-center': alignCenter,
                    'is-finish': status === 'finish',
                    'is-active': active,
                    [`${className}`]: !!className
                })
            }
            style={style}>
                <div className="zds-step-head">
                    <div className="zds-step-line"></div>
                    {
                        tag &&
                        <div className="zds-step-tag">
                            <span className="zds-step-tag-text">{tag}</span>
                            <i className="zds-step-tag-triangle"></i>
                        </div>
                    }
                    <i className="zds-step-icon">
                        {
                            !icon &&
                            <Icon
                            className={classnames('zds-step-icon-inner', {
                                'is-active': active,
                            })}
                            type={`step_${status}`}/>
                        }
                   </i>
                </div>
                <div className="zds-step-content">
                    <div className="zds-step-title">
                        {title}
                    </div>
                    <div className="zds-step-description">
                        {description}
                    </div>
                </div>
            </div>
        );
    }
}