import React, { PureComponent } from 'react';
import Icon from '../../Icon';
import { PhoneNumberPrefixProps, PhoneNumberPrefixState, ChangePhonePrefixHandleProps } from '../propsType';
import Card from '../../Card';
import Popup from '../../Popup';
import Alert from '../../Alert';
import classnames from 'classnames';


export default class PhoneNumberPrefix extends PureComponent<PhoneNumberPrefixProps, PhoneNumberPrefixState> {
    constructor(props) {
        super(props);
        this.state = {
            openMorePhonePrefix: false
        };
        this.openMorePhonePrefix = this.openMorePhonePrefix.bind(this);
    }

    private prefixClass = 'zds-input-phone';

    openMorePhonePrefix() {
        this.setState({
            openMorePhonePrefix: true
        })
    }

    selectPrefix(item: ChangePhonePrefixHandleProps) {
        if ( item.id == this.props.currPrefix ) return;
        this.setState({
            openMorePhonePrefix: false
        });
        if ( item.id !== 'other' ) {
            this.props.onChange(item);
        } else {
            this.showAlert();
        }
    }

    showAlert () {
        const { lang } = this.props;
        let codeInput;
        Alert( {
            title: lang == 'cn' ? '输入其它国家区号' : '輸入其它國家區號',
            content:(
                <div className={`${this.prefixClass}-code-input-box`}>
                        <span className={`${this.prefixClass}-code-input-box-add`}>+</span>
                        <input
                            className={`${this.prefixClass}-code-input-box-input`}
                            pattern='\\d*'
                            onKeyUp={(e) => { 
                                codeInput.value = e.currentTarget.value.replace(/[+]/g, '') 
                            }}
                            ref={el => codeInput = el} />
                    </div>
            ),
            buttons: [
                {
                    text: lang == 'cn' ? '取消' : '取消',
                    onPress: () => {
                    },
                    props: {
                        type: 'special',
                        style: { color: '#696E7C', border: 'none' }
                    }
                },
                {
                    text: lang == 'cn' ? '确认' : '確認',
                    onPress: () => {
                        codeInput.value != '' && this.props.onChange({
                            id: 'other',
                            detail: `+${codeInput.value}`
                        });
                    },
                    props: {
                        type: 'special',
                        style: { color: 'rgba(40, 113, 247, 1)', border: 'none' }
                    }

                }
            ]
        } );
    }

    render() {
        const { children, currPrefix, phonePrefixList, lang } = this.props;
        const { openMorePhonePrefix } = this.state;
        return (
            <div className={`${this.prefixClass}-box`}>
                <div className={`${this.prefixClass}-prefix`} onClick={this.openMorePhonePrefix}>
                    {currPrefix}
                    <Icon type='arrows' style={{ width: '14px', height: '14px' }} />
                </div>
                {children}
                <Popup
                    maskClose
                    visible={openMorePhonePrefix}
                    onClose={() => {
                        this.setState({
                            openMorePhonePrefix: false
                        });
                    }}
                >
                    <Card>
                        <Card.Header className={`${this.prefixClass}-popup-header`} title={lang == 'cn' ? '请选择' : '請選擇'} />
                        {
                            phonePrefixList && phonePrefixList.map((item) => {
                                const className = classnames(`${this.prefixClass}-popup-prefix-item`, { 'active': item.id == currPrefix })
                                return (
                                    <Card.Body key={item.id}>
                                        <div className={className} onClick={() => {this.selectPrefix(item)}}>
                                            <p>{item.detail}</p>
                                            {item.id == currPrefix && <Icon size='sm' type='success_fill' />}
                                        </div>
                                    </Card.Body>
                                );
                            })
                        }
                    </Card>
                </Popup>
            </div>
        )
    }
}