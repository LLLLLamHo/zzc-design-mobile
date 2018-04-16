

import { isUndefined } from './typeof';

export default class Alignment {
    list: Array<any>
    constructor () {
        this.list = [];
    }
    save ( data: any ): void {
        this.list.push( data );
    }
    check (): any {
        return this.list;
    }
    get ( index: any ): void {
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