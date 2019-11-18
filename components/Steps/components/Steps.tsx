import React, { Children } from 'react';
import classnames from 'classnames';
import { StepsProps } from '../propsTypes';
import Step from './Step';
interface newPropsInterface {
    active: boolean,
    alignCenter: boolean,
    status?: string
}
export default class Steps extends React.PureComponent<StepsProps> {
    constructor(props: StepsProps) {
        super(props);
    }
    static Step = Step;
    
    static defaultProps = {
        current: 0,
        direction: 'horizontal'
    }

    getStatus(current: number, index: number): string {
        let status = 'wait';
        if (current < index) {
            status = 'wait';
        } else if (current > index) {
            status = 'finish';
        } else if (current === index) {
            status = 'active';
        }
        return status;
    } 

    hasTag(children: React.ReactNode): boolean {
        type childType = React.ReactElement<any>;
        return React.Children.toArray(children).some((child: childType) => {
            return !!child.props.tag;
        })
    }

    render() {
        const { className, direction, children, alignCenter, current, style } = this.props;
        const stepNumber = current;
        return (
            <div
            className={
                classnames('zds-steps', {
                    'is-horizontal': direction === 'horizontal',
                    'is-vertical': direction === 'vertical',
                    [`${className}`]: !!className
                })
            }
            style={style}>
                <div className="zds-steps-scroller">
                    <div className="zds-steps-wrapper" style={{ paddingTop: this.hasTag(children) ? '30px' : 0 }}>
                        {
                            Children.map(children, (child: any, index) => {
                                if (React.isValidElement(child)) {
                                    const newProps: newPropsInterface = {
                                        active: stepNumber === index,
                                        alignCenter: alignCenter,
                                        status: this.getStatus(stepNumber, index)
                                    };
                                    return React.cloneElement(child, newProps);
                                }
                                return null;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}