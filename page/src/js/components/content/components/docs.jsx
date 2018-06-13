import React, {
    Component
} from 'react';

export default class Docs extends Component {
    getContent() {
        const { index, data } = this.props;
        return <div dangerouslySetInnerHTML={{ __html: data.configData[index].mdContent }} />;
    }

    render() {
        return (
            <div className='zzc-demo-docs'>
                <div className='markdown-body'>
                    {this.getContent()}
                </div>
            </div>
        );
    }
}