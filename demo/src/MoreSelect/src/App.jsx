import React, { PureComponent } from 'react';
import { MoreSelect, Card2, Icon } from 'zzc-design-mobile';
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
                    title: '常用区号',
                    list: [
                        {
                            text: '中国大陆+(86)',
                            type: 'active',
                            value: 'code1'
                        },
                        {
                            text: '香港(中国) +852',
                            type: 'normal',
                            value: 'code2'
                        },
                        {
                            text: '台湾(中国) +852',
                            type: 'normal',
                            value: 'code3'
                        },
                        {
                            text: '澳门(中国) +852',
                            type: 'normal',
                            value: 'code4'
                        }
                    ]
                },
                {
                    title: 'A',
                    list: [
                        {
                            text: '爱尔兰 +852',
                            type: 'normal',
                            value: 'code5'
                        },
                        {
                            text: '阿根廷 +852',
                            type: 'normal',
                            value: 'code6'
                        },
                        {
                            text: '澳大利亚 +852',
                            type: 'normal',
                            value: 'code7'
                        },
                        {
                            text: 'A国家 +00',
                            type: 'normal',
                            value: 'code8'
                        }
                    ]
                },
                {
                    title: 'B',
                    list: [
                        {
                            text: 'B国家 +00',
                            type: 'normal',
                            value: 'code9'
                        },
                        {
                            text: 'B国家 +00',
                            type: 'normal',
                            value: 'code10'
                        },
                        {
                            text: 'B国家 +00',
                            type: 'normal',
                            value: 'code11'
                        }
                    ]
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

    changeData1 ( item ) {
        const { data1 } = this.state;
        const { value } = item;

        let select1 = null;
        for ( let i = 0; i < data1.length; i++ ) {
            const list = data1[i].list;
            for ( let n = 0; n < list.length; n++ ) {

                if ( list[n].value == value ) {
                    list[n].type = 'active';
                    select1 = list[n].text;
                } else {
                    list[n].type = list[n].type == 'disabled' ? 'disabled' : 'normal';
                }
            }
        }
        this.setState( {
            data1: [].concat( data1 ),
            select1,
            showSelect1: false
        } );
    }

    render () {
        const { showSelect1, select1, data1 } = this.state;
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>MoreSelect 多选项选择器</h1>
                    <h2>从下往上弹出的单选选择器</h2>
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
                    <MoreSelect
                        isShow={showSelect1}
                        title='请选择'
                        onChange={( item ) => {
                            console.log( item );
                            this.changeData1( item );
                        }}
                        onClose={() => {
                            console.log( 'onClose' )
                            this.setState( {
                                showSelect1: false
                            } )
                        }}
                        data={data1}
                    />
                </div>
            </div>
        );
    }
}