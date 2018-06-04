import React from 'react';


import classnames from 'classnames';
import PickerWrapper from './components/pickerWrapper';
import { PickerProps } from './propsType';
import './index.scss';


export default class Picker extends React.PureComponent<PickerProps> {
    static defaultProps = {
        prefixCls: 'zzc-picker',
        className: '',
        style: {}
    }

    private BScrollList: Array<any> = [];

    constructor( props ) {
        super( props );
        this.initBScrollCallback = this.initBScrollCallback.bind( this );
    }

    initBScrollCallback ( BScrollObj ) {
        this.BScrollList.push( BScrollObj );
        console.log( this.BScrollList );
    }

    render (): JSX.Element {
        const { prefixCls, className, style } = this.props;
        const cls = classnames(
            className,
            `${prefixCls}`
        );
        return (
            <div
                className={cls}
                style={style}
            >
                <PickerWrapper
                    prefixCls={prefixCls}
                    initBScrollCallback={this.initBScrollCallback}
                />
                <PickerWrapper
                    prefixCls={prefixCls}
                    initBScrollCallback={this.initBScrollCallback}
                />
                <PickerWrapper
                    prefixCls={prefixCls}
                    initBScrollCallback={this.initBScrollCallback}
                />
            </div>
        );
    }
}