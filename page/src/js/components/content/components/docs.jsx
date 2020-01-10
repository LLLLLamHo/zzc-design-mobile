import React, {
    Component
} from 'react';
import { BackTop } from 'antd';
import DemoBox from './demo';

export default class Docs extends Component {
    getContent() {
        const { index, data } = this.props;
        return <div dangerouslySetInnerHTML={{ __html: data.configData[index].mdContent }} />;
    }

    render() {
        const { index, data } = this.props;
        return (
            <div className='zzc-demo-docs'>
                <div className='markdown-body'>
                    { this.getContent()}
                </div>
                { ( index != 'index' && index != 'change' && index != 'pull' ) && <DemoBox data={data.configData[index]} index={index} />}
                <BackTop />
            </div>
        );
    }
}