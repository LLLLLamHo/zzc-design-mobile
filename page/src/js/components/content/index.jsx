import React, {
    Component
} from 'react';
import ZZCMenu from './components/menu';
import Docs from './components/docs';
import './index.scss';

export default class Content extends Component {
    render() {
        const { data, index, changeTab } = this.props;
        return (
            <div className='zzc-demo-content'>
                <ZZCMenu changeTab={changeTab} index={index} data={data.categoryData} />
                <Docs index={index} data={data} />
            </div>
        );
    }
}