export interface InputNumberProps {
    step?: number,
    min?: number,
    max?: number,
    precision?: number,
    value?: number | string,
    defaultValue?: number | string,
    onChange?: (val: number | string) => void
}
