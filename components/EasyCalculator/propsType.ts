export interface EasyCalculatorProps {
    prefixCls?: string,
    className?: string,
    style?: object,
    step?: number,
    min?: number,
    max?: number,
    precision?: number,
    value?: number | string,
    defaultValue?: number | string,
    onChange?: (val: number | string) => void
}
