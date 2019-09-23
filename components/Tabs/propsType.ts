export interface TabsProps {
    prefixCls?: string,
    className?: string
    tabBarPosition?: string,
    tabs: Array<tabs>,
    style?: React.CSSProperties,
    tabBarUnderlineStyle?: React.CSSProperties,
    defaultIndex: number,
    index: number,
    onChange: Function,
    maxTabLength: number,
    swipeDirection?: 'vertical' | 'horizontal',
    animated?: boolean
    swipeable?: boolean
    isOpenTabBarScroll?: boolean
    isOpenTabContentScroll?: boolean
}

export interface TabBarProps {
    tabBarPosition?: string
    currIndex: number
    preIndex: number
    prefixCls?: string,
    tabs: Array<tabs>,
    tabBarUnderlineStyle?: React.CSSProperties,
    onChange: Function,
    maxTabLength: number,
    tabDirection?: 'vertical' | 'horizontal',
    animated?: boolean
    isOpenTabBarScroll?: boolean
}

export interface TabContentProps {
    swipeDirection?: 'vertical' | 'horizontal',
    currIndex?: number
    prefixCls?: string
    animated?: boolean
    swipeable?: boolean
    isOpenTabContentScroll?: boolean
    onChange: Function
    tabs: Array<tabs>
}

export declare type tabs = {
    title: string | JSX.Element
};