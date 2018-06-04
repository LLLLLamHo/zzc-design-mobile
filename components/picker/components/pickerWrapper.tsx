import React from 'react';
import BScroll from 'better-scroll';
import ReactDOM from 'react-dom';
import { PickerWrapperProps } from '../propsType';

export default class PickerWrapper extends React.PureComponent<PickerWrapperProps> {
    static defaultProps = {
        prefixCls: 'zzc-picker'
    }

    private wrapper: HTMLDivElement | null
    private wheelScroll: any
    private BScrollObj: any
    private currIndex: number

    constructor( props ) {
        super( props );
        this.removeActiveItem = this.removeActiveItem.bind( this );
        this.addActiveItem = this.addActiveItem.bind( this );
    }

    componentDidMount (): void {
        const { prefixCls } = this.props;
        const wrapperNode = this.wrapper ? ReactDOM.findDOMNode( this.wrapper ) : null;
        this.BScrollObj = new BScroll( wrapperNode, {
            wheel: {
                selectedIndex: 0,
                rotate: 25,
                adjustTime: 400,
                wheelWrapperClass: `${prefixCls}-ws`,
                wheelItemClass: `${prefixCls}-wi`
            }
        } );
        this.BScrollObj.on( 'beforeScrollStart', this.removeActiveItem );
        this.BScrollObj.on( 'scrollEnd', this.addActiveItem );
        this.BScrollObj.on( 'scrollCancel', this.addActiveItem );
        this.addActiveItem();
        this.props.initBScrollCallback( this.BScrollObj );
    }

    getWrapper ( div ): void {
        this.wrapper = div;
    }

    getWheelScroll ( div ): void {
        this.wheelScroll = ReactDOM.findDOMNode( div );
    }
    
    removeActiveItem (): void {
        const { prefixCls } = this.props;
        this.wheelScroll.children[this.currIndex].className = `${prefixCls}-wi`;
    }

    addActiveItem (): void {
        const { prefixCls } = this.props;
        this.currIndex = this.BScrollObj.getSelectedIndex();
        this.wheelScroll.children[this.currIndex].className = `${prefixCls}-wi ${prefixCls}-wi-active`;
    }

    render (): JSX.Element {
        const { prefixCls } = this.props;

        return (
            <div className={`${prefixCls}-wrapper wrapper`} ref={( refs ) => { this.getWrapper( refs ); }}>
                <ul className={`${prefixCls}-ws`} ref={( refs ) => { this.getWheelScroll( refs ); }}>
                    <li className={`${prefixCls}-wi`}>1</li>
                    <li className={`${prefixCls}-wi`}>2</li>
                    <li className={`${prefixCls}-wi`}>3</li>
                    <li className={`${prefixCls}-wi`}>4</li>
                    <li className={`${prefixCls}-wi`}>5</li>
                    <li className={`${prefixCls}-wi`}>6</li>
                    <li className={`${prefixCls}-wi`}>7</li>
                    <li className={`${prefixCls}-wi`}>8</li>
                    <li className={`${prefixCls}-wi`}>9</li>
                    <li className={`${prefixCls}-wi`}>10</li>
                    <li className={`${prefixCls}-wi`}>11</li>
                    <li className={`${prefixCls}-wi`}>12</li>
                    <li className={`${prefixCls}-wi`}>13</li>
                    <li className={`${prefixCls}-wi`}>14</li>
                </ul>
            </div>
        );
    }
}