import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import Demo from '../src/App.jsx';

test( 'toast', () => { 
  const wrapper = render( <Demo /> );
  expect(renderToJson(wrapper)).toMatchSnapshot();
} );