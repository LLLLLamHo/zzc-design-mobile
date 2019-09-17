import React, { Component } from 'react';
import './index.scss';
import { ThemeContext, themes } from './themes';
import '../../../style/style.scss';

console.log( ThemeContext );

class Child extends Component {
    render () {
        console.log( this.props );
        return <div onClick={this.props.toggleTheme}>{this.props.theme.background}</div>;
    }
}

class Content extends Component {
    render () {
        return (
            <ThemeContext.Consumer>
                {theme => (
                    <Child {...theme} />
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        };
    }

    toggleTheme = () => {
        this.setState( state => ( {
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark
        } ) );
    };

    render () {
        return (
            <div className='zzc-demo'>
                <ThemeContext.Provider value={this.state}>
                    <Content />
                </ThemeContext.Provider>
            </div>
        );
    }
}