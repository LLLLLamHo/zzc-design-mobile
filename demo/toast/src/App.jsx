import React, { Component } from 'react';
import './index.scss';
import Toast from 'toast';

export default class App extends Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div>
                <h1>toast</h1>
                <Toast />
                <svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">
                    <title>ic_angle</title>
                    <path d="M3,57H57V3Zm29.9-6.71-8.13-8.13L26.89,40l6,6,15.2-15.2L50.23,33Z" transform="translate(-3 -3)" />
                </svg>
            </div>
        );
    }
}