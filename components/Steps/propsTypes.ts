export interface StepsProps {
    current: number,
    direction?: 'horizontal' | 'vertical';
    className?: string,
    alignCenter: boolean,
    status: string,
    style?: React.CSSProperties
}

export interface StepProps {
    title?: React.ReactNode,
    description?: React.ReactNode,
    icon?: React.ReactNode,
    className?: string,
    active: boolean,
    alignCenter: boolean,
    status: string,
    tag?: React.ReactNode | string,
    style?: React.CSSProperties
}