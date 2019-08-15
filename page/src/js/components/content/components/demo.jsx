import React, {
    Component
} from 'react';

export default class DemoBox extends Component {
    static DemoBox = null;

    // componentDidMount() {
    //     const _this = this;
    //     window.onscroll = function () {
    //         if ( _this.DemoBox ) {
    //             if ( document.querySelector( 'html' ).scrollTop > 120 ) {
    //                 _this.DemoBox.className = 'zzc-demo-box-content flex';
    //             } else {
    //                 _this.DemoBox.className = 'zzc-demo-box-content';
    //             }
    //         }
    //     };
    // }

    getDemoBox( div ) {
        this.DemoBox = div;
    }

    getFirame( iframe ) {
        this.iframe = iframe;
    }

    render() {
        const { index } = this.props;

        return (
            <div className='zzc-demo-box'>
                <div className='markdown-body'>
                    <h2 id='modal'>在线演示</h2>
                </div>
                <div className='zzc-demo-box-content' ref={( div ) => { this.getDemoBox( div ); }}>
                    <div className='zzc-demo-box-header'>
                        <div className='zzc-demo-box-header-bg' />
                        <div className='zzc-demo-box-search-box'>
                            <p>{`https://lllllamho.github.io/zzc-design-mobile/`}</p>
                        </div>
                    </div>
                    <div className='zzc-demo-box-body'>
                        <iframe ref={( iframe ) => { this.getFirame( iframe ); }} title='demo-iframe' src={`./demo/dist/html/${index.toLowerCase()}.html`} />
                    </div>
                </div>
            </div>
        );
    }
}