import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/index';

import './index.scss';

class App extends React.Component {
    render() {
        return (
            <div className='zzc-demo-box'>
                <Header />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);