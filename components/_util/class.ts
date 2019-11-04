
export function hasClass( node: Element | any, className: string ): boolean {
    if ( !node ) return false;
    if ( node.classList ) {
        return node.classList.contains( className );
    }
    const originClass = node.className;
    return ` ${originClass} `.indexOf( ` ${className} ` ) > -1;
}

export function addClass( node: Element | any, className: string ): void {
    if ( node ) {
        if ( node.classList ) {
            node.classList.add( className );
        } else if ( !hasClass( node, className ) ) {
            node.className = `${node.className} ${className}`;
        }
    }
}

export function removeClass( node: Element | any, className: string ): void {
    if ( node ) {
        if ( node.classList ) {
            node.classList.remove( className );
        } else if ( hasClass( node, className ) ) {
            const originClass = node.className;
            node.className = ` ${originClass} `.replace( ` ${className} `, '' );
        }
    }
}
