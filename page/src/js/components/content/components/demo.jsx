import React, {
    Component
} from 'react';
import { Button } from 'antd';

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

    submit() {
        document.getElementById('codepen-form').submit();
    }

    render () {
        const { index, data } = this.props;
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
                        {data && data.codepen && <form id='codepen-form' action='https://codepen.io/pen/define' method='POST' target='_blank'>
                            <input type='hidden' name='data' value={JSON.stringify( data.codepen )} />
                            <Button style={{ width: '100%', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} type='primary' htmlType='submit'>
                                <svg style={{display: 'block', marginRight: '5px'}} width='15px' height='15px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                                    <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                                        <g id='ç»ä»¶åé¡µæ ·å¼' transform='translate(-1121.000000, -1500.000000)' fillRule='nonzero' fill='#fff'>
                                            <g id='codepen' transform='translate(1121.000000, 1500.000000)'>
                                                <path d='M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z' id='Shape'/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            在线编辑
                            </Button>
                        </form>}
                    </div>
                    <div className='zzc-demo-online-box' onClick={this.submit}>
                        <svg width='30px' height='30px' viewBox='0 0 15 15' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                            <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                                <g id='ç»ä»¶åé¡µæ ·å¼' transform='translate(-1121.000000, -1500.000000)' fillRule='nonzero' fill='#4E7CDD'>
                                    <g id='codepen' transform='translate(1121.000000, 1500.000000)'>
                                        <path d='M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z' id='Shape'/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p>在线demo</p>
                    </div>
                </div>
            </div>
        );
    }
}