import React, {Component} from 'react';
import {Picker, Card} from 'zzc-design-mobile';
import './index.scss';
import '../../../style/style.scss';

export default class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
    }

    render() {
        return (
            <div className='zzc-demo'>
                <div className='zzc-demo-header'>
                    <h1 className='zzc-demo-title'>Picker 滚动选择框</h1>
                    <h2>提供多级联动滚动选择</h2>
                </div>
                <div className='zzc-demo-body full'>
                    <Card full>
                        <Card.Body>
                            <div className='card-box2'>
                                <p>打开时间选择框</p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Picker />
            </div>
        );
    }
}