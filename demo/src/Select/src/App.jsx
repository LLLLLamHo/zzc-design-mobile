import React, { PureComponent } from 'react';
import { Select, Card2, Icon } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends PureComponent {
    constructor( props ) {
        super( props );
        this.state = {
            showSelect1: false,
            select1: null,
            data1: [
                {
                    text: '中国驾照',
                    type: 'active',
                    value: 'code1'
                },
                {
                    text: '中国驾照+国际驾照翻译认证件',
                    type: 'normal',
                    value: 'code2'
                },
                {
                    text: '中国驾照+英文公证件',
                    type: 'normal',
                    value: 'code3'
                },
                {
                    text: '香港驾照',
                    type: 'normal',
                    value: 'code4'
                },
                {
                    text: '台湾驾照',
                    type: 'normal',
                    value: 'code5'
                },
                {
                    text: '其他驾照',
                    type: 'normal',
                    value: 'code6'
                },
                {
                    text: '中国驾照+车行翻译件 (不支持)',
                    type: 'disabled',
                    value: 'code7'
                }
            ],
            showSelect2: false,
            select2: null,
            data2: [
                {
                    text: '中国驾照',
                    type: 'active',
                    value: 'code1'
                },
                {
                    text: '中国驾照+国际驾照翻译认证件',
                    type: 'normal',
                    value: 'code2'
                },
                {
                    text: '中国驾照+英文公证件',
                    type: 'normal',
                    value: 'code3'
                },
                {
                    text: '香港驾照',
                    type: 'normal',
                    value: 'code4'
                },
                {
                    text: '台湾驾照',
                    type: 'normal',
                    value: 'code5'
                },
                {
                    text: '其他驾照',
                    type: 'normal',
                    value: 'code6'
                },
                {
                    text: '中国驾照+车行翻译件 (不支持)',
                    type: 'disabled',
                    value: 'code7'
                }
            ]
        };
        this.toggleSelect1 = this.toggleSelect1.bind( this );
    }

    toggleSelect1 ( isShow ) {
        this.setState( {
            showSelect1: isShow
        } );
    }

    changeData1 ( index ) {
        const { data1 } = this.state;
        let select1 = null;
        for ( let i = 0; i < data1.length; i++ ) {
            if ( i == index ) {
                data1[i].type === 'active';
                select1 = data1[i].text;
            } else if ( data1[i].type != 'disabled' ) {
                data1[i].type === 'normal';
            }
        }
        this.setState( {
            data1: [].concat( data1 ),
            select1
        } );
    }

    toggleSelect2 ( isShow ) {
        this.setState( {
            showSelect2: isShow
        } );
    }

    changeData2 ( index ) {
        const { data2 } = this.state;
        let select2 = null;
        for ( let i = 0; i < data2.length; i++ ) {
            if ( i == index ) {
                data2[i].type === 'active';
                select2 = data2[i].text;
            } else if ( data2[i].type != 'disabled' ) {
                data2[i].type === 'normal';
            }
        }
        this.setState( {
            data2: [].concat( data2 ),
            select2
        } );
    }

    render () {
        const { showSelect1, showSelect2, select1, select2, data1, data2 } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>List 列表</h1>
                    <h2>列表布局，主要分为List组件和List.Item组件配合使用</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <h5>基本使用</h5>
                    <Card2>
                        <Card2.Header
                            title={<p>点击选择</p>}
                            extra={<Icon type='arrows' style={{ width: '20px', height: '30px' }} />}
                            onClick={() => {
                                this.toggleSelect1( true );
                            }}
                        >
                            {select1 && <p>{select1}</p>}
                        </Card2.Header>
                    </Card2>
                    <Select
                        isShow={showSelect1}
                        title='驾照类型'
                        onClose={( index ) => {
                            this.changeData1( index );
                            this.toggleSelect1( false );
                        }}
                        data={data1}
                    />
                </div>
                <div className='zzc-demo-body full'>
                    <h5>选择完后不自动关闭</h5>
                    <Card2>
                        <Card2.Header
                            title={<p>选择香港驾照才关闭</p>}
                            extra={<Icon type='arrows' style={{ width: '20px', height: '30px' }} />}
                            onClick={() => {
                                this.toggleSelect2( true );
                            }}
                        >
                            {select2 && <p>{select2}</p>}
                        </Card2.Header>
                    </Card2>
                    <Select
                        autoClose={false}
                        onChange={( data ) => {
                            if ( data.value == 'code4' ) {
                                this.toggleSelect2( false );
                            }
                        }}
                        isShow={showSelect2}
                        title='驾照类型'
                        onClose={( index ) => {
                            this.changeData2( index );
                            this.toggleSelect2( false );
                        }}
                        data={data2}
                    />
                </div>
            </div>
        );
    }
}