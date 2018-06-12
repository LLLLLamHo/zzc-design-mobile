import React from 'react';
import {render} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';
import DatePicker from '../index.tsx';
test( 'Modal', () => {
    const wrapper = render(
        <DatePicker
            visible
            mode='datetime'
            selectTime='2019-1-2 12:30'
        />
    );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

