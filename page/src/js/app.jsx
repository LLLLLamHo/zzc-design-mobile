import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'github-markdown-css';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/atom-one-light.css';
import Header from './components/header/index';
import Content from './components/content/index';
import config from '../../../package.json';
import pageData from '../../config/config.json';
import './index.scss';

class App extends React.Component {
    constructor( props ) {
        super( props );
        const hash = window.location.hash;
        this.state = {
            currTabs: hash != '' ? hash.split( '#' )[1] : 'index'
        };
    }

    changeTab( data ) {
        this.setState( {
            currTabs: data.key
        }, () => {
            window.history.pushState( {}, data.key, `${window.location.pathname}#${data.key}` );
        } );
    }

    render() {
        return (
            <div className='zzc-demo-box'>
                <Header data={config} />
                <Content
                    changeTab={( key ) => { this.changeTab( key ); }}
                    index={this.state.currTabs}
                    data={pageData}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);