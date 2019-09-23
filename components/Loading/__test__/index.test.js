import React from 'react';
import {render} from 'enzyme';
import {renderToJson} from 'enzyme-to-json';

import Loading from '../index.tsx';
test( 'Modal', () => {
    const wrapper = render( <div>
        <Loading
            visible={true}
            text='努力加载中....'
            closeCallback={() => {console.log(123)}}
        />
    </div> );
  expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );

