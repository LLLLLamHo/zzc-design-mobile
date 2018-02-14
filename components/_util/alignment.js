

import { isUndefined } from './typeof';

export default class Alignment {
    constructor () {
        this.list = [];
    }
    save ( data ) {
        this.list.push( data );
    }
    check () {
        return this.list;
    }
    get ( index ) {
        if ( index === 'first' ) {
            return this.list.shift();
        } else if ( index === 'last' ) {
            return this.list.pop();
        } else if ( !isUndefined( this.list[index] ) ) {
            const result = this.list[index];
            this.list.splice( index, 1 );
            return result;
        }
        return undefined;
    }
}