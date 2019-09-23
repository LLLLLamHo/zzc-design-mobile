import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import EasyCalculator from '../index.tsx';

test( 'Button', () => {
  const wrapper = render( <div>
    <EasyCalculator defaultValue={0} />
    <EasyCalculator defaultValue={3} step={2} min={0} max={10} />
    <EasyCalculator defaultValue={1.2} step={0.2} min={0} max={10} />
  </div> );
  expect( renderToJson( wrapper ) ).toMatchSnapshot();
} );