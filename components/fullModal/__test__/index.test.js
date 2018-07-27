import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import FullModal from '../index.tsx';

test( 'Modal', () => {
    const wrapper = render( <div>
        <FullModal
            visible
            title='这是一个标题'
            closeCallback={() => {}}
        >
            <div className='modal-text'>这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案，这里是说明文案</div>
        </FullModal>
    </div> );
    expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

