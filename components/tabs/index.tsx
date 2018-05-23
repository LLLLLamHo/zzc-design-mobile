import React from 'react';
import classnames from 'classnames';
import TabsList from './components/tabList';
import { isFunction, isNull } from '../_util/typeof';
import './index.scss';

export interface TabsProps {
    prefixCls?: string,
    tabs?: Array<tabs>,
    style?: React.CSSProperties,
    initIndex: number,
    index: number,
    onChange: Function,
    maxTabLength: number
}

export interface TabsState {
    currIndex : number
}

export interface tabs {
    title: string | JSX.Element
}

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
    constructor( props ) {
        super( props );
        this.state = {
            currIndex: props.index ? props.index : props.initIndex
        };
    }

    static defaultProps = {
        prefixCls: 'zzc-tabs',
        style: {},
        tabs: [],
        initIndex: 0,
        index: null,
        onChange: () => { },
        maxTabLength: 3
    }

    componentWillReceiveProps ( nextPros: any ): void {
        if ( nextPros.index != this.state.currIndex ) {
            this.setState( {
                currIndex: nextPros.index
            } );
        }
    }

    onChange ( key: number ): void {
        if ( isFunction( this.props.onChange ) ) {
            this.props.onChange( key );
        }
        // 当tabs是受控时，不主动更新state，通过外部改变props来改变tabs的state
        if ( isNull( this.props.index ) ) {
            this.setState( {
                currIndex: key
            } );
        }
    }
    render (): JSX.Element {
        const { prefixCls, style, tabs, maxTabLength } = this.props;
        const { currIndex } = this.state;
        return (
            <div
                className={classnames( `${prefixCls}-box` )}
                style={style}
            >
                <TabsList
                    maxTabLength={maxTabLength}
                    prefixCls={prefixCls}
                    tabs={tabs}
                    currIndex={currIndex}
                    onChange={( key ) => { this.onChange( key ); }}
                />
            </div>
        );
    }
}