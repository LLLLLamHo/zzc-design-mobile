export interface TouchFeedbackProps {
    activeStyle?: React.CSSProperties
    activeClassName?: string,
    disabled?: boolean,
    onTouchStart?: Function;
    onTouchEnd?: Function;
    onTouchCancel?: Function;
    onMouseDown?: Function;
    onMouseUp?: Function;
    onMouseLeave?: Function;
}