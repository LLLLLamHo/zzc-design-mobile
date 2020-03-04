import React, { PureComponent } from 'react';
import Icon from '../../Icon';
import { MorePhoneNumberPrefixProps, MorePhoneNumberPrefixState, CurrMorePhoneSelectItemInfo } from '../propsType';
import MoreSelect from '../../MoreSelect';

export default class PhoneNumberPrefix extends PureComponent<MorePhoneNumberPrefixProps, MorePhoneNumberPrefixState> {
    constructor(props) {
        super(props);
        this.state = {
            openMorePhonePrefix: false
        };
        this.openMorePhonePrefix = this.openMorePhonePrefix.bind(this);
        this.closeMorePhonePrefix = this.closeMorePhonePrefix.bind(this);
    }

    private prefixClass = 'zds-input-phone';

    openMorePhonePrefix() {
        this.setState({
            openMorePhonePrefix: true
        })
    }

    closeMorePhonePrefix() {
        this.setState({
            openMorePhonePrefix: false
        })
    }

    selectPrefix(item: CurrMorePhoneSelectItemInfo) {
        if (this.props.currPrefix && item.value == this.props.currPrefix.value) return;
        this.setState({
            openMorePhonePrefix: false
        });
        this.props.onChange(item);
    }

    render() {
        const { children, currPrefix, title, data } = this.props;
        const { openMorePhonePrefix } = this.state;
        return (
            <div className={`${this.prefixClass}-box`}>
                <div className={`${this.prefixClass}-prefix`} onClick={this.openMorePhonePrefix}>
                    {currPrefix && currPrefix.value}
                    <Icon type='arrows' style={{ width: '14px', height: '14px' }} />
                </div>
                {children}
                <MoreSelect
                    isShow={openMorePhonePrefix}
                    title={title}
                    onChange={(item) => {
                        this.selectPrefix(item)
                    }}
                    onClose={this.closeMorePhonePrefix}
                    data={data}
                />
                
            </div>
        )
    }
}