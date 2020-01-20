import classNames from "classnames"
import React, { PureComponent } from "react"
import { TextareaProps, TextareaState } from '../propsType'
import config from '../../_util/config';
import { isFunction } from '../../_util/typeof';

function noop(): void { }
function fixControlledValue(value?: string) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }

class Textarea extends PureComponent<TextareaProps, TextareaState> {
    private textareaRef: any;
    private isFoucs: boolean = false;
    constructor(props: TextareaProps) {
        super(props);  
        this.state = {
            value: props.defaultValue || props.value
        }      
    }

    static defaultProps = {
        prefixCls: `${config.cls}`,
        className: '',
        style: {},             
        disabled: false,
        autoHeight: false,
        placeholder: '',        
        maxLength: Infinity,
        onBlur: noop,
        onChange: noop,
        onFocus: noop,
    };

    componentWillReceiveProps(nextProps: TextareaProps): void {
        if('value' in  nextProps) {
            this.setState({
                value: fixControlledValue(nextProps.value),
              });
        }
    }

    componentWillUnmount(): void {
        if ( this.props.formDeleteId && isFunction(this.props.formDeleteId) ) {
            this.props.formDeleteId(this.props.id);
        }
    }
    

    onFocus = (e): void => {
        const { formInputOnFocus, formOpt, onFocus } = this.props;
        this.isFoucs = true;
        this.textareaRef.focus();
        if (formInputOnFocus && isFunction(formInputOnFocus)) {
            formInputOnFocus( formOpt || null);
        } else if (onFocus && isFunction(onFocus)) {            
            onFocus(e);
        }
    }

    onBlur = (e): void => {
        this.isFoucs = false
        const { formInputOnBlur, formOpt, onBlur } = this.props;        
        
        if (formInputOnBlur && isFunction(formInputOnBlur)) {
            formInputOnBlur( formOpt || null);
        } else if (onBlur && isFunction(onBlur)) {
            onBlur && onBlur(e);
        }
    }

    onChange = (e):void => {
        const { formInputOnChange, formOpt, onChange } = this.props
        const value = e.target.value                
        if (formInputOnChange && isFunction(formInputOnChange)) {
            formInputOnChange(e.target.value, formOpt || null);

        } else if (onChange && isFunction(onChange)) {
            onChange(e.target.value);
            if(!('value' in this.props)) {
                this.setState({
                    value
                })
            }
        }
        this.componentDidUpdate();            
    }

    reAlignHeight():void {
        const textareaDom = this.textareaRef ;   
        textareaDom.style.height = ''; // 字数减少时能自动减小高度        
        textareaDom.style.height = `${textareaDom.scrollHeight}px`;
    }

    componentDidMount() {
        // 渲染完成后，需要通知form组件记录value，完成数据绑定
        const { id, value, _zds_form_initValue, setFormItemId, formOpt } = this.props;
        if (_zds_form_initValue && isFunction(_zds_form_initValue)) {
            _zds_form_initValue(id, value, formOpt);
        }
        if (setFormItemId && isFunction(setFormItemId)) {
            setFormItemId(id);
        }
        if (this.props.autoHeight) {
            this.reAlignHeight();
        }
    }    

    componentDidUpdate() {
        // 自动撑高 且 用户是在输入
        if (this.props.autoHeight && this.isFoucs) {
            this.reAlignHeight()
        }
    }

    render(): JSX.Element {
        let {value} = this.state
        const { 
            className, 
            prefixCls, 
            count, 
            disabled, 
            style, 
            placeholder, 
            autoHeight ,      
            maxLength               
        } = this.props        
        
        const hasCount: boolean = count! > 0;
        const textareaMaxLength:number = count || maxLength || Infinity;
        const textareaPrefix = `${prefixCls}-input-textarea`;
        const wraCls: string = classNames(className,
            textareaPrefix,
            {
                [`${textareaPrefix}-has-count`]: !!hasCount,
                [`${textareaPrefix}-disabled`]: !!disabled,
                [`${textareaPrefix}-auto-height`]: !!autoHeight
            }
        )
        
        const newProps = {
            ...this.props
        };

        delete newProps.prefixCls;
        delete newProps.className;
        delete newProps._zds_form_initValue;
        delete newProps.formInputOnChange;
        delete newProps.formInputOnBlur;
        delete newProps.formDeleteId;
        delete newProps.formInputOnFocus;
        delete newProps.formOpt;
        delete newProps.setFormItemId;                  
        delete newProps.value
        delete newProps.autoHeight
        delete newProps.defaultValue
        let countLeftLength:number = 0
        if( hasCount ) {
            value = value || ''
            // 计算剩余可输入长度
            countLeftLength = count - value.length
        }
        return (
            <div className={wraCls}>
                <textarea                    
                    {...newProps}                    
                    ref={ (el):void => {this.textareaRef = el}}
                    readOnly={disabled}
                    value= {value}
                    style={style}                                        
                    onBlur={(e) => this.onBlur(e)}
                    onChange={ (e)=> this.onChange(e) }
                    onFocus={ (e)=> this.onFocus(e) }
                    placeholder={placeholder}    
                    maxLength = {textareaMaxLength}                      
                />               
                {hasCount && countLeftLength <= 10 && 
                    (
                        <p className={`${textareaPrefix}-count`} id="visible-count" >最多还可以输入{countLeftLength}个字</p>
                    )
                }                
            </div>

        )
    }
}

export default Textarea