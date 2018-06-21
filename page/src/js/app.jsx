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
            star: null,
            currTabs: hash != '' ? hash.split( '#' )[1] : 'index'
        };
    }

    componentDidMount () {
        const _this = this;
        let xmlhttp;
        if ( window.XMLHttpRequest ) {
            //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
            xmlhttp = new XMLHttpRequest();
        } else {
            // IE6, IE5 浏览器执行代码
            xmlhttp = new ActiveXObject( 'Microsoft.XMLHTTP' );
        }
        xmlhttp.onreadystatechange = function () {
            if ( xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
                const data = JSON.parse( xmlhttp.responseText );
                _this.setState( {
                    star: data.watchers
                } );
                document.querySelector( '.gh-count' ).innerHTML = data.watchers;
                document.querySelector( '.gh-count' ).style.display = 'block';
            }
        };
        xmlhttp.open( 'GET', 'https://api.github.com/repos/lllllamho/zzc-design-mobile', true );
        xmlhttp.send();
    }

    componentDidUpdate() {
        if ( this.state.currTabs === 'index' ) {
            document.querySelector( '.gh-count' ).innerHTML = this.state.star;
            document.querySelector( '.gh-count' ).style.display = 'block';
        }
    }

    changeTab ( data ) {
        this.setState( {
            currTabs: data.key
        }, () => {
            window.history.pushState( {}, data.key, `${window.location.pathname}#${data.key}` );
        } );
    }

    render () {
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