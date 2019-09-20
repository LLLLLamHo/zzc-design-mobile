import React, { PureComponent } from 'react';
// import classnames from 'classnames';
import ReactDom from 'react-dom';
import PopperJS from './popper.js';
import { zzcComponentUse } from '../../_util/gtag';
export interface TooltipContentProps {
    placement?: string,
    referenceEle?: HTMLElement | null,
    visible?: boolean
}
export default class TooltipContent extends PureComponent<TooltipContentProps, any> {
    constructor( props ) {
        super( props );
        zzcComponentUse( 'Tooltip', '组件渲染' );
    }
    state = {
    }
    tootipContent?: null
    popper?:null
    popperJS?: any;
    static defaultProps = {
        placement: 'bottom',
        visible: false
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.updatePopper();
    }

    createPopper() {
        const { placement, referenceEle } = this.props;
        console.log('referenceEle: ', referenceEle);
        const popper = this.popper;

        const options = {
            placement 
        };
        this.popperJS = new PopperJS(referenceEle, popper, options);
    }

    updatePopper = () => {
        if (!this.popperJS) {
            this.createPopper();
            return;
        }
        console.log(this.popperJS);
        this.popperJS.update();
    }

    destoryPopper() {

    }

    createTooltip(): React.ReactElement<any> {
        return (
            <div
                className="zds-tooltip">
                    <div className="zds-tooltip__content">12421</div>
            </div>
        )
    }

    saveTooltip = (el) => {
        this.tootipContent = el;
    }

    savePopper = (el) => {
        this.popper = el;
    }

    getContainer = () => {
        const popupContainer = document.createElement('div');
        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';
        document.body.appendChild(popupContainer);
        return popupContainer;
    };

    render() {
        return ReactDom.createPortal(
            this.createTooltip(),
            this.getContainer()
        );
    }
}
