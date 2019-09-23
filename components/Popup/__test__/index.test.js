import React from 'react';
import {render} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Popup from '../index.tsx';
test( 'Modal', () => {
    const wrapper = render(
        <div>
            <Popup
                maskClose={true}
                visible={true}
            >
                <h1>123</h1>
            </Popup>
            <Popup
                maskClose
                preRender
                visible={false}
                onClose={() => {}}
            >
                <div className='card-box2'>
                    <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                    <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                    <p>文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容</p>
                </div>
            </Popup>
        </div>
    );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

