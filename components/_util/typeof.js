function isType( s, typeString ) {
    return Object.toString.call( s ) === `[object ${typeString}]`;
}

export function isWindow( s ) {
    return isType( s, 'Window' );
}

export function isObject( s ) {
    return isType( s, 'Object' );
}
export function isArray( s ) {
    return Array.isArray ? Array.isArray( s ) : isType( s, 'Array' );
}
export function isString( s ) {
    return isType( s, 'String' );
}
export function isFunction( s ) {
    return isType( s, 'Function' );
}
export function isNumber( s ) {
    return isType( s, 'Number' );
}
export function isRegExp( s ) {
    return isType( s, 'RegExp' );
}
export function isUndefined( s ) {
    return isType( s, 'Undefined' );
}
