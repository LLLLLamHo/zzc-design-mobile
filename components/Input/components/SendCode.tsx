import React, { PureComponent } from 'react';
import classNames from 'classnames';
import config from '../../_util/config';
import { isFunction } from '../../_util/typeof';

import { InputCode, InputCodeState } from '../propsType';
let timeNUll: any = null;

export default class SendCode extends PureComponent<InputCode, InputCodeState>{
  constructor(props) {
    super(props)
    this.state = {
      sendText: this.props.sendText || '',
      isSend: true,//标识点击发送验证码是否可以发送
    }
    this.sendCodeClick = this.sendCodeClick.bind(this);
  }
  private input: HTMLInputElement | null;

  static defaultProps = {
    prefixCls: `${config.cls}-input`,
    className: '',
    sendText: '发送验证码',
    style: {},
    inputType: 'text',
    htmlType: 'text',
    lang: 'cn',
  }
  createNewProps (): any {
    let newProps = {
      ...this.props
    };
    delete newProps.prefixCls;
    delete newProps.className;
    // 清除一些托管到form中传入的的props
    delete newProps._zds_form_initValue;
    delete newProps.formOpt;
    delete newProps.formInputOnChange;
    delete newProps.formInputOnBlur;
    delete newProps.formDeleteId;
    delete newProps.formInputOnFocus;
    delete newProps.setFormItemId;

    delete newProps.sendText;

    return newProps;
  }
  getValue (e?: React.ChangeEvent<any>): string {
    return e ? e.target.value : this.input ? this.input.value : ''
  }

  createInput () {
    const { prefixCls, className, onChange, onBlur, onFocus, formInputOnChange, formInputOnBlur, formInputOnFocus, formOpt } = this.props;
    const inputClassName: string = classNames(
      prefixCls,
      className
    );

    const newProps = this.createNewProps();
    return (<input
      {...newProps}
      ref={(item) => { this.input = item; }}
      onChange={(e) => {
        if (formInputOnChange && isFunction(formInputOnChange)) {
          formInputOnChange(this.getValue(e), formOpt || null);
        } else if (onChange && isFunction(onChange)) {
          onChange(this.getValue(e));
        }
      }}
      onBlur={(e) => {

        if (formInputOnBlur && isFunction(formInputOnBlur)) {
          formInputOnBlur(formOpt || null);
        } else if (onBlur && isFunction(onBlur)) {
          onBlur(this.getValue(e));
        }
      }}
      onFocus={(e) => {
        if (formInputOnFocus && isFunction(formInputOnFocus)) {
          formInputOnFocus(formOpt || null);
        } else if (onFocus && isFunction(onFocus)) {
          onFocus(this.getValue(e));
        }
      }}
      type='text'
      className={inputClassName}
    />)
  }

  async sendCodeClick () {
    const { handlerSendCode } = this.props;
    const { isSend } = this.state;
    if (isSend && handlerSendCode && isFunction(handlerSendCode)) {
      let result = await handlerSendCode();
      if (result.start) {
        this.handlerSetTime(result.time);
      }
    }
  }
  // 倒计时
  handlerSetTime (time: number): void {
    // 重新发送(60秒)
    timeNUll = setInterval(() => {
      time -= 1;
      if (time <= 0) {
        time = 0;
        clearInterval(timeNUll)
      }
      this.handlerSetTimeText(time)
    }, 1000);
  }
  // 倒计时文字
  handlerSetTimeText (time: number): void {
    let { sendText, isSend } = this.state;
    if (time == 0) {
      sendText = '重新发送';
      isSend = true;
    } else {
      sendText = `重新发送(${time}秒)`;
      isSend = false;
    }
    this.setState({
      sendText,
      isSend,
    })
  }
  componentDidMount () {
    // 渲染完成后，需要通知form组件记录value，完成数据绑定
    const { id, value, _zds_form_initValue, setFormItemId, formOpt } = this.props;
    if (_zds_form_initValue && isFunction(_zds_form_initValue)) {
      _zds_form_initValue(id, value, formOpt);
    }
    if (setFormItemId && isFunction(setFormItemId)) {
      setFormItemId(id);
    }

  }
  render (): JSX.Element {
    const { sendText } = this.state;
    return (
      <React.Fragment>
        {this.createInput()}
        <div
          className={`${config.cls}-input-send-code`}
          onClick={this.sendCodeClick}
        >{sendText}</div>
      </React.Fragment>
    )
  }
}