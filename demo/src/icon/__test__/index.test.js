import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';

import Demo from '../src/App.jsx';

test( 'toast', () => { 
  const wrapper = render( <Demo /> );
  expect(renderToJson(wrapper)).toMatchSnapshot();
} );