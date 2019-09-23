import React, { PureComponent } from 'react';
import { Card2, Icon, Toast } from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends PureComponent {
    render () {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Card2 卡片</h1>
                    <h2>新的卡片ui布局规范</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <h5>基本使用</h5>
                    <Card2>
                        <Card2.Header
                            title={<p>只有标题</p>}
                        />
                    </Card2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card2>
                        <Card2.Header
                            title={<p>标题加上图标</p>}
                            extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
                        />
                    </Card2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card2>
                        <Card2.Header
                            title={<p>图标点击</p>}
                            extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
                            extraClick={() => {
                                Toast.info( '点击图标', 2 );
                            }}
                        />
                    </Card2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card2>
                        <Card2.Header
                            title={<p>带有内容的Item</p>}
                            extra={<Icon type='success' style={{ width: '20px', height: '30px' }} />}
                            extraClick={() => {
                                Toast.info( '点击图标', 2 );
                            }}
                        >
                            <div>内容项描述内容项描述内容项描述内容项描述</div>
                        </Card2.Header>
                        <Card2.Body>
                            <ol>
                                <li><p>文本信息</p></li>
                                <li><p>文本信息</p></li>
                                <li><p>文本信息</p></li>
                            </ol>
                        </Card2.Body>
                    </Card2>
                </div>
            </div>
        );
    }
}