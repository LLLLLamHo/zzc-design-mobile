export interface TabsProps {
    prefixCls?: string,
    tabs: Array<tabs>,
    style?: React.CSSProperties,
    defaultIndex: number,
    index: number,
    onChange: Function,
    maxTabLength: number,
    tabDirection?: 'all' | 'vertical' | 'horizontal',
    tabUnderlineAnimation?: boolean
}

export interface TabBarProps {
    currIndex: number
    preIndex: number
    prefixCls?: string,
    tabs: Array<tabs>,
    style?: React.CSSProperties,
    onChange: Function,
    isTabVertical: Function,
    maxTabLength: number,
    tabDirection?: 'all' | 'vertical' | 'horizontal',
    tabUnderlineAnimation?: boolean
}

export interface tabs {
    title: string | JSX.Element
}