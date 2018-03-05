import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './index.scss';

export default class Header extends PureComponent {
    static defaultProps = {
        prefixCls: 'zzc-card-header',
        className: '',
        title: false,
        extra: false,
        children: false,
        noBorder: false,
        style: {}
    }

    setContent() {
        const { title, extra, prefixCls, children } = this.props;
        if ( children ) {
            return children;
        }
        return (
            <React.Fragment>
                {title && <h1 className={classNames( `${prefixCls}-title` )}>{title}</h1>}
                {extra && <div className={classNames( `${prefixCls}-extra` )}>{extra}</div>}
            </React.Fragment>
        );
    }

    render() {
        const { style, className, prefixCls, noBorder } = this.props;
        const headClassName = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-noborder`]: noBorder
            }
        );
        return (
            <div style={style} className={headClassName}>
                {this.setContent()}
            </div>
        );
    }
}