import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import InputItem from '../index.tsx';

test( 'InputItem', () => {
    const wrapper = render( <div>
        <InputItem />
    </div> );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );
