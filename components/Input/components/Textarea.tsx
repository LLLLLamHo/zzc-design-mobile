import classNames from "classnames"
import React, { PureComponent } from "react"
import { TextareaProps, TextareaState, lengthCtrProps } from '../propsType'
import config from '../../_util/config';
import { isFunction } from '../../_util/typeof';

function noop(): void { }
// 匹配字母数字 与 字符
const characterMatch: RegExp = /[A-Za-z0-9]|[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g

function countCharacter (text:string = ""):number {
    const result = text.match(characterMatch)
    return result ? result.length : 0
}

function countText (text:string = ""):number {    
    const result: string = text.replace(characterMatch, '')
    return result ? result.length : 0
}

function fixControlledValue(value?: string): string {
    // Object.prototype.toString() == '[Object array]'

    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

class Textarea extends PureComponent<TextareaProps, TextareaState> {
    textareaRef: any;

    constructor(props: TextareaProps) {
        super(props);
        this.state = {
            focus: false,
            value: props.value || props.defaultValue || ''
        }
    }

    static defaultProps = {
        prefixCls: `${config.cls}`,
        className: '',
        style: {},        
        //clear: false,
        //editable: true,        
        disabled: false,
        autoHeight: false,
        placeholder: '',
        rows: 1,
        //onFocus: noop,
        //onChange: noop,
        onBlur: noop,
    };
    

    onFocus = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
        const { formInputOnFocus, formOpt, onFocus } = this.props
        this.setState({
            focus: true,
        })
        this.textareaRef.focus();
        if (formInputOnFocus && isFunction(formInputOnFocus)) {
            formInputOnFocus( formOpt || null);
        } else if (onFocus && isFunction(onFocus)) {
            const value = e.currentTarget.value
            onFocus(value, e);
        }
    }

    onBlur = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
        this.setState({
            focus: false
        });
        const { formInputOnBlur, formOpt, onBlur } = this.props;
        const value:string = e.currentTarget.value
        
        if (formInputOnBlur && isFunction(formInputOnBlur)) {
            formInputOnBlur( formOpt || null);
        } else if (onBlur && isFunction(onBlur)) {
            onBlur && onBlur(value)
        }
    }

    onChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
        const { formInputOnChange, formOpt, onChange } = this.props
        const value = e.target.value        

        if( 'value' in this.props ) { // textarea 会认为是写死
            this.setState({ value: this.props.value });
        }
        else{
            this.setState({ value });
        }
        
        if (formInputOnChange && isFunction(formInputOnChange)) {
            formInputOnChange(e.target.value, formOpt || null);
        } else if (onChange && isFunction(onChange)) {
            onChange(value, e);
        }
        this.componentDidUpdate()
    }

    reAlignHeight():void {
        const textareaDom = this.textareaRef        
        textareaDom.style.height = '' // 字数减少时能自动减小高度        
        textareaDom.style.height = `${textareaDom.scrollHeight}px`
    }

    componentWillReceiveProps(nextProps: TextareaProps):void {
        if ('value' in nextProps) {
            this.setState({
                value: fixControlledValue(nextProps.value),
            });
        }
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
            this.reAlignHeight()
        }
    }    

    componentDidUpdate() {
        // 自动撑高 且 用户是在输入
        if (this.props.autoHeight && this.state.focus) {
            this.reAlignHeight()
        }
    }

    render(): JSX.Element {
        let {value} = this.state
        value = value || ''
        const { 
            className, 
            prefixCls, 
            count, 
            disabled, 
            style, 
            placeholder, 
            autoHeight ,
            onBlur,
            onChange,
            onFocus,             
            maxLength,
            ...otherProps 
        } = this.props        
        
        const hasCount: boolean = count! > 0;
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
        delete newProps.formInputOnFocus;
        delete newProps.formOpt;
        delete newProps.setFormItemId;
        
        let lengthCrtProps:lengthCtrProps = {};
        let countLength:number = 0;
        if( hasCount ) {            
            // 计算 maxlength 与显示的 可输入数值                        
            const charLength =  countCharacter(value) ;
            const countInt = countText(value);
            const char2IntLength = Math.ceil(charLength / 2);
            // count一定是有值的                     
            lengthCrtProps.maxLength = count + char2IntLength ;
            countLength = count - countInt - Math.floor(charLength / 2) ;               
            console.log(count, countInt, charLength) ;    
            console.log("maxLength:", lengthCrtProps.maxLength, "countLength:", countLength) ;   
            // 防止用户过度输入过多字符
            if( countLength < 0 ) {
                this.setState({
                    value: value.substr(0, lengthCrtProps.maxLength + countLength),                    
                })
                lengthCrtProps.maxLength = lengthCrtProps.maxLength + countLength
            }
            
        }    
        return (
            <div className={wraCls}>
                <textarea
                    { ...lengthCrtProps }
                    {...otherProps}
                    ref={el => (this.textareaRef = el)}
                    readOnly={disabled}
                    style={style}                    
                    onBlur={(e): void => this.onBlur(e)}
                    onChange={ (e)=> this.onChange(e) }
                    onFocus={ (e)=> this.onFocus(e) }
                    placeholder={placeholder}                    
                />               
                {hasCount && countLength <= 10 && 
                    (
                        <p className={`${textareaPrefix}-count`} >最多还可以输入{countLength}个字</p>
                    )
                }
                
            </div>

        )
    }
}

export default Textarea