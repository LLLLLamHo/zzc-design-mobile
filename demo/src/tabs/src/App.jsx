import React, {Component} from 'react';
import {Tabs} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            tabs1: [
                { title: 'tab 1' },
                { title: 'tab 2' },
                { title: 'tab 3' },
                { title: 'tab 4' },
                { title: 'tab 5' }
            ],
            tabs2: [
                { title: 'tab 1' },
                { title: 'tab 2' },
                { title: 'tab 3' },
                { title: 'tab 4' },
                { title: 'tab 5' },
                { title: 'tab 6' },
                { title: 'tab 7' }
            ],
            tabsIndex: 0,
            tabsIndex2: 0
        };
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Tabs 标签页</h1>
                    <h2>提供多个标签页面切换功能</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <div className='zzc-demo-header'>
                        <h1 className='zzc-demo-title'>受控的tabs</h1>
                    </div>
                    <Tabs
                        maxTabLength={3}    
                        index={this.state.tabsIndex}
                        tabs={this.state.tabs1}
                        onChange={( key ) => {
                            this.setState( {
                                tabsIndex: key
                            } );
                        }}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <div className='zzc-demo-header'>
                        <h1 className='zzc-demo-title'>非受控的tabs</h1>
                    </div>
                    <Tabs
                        maxTabLength={4}    
                        defaultIndex={this.state.tabsIndex2}
                        tabs={this.state.tabs2}
                        onChange={( key ) => {
                            // console.log( 123 );
                        }}
                    />
                </div>
            </div>
        );
    }
}