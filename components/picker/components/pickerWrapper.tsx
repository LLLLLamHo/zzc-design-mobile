import React from 'react';
import BScroll from 'better-scroll';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import config from '../../_util/config';
import { PickerWrapperProps } from '../propsType';

export default class PickerWrapper extends React.PureComponent<PickerWrapperProps> {
    static defaultProps = {
        prefixCls: `${config.cls}-picker`,
        wrapperKey: '',
        data: []
    }

    private wrapper: HTMLDivElement | null
    private wheelScroll: any
    private BScrollObj: any
    private currIndex: number

    constructor( props ) {
        super( props );
        this.touchEnd = this.touchEnd.bind( this );
        this.touchStart = this.touchStart.bind( this );
    }

    componentDidUpdate(): void {
        debugger;
        if ( this.props.data.selectedIndex ) {
            this.BScrollObj.wheelTo( this.props.data.selectedIndex );
        }
        this.BScrollObj.refresh();
    }

    componentDidMount (): void {
        const { scrollType = new Date().getTime() } = this.props.data;
        const initBScrollConfig = this.resetBScrollConfig();
        const wrapperNode: any = this.wrapper ? ReactDOM.findDOMNode( this.wrapper ) : null;
        if ( wrapperNode ) {
            this.BScrollObj = wrapperNode && new BScroll( wrapperNode, initBScrollConfig );
            // 某种情况下会出现无法滚动到指定的selectedIndex
            requestAnimationFrame( () => {
                this.BScrollObj.wheelTo( initBScrollConfig.wheel.selectedIndex );
                this.addActiveItem();
                this.BScrollObj.refresh();
            } );
            this.BScrollObj.on( 'beforeScrollStart', this.touchStart );
            this.BScrollObj.on( 'scrollEnd', this.touchEnd );
            this.BScrollObj.on( 'scrollCancel', this.touchEnd );
            this.props.initBScrollCallback( scrollType, this.BScrollObj );
        }
    }

    componentWillUnmount():void {
        this.BScrollObj.off( 'beforeScrollStart', this.touchStart );
        this.BScrollObj.off( 'scrollEnd', this.touchEnd );
        this.BScrollObj.off( 'scrollCancel', this.touchEnd );
    }

    resetBScrollConfig(): any {
        const { prefixCls, data } = this.props;
        const wheel = {
            selectedIndex: data.selectIndex ? data.selectIndex : 0,
            rotate: 0,
            adjustTime: 0,
            wheelWrapperClass: `${prefixCls}-ws`,
            wheelItemClass: `${prefixCls}-wi`
        };
        let initBScrollConfig: any = {};
        if ( data.scrollData ) {
            initBScrollConfig = data.scrollData;
            if ( initBScrollConfig.wheel ) {
                initBScrollConfig.wheel = Object.assign( {}, initBScrollConfig.wheel, wheel );
            }
        } else {
            initBScrollConfig.wheel = wheel;
        }
        return initBScrollConfig;
    }

    getWrapper ( div ): void {
        this.wrapper = div;
    }

    getWheelScroll ( div ): void {
        this.wheelScroll = ReactDOM.findDOMNode( div );
    }

    touchEnd(): void {
        const { wrapperIndex, scrollType } = this.props.data;
        this.addActiveItem();
        this.props.onTouchEnd && this.props.onTouchEnd( scrollType ? scrollType : wrapperIndex, this.BScrollObj.getSelectedIndex() );
    }

    touchStart(): void {
        this.removeActiveItem();
        this.props.onTouchStart && this.props.onTouchStart( this.props.wrapperIndex );
    }

    removeActiveItem (): void {
        const { prefixCls, data } = this.props;
        if ( this.wheelScroll.children[this.currIndex] ) {
            const liCls = data[this.currIndex] && data[this.currIndex].className ? data[this.currIndex].className : '';
            this.wheelScroll.children[this.currIndex].className = `${prefixCls}-wi ${liCls}`;
        }
    }

    addActiveItem (): void {
        const { prefixCls } = this.props;
        this.currIndex = this.BScrollObj.getSelectedIndex();
        if ( this.wheelScroll && this.wheelScroll.children[this.currIndex] ) {
            this.wheelScroll.children[this.currIndex].className = `${this.wheelScroll.children[this.currIndex].className} ${prefixCls}-wi-active`;
        }
    }

    renderItem(): Array<any> {
        const { prefixCls, data } = this.props;
        const liCls = classnames(
            data.itemClassName,
            `${prefixCls}-wi`,
        );
        const timestamp = new Date().getTime();
        const liNodeList = data.listData.map( ( item, key ) => (
            <li
                className={item.className ? classnames(liCls, item.className) : liCls}
                data-key={item.dataKey ? item.dataKey : item.text}
                key={`${timestamp}-${key}-item`}
            >
                {item.text}
            </li>
        ) );

        return liNodeList;
    }

    render (): JSX.Element {
        const { prefixCls, data, wrapperKey } = this.props;
        const ulCls = classnames(
            data.className,
            `${prefixCls}-ws`,
        );
        return (
            <div
                key={wrapperKey}
                className={`${prefixCls}-wrapper wrapper`}
                ref={( refs ) => { this.getWrapper( refs ); }}
            >
                <ul
                    className={ulCls}
                    ref={( refs ) => { this.getWheelScroll( refs ); }}
                >
                    {this.renderItem()}
                </ul>
                <div className={`${prefixCls}-wrapper-bg`} />
            </div>
        );
    }
}