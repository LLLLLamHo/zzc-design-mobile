import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Icon from '../index.tsx';

test( 'Button', () => {
  const wrapper = render( <div>
    <Icon type="success" />
    <Icon type="error" />
    <Icon type="waring" />
  </div> );
  expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );