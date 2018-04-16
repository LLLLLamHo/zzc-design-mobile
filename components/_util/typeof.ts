function isType( s: any, typeString: string ): boolean {
    return Object.prototype.toString.call( s ) === `[object ${typeString}]`;
}

export function isWindow( s: any ): boolean {
    return isType( s, 'Window' );
}

export function isObject( s: any ): boolean {
    return isType( s, 'Object' );
}
export function isArray( s: any ): boolean {
    return Array.isArray ? Array.isArray( s ) : isType( s, 'Array' );
}
export function isString( s: any ): boolean {
    return isType( s, 'String' );
}
export function isFunction( s: any ): boolean {
    return isType( s, 'Function' );
}
export function isNumber( s: any ): boolean {
    return isType( s, 'Number' );
}
export function isRegExp( s: any ): boolean {
    return isType( s, 'RegExp' );
}
export function isUndefined( s: any ): boolean {
    return isType( s, 'Undefined' );
}
