export interface TabsProps {
    prefixCls?: string,
    tabs: Array<tabs>,
    style?: React.CSSProperties,
    defaultIndex: number,
    index: number,
    onChange: Function,
    maxTabLength: number,
    tabDirection?: 'all' | 'vertical' | 'horizontal',
    animated?: boolean
    swipeable?: boolean
}

export interface TabBarProps {
    currIndex: number
    preIndex: number
    prefixCls?: string,
    tabs: Array<tabs>,
    style?: React.CSSProperties,
    onChange: Function,
    maxTabLength: number,
    tabDirection?: 'all' | 'vertical' | 'horizontal',
    animated?: boolean
}

export interface TabContentProps {
    tabDirection?: string
    currIndex?: number
    prefixCls?: string
    animated?: boolean
    swipeable?: boolean
    onChange: Function
    tabs: Array<tabs>
}

export declare type tabs = {
    title: string | JSX.Element
};