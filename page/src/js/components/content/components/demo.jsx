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

    getDemoBox ( div ) {
        this.DemoBox = div;
    }

    getFirame ( iframe ) {
        this.iframe = iframe;
    }

    render () {
        const { index } = this.props;

        return (
            <div className='zzc-demo-box'>
                <div className='markdown-body'>
                    <h2 id='modal'>在线演示</h2>
                </div>
                <div className='zzc-demo-box-flex'>
                    <div className='zzc-demo-box-content' ref={( div ) => { this.getDemoBox( div ); }}>
                        <div className='zzc-demo-box-header'>
                            <div className='zzc-demo-box-header-bg' />
                            <div className='zzc-demo-box-search-box'>
                                <p>{`https://lllllamho.github.io/zzc-design-mobile/demo/dist/html/${index}.html`}</p>
                            </div>
                        </div>
                        <div className='zzc-demo-box-body'>
                            <iframe ref={( iframe ) => { this.getFirame( iframe ); }} title='demo-iframe' src={`./demo/dist/html/${index}.html`} />

                        </div>
                    </div>
                    <div className='zzc-demo-code-img'>
                        <h2>扫一下</h2>
                        <img alt='在线二维码' src={`http://qr.liantu.com/api.php?w=200&m=10&text=https://lllllamho.github.io/zzc-design-mobile/demo/dist/html/${index}.html`} />
                    </div>
                </div>
            </div>
        );
    }
}