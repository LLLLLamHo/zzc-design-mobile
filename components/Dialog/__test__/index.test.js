import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import Dialog from '../index.tsx';

test( 'Dialog', () => {
    const wrapper = render( <div>
        <Dialog
            visible='这是一个标题'
        >
            <div className='modal-text'>这是一个文案...</div>
        </Dialog>
    </div> );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

