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
                { title: 'tab 3' }
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
            tabs3: [
                { title: 'tab 1' },
                { title: 'tab 2' },
                { title: 'tab 3' },
                { title: 'tab 4' },
                { title: 'tab 5' },
                { title: 'tab 6' },
                { title: 'tab 7' }
            ],
            tabs4: [
                { title: 'tab 1' },
                { title: 'tab 2' },
                { title: 'tab 3' },
                { title: 'tab 4' },
                { title: 'tab 5' },
                { title: 'tab 6' },
                { title: 'tab 7' }
            ],
            tabsIndex1: 0,
            tabsIndex2: 0,
            tabsIndex3: 0,
            tabsIndex4: 0
        };
    }

    renderContent(tabs) {
        return tabs.map( ( item, key ) => (
            <div className='item-content' key={key}>
                <p>this is {item.title} content</p>
            </div> ) );
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Tabs 标签页</h1>
                    <h2>提供多个标签页面切换功能</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <h1 className='zzc-component-title'>基本用法</h1>
                    <Tabs
                        maxTabLength={3}    
                        index={this.state.tabsIndex1}
                        tabs={this.state.tabs1}
                        onChange={( key ) => {
                            this.setState( {
                                tabsIndex1: key
                            } );
                        }}
                    >
                        {this.renderContent( this.state.tabs1 )}
                    </Tabs>
                </div>
                <div className='zzc-demo-body full'>
                    <h1 className='zzc-component-title'>禁用动画</h1>
                    <Tabs
                        animated={false}
                        maxTabLength={3}
                        index={this.state.tabsIndex2}
                        tabs={this.state.tabs2}
                        onChange={( key ) => {
                            this.setState( {
                                tabsIndex2: key
                            } );
                        }}
                    >
                        {this.renderContent( this.state.tabs2 )}
                    </Tabs>
                </div>
                <div className='zzc-demo-body full'>
                    <h1 className='zzc-component-title'>自定义显示数量，超出滑动，受控的tabs</h1>
                    <Tabs
                        maxTabLength={3}    
                        index={this.state.tabsIndex3}
                        tabs={this.state.tabs3}
                        onChange={( key ) => {
                            this.setState( {
                                tabsIndex2: key
                            } );
                        }}
                    >
                        {this.renderContent( this.state.tabs3 )}
                    </Tabs>
                </div>
                <div className='zzc-demo-body full'>
                    <h1 className='zzc-component-title'>自定义显示数量，超出滑动，非受控的tabs</h1>
                    <Tabs
                        maxTabLength={3}    
                        defaultIndex={this.state.tabsIndex4}
                        tabs={this.state.tabs4}
                        onChange={( key ) => {
                            // console.log( 123 );
                        }}
                    >
                        {this.renderContent( this.state.tabs4 )}
                    </Tabs>
                </div>
            </div>
        );
    }
}