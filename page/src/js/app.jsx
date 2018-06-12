import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/index';
import config from '../../../package.json';
import componentList from '../../config/config.json';
import './index.scss';

console.log( componentList );

class App extends React.Component {
    render() {
        return (
            <div className='zzc-demo-box'>
                <Header data={config} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);