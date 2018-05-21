import React from 'react';
import {render} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import Popup from '../index.tsx';
test( 'Modal', () => {
    const wrapper = render(
        <Popup
            maskClose={true}
            visible={true}
        >
            <h1>123</h1>
        </Popup>
    );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

