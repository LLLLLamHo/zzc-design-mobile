import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import TouchFeedback from '../index.tsx';

test( 'Button', () => {
    const wrapper = render( <div>
        <TouchFeedback
            activeClassName='active-class'
        >
            <div className='touch-btn'>点击添加ClassName</div>
        </TouchFeedback>
        <TouchFeedback
            activeStyle={{ background: 'red' }}
        >
            <div className='touch-btn'>点击添加Style</div>
        </TouchFeedback>
        <TouchFeedback
            activeClassName='active-class'
            disabled
        >
            <div className='touch-btn'>禁止触发touch</div>
        </TouchFeedback>
    </div> );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );