import React, { Component } from 'react';
import '../style/index';
import './index.scss';

export default class extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            title: '1123123132'
        };
    }
    render() {
        return (
            <div className="toast-box">
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}