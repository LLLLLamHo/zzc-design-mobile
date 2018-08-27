import React from 'react';
import classnames from 'classnames';
import PickerWrapper from './pickerWrapper';
import { isFunction } from '../../_util/typeof';
import config from '../../_util/config';
import { PickerProps } from '../propsType';


export default class Picker extends React.Component<PickerProps> {
    static defaultProps = {
        prefixCls: `${config.cls}-picker`,
        className: '',
        style: {},
        pickerData: []
    }
    private BScrollList: object = {};

    constructor( props ) {
        super( props );
        this.initBScrollCallback = this.initBScrollCallback.bind( this );
    }
    shouldComponentUpdate( nextProps ) {
        if ( JSON.stringify( nextProps ) != JSON.stringify( this.props ) ) {
            return true;
        }
        return false;
    }

    componentDidMount() {
        this.props.renderAfter && isFunction( this.props.renderAfter ) && this.props.renderAfter( this.BScrollList );
    }

    initBScrollCallback ( key, BScrollObj ) {
        this.BScrollList[key] = BScrollObj;
    }

    renderPickerWrapper(): Array<any> {
        const { pickerData = [], prefixCls, onTouchEnd, onTouchStart } = this.props;
        const timestamp = new Date().getTime();
        const pickerWrapperNodes = pickerData.map( ( item, key ) => (
            item ? <PickerWrapper
                key={`${timestamp}-${key}-cm`}
                wrapperIndex={key}
                wrapperKey={`${timestamp}-${key}-node`}
                data={item}
                prefixCls={prefixCls}
                initBScrollCallback={this.initBScrollCallback}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            /> : null
        ) );
        return pickerWrapperNodes;
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
                {this.renderPickerWrapper()}
            </div>
        );
    }
}