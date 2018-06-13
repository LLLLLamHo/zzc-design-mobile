import React, {
    Component
} from 'react';
import './index.scss';

export default class Header extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='zzc-demo-header'>
                <div className='zzc-demo-title'>
                    <h1>{data.name}</h1>
                    <p>{data.name_cn}</p>
                </div>
                <div className='zzc-demo-version'>
                    <p>当前版本：{data.version}</p>
                </div>
            </div>
        );
    }
}