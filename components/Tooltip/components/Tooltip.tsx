import React, { PureComponent } from 'react';
// import ReactDom from 'react-dom';
// import classnames from 'classnames';
import { zzcComponentUse } from '../../_util/gtag';
import { TooltipProps } from '../propsType';
import TooltipContent from './Content';
export default class Tooltip extends PureComponent<TooltipProps, any> {
    constructor( props ) {
        super( props );
        zzcComponentUse( 'Tooltip', '组件渲染' );
    }
    state = {
        visible: false
    }
    tootipContent?: null
    popper?:null
    referenceEle: HTMLDivElement | null;
    static defaultProps = {
        placement: 'bottom'
    }

    componentWillMount() {

    }

    componentDidMount() {
        
    }
    

    updatePopper = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    saveTrigger = (el) => {
        this.referenceEle = el
    }

    render() {
        const { children } = this.props;
        // const { visible } = this.state;
        const Portal = TooltipContent;
        let child = React.Children.only(children);
        let newChildProps: newChildProps;
        newChildProps = {
            key: 'trigger',
            ref: this.saveTrigger,
            onClick: this.updatePopper
        }
        const trigger = React.cloneElement(child, newChildProps);
        return [ trigger, Portal ];
    }
}

interface newChildProps {
    key: string,
    ref: (el: Node) => void,
    onClick: () => void
}