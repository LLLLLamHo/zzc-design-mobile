import React, { Component } from 'react';
import Header from '../Header';

export default class extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <Header />
                <h1>123</h1>
            </div>
        );
    }
}